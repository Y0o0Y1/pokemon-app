import {
  Avatar,
  Button,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useGetPokemonListQuery } from "../app/api/services/pokemonApi.ts";

const IMAGE_BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/";

const PokemonList: React.FC = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const offset = (page - 1) * itemsPerPage;

  const { data, error } = useGetPokemonListQuery({
    limit: itemsPerPage,
    offset,
  });

  if (error)
    return <Typography color="error">Error fetching Pokémon data.</Typography>;

  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ width: "100%", height: "100%" }}
      >
        <Typography variant="h5" gutterBottom>
          Pokémon List
        </Typography>
        <Stack
          direction="column"
          alignItems="center"
          spacing={1}
          sx={{ mb: 2 }}
        >
          <InputLabel sx={{ mb: 2 }}>Items per page</InputLabel>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(e.target.value as number);
                setPage(1); // Reset to first page when changing items per page
              }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>

      <List sx={{ width: "100%" }}>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {data?.results.map((pokemon) => {
            const id = pokemon.url.split("/").filter(Boolean).pop();
            const imageUrl = `${IMAGE_BASE_URL}${id}.png`;
            return (
              <Grid size={3} key={pokemon.name}>
                <ListItem
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`pokemon/${pokemon.name}`);
                  }}
                >
                  <Stack
                    direction="row"
                    gap={1}
                    alignItems="center"
                    sx={{ height: "100%" }}
                  >
                    {" "}
                    <Avatar src={imageUrl} alt={pokemon.name} />
                    <Typography sx={{ textTransform: "capitalize" }}>
                      {pokemon.name}
                    </Typography>
                  </Stack>
                </ListItem>
              </Grid>
            );
          })}
        </Grid>
      </List>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems={"center"}
        gap={2}
        sx={{ mt: 3 }}
      >
        <Button
          variant="contained"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </Button>
        <Typography>Page {page}</Typography>
        <Button
          variant="contained"
          disabled={!data?.next} // Disable if no more pages
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </Stack>
    </>
  );
};

export default PokemonList;
