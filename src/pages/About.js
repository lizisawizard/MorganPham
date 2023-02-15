import React from "react";
import BannerImg from "../images/AandS2.jpg";
import Taylor from "../images/taylor-2.jpg";
import Vu from "../images/vu-2.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about--together">
        <h2>ABOUT US</h2>
        <div className="img-banner-container">
          <img className="img-banner" src={BannerImg} />
        </div>
        <h3>
          "We've dedicated our UC career to improving student life, and we are
          not finished!"
        </h3>
        <p className="about text-wall">
          We are here to serve YOU, the student body, as the University Student
          Government. We want to revamp the student government experience to
          pull students together and increase collaboration across the
          university. We have both seen and experienced student organizations
          that have been successful in collaborating with multiple groups to
          host events, initiatives, and programming. <br />
          <br />
          We want to represent your voice! Be on the look out for more feedback
          options and a student dashboard where you can pose questions, bring up
          suggestions, and speak your voice for us to communicate to the
          administration. We have existing relationships with deans across the
          university and will be utilizing those relationships to host monthly
          town halls with UC administration to connect them to you.
          <br />
          <br />
          More than anything, we want to ensure that we accomplish what we've
          promised. Our platform is a promise to the students at UC to fulfill
          their needs and expectations. We know our actions speak louder than
          words. We've crafted our goals around YOU and what the student body
          needs. So much of our time has already been dedicated to the success
          of our peers, and we do not plan on stopping now.
        </p>
      </div>
      <div className="about--individuals">
        <div className="about--individual">
          <img src={Taylor} className="about--individual-img" />
          <span>
            <p>PRESIDENTIAL CANDIDATE</p>
            <h2>TAYLOR MORGAN</h2>
            <p>Biomedical Engineering</p>
            <p>Class of 2024</p>
            <br />
            <p className="about--individual-description">
              Taylor Morgan is a 4th year biomedical engineering major with a
              minor in international business, however, she is involved in many
              colleges around the University of Cincinnati. She has worked
              closely with administration within the College of Engineering and
              Applied Science, The College of Cooperative Education and
              Professional Studies, the Lindner College of Business, and the
              College of Arts and Sciences. <br />
              <br /> She is dedicated to increasing accessibility around campus
              and resources for all students. She loves to hike new trails and
              try new recipes in her free time. She also plays cello and has
              been a part of the University Symphony Orchestra. Taylor began her
              college career as a CEAS Tribunal intern for the career
              development committee and has since progressed through leadership
              to becoming their current elected President, helping to run 8
              bi-annual career fairs. <br />
              <br />
              She also has been part of iCATS and received her cultural
              development certificate, the Biomedical Engineering Society and
              helped with a BME-specific career fair, the Society of Women in
              Engineering as their outreach chair, Student Alumni Council,
              Homecoming Court 2022, Cincinnatus Honorary Society, and
              volunteers at the Found House Pet Program weekly.
            </p>
          </span>
        </div>
        <div className="about--individual">
          <img src={Vu} className="about--individual-img" />
          <span>
            <p>VICE PRESIDENTIAL CANDIDATE</p>
            <h2>VU PHAM</h2>
            <p>Chemical Engineering</p>
            <p>Class of 2024</p>
            <br />
            <p className="about--individual-description">
              Vu is a detail-oriented engineer leader with passions in green
              chemistry, equitable education, and mental health awareness.
              Originally from Vietnam, Vu has lived and worked in multicultural
              communities, helping bridge understanding among diverse identities
              and bring his unique perspectives to the table, serving as a
              catalyst for changes. <br />
              <br /> On campus, he has served as External Holdover Senator on
              the executive board of Undergraduate Student Government, Vice
              President of Collegiate Affairs in CEAS Tribunal, and a dedicated
              CEAS Ambassadors. Vu used his platform to advocate for Open
              Educational Resources and more accessible mental health services.
              Vu is a capable student leader with strong academic background,
              diverse leadership portfolio, and a determination to transform UC
              for the better. <br />
              <br />
              He also has 30 cousins ;)
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
