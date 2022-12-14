import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Link } from '@mui/material';
import Page from '../../routes/Page';

export default function PokemonCard({ name, image, types, url }) {
  return (
    <Link href={url}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {types[0].type.name}
            </Typography>
            {/*<Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>*/}
          </CardContent>
        </CardActionArea>
        {/*<CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          </CardActions> */}
      </Card>
    </Link>
  );
}
