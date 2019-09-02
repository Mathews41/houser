require('dotenv').config()
const express = require('express')
const ctrl = require('./controller')
const massive = require('massive')
const {json} = require('body-parser')
// import {catchError} from 'rxjs/operators/catchError'

const app = express()
app.use(json())


const { PORT}=process.env
var path = require('path')
app.use(express.static(path.join(__dirname, './public')))


massive(process.env.CONNECTION_STRING)
        .then(db => app.set('db',db))
        .catch(err => console.log('errorrr',err))

app.get('/ctrl/houses', ctrl.getHouses)
app.post('/ctrl/house', ctrl.addHouse)
app.delete('/ctrl/houses', ctrl.deleteHouse)

app.listen(PORT, ()=> console.log('MILE HIGH CLUBBIN'))