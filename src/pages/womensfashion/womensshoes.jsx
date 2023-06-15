import { Typography,Container,Card,CardActions,CardContent,Grid, Button } from "@mui/material"
import '../item.css'
const WomensShoes = () => {
    return(
        <div>
            <h2>Womens' Shoes</h2>
            <Container>
                <Grid container spacing={4} maxWidth='md'>
                    <Grid item sm={6} xm={12}>
                        <Card >
                            <div className="imgbox">
                                <img src="https://static-01.daraz.pk/p/d9d1f4ceff5c4c6107effd942700dc1b.jpg" alt="shoes1" />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Transparent anti slip rain shoes
                                </Typography>
                                <Typography gutterBottom>
                                    Water proof design to prevent your precious shoes get wet and dirty- No worry when going to school & work during raining day
                                </Typography>
                                <Typography variant="h5" style={{color:'rgb(50, 69, 124)'}}>
                                    PKR 2,446
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
                                <img src="https://static-01.daraz.pk/p/5a497946846d318cf140a2039de3371c.jpg" alt="shoes2" />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Summer Wear Wedge Sandal For Women
                                </Typography>
                                <Typography gutterBottom>
                                    ALL DAY WEAR & COMFORT: Whether you're running errands, or going outside, our sandals will provide you with all day comfort.
                                </Typography>
                                <Typography variant="h5" style={{color:'rgb(50, 69, 124)'}}>
                                    PKR 2,400
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

export default WomensShoes