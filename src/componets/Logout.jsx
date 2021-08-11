import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
const Logout = () => {
    const history = useHistory()
    const logoutdata = async () => {
        try {
            const res = await fetch("/logout", {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: "include"

            })
            const data = await res.json()


        } catch (error) {
            console.log(error)
            history.push("/backoffice/login")
        }
    }

    useEffect(() => {

        logoutdata()
    }, []);


    return (
        <>
            <h1>Logout page</h1>
        </>
    )
}

export default Logout;