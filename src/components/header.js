import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Link to="/" className={classes.toolbarTitle}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap>
            {title}
          </Typography>
        </Link>
        <Link to="/search">
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Link>
        <Link to="/login">
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </Link>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};