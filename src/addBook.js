'use strict'

import React from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

class AddBook extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            newBookName: '',
            newDescription: '',
            newStatus: '',
        }
    }

    updateName = (event) => {
        this.setState({
            newBookName: event.target.value
        })
    }

    updateDescription = (event) => {
        this.setState({
            newDescription: event.target.value
        })
    }

    updateStatus = (event) => {
        this.setState({
            newStatus: event.target.value
        })
    }

    addingBook = async () => {
        const { user } = this.props.auth0;
        const bookData = {
            email: user.email,
            newBookName: this.state.newBookName,
            newDescription: this.state.newDescription,
            newStatus: this.state.newStatus,
        }
        const newBook = await axios.post(`http://localhost:3001/addbooks`, bookData)

        this.props.updateBookData(newBook.data.books);
        console.log(newBook.data.books);
        this.props.hideModal();
    }



    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a book to favourites</Modal.Title>
                    </Modal.Header>

                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Book name</Form.Label>
                            <Form.Control onChange={this.updateName} />
                        </Form.Group>
                        <Form.Group controlId="Description">
                            <Form.Label>Book Description</Form.Label>
                            <Form.Control onChange={this.updateDescription} />
                        </Form.Group>
                        <Form.Group controlId="Status">
                            <Form.Label>Book Description</Form.Label>
                            <Form.Control onChange={this.updateStatus} />
                        </Form.Group>
                    </Form>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.hideModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.addingBook}>
                            Add Book
                        </Button>
                    </Modal.Footer>
                </Modal>

            </>

        )
    }


}

export default withAuth0(AddBook)