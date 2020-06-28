import React from 'react';
import { connect } from "react-redux";
import { AppState } from "../../store";
import { Dispatch } from "redux";
import { LoginAction } from "../../actions";
import { withRouter } from 'react-router';
import * as H from 'history';

interface OwnProps {
  login: boolean
  history: H.History
}

export interface LoginHandler {
  handleClickLoginButton(): void
}

const mapStateToProps = (appState: AppState) => {
  return {login: appState.state.login}
}

const mapDispatchToProps = (dispatch: Dispatch): LoginHandler => {
  return {
    handleClickLoginButton: () => { dispatch(LoginAction()) }
  }
}

export class Login extends React.Component<OwnProps&LoginHandler> {

  render() {
    return (
      <div>
        <p>未ログイン</p>
        <button onClick={() => {
          this.props.handleClickLoginButton()
          this.props.history.push('/')
          }}>ログインする</button>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))