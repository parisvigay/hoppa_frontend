import './Home.css'
import TrailsImage from '../../Components/TrailsImage/TrailsImage'
import HomeHeroImage from '../../Components/HomeHeroImage/HomeHeroImage'

export default function Home() {
  const style = {
    backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5a60b085ace864ca48d78462/1701729159081-31G89K54KYX20CWRZYN2/301924211_5643880775676609_8279609205189606149_n.jpeg?format=750w')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }

  return (
    <div className="Home">
      <HomeHeroImage />
      <h1 className="recentPubsH1">Recent Pubs:</h1>
      <div className="recentPubsContainer">
        <div className="pubCard" style={style}></div>
        <div className="pubCard" style={style}></div>
        <div className="pubCard" style={style}></div>
        <div className="pubCard" style={style}></div>
      </div>
      <TrailsImage />
    </div>
  )
}