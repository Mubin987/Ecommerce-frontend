import { Typography, Container, Card, CardActions, CardContent, Grid, Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../context/cartcontext';
import { useContext } from "react";
const Cart = () => {
    const cart = useContext(CartContext)
    const {cartItems,removeFromcart} = cart;
    return(
        <div>
            <h1><ShoppingCartIcon style={{ fontSize: '40px' }} />Cart </h1>
            <Container>
                <Grid container spacing={4} marginBottom={"50px"} maxWidth='md'>
                    {cartItems.map((product,index) =>{
                    return  <Grid item xm={12} key={index} >
                                <Card >
                                    <Grid container style={{display: 'flex',alignItems:'center',flexWrap: 'nowrap'}}>
                                    <Grid item xm={5}>
                                    <div style={{width:'200px'}}>
                                        <img src={product.image} alt={product.alt} />
                                    </div>
                                    </Grid>
                                    <Grid item xm={5}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            {product.name}
                                        </Typography>
                                        <Typography gutterBottom>
                                            {product.description}
                                        </Typography>
                                        <Typography variant="h5" style={{color:'rgb(50, 69, 124)'}}>
                                            PKR {product.price}
                                        </Typography>
                                    </CardContent>
                                    </Grid>
                                    <Grid item xm={2}>
                                    <CardActions style={{display:'flex',justifyContent:'space-evenly'}}>
                                        <Button variant="contained" color="warning" onClick={()=>removeFromcart(product.name)}><DeleteIcon/></Button>
                                    </CardActions>
                                    </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                    })} 
                </Grid>
            </Container>
        </div>
    )
}

export default Cart