import {
  Box,
  Typography,
  Grid,
  TextareaAutosize,
  Container,
  Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomTextField } from '../CustomTextField/CustomTextField';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { LOCATION_DETAILS } from '../../constants';

const ValidationSchema = Yup.object().shape({});

const useStyles = makeStyles((theme: any) => ({
  textArea: {
    width: '100%',
    height: 200,
    boxSizing: 'border-box',
    borderRadius: 10
  },
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: theme.spacing(3)
  },
  iconContainer: {
    backgroundColor: '#ffc451',
    width: theme.spacing(7),
    height: theme.spacing(7),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    // color: '#fff',
    fontSize: 30,
  },
  locationDetailsContainer: {
    display: 'flex',
    marginBottom: theme.spacing(4)
  },
  submitButtonContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  submitButton: {
    width: '50%',
  }
}));

export const ContactUs = () => {
  const classes = useStyles();

  return (
    <Container>
      <Formik
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        validationSchema={ValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('values ', values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                {LOCATION_DETAILS.map((item) => (
                  <Box className={classes.locationDetailsContainer}>
                    <Box className={classes.iconContainer}>
                      <item.icon className={classes.icon} />
                    </Box>
                    <Box className={classes.contactContainer}>
                      <Typography>{item.title}</Typography>
                      <Typography>{item.description}</Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <CustomTextField
                      type="name"
                      name="name"
                      label="Your Name"
                      placeholder="Your Name"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CustomTextField
                      type="email"
                      name="email"
                      label="Your Email"
                      placeholder="Your Email"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <CustomTextField
                      type="subject"
                      name="subject"
                      label="Subject"
                      placeholder="Subject"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextareaAutosize
                      name="message"
                      placeholder="Message"
                      // rowsMin={15}
                      className={classes.textArea}
                    />
                  </Grid>

                </Grid>
                <Grid item xs={12} md={12} className={classes.submitButtonContainer}>
                    <Button variant="contained" color="secondary" className={classes.submitButton}>
                      Submit
                    </Button>
                  </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
