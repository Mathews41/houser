import React, { Component } from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'



export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: {},
        }
    }
    componentDidMount() {
        const getHouses = axios.get('/ctrl/houses')
        getHouses.then(response =>{
            console.log(response)
            this.setState({
                houses: response.data.results
            })
        })
        .catch(error => {
            console.log('you done effed up aaron')
        })
    }
    render() {
        const listings = this.state.houses.map(houseObj => {
            return(
                <House key = {houseObj.index}
                    houses = {houseObj}
                    id = {houseObj.id}
                    deleteHouse = {this.handleDeleteHouse}/>
            )
        })
        return (
            <div className='Dashboard'>
                <div className='Dashboardlink'>
                <House/>
                <Link to ='/wizard/stepOne'>
                <button className='btn'>
                    Add New Property
                </button>
                </Link>
                </div>
                {listings}
            </div>
        )
    }
}
