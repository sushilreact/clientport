import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"


const Signup = () => {

    const history = useHistory()
    useEffect(() => {
        document.body.classList.add('contact');
        document.body.classList.add('at-top');

        document.getElementById('cont').classList.add('no-transform');
        document.getElementById('cont').classList.add('revealator-within');
        document.getElementById('cont2').classList.add('no-transform');
        document.getElementById('cont2').classList.add('revealator-within');
    });


    const [UserRegister, UserStateRegister] = useState({ name: "", email: "", phone: "", password: "" })
    const RegisterGet = (e) => {
        const { name, value } = e.target
        UserStateRegister((prevalue) => {
            console.log(prevalue)
            return {
                ...prevalue,
                [name]: value
            }
        })
    }

    const Registerpost = async (event) => {
        event.preventDefault()
        const { name, email, phone, password } = UserRegister
        console.log(name, email, phone, password)
        const res = await fetch("/register", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name, email, phone, password
            })
        })

        const data = await res.json()
        if (res.status === 422 || !data) {
            return (window.alert("Email Allready Exits"))
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
            <section id="cont" className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
                <h1>Register <span>Here</span></h1>
                <span className="title-bg">SignUp </span>
            </section>
            <section id="cont2" className="main-content revealator-slideup revealator-once revealator-delay1">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-lg-8 mtCenter">
                            <form onSubmit={Registerpost} method="POST">
                                <div className="contactform">
                                    <div className="row">
                                        <div className="col-6">
                                            <input type="text" name="name" value={UserRegister.name} placeholder="YOUR NAME" onChange={RegisterGet} />
                                        </div>
                                        <div className="col-6">
                                            <input type="email" name="email" value={UserRegister.email} placeholder="YOUR EMAIL" onChange={RegisterGet} />
                                        </div>
                                        <div className="col-6">
                                            <input type="number" name="phone" value={UserRegister.phone} placeholder="PHONE" onChange={RegisterGet} />
                                        </div>

                                        <div className="col-6">
                                            <input type="password" name="password" value={UserRegister.password} placeholder="PASSWORD" onChange={RegisterGet} />
                                        </div>

                                        <div className="col-12 text-center">
                                            <input type="submit" value="Register" className="btn btn-contact" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}

export default Signup;