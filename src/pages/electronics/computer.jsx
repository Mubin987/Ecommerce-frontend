import { Typography,Container,Card,CardActions,CardContent,Grid, Button } from "@mui/material"
import '../item.css'
const Computer = () => {
    return(
        <div>
            <h2>Computers & Accessories</h2>
            <Container>
                <Grid container spacing={4} maxWidth='md'>
                    <Grid item sm={6} xm={12}>
                        <Card >
                            <div className="imgbox">
                                <img src="https://m.media-amazon.com/images/I/71VC2MZtD5L._AC_SY450_.jpg" alt="keyboard" />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    DURGOD TGK 021 Mechanical Gaming Keyboard
                                </Typography>
                                <Typography gutterBottom>
                                    RGB Backlit and Magnetic Wrist Rest, Kailh Turbo Gaming Red Switch, Durable PBT Keycap and Hot Swappable with 104 Keys, Full Size Wired Keyboard for PC Mac
                                </Typography>
                                <Typography variant="h5" style={{color:'rgb(50, 69, 124)'}}>
                                    PKR 24,793
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
                                <img src="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX450_.jpg" alt="monitor" />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Sceptre 24-inch Professional Thin 1080p LED Monitor
                                </Typography>
                                <Typography gutterBottom>
                                    99% sRGB 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)
                                </Typography>
                                <Typography variant="h5" style={{color:'rgb(50, 69, 124)'}}>
                                    PKR 28,691
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

export default Computer