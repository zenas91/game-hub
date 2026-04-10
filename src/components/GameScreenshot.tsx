import useScreenshots from "@/hooks/useScreenShot";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={3}>
      {data?.results.map((image, index) => (
        <Image key={image.id} src={image.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
