/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-empty-pattern */
import { useState } from 'react';
import Logo from '../../assets/Logo .svg';
import './Navbar.scss';
type Props = {};
export default function Navbar({}: Props) {
  const [active, setActive] = useState(false);
  return (
    <nav className='navbar' data-testid='navbar'>
      <div>
        <a href='#'>
          <img src={Logo} alt='Logo' />
        </a>
      </div>
      <div>
        <ul className={`links ${active ? 'active' : ''}`}>
          <li className='link'>
            <a href='#'>Home</a>
          </li>
          <li className='link'>
            <a href='#'>About</a>
          </li>
          <li className='link'>
            <a href='#'>Menu</a>
          </li>
          <li className='link'>
            <a href='#'>Reservations</a>
          </li>
          <li className='link'>
            <a href='#'>Order online</a>
          </li>
          <li className='link'>
            <a href='#'>Login</a>
          </li>
        </ul>
      </div>
      <div className='menu' onClick={() => setActive(prev => !prev)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
