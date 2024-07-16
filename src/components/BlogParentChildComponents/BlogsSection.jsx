import BlogCardsList from './Blog Section Components/BlogCardsList';
import SideBar from './Blog Section Components/SideBar';
import { Box, Container } from '@mui/material';

const BlogsSection = () => {
  return (
    <Container
      id="BlogsSection"
      sx={{
        maxWidth: '100%',
        // marginTop: '20px',
        [`@media (min-width: 600px)`]: {
          maxWidth: '90%',
        },
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, m: '50px 0', gap: '6%' }}
      >
        <Box sx={{ flex: '0 0 72%' }}>
          <BlogCardsList />
        </Box>
        <Box sx={{ flex: '0 0 22%' }}>
          <SideBar />
        </Box>
      </Box>
    </Container>
  );
};

export default BlogsSection;
