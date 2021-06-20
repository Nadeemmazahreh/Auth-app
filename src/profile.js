import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
    render() {
      const { user,isAuthenticated } = this.props.auth0;
      return (
          <>
           {isAuthenticated && <div>Hello {user.name}</div>}
           {isAuthenticated && <div>Email: {user.email}</div>}
           {isAuthenticated && <img src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'/>}
          </>
      )
      ;
    }

  }
  
  export default withAuth0(Profile);