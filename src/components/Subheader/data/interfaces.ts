export namespace ISubheader {
  export interface View {
    filter: 'all' | 'catchs';
    setFilter: React.Dispatch<React.SetStateAction<'all' | 'catchs'>>;
  }
  export interface ModelProps extends View {}
  export interface Model extends View {}
}
