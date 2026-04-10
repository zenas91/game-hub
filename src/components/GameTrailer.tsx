import useTrailer from "@/hooks/useTrailer";
import { Box, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  const firstVideo = data?.results[0];

  return firstVideo ? (
    <video src={firstVideo.data[480]} poster={firstVideo.preview} controls />
  ) : null;
};

export default GameTrailer;
