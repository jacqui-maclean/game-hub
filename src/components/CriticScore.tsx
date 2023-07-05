import { Game } from "../hooks/useGames";
import { Text } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score < 85 ? "red" : score < 90 ? "yellow" : "green";
  // 100-90 green    85-90 yellow   0-85 red
  return (
    <Text color={color} as="b">
      {score}
    </Text>
  );
};

export default CriticScore;
