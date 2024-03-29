import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    marginBottom: '5%',
  },
  emptyButton: {
    color: 'white',
    backgroundColor: '#f44336',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
    "&:hover": {
      color: 'white',
      backgroundColor: '#d32f2f'
    }
  },

  checkoutButton: {
    minWidth: '150px',
    color: 'white',
    backgroundColor: '#00e676',
    "&:hover": {
      color: 'white',
      backgroundColor: '#00c853'
    }
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));