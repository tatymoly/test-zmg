import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import Card from "../card/card"
import Header from "../header/header"
import Alert from "../alert/alert"
import Footer from "../footer/footer"

import { votesActions } from "../../../store/votesSlice"
import useStyles from "./styles"
import data from "../../../assets/data"

const ResultPage = props => {
  const { handleVoteUp, handleVoteDown, setData, candidates } = props
  const [showAlert, setShowAlert] = useState(true)

  const classes = useStyles()

  const handleCloseAlert = () => {
    setShowAlert(false)
  }

  useEffect(() => {
    getLocalStorageData()
  }, [])

  const getLocalStorageData = () => {
    const votes = JSON.parse(localStorage.getItem("candidates"))
    setData(votes ? votes : data)
  }

  const handleChange = () => {
    const newData = JSON.stringify(candidates)
    localStorage.setItem("candidates", newData)
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
  setData: PropTypes.func.isRequired,
  saveData: PropTypes.func.isRequired,
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
  setData: list => dispatch(votesActions.setVotesFromLocalStore(list)),
  saveData: candidates =>
    dispatch(votesActions.setVotesOnLocalStorage(candidates)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultPage)
