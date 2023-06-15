import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './footer.css'
const Header = () => {
    return(
        <div id='header'><a href='/'>Home</a> <a href='/cart'><ShoppingCartIcon style={{ fontSize: '20px' }} />Cart</a></div>
    )
}

export default Header
