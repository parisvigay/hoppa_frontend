import './HeroImage.css'
import pexels from '../../assets/pexels.jpg';
import { useLocation } from 'react-router-dom';

export default function HeroImage() {
    const location = useLocation();
    const isHomepage = location.pathname === '/';

    const style = {
        backgroundImage: `url(${pexels})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }

  return (
    <>
    <div className="heroImg" style={style}></div>
    <div className={ isHomepage ? "overlay" : "overlay2" }>
        { isHomepage && (
            <h1 className="mainTitle">Hoppa</h1> )
        }
    </div>
  </>
  )
}