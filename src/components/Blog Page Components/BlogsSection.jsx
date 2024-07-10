import React from 'react'
import Categories from './Blog Section Components/Categories'
import BlogCardsList from './Blog Section Components/BlogCardsList'
import SideBar from './Blog Section Components/SideBar'
import { Box, Container, Grid } from '@mui/material';

const BlogsSection = () => {
    return (
        <Container sx={{
            maxWidth: '100%',
            marginTop: '20px',
            [`@media (min-width: 600px)`]: {
              maxWidth: '90%',
            },
          }}>

                <Categories/>

                <Grid container sx={{m: '20px 0 50px'}} spacing={2}>
                    <Grid item xs={12} md={9}>
                        <BlogCardsList/>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <SideBar/>
                    </Grid>
                </Grid>

            </Container>
    )
}

export default BlogsSection
