import { Typography,Container,Card,CardActions,CardContent,Grid, Button } from "@mui/material"
import '../item.css'
const MensWatches = () => {
    return(
        <div>
            <h2>Mens' Watches</h2>
            <Container>
                <Grid container spacing={4} maxWidth='md'>
                    <Grid item sm={6} xm={12}>
                        <Card >
                            <div className="imgbox">
                                <img src="https://static-01.daraz.pk/p/f93237996cd83beeb1ff39e5f7632af0.jpg" alt="watch1" />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Rado Esenza Ceramic Touch
                                </Typography>
                                <Typography gutterBottom>
                                    Quartz movement <br/> Sapphire crystal<br/>High-tech ceramic Stainless steel / PVD case & bazel
                                </Typography>
                                <Typography variant="h5" style={{color:'rgb(50, 69, 124)'}}>
                                    PKR 240,500
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
                                <img src="https://static-01.daraz.pk/p/05ac91ad6a28e39cefe1cbe78df01701.jpg" alt="watch2" />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Square Watch for Men / Boys - Stylish Stainless Steel Analog Quartz Mens Watches
                                </Typography>
                                <Typography gutterBottom>
                                    Fashion and special design, suitable for any occasion.
                                </Typography>
                                <Typography variant="h5" style={{color:'rgb(50, 69, 124)'}}>
                                    PKR 349
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

export default MensWatches