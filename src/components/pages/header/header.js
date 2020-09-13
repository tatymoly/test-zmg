import React from "react"
import { Thumbs } from "../card/card"
import useStyles from "./styles"

const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.header}>
      <div className={classes.navBar}>
        <div>
          <h2 className={classes.navTitle}>Rule of Thumb.</h2>
        </div>
        <div>
          <a className={classes.navLinks} href="/">
            Past Trial
          </a>
          <a className={classes.navLinks} href="/">
            How It Works
          </a>
          <a className={classes.navLinks} href="/">
            Log In / Sign Up
          </a>
        </div>
      </div>
      <div className={classes.infoCard}>
        <div className={classes.textContainer}>
          <p className={classes.subtitle}>What's your opinion on</p>
          <h2 className={classes.title}>Pope Francisco?</h2>
          <p className={classes.description}>
            He's talking tough on clergy sexual abuse, but is he just another
            papal pervert protector? (thubms down) or a true pedophile pushing
            pontiff? (thumbs up)
          </p>
          <div>
            <span>W</span>
            <a className={classes.moreInfoLink} href="/">
              More information
            </a>
          </div>
          <h4 className={classes.veredit}>What's Your Veredit?</h4>
        </div>
        <div className={classes.voteContainer}>
          <Thumbs
            voteUp
            iconStyles={classes.percentageStyleUp}
            styles={{ width: 36, height: 36 }}
            opacity
          />
          <Thumbs
            voteUp={false}
            iconStyles={classes.percentageStyleDown}
            styles={{ width: 36, height: 36 }}
            opacity
          />
        </div>
      </div>
      <div className={classes.closingContainer}>
        <div className={classes.textLeft}>
          <p className={classes.closingText}>CLOSING IN</p>
        </div>
        <div className={classes.textRight}>
          <h3 className={classes.due}>22 days</h3>
        </div>
      </div>
    </div>
  )
}

export default Header
