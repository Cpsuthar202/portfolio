// src/theme/commonTheme.ts
import { mColor } from "@color";
import { createTheme, ThemeOptions } from "@mui/material/styles";

export const commonTheme: ThemeOptions = {
  palette: {
    primary: {
      // The primary color palette
      light: mColor.primaryLight, // Lighter shade of the primary color
      main: mColor.primaryMain, // Main primary color used across components
      dark: mColor.primaryDark, // Darker shade of the primary color
      contrastText: mColor.white, // Text color when used on a primary background
    },
    secondary: {
      // The secondary color palette
      light: mColor.secondaryLight, // Lighter shade of the secondary color
      main: mColor.secondaryMain, // Main secondary color used across components
      dark: mColor.secondaryDark, // Darker shade of the secondary color
      contrastText: mColor.white, // Text color when used on a secondary background
    },
    error: {
      // The error color palette
      light: mColor.errorLight, // Lighter shade of the error color
      main: mColor.errorMain, // Main error color used for error states
      dark: mColor.errorDark, // Darker shade of the error color
      contrastText: mColor.white, // Text color when used on an error background
    },
    warning: {
      // The warning color palette
      light: mColor.warningLight, // Lighter shade of the warning color
      main: mColor.warningMain, // Main warning color used for warnings
      dark: mColor.warningDark, // Darker shade of the warning color
      contrastText: mColor.black, // Text color when used on a warning background
    },
    info: {
      // The info color palette
      light: mColor.infoLight, // Lighter shade of the info color
      main: mColor.infoMain, // Main info color used for informational messages
      dark: mColor.infoDark, // Darker shade of the info color
      contrastText: mColor.white, // Text color when used on an info background
    },
    success: {
      // The success color palette
      light: mColor.successLight, // Lighter shade of the success color
      main: mColor.successMain, // Main success color used for successful actions
      dark: mColor.successDark, // Darker shade of the success color
      contrastText: mColor.white, // Text color when used on a success background
    },
  },
  typography: {
    fontFamily: "Nunito",
    h1: {
      fontSize: "55px",
      // fontWeight: 300,
      // letterSpacing: "-0.01562em",
      // lineHeight: 1.167,
      [createTheme().breakpoints.down("md")]: {
        fontSize: "50px",
      },
    },
    h2: {
      fontSize: "50px",
      // fontWeight: 300,
      // letterSpacing: "-0.00833em",
      // lineHeight: 1.2,
      [createTheme().breakpoints.down("md")]: {
        fontSize: "45px",
      },
    },
    h3: {
      fontSize: "45px",
      // fontWeight: 400,
      // letterSpacing: "0em",
      // lineHeight: 1.167,
      [createTheme().breakpoints.down("md")]: {
        fontSize: "40px",
      },
    },
    h4: {
      fontSize: "40px",
      // fontWeight: 400,
      // letterSpacing: "0.00735em",
      // lineHeight: 1.235,
      [createTheme().breakpoints.down("md")]: {
        fontSize: "35px",
      },
    },
    h5: {
      fontSize: "35px",
      // fontWeight: 400,
      // letterSpacing: "0em",
      // lineHeight: 1.334,
      [createTheme().breakpoints.down("sm")]: {
        fontSize: "30px",
      },
    },
    h6: {
      fontSize: "30px",
      // fontWeight: 500,
      // letterSpacing: "0.0075em",
      // lineHeight: 1.6,
      [createTheme().breakpoints.down("md")]: {
        fontSize: "25px",
      },
    },
    subtitle1: {
      fontSize: "25px",
      // fontWeight: 400,
      // letterSpacing: "0.00938em",
      // lineHeight: 1.75,
      [createTheme().breakpoints.down("md")]: {
        fontSize: "20px",
      },
    },
    subtitle2: {
      fontSize: "20px",
      // fontWeight: 500,
      // letterSpacing: "0.00714em",
      // lineHeight: 1.57,
      [createTheme().breakpoints.down("md")]: {
        fontSize: "15px",
      },
    },
    body1: {
      fontSize: "15px",
      // fontWeight: 400,
      // letterSpacing: "0.03125em",
      // lineHeight: 1.5,
      [createTheme().breakpoints.down("md")]: {
        fontSize: "13px",
      },
    },
    body2: {
      fontSize: "10px",
      // fontWeight: 400,
      // letterSpacing: "0.01786em",
      // lineHeight: 1.43,
      [createTheme().breakpoints.down("md")]: {
        fontSize: "8px",
      },
    },
    // button: {
    //   fontSize: "0.875rem",
    //   fontWeight: 500,
    //   letterSpacing: "0.02857em",
    //   lineHeight: 1.75,
    //   textTransform: "uppercase",
    // },
    // caption: {
    //   fontSize: "0.75rem",
    //   fontWeight: 400,
    //   letterSpacing: "0.03333em",
    //   lineHeight: 1.66,
    // },
    // overline: {
    //   fontSize: "0.75rem",
    //   fontWeight: 400,
    //   letterSpacing: "0.16667em",
    //   lineHeight: 2.66,
    //   textTransform: "uppercase",
    // },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Sets a border radius of 8px for all buttons
          borderRadius: 5,
          // Prevents automatic text capitalization
          textTransform: "none",
          // Sets the default text color to white
          color: mColor.white,
          whiteSpace: "nowrap",
        },
        containedPrimary: {
          // Sets the primary button background color
          backgroundColor: mColor.primaryMain,
          "&:hover": {
            // Changes the primary button background on hover
            backgroundColor: mColor.primaryMain,
          },
        },
        containedSecondary: {
          // Sets the secondary button background color
          backgroundColor: mColor.secondaryMain,
          "&:hover": {
            // Changes the secondary button background on hover
            backgroundColor: mColor.secondaryMain,
          },
        },
        containedSuccess: {
          // Sets the success button background color
          backgroundColor: mColor.successMain,
          "&:hover": {
            // Changes the success button background on hover
            backgroundColor: mColor.successMain,
          },
        },
        containedError: {
          // Sets the error button background color
          backgroundColor: mColor.errorMain,
          "&:hover": {
            // Changes the error button background on hover
            backgroundColor: mColor.errorMain,
          },
        },
        containedWarning: {
          // Sets the warning button background color
          backgroundColor: mColor.warningMain,
          "&:hover": {
            // Changes the warning button background on hover
            backgroundColor: mColor.warningMain,
          },
        },
        containedInfo: {
          // Sets the info button background color
          backgroundColor: mColor.infoMain,
          "&:hover": {
            // Changes the info button background on hover
            backgroundColor: mColor.infoMain,
          },
        },
        outlinedPrimary: {
          // Sets the primary outlined button border color and text color
          borderColor: mColor.primaryMain,
          color: mColor.primaryDark,
          "&:hover": {
            // Changes the primary outlined button background on hover
            // backgroundColor: mColor.secondaryLight,
          },
        },
        outlinedSecondary: {
          // Sets the secondary outlined button border color and text color
          borderColor: mColor.secondaryMain,
          color: mColor.secondaryDark,
          "&:hover": {
            // Changes the secondary outlined button background on hover
            // backgroundColor: mColor.secondaryLight,
          },
        },
        outlinedSuccess: {
          // Sets the success outlined button border color and text color
          borderColor: mColor.successMain,
          color: mColor.successDark,
          "&:hover": {
            // Changes the success outlined button background on hover
            // backgroundColor: mColor.successLight,
          },
        },
        outlinedError: {
          // Sets the error outlined button border color and text color
          borderColor: mColor.errorMain,
          color: mColor.errorDark,
          "&:hover": {
            // Changes the error outlined button background on hover
            // backgroundColor: mColor.errorLight,
          },
        },
        outlinedWarning: {
          // Sets the warning outlined button border color and text color
          borderColor: mColor.warningMain,
          color: mColor.warningDark,
          "&:hover": {
            // Changes the warning outlined button background on hover
            // backgroundColor: mColor.warningLight,
          },
        },
        outlinedInfo: {
          // Sets the info outlined button border color and text color
          borderColor: mColor.infoMain,
          color: mColor.infoDark,
          "&:hover": {
            // Changes the info outlined button background on hover
            // backgroundColor: mColor.infoLight,
          },
        },
        textPrimary: {
          // Sets the primary text button color
          color: mColor.primaryMain,
          "&:hover": {
            // Changes the primary text button background on hover
            // backgroundColor: mColor.primaryLight,
          },
        },
        textSecondary: {
          // Sets the secondary text button color
          color: mColor.secondaryMain,
          "&:hover": {
            // Changes the secondary text button background on hover
            // backgroundColor: mColor.secondaryLight,
          },
        },
        textSuccess: {
          // Sets the success text button color
          color: mColor.successMain,
          "&:hover": {
            // Changes the success text button background on hover
            // backgroundColor: mColor.successLight,
          },
        },
        textError: {
          // Sets the error text button color
          color: mColor.errorMain,
          "&:hover": {
            // Changes the error text button background on hover
            // backgroundColor: mColor.errorLight,
          },
        },
        textWarning: {
          // Sets the warning text button color
          color: mColor.warningMain,
          "&:hover": {
            // Changes the warning text button background on hover
            // backgroundColor: mColor.warningLight,
          },
        },
        textInfo: {
          // Sets the info text button color
          color: mColor.infoMain,
          "&:hover": {
            // Changes the info text button background on hover
            // backgroundColor: mColor.infoLight,
          },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          // textDecoration : none|underline|overline|line-through|blink
          textDecoration: "none", // Remove underline by default
          color: mColor.black, // Inherit color from parent
          "&:hover": {
            color: mColor.primaryMain,
            textDecoration: "none",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          // Outlined variant customization
          "& .MuiOutlinedInput-root": {
            color: mColor.primaryMain, // Text color
            borderRadius: "10px", // Custom border radius for outlined variant

            "& fieldset": {
              borderColor: mColor.primaryLight, // Default border color for outlined
            },
            "&:hover fieldset": {
              borderColor: mColor.primaryMain, // Border color on hover for outlined
            },
            "&.Mui-focused fieldset": {
              borderColor: mColor.primaryDark, // Border color when focused for outlined
            },
          },

          // Filled variant customization
          "& .MuiFilledInput-root": {
            color: mColor.primaryLight, // Text color
            borderRadius: "14px", // Custom border radius for filled variant
            backgroundColor: mColor.primaryMain, // Default background color for filled
            "&:hover": {
              backgroundColor: mColor.primaryMain, // Background color on hover for filled
            },
            "&.Mui-focused": {
              backgroundColor: mColor.primaryMain, // Background color when focused for filled
            },
          },

          // Standard variant customization
          "& .MuiInput-underline": {
            fontSize: "20px",
            color: mColor.primaryMain,

            "&:before": {
              borderBottomColor: mColor.primaryMain, // Border color before focus for standard
            },
            "&:hover:not(.Mui-disabled):before": {
              borderBottomColor: mColor.primaryLight, // Border color on hover for standard
            },
            "&:after": {
              borderBottomColor: mColor.primaryDark, // Border color when focused for standard
            },
          },

          "& .MuiFormLabel-root": {
            fontSize: "19px",
            color: mColor.primaryMain, // Label color
            "&.Mui-focused": {
              color: mColor.primaryDark, // Label color when focused
            },
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          width: 40,
          height: 40,
          color: mColor.primaryMain,
        },
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 48,
          height: 48,
          color: mColor.primaryMain,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      // mobile: 0,
      // tablet: 640,
      // laptop: 1024,
      // desktop: 1200,
    },
  },
};
