import { AppBar, Box, Container, Typography } from "@material-ui/core";
import { NAV_ITEMS } from "../../constants";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navItem: {
    marginRight: "1rem",
    fontSize: theme.spacing(2),
    "&:last-child": {
      marginRight: 0,
    },
  },
  navContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const Nav = () => {
  const classes = useStyles();
  return (
    <Box>
      <AppBar>
        <Typography
          variant='caption'
          style={{
            display: "inherit",
            position: "absolute",
          }}
        >
          Logo
        </Typography>
        <Container className={classes.navContainer}>
          <Box>
            {NAV_ITEMS.map((navItem) => (
              <Typography
                key={navItem.name}
                variant='caption'
                className={classes.navItem}
              >
                {navItem.name}
              </Typography>
            ))}
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};
