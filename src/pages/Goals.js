import React from "react";
import PlatformPoint from "../components/PlatformPoint";

const Goals = () => {
  return (
    <div className="goals">
      <h2>OUR GOALS</h2>
      <div className="goals--grid">
        <PlatformPoint
          title="INFRASTRUCTURE"
          subtitle="Making campus accessible for you"
          icon="foundation"
          color="green"
          initiatives={[
            {
              title: "Outdoor Wifi",
              content:
                "Increase access to internet across campus. Ensuring bandwidth meets the needs of the student population",
            },
            {
              title: "UC Shuttle Expansion",
              content:
                "Place benches or waiting pods at all major UC shuttle stops, increasing accessibility and signage for all shuttle stops, implementing shuttle rides to and from CVG regional airport at the beginning and end of university wide breaks",
            },
            {
              title: "Charging Ports & Stations",
              content:
                "Ensure all classrooms have appropriate amounts of outlets for a growing technological environment, placing charging stations around campus for outdoor or collaborative study spaces",
            },
            {
              title: "Filtered Water Accessibility",
              content:
                "Add a water bottle filling station on every floor of all buildings on campus to reduce plastic water bottle waste and increase access to clean drinking water",
            },
            {
              title: "Sustainable Tabling/Programming",
              content:
                "Start a lending program for tabling materials between student organizations to decrease duplicate expenses and increase sustainable practices, eliminate programming with one time giveaways if the giveaways do not contribute to the mission of sustainability",
            },
          ]}
        />
        <PlatformPoint
          title="EQUITY AND INCLUSION"
          subtitle="Uplift and educate for our diversity"
          icon="diversity_3"
          color="blue"
          initiatives={[
            {
              title: "Story of US",
              content:
                "Celebrate our diversity by featuring stories, books, and artwork of different heritages every month across the libraries and TUC",
            },
            {
              title: "Gender-based Violence Prevention",
              content:
                "Roll out Angel Shot at establishments around campus. Establish an ally pact with organizations to ensure gender-based violence prevention measures are in place anytime they host events off-campus",
            },
            {
              title: "Bystander Trainings",
              content:
                "Work in collaboration with identity-based centers to enroll students in bystander training. Encourage intervention when a student suspects risks of violence or abuse. Increase students who are taught how to train groups on behalf of identity-based centers",
            },
            {
              title: "SG Learns with You",
              content:
                "Encourage students to come to trainings and identity discussions by providing service opportunities and associated service hours (e.g. blanket making while discussing impact of gender on society)",
            },
            {
              title: "Mental Health Advocacy",
              content:
                "Increase access to CAPS counselors and mental health resources on campus",
            },
          ]}
        />
        <PlatformPoint
          title="COLLABORATION"
          subtitle="Engaging student leadership"
          icon="handshake"
          color="purple"
          initiatives={[
            {
              title: "Co-sponsorship Opportunities",
              content:
                "Increase co-sponsorship opportunities for student organizations across campus. Extend funding allocations to more collaborative events and initiatives across campus",
            },
            {
              title: "Promoting Student Orgs",
              content:
                "Instill weekly student group spotlights in Senate and on Instagram. Spread awareness for new and growing student organizations, uplift student organizations to the largest audience possible",
            },
            {
              title: "Up UC & Community Partnerships",
              content:
                "Increase partnerships with student organizations and local enterprises to facilitate events on campus such as volunteer recruitment, recruitment and retention of students, collaborative trainings, CPS etc.",
            },
            {
              title: "UC on the Map",
              content:
                "Connect colleges to their alumni networks by collaborating with SAC for dinners with bearcats. Encourage students to pursue mentorship opportunities with alumni",
            },
            {
              title: "Pay it Forward",
              content:
                "Advocate on the behalf of students for paid work opportunities to fulfill their curriculum requirements, especially A&S and CECH. Increase campus-wide networking opportunities.  Increase undergraduate research opportunity accessibility especially within the scope of the Cincinnati Innovation District",
            },
          ]}
        />
        <PlatformPoint
          title="LEADERSHIP"
          subtitle="Always proudly serving UC!"
          icon="social_leaderboard"
          color="blue"
          initiatives={[
            {
              title: "Open Student Government Office",
              content:
                "Establish regular hours for student government office to be open to students. Create a welcoming space for students to come hang out and express their concerns",
            },
            {
              title: "Student Leadership Council",
              content:
                "Monthly meetings with student leadership across campus. Gauge concerns and interests of various areas affecting the student body and work collaboratively to address them",
            },
            {
              title: "Student Group Caucuses",
              content:
                "Organized groups of student leaders dedicated to advocacy and addressing issues on campus",
            },
            {
              title: "Transparency",
              content:
                "Regular updates on Instagram and student government website to better inform the student body of what SG has been working on and what meetings the president and vice president are attending",
            },
            {
              title: "Townhall Series",
              content:
                "Monthly open forums with UC Administrators to hear student feedback and address students' concerns",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Goals;
