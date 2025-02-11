import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonByIdQuery } from "../app/api/services/pokemonApi.ts";
import { useNavigate } from "react-router";

const PokemonDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: PokemonData, error } = useGetPokemonByIdQuery(
    { id: id! },
    { skip: !id },
  );

  if (error)
    return (
      <Typography color="error">Error fetching Pokémon details.</Typography>
    );
  const navigateBack = () => {
    navigate(-1);
  };
  return (
    PokemonData && (
      <Stack gap={2}>
        <Box>
          <Button variant={"contained"} onClick={navigateBack}>
            Back
          </Button>
        </Box>
        <Card sx={{ maxWidth: 450 }}>
          <Stack direction="row" spacing={1}>
            <Avatar
              src={PokemonData.sprites.front_default}
              variant={"square"}
              alt={PokemonData.name}
              sx={{ width: "250px", height: "250px" }}
            />
            <Stack
              sx={{ width: "100%" }}
              divider={<Divider flexItem={true} orientation={"horizontal"} />}
            >
              <Stack>
                <Typography color={"textSecondary"} fontWeight={500}>
                  Name
                </Typography>
                <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                  {PokemonData.name}
                </Typography>
              </Stack>{" "}
              <Stack>
                <Typography color={"textSecondary"} fontWeight={500}>
                  Weight
                </Typography>
                <Typography variant="h6">{PokemonData.weight}</Typography>
              </Stack>{" "}
              <Stack>
                <Typography color={"textSecondary"} fontWeight={500}>
                  Height
                </Typography>
                <Typography variant="h6">{PokemonData.height}</Typography>
              </Stack>{" "}
              <Stack>
                <Typography color={"textSecondary"} fontWeight={500}>
                  Types
                </Typography>
                <Stack
                  direction={"row"}
                  gap={2}
                  divider={<Divider flexItem={true} orientation={"vertical"} />}
                >
                  {PokemonData.types.map((type) => {
                    return (
                      <Typography
                        variant="h6"
                        sx={{ textTransform: "capitalize" }}
                      >
                        {type.type.name}
                      </Typography>
                    );
                  })}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    )
  );
};

export default PokemonDetails;
