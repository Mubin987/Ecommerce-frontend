import { Typography,Container,Card,CardActions,CardContent,Grid, Button } from "@mui/material"
import '../item.css'
const WomensWatches = () => {
    return(
        <div>
            <h2>Womens' Watches</h2>
            <Container>
                <Grid container spacing={4} maxWidth='md'>
                    <Grid item sm={6} xm={12}>
                        <Card >
                            <div className="imgbox">
                                <img src="https://static-01.daraz.pk/p/a4b8b6dba9faa30effe74b4f8dd89b62.jpg" alt="watch1" />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Golden Magnetic Ladies Wrist Watch
                                </Typography>
                                <Typography gutterBottom>
                                    The perfect model for those who love classic style with a personal touch.
                                </Typography>
                                <Typography variant="h5" style={{color:'rgb(50, 69, 124)'}}>
                                    PKR 279
                                </Typography>
                            </CardContent>
                            <CardActions style={{display:'flex',justifyContent:'space-evenly'}}>
                                <Button variant="outlined" color="primary">Add to cart</Button>
                                <Button variant="contained" color="primary">Buy Now</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item sm={6} xm={12}>
                        <Card >
                            <div className="imgbox">
                                <img src="https://static-01.daraz.pk/p/d29add84349e8815fcaf21a12ceed823.jpg" alt="watch2" />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Couple watch
                                </Typography>
                                <Typography gutterBottom>
                                    Pack of 2 couple watches for men & women with box
                                </Typography>
                                <Typography variant="h5" style={{color:'rgb(50, 69, 124)'}}>
                                    PKR 2,499
                                </Typography>
                            </CardContent>
                            <CardActions style={{display:'flex',justifyContent:'space-evenly'}}>
                                <Button variant="outlined" color="primary">Add to cart</Button>
                                <Button variant="contained" color="primary">Buy Now</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default WomensWatches