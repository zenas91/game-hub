import useGameDetail from "@/hooks/useGameDetail";
import { Heading, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { data: game, error } = useGameDetail();
  return (
    <>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
