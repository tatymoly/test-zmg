import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  container: {
    width: "100%",
    "& a": {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  backgroundContainer: {
    backgroundImage: 'url("https://www.dw.com/image/44857992_303.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#504f4f",
  },
  addContainer: {
    width: "100%",
    height: 80,
    marginBottom: 30,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5c7",
    "& h2": {
      paddingLeft: "30px",
      fontSize: 28,
      fontWeight: 400,
    },
    "& button": {
      marginRight: 40,
      width: 180,
      height: 50,
      background: "transparent",
      border: "solid 2px",
      fontSize: 18,
      fontWeight: 400,
      "&:hover": {
        cursor: "pointer",
      },
    },
    "@media only screen and (max-width: 920px)": {
      "& h2": {
        fontSize: 18,
      },
    },
  },
  divider: {
    background: "transparent",
    border: "1px dashed #4d4c4c",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 80,
    alignItems: "center",
    fontSize: 14,
    color: "#504f4f",
  },
  legal: {
    "& a": {
      padding: "0px 30px 0px 0px",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  social: {
    display: "flex",
    width: 150,
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 25,
  },
})

export default useStyles
