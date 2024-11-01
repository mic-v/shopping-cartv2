import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/shop'>Shop</NavLink>
                </li>
            </ul>
            </nav>
        </>
    );
}
