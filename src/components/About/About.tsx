import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import aboutImage from "../../assets/images/banner.jpg";

const useStyles = makeStyles((theme: any) => ({
  aboutContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  aboutImage: {
    width: "50%",
  },
  halfSection: {
    width: "50%",
    paddingTop: theme.spacing(2),
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export const About = () => {
  const classes = useStyles();
  return (
    <Container
      style={{
        marginTop: "2.5rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className={classes.gridItem}>
          <Typography variant='h5'>Title</Typography>
          <Typography variant='caption'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={aboutImage} width='100%' alt='About page' />
        </Grid>
      </Grid>
    </Container>
  );
};
