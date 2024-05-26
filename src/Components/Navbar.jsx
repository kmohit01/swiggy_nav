// import './App.css';
// Navbar.js
// import Pngs from '../Pngs/Corporate_sign';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="right">
                <div className="logo">
                    <img src="https://www.cdnlogo.com/logos/s/4/swiggy.svg" alt="Swiggy Logo" />
                </div>
                <div className='other_downside' >
                    <li>
                        <a href="#">Others</a>
                        <img src="https://img.icons8.com/?size=100&id=99991&format=png&color=000000" alt="arrow" />
                    </li>
                </div>
            </div>
            <ul className="nav-links">
                <li>
                    <img src='https://img.icons8.com/?size=100&id=16222&format=png&color=000000' alt="Corporate" />
                    <a href="#">Swiggy Corporate</a>
                </li>
                <li>
                    <img src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000" alt="Search" />
                    <a href="#">Search</a>
                </li>
                <li>
                    <img src="https://img.icons8.com/?size=100&id=kVBdklGxyanA&format=png&color=000000" alt="Offers" />
                    <a href="#">Offers</a>
                </li>
                <li>
                    <img src="https://img.icons8.com/?size=100&id=bar3GHatnNu6&format=png&color=000000" alt="Help" />
                    <a href="#">Help</a>
                </li>
                <li>
                    <img src="https://img.icons8.com/?size=100&id=ETqSATnNNQdB&format=png&color=000000" alt="Sign" />
                    <a href="#">Sign In</a>
                </li>
                <li>
                    <img src="https://img.icons8.com/?size=100&id=i4k6vXKaLmOn&format=png&color=000000" alt="Cart" />
                    <a href="#">Cart</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

