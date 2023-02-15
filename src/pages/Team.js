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
import LizTremblay from "../images/team/LizTremblay.PNG";

const Team = () => {
    return (
        <div className="team">
            <h2>OUR TEAM</h2>
            <div className="team--grid">
                <TeamCard name="Jordan Klemt" type="manager" img={JordanKlemt}/>
                <TeamCard name="Sam Geiger" type="operations" img={SamGeiger}/>
                <TeamCard name="Mason Goins" type="unknown" img={MasonGoins}/>
                <TeamCard name="Ellen Walter" type="operations" img={EllenWalter}/>
                <TeamCard name="Joseph Rainford" type="manager" img={JosephRainford}/>
                <TeamCard name="Karishma Ponkshe" type="unknown" img={KarishmaPonkshe}/>
                <TeamCard name="Sydney Richardson" type="unknown" img={SydneyRichardson}/>
                <TeamCard name="Austin Wood" type="manager" img={AustinWood}/>
                <TeamCard name="Mikayla Dixon" type="marketing" img={MikaylaDixon}/>
                <TeamCard name="Jack Buckley" type="operations" img={JackBuckley}/>
                <TeamCard name="Maddie Pridemore" type="marketing" img={MaddiePridemore}/>
                <TeamCard name="Rebekah Littlepage" type="operations" img={RebekahLittlepage}/>
                <TeamCard name="Lucy Gharibian-Aberg" type="marketing" img={LucyGharibianAberg}/>
                <TeamCard name="Max Kemats" type="operations" img={MaxKemats}/>
                <TeamCard name="Jaela Kennedy" type="unknown" img={JaelaKennedy}/>
                <TeamCard name="Andrew Wiedeman" type="marketing" img={AndrewWiedeman}/>
                <TeamCard name="Adelene Somerville" type="unknown" img={AdeleneSomerville}/>
                <TeamCard name="Liz Tremblay" type="marketing" img={LizTremblay}/>
                <TeamCard name="Trenton Stern" type="manager" img={TrentonStern}/>
            </div>
        </div>
    )
}

export default Team;