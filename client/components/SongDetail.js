import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import fetchSongDetails from '../queries/fetchSongDetails'
import LyricCreate from './LyricCreate'
import LyricList from './LyricList'

class SongDetail extends Component {
  render() {
    const { song } = this.props.data

    if(!song){
      return <div>Loading...</div>
    }

    return(
      <div>
        <Link to="/" className="btn light-blue lighten-2">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    )
  }
}

export default graphql(fetchSongDetails, {
  options: (props) => { return { variables: { id: props.params.id }}}
})(SongDetail)
