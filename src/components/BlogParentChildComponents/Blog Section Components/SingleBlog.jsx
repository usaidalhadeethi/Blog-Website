import { Box, Typography, Container, CardMedia } from '@mui/material';
import SideBar from './SideBar';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useLoaderData } from 'react-router-dom';

const SingleBlog = () => {
    const { blog } = useLoaderData();
    const { title, image, author, published_date, reading_time, content } = blog;

    return (
        <Container
        id="BlogsSection"
        sx={{
            maxWidth: '100%',
            marginTop: '20px',
            [`@media (min-width: 600px)`]: {
            maxWidth: '90%',
            },
        }}
        >
            <Box
                sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                m: { sm: '0', md: '50px 0' },
                gap: '6%',
                }}
            >
                <Box sx={{ flex: '0 0 70%' }}>
                    <CardMedia
                        component="img"
                        image={image}
                        alt={title}
                        sx={{ width: '100%', borderRadius: '8px' }}
                    />
                    <Typography variant="h4" sx={{ mt: '25px', color: '#0485db' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: '10px' }}>
                        <PersonIcon /> {author} - {published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: '10px' }}>
                        <AccessTimeIcon /> {reading_time}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: '10px', lineHeight: '25px' }}>
                        {content}
                    </Typography>
                </Box>

                <Box sx={{ flex: '0 0 26%' }}>
                    <SideBar />
                </Box>
            </Box>
        </Container>
    );
};

export default SingleBlog;
