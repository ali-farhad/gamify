import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import './App.css';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';
import Footer from './components/Footer';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function App() {

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid 
    templateAreas={{
      base: `"nav" "main" "footer"`,
      lg: `"nav nav nav" "aside main main" "footer footer footer"`
    }}
    templateColumns={{
      base: "1fr",
      lg: "250px 1fr"
    }}
    >

      <GridItem area="nav" mb="15px" px="15px">
          <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
      </GridItem>

      <Show above="lg">
          <GridItem area="aside" px="25px">
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
          </GridItem>
      </Show>

      <GridItem area="main" px="15px">
          <GameHeading gameQuery={gameQuery}/>
          <HStack spacing={5} mb={5}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
          </HStack>
          <GameGrid gameQuery={gameQuery}/>
      </GridItem>

      <GridItem area="footer">
          <Footer/>
      </GridItem>

    </Grid>
  )
}

export default App
