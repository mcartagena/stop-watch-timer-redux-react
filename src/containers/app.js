import React from 'react'
import { connect } from 'react-redux'
import Instruction from '../components/Instruction'
import Clock from '../components/Clock'
import {
    getLTSFormat,
    getLTFormat,
    getlFormat,
    getMMMMDoYYFormat,
    getLTSFormatTime,
    getLTFormatTime
} from '../actions/index'

const App = ({ clock, 
               getLTSFormat, 
               getLTFormat, 
               getlFormat, 
               getMMMMDoYYFormat, 
               getLTSFormatTime, 
               getLTFormatTime }) => (
    <div>
        <h2>Digital Clock</h2>
        <hr />
        <Instruction />
        <Clock
            clockData={clock}
            onChangeFormat={() => {
                if (clock.one == true) {
                    setTimeout(() => {
                        console.log('clicked.... clockData.one', clock);
                        getlFormat()
                    }, 200)
                }
                else if (clock.two == true) {
                    setTimeout(() => {
                        console.log('clicked.... clockData.two', clock);
                        getMMMMDoYYFormat()
                    }, 200)
                }
                else if (clock.three == true) {
                    setTimeout(() => {
                        console.log('clicked.... clockData.three', clock);
                        getLTFormat()
                    }, 200)
                }
                else if (clock.four == true) {
                    setTimeout(() => {
                        console.log('clicked.... clockData.four', clock);
                        getLTSFormat()
                    }, 200)
                }
            }}
            onChangeTimer={() => {
                if (clock.one == true) {
                    console.log('clicked.... clockData.one', clock);
                    getLTSFormatTime()
                }
                else if (clock.four == true) {
                    console.log('clicked.... clockData.four', clock);
                    getLTFormatTime()
                }
            }} />
    </div>
)

const mapStateToProps = state => ({
    clock: Object.assign({}, state)
}
)

export default connect(
    mapStateToProps,
    { getLTSFormat, getLTFormat, getlFormat, getMMMMDoYYFormat, getLTSFormatTime, getLTFormatTime }
)(App)


