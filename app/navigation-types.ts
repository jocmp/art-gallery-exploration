import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Props as ArtworkProps } from '@/app/artwork';

export type RootStackParamList = {
  artwork: ArtworkProps,
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
