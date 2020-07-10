import React from 'react'
import { connect } from 'react-redux'
import { AppState } from "../../store"
import { withRouter } from 'react-router'
import { Dispatch } from 'redux'
import { LoginAction } from "../../actions/index";

import { Redirect, Route } from 'react-router-dom'
import * as H from 'history';

interface OwnProps {
  loading: boolean
  history: H.History
  token: string
}

interface AuthHandler {
  setLocalStorageToken(auth_token: string): void
}

class Auth extends React.Component<OwnProps&AuthHandler> {
  constructor(props: OwnProps&AuthHandler) {
    super(props)
  }

  render() {
    const auth_token = localStorage.auth_token
    if (auth_token && !this.props.token) {
      // localStorageにtokenがあって、stateにtokenがない場合、tokenをsetする
      this.props.setLocalStorageToken(auth_token) 
    }
    if (this.props.loading) {
      return <div>loading</div>
    } else {
      if (this.props.token.length || auth_token) {
        return (
          <Route children={this.props.children} />
        )
      } else {
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
    token: appState.state.token,
    loading: appState.state.loading
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth))