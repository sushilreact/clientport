import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
    const contactser = () => {
        document.body.classList.add('contact');
        document.body.classList.add('at-top');

        document.getElementById('cont').classList.add('no-transform');
        document.getElementById('cont').classList.add('revealator-within');
        document.getElementById('cont2').classList.add('no-transform');
        document.getElementById('cont2').classList.add('revealator-within');
        document.getElementById('navbar-collapse-toggle').classList.remove('biohidemenu');
    }

    const sendemail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_9j5nbcm', 'template_r3gkrwq', e.target, 'user_FyPYT3foGfISv6UkYEXFq')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()


    }

    useEffect(() => {
        contactser()
    });
    return (
        <>
            <section id="cont" class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
                <h1>get in <span>touch</span></h1>
                <span class="title-bg">contact</span>
            </section>
            <section id="cont2" class="main-content revealator-slideup revealator-once revealator-delay1">
                <div class="container">
                    <div class="row">

                        <div class="col-12 col-lg-4">
                            <h3 class="text-uppercase custom-title mb-0 ft-wt-600 pb-3">Don't be shy !</h3>
                            <p class="open-sans-font mb-3">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                            <p class="open-sans-font custom-span-contact position-relative">
                                <i class="fa fa-envelope-open position-absolute"></i>
                                <span class="d-block">mail me</span>steve@mail.com
                            </p>
                            <p class="open-sans-font custom-span-contact position-relative">
                                <i class="fa fa-phone-square position-absolute"></i>
                                <span class="d-block">call me</span>+216 21 184 010
                            </p>
                            <ul class="social list-unstyled pt-1 mb-5">
                                <li class="facebook"><a title="Facebook" href="#"><i class="fa fa-facebook"></i></a>
                                </li>
                                <li class="twitter"><a title="Twitter" href="#"><i class="fa fa-twitter"></i></a>
                                </li>
                                <li class="youtube"><a title="Youtube" href="#"><i class="fa fa-youtube"></i></a>
                                </li>
                                <li class="dribbble"><a title="Dribbble" href="#"><i class="fa fa-dribbble"></i></a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-12 col-lg-8">
                            <form class="contactform" onSubmit={sendemail}>
                                <div class="contactform">
                                    <div class="row">
                                        <div class="col-12 col-md-4">
                                            <input type="text" name="from_name" placeholder="YOUR NAME" />
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <input type="email" name="from_email" placeholder="YOUR EMAIL" />
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <input type="text" name="from_subject" placeholder="YOUR SUBJECT" />
                                        </div>
                                        <div class="col-12">
                                            <textarea name="from_message" placeholder="YOUR MESSAGE"></textarea>
                                            <button type="submit" class="btn btn-contact">Send Message</button>
                                        </div>
                                        <div class="col-12 form-message">
                                            <span class="output_message text-center font-weight-600 text-uppercase"></span>
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

export default Contact;