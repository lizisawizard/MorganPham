import React from "react";
import TeamCard from "../components/TeamCard";
import JordanKlemt from "../images/team/JordanKlemt.jpeg";
import SamGeiger from "../images/team/SamGeiger.jpeg";
import MasonGoins from "../images/team/MasonGoins.jpeg";
import EllenWalter from "../images/team/EllenWalter.jpg";
import KarishmaPonkshe from "../images/team/KarishmaPonkshe.jpg";
import JosephRainford from "../images/team/JosephRainford.png";
import SydneyRichardson from "../images/team/SydneyRichardson.JPG";
import AustinWood from "../images/team/AustinWood.jpeg";
import MikaylaDixon from "../images/team/MikaylaDixon.jpeg";
import MaddiePridemore from "../images/team/MaddiePridemore.png";
import JackBuckley from "../images/team/JackBuckley.jpg";
import TrentonStern from "../images/team/TrentonStern.jpeg";
import RebekahLittlepage from "../images/team/RebekahLittlepage.jpg";
import LucyGharibianAberg from "../images/team/Lucy GharibianAberg.jpg";
import MaxKemats from "../images/team/MaxKemats.jpg";
import JaelaKennedy from "../images/team/JaelaKennedy.jpeg";
import AndrewWiedeman from "../images/team/AndrewWiedeman.jpeg";
import AdeleneSomerville from "../images/team/AdeleneSomerville.PNG";

const Team = () => {
    return (
        <div className="team">
            <h2>OUR TEAM</h2>
            <div className="team--grid">
                <TeamCard name="Jordan Klemt" img={JordanKlemt}/>
                <TeamCard name="Sam Geiger" img={SamGeiger}/>
                <TeamCard name="Mason Goins" img={MasonGoins}/>
                <TeamCard name="Ellen Walter" img={EllenWalter}/>
                <TeamCard name="Karishma Ponkshe" img={KarishmaPonkshe}/>
                <TeamCard name="Joseph Rainford" img={JosephRainford}/>
                <TeamCard name="Sydney Richardson" img={SydneyRichardson}/>
                <TeamCard name="Austin Wood" img={AustinWood}/>
                <TeamCard name="Mikayla Dixon" img={MikaylaDixon}/>
                <TeamCard name="Maddie Pridemore" img={MaddiePridemore}/>
                <TeamCard name="Jack Buckley" img={JackBuckley}/>
                <TeamCard name="Trenton Stern" img={TrentonStern}/>
                <TeamCard name="Rebekah Littlepage" img={RebekahLittlepage}/>
                <TeamCard name="Lucy Gharibian-Aberg" img={LucyGharibianAberg}/>
                <TeamCard name="Max Kemats" img={MaxKemats}/>
                <TeamCard name="Jaela Kennedy" img={JaelaKennedy}/>
                <TeamCard name="Andrew Wiedeman" img={AndrewWiedeman}/>
                <TeamCard name="Adelene Somerville" img={AdeleneSomerville}/>
            </div>
        </div>
    )
}

export default Team;