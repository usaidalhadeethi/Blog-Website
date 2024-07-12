import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const BlogBanner = () => {
  return (
    <Box
      id="BlogBanner"
      sx={{
        textAlign: 'center',
        backgroundColor: 'primary.main',
        padding: { xs: '45px 0 65px', md: '60px 0 140px' },
      }}
    >
      <Typography variant="h3" color="white" fontWeight="bold">
        Welcome To UsBlog
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontStyle: 'italic',
          color: '#d6d4d4',
          mt: 2,
          mx: { xs: 4, md: 14 },
        }}
      >
        Discover the latest articles, stories, and insights on topics you love. Stay informed and inspired with our curated content. 
        Explore a wide range of categories, from technology and health to lifestyle and travel. Whether you're looking for in-depth analysis, 
        practical tips, or just some light reading, you'll find it here. Join our community of readers and enjoy fresh perspectives, 
        expert opinions, and engaging stories that keep you coming back for more.
      </Typography>
    </Box>
  );
};

export default BlogBanner;
