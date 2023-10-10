import React,{useState} from "react";
import { Typography, Container, Card, CardActions, CardContent, Grid, Button } from "@mui/material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import CartContext from '../../context/cartcontext';
import { useContext } from "react";
import './addproduct.css'
const AddProduct = () => {
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    const [image,setImage] = useState('');
    const [alt,setAlt] = useState('');
    const handleChange = (ev) => {
        const {value,name} = ev.target;
        if(name === 'name'){
            setName(value);
        }else if(name === 'description'){
            setDescription(value);
        }else if(name === 'price'){
            setPrice(value);
        }else if(name === 'image'){
            setImage(value);
        }else if(name === 'alt'){
            setAlt(value);
        }    
    };

    const handleSubmit = async () => {    //api call takes time so make async (data is sent to server)
        const productData = {name,description,price:+price,image,alt};  //+price to convert to number as schema has datatype number
        const response = await fetch("http://localhost:8000/products/add",{
            method:'POST',
            headers:{   //from insomnia headers
                "Content-Type": "application/json",
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVkMTU4YmIyMzg3OTk0MTc3NmFiYmUiLCJpYXQiOjE2OTM0NDA5MjIsImV4cCI6MTY5NjAzMjkyMn0.Qc1pQsQFmmOwdHDqDiR69VqxM40S42tsghLpNqtAdG4" 
            },
            body: JSON.stringify(productData),  //networks tab -> payload(shows produst data)
        });
        //console.log("clicked");
        console.log("Response",response);
    }

    return(
        <div>
            <Container className="container" sm={6} xm={12}>
            <h2><AddCircleOutline style={{ fontSize: '22px',color:'green' }} />Add Product Page </h2>
            <TextField value={name} id="outlined-basic" name="name" label="Product Name" variant="outlined" onChange={handleChange}/>
            <TextField value={description} id="outlined-multiline-static" name="description" label="Description" multiline rows={4} variant="outlined" onChange={handleChange}/>
            <TextField value={price} id="outlined-basic" name="price" label="Price" variant="outlined" onChange={handleChange}/>
            <TextField value={image} id="outlined-basic" name="image" label="Image URL" variant="outlined" onChange={handleChange}/>
            <TextField value={alt} id="outlined-basic" name="alt" label="Image-Alt-Text" variant="outlined" onChange={handleChange}/>
            <Button variant="contained" color="primary" onClick={handleSubmit}>Add Product</Button>
            </Container>
        </div>
    )
}

export default AddProduct