import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h2>Dwiki</h2>
      </div>

      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "blog", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <a
        class="face-button"
        href="https://drive.google.com/file/d/1OLI5HGB4xzzzPtWMfNAdLzaMunCo6YyN/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="face-primary">
          <span class="icon fa fa-cloud"></span>
          Download My CV
        </div>

        <div class="face-secondary">
          <span class="icon fa fa-hdd-o"></span>
          Size: 143 KB
        </div>
      </a>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
