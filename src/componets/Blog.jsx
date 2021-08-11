import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
const Blog = () => {
    const [update, updateState] = useState([])
    const getalldata = async () => {
        try {
            const res = await fetch("/alldata", {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json'
                }

            })
            const data = await res.json()
            updateState(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        getalldata()
    }, []);

    return (
        <>

            {
                update.map((getdata, index) => {

                    return (
                        <>

                            {
                                getdata.personalinfo.map((personal, indexval) => {
                                    return (
                                        <>
                                            <div className="col-6">
                                                <ul className="about-list list-unstyled open-sans-font">
                                                    <li> <span className="title">first name :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{personal.i_first}</span> </li>
                                                    <li> <span className="title">last name :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{personal.i_last}</span> </li>
                                                    <li> <span className="title">Age :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">27 Years</span> </li>
                                                    <li> <span className="title">Nationality :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{personal.i_nationality}</span> </li>
                                                    <li> <span className="title">Freelance :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{personal.i_freelance}</span> </li>
                                                </ul>
                                            </div>
                                            <div className="col-6">
                                                <ul className="about-list list-unstyled open-sans-font">
                                                    <li> <span className="title">Address :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{personal.i_last}</span> </li>
                                                    <li> <span className="title">phone :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">+{personal.i_phone}</span> </li>
                                                    <li> <span className="title">Email :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{personal.email}</span> </li>
                                                    <li> <span className="title">Skype :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{personal.i_skype}</span> </li>
                                                    <li> <span className="title">langages :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{personal.i_langages}</span> </li>
                                                </ul>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </>
                    )
                })
            }
        </>
    )
}

export default Blog;