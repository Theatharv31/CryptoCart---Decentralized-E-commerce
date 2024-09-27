import { ethers } from 'ethers'
import Logo from '../assets/items/Logo.png';

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (
        <nav>
            <div >
            <img src={Logo} alt="Logo" style={{ width: '200px', height: '100px', marginLeft:'150px' }} />


            </div>

            <input
            placeholder='Search Product Here'
                type="text"
                className="nav__search"
            />

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}

            <ul className='nav__links'>
                
                <li><a href="#Electronics & Gadgets">Electronics & Gadgets</a></li>
                <li><a href="#Toys & Gaming">Toys & Gaming</a></li>
                <li><a href="#Clothing & Jewelry">Clothing & Jewelry</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;