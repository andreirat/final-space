export interface CharacterCardProps {
  name: string;
  imageUrl: string;
  origin: string;
  isFavorite: boolean;
  onFavoritePress: () => void;
}
