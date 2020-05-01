import {
	CHANGE_TO_LTS,
	CHANGE_TO_LT,
	CHANGE_TO_l,
	CHANGE_TO_MMMMDoYY,
	CHANGE_TO_LTSTime,
	CHANGE_TO_LTTime
} from '../constants/ActionTypes'

const initialState = {
	time: '',
	one: true,
	two: false,
	three: false,
	four: false,
	background: {
		backgroundColor: "#000000"
	},
	class: ''
}

const format = (state = initialState, action) => {
	// write Reducers to handle the actions.
	switch (action.type) {
		case CHANGE_TO_LTS:
			return Object.assign({}, state, {
				time: action.format.time,
				four: action.format.four,
				one: action.format.one,
				background: {
					backgroundColor: action.format.background.backgroundColor
				},
				class: action.format.class
			});
		case CHANGE_TO_LT:
			return Object.assign({}, state, {
				time: action.format.time,
				three: action.format.three,
				four: action.format.four,
				background: {
					backgroundColor: action.format.background.backgroundColor
				},
				class: action.format.class
			});
		case CHANGE_TO_l:
			return Object.assign({}, state, {
				time: action.format.time,
				one: action.format.one,
				two: action.format.two,
				background: {
					backgroundColor: action.format.background.backgroundColor
				},
				class: action.format.class
			});
		case CHANGE_TO_MMMMDoYY:
			console.log('reducer CHANGE_TO_MMMMDoYY');
			return Object.assign({}, state, {
				time: action.format.time,
				two: action.format.two,
				three: action.format.three,
				background: {
					backgroundColor: action.format.background.backgroundColor
				},
				class: action.format.class
			});
		case CHANGE_TO_LTSTime:
			console.log('reducer CHANGE_TO_LTSTime');
			return Object.assign({}, state, {
				time: action.format.time,
			});
		case CHANGE_TO_LTTime:
			console.log('reducer CHANGE_TO_LTTime');
			return Object.assign({}, state, {
				time: action.format.time,
			});
		default:
			return initialState;
	}

}

export default format
