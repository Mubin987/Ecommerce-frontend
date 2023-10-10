import {Link} from 'react-router-dom'
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Home from '@mui/icons-material/Home';
import './footer.css'
import CartContext from '../context/cartcontext';
import { useContext } from 'react';

const Header = () => {
    const cartcontext = useContext(CartContext);
    const {cartItems} = cartcontext;
    return(
        <div id='header'>
            <Link to='/'><Home style={{ fontSize: '20px' }} />Home</Link> <Link to='/cart'><ShoppingCartIcon style={{ fontSize: '20px' }} />Cart _<Badge badgeContent={String(cartItems.length)} color='primary'></Badge> </Link>
        </div>
    )
}

export default Header
