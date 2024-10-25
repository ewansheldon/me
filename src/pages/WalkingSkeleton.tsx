import { Link } from "react-router-dom";

const WalkingSkeleton = () => {
  return (
    <>
      {window.location.pathname}
      <p>ewan's walking sheldon!</p>
      <Link to="/other">go to other</Link>
    </>
  )
}

export default WalkingSkeleton;