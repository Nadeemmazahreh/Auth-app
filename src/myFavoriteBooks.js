import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import bookFormModal from './bookFormModal';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      books : [],
      showForm : false
    }
  }

  componentDidMount = async() => {
    const booksData = await axios.get(`http://localhost:3001/books`, { params: { email: this.props.auth0.user.email } })
    this.setState({
      books: booksData.data
    })
    console.log('hello', this.props.auth0.user.email)
  }

  renderForm = (event) => {
      this.setState({
        showFrom: true
      })
  }

  // function Example() {
  //   const [showForm, setShowForm] = useState(false);
  
  //   const showForm = () => {
  //     setShowForm(!showForm);
  //   }}

  render() {
    return (
      <div>
        <div>
        <Button type="submit" onClick={this.renderForm()}>Button</Button>
      </div>
      <div>
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
        {this.state.showForm && <bookFormModal/>}
      </div>
    </div>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
