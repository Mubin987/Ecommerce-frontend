import { Typography,Container,Card,CardActions,CardContent,Grid, Button } from "@mui/material"
import '../item.css'
const MensShoes = () => {
    return(
        <div>
            <h2>Mens' Shoes</h2>
            <Container>
                <Grid container spacing={4} maxWidth='md'>
                    <Grid item sm={6} xm={12}>
                        <Card >
                            <div className="imgbox">
                                <img src="https://static-01.daraz.pk/p/6edfe4ed24496c82e65d761eea80d842.jpg" alt="shoes1" />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Formal shoes brown for men & boys
                                </Typography>
                                <Typography gutterBottom>
                                    Dress shoes new designs synthetic leather shoes. Embossing design quality shoes.
                                </Typography>
                                <Typography variant="h5" style={{color:'rgb(50, 69, 124)'}}>
                                    PKR 1,520
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
                                <img src="https://static-01.daraz.pk/p/e17232d056407f0d38181f8c75bc2737.jpg" alt="shoes2" />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    SWAT ORIGINAL QUALITY BOOTS FOR MEN
                                </Typography>
                                <Typography gutterBottom>
                                Breathable, Lightweight Waterproof <br /> Hiking & Trekking Shoes
                                </Typography>
                                <Typography variant="h5" style={{color:'rgb(50, 69, 124)'}}>
                                    PKR 2,700
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

export default MensShoes