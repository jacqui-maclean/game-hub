import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/crop-image";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { name, parent_platforms, background_image, metacritic } = game;
  return (
    <Card>
      <Image src={getCroppedImageUrl(background_image, "medium")} />
      <CardBody>
        <Heading fontSize="2xl">{name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
