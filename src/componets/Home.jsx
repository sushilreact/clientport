import React, { useEffect, useState } from 'react';
const Home = () => {
    const [getporfolio, getporfolioState] = useState([])

    const gethomedata = async () => {
        try {
            const res = await fetch("/alldata", {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json'
                }

            })
            const data = await res.json()
            console.log("This is our data load")

            getporfolioState(data)
            console.log(data.skills)





        } catch (error) {
            console.log(error)
            // history.push("/backoffice/login")
        }
    }



    const classListtload = () => {
        document.body.classList.add('home');
        document.body.classList.add('at-top');
        document.getElementById('kyw').classList.add('no-transform');
        document.getElementById('kyw').classList.add('revealator-within');
        document.getElementById('navbar-collapse-toggle').classList.remove('biohidemenu');
    }
    useEffect(() => {

        gethomedata()
        classListtload()
    }, []);


    return (
        <>
            <section id="kyw" className="container-fluid main-container container-home p-0 revealator-slideup revealator-once revealator-delay1 ">
                <div className="color-block d-none d-lg-block"></div>
                <div className="row home-details-container align-items-center">
                    <div className="col-lg-4 bg position-fixed d-none d-lg-block"></div>
                    <div className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
                        <div>
                            <img src="img/img-mobile.jpg" className="img-fluid main-img-mobile d-none d-sm-block d-lg-none"
                                alt="my picture" />
                            <h6 className="text-uppercase open-sans-font mb-0 d-block d-sm-none d-lg-block">hi there !</h6>


                            {
                                getporfolio.map((getdata, index) => {
                                    return <h1 className="text-uppercase poppins-font"><span>I'm</span> {getdata.name}</h1>
                                })
                            }
                            <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>


                            <a href="about.html" className="btn btn-about">more about me</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home;