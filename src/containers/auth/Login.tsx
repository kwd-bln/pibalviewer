import React from 'react';
import { connect } from "react-redux";
import { AppState } from "../../store";
import { Dispatch } from "redux";
import { InputPassAction, InputUserAction, StartCreateTokenAction } from "../../actions/index";
import { withRouter } from 'react-router';
import InputComp from '../../components/InputComp'
import * as H from 'history';

interface OwnProps {
  login: boolean
  loading: boolean
  username: string
  password: string
  history: H.History
  creatingToken: boolean
}

export interface LoginHandler {
  handleOnChangeValueOfUserInput(value: string): void
  handleOnChangeValueOfPassInput(value: string): void
  handleOnClickSubmitButton(username: string, password: string, history: H.History): void
}

const mapStateToProps = (appState: AppState) => {
  return {
    login: appState.state.login,
    loading: appState.state.loading,
    username: appState.state.username,
    password: appState.state.password,
    creatingToken: appState.state.creatingToken
  }
}

const mapDispatchToProps = (dispatch: Dispatch): LoginHandler => {
  return {
    handleOnChangeValueOfUserInput: (value: string) => { dispatch(InputUserAction(value))},
    handleOnChangeValueOfPassInput: (value: string) => { dispatch(InputPassAction(value))},
    handleOnClickSubmitButton:  () => { dispatch(StartCreateTokenAction()) }
  }
}

export class Login extends React.Component<OwnProps&LoginHandler> {

  async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const username = this.props.username
    const password = this.props.password
    await this.props.handleOnClickSubmitButton(username, password, this.props.history)
  }

  
  renderSubmit() {
    return this.props.creatingToken ? <p>Loading</p> : <input type="submit" value="Send" />;
  }

  render() {
    console.log("login render", this.props.loading, this.props.login)
    return (
      <div>
        <p>未ログイン</p>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <ul>
            <li>
              <p>name</p>
              <p><InputComp name="name" value={this.props.username} onChangeValue={this.props.handleOnChangeValueOfUserInput}/></p>
            </li>
            <li>
              <p>Password</p>
              <p><InputComp name="pass" value={this.props.password} onChangeValue={this.props.handleOnChangeValueOfPassInput}/></p>
            </li>
          </ul>
          {this.renderSubmit()}
        </form>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))