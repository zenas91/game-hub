import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}
const GameCardContainer = ({ children, onClick }: Props) => {
  return (
    <Box
      onClick={onClick}
      borderRadius={10}
      overflow="hidden"
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: "scale(1.03)" }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
