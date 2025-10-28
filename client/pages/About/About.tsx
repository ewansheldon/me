import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1 role="heading">Ewan Sheldon</h1>
      <p>I am a Senior Full-Stack Software Engineer with over eight years of experience delivering scalable web and blockchain applications.</p>
      <p>I have led projects in startups and consulting environments.</p>
      <p>I am looking for an opportunity to grow and be challenged in a mission-driven team, with shared values of close collaboration, clean solutions, and continuous delivery.</p>
      <p>I am based in Amsterdam and eligible to work in the EU.</p>
      <p>If you are interested in working with me, please get in touch with me <Link to={'/contact'}>here</Link>.</p>
      <h2 role="heading">About this site</h2>
      <p>This portfolio website is a chance to develop side-projects, and work on some things I am learning.</p>
      <p>It is an SSR React site, written with Typescript, tested with Jest and React Testing library. It is continuously deployed to Google Cloud Run with Github Actions, containerised with Docker.</p>
      <p>You can have a look at the repository <a href="https://github.com/ewansheldon/me" target="_blank">here</a></p>
    </>
  )
}

export default About;