import express from 'express'
import cors from 'cors'
import classes from './school/classes/classes.js'
import students from './school/students/students.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/classes', classes)
app.use('/students', students)

app.listen(3001, () => {
    console.log('Server for school study case, running on port 3001')
})