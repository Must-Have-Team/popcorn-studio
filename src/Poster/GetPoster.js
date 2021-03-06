import React, {
  Component
} from 'react';
import axios from 'axios';

const BASE_URL = 'https://popcorn-studio-17.herokuapp.com';

class GetPostersId extends Component {
  constructor(props) {
    super(props);

    this.state = {
      base64: ''
    }
  }
  componentDidMount() {
    const toDataURL = url => axios.get(url).then(data => {

      const base64 = data.data[0].dataUrl;

      this.setState({
        base64: base64
      })
    })
    toDataURL(`${BASE_URL}/api/images/${this.props.filmId}`);
  }

  render() {
    let img = this.state.base64;
    return ( <
      img key = {
        this.props.filmId
      }
      className = "img-box"
      style={{width: '100%', height: 'auto'}}
      id = {
        this.props.filmId
      }
      src = {
        img
      }
      alt = 'filmImg' / >

    )

  }
}
export default GetPostersId;