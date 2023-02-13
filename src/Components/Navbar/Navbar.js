import Logo from '../../Images/Vector.png'
import './Navbar.css'

export default function Navbar(){
    return (
        <nav className='navbar'>
            <img src={Logo} alt='Abnb Logo' className='logo'/>
        </nav>
    )
}