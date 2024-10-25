import { Link } from "react-router-dom";

const Other = () => {
  return (
    <>
      {window.location.pathname}
      <p>other place!</p>
      <a><Link to="/">go home</Link></a><br />
    </>
  )
}

export default Other;