import React from 'react';
const Skills = (props) => {
    return (
        <>

            <div class="col-6 col-md-3 mb-3 mb-sm-5">
                <div class={`c100 p${props.point}`}>
                    <span>{props.point}%</span>
                    <div class="slice">
                        <div class="bar"></div>
                        <div class="fill"></div>
                    </div>
                </div>
                <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">{props.skname}</h6>
            </div>


        </>
    )
}
export default Skills;