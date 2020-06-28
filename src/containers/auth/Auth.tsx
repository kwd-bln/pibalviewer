import React from 'react'
import { connect } from 'react-redux'
import { AppState } from "../../store"
import { withRouter } from 'react-router';

import { Redirect, Route } from 'react-router-dom'
import * as H from 'history';

interface OwnProps {
  login: boolean
  history: H.History
  token: string
}

interface State {
  isLoading: boolean
}


class Auth extends React.Component<OwnProps, State> {
  constructor(props: OwnProps) {
    super(props)
    this.state = {
      isLoading: false,
    }
  }

  componentDidMount() {
    let token = this.props.token
    if (token === "") {
      const storageToken = localStorage.getItem("token")
      if (storageToken) {
        token = storageToken
      } else {
        // 完全にtokenがない場合、userIdとバスワードで発行する必要がある。
      }
    } else {
      localStorage.setItem("token", token)


    }

    console.log("componentDidMount!!")
  }

  render() {
    if (this.state.isLoading) {
      return <div>loading</div>
    } else {
      if (this.props.login) {
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

const mapStateToProps = (appState: AppState) => {
  return {
    login: appState.state.login,
    token: appState.state.token
  }
}

export default withRouter(connect(mapStateToProps)(Auth))