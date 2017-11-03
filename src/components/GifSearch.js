//render a form
import React, {Component} from 'react'


export default class GifSearch extends Component {
  state = {
    query: ''
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <div className="gif-search">
        <form onSubmit={this.props.onSearch}>
          <input type="text" value={this.state.query} onChange={this.handleChange}/>
          <input type="submit" value="Search Gifs" />
        </form>
      </div>
    )
  }
}
