import React, { useEffect, useState } from 'react'
import { useHistory, NavLink, Link } from "react-router-dom"
import Backnav from './Backnav'
import Topnav from './Topnav'

const Updateinfo = (props) => {
    const history = useHistory()

    const [update, updateState] = useState({})



    const biogetdata = async () => {
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
        biogetdata()
        document.getElementById('navbar-collapse-toggle').classList.add('biohidemenu');
        document.body.classList.add();

    }, [])
    //Handle Get Value
    const updateinputhale = (e) => {
        const { name, value } = e.target
        updateState((prevalue) => {
            console.log(prevalue)
            return {
                ...prevalue,
                [name]: value
            }
        })
    }
    //Post Add Info

    const updatesubmit = async (e) => {
        e.preventDefault()
        try {
            const { i_first, i_last, i_phone, i_nationality, i_skype, i_freelance, i_langages, i_experience, i_project, i_customer } = update

            const response = await fetch("/Updateinfo", {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    i_first, i_last, i_phone, i_nationality, i_skype, i_freelance, i_langages, i_experience, i_project, i_customer
                })
            })

            const userinfodata = await response.json()

            if (response.status === 200) { return (window.alert("Data update Successfully Submit")) }
            else {

                window.alert("Data Not Submit ")


            }


        } catch (error) {
            console.log(error)
        }


    }

    return (
        <>

            <div id="wrapper">
                <Backnav
                    compnets="compnet"
                    addinfo="update"
                />
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        <Topnav />
                        {/* Begin Page Content */}
                        <div className="container-fluid">
                            {/* Page Heading */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Update PERSONAL INFOS</h1>

                            </div>

                            <div className="row">
                                <div class="col-xl-12 col-md-12 mb-12">
                                    <div className="card shadow mb-4">
                                        <form onSubmit={updatesubmit} method="POST">
                                            <div className="row mgde">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">First Name:</label>
                                                        <input type="text" className="form-control" name="i_first" value={update.i_first} placeholder="First Name" onChange={updateinputhale} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Last Name:</label>
                                                        <input type="text" className="form-control" name="i_last" value={update.i_last} placeholder="Last Name" onChange={updateinputhale} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Phone:</label>
                                                        <input type="number" className="form-control" name="i_phone" value={update.i_phone} placeholder="Phone" onChange={updateinputhale} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Nationality: </label>
                                                        <input type="text" className="form-control" name="i_nationality" value={update.i_nationality} placeholder="Nationality" onChange={updateinputhale} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Skype: </label>
                                                        <input type="text" className="form-control" name="i_skype" value={update.i_skype} placeholder="Skype" onChange={updateinputhale} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Freelance:  </label>
                                                        <input type="text" className="form-control" name="i_freelance" value={update.i_freelance} placeholder="Freelance" onChange={updateinputhale} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">LANGUAGES:  </label>
                                                        <select class="custom-select" name="i_langages" value={update.i_langages} onChange={updateinputhale} >
                                                            <option selected>Languages</option>
                                                            <option value="French">French</option>
                                                            <option value="English">English</option>
                                                            <option value="Hindi">Hindi</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">EXPERIENCE:  </label>
                                                        <input type="number" className="form-control" name="i_experience" value={update.i_experience} placeholder="EXPERIENCE" onChange={updateinputhale} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">COMPLETED PROJECTS:  </label>
                                                        <input type="number" className="form-control" name="i_project" value={update.i_project} placeholder="PROJECTS" onChange={updateinputhale} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">HAPPY CUSTOMERS:  </label>
                                                        <input type="number" className="form-control" name="i_customer" value={update.i_customer} placeholder="CUSTOMERS" onChange={updateinputhale} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mgde">
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn btn-primary">Update</button>
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

export default Updateinfo;