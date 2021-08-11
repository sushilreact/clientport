import React, { useEffect, useState } from 'react'
import { useHistory, NavLink, Link } from "react-router-dom"
import Backnav from './Backnav'
import Topnav from './Topnav'
import Skillshow from './Skillshow'

import Model from 'react-modal'

const Addskils = (props) => {
    const history = useHistory()
    const [bioget, biostateData] = useState('')
    const [skilshow, skilshowState] = useState([])

    //Point for Shivam Tommrrow I will disscuss with shivam
    const [modleopen, modelopenState] = useState(false)
    const [modlemess, modelmessState] = useState(false)
    const [newupdate, newupdateState] = useState({})
    //onclick Data Get by ID

    const [newgetskil, newgetskilState] = useState({ skillname: "", skillexp: "" })


    const [adduser, addinfoState] = useState({ skillname: "", skillexp: "" })


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


            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }
            biostateData(data)
            console.log("will update below: ", data.skills);
            skilshowState(data.skills)
            newupdateState(data.skills[0])





        } catch (error) {
            console.log(error)
            history.push("/backoffice/login")
        }
    }

    useEffect(() => {
        console.log(".....")
        biogetdata()
        document.getElementById('navbar-collapse-toggle').classList.add('biohidemenu');
        document.body.classList.add();

    }, [])
    //Handle Get Value
    const inputhandle = (e) => {
        const { name, value } = e.target
        addinfoState((prevalue) => {

            return {
                ...prevalue,
                [name]: value
            }
        })

    }

    //Get Skilll input value
    const inputhandle2 = (e) => {
        const { name, value } = e.target

        newgetskilState((prevalue) => {
            console.log(prevalue)
            return {
                ...prevalue,
                [name]: value
            }
        })
    }





    //Post Add Info
    const newaddskills = async (e) => {

        e.preventDefault()
        const { skillname, skillexp } = adduser

        const res = await fetch("/addskils", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                skillname, skillexp
            })
        })

        const data = await res.json()


        if (!data) {
            return (window.alert("Something misss"))
        }
        else {
            modelmessState(true)
            biogetdata()

        }

    }
    //Get by data onclick
    const skill_get = async (skillid, skillnameval, skillpnt) => {
        modelopenState(true)

        const targetID = skillid
        const skname = skillnameval
        const skpnt = skillpnt
        const mainid = bioget._id

        const res = await fetch("/getbyid", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                mainid, targetID, skname, skpnt
            })
        })
        const result = await res.json()
        console.log(result.skills)

        newgetskilState(result.skills[0])


    }
    /// Delete USER function
    const deleteskill = async (skillid, skillnameval, skillpnt) => {
        const targetID = skillid
        const skname = skillnameval
        const skpnt = skillpnt
        const mainid = bioget._id



        const res = await fetch("/getbyiddelete", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                mainid, targetID, skname, skpnt
            })
        })
        const deleteresult = await res.json()
        console.log(deleteresult.Message)
        if (deleteresult === 202) { alert("Your Skill Delete Successfully ") }
        else {
            biogetdata()

        }

    }



    //Update skills

    const newupdateskiills = async (e) => {
        e.preventDefault()
        const { skillname, skillexp } = newupdate

        try {
            const skillresponse = await fetch('/addskills', {
                method: "PATCH",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    skillname, skillexp
                })

            })
            if (!skillresponse) {
                alert("somthing missing")
            }
            else {
                alert("data update successfully")
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
                                        <form onSubmit={newaddskills} method="POST">
                                            <div className="row mgde">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Skill Name:</label>
                                                        <input type="text" className="form-control" name="skillname" value={adduser.skillname} placeholder="Skill Name" required onChange={inputhandle} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Skill Experience:</label>
                                                        <input type="number" className="form-control" name="skillexp" value={adduser.skillexp} placeholder="Skill Experience" required onChange={inputhandle} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group addskillsbtn">
                                                        <button type="submit" className="btn btn-primary">Add</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div class="col-xl-12 col-md-12 mb-12">
                                    <div className="card shadow mb-4">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Number</th>
                                                    <th scope="col">Skills</th>
                                                    <th scope="col">Points</th>
                                                    <th scope="col">Update</th>
                                                    <th scope="col">Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    skilshow.map((sk_list, index) => {
                                                        return (
                                                            <>

                                                                <Skillshow
                                                                    key={index}
                                                                    skillid={sk_list._id}
                                                                    skillnameval={sk_list.skillname}
                                                                    skillpnt={sk_list.skillexp}
                                                                    onselectval={skill_get}
                                                                    ondeleteuser={deleteskill}
                                                                />

                                                            </>
                                                        )
                                                    })
                                                }


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <Model isOpen={modlemess} onRequestClose={() => modelmessState(false)} className="bordernoe">
                                <div>
                                    <div className="" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header text-center">
                                                <h5 className="modal-title ">Modal title</h5>
                                                <span className="close" onClick={() => modelmessState(false)}>
                                                    <span aria-hidden="true">×</span>
                                                </span>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row">

                                                    <h1>Your Data Add successfully</h1>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Model>

                            <Model isOpen={modleopen} onRequestClose={() => modelopenState(false)}>
                                <div>
                                    <div className="" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Modal title</h5>
                                                <span className="close" onClick={() => modelopenState(false)}>
                                                    <span aria-hidden="true">×</span>
                                                </span>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row">

                                                    <form onSubmit={newupdateskiills} method="POST">
                                                        <div className="row mgde">
                                                            <div className="col-md-4">

                                                                <div className="form-group">
                                                                    <label htmlFor="exampleInputEmail1">Skill Name:  </label>
                                                                    <input type="text" className="form-control" name="skillname" value={newgetskil.skillname} placeholder="Skill Name" required onChange={inputhandle2} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleInputEmail1">Skill Experience:</label>
                                                                    <input type="number" className="form-control" name="skillexp" value={newgetskil.skillexp} placeholder="Skill Experience" required onChange={inputhandle2} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <button type="submit" className="btn btn-primary">Update Skills</button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                            <div className="modal-footer">

                                                <span className="btn btn-primary">Save changes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Model>


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

export default Addskils;