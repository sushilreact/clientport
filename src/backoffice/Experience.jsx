import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Backnav from './Backnav'
import Topnav from './Topnav'
import Deletelist from './Deletelist'

const Experience = (props) => {
    const history = useHistory()
    const [bioget, biostateData] = useState('')
    const [exper, experstateData] = useState([])
    const [checked, setChecked] = useState(false)

    const biogetdata = async () => {
        try {
            const res = await fetch("/getdata", {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json'
                }

            })
            const data = await res.json()
            biostateData(data)

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }
            experstateData(data.exper)



        } catch (error) {
            console.log(error)
            history.push("/backoffice/login")
        }



    }



    const [setuserexp, userexpState] = useState({
        companyname: "", designation: "", start: "", newenddate: "", describe: ""
    })

    const handleClick = ({ target: { checked } }) => {
        // console.log({ checkbox: checked });
        setChecked(checked);
        inputhandleexp({ target: { name: 'newenddate', value: '' } })
    }

    useEffect(() => {

        document.getElementById('navbar-collapse-toggle').classList.add('biohidemenu')
        document.body.classList.add()
        biogetdata()

    }, [])

    const inputhandleexp = (e) => {

        const { name, value } = e.target
        userexpState((prevalue) => {
            console.log(prevalue)
            return {
                ...prevalue,
                [name]: value
            }
        })
    }

    const addExper = async (e) => {
        e.preventDefault()

        const { companyname, designation, start, newenddate, describe } = setuserexp
        const res = await fetch("/experience", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                companyname, designation, start, newenddate, describe
            })
        })
        const data = await res.json()
        if (!data) {
            return (window.alert("Something misss"))
        }
        else {
            return (
                biogetdata(),
                window.alert("Data Successfully Submit")

            )
        }


    }



    const experiendel = async (id, companyname, designation, start, newenddate, describe) => {
        const newid = id
        const newcompanyname = companyname
        const newdesignation = designation
        const newstart = start
        const newenddate2 = newenddate
        const newdescribe = describe
        const res = await fetch("/expbyiddelete", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                newid, newcompanyname, newdesignation, newstart, newenddate2, newdescribe
            })
        })

        const deleteresult = await res.json()

        if (deleteresult === 202) { biogetdata() }
        else {
            biogetdata()

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
                                    <form onSubmit={addExper} method="post">
                                        <div className="row formcloer">
                                            <div className="col-md-6 expermar"><input type="text" name="companyname" value={setuserexp.companyname} placeholder="Enter Company name" className="form-control" onChange={inputhandleexp} required /></div>
                                            <div className="col-md-6 expermar"><input type="text" name="designation" value={setuserexp.designation} placeholder="Enter Designation" className="form-control" onChange={inputhandleexp} required /></div>
                                            <div className="col-md-4 expermar"><input type="date" name="start" value={setuserexp.start} placeholder="Enter Stat Date" className="form-control" onChange={inputhandleexp} onSelect={inputhandleexp} required /></div>
                                            <div className={`col-md-4 expermar ${!!checked ? 'hide' : ''}`} > <input type="date" name="newenddate" value={setuserexp.newenddate} placeholder="Enter Stat Date" className="form-control" onChange={inputhandleexp} onSelect={inputhandleexp} /></div>
                                            <div className="col-md-4 expermar"><label>Present</label><input onClick={handleClick} checked={checked} type="checkbox" /></div>
                                            <div className="col-md-12 expermar">
                                                <textarea className="form-control" name="describe" value={setuserexp.describe} onChange={inputhandleexp} required />
                                            </div>
                                            <div className="col-md-12 expermar">
                                                <input type="submit" className="btn btn-primary" value="Submit" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row">&nbsp;</div>
                            <div className="row">
                                <div class="col-xl-12 col-md-12 mb-12">
                                    <table className="table">
                                        <tr>
                                            <th>ID</th>
                                            <th>companyname</th>
                                            <th>designation</th>
                                            <th>start</th>
                                            <th>newenddate</th>
                                            <th>describe</th>
                                            <th>Action</th>
                                        </tr>
                                        {
                                            exper.map((exp_list, index) => {
                                                return (
                                                    <>
                                                        <Deletelist
                                                            key={index}
                                                            id={exp_list._id}
                                                            companyname={exp_list.companyname}
                                                            designation={exp_list.designation}
                                                            start={exp_list.start}
                                                            newenddate={exp_list.newenddate}
                                                            describe={exp_list.describe}
                                                            delbtn={experiendel}
                                                        />

                                                    </>
                                                )
                                            })
                                        }

                                    </table>
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
export default Experience