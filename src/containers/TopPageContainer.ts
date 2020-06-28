import { connect } from "react-redux";
import { Dispatch } from "redux";
import { EnlargeAction, ShirinkAction, ToggleVisibleAction, SelectFlightAction } from "../actions";
import { TopPageForm } from "../components/TopPageForm";
import { AppState } from "../store";

export interface TopPageHandler {
    handleClickEnlargeButton(): void
    handleClickShrinkButton(): void
    handleOnChangeValue(value: number): void
    handleOnSelectToggleButton(value: number): void
}

const mapStateToProps = (appState: AppState) => {
    return appState
}

const mapDispatchToProps = (dispatch: Dispatch): TopPageHandler => {
    return {
        handleClickEnlargeButton: () => { dispatch(EnlargeAction()) },
        handleClickShrinkButton: () => { dispatch(ShirinkAction()) },
        handleOnChangeValue: (value: number) => { dispatch(SelectFlightAction(value)) },
        handleOnSelectToggleButton: (value: number) => { dispatch(ToggleVisibleAction(value)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopPageForm)


// export const fetchPibalData = (url: string): Function => {
// 	return (dispatch: Dispatch): void => {
// 		dispatch(loadComments(true));

// 		fetch(url)
// 			.then((response) => {
// 				if (!response.ok) {
// 					throw Error(response.statusText);
// 				}
// 				dispatch(loadComments(false));

// 				return response;
// 			})
// 			.then((response) => response.json())
// 			.then((comments) => dispatch(fetchCommentsSuccess(comments)))
// 			.catch(() => dispatch(getCommentsError(true)));
// 	}
// }