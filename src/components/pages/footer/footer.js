import React from "react"
import { ReactComponent as Facebook } from "../../../assets/icons/facebook.svg"
import { ReactComponent as Twitter } from "../../../assets/icons/twitter.svg"

import useStyles from "./styles"

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.backgroundContainer}>
        <div className={classes.addContainer}>
          <h2>Is there anyone else you would want us to add?</h2>
          <button aria-label="submit a name you'd like us to add">
            Submit a Name
          </button>
        </div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.contactContainer}>
        <div className={classes.legal}>
          <a href="/">Terms and Conditions</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Contact Us</a>
        </div>
        <div className={classes.social}>
          <p>Follow Us</p>
          <a href="facebook.com">
            <Facebook className={classes.icon} />
          </a>
          <a href="twitter.com">
            <Twitter className={classes.icon} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
