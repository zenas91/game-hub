import useGames from "@/hooks/useGames";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import useGameQueryStore from "@/store";
import { Navigate, useNavigate } from "react-router-dom";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const setSlug = useGameQueryStore((s) => s.setSlug);
  const navigate = useNavigate();
  const Skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const totalFetchedGames =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={totalFetchedGames}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
      next={() => fetchNextPage()}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={10} gap={5}>
        {isLoading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton} onClick={() => null}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results.map((game) => (
              <GameCardContainer
                key={game.id}
                onClick={() => {
                  setSlug(game.slug);
                  navigate(`games/${game.slug}`);
                }}
              >
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
