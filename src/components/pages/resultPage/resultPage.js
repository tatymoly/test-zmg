import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import Card from "../card/card"
import Header from "../header/header"
import Alert from "../alert/alert"
import Footer from "../footer/footer"

import { votesActions } from "../../../store/votes/votesSlice"
import useStyles from "./styles"

const ResultPage = props => {
  const { handleVoteUp, handleVoteDown, getData, saveData, candidates } = props
  const [showAlert, setShowAlert] = useState(true)

  const classes = useStyles()

  const handleCloseAlert = () => {
    setShowAlert(false)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleChange = () => {
    saveData(candidates)
  }

  useEffect(() => {
    handleChange()
  }, [candidates])

  return (
    <div>
      <Header />
      <div className={classes.candidatesContainer}>
        {showAlert && <Alert handleCloseAlert={handleCloseAlert} />}
        {candidates.map(candidate => {
          return (
            <div className={classes.cardContainer} key={candidate.id}>
              <Card
                handleVoteUp={handleVoteUp}
                handleVoteDown={handleVoteDown}
                id={candidate.id}
                name={candidate.name}
                positive={candidate.positive}
                negative={candidate.negative}
                date={candidate.date}
                area={candidate.area}
                description={candidate.description}
                picture={candidate.picture}
              />
            </div>
          )
        })}
        <Footer />
      </div>
    </div>
  )
}

ResultPage.propTypes = {
  handleVoteUp: PropTypes.func.isRequired,
  handleVoteDown: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  candidates: PropTypes.arrayOf(PropTypes.shape),
}
ResultPage.defaultProps = {
  candidates: {},
}

const mapStateToProps = ({ votes }) => ({
  candidates: votes.candidates,
})

const mapDispatchToProps = dispatch => ({
  handleVoteUp: id => dispatch(votesActions.voteUp(id)),
  handleVoteDown: id => dispatch(votesActions.voteDown(id)),
  getData: () => dispatch(votesActions.getVotesFromLocalStorage()),
  saveData: candidates =>
    dispatch(votesActions.setVotesOnLocalStorage(candidates)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultPage)
