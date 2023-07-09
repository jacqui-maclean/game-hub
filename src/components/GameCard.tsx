import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/crop-image";
import Emoji from "../components/Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { name, parent_platforms, background_image, metacritic, rating_top } =
    game;
  return (
    <Card>
      <Image src={getCroppedImageUrl(background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
        <Heading fontSize="2xl">{name}</Heading>
        <Emoji rating_top={rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
