import {Link} from 'react-router-dom'
const WomensFashion = () => {
    return(
        <div>
            <h1>Womens' Fashion</h1>
            <Link to='/womensfashion/womenswatches'><button className='logo'>Watches</button> </Link>
            <Link to='/womensfashion/womensshoes'><button className='logo'>Shoes</button> </Link>
        </div>
    )
}

export default WomensFashion