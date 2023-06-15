import { Typography,Container,Card,CardActions,CardContent,Grid, Button } from "@mui/material"
import '../item.css'
const MicrofiberClothes = () => {
    return(
        <div>
            <h2>Microfiber Clothes</h2>
            <Container>
                <Grid container spacing={4} maxWidth='md'>
                    <Grid item sm={6} xm={12}>
                        <Card >
                            <div className="imgbox">
                                <img src="https://cache1.pakwheels.com/ad_pictures/2920/armorall-wholeskin-chamois-leather-29205000.jpg" alt="cloth1" />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    ArmorAll Wholeskin Chamois Leather
                                </Typography>
                                <Typography gutterBottom>
                                    Soft, natural and fully oil-tanned luxury leather. Excellent absorbency , Ideal for streak-free drying, 100% Biodegradable
                                </Typography>
                                <Typography variant="h5" style={{color:'rgb(50, 69, 124)'}}>
                                    PKR 3,300
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
                                <img src="https://cache2.pakwheels.com/ad_pictures/8033/car-windshield-and-glass-cleaner-microfiber-handle-duster-with-gladiator-windshield-washer-bundle-80330504.webp" alt="cloth2" />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Car Windshield And Glass Cleaner
                                </Typography>
                                <Typography gutterBottom>
                                    1 x Car Windshield Microfiber Handle Duster <br /> 1 x Gladiator Car Windshield Washer Liquid
                                </Typography>
                                <Typography variant="h5" style={{color:'rgb(50, 69, 124)'}}>
                                    PKR 1,070
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

export default MicrofiberClothes