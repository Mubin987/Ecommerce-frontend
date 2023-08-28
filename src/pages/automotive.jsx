import {Link} from 'react-router-dom'
const Automotive = () => {
    return(
        <div>
            <h1>Automotive</h1>
            <Link to='/automotive/microfiberclothes'><button className='logo'>Microfiber Clothes</button> </Link>
            <Link to='/automotive/glasscare'><button className='logo'>Glass Care</button> </Link>
        </div>
    )
}

export default Automotive