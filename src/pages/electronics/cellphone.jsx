import { Typography,Container,Card,CardActions,CardHeader,CardContent,CardMedia,Grid, Button } from "@mui/material"
import '../item.css'
const Cellphone = () => {
    return(
        <div>
            <h2>Cell Phones & Accessories</h2>
            <Container>
                <Grid container spacing={4} maxWidth='md'>
                    <Grid item sm={6} xm={12}>
                        <Card >
                            {/* <CardMedia
                                image="https://m.media-amazon.com/images/I/71u7kc30epL._AC_SX355_.jpg"
                                title='earphones'
                                style={styles.media}
                            /> */}
                            <div className="imgbox">
                                <img src="https://m.media-amazon.com/images/I/71u7kc30epL._AC_SX355_.jpg" alt="earphones" />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Amazon Basics In-Ear Wired Headphones
                                </Typography>
                                <Typography gutterBottom>
                                    Black headphones with comfortable in-ear design and 3.5mm gold-plated plug.
                                </Typography>
                                <Typography variant="h5" style={{color:'rgb(50, 69, 124)'}}>
                                    PKR 1,977
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
                            {/* <CardMedia
                                image="https://m.media-amazon.com/images/I/71u7kc30epL._AC_SX355_.jpg"
                                title='earphones'
                                style={styles.media}
                            /> */}
                            <div className="imgbox">
                                <img src="https://m.media-amazon.com/images/I/612drJaW52L._SX522_.jpg" alt="cable" />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Amazon Basics USB-A to Mini USB 2.0
                                </Typography>
                                <Typography gutterBottom>
                                    Fast Charging Cable, 480Mbps Transfer Speed with Gold-Plated Plugs, 3 Foot, Black
                                </Typography>
                                <Typography variant="h5" style={{color:'rgb(50, 69, 124)'}}>
                                    PKR 1,546
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

export default Cellphone