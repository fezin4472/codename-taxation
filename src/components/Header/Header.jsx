import { IoMenu } from 'react-icons/io5';
import './Header.css'
import Avatar from '../Avatar/Avatar';

function Header() {
    return (
        <header className='Header_root'>
            <h4><IoMenu size={28} /></h4>
            <Avatar name="Fernando Londero"></Avatar>
        </header>
    );
}

export default Header;