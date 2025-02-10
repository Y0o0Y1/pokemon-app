import React from 'react';
import {CircularProgress, List, ListItem, Typography} from '@mui/material';
import {useGetPokemonListQuery} from "../app/api/pokemonApi";


const PokemonList: React.FC = () => {
    const { data, error, isLoading } = useGetPokemonListQuery();

    if (isLoading) return <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />;
    if (error) return <Typography color="error">Error fetching Pokémon data.</Typography>;

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Pokémon List
            </Typography>
            <List>
                {data?.results.map((pokemon) => (
                    <ListItem
                        key={pokemon.name}
                        sx={{ cursor: 'pointer' }}
                    >
                        {pokemon.name}
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default PokemonList;
