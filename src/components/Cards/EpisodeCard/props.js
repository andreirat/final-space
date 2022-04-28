import { StyleProps } from 'react-native';

export interface EpisodeCardProps {
  imageUrl: string;
  name: string;
  date: string;
  onPress: () => void;
  style: StyleProps;
}
