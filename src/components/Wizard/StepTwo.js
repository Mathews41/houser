import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateStepTwo} from '../../Redux/reducer'

class StepTwo extends Component {
    constructor(){
        super()
        this.state = {
            img: ''
        }
    }
    handleImageInput(val){
        this.setState({img: val})

    }
    componentDidMount(){
        this.setState({img: this.props.img})

    }
    render(){
        return(
            <div className = 'StepTwo'>
                <div>
                    <h4>Image URL</h4>
                    <input onChange = {(e) => this.handleImageInput(e.target.value)}
                    value = {this.state.img}/>
                </div>
                <Link to ='/wizard/stepOne'> <button onclick = {() => this.props.updateStepTwo(this.state)}>Previous Step</button></Link>
                <Link to ='/wizard/stepThree'> <button onclick = {() => this.props.updateStepTwo(this.state)}>Next Step</button></Link>

            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        img: state.img
    }
}
const mapDispatchToProps = {
    updateStepTwo
}
export default connect(mapStateToProps, mapDispatchToProps)(StepTwo)


