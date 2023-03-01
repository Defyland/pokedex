export namespace IPokeballBackground {
  export interface View {
    color?: string;
    size?: number;
  }
  export interface ModelProps extends View {}
  export interface Model extends View {}
  export interface IPokemonImage extends View {}
}
