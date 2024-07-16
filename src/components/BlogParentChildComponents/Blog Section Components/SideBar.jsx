import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react';
import LatestBlogCard from './LatestBlogCard';
import './SideBar.css'
import axios from 'axios';

const SideBar = () => {
    const [latestBlogs, setLatestBlogs] = useState([]);
    
    useEffect(() => {
        axios.get('/blogsData.json') 
            .then(response => {
                setLatestBlogs(response.data);
            })
            .catch(error => {
                console.log('Error fetching latest blogs: ', error);
            });
    }, []);
    return (
        // <Box sx={{ml: '175px'}}>
        <Box sx={{mt: {xs:'50px', md:'0'}, px:{xs:'15px', md:0}}}>
            <Typography variant='h4' sx={{mb: '18px', mt: '-8px'}}>
                Latest Blogs
            </Typography>

            {latestBlogs.slice(10,20).map ((latestBlog, index) => (
                <LatestBlogCard key={index} title={latestBlog.title} id={latestBlog.id}/>
            ))}
        </Box>
    )
}

export default SideBar
