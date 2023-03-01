export namespace IHeader {
  export interface View {}
  export interface ModelProps {}
  export interface Model {
    query: string;
    updateQuery: (text: string) => void;
  }
}
