import React from 'react'
import { connect } from 'react-redux'
import { AppState } from "../../store"
import { withRouter } from 'react-router'
import { Dispatch } from 'redux'
import { LoginAction, StartLoadingAction, FinishLoadingAction } from "../../actions/index";

import { Redirect, Route } from 'react-router-dom'
import * as H from 'history';

const cl = console.log.bind(console)

interface OwnProps {
  login: boolean
  loading: boolean
  history: H.History
  token: string
}

interface State {
  isLoading: boolean
}

interface AuthHandler {
  setLocalStorageToken(auth_token: string): void
}

class Auth extends React.Component<OwnProps&AuthHandler, State> {
  constructor(props: OwnProps&AuthHandler) {
    super(props)
    this.state = {
      isLoading: false,
    }
  }

  render() {
    const auth_token = localStorage.auth_token
    if (auth_token) {
     this.props.setLocalStorageToken(auth_token) 
    }
    console.log("authRender", this.props.loading, this.props.login, auth_token)
    if (this.props.loading) {
      return <div>loading</div>
    } else {
      if (this.props.login || auth_token) {
        console.log("Go to Top page")
        return (
          <Route children={this.props.children} />
        )
      } else {
        console.log("Go to Login page")
        return (
          <Redirect to={'/login'} />
        )
      }
    }
  }
}

const mapDispatchToProps = (dispatch: Dispatch): AuthHandler => {
  return {
    setLocalStorageToken: (auth_token: string) => { dispatch(LoginAction(auth_token)) }
  }
}


const mapStateToProps = (appState: AppState) => {
  return {
    login: appState.state.login,
    token: appState.state.token,
    loading: appState.state.loading
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth))