import { Typography, Container, Card, CardActions, CardContent, Grid, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../item.css';
import CartContext from "../../context/cartcontext";
import { useContext } from "react";

const Product = ({category}) => {
    const { subcategory } = useParams();
    const [products, setProducts] = useState([]);
    const cart = useContext(CartContext)
    const {cartItems,addTocart,removeFromcart} = cart;//const cartItems = cart.cartItems;
    
    useEffect(() => {
        import(`../../data/${category}/${subcategory}.js`)
            .then((module) => {
                setProducts(module.products);
            })
            .catch((error) => {
                console.error("Error loading products:", error);
            });
    }, [subcategory]);
    
  //  const products = subcategory === "glasscare" ? glasscare :  microfiberclothes;
    return(
        <div>
            <h2>{subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}</h2>
            <Container>
                <Grid container spacing={4} marginBottom={"50px"} maxWidth='md'>
                    {products.map((product,index) =>{
                    return  <Grid item sm={6} xm={12} key={index}>
                                <Card >
                                    <div className="imgbox">
                                        <img src={product.image} alt={product.alt} />
                                    </div>
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
                                    <CardActions style={{display:'flex',justifyContent:'space-evenly'}}>
                                        <Button variant="outlined" color="primary" onClick={()=>addTocart(product)}>Add to cart</Button>
                                        <Button variant="contained" color="primary" >Buy Now</Button>
                                        {console.log(cartItems)}
                                    </CardActions>
                                </Card>
                            </Grid>
                    })} 
                </Grid>
            </Container>
        </div>
    )
}

export default Product