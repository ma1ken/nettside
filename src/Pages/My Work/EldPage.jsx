import "../../Styles/Pages.css";
import eld1 from "../../Images/eld1.png";
import eldprofil1 from "../../Images/eldprofil1.png";
import eldprofil2 from "../../Images/eldprofil2.png";
import eldprofil3 from "../../Images/eldprofil3.png";
import eldprofil4 from "../../Images/eldprofil4.png";
import eld3 from "../../Images/eld3.png";
import eld4 from "../../Images/eld4.png";
import eld5 from "../../Images/eld5.png";


export default function EldPage() {
    return (
        <div>
            <h2>
                <div className="content-container">
                    <div className="about-text">
                        <h1>ELD</h1>
                        <p>
                            A group project I worked on in the subject "Design
                            Project". This was during the fifth semester of my
                            Bachelors Degree in "IT and UX Design" at Kristiania
                            University of Applied Sciences.
                        </p>
                        <h2>GRADE: A</h2>
                        <h3>
                            Our project aimed to address challenges related to
                            student job opportunities and elderly loneliness by
                            developing an innovative digital platform.
                        </h3>
                        <p>
                            The project was carried out as part of the course
                            Design Project DPR5100 at Kristiania University
                            College during the fall of 2023. It consisted of
                            four submissions designed to evaluate our progress
                            across different phases. The course concluded with
                            an oral exam where we presented our final solution
                            and reflected on the entire process.
                        </p>
                    </div>
                    <div className="special-image">
                        <img
                            src={eld1}
                            alt="Two people holding a tablet with the eld logo in the center."
                        />
                    </div>
                    <div className="about-text">
                        <h2>
                            PART 1 <br />
                            Idea and Conceptual Model
                        </h2>
                        <h3>Objective</h3>
                        <p>
                            We aimed to improve work opportunities and income
                            for students while also addressing social needs. The
                            collaboration between young workers/students and the
                            elderly was meant to enhance the quality of life for
                            seniors and help society adapt to the growing
                            elderly population.
                        </p>
                    </div>

                    <div className="about-text">
                        <h3>Problem Understanding:</h3>
                        <p>
                            Students faced financial difficulties and declining
                            health, with 55% of full-time students needing to
                            work to afford food and housing. Simultaneously,
                            many elderly individuals experienced loneliness and
                            a lack of social interaction, with 1 in 3 living
                            alone. Our solution aimed to bridge these two groups
                            through a digital platform that facilitated
                            part-time work and social engagement—while also
                            addressing the broader societal challenge of an
                            aging population.
                        </p>
                    </div>
                    <div>
                        <h2>
                            PART 2 <br />
                            Wireframes and Sitemaps
                        </h2>
                        <p>
                            The collage below showcased examples of the
                            wireframes we created when designing a solution
                            tailored to the elderly. These wireframes were the
                            same ones we later used during usability testing in
                            the next phase.
                        </p>
                    </div>
                    <div className="profil-image">
                        <img
                            src={eldprofil1}
                            alt="Two people holding a tablet with the eld logo in the center."
                        />
                        <img
                            src={eldprofil2}
                            alt="Two people holding a tablet with the eld logo in the center."
                        />
                        <img
                            src={eldprofil3}
                            alt="Two people holding a tablet with the eld logo in the center."
                        />
                        <img
                            src={eldprofil4}
                            alt="Two people holding a tablet with the eld logo in the center."
                        />
                    </div>
                    <div className="">
                        <p>
                            In our sitemap, we developed a complete overview of
                            the app from the landing page through the various
                            flows for both target groups. The version presented
                            for the younger demographic (students) was intended
                            as a concept for future development, as we didn't
                            have the capacity to fully build out both sides.
                            However, we took the preferences of younger users
                            into account in Part 4, which could serve as
                            inspiration for further expansion.
                        </p>
                    </div>
                    <div>
                        <img
                            src={eld3}
                            alt="Two people holding a tablet with the eld logo in the center."
                        />
                    </div>

                    <div>
                        <h2>
                            PART 3 <br />
                            Usability Test
                        </h2>
                        <p>
                            Before continuing with further development, we
                            conducted a usability test with our primary
                            audience: elderly users. It was important for us to
                            gain insight into how they experienced the interface
                            so we could optimize typography, button size,
                            colors, and the placement of elements. Designing for
                            this demographic required a different approach than
                            we had used in previous projects. Regardless of the
                            audience, usability testing proved essential for
                            uncovering real user needs. We tested four
                            participants aged 65-85 who were relatively
                            independent and did not require significant
                            healthcare. To get a broad perspective, we included
                            people with both low and high levels of digital
                            literacy.
                            <br />
                            <br />A moderator guided participants through the
                            test while two observers watched remotely via
                            webcam. Prior to testing, we obtained consent to
                            record video and audio, which helped us later
                            analyze and interpret responses.
                        </p>
                    </div>

                    <div className="about-text">
                        <h3>Observer Sheet</h3>
                        <p>
                            To evaluate physical responses and task completion,
                            the observers used a structured form to document
                            whether tasks were completed with ease (green), some
                            difficulty (yellow), or with assistance or failure
                            (red)
                        </p>
                    </div>
                    <div className="">
                        <img src={eld4} alt="Observer sheet." />
                    </div>

                    <div className="about-image">
                        <img src={eld5} alt="Data from the observer sheet." />
                    </div>

                    <div className="about-text">
                        <h3>Findings and Insights</h3>
                        <p>
                            Observers recorded key comments and reactions for
                            each task. We prioritized capturing meaningful
                            feedback and created short summaries of each
                            participant's overall competence and comments. While
                            some feedback overlapped, most participants pointed
                            out different issues based on their individual
                            experiences.
                        </p>
                    </div>

                    <h3>Discussion/Conclusion:</h3>
                    <p>
                        The usability test gave us valuable insights into the
                        specific needs and obstacles faced by this age group. As
                        we had never worked with elderly users before, there
                        were several adjustments we realized we should have made
                        earlier.
                        <br />
                        <br />
                        One of the most critical takeaways was the need for a
                        screen reader for visually impaired users. One
                        participant had difficulty reading and identifying
                        visual contrast. Some button placements and layout
                        choices confused several users. What seemed logical to
                        us as designers did not align with the users'
                        expectations. We received feedback that some
                        interactions needed to be simplified.
                    </p>

                    <div className="about text">
                        <h2>
                            PART 4 <br />
                            Final Solution
                        </h2>
                        <p>
                            The final solution was submitted alongside the
                            previous three phases in one complete package. In
                            this section, we also described the changes we made
                            after the usability test and explained the reasoning
                            behind them.
                        </p>
                        <h3>The Double Diamond Model:</h3>
                        <p>
                            We were introduced to the Double Diamond design
                            model later in the course, and ideally, we would
                            have applied it from the beginning. However, we
                            retroactively implemented its framework as much as
                            possible to improve user experience and
                            problem-solving. The model consists of four stages:
                            Discover, Define, Develop, and Deliver.
                        </p>
                        <ul>
                            <li>Discover</li>
                            <p>
                                In this phase, we identified the target group
                                and defined key user needs. We supported our
                                problem definition using statistics from sources
                                like SSB. We also created a persona named Bodil,
                                which helped us understand the challenges of our
                                main user—in her case, the need for simple
                                social interaction.
                            </p>
                            <li>Define</li>
                            <p>
                                We created an empathy map and user journey to
                                analyze pain points. The three main challenges
                                we identified were loneliness and social
                                isolation, the need for physical activity, and
                                limited technical competence among seniors.
                            </p>
                            <li>Develop</li>
                            <p>
                                We wrote a detailed user story describing the
                                users' goals, needs, and how the solution would
                                address them. We used the “How might we…” method
                                to frame and explore design challenges.
                            </p>
                            <li>Deliver</li>
                            <p>
                                We implemented several core design principles
                                such as visibility, feedback, affordances,
                                constraints, and consistency. It was important
                                to us that the app felt intuitive, accessible,
                                and user-friendly for the elderly audience,
                                while also meeting their functional needs.
                            </p>
                        </ul>
                        <h3>Changes After the Usability Test:</h3>
                        <p>
                            We made several adjustments when moving from
                            wireframes to a more finished prototype. Based on
                            user feedback, we changed the navigation structure,
                            edited text for clarity, and refined the visual
                            elements to improve readability and reduce
                            confusion.
                        </p>
                        <h3>Future Improvements:</h3>
                        <p>
                            We received useful suggestions from test
                            participants and also identified potential features
                            for future development. These included a beginner
                            tutorial, an SOS emergency button, and the ability
                            for users to toggle the visibility of personal
                            information.
                        </p>
                    </div>

                    <div className="about text">
                        <p></p>
                    </div>
                    <div className="about text">
                        <p></p>
                    </div>
                </div>
            </h2>
        </div>
    );
}
