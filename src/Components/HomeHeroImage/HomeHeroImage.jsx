import cheers from '../../assets/cheers.mp4';

export default function HomeHeroImage() {
    const style = {
        width: "100vw",
    }

  return (
    <video style={style} src={cheers} autoPlay loop muted></video>
  )
}
