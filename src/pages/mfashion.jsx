import {Link} from 'react-router-dom'
const MensFashion = () => {
    return(
        <div>
            <h1>Mens' Fashion</h1>
            <Link to='/mensfashion/menswatches'><button className='logo'>Watches</button> </Link>
            <Link to='/mensfashion/mensshoes'><button className='logo'>Shoes</button> </Link>
        </div>
    )
}

export default MensFashion