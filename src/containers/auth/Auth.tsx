import React from 'react'
import { connect } from 'react-redux'
import { AppState } from "../../store"
import { withRouter } from 'react-router'
import { Dispatch } from 'redux'
import { LoginAction } from "../../actions/index";

import { Redirect, Route } from 'react-router-dom'
import * as H from 'history';

interface OwnProps {
  history: H.History
  token: string
}

interface AuthHandler {
  setLocalStorageToken(auth_token: string): void
}

const Auth: React.FC<OwnProps&AuthHandler> = props => {
  const auth_token = localStorage.auth_token
    if (auth_token && !props.token) {
      // localStorageにtokenがあって、stateにtokenがない場合、tokenをsetする
      props.setLocalStorageToken(auth_token) 
    }
    if (props.token.length || auth_token) {
      return (
        <Route children={props.children} />
      )
    } else {
      return (
        <Redirect to={'/login'} />
      )
    }
}

const mapDispatchToProps = (dispatch: Dispatch): AuthHandler => {
  return {
    setLocalStorageToken: (auth_token: string) => { dispatch(LoginAction(auth_token)) }
  }
}

const mapStateToProps = (appState: AppState) => {
  return {
    token: appState.state.token,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth))