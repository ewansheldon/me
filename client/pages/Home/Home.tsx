import { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  url: string;
}

const menuItems: MenuItem[] = [
  {
    label: 'Play Movie',
    url: '/cv',
  },
  {
    label: 'About',
    url: '/about',
  },
  {
    label: 'Contact',
    url: '/contact',
  }
]

const Home = () => {
  const [ selected, setSelected ] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const affirmativeKeys = [ ' ', 'Enter' ];
      if (affirmativeKeys.includes(e.key)) {
        console.log(menuItems[selected].url)
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  const menuItemLi = (menuItem: MenuItem, index: number): ReactElement => {
    return (
      <li key={index} role="menuitem">
        {index === selected && <span className="focused-menu-item">&#9642;</span>}
        <Link to={menuItem.url} onMouseOver={() => setSelected(index)} className="menu-item">{menuItem.label}</Link>
      </li>
    );
  }

  return (
    <>
      <ul role="menu" className="menu">
        { menuItems.map((menuItem, i) => menuItemLi(menuItem, i)) }
      </ul>
    </>
  )
}

export default Home;