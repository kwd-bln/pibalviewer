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
  handleSetLoginState(history: H.History):void
}

export const setLoginState = (history: H.History): Function => {
  return async (dispatch: Dispatch) => {
    const auth_token = localStorage.auth_token
    // token が見つからなかったら return
    if (!auth_token) return
    dispatch(StartLoadingAction())
    await fetch('https://oval-silicon-280513.an.r.appspot.com/api/v1/successLogin', {
      headers: { 'x-access-token': auth_token }
    })
    .then(res => {
      return res.json()
    })
    .then(json => {
      if (json.success) {
        dispatch(LoginAction(auth_token))
      } else {
        localStorage.clear()
      }
      dispatch(FinishLoadingAction())
      history.push('/')
      return 
    })
    .catch(error => {
      console.log(error)
      dispatch(FinishLoadingAction())
    })
  } 
}


class Auth extends React.Component<OwnProps&AuthHandler, State> {
  constructor(props: OwnProps&AuthHandler) {
    super(props)
    this.state = {
      isLoading: false,
    }
  }
  async componentDidMount() {
    console.log("Auth componentWillMount!!", this.props.loading)
    if (!this.props.loading && !this.props.login) {
      cl("this.props componentDidMount", this.props)
      await this.props.handleSetLoginState(this.props.history)
    }
  }

  render() {
    console.log("authRender", this.props.loading)
    
    if (this.props.loading) {
      return <div>loading</div>
    } else {
      if (this.props.login) {
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
    handleSetLoginState: async (history: H.History) => {await setLoginState(history)(dispatch)}
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