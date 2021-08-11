import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Skillshow = (props) => {
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.companyname}</td>
                <td>{props.designation}</td>
                <td>{props.start}</td>
                <td>{props.newenddate || 'Till Date'}</td>
                <td>{props.describe}</td>
                <td><button onClick={() => props.delbtn(props.id, props.companyname, props.designation, props.start, props.newenddate, props.describe)}>Delete</button></td>
            </tr>
        </>
    )
}
export default Skillshow;