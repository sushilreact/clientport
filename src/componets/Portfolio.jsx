import React, { Component, useEffect, useState } from 'react';
import Thumnailport_list from './Thumnailport_list';
import Portlightbox from './Portlightbox';
import Functionnal from './Functionnal';
import $ from 'jquery';


const Portfolio = () => {



    const filterItem = async (categoryitem) => {
        const result = allModelos.map((port) => {
            return { ...port, portfolio: port.portfolio.filter(data => data.categories === categoryitem) }
        });
        getporfolioState(result)
    };

    const alldata = (a) => {

        const results = all.map((portall) => {
            return { ...portall, portfolio: portall.portfolio.filter(data => data.categories != a) }
        });

        getporfolioState(results)
    }

    const [getporfolio, getporfolioState] = useState([])
    const [allModelos, guardarAllModelo] = useState([]);
    const [all, AllState] = useState([]);

    $(document).ready(function () {

        $(".grid-wrap .grid li").unbind().click(function (e) {
            console.log(this.className);
            var newe = this.className;
            $('.' + newe).addClass('current show');
            $("#grid-gallery").addClass("slideshow-open");




        });


        $("#closeport").unbind().click(function (e) {

            $("#grid-gallery").removeClass("slideshow-open");
            $(".portfolio .grid li").removeClass('current show');
            $(".portfolio .slideshow ul > li").removeClass('current show');
        });








    });


    const portadd = () => {
        document.body.classList.add('portfolio');
        document.body.classList.add('at-top');

        document.getElementById('port').classList.add('no-transform');
        document.getElementById('port').classList.add('revealator-within');
        document.getElementById('port2').classList.add('no-transform');
        document.getElementById('port2').classList.add('revealator-within');
        document.getElementById('navbar-collapse-toggle').classList.remove('biohidemenu');
    }

    const getalldata = async () => {
        try {
            const res = await fetch("/alldata", {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json'
                }

            })
            const data = await res.json()
            // console.log("This is our data load")
            // console.log(data.portfolio)
            getporfolioState(data)
            guardarAllModelo(data)
            AllState(data)



        } catch (error) {
            console.log(error)
            // history.push("/backoffice/login")
        }
    }





    useEffect(() => {
        getalldata()
        portadd()




    }, []);
    return (
        <>

            <section id="port" class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
                <h1 >my <span>portfolio</span></h1>
                <span class="title-bg">works</span>
            </section>
            <section id="port2" className="main-content text-center revealator-slideup revealator-once revealator-delay1">
                <div class="container">
                    <button className="btn btn-about " onClick={() => filterItem('mobileapp')}>Mobile</button>&nbsp;&nbsp;
                    <button className="btn btn-about " onClick={() => filterItem('frontend')}>Frontend</button>&nbsp;&nbsp;
                    <button className="btn btn-about " onClick={() => filterItem('gdesign')}>Graphics</button>&nbsp;&nbsp;
                    <button className="btn btn-about " onClick={() => alldata('grter')}>All Data</button>
                </div>
                <div id="grid-gallery" className="container grid-gallery">
                    {/* Portfolio Grid Starts */}
                    <section className="grid-wrap">
                        <ul className="row grid">
                            {
                                getporfolio.map((getdata, index) => {

                                    return (
                                        <>

                                            {
                                                getdata.portfolio.map((port, indexval) => {
                                                    return (
                                                        <>
                                                            <Thumnailport_list
                                                                key={indexval}
                                                                portID={port._id}
                                                                imagetag={port.imguploadedFile}
                                                                figuertext={port.projectname}

                                                            />
                                                        </>
                                                    )
                                                })
                                            }
                                        </>
                                    )
                                })
                            }

                        </ul>
                    </section>
                    {/* Portfolio Grid Ends */}
                    {/* Portfolio Details Starts */}
                    <section className="slideshow" id="sdfer">
                        <ul>
                            {/* Portfolio Item Detail Starts */}
                            {
                                getporfolio.map((getdata, index) => {

                                    return (
                                        <>

                                            {
                                                getdata.portfolio.map((lightbox, lightindex) => {
                                                    return (
                                                        <>
                                                            <Portlightbox
                                                                key={lightindex}
                                                                idlight={lightbox._id}
                                                                imagelight={lightbox.imguploadedFile}
                                                                langport={lightbox.language}
                                                                clientport={lightbox.client}
                                                                projectnameport={lightbox.projectname}
                                                                previewport={lightbox.preview}
                                                            />
                                                        </>
                                                    )
                                                })
                                            }
                                        </>
                                    )
                                })
                            }






                        </ul>
                        {/* Portfolio Navigation Starts */}
                        <nav>
                            {/*<span className="icon nav-prev prev"><img src="images/left-arrow.png" alt="previous" /></span>
                        <span className="icon nav-next next"><img src="images/right-arrow.png" alt="next" /></span>*/}
                            <span className="nav-close" id="closeport"><img src="images/close-button.png" alt="close" /> </span>
                        </nav>
                        {/* Portfolio Navigation Ends */}
                    </section>
                </div>
            </section>




        </>
    )
}

export default Portfolio;