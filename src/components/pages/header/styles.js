import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  header: {
    height: 746,
    backgroundImage:
      'url("https://s.france24.com/media/display/8704d842-3976-11e9-81de-005056bff430/w:1280/p:16x9/papa_cumbre.webp")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
  },
  infoCard: {
    width: 500,
    height: 450,
    margin: "104px 0px 0px 135px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(30px)",
    color: "#f4f4f4",
    "@media only screen and (max-width: 920px)": {
      margin: 10,
      width: 300,
      height: 500,
    },
  },
  title: {
    fontSize: 50,
    fontWeight: 700,
    "@media only screen and (max-width: 920px)": {
      fontSize: 36,
    },
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 500,
    color: "#beb8b8",
  },
  textContainer: {
    padding: 34,
    height: 300,
    "@media only screen and (max-width: 920px)": {
      height: 350,
    },
  },
  description: {
    fontSize: 20,
    width: 394,
    wordSpacing: 3,
    padding: "36px 0px 26px ",
    color: "#dbdad9",
    "@media only screen and (max-width: 920px)": {
      width: "auto",
      padding: "10px 0px",
    },
  },
  moreInfoLink: {
    color: "#beb8b8",
    paddingLeft: 10,
    fontSize: 14,
    textDecoration: "underline",
    "&:hover": {
      cursor: "pointer",
    },
  },
  veredit: {
    fontSize: 22,
    paddingTop: 28,
    fontWeight: 700,
  },
  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 80,
    padding: "0px 124px 0px 136px",
    "@media only screen and (max-width: 920px)": {
      padding: 0,
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
  },
  navTitle: {
    fontSize: 26,
    color: "#f4f4f4",
    fontWeight: 400,
  },
  navLinks: {
    composes: "$moreInfoLink",
    textDecoration: "none",
    padding: "0px 25px",
  },
  voteContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  voteIcon: {
    width: "50%",
    height: 82,
    display: "flex",
    justifyContent: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  percentageStyleDown: {
    composes: "$voteIcon",
    background: "#ffad1bb3",
  },
  percentageStyleUp: {
    composes: "$voteIcon",
    background: "#1fbbb4b3",
  },
  closingContainer: {
    color: "#f4f4f4",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    bottom: 0,
    position: "absolute",
    height: 56,
    width: "100%",
  },
  textContainerBottom: {
    height: "inherit",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px 20px",
  },
  textLeft: {
    composes: "$textContainerBottom",
    width: "30%",
    background: "rgb(0 0 0 / 0.5)",
    justifyContent: "flex-end",
  },
  closingText: {
    fontSize: 16,
    fontWeight: 700,
  },
  textRight: {
    composes: "$textContainerBottom",
    width: "70%",
    background: "rgb(255 255 255 / .5)",
    color: "#000",
    justifyContent: "flex-start",
  },
  due: {
    fontSize: 28,
    fontWeight: 400,
  },
})

export default useStyles
