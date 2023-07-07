import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/crop-image";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";
interface Props {
  onSelect: (genre: Genre) => void;
  gameQuery: GameQuery;
}

const GenreList = ({ onSelect, gameQuery }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY="5px">
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={gameQuery.genre?.id == genre.id ? "bold" : "normal"}
              fontSize="lg"
              variant="link"
              onClick={() => onSelect(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
