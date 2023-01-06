import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => {
  return {
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    smMargin: {
      margin: theme.spacing(1),
   },
    actionDiv: {
      textAlign: 'center',
   },
  };
});