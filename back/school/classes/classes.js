import express from 'express'
import data from './data/classes.json' assert { type: "json" }

const router = express.Router()
router.use(express.json())

let classes_list = data


/*
    GET method
    Returns all entries from classes_list
*/
router.get('/', (req, res) => {
    return res.json(classes_list)
})


/*
    POST method
    Adds an entry to the classes
    Method checks if body has the required parameters
*/
router.post('/', (req, res) => {
    try {
        const body = req.body
        const param_name = body.name

        let invalid_params = []

        if (param_name === undefined) invalid_params.push("name")

        if (invalid_params.length) throw new Error(`Invalid or missing parameters: ${invalid_params.toString()}`)

        const entry = {
            id: classes_list.length + 1
            , name: param_name
        }
        classes_list.push(entry)
        res.status(202).json(entry)
    } catch(err) {
        res.status(500).json({ "message": `${err}` })
    }
})

export default router