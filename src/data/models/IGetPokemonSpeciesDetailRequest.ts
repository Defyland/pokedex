export interface IGetPokemonSpeciesDetailRequest {
  egg_groups: IEggGroup[];
}

export interface IEggGroup {
  name: string;
  url: string;
}
