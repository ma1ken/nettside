import "../../Styles/Pages.css";
import "../../Styles/AboutMeLayout.css";
import "../../Styles/Cards.css";
import kobenhavn from "../../Images/kobenhavn.jpg";

export default function AboutMeLayout() {
  return (
    <div className="content-container">
      <div className="text-image-section">
        <div className="text">
          <h1>Hi, I'm Maiken!</h1>
          <p>
            Welcome to my website! It is a bit messy right now, but hopefully
            you'll find access to my portfolio and learn more about me! I am
            currently looking for a full time job and constantly applying for
            jobs, while im fixing this page and renovating my apartment.
          </p>
          <p>
            I am 27 years old and I live in Oslo. You would think that should
            give me a lot of jobopportunities, which it does, but not a lot of
            jobs or interviews. So please, take ur time and appreciate that it
            takes a while to build this page, even though I have a lot to fix. I
            really like to draw, change my home all the time, connect with
            nature, animals and knitting. Ive been a gamer forever, but I dont
            have time anymore and I get way to addicted when Im playing, so I
            think that time has passed. I like to talk about gaming and watch
            other people play still tho. :D
          </p>
        </div>

        <div className="image">
          <img src={kobenhavn} alt="me in Copenhagen this summer 2025." />
        </div>
      </div>
      <div>
        <h2>What's the purpose of this website?</h2>

        <p>
          I decided to build and create my own website from scratch, to improve
          my skills in React and become a better frontend developer. This
          website is under construction and will improve over time, and I will
          add more back-end solutions in the future. I am currently looking for
          a job and I want to work with Frontend and UX. I am interested in
          improving my Backend skills as well as I want to become a
          fullstack-developer. I think my UX skills gives me a strong advantage,
          as I am very good at finding and understanding problems, and look for
          new and better solutions. Previously I've worked a lot in teams, but I
          do really enjoy spending time on my own creating new solutions, and I
          can code for hours once I've started. I thrive when I learn something
          new everyday, and I like to be given responsibility once I'm
          comfortable.
        </p>
      </div>
    </div>
  );
}
