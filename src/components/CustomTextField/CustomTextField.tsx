import { useField } from 'formik';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
// import {InputAdornment} from '@material-ui/core';
// import {ErrorIcon} from '../assets/icons/errorIcon';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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