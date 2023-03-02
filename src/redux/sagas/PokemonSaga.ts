import {put, takeEvery, delay} from 'redux-saga/effects';
import {API_IMAGE_URL} from '~/configs/constants';
import {AxiosHttpClient} from '~/utils/api';
import {
  GetPokemons,
  GetPokemonDetails,
  GetPokemonSpeciesDetail,
} from '~/data/useCases';
import {
  IGetPokemons,
  IGetPokemonDetails,
  IGetPokemonSpeciesDetail,
} from '~/data/dataInterfaces';
import {ISimplePokemon} from '~/data/models';
import {
  pokemonsFetchSuccess,
  pokemonsFetchError,
} from '~/redux/reducers/Pokemon';
import {
  pokemonDetailsSuccess,
  pokemonDetailsError,
} from '~/redux/reducers/PokemonDetail';

const GetPokemonsInstance = new GetPokemons(AxiosHttpClient);
const GetPokemonDetailsInstance = new GetPokemonDetails(AxiosHttpClient);
const GetPokemonSpeciesInstance = new GetPokemonSpeciesDetail(AxiosHttpClient);

const pokemonsDetails = async (pokemons: ISimplePokemon[]) =>
  await Promise.all(
    pokemons.map(async (pokemon: ISimplePokemon) => {
      const {data: detailData} = await GetPokemonDetailsInstance.send({
        pokemonUrl: pokemon.url,
      });
      return {
        name: pokemon.name,
        id: detailData.id,
        details: pokemon.url,
        types: detailData.types,
        img: `${API_IMAGE_URL}${detailData.id}.png`,
      };
    })
  );

function* getPokemons(action: any) {
  const {data, status}: IGetPokemons.Response = yield GetPokemonsInstance.send({
    url: action.payload.url,
  });

  const payloadsPokemons: IGetPokemonDetails.Response = yield pokemonsDetails(
    data.results
  );

  yield put(
    status === 'Ok'
      ? pokemonsFetchSuccess({next: data.next, pokemons: payloadsPokemons})
      : pokemonsFetchError()
  );
}

function* getPokemonDetails(action: any) {
  const pokemonUrl = action.payload;

  const {data, status}: IGetPokemonDetails.Response =
    yield GetPokemonDetailsInstance.send({
      pokemonUrl,
    });

  const {data: dataSpecies}: IGetPokemonSpeciesDetail.Response =
    yield GetPokemonSpeciesInstance.send({
      id: data.id,
    });

  data.egg_groups = dataSpecies.egg_groups;

  yield delay(2000);

  yield put(
    status === 'Ok' ? pokemonDetailsSuccess(data) : pokemonDetailsError()
  );
}

export function* wacthGetPokemons() {
  yield takeEvery('Pokemon/pokemonsFetch', getPokemons);
  yield takeEvery('PokemonDetail/pokemonDetailsFetch', getPokemonDetails);
}
