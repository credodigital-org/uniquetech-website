import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { titles } from '../../data/navigation.js';

const businessMap = 'https://maps.app.goo.gl/fUMRMChjsvhVKifY8';
function Header(){
 const [open,setOpen]=useState(false);
 return <>
  <div className="topline"><div className="wrap topinner">
   <span className="top-location"><img src="/assets/boxicons_location-filled.png" alt=""/><a href={businessMap} target="_blank" rel="noreferrer">Unique Tech General Maintenance LLC</a></span>
   <span><img src="/assets/garden_email-fill-20.png" alt=""/><a href="mailto:info@uniquetech.ae">info@uniquetech.ae</a></span>
   <span><img src="/assets/Vector (2).png" alt=""/><a href="tel:+971507639356">+971 507 639 356</a></span>
  </div></div>
  <header className="header"><div className="wrap navrow">
   <Link to="/" className="brand" onClick={()=>setOpen(false)}><img src="/assets/unique-tech-logo-mark.png" alt=""/><img className="wordmark" src="/assets/unique-tech-wordmark.png" alt="Unique Tech General Maintenance LLC"/></Link>
   <button className="menubtn" type="button" onClick={()=>setOpen(!open)} aria-label={open?'Close navigation menu':'Open navigation menu'} aria-expanded={open} aria-controls="primary-navigation"><span aria-hidden="true">{open?'×':'☰'}</span></button>
   <nav id="primary-navigation" className={open?'nav open':'nav'} aria-label="Main navigation">{Object.entries(titles).map(([path,title])=><NavLink end={path==='/'} onClick={()=>setOpen(false)} to={path} key={path}>{title==='Home'?'Home':title==='About Us'?'About':title==='Our Services'?'Services':title==='Our Projects'?'Projects':'Contact'}</NavLink>)}<Link className="navcta" to="/contact" onClick={()=>setOpen(false)}>Get a Quote</Link></nav>
  </div></header>
 </>;
}
export default Header;

