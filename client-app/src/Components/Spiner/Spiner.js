import React from "react";
import classes from "./Spiner.module.css";
const Spiner = () => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.spiner}>
        <div
          className="spinner-border text-secondary "
          style={{ width: "6rem", height: "6rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spiner;
