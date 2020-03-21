import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    formControl: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    '@global': {
      label: {
        fontFamily: '"Avenir Next", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif'
      }
    }
  }),
  { name: 'DateField' }
);