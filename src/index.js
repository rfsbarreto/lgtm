// import React from 'react';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import App from "./components/App"
import giphy from './apis/giphy'


class App extends Component {
  state = { gifUrl: null }

  onGenerateGiph = async () => {
    const response = await giphy.get('/gifs/random')
    console.log(response)
    this.setState({
      gifUrl: response.data.data.fixed_width_downsampled_url,
      gifOriginalSize: response.data.data.image_original_url
    })
  }

  componentDidMount() {
    this.onGenerateGiph()
  }

  render() {
    console.log(this.gifUrl);
    return (
      <div>
       <img src={this.state.gifUrl} width="200" /><br/>
       <button onClick={this.onGenerateGiph}>Generate other random approve gif</button><br/>

       <p>{`![LGTM](${this.state.gifOriginalSize})`}</p>


      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
