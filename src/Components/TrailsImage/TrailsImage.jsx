import trail from '../../assets/trail.jpg';
import './TrailsImage.css';

export default function TrailsImage() {
    const style = {
        backgroundImage: `url(${trail})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        height: "45vh",
        width: "100%",
        margin: "16vh 0 0 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

  return (
    <div className="trailsImg" style={style}>
      <div className="trailsBtn">See Your Trails</div>
    </div>
  )
}
