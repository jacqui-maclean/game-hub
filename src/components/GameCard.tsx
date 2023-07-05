import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { name, parent_platforms, background_image } = game;
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={background_image} />
      <CardBody>
        <Heading fontSize="2xl">{name}</Heading>
        <PlatformIconList platforms={parent_platforms.map((p) => p.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
