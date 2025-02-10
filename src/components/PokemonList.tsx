import {
  CircularProgress,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { useNavigate } from "react-router";
import { useGetPokemonListQuery } from "../app/api/services/pokemonApi.ts";

const PokemonList: React.FC = () => {
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetPokemonListQuery({
    limit: 100,
    offset: 55,
  });

  if (isLoading)
    return <CircularProgress sx={{ display: "block", margin: "20px auto" }} />;
  if (error)
    return <Typography color="error">Error fetching Pokémon data.</Typography>;

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Pokémon List
      </Typography>
      <List sx={{ width: "100%" }}>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {data?.results.map((pokemon) => (
            <Grid size={3} key={pokemon.name}>
              <ListItem
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`pokemon/${pokemon.name}`);
                }}
              >
                <Stack>
                  {" "}
                  <Typography sx={{ textTransform: "capitalize" }}>
                    {pokemon.name}
                  </Typography>
                </Stack>
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </List>
    </>
  );
};

export default PokemonList;
