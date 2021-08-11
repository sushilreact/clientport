import React, { useEffect, useState } from 'react'
import { useHistory, NavLink, Link } from "react-router-dom"
import Backnav from './Backnav'
import Topnav from './Topnav'

const Addinfo = (props) => {
    const history = useHistory()
    const [bioget, biostateData] = useState('')
    const [setuserinfo, userInfoState] = useState({
        i_first: "", i_last: "", i_phone: "", i_nationality: "", i_skype: "", i_freelance: "", i_langages: "", i_experience: "", i_project: "", i_customer: ""
    })
    const biogetdata = async () => {
        try {
            const res = await fetch("/getdata", {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json'
                }

            })
            const data = await res.json()
            const datalength = data.personalinfo.length

            if (datalength > 0) {
                history.push("/backoffice/Updateinfo")
            }

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }
            biostateData(data)

        } catch (error) {
            console.log(error)
            history.push("/backoffice/login")
        }
    }

    useEffect(() => {
        biogetdata()
        document.getElementById('navbar-collapse-toggle').classList.add('biohidemenu');
        document.body.classList.add();

    }, [])
    //Handle Get Value
    const inputhandle = (e) => {
        const { name, value } = e.target
        userInfoState((prevalue) => {
            console.log(prevalue)
            return {
                ...prevalue,
                [name]: value
            }
        })
    }
    //Post Add Info
    const Addinfo_I = async (e) => {

        e.preventDefault()

        const { i_first, i_last, i_phone, i_nationality, i_skype, i_freelance, i_langages, i_experience, i_project, i_customer } = setuserinfo

        const res = await fetch("/addinfo", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                i_first, i_last, i_phone, i_nationality, i_skype, i_freelance, i_langages, i_experience, i_project, i_customer
            })
        })

        const data = await res.json()


        if (!data) {
            return (window.alert("Something misss"))
        }
        else {
            return (
                window.alert("Data Successfully Submit"),
                history.push("/")
            )
        }

    }


    return (
        <>

            <div id="wrapper">
                <Backnav
                    compnets="compnet"
                    addinfo="Addinfo"
                />
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        <Topnav />
                        {/* Begin Page Content */}
                        <div className="container-fluid">
                            {/* Page Heading */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">PERSONAL INFOS</h1>

                            </div>

                            <div className="row">
                                <div class="col-xl-12 col-md-12 mb-12">
                                    <div className="card shadow mb-4">
                                        <form onSubmit={Addinfo_I} method="POST">
                                            <div className="row mgde">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">First Name:</label>
                                                        <input type="text" className="form-control" name="i_first" value={setuserinfo.i_first} placeholder="First Name" required onChange={inputhandle} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Last Name:</label>
                                                        <input type="text" className="form-control" name="i_last" value={setuserinfo.i_last} placeholder="Last Name" required onChange={inputhandle} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Phone:</label>
                                                        <input type="number" className="form-control" name="i_phone" value={setuserinfo.i_phone} placeholder="Phone" required onChange={inputhandle} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Nationality: </label>
                                                        <input type="text" className="form-control" name="i_nationality" value={setuserinfo.i_nationality} placeholder="Nationality" required onChange={inputhandle} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Skype: </label>
                                                        <input type="text" className="form-control" name="i_skype" value={setuserinfo.i_skype} placeholder="Skype" onChange={inputhandle} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Freelance:  </label>
                                                        <input type="text" className="form-control" name="i_freelance" value={setuserinfo.i_freelance} placeholder="Freelance" required onChange={inputhandle} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <select class="custom-select" name="i_langages" value={setuserinfo.i_langages} required onChange={inputhandle} >
                                                            <option selected>Langages</option>
                                                            <option value="French">French</option>
                                                            <option value="English">English</option>
                                                            <option value="Hindi">Hindi</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">EXPERIENCE:  </label>
                                                        <input type="number" className="form-control" name="i_experience" value={setuserinfo.i_experience} placeholder="EXPERIENCE" required onChange={inputhandle} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">COMPLETED PROJECTS:  </label>
                                                        <input type="number" className="form-control" name="i_project" value={setuserinfo.i_project} placeholder="PROJECTS" required onChange={inputhandle} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">HAPPY CUSTOMERS:  </label>
                                                        <input type="number" className="form-control" name="i_customer" value={setuserinfo.i_customer} placeholder="CUSTOMERS" required onChange={inputhandle} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mgde">
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </div>


                                        </form>
                                    </div>
                                </div>
                            </div>


                        </div>
                        {/* /.container-fluid */}
                    </div>
                    {/* End of Main Content */}
                    {/* Footer */}
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright © Your Website 2021</span>
                            </div>
                        </div>
                    </footer>
                    {/* End of Footer */}
                </div>
                {/* End of Content Wrapper */}


            </div>

        </>
    )
}

export default Addinfo;