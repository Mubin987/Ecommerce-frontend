import {Link} from 'react-router-dom'
const Electronics = () => {
    return(
        <div>
            <h1>Electronics</h1>
            <Link to='/electronics/cellphone'><button className='logo'>Cell Phones & Accessories</button> </Link>
            <Link to='/electronics/computer'><button className='logo'>Computers & Accessories</button> </Link>
        </div>
    )
}

export default Electronics