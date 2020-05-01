import * as types from '../constants/ActionTypes'
import moment from 'moment'

export const getLTSFormat = () => dispatch => {
    dispatch({
        type: types.CHANGE_TO_LTS,
        format: {
            time: moment().format('LTS'),
            four: false,
            one: true,
			background: {
				backgroundColor: "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})
			},            
            class: 'faded'
        }
    })
}

export const getLTFormat = () => dispatch => {
    dispatch({
        type: types.CHANGE_TO_LT,
        format: {
            time: moment().format('LT'),
            three: false,
            four: true,
			background: {
				backgroundColor: "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})
			},            
            class: 'faded'
        }
    })        
}


export const getlFormat = () => dispatch => {
    dispatch({
        type: types.CHANGE_TO_l,
        format: {
            time: moment().format('l'),
            one: false,
            two: true,
			background: {
				backgroundColor: "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})
			},            
            class: 'faded'
        }
    })
}

export const getMMMMDoYYFormat = () => dispatch => {
    dispatch({
        type: types.CHANGE_TO_MMMMDoYY,
        format: {
            time: moment().format('MMMM Do YY'),
            two: false,
            three: true,
			background: {
				backgroundColor: "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})
			},            
            class: 'faded'            
        }
    })
}

export const getLTSFormatTime = () => dispatch => {
    dispatch({
        type: types.CHANGE_TO_LTSTime,
        format: {
            time: moment().format('LTS')
        }
    })
}

export const getLTFormatTime = () => dispatch => {
    dispatch({
        type: types.CHANGE_TO_LTTime,
        format: {
            time: moment().format('LT')
        }
    })
}