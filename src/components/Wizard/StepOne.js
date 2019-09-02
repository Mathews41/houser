import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateStepOne} from '../../Redux/reducer'

class StepOne extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0,

        }
    }
    handleNameInput(val){
        this.setState({name: val})
    }
    handleAddressInput(val){
        this.setState({address: val})
    }
    handleCityInput(val){
        this.setState({city: val})
    }
    handleStateInput(val){
        this.setState({state: val})
    }
    handleZipInput(val){
        this.setState({zip: val})
    }
    componentDidMount(){
        this.setState({name: this.props.name})
        this.setState({address: this.props.address})
        this.setState({city: this.props.city})
        this.setState({state: this.props.state})
        this.setState({zip: this.props.zip})

    }
    render(){
        return(
            <div className = 'Stepone'>
            <div>
            <h3>Property name</h3>
                <input onChange = {(e) => this.handleNameInput(e.target.value)}
                       value = {this.state.name}/>
            </div>
            <div>
                <h3>Address</h3>
                <input onChange = {(e) => this.handleAddressInput(e.target.value)}
                       value = {this.state.address}/>
            </div>
            <div>
                <h3>City</h3>
                <input onChange = {(e) => this.handleCityInput(e.target.value)}
                       value = {this.state.city}/>
                <h3>State</h3>
                <input onChange = {(e) => this.handleStateInput(e.target.value)}
                       value = {this.state.state}/>
                <h3>Zip</h3>
                <input onChange = {(e) => this.handleZipInput(e.target.value)}
                       value = {this.state.zip}/>
            </div>
            <Link to ='/wizard/stepTwo'><button onClick= {() => this.props.updateStepOne(this.state)}>Next Step</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip
    }
}
    const mapDispatchToProps = {
        updateStepOne
    }
    export default connect(mapStateToProps, mapDispatchToProps)(StepOne)