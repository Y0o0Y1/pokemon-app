import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonByIdQuery } from "../app/api/services/pokemonApi.ts";

const PokemonDetails: React.FC = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetPokemonByIdQuery(id ?? "");

  if (isLoading)
    return <CircularProgress sx={{ display: "block", margin: "20px auto" }} />;
  if (error)
    return (
      <Typography color="error">Error fetching Pokémon details.</Typography>
    );

  return (
    <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
      <CardMedia
        component="img"
        image={data.sprites.front_default}
        alt={data.name}
      />
      <CardContent>
        <Typography variant="h5">{data.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonDetails;
