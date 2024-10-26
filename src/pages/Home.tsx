import { Link } from "react-router-dom";
import DVDImg from "../../public/dvd-video.png"

const Home = () => {
  return (
    <>
      <Link to="/other">go to other</Link>
      <img width="500px" src={DVDImg} />
    </>
  )
}

export default Home;