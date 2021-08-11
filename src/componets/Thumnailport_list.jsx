import React from 'react'

const Thumnailport_list = (props) => {
    return (
        <>
            <li className={props.portID}>
                <figure>
                    <img src={`http://localhost:9700/uploads/${props.imagetag}`} alt="Portolio Image" />
                    <div><span>{props.figuertext}</span></div>
                </figure>
            </li>
        </>
    )
}

export default Thumnailport_list;

