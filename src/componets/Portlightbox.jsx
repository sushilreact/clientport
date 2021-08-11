import React from 'react'

const Portlightbox = (props) => {
    return (
        <>
            <li key="index" className={props.idlight} >
                <figure >

                    <figcaption>
                        <h3>{props.projectnameport}</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row open-sans-font">
                                    <div className="col-12 col-md-12 mb-2">
                                        <i className="fa fa-file-text-o pr-2" /><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">{props.projectnameport}</span>
                                    </div>
                                    <div className="col-12 col-md-12 mb-2">
                                        <i className="fa fa-user-o pr-2" /><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">{props.clientport}</span>
                                    </div>
                                    <div className="col-12 col-md-12 mb-2">
                                        <i className="fa fa-code pr-2" /><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">{props.langport}</span>
                                    </div>
                                    <div className="col-12 col-md-12 mb-2">
                                        <i className="fa fa-external-link pr-2" /><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href={props.previewport} target="_blank">{props.previewport}</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={`http://localhost:9700/uploads/${props.imagelight}`} alt="Portolio Image" />
                            </div>
                        </div>
                    </figcaption>



                </figure>
            </li>
        </>
    )
}

export default Portlightbox;
