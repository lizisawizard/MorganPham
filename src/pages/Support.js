import React from "react";
import Abigail from "../images/testimonials/Testimonial-Abigail.png";
import Alex from "../images/testimonials/Testimonial-Alex.png";
import Andrea from "../images/testimonials/Testimonial-Andrea.png";
import Austin from "../images/testimonials/Testimonial-Austin.png";
import Camryn from "../images/testimonials/Testimonial-Camryn.png";
import Hannah from "../images/testimonials/Testimonial-Hannah.png";
import Jack from "../images/testimonials/Testimonial-Jack.png";
import Neha from "../images/testimonials/Testimonial-Neha.png";
import Rebekah from "../images/testimonials/Testimonial-Rebekah.png";
import Temple from "../images/testimonials/Testimonial-Temple.png";


const Support = () => {
    return (
        <div className="support">
            <h2>OUR SUPPORTERS</h2>
            <div className="support-grid">
                <img className="support-card" src={Abigail} alt="Testimonial for Taylor and Vu"/>
                <img className="support-card" src={Alex} alt="Testimonial for Taylor and Vu"/>
                <img className="support-card" src={Andrea} alt="Testimonial for Taylor and Vu"/>
                <img className="support-card" src={Austin} alt="Testimonial for Taylor and Vu"/>
                <img className="support-card" src={Camryn} alt="Testimonial for Taylor and Vu"/>
                <img className="support-card" src={Hannah} alt="Testimonial for Taylor and Vu"/>
                <img className="support-card" src={Jack} alt="Testimonial for Taylor and Vu"/>
                <img className="support-card" src={Neha} alt="Testimonial for Taylor and Vu"/>
                <img className="support-card" src={Rebekah} alt="Testimonial for Taylor and Vu"/>
                <img className="support-card" src={Temple} alt="Testimonial for Taylor and Vu"/>
            </div>
        </div>
    )
}

export default Support;