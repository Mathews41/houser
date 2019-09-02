import React, { Component } from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { clearEverything } from '../../Redux/reducer'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'


class Wizard extends Component {
    render(){
        return(
            <div>
                <Link to ='/'><button onClick={() => this.props.clearEverything(this.state)}>Cancel</button></Link>
                <Switch>
                    <Route exact path = '/wizard/stepOne' component ={StepOne}/>
                    <Route path = '/wizard/stepTwo' component ={StepTwo}/>
                    <Route path = '/wizard/stepThree' component ={StepThree}/>
                </Switch>
            </div>
        )
    }
}
const mapDispatchToProps = {
    clearEverything
}
export default connect(null, mapDispatchToProps)(Wizard)
