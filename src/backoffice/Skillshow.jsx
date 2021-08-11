import React, { useState } from 'react'
const Skillshow = (props) => {
    return (
        <>
            <tr>
                <th scope="row">{props.skillid}</th>
                <td>{props.skillnameval}</td>
                <td>{props.skillpnt}</td>
                <td><button onClick={() => props.onselectval(props.skillid, props.skillnameval, props.skillpnt)}><i class="fas fa-user-edit"></i></button></td>
                <td><button onClick={() => props.ondeleteuser(props.skillid, props.skillnameval, props.skillpnt)}><i class="far fa-trash-alt"></i></button></td>
            </tr>
        </>
    )
}
export default Skillshow;