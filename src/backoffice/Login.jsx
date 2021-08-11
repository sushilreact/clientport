import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"

const Login = () => {
    const history = useHistory()


    const [UserRegister, UserStateRegister] = useState({ email: "", password: "" })
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

    const Loginpost = async (event) => {
        event.preventDefault()

        const { email, password } = UserRegister
        console.log(email, password)
        const res = await fetch("/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email, password
            })
        })

        const data = await res.json()
        if (res.status === 422 || !data) {
            return (window.alert("Something Wrong Please Check Detail"))
        }
        else {
            return (
                window.alert("Login Successfully Submit"),
                history.push("/backoffice/bioinfo")

            )
        }
    }

    useEffect(() => {
        document.body.classList.add('contact');
        document.body.classList.add('at-top');

        document.getElementById('cont').classList.add('no-transform');
        document.getElementById('cont').classList.add('revealator-within');
        document.getElementById('cont2').classList.add('no-transform');
        document.getElementById('cont2').classList.add('revealator-within');

    }, []);


    return (
        <>
            <section id="cont" className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
                <h1>Login <span>Here</span></h1>
                <span className="title-bg">Login </span>
            </section>
            <section id="cont2" className="main-content revealator-slideup revealator-once revealator-delay1">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-lg-8 mtCenter">
                            <form onSubmit={Loginpost} method="POST">
                                <div className="contactform">
                                    <div className="row">

                                        <div className="col-6">
                                            <input type="email" name="email" value={UserRegister.email} placeholder="YOUR EMAIL" onChange={RegisterGet} />
                                        </div>


                                        <div className="col-6">
                                            <input type="password" name="password" value={UserRegister.password} placeholder="PASSWORD" onChange={RegisterGet} />
                                        </div>

                                        <div className="col-12 text-center">
                                            <input type="submit" value="Login" className="btn btn-contact" />
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

export default Login;