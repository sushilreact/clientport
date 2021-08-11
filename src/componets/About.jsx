import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import moment from 'moment'
import Skills from './Skills'
const About = () => {
    const history = useHistory()


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


    const aboutload = () => {
        document.body.classList.add('about');
        document.body.classList.add('at-top');
        document.body.classList.remove('home');
        document.getElementById('kabout').classList.add('no-transform');
        document.getElementById('kabout').classList.add('revealator-within');
        document.getElementById('kabout2').classList.add('no-transform');
        document.getElementById('kabout2').classList.add('revealator-partially-below');
        document.getElementById('navbar-collapse-toggle').classList.remove('biohidemenu');
    }

    useEffect(() => {
        aboutload()
        getalldata()
    }, []);
    return (
        <>
            <section id="kabout" className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
                <h1>ABOUT <span>ME</span></h1>
                <span className="title-bg">Resume</span>
            </section>
            <section id="kabout2" className="main-content revealator-slideup revealator-once revealator-delay1 ">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-lg-5 col-xl-6">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="text-uppercase custom-title mb-0 ft-wt-600">personal infos</h3>
                                </div>
                                <div className="col-12 d-block d-sm-none">
                                    <img src="img/img-mobile.jpg" className="img-fluid main-img-mobile" alt="my picture" />
                                </div>
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
                                                                        <li> <span className="title">Email :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{getdata.email}</span> </li>
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
                                <div className="col-12 mt-3">
                                    <a href="about.html" className="btn btn-download">Download CV</a>
                                </div>
                            </div>
                        </div>
                        {
                            update.map((getdata, index) => {

                                return (
                                    <>

                                        {
                                            getdata.personalinfo.map((personal, indexval) => {
                                                return (
                                                    <>
                                                        <div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div className="box-stats with-margin">
                                                                        <h3 className="poppins-font position-relative">{personal.i_experience}</h3>
                                                                        <p className="open-sans-font m-0 position-relative text-uppercase">years of <span class="d-block">experience</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="box-stats with-margin">
                                                                        <h3 className="poppins-font position-relative">{personal.i_project}</h3>
                                                                        <p className="open-sans-font m-0 position-relative text-uppercase">completed <span class="d-block">projects</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="box-stats">
                                                                        <h3 className="poppins-font position-relative">{personal.i_customer}</h3>
                                                                        <p className="open-sans-font m-0 position-relative text-uppercase">Happy<span class="d-block">customers</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="box-stats">
                                                                        <h3 className="poppins-font position-relative">53</h3>
                                                                        <p className="open-sans-font m-0 position-relative text-uppercase">awards <span class="d-block">won</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </>
                                )
                            })
                        }


                    </div>
                    <hr className="separator" />

                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">My Skills</h3>
                        </div>
                        {
                            update.map((getdata, index) => {

                                return (
                                    <>

                                        {
                                            getdata.skills.map((skvar, skval) => {
                                                return (
                                                    <>
                                                        <Skills
                                                            key={skvar._id}
                                                            skname={skvar.skillname}
                                                            point={skvar.skillexp}
                                                        />


                                                    </>
                                                )
                                            })
                                        }
                                    </>
                                )
                            })
                        }

                    </div>

                    <hr className="separator mt-1" />

                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Experience <span>&</span> Education</h3>
                        </div>
                        <div className="col-12 m-15px-tb">
                            <div className="resume-box">
                                <ul>
                                    {
                                        update.map((getdata, index) => {

                                            return (
                                                <>

                                                    {
                                                        getdata.exper.map((exp, exval) => {

                                                            const dateFormat = 'DD-MM-YYYY';
                                                            let toDateFormat = new Date(exp.newenddate);
                                                            console.log("valid?: ", toDateFormat);
                                                            console.log("null" === toDateFormat);
                                                            if (toDateFormat != "Invalid Date" && exp.newenddate != null) {
                                                                toDateFormat = moment(toDateFormat).format(dateFormat)
                                                            }
                                                            else {
                                                                toDateFormat = "Present";
                                                            }

                                                            // const datene = moment(expgetdata.newenddate).format('MM-DD-YYYY')

                                                            const startdate = moment(exp.start).format('MM-DD-YYYY');
                                                            return (
                                                                <>
                                                                    <li className="col-lg-6 leftpos" key={exval}>
                                                                        <div className="icon">
                                                                            <i className="fa fa-briefcase"></i>
                                                                        </div>
                                                                        <span className="time open-sans-font text-uppercase">{startdate} - {toDateFormat}</span>
                                                                        <h5 className="poppins-font text-uppercase"> {exp.companyname}<span class="place open-sans-font">{exp.designation}</span></h5>
                                                                        <p className="open-sans-font">{exp.describe}</p>
                                                                    </li>


                                                                </>
                                                            )
                                                        })
                                                    }
                                                </>
                                            )
                                        })
                                    }




                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default About;