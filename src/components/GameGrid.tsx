import useGames from "@/hooks/useGames";
import apiClient from "@/services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        gap={10}
        padding={10}
      >
        {isLoading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
