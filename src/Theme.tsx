import { responsiveFontSizes, Theme, createTheme } from '@mui/material/styles';
// import RadioButtonUncheckedIcon from "@mui/icons/RadioButtonUnchecked";
// import CheckCircleIcon from "@mui/icons/CheckCircle";

export const baseTheme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
      md: 1023,
      lg: 1439,
      xl: 1919,
    },
  },
  palette: {
    // text: {primary: '#fff', secondary: '#002765', disabled: 'grey'},
    primary: {
      dark: 'rgba(255, 255, 255, 0.7)',
      main: '#fefafa',
      light: '#75AED1',
    },
    secondary: {
      dark: 'rgba(117, 174, 209, 0.7)',
      main: '#75AED1',
      light: '#66ADD0',
    },
    error: {
      dark: '#C60C30',
      main: '#C60C30',
      light: '#C60C30',
    },
    // warning: {
    //   main: '#D2492A',
    // },
    // info: {
    //   main: '#3391C0',
    // },
    // success: {
    //   main: '#007749',
    // },
    // grey: {
    //   '300': '#E6E6E6',
    // },
    // common: {
    //   white: '#fff',
    // },
  },
  components: {
    // MuiInputLabel: {
    //   outlined: {
    //     // fontFamily: 'Regular',
    //     color: '#707070',
    //   },
    // },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: 50,
          '@media (min-width: 767px)': {
            paddingRight: '2.5rem',
            paddingLeft: '2.5rem',
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          color: 'rgba(0,0,0,.8)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: '1rem',
        },
        colorSecondary: {
          backgroundColor: 'green'
        },
        colorPrimary: {
          backgroundColor: 'red',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'rgba(116, 116, 117, .89)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,

          color: '#fff',

          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #707070',
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #707070',
            },
          },
          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #707070',
            },
          },
        },
        notchedOutline: {
          borderColor: 'rgba(0,0,0,.8)',
        },
      },
    },
    MuiInput: {},

    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          margin: '1rem',
        },
        containedSecondary: {
          '&$hover': {
            backgroundColor: 'red',
          },
        },
        contained: {
          boxShadow: 'none',
          '&$hover': {
            background: 'red',
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
  },
  typography: {
    fontFamily: ['noto-thin', 'noto-regular', 'sans', 'sans-serif'].join(),
    fontSize: 16,
    h1: {
      fontSize: '12rem',
    },
    h3: {
      fontSize: '9rem',
    },
    h4: {
      fontSize: '5rem',
      fontFamily: 'noto-thin',
    },
    h5: {
      fontFamily: 'tangerine-bold',
      fontSize: '5rem',
    },
    h6: {
      fontFamily: 'tangerine',
      fontSize: '3rem',
    },
    body2: {
      fontSize: '1rem',
      fontFamily: 'hg-regular',
      color: '#22333E',
    },
    caption: {
      textAlign: 'left',
    },
  },
});

export const theme = responsiveFontSizes(baseTheme, {
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
  factor: 4,
  // disableAlign: true,
});
