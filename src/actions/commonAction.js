/**
 * @author Systango Technologies 
 * Date: Sept 7 2018
 * Description: COMMON SPINNER AND MODAL ACTIONS!
 * 
 */
import { getQuizAPI } from '../utils/API';
import * as CONST from '../utils/Const';
// This action starts the common spinner.
export function startSpinner() {
	return { type: CONST.START_SPINNER };
}
// This action stops the common spinner.
export function stopSpinner() {
	return { type: CONST.STOP_SPINNER };
}
// This action shows the premium modal.
export function getQuiz() {
	return getQuizAPI().then((res) => {
		return {type: CONST.SUCCESS, payload: res};
		}).catch((error) => {
		return {type: CONST.FAILURE};
		});
}
