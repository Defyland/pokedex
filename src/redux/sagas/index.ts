import {all, fork} from 'redux-saga/effects';
import {wacthGetPokemons} from '~/redux/sagas/PokemonSaga';

export function* rootSaga() {
  yield all([fork(wacthGetPokemons)]);
}
