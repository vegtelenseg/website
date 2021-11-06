import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import banner from "../../assets/images/banner.jpg";
import { BANNER_PROPS } from "../../constants";

const useStyles = makeStyles((theme: any) => ({
  banner: {
    position: "relative",
    height: "100vh",
    background: `url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    zIndex: -1,
  },
  bannerContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "relative",
  },
  bannerTagLine: {
    width: "100%",
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: theme.palette.common.white,
  },
}));

export const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bannerContainer}>
      <Box className={classes.banner}></Box>
      <Box className={classes.bannerTagLine}>
        <Typography variant='h4'>{BANNER_PROPS.title}</Typography>
        <Typography variant='h6'>{BANNER_PROPS.subtitle}</Typography>
      </Box>
    </Box>
  );
};
