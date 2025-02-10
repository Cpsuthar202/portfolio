import { ReactNode } from "react";
import { Container } from "@mui/material";
interface ContainerProps {
  children: ReactNode; // Define the type for children
}

export const CommonContainer: React.FC<ContainerProps> = ({ children }) => {
  return <Container sx={{ display: "flex", flexDirection: "column", gap: 2, p: 3 }}>{children}</Container>;
};
