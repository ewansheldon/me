import { Link } from "react-router-dom";

const WalkingSkeleton = () => {
  return (
    <>
      {window.location.pathname}
      <p>ewan's walking sheldon!</p>
      <a><Link to="/other">go to other</Link></a>
    </>
  )
}

export default WalkingSkeleton;