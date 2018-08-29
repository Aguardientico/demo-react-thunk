import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { fetchUsers } from "./actions/user"

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux Thunk Demo</h1>
        </header>
        <section>
          {
            users.length > 0 &&
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map(user => 
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          }
        </section>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return state.user;
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
