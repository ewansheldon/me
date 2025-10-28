import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ul role="menu">
        <li role="menuitem"><Link to="/cv">Play Movie</Link></li>
        <li role="menuitem"><Link to="/about">About</Link></li>
        <li role="menuitem"><Link to="/contact">Contact</Link></li>
      </ul>
    </>
  )
}

export default Home;