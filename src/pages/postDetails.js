import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import Axios from 'axios';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  postContent: {
    position: 'relative',
  },
};
class PostDetails extends React.Component {

  state = {
    isLoading: true,
    post:null,
    error:null
  }

  async getPost(postId) {
    const res = await Axios.get(`http://localhost:5000/api/post/${postId}`);
    try {
      this.setState({
        post: res.data[0],
        isLoading: false
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  componentDidMount() {
    const postId = this.props.match.params.postId;
    this.getPost(postId);
  }

  render() {
    const { isLoading, post,  error } = this.state;
    const { classes } = this.props;
    return (
      <main>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          <Container maxWidth="sm">
            <img src={post.image} alt={post.imageText} />
            <div className={classes.postContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {post.date}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {post.description}
              </Typography>
            </div>
          </Container>
        ) : (
          <p>Loading...</p>
          )} 
      </main>
    );
  }
}

PostDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string
    })
  }),
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(withRouter(PostDetails));