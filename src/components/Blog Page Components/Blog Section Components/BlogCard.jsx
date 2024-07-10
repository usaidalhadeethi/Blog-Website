import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';

export default function BlogCard() {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', mb: '20px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABO1BMVEX///8AAAD3owDnDi1+ugC6urpGRka2trbu7u5YWFj3nwAAZp/3oAB3twDIyMj39/cUFBQBfdDc3NzmABnBwcHmAB73mwDnACfm5uaurq5ycnJTU1OVlZXz8/N+fn5fX18gICCenp4Ads3U1NQ5OTmJiYlnZ2dCQkIAXpkAWZj8/ffz+v3O5KwAf9CUxT7wgI395LsnJyf3u8L74eXmAAj+79f5tUj4xcswMDAXFxfY5e2ev9Utdqh+qMbG2ucAZJ07grGtyt3v9uDU6fhak7zN46dwsuLA3JOgzFq11ns+ltjn8dTg7sebylAniNJyocJ8teGWwuiv0u3805f2rCfrTmD5v2L6y4LpIj5YotuOwyn96sz0oKnykJqq0GnrWWj7zYsAbsv96u393K3ubHroNkvtUmb5uVP61NoH3xJcAAAJFUlEQVR4nO2ba1saRxSAl0sE18UVFBdQAfFGIMbgXdNoc2nSmDZtolESNbYmafn/v6A7c+a67AKJD4vF836J7M3Z1zNnzswQw0AQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBOmZ+v5+fdBtuGU8HqtWf3qyP+hm3CYO7h+OjR1Wfx50O24TT6qukrHqk0G34zbx+P6Yy/2ng27HbWK/Sp0cfOdtD571pTW3gfpz40X1u+Ok9svDVK1fTRo49ZdG/ZA4edz7PbVX8VTq1/61adDU08/dkcfNsi96vePZ61QqHk+96merBks9fWQYT6uHh2O9Xf/mMzHiOvmtv+0aJPXVyke3Rhmr9pRkf/sdjLgMb4o16m/TlZfu4PPi/h/dLq09eMiFxOMPhzfFGsZRJV05cgv7gxed5zy1V5+kkXjqdUjNGwh/VlbT6dV3Xa569joujaRSDx8Mc5gYB5W0K6Wy+r7DNW9+TSlG4q/fhNa6sFi31U9uQnFZTVfevg/oPEpi1UKk9mh4gmUtu9ZSPr6jgZImsfLyedvFJLGm/EJk6/jkJIzWhkNrM5v9IIOl/u5tpcKsVI70YFETqxsiv4jAOD+NmtNnfWhcctxloQ8P7owdi8Wcyebahjhy8LFSSUO0VNR0+yCuGJEhUjs+Ma1o1HykPnWqsNtozMze9HUSEZfFGz7kB/jgECvZzQ/r4lD9z1Wwspr+W2TbN9LIJzVETDNK2ZKPXChHGCMZ8nmRf4yURxPf07Z79Bk3eLkf5GIyRnEmnUsZLO+PaBdaTb/lRz6nWBb5rIbItAVGrG35xEREYdY9MKIeWEn23rZBOWkxJy7Z7JXMLM9fkmBJV3hK+Z1lEVHGn59F3U7DnJh/iQeORzSSHieR3d7bNigndjMmcTOLDBaSb9MVNvrUyIjzWcz1al+2TaaDhsn0OT8zN6EZmGhzEpnvuW2DcmJ8dWKqlaxzJTPLwce/uZP4p1faQKMYIXEizhUj3ZyUe27awJxcTMZ0SLBc87P7bFujpoQIHWh0JyKd5PibF+cLAU4iPWeUgTlpZWNe3GHoasf/6q2zdiHR6PQxP78Er10iP9vLihNyJA8nex6iB+bEbjptUjzBwvFkEcUJTyc2jLv8PWalk1HyuUTPjvOLp5aKxXxO/Q25fLG4dI8n+oE5Mb62BwobnL9qwbJ15s0iEn5NBiIhwz/PRjQnCdVJgpUxRTnlYsmonIeP0kmitLy8XOo9O9+UtoSiaPkm8u3WtmUGCIlap/wq6B3L8uGzc6qTKcXYrMgvPBLsGXFolh4QTuyGrrrv+CQUaWXzAi7aghziHyemSCfwh76n/wJvnNC4mFKSLnNYUA5NkQPCCagu9l2FwP4W7CTmNOGis8AgIU5EYQ9/6Zz+C6STogwLbSSiErVib4KIE06g5vmOCvjGBCQUYBIy7XZQJiGc8OrEpinCO2sTTsZlCLAhaARyygw5BD7LbOQmuYM7ySv9KSTWAxMKcQLLKycdlMh0YtPGlzzPp2/ZKBRK8v2NFRoMC3S8hkwBlU3JNjJ75AcyBeBO9mSXC4uNjnECTjooUdLJHG18wfN8rWYr0VcDAWR4SU6wGMiL/pHgHZA5yYvACZFmVye1Tk4skU7gVZc8j9fnxXQkTsgEscxCa0aEGERbgjuxd8k/eyG54Kx1CJRJWqN0dCLSCStPvB3fU9uT00uyF1E9DdsQkcNuWGJORhNcUaisb3ZwQiuUWocUa4p0wpx0jJMITbI0OGBshcSbhOCAco4OyqPMyQotjUNfbbvu7qTDUGx+EQ9KRuS7SqiT8ujMDJPTYB0F4gk85nI8iRisnFtkToTHkPGd8mhOpntJJywTLHueLuuThQkWDSMya4KMTEZmGEiqDc1JeCUs5zI4oWRpIbsV7MRSdjHAyYzn6dKJqDRWvE4W2pxMaE5CrGEZO8Gdp7uTU+VBdIjY9VQSihMeSD042dOchFrEUq5vECfT6i5GyS/QVSd78POIzCes7+S8Tna5E6jYQi5PDLaj8WNOTHVTdCkiX5biTov9nIySf2B8Yjk2qdikOXaEO4GtkUYoHlQuA8v77CU5fx7sRNsUhVpCdp6cvqbEBqYSjLZQ78JYPAf1CQwvBehgvI6F+bJnst1/doKdrJHzwU4sbVOULcfyQJ/b1deUmLOCiASXefLjog1zX7hxlwUbc7JAb1oJywXnOjifUCePgpxYWjrhk1v2986VPWuPScgNebZ6QrNHiYVMQWia44/gc8AVvyzVf66CEorzlZz+Ehgnpv4dC7YGEClmjBxJLsLJYn5+ni8aZVgfIgllgVliIUTWr5dYb/KsFXinln0nMKE4V9RJUB2rbooS2CqhwG8vg/QCWCKYtcdhASXHo6M8NQeLkqTI4U5gBPcuVfWdVqCTDx2dKJuiQF5/fz8nZFKj76DSECi0XSTW2dqGs1C4DlovcP4hpwOdyE1Rzoz2aj5OCu2X0VSRU4/QWlg4gfG6EeqqkhG8AOl8I2ePA+eAbV/Zssvqu7kDiscJSwuqATZMzXstyb0MWs+Evl4QNBp3cmJFTZ+vJylbElCWLSrvOiHea0G/iCC3N2DNQH4nBxJw6AsG/wRsfVEnf/nHiaV+FUeSAAsTRciKUwnOPXU8TUKeXVSWAcbhxmU2ucmRe+hpG+4Pe9KzEfMdjsFJwFaGdRzwsBz5IlrX7k++r+apOjLuodCne8G0mn6Rwpz4rbNZZpCS4eF6zZlsixWnSf7cp5oT+s0Ca/rftjFnGLEvmpveYGmSTS/dSdSyTOvMN5UMJa3LZjarRQtxom0DWmb09FHXBw0XrbWmaoV8we1EOjGj/34Znu+R9469c5XlfcihTkSInBzfnT7jZWONxYrixE2rQ/RfDX6EjSu6cp0lTlivuWtZxIcLx2EbxrTbnHa94S7QajrSyfAXaL3hFvzMibIDetfZmQQnbWtHd5nLzR2yhb7d/co7RGydbKHfialNz6xfGMYWDjkathsn5xgmOu4c8G4XrwiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiC/F/4Dy335TOiPyuDAAAAAElFTkSuQmCC"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{mb: '6px'}}>
          <PersonIcon/> ahmed alhh
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}
