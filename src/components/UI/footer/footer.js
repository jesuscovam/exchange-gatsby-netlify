import React from "react";
import classes from "./footer.module.css";

const Footer = () => (
  <div>
    <footer className={classes.Footer}>
       <p>
        © Jesus Cova
       </p>
      <a
        href="https://github.com/jesuscovam/exchange-gatsby-netlify"
        target="_newblank"
      >
        Github
      </a>
    </footer>
  </div>
);

export default Footer;
