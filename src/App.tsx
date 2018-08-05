import * as React from 'react';
import './App.css';
import { connect } from "react-redux";
// import axios from "axios";
import DisplayUserName from "./components/DisplayUserName";
import Header from "./components/Header";
import { amendUserName } from "./actions/AppAction";

class App extends React.Component<AppProps> {

  /***Life Cycle Events */
  componentDidMount() {
    this.props.dispatch(amendUserName("Neeharika Saxena"));
  }

  componentWillReceiveProps() {

  }

  updateUserName = (e:any) => {
    let updatedUserName = e.target.value;
    this.props.dispatch(amendUserName(updatedUserName));
  }

  public render() {
    return (
      <div >
        <DisplayUserName username={this.props.username} />
        <hr />
        <Header onUpdateUserName = {this.updateUserName}/>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    username: state
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch: dispatch
  }
}

export interface AppProps {
  username: string,
  dispatch: any

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
