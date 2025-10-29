import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ul role="menu" className="menu">
        <li role="menuitem"><Link to="/cv" className="menu-item">Play Movie</Link><span className="focused-menu-item">&#9642;</span></li>
        <li role="menuitem"><Link to="/about" className="menu-item">About</Link><span className="focused-menu-item">&#9642;</span></li>
        <li role="menuitem"><Link to="/contact" className="menu-item">Contact</Link><span className="focused-menu-item">&#9642;</span></li>
      </ul>
    </>
  )
}

export default Home;