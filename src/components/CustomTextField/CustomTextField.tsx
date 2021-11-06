import { useField } from 'formik';
import TextField, { TextFieldProps } from '@mui/material/TextField';
// import {InputAdornment} from '@mui/core';
// import {ErrorIcon} from '../assets/icons/errorIcon';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
  textField: {
    color: '#000',
    width: '100%',
    borderRadius: '50%'
  },
}));

type PropsType = {
  name: string;
} & Omit<TextFieldProps, 'name' | 'value' | 'variant'>;

export function CustomTextField({name, InputProps, ...props}: PropsType) {
  const [field, meta] = useField(name);
  const classes = useStyles();

  return (
    <TextField
      {...field}
      variant="outlined"
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.touched && meta.error ? meta.error : null}
      className={classes.textField}
      InputProps={{
        // classes: {input: classes.resize},
        ...InputProps,
        // endAdornment: (
        //   <>
        //     {meta.error && meta.touched && (
        //       <InputAdornment position="end" component="span">
        //         {/* <ErrorIcon fill="#C60C30" /> */}
        //       </InputAdornment>
        //     )}

        //     {InputProps?.endAdornment}
        //   </>
        // ),
      }}
      {...props}
    />
  );
}