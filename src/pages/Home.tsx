import { Link } from "react-router-dom";
import DVDImg from "../../public/dvd-video.png"
import "../App.css";

const Home = () => {
  return (
    <>
      <Link to="/other">go to other</Link>
      <p>test css</p>
      <img className="img-dvd" src={DVDImg} />
    </>
  )
}

export default Home;