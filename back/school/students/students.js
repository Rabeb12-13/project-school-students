import express from 'express'
import data from './data/students.json' assert { type: "json" }

const router = express.Router()
router.use(express.json())

let students_list = data


/*
    GET method
    Returns all entries from students_list
*/
router.get('/', (req, res) => {
    return res.json(students_list)
})


/*
    POST method
    Adds an entry to the students
    Method checks if body has the required parameters
*/
router.post('/', (req, res) => {
    try {
        const body = req.body
        const param_first_name = body.first_name
        const param_last_name = body.last_name
        const param_phone = body.phone
        const param_mail = body.mail

        let invalid_params = []

        if (param_first_name === undefined) invalid_params.push("first_name")
        if (param_last_name === undefined) invalid_params.push("last_name")
        if (param_phone === undefined) invalid_params.push("phone")
        if (param_mail === undefined) invalid_params.push("mail")

        if (invalid_params.length) throw new Error(`Invalid or missing parameters: ${invalid_params.toString()}`)

        const entry = {
            id: students_list.length + 1
            , first_name: param_first_name
            , last_name: param_last_name
            , phone: param_phone
            , mail: param_mail
        }
        students_list.push(entry)
        res.status(202).json(entry)
    } catch(err) {
        res.status(500).json({ "message": `${err}` })
    }
})

export default router