import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Profile() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image=" https://media.istockphoto.com/photos/m-the-best-asset-in-my-business-picture-id1311655328?b=1&k=20&m=1311655328&s=170667a&w=0&h=D_xRHn51xcmxMnO5VXOOhDgQzmGv2czQQqBIrs4bt8w="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Štefan Štefančík
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Name: Štefan Štefančík<br/>
           Email Id: stefan@gmail.com<br/>
           Age: 22<br/>
           Interests: Nature Images,Mountain Images , Pictures, Travel Images, Fashion.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit Profile
        </Button>
      </CardActions>
    </Card>
  );
}