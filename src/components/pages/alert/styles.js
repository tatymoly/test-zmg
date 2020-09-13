import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  alertContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "#ebebeb",
    margin: "32px 0px",
    height: 110,
    width: "100%",
    "@media only screen and (max-width: 920px)": {
      height: 200,
    },
  },
  leftContainer: {
    width: "20%",
    textAlign: "right",
    paddingRight: 20,
    "& h2": {
      fontSize: 28,
    },
    "& h5": {
      fontSize: 18,
      fontWeight: 400,
    },
    "@media only screen and (max-width: 920px)": {
      textAlign: "ceenter",
      "& h2": {
        fontSize: 18,
      },
      "& h5": {
        fontSize: 14,
      },
    },
  },
  rightContainer: {
    width: "60%",
    textAlign: "left",
    paddingLeft: 20,
    "& p": {
      fontSize: 14,
    },
    "@media only screen and (max-width: 920px)": {
      width: "46%",
      padding: 0,
    },
  },
  closeButton: {
    marginLeft: 32,
    width: "5%",
    height: 30,
    border: "none",
    background: "transparent",
    fontSize: 20,
    "&:hover": {
      cursor: "pointer",
    },
  },
})

export default useStyles
