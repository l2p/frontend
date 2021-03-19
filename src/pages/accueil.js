import React from 'react';
import Axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Post from '../components/post';


export default class Accueil extends React.Component {

  state = {
    isLoading: true,
    posts:[],
    error:null
  }

  async getPosts() {
    const res = await Axios.get("http://localhost:5000/api/post");
    try {
      this.setState({
        posts: res.data,
        isLoading: false
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { isLoading, posts,  error } = this.state;
    return (
      <main>
        {error ? <p>{error.message}</p> : null}
        <Grid container spacing={4} className="">
            {!isLoading ? (
              posts.map(postItem => {
                <Post key={postItem._id} post={postItem} />
              })
            ) : (
              <p>Loading...</p>
            )}
          </Grid>  
      </main>
    );
  }
}
