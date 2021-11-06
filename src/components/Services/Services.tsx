import React from 'react';
import {
  Container,
  Grid,
  Typography,
  CardContent,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const useStyles = makeStyles((theme: any) => ({
  iconContainer: {
    backgroundColor: '#ffc451',
    width: theme.spacing(8),
    height: theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 250,
    border: '1px solid #ebebeb',
  },
}));

export const Services = () => {
  const classes = useStyles();

  const servicesArray = [
    {
      icon: LocationOnIcon,
      title: 'Lorem Ipsum',
      description:
        'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    },
    {
      icon: LocationOnIcon,
      title: 'Lorem Ipsum',
      description:
        'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    },
    {
      icon: LocationOnIcon,
      title: 'Lorem Ipsum',
      description:
        'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    },
    {
      icon: LocationOnIcon,
      title: 'Lorem Ipsum',
      description:
        'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    },
    {
      icon: LocationOnIcon,
      title: 'Lorem Ipsum',
      description:
        'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    },
  ];
  return (
    <Container
      style={{
        marginTop: '2.5rem',
      }}
    >
      <Grid item xs={12} md={12}>
        <Grid container spacing={2}>
          {servicesArray.map((service) => (
            <Grid item xs={12} md={4}>
              <CardContent className={classes.cardContainer}>
                <Box className={classes.iconContainer}>
                  <service.icon />
                </Box>
                <Typography variant="h6">{service.title}</Typography>
                <Typography variant="caption" style={{ textAlign: 'center' }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
