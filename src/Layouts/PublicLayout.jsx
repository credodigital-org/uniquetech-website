import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

const titles = { '/': 'Home', '/about': 'About Us', '/services': 'Our Services', '/projects': 'Our Projects', '/contact': 'Contact Us' };

function Meta(){const {pathname}=useLocation();useEffect(()=>{const name=titles[pathname]||'Service';document.title=`${name} | Unique Tech General Maintenance LLC`;const d=document.querySelector('meta[name="description"]');if(d)d.content=`${name} — Unique Tech General Maintenance LLC. MEP works, cleaning, general maintenance and AMC solutions.`;window.scrollTo(0,0)},[pathname]);return null}

function ScrollReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    const targets = [...document.querySelectorAll('.page-main > section, .page-main .homecard, .page-main .projectcard, .page-main .service-catalog-card, .page-main .advantage-card, .page-main .portfolio-card, .page-main .benefit, .page-main .contact-detail-card, .page-main .miniphotos img'), document.querySelector('.footer')].filter(Boolean);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });
    targets.forEach((node, index) => { node.style.setProperty('--reveal-delay', `${(index % 5) * 55}ms`); node.classList.add('reveal-section'); observer.observe(node); });
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}

function PublicLayout({ children }) { return <><Meta /><Header /><ScrollReveal /><main className="page-main">{children}</main><Footer /></>; }

export default PublicLayout;


