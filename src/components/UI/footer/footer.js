import React from "react";
import classes from "./footer.module.css";

const Footer = () => (
  <div>
    <footer className={classes.Footer}>
      <a href="https://twitter.com/jesusacova" target="_newblank">
        © Jesus Cova
      </a>
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
