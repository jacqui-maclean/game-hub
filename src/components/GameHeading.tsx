import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  let { platform, genre } = gameQuery;
  const header = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="3xl" marginY={5}>
      {header}
    </Heading>
  );
};

export default GameHeading;
