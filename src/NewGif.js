import React, {Component} from 'react';

class NewGif extends Component {
  constructor(props){
    super(props)
    this.state = {
      gif:""
    }
  }
  componentWillMount(){
    this.getGif()
  }

  async getGif(){
    const response = await fetch("https://api.giphy.com/v1/gifs/random?api_key=AjrtAAH0R25lbgMcwdfW8SQbDZ06XJG2&tag=&rating=G");
    const json = await response.json();
    this.setState({gif:json.data.image_url})
  }
  render(){
    return(
      <img src={this.state.gif} alt="Loading.."></img>
    )
  }
}

export default NewGif;
