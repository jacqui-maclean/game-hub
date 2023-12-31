import { useState } from "react";
import "./App.css";
import { Box, Button, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
  searchTerm: string | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSubmit={(searchTerm) => setGameQuery({ ...gameQuery, searchTerm })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding="5">
          <GenreList
            onSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
            gameQuery={gameQuery}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                onSelect={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
                gameQuery={gameQuery}
              />
            </Box>
            <SortSelector
              onSelect={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              gameQuery={gameQuery}
            />
            <Button
              onClick={() => {
                setGameQuery({ ...gameQuery, sortOrder: null, platform: null });
              }}
              marginLeft={5}
            >
              Clear
            </Button>
          </Flex>
        </Box>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
