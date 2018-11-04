/**
 * @author Systango Technologies 
 * Date:
 * Description: COMMON REDUCER FOR SPINNER AND MODAL!
 * 
 */
import * as CONST from '../utils/Const';

const initialState = {
	isFetching: false,
	isDataAvailable: false,
	playerType: '',
	quizData: []
};

// This reducer stores the state of common spinner and modal.
export default function (state = initialState, action) {
	switch (action.type) {
	case CONST.START_SPINNER:
		return {
			...state,
			isFetching: true
		};
	case CONST.STOP_SPINNER:
		return {
			...state,
			isFetching: false
		};
	case CONST.SUCCESS:
		return {
			...state,
			quizData: action.payload,
			isDataAvailable: true,
		};
	case CONST.FAILURE:
		return {
			...state,
			quizData: [],
			isDataAvailable: false,
		};
	default:
		return state;
	}
}
