import { useEffect, useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import BlogCard from './BlogCard';
import axios from 'axios';
import Categories from './Categories';
import { Typography, Box } from '@mui/material';
import { SearchContext } from '../../../assets/contexts/SearchContext';
import Pagination from './Pagination';

const BlogCardsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { searchInput } = useContext(SearchContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredBlogs = blogs.filter(blog =>
    (selectedCategory === 'All' || blog.category === selectedCategory) &&
    (blog.title.toLowerCase().includes(searchInput.toLowerCase()) || blog.title.toLowerCase().startsWith(searchInput.toLowerCase()))
  );

  const totalItems = filteredBlogs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    axios.get('/blogsData.json')
      .then(response => {
        setBlogs(response.data);
        setCurrentPage(1);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages]);

  const currentItems = filteredBlogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Grid container spacing={3} sx={{ mt: '8px' }}>
        {currentItems.length > 0 ? (
          currentItems.map((blog, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  '@media (max-width: 600px)': {
                    justifyContent: 'center',
                  },
                }}
              >
                <BlogCard
                  id={blog.id}
                  title={blog.title}
                  author={blog.author}
                  published_date={blog.published_date}
                  image={blog.image}
                />
              </Box>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
              No results found
            </Typography>
          </Grid>
        )}
      </Grid>
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: '20px' }}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </Box>
      )}
    </div>
  );
};

export default BlogCardsList;
