import { Box, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react'
import LatestBlogCard from './LatestBlogCard';
import './SideBar.css'

const SideBar = () => {
    return (
        <Box sx={{ mt: '10px' }}>
            <Typography variant='h4' sx={{mb: '18px', pl: '24px'}}>
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
