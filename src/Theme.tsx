import {
  responsiveFontSizes,
  Theme,
} from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles';
// import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";

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
      dark: "rgba(255, 255, 255, 0.7)",
      main: "#fefafa",
      light: "#75AED1",
    },
    secondary: {
      dark: "rgba(117, 174, 209, 0.7)",
      main: "#75AED1",
      light: "#66ADD0",
    },
    error: {
      dark: "#C60C30",
      main: "#C60C30",
      light: "#C60C30",
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
  props: {
    // MuiSvgIcon: {
    //   color: 'primary',
    // },
    // MuiButton: {
    //   size: 'large',
    // },
    // MuiTypography: {
    //   color: "inherit",
    // },
    // MuiInput: {
    //   disableUnderline: true,
    // },
    // MuiFilledInput: {
    //   disableUnderline: true,
    // },
    // MuiCheckbox: {
    //   icon: <RadioButtonUncheckedIcon />,
    //   checkedIcon: <CheckCircleIcon />,
    // },
    // MuiRadio: {
    //   icon: <RadioButtonUncheckedIcon />,
    //   checkedIcon: <CheckCircleIcon />,
    // },
    // MuiCircularProgress: {
    //   size: 25,
    // },
    // //This props has not been added to the types
    // //eslint-disable-next-line
    // //@ts-ignore
    // MuiAlert: {
    //   variant: 'filled',
    // },
    // MuiTextField: {
    //   variant: 'outlined',
    // },
  },
  overrides: {
    // MuiInputLabel: {
    //   outlined: {
    //     // fontFamily: 'Regular',
    //     color: '#707070',
    //   },
    // },
    MuiTypography: {
      root: {
        color: "inherit",
      },
    },
    MuiContainer: {
      root: {
        marginTop: 50,
        "@media (min-width: 767px)": {
          paddingRight: "2.5rem",
          paddingLeft: "2.5rem",
        },
      },
    },

    MuiInputLabel: {
      outlined: {
        color: "rgba(0,0,0,.8)",
      },
    },
    MuiAppBar: {
      root: {
        padding: "1rem",
      },
      colorPrimary: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "#fff",
      },
    },
    MuiDrawer: {
      paper: {
        background: "rgba(116, 116, 117, .89)",
      },
    },
    MuiOutlinedInput: {
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
        borderColor: "rgba(0,0,0,.8)",
      },
    },
    MuiInput: {},

    MuiButton: {
      root: {
        color: "#fff",
        margin: "1rem",
      },
      containedSecondary: {
        "&$hover": {
          backgroundColor: "red",
        },
      },
      contained: {
        boxShadow: "none",
        "&$hover": {
          background: "red",
        },
      },
    },
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
  },
  typography: {
    fontFamily: ["noto-thin", "noto-regular", "sans", "sans-serif"].join(),
    fontSize: 16,
    h1: {
      fontSize: "12rem",
    },
    h3: {
      fontSize: "9rem",
    },
    h4: {
      fontSize: "5rem",
      fontFamily: "noto-thin",
    },
    h5: {
      fontFamily: "tangerine-bold",
      fontSize: "5rem",
    },
    h6: {
      fontFamily: "tangerine",
      fontSize: "3rem",
    },
    body2: {
      fontSize: "1rem",
      fontFamily: "hg-regular",
      color: "#22333E",
    },
    caption: {
      textAlign: "left",
    },
  },
});

export const theme = responsiveFontSizes(baseTheme, {
  breakpoints: ["xs", "sm", "md", "lg", "xl"],
  factor: 4,
  // disableAlign: true,
});
