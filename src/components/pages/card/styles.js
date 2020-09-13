import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  displayFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  iconWidth: {
    width: 30,
    height: 30,
  },
  cardContainer: picture => ({
    height: 548,
    backgroundImage: `url(${picture})`,
    color: "#fff",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }),
  cardOpacity: {
    background: "#0000008f",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "100%",
  },
  titleContainer: {
    composes: "$displayFlex",
    alignItems: "flex-end",
  },
  titleIcon: {
    composes: "$iconWidth",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginRight: 10,
  },
  icon: {
    fill: "#ffffff",
  },
  iconPecent: {
    composes: "$icon",
    width: 32,
    height: 29,
  },
  thumbContainerUp: {
    composes: "$displayFlex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  thumbContainerDown: {
    composes: "$displayFlex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
  },
  titleInfo: {
    paddingLeft: 5,
  },
  title: {
    fontSize: 40,
    fontWeight: 700,
    width: "85%",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 500,
  },
  descriptionContainer: {
    paddingLeft: 38,
  },
  description: {
    margin: "20px 0px",
    height: 60,
    width: "80%",
  },
  buttonsContainer: {
    composes: "$displayFlex",
    alignItems: "center",
  },
  option: {
    composes: "$iconWidth",
    marginRight: 10,
    position: "relative",
  },
  input: {
    composes: "$iconWidth",
    margin: 0,
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0,
    "&:hover": {
      cursor: "pointer",
    },
  },
  voteIcons: {
    composes: "$titleIcon",
    margin: 0,
  },
  submitButton: {
    width: 100,
    height: 40,
    background: "transparent",
    border: "1px solid #fff",
    fontWeight: 500,
    color: "#fff",
    "&:hover": {
      cursor: "pointer",
    },
  },
  retryButton: {
    composes: "$submitButton",
    marginLeft: 10,
  },
  percentageBar: {
    composes: "$displayFlex",
    width: "100%",
    paddingTop: 36,
  },
  percentageStyleDown: {
    height: 48,
    paddingRight: 12,
    background: "#ffad1bb3",
  },
  percentageStyleUp: {
    height: 48,
    paddingLeft: 12,
    background: "#1fbbb4b3",
  },
})

export default useStyles
