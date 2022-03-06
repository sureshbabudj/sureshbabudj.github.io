import { useEffect, useRef } from "react";

export default function App() {
  const ul = useRef(null);
  useEffect(() => {
    // const interval = setInterval(() => {
    //   Array.from(ul.current.children).forEach((li) => {
    //     li.style.left = li.style.left === "0%" ? "100%" : "0%";
    //   });
    // }, 1000);
    // return () => clearInterval(interval);
  }, []);
  return (
    <div className="intro">
      <h1>hello, I am Suresh Babu</h1>
      <h3>Full Stack Engineer | Front End Specialist</h3>
      <h5>HTML/CSS, JavaScript, Angular, React, NodeJS and ExpressJS...</h5>
      <ul className="social-links" ref={ul}>
        <li>
          <span className="line"></span>
          <a href="https://www.behance.net/sureshbabu28" target="_blank">
            <i className="fa-brands fa-behance"></i>
          </a>
        </li>
        <li>
          <span className="line"></span>
          <a href="https://twitter.com/sureshbabudj" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <span className="line"></span>
          <a
            href="https://www.linkedin.com/in/suresh-babu-dhanaraj-9a2302150/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <span className="line"></span>
          <a href="mailto:sureshbabudhanaraj@gmail.com">
            <i className="fa-solid fa-envelope-open"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
