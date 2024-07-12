import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import './BlogCard.css';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, author, published_date, image }) => {
  return (
    <Link to={`/blogs/${id}`} key={id}>
      <Card sx={{ maxWidth: 330, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', mb: '20px', height: '370px' }}>
        <CardMedia
          sx={{ height: 150 }}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{ maxHeight: '130px', overflow: 'hidden', '&:hover': { color: '#0485db' } }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: '6px' }}>
            <PersonIcon /> {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Published: {published_date}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
