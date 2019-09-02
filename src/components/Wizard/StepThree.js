import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {clearEverything} from '../../Redux/reducer'
import {updateStepThree} from '../../Redux/reducer'

class StepThree extends Component {
    constructor(){
        super()
        this.state = {
            mortgage:0,
            rent:0
        }
    }
    handleMortgageInput(val){
        this.setState({mortgage:val})
    }
    handleRentInput(val){
        this.setState({rent:val})
    }
    componentDidMount(){
        this.setState({mortgage: this.props.mortgage})
        this.setState({rent: this.props.rent})

    }
    handleCreateHouse(){
        const newHouse = {
            name: this.props.name,
            address:this.props.address,
            city:this.props.city,
            state:this.props.state,
            zip:this.props.zip,
            mortgage:this.props.mortgage,
            rent:this.props.rent,

        }
        axios.post('/api/house', newHouse)
        this.props.clearEverything(this.state)
    }
    render(){
        return(
            <div className = 'StepThree'>
                <div>
                <h4>Monthly Mortgage Amount</h4>
                    <input onChange = {(e) => this.handleMortgageInput(e.target.value)}
                           value = {this.state.mortgage}/>
                </div>
                <div>
                    <h4>Desired Monthly Rent</h4>
                    <input onChange = {(e) => this.handleRentInput(e.target.value)}
                           value = {this.state.rent}/>
                </div>
                <Link to = '/wizard/stepTwo'><button onClick= {() => this.props.updateStepThree(this.state)}>Previous Step</button></Link>
                <Link to = '/'><button onClick= {() => this.handleCreateHouse()}>Complete</button></Link>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        img: state.img,
        mortgage: state.mortgage,
        rent: state.rent
    }
}

const mapDispatchToProps = {
    updateStepThree,
    clearEverything
}
export default connect(mapStateToProps, mapDispatchToProps)(StepThree)

