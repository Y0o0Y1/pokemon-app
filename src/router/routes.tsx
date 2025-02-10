import { RouteObject } from "react-router-dom";
import PokemonDetails from "../components/PokemonDetails.tsx";
import PokemonList from "../components/PokemonList.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <PokemonList />,
  },
  {
    path: "/pokemon/:id",
    element: <PokemonDetails />,
  },
];

export default routes;
