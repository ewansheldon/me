import { Link } from "react-router-dom";

const Other = () => {
  return (
    <>
      {window.location.pathname}
      <p>other place!</p>
      <Link to="/">go home</Link><br />
    </>
  )
}

export default Other;