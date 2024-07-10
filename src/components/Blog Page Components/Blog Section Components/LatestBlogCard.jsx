import { Box, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react'

const LatestBlogCard = () => {
    return (
        <Box sx={{p: '0 20px 6px', m: '0 0 25px 10px', borderBottom: '1px solid #d0d0d0'}}>
            <Typography variant='body1' sx={{mb: '14px'}} className='leading-snug'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ab laborum odio accusantium commodi reprehenderit quam deserunt? Omnis velit a, repudiandae id cupiditate voluptatum totam ex ut nam minima sequi.
            </Typography>

            <Typography variant="body2" color="text.secondary">
                Read more <ArrowForwardIcon/>
            </Typography>
        </Box>
    )
}

export default LatestBlogCard
