import Grid from '@mui/material/Grid';
import BlogCard from './BlogCard';  // Replace with the correct path to your BlogCard component

const MyComponent = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <BlogCard />
            </Grid>
            <Grid item xs={12} md={4}>
                <BlogCard />
            </Grid>
            <Grid item xs={12} md={4}>
                <BlogCard />
            </Grid>
            <Grid item xs={12} md={4}>
                <BlogCard />
            </Grid>
            <Grid item xs={12} md={4}>
                <BlogCard />
            </Grid>
            <Grid item xs={12} md={4}>
                <BlogCard />
            </Grid>
            <Grid item xs={12} md={4}>
                <BlogCard />
            </Grid>
            <Grid item xs={12} md={4}>
                <BlogCard />
            </Grid>
            <Grid item xs={12} md={4}>
                <BlogCard />
            </Grid>
        </Grid>
    );
};

export default MyComponent;
