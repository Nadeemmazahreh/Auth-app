import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      books : '',
    }
  }

  getBooks = async () => {
    const booksData = await axios.get('https://auth-server33.herokuapp.com/books', { params: { email: this.props.auth0.user.email } })

    this.setState({
      books: booksData
    })
  }

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="book1"
            src={this.state.booksData[0].image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{this.state.booksData[0].name}</h3>
            <p>{this.state.booksData[0].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="book2"
            src={this.state.booksData[1].image}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>{this.state.booksData[1].name}</h3>
            <p>{this.state.booksData[1].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
