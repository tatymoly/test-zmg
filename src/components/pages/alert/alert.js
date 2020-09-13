import React from "react"
import useStyles from "./styles"

const Alert = ({ handleCloseAlert }) => {
  const classes = useStyles()
  return (
    <div className={classes.alertContainer}>
      <div className={classes.leftContainer}>
        <h5 className={classes.leftContainerSecondText}>
          Speak out. Be heard.
        </h5>
        <h2 className={classes.leftContainerFirstText}>Be counted</h2>
      </div>
      <div className={classes.rightContainer}>
        <p className={classes.text}>
          Rule of Thumb is a crowd source court of public opinion where anyone
          and everyone can speak out and speak freely. It's easy: You share your
          opinion, we analyze and put the data in the public report.
        </p>
      </div>
      <button className={classes.closeButton} onClick={handleCloseAlert}>
        X
      </button>
    </div>
  )
}

export default Alert
