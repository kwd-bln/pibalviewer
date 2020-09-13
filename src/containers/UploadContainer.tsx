import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../store"
import React from "react"

export interface UploadHandler {
}

const mapStateToProps = (appState: AppState) => {
	return {
		token: appState.state.token
	}
}

const mapDispatchToProps = (dispatch: Dispatch): UploadHandler => {
	return {
	}
}

const UploadPage: React.FC<UploadHandler> = (props) => {
  return (
    <div>aaaaaaaaaaaaaaaaa</div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(UploadPage)