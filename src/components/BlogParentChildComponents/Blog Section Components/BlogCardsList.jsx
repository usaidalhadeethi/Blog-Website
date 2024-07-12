import { useEffect, useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import BlogCard from './BlogCard';
import axios from 'axios';
import Categories from './Categories';
import { Typography } from '@mui/material';
import { SearchContext } from '../../../assets/contexts/SearchContext';

const BlogCardsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const {searchInput, } = useContext(SearchContext);
  const filteredBlogs = blogs.filter(blog =>
    (selectedCategory === 'All' || blog.category === selectedCategory) &&
    (blog.title.toLowerCase().includes(searchInput.toLowerCase()) || blog.title.toLowerCase().startsWith(searchInput.toLowerCase()))
  );

  useEffect(() => {
    axios.get('http://localhost:5000/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  return (
    <div>
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Grid container spacing={3} sx={{ mt: '8px' }}>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <Grid item xs={12} md={4} key={index}>
              <BlogCard
                id={blog.id}
                title={blog.title}
                author={blog.author}
                published_date={blog.published_date}
                image={blog.image}
              />
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
    </div>
  );
};

export default BlogCardsList;
