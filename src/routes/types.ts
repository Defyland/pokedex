import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamsList = {
  Home: undefined;
  PokemonDetails: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList {}
  }
}

export type RootStackScreenProps<Screen extends keyof RootStackParamsList> =
  NativeStackScreenProps<RootStackParamsList, Screen>;
