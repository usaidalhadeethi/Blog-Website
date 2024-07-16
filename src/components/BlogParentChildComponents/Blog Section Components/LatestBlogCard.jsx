import { Box, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const LatestBlogCard = ({title, id}) => {
    return (
        <Box sx={{p: '0', m: '0 0 25px', borderBottom: '1px solid #d0d0d0'}}>
            <Typography variant='body1' sx={{mb: '14px'}} className='leading-snug'>
                {title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
                <Link to={`/blogs/${id}`} className="cursor-pointer no-underline text-[#4e4e4e] hover:text-[#0485db]">
                    Read more <ArrowForwardIcon/>
                </Link>
            </Typography>
        </Box>
    )
}

export default LatestBlogCard
