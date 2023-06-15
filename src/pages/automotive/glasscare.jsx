import { Typography,Container,Card,CardActions,CardContent,Grid, Button } from "@mui/material"
import '../item.css'
const GlassCare = () => {
    return(
        <div>
            <h2>Glass Care</h2>
            <Container>
                <Grid container spacing={4} maxWidth='md'>
                    <Grid item sm={6} xm={12}>
                        <Card >
                            <div className="imgbox">
                                <img src="https://cache4.pakwheels.com/ad_pictures/8231/toyota-yaris-glass-louvers-set-glass-vent-window-set-black-82319649.webp" alt="vent" />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Glass Vent Window Set Black
                                </Typography>
                                <Typography gutterBottom>
                                    Long Lasting And Durable Material <br/> Strong Tape Quality To Avoid Falling Off
                                </Typography>
                                <Typography variant="h5" style={{color:'rgb(50, 69, 124)'}}>
                                    PKR 865
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
                                <img src="https://cache4.pakwheels.com/ad_pictures/8047/his-glass-cleaner-550ml-80476239.webp" alt="glasscleaner" />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    HIS Glass Cleaner | 550ml
                                </Typography>
                                <Typography gutterBottom>
                                    A completely natural condensed liquid manufactured by professional formula, can rapidly remove the dust and stains on windscreen
                                </Typography>
                                <Typography variant="h5" style={{color:'rgb(50, 69, 124)'}}>
                                    PKR 630
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

export default GlassCare