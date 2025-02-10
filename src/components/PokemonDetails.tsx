import React from 'react';
import { CircularProgress, Typography, Card, CardMedia, CardContent } from '@mui/material';
import {useGetPokemonByIdQuery} from "../app/api/pokemonApi";

type PokemonDetailsProps = {
    pokemonName: string;
};

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemonName }) => {
    const { data, error, isLoading } = useGetPokemonByIdQuery(pokemonName);

    if (isLoading) return <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />;
    if (error) return <Typography color="error">Error fetching Pokémon details.</Typography>;

    return (
        <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
            <CardMedia component="img" image={data.sprites.front_default} alt={data.name} />
            <CardContent>
                <Typography variant="h5">{data.name}</Typography>
            </CardContent>
        </Card>
    );
};

export default PokemonDetails;
