import React, { useEffect, useState } from 'react'
import { useHistory, NavLink, Link } from "react-router-dom"

const Query = () => {
    const history = useHistory()
    const [update, updateState] = useState({})
    const getalldata = async () => {
        try {
            const res = await fetch("/getdata", {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json'
                }

            })
            const data = await res.json()
            console.log(data)
            // updateState(data.personalinfo[0])
            updateState(data.personalinfo[0])
            const datalength = data.personalinfo.length

            if (datalength === 0) {
                history.push("/backoffice/addinfo")
            }


        } catch (error) {
            console.log(error)
            history.push("/backoffice/login")
        }
    }

    useEffect(() => {
        getalldata()
    }, [])

}

export default Query;

