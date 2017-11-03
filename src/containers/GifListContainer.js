import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

const URL = 'http://api.giphy.com/v1/gifs/search?q='
const LIMIT = '&limit=3'
const API_KEY = '&api_key=dc6zaTOxFJmzC'

export default class GifListContainer extends Component {

  state = {
    gifs: []
  }


  getGifs(query) {
    fetch(URL + query + LIMIT + API_KEY)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          gifs: json.data
        })
      })
  }

  handleSearch = (event) => {
    event.preventDefault()
    this.getGifs(event.target.children[0].value)
    this.setState({
      query: event.target.children[0].value //is this correct?
    }, () => {console.log(this.state.query)})
  }

  render() {
    return (
      <div className="gif-list-container">
        <GifSearch onSearch={this.handleSearch}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

}
