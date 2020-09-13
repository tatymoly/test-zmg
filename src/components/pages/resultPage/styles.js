import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  candidatesContainer: {
    display: "flex",
    flexDirecction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: "0px 230px",
    "@media only screen and (max-width: 1200px)": {
      margin: "0px 60px",
      justifyContent: "space-between",
    },
    "@media only screen and (max-width: 920px)": {
      margin: "0px 10px",
      justifyContent: "center",
    },
  },
  cardContainer: {
    width: "48%",
    margin: "30px 0px",
    "@media only screen and (max-width: 1200)": {
      width: "35%",
      margin: "30px 0px",
    },
    "@media only screen and (max-width: 920px)": {
      width: "90%",
      margin: 10,
    },
  },
  alertContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "#ebebeb",
    margin: "32px 0px",
  },
})

export default useStyles
