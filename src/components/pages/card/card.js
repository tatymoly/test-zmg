import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import { ReactComponent as ThumbUp } from "../../../assets/icons/thumb_up.svg"
import { ReactComponent as ThumbDown } from "../../../assets/icons/thumb_down.svg"

import useStyles from "./styles"

export const Thumbs = ({
  iconStyles,
  voteUp,
  percentage,
  opacity,
  styles,
  ...props
}) => {
  const classes = useStyles()
  return (
    <div
      className={iconStyles}
      style={{
        ...props.style,
        backgroundColor: !opacity && (voteUp ? "#1fbbb4" : "#ffad1b"),
      }}
    >
      {voteUp ? (
        <div className={classes.thumbContainerUp}>
          <ThumbUp
            className={percentage ? classes.iconPecent : classes.icon}
            style={styles}
          />
          {percentage && <p>{`${percentage}%`}</p>}
        </div>
      ) : (
        <div className={classes.thumbContainerDown}>
          {percentage && <p>{`${percentage}%`}</p>}
          <ThumbDown
            className={percentage ? classes.iconPecent : classes.icon}
            style={styles}
          />
        </div>
      )}
    </div>
  )
}

const Card = props => {
  const {
    handleVoteUp,
    handleVoteDown,
    id,
    name,
    positive,
    negative,
    date,
    area,
    description,
    picture,
  } = props
  const [checked, setChecked] = useState({
    up: false,
    down: false,
  })
  const [percentage, setPercentage] = useState({
    percentageUp: 0,
    percentageDown: 0,
  })
  const [voted, setVoted] = useState(false)
  const [voteUp, setVoteUp] = useState(false)
  const classes = useStyles(picture)

  useEffect(() => {
    getPercentage()
    if (positive > negative) {
      setVoteUp(true)
    }
  }, [positive, negative])

  const getPercentage = () => {
    const prevTotal = positive + negative
    const up = Math.round((positive * 100) / prevTotal)
    const down = Math.round((negative * 100) / prevTotal)
    setPercentage({
      ...percentage,
      percentageUp: up,
      percentageDown: down,
    })
  }

  const handleVoteStyle = prop => {
    if (prop === "up") {
      setChecked({ ...checked, up: true, down: false })
    } else {
      setChecked({ ...checked, down: true, up: false })
    }
  }

  const handleVoteSubmit = () => {
    if (checked.up) {
      handleVoteUp(id)
    } else if (checked.down) {
      handleVoteDown(id)
    }
    setChecked({ up: false, down: false })
    setVoted(true)
  }

  const handleVoteAgain = () => {
    setVoted(false)
  }

  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardOpacity}>
        <div className={classes.infoContainer}>
          <div className={classes.titleContainer}>
            <Thumbs iconStyles={classes.titleIcon} voteUp={voteUp} />
            <h2 className={classes.title}>{name}</h2>
          </div>
          <div className={classes.descriptionContainer}>
            <p className={classes.subtitle}>{`${date} in ${area}`}</p>
            <p className={classes.description}>{description}</p>
            {voted ? (
              <div className={classes.buttonsContainer}>
                <p>Thank you for voting!</p>
                <button
                  className={classes.retryButton}
                  aria-label="vote again"
                  onClick={handleVoteAgain}
                >
                  Vote again
                </button>
              </div>
            ) : (
              <div className={classes.buttonsContainer}>
                <form className={classes.buttonsContainer}>
                  <label
                    className={classes.option}
                    style={{ border: checked.up && "1px solid #fff" }}
                  >
                    <input
                      type="radio"
                      name="votes"
                      value="up"
                      className={classes.input}
                      onChange={() => handleVoteStyle("up")}
                    />
                    <span>
                      <Thumbs iconStyles={classes.voteIcons} voteUp />
                    </span>
                  </label>
                  <label
                    className={classes.option}
                    style={{ border: checked.down && "1px solid #fff" }}
                  >
                    <input
                      type="radio"
                      name="votes"
                      value="down"
                      className={classes.input}
                      onChange={() => handleVoteStyle("down")}
                    />
                    <span>
                      <Thumbs iconStyles={classes.voteIcons} voteUp={false} />
                    </span>
                  </label>
                </form>
                <button
                  className={classes.submitButton}
                  aria-label="vote now"
                  onClick={handleVoteSubmit}
                >
                  Vote now
                </button>
              </div>
            )}
          </div>
          <div className={classes.percentageBar}>
            <Thumbs
              voteUp
              percentage={percentage.percentageUp}
              iconStyles={classes.percentageStyleUp}
              opacity
              style={{
                width: `${percentage.percentageUp}%`,
              }}
            />
            <Thumbs
              voteUp={false}
              percentage={percentage.percentageDown}
              iconStyles={classes.percentageStyleDown}
              opacity
              style={{
                width: `${percentage.percentageDown}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  handleVoteUp: PropTypes.func.isRequired,
  handleVoteDown: PropTypes.func.isRequired,
  id: PropTypes.number,
  name: PropTypes.string,
  positive: PropTypes.number,
  negative: PropTypes.number,
  date: PropTypes.string,
  area: PropTypes.string,
  description: PropTypes.string,
  picture: PropTypes.string,
}
Card.defaultProps = {
  id: 0,
  name: "",
  positive: 0,
  negative: 0,
  date: "",
  area: "",
  description: "",
  picture: "",
}

export default Card
