import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class bookFormModal extends React.Component {
    render(){
        return(
            <Form>
                <Form.Control  type="text" placeholder="Book name" name='bookName' />
                <Form.Control  type="text" placeholder="Description" name='Description' />
                <Form.Control  type="text" placeholder="Image" name='Image' />
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>

        )     
    }
}

export default bookFormModal