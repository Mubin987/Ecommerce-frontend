import {Link} from 'react-router-dom'
import { Grid } from '@mui/material'
const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <Grid container columnSpacing={3} rowSpacing={6}>
                <Grid item xs={6} sm={3} >
                <Link to='/electronics'><button className='logo'>Electronics</button> </Link>
                </Grid>
                <Grid item xs={6} sm={3}>
                <Link to='/automotive'><button className='logo'>Automotive</button> </Link>
                </Grid>
                <Grid item xs={6} sm={3}>
                <Link to='/mfashion'><button className='logo'>Mens' Fashion</button> </Link>
                </Grid>
                <Grid item xs={6} sm={3}>
                <Link to='/wfashion'><button className='logo'>Womens' Fashion</button> </Link>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Home