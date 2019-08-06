import React from "react";
import Paper from "@material-ui/core/Paper";
import classes from "./exchange.module.css";
import Typography from "@material-ui/core/Typography";
const exchangeRates = props => {
  return (
    <div className={classes.Exchange}>
      <Paper className={classes.Paper}>
        <Typography className={classes.Typo}>
          1 USD = {props.dolarVen} bolivares
          <span role="img" alt="money">
            💸💸💸
          </span>
        </Typography>
        <Typography>1 MXN = {props.pesoVen} bolivares 💸💸💸</Typography>
      </Paper>
    </div>
  );
};

export default exchangeRates;
