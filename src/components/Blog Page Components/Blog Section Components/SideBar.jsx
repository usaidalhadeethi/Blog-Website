import { Box, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react'
import LatestBlogCard from './LatestBlogCard';
import './SideBar.css'

const SideBar = () => {
    return (
        // <Box sx={{ml: '175px'}}>
        <Box sx={{mt: {xs:'50px', md:'0'}, px:{xs:'30px', md:0}}}>
            <Typography variant='h4' sx={{mb: '18px', mt: '-8px'}}>
                Latest Blogs
            </Typography>

            <LatestBlogCard/>
            <LatestBlogCard/>
            <LatestBlogCard/>
            <LatestBlogCard/>
            <LatestBlogCard/>
        </Box>
    )
}

export default SideBar
