import './About.css';
import beer from '../../assets/beer.png';

export default function About() {
  const style = {
    backgroundImage: `url(${beer})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "75%",
    width: "75%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridArea: "3 / 1 / 4 / 2",
    padding: "3vw 0 8vw 3vw",
}

  return (
    <>
      <div className="aboutMain">
        <h1 className="aboutH1">About Us</h1>
        <div style={style} className="beerIcon"></div>
        <p className="aboutP">Welcome to Hoppa, your go-to companion for exploring the world of pubs! With Hoppa, you're not just navigating through locations; you're curating memorable experiences one pint at a time.

      Ever stumbled upon a hidden gem of a pub and wished you could immortalize the moment? Hoppa allows you to do just that. Whether it's the cozy corner pub down the street or the lively brewery across town, Hoppa lets you keep records and rate your favorite haunts effortlessly.

      <br /> <br />But Hoppa is more than just a digital notebook for pub goers. It's your personal pub concierge, helping you plan the perfect evening out with friends. Create bespoke 'pub-trails' to map out your adventures, ensuring every stop is a hit.

      What sets Hoppa apart is its attention to detail. Sure, you can jot down the basics like location and closing times, but why stop there? Note down specific drinks available (because finding your favorite brew on tap is a triumph worth celebrating.) Is live music your vibe? Hoppa lets you keep note on where to find it. Prefer a pint in the sunshine? Discover dog-friendly pubs or cozy spots with a garden. After all, why settle for just any pub when you can find the perfect match for every mood and occasion?</p>
      </div>
      <div className="aboutSecondary">
        
      </div>
    </>
  )
}
