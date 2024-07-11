import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import './BlogCard.css'
import { Link } from 'react-router-dom';

export default function BlogCard() {
  return (
    <Link>
      <Card sx={{ maxWidth: 330, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', mb: '20px', height:'370px'}} >
        <CardMedia
          sx={{ height: 150 }}
          image="https://cdn.motor1.com/images/mgl/MkO9NN/s1/future-supercars.webp"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{maxHeight: '130px' ,overflow: 'hidden', '&:hover':{color:'#0485db'}}}>
            Lizard Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, blanditiis veniam! Vitae aut cupiditate, doloribus accusantium aperiam distinctio harum autem quae nobis quaerat adipisci dolorum modi similique reiciendis voluptatum voluptates?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{mb: '6px'}}>
            <PersonIcon/> ahmed alhh
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            Lizards
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
