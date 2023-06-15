import {Link} from 'react-router-dom'
const Electronics = () => {
    return(
        <div>
            <h1>Electronics</h1>
            <Link to='/cellphone'><button className='logo'>Cell Phones & Accessories</button> </Link>
            <Link to='/computer'><button className='logo'>Computers & Accessories</button> </Link>
        </div>
    )
}

export default Electronics