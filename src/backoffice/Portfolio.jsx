import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Backnav from './Backnav'
import Topnav from './Topnav'
import Inputtags from './Inputtags'
import ReactTagInput from "@pathofdev/react-tag-input"
import "@pathofdev/react-tag-input/build/index.css"
import Portfoliolist from './Portfoliolist'
import $ from "jquery";


const Portfolio = (props) => {
    const history = useHistory();
    const [bioget, biostateData] = useState('')
    const [imguploadedFile, setUploadedFile] = useState('');
    const [projectname, setFileTitle] = useState('');
    const [client, setFileClient] = useState('');
    const [preview, setFilePreview] = useState('');
    const [items] = useState([
        {
            label: "Select options",
            value: ""
        },
        { label: "Mobile App Design", value: "mobileapp" },
        { label: "Frontend", value: "frontend" },
        { label: "Graphics Design", value: "gdesign" }
    ]);

    const [selval, selgetState] = useState();


    const [skillsArray, setSkillsArray] = useState([]);

    const [portdatashow, portSetdata] = useState([]);


    const biogetdata = async () => {
        try {
            const res = await fetch("/portfoliodata", {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json'
                }

            })
            const data = await res.json()

            const datalength = data.personalinfo.length

            if (datalength > 0) {
                history.push("/backoffice/Portfolio")
            }

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }
            biostateData(data)

            portSetdata(data.portfolio)
            console.log(portdatashow)
        } catch (error) {
            console.log(error)
            history.push("/backoffice/login")
        }
    }

    const handleFormSubmittion = async (e) => {
        e.preventDefault();

        let form = document.getElementById('form');
        let formData = new FormData(form);
        formData.append("skillsArray", skillsArray)
        formData.append("selval", selval)
        const res = await fetch("/portfolio", {
            method: "post",
            body: formData
        })

        // do something
        console.log("Form submitted")
        alert("Data Submit Successfully")
        cancelCourse()


    }

    const cancelCourse = async () => {
        setFileTitle('');
        setFileClient('');
        setFilePreview('');
        setUploadedFile('');
        $('.tag').remove();
        $('#form').each(function () {
            this.reset();
        });

    }

    const handleFileTitle = async (e) => {
        setFileTitle(e.target.value);
    }
    const handleClientname = async (e) => {
        setFileClient(e.target.value);
    }
    const handlePreviewname = async (e) => {
        setFilePreview(e.target.value);
    }

    const handleUploadedFile = (e) => {
        setUploadedFile(e.target.value);
        // console.log(newlang);
    }
    // console.log("skillsArray=======================", skillsArray);

    const selectedTags = (tags) => {
        // console.log("tags=======================", tags);
        setSkillsArray(tags)
    };

    const selectvalueget = (e) => {
        selgetState(e.target.value);
    }










    /// Delete USER function
    const portdeletebutton = async (portlistid, portlistclient, portlistimg, portlistlang, portlistpreview) => {
        const portlistidtarget = portlistid
        const portclient = portlistclient
        const portimg = portlistimg
        const portlang = portlistlang
        const portpreview = portlistpreview
        const mainid = bioget._id



        const res = await fetch("/portfoliogetbyiddelete", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                mainid, portlistidtarget, portclient, portimg, portlang, portpreview
            })
        })
        const deleteresult = await res.json()
        console.log(deleteresult.Message)
        if (deleteresult === 202) {


        }
        else {
            alert("sdsad")
            biogetdata()

        }

    }




    useEffect(() => {
        biogetdata()
        document.getElementById('navbar-collapse-toggle').classList.add('biohidemenu')
        document.body.classList.add()
    }, [])

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
                                <h1 className="h3 mb-0 text-gray-800">PORTFOLIO</h1>

                            </div>
                            <div className="row">
                                <div className="col-xl-12 col-md-12 mb-12">
                                    <div className="card shadow mb-4">
                                        <form
                                            encType="multipart/form-data"
                                            id="form"
                                        >

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>File Upload:</label><br />
                                                        <input className="form-control"
                                                            type="file"
                                                            name="imguploadedFile"
                                                            value={imguploadedFile}
                                                            onChange={handleUploadedFile}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>File title:</label><br />
                                                        <input className="form-control"
                                                            type="text"
                                                            placeholder="Enter file title"
                                                            name="projectname"
                                                            value={projectname}
                                                            onChange={handleFileTitle}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Client Name:</label><br />
                                                        <input className="form-control"
                                                            type="text"
                                                            placeholder="Client Name"
                                                            name="client"
                                                            value={client}
                                                            onChange={handleClientname}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Preview:</label><br />
                                                        <input className="form-control"
                                                            type="text"
                                                            placeholder="Link Here"
                                                            name="preview"
                                                            value={preview}
                                                            onChange={handlePreviewname}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Languages/Software:</label><br />
                                                        <Inputtags className="form-control" selectedTags={selectedTags} tags={skillsArray} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Select Categories:</label><br />
                                                        <select className="form-control" onChange={selectvalueget} >
                                                            {items.map(item => (
                                                                <option
                                                                    key={item.value}
                                                                    value={item.value}
                                                                >
                                                                    {item.label}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6"><button className="btn btn-primary" type="submit" onClick={handleFormSubmittion}>Submit Form</button></div>

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
                    <div class="container-fluid">
                        <div className="row">
                            <div className="col-xl-12 col-md-12 mb-12">
                                <div className="card shadow mb-4">

                                    <div class="table-responsive">
                                        <table className="table table-bordered">
                                            <tr>
                                                <th>ID</th>
                                                <th>Categories</th>
                                                <th>Project Title</th>
                                                <th>Client Name</th>
                                                <th>Image</th>
                                                <th>Lan/Soft</th>
                                                <th>Link</th>
                                                <th>Actions</th>
                                            </tr>
                                            {
                                                portdatashow.map((portlist, index) => {
                                                    return (


                                                        <>

                                                            <Portfoliolist
                                                                key={index}
                                                                portlistid={portlist._id}
                                                                portcat={portlist.categories}
                                                                portprojectname={portlist.projectname}
                                                                portlistclient={portlist.client}
                                                                portlistimg={portlist.imguploadedFile}
                                                                portlistlang={portlist.language}
                                                                portlistpreview={portlist.preview}
                                                                portlistdelete={portdeletebutton}

                                                            />

                                                        </>

                                                    )
                                                })
                                            }

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
export default Portfolio