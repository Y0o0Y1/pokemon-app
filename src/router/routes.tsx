import {RouteObject} from "react-router-dom";
import PokemonList from "../components/PokemonList.tsx";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <PokemonList/>,

    },
];

export default routes
