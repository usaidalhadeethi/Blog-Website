import { Box, Button } from '@mui/material';

const Categories = ({selectedCategory ,setSelectedCategory }) => {
  const categories = ['All', 'Security', 'AI', 'Tech'];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: {xs: 'center', md: 'start'},
        flexWrap: 'wrap',
        gap: 2,
        p: 1,
        borderBottom: '1px solid #b7b7b7',
        marginTop: '45px',
        marginLeft: {xs: '0', md: '8px'}
      }}
    >
      {categories.map((category, index) => (
        <Button
          key={index}
          onClick={() => setSelectedCategory(category)}
          sx={{
              py: 1,
              px: 2,
              background: category === selectedCategory? '#f65100' : 'linear-gradient(45deg, #003366, #006699)',
              color: 'white',
              borderRadius: '2px',
              width: '110px',
              textAlign: 'center',
              fontWeight: 'bold',
              '&:hover': {
                  background: category === selectedCategory? '#b24a16' :'linear-gradient(45deg, #002244, #004488)',
              },
          }}
        >
          {category}
        </Button>
      ))}
    </Box>
  );
};

export default Categories;
