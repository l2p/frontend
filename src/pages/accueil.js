import React, {Component} from 'react';
import Axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Post from '../components/post';


export default class Accueil extends Component {
  state = {
    posts: []
  }

  async getPosts() {
    try {
      const response = await Axios.get('http://localhost:5000/api/post');
      console.log(response);
      return response;
    } catch (error) {
      console.error(`Erreur list posts: ${error}`);
    }
  }

  componentDidMount() {
    this.setState({
      posts: this.getPosts()
    })
  }

  render() {
    return (
      <main>
          <Grid container spacing={4} className="">
          {this.state.posts.map((post) => (
              <Post key={post.id} post={post} />
          ))}
          </Grid>
      </main>
    );
  }
}
