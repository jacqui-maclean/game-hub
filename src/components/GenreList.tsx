import { HStack, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/crop-image";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map(({ id, image_background, name, slug }) => (
        <li key={id}>
          <HStack paddingY="5px">
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(image_background)}
            />
            <Text fontSize="lg">{name}</Text>
          </HStack>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
