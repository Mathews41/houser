import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'



export default {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path = '/' component={Dashboard}/>
                    <Route path = '/wizard' component={Wizard}/>
                </Switch>
            </div>
        )
    }
}
