import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel'

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      books : [],
    }
  }

  componentDidMount = async() => {
    const booksData = await axios.get(`http://localhost:3001/books`, { params: { email: this.props.auth0.user.email } })
    this.setState({
      books: booksData.data
    })
    console.log('hello', this.props.auth0.user.email)
  }

  render() {
    return (
      <Carousel>
        {this.state.books.map((books) => (
          <Carousel.Item>
          <img
            className="book1"
            src={books.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{books.name}</h3>
            <p>{books.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
      </Carousel>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
