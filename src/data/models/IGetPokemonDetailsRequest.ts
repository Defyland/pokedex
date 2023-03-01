export interface IGetPokemonDetailsRequest {
  id: number;
  types: IType[];
  img: string;
}

export interface IGetPokemonDetailsFullRequest extends IFullPokemon {}

export interface ITypeDefinition {
  name: string;
  url: string;
}

export interface IType {
  slot: number;
  type: ITypeDefinition;
}

export interface IAbilityDefinition {
  name: string;
  url: string;
}

export interface IAbility {
  ability: IAbilityDefinition;
  is_hidden: boolean;
  slot: number;
}

export interface IForm {
  name: string;
  url: string;
}

export interface IVersion {
  name: string;
  url: string;
}

export interface IGameIndice {
  game_index: number;
  version: IVersion;
}

export interface IMoveDefinition {
  name: string;
  url: string;
}

export interface IMoveLearnMethod {
  name: string;
  url: string;
}

export interface IVersionGroup {
  name: string;
  url: string;
}

export interface IVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: IMoveLearnMethod;
  version_group: IVersionGroup;
}

export interface IMove {
  move: IMoveDefinition;
  version_group_details: IVersionGroupDetail[];
}

export interface ISpecies {
  name: string;
  url: string;
}

export interface IDreamWorld {
  front_default: string;
  front_female?: any;
}

export interface IHome {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface IOfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface IOther {
  dream_world: IDreamWorld;
  home: IHome;
  'official-artwork': IOfficialArtwork;
}

export interface IRedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface IYellow {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface IGenerationI {
  'red-blue': IRedBlue;
  yellow: IYellow;
}

export interface ICrystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface IGoldSilver {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface IGenerationIi {
  crystal: ICrystal;
  gold: IGoldSilver;
  silver: IGoldSilver;
}

export interface IEmerald {
  front_default: string;
  front_shiny: string;
}

export interface IFireredLeafgreenRubySapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface IGenerationIii {
  emerald: IEmerald;
  'firered-leafgreen': IFireredLeafgreenRubySapphire;
  'ruby-sapphire': IFireredLeafgreenRubySapphire;
}

export interface DiamondPearlHeartgoldSoulsilverPlatinum {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface IGenerationIv {
  'diamond-pearl': DiamondPearlHeartgoldSoulsilverPlatinum;
  'heartgold-soulsilver': DiamondPearlHeartgoldSoulsilverPlatinum;
  platinum: DiamondPearlHeartgoldSoulsilverPlatinum;
}

export interface IAnimated {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface IBlackWhite {
  animated: IAnimated;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface IGenerationV {
  'black-white': IBlackWhite;
}

export interface IOmegarubyAlphasapphireXY {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface IGenerationVi {
  'omegaruby-alphasapphire': IOmegarubyAlphasapphireXY;
  'x-y': IOmegarubyAlphasapphireXY;
}

export interface IIcons {
  front_default: string;
  front_female?: any;
}

export interface IUltraSunUltraMoon {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface IGenerationVii {
  icons: IIcons;
  'ultra-sun-ultra-moon': IUltraSunUltraMoon;
}

export interface IIcons2 {
  front_default: string;
  front_female?: any;
}

export interface IGenerationViii {
  icons: IIcons2;
}

export interface IVersions {
  'generation-i': IGenerationI;
  'generation-ii': IGenerationIi;
  'generation-iii': IGenerationIii;
  'generation-iv': IGenerationIv;
  'generation-v': IGenerationV;
  'generation-vi': IGenerationVi;
  'generation-vii': IGenerationVii;
  'generation-viii': IGenerationViii;
}

export interface ISprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: IOther;
  versions: IVersions;
}

export interface IStatDefinition {
  name: string;
  url: string;
}

export interface IStat {
  base_stat: number;
  effort: number;
  stat: IStatDefinition;
}

export interface ITypeDefinition {
  name: string;
  url: string;
}

export interface IType {
  slot: number;
  type: ITypeDefinition;
}

export interface IFullPokemon {
  abilities: IAbility[];
  base_experience: number;
  forms: IForm[];
  game_indices: IGameIndice[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMove[];
  name: string;
  order: number;
  past_types: any[];
  species: ISpecies;
  sprites: ISprites;
  stats: IStat[];
  types: IType[];
  weight: number;
}
