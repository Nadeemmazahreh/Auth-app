import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import AddBook from './addBook'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/Card'

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      books: [],

      show: false

    }
  }

  updateBookData = (e) => {
    this.setState({
        bookData: e
    })
}

  showModal = async (e) => {
    this.setState({
      show: true
    })
  }

  hideModal = async (e) => {
    this.setState({
      show: false,
    })
  }


  componentDidMount = async () => {
    const booksData = await axios.get(`http://localhost:3001/books`, { params: { email: this.props.auth0.user.email } })
    this.setState({
      books: booksData.data
    })
  }

  // function Example() {
  //   const [showForm, setShowForm] = useState(false);

  //   const showForm = () => {
  //     setShowForm(!showForm);
  //   }}

  render() {
    return (
      <>
        <Button type="submit" onClick={this.showModal}>Add a Book</Button>
        <AddBook
          show={this.state.show}
          hideModal={this.hideModal}
        />
        {this.state.books.map((books, idx) => (
          <CardGroup >
            <Card style={{ width: '18rem' }} >

              <Card.Img variant="top" src={books.imgURL} />

              <Card.Body>

                <Card.Title>{books.name}</Card.Title>

                <Card.Text>
                  <p>{books.description}</p>
                  <p>{books.status}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        ))}

      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
