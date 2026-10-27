import { Link } from 'react-router-dom';

function PageHero({eyebrow,title,sub}){return <section className="pagehero"><div className="wrap"><span className="eyebrow light">{eyebrow}</span><h1>{title}</h1><p>{sub}</p><div className="crumb"><Link to="/">Home</Link><span>/</span>{title}</div></div></section>}

export default PageHero;
