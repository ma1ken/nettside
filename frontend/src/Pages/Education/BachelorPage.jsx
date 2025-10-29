import "../../Styles/Pages.css";
// import hkLogoFull from "../../Images/hk-logo-full.png";
import hkLogo from "../../Images/hk-logo.png";
export default function BachelorPage() {
    return (
        <div>
            <h2>
                <div className="content-container">
                    <h1>Bachelor’s Degree in IT – Interactive Design</h1>
                    <div className="text-image-section">
                        <div className="text">
                    <h2>Høyskolen Kristiania, 2021–2024</h2>
                            <p>
                                I completed a three-year Bachelor at Høyskolen
                                Kristiania, in the program "IT-Interactive
                                Design" One of my motivations for this program
                                was that I used to edit my own CSS at my blog
                                when I was 12, and wanted to work with it after
                                I learned more about IT. During this time, I
                                developed a set of skills that makes me an
                                exellent problem solver, with technical
                                expertise. The course allowed me and other
                                students to find creative ways to engange in
                                current and future problems, when it comes to UX
                                and technology.
                            </p>
                        </div>

                        <div className="image">
                            <img
                                src={hkLogo}
                                alt="College Kristiania Full Logo"
                            />
                        </div>
                    </div>
                    <div className="gap"></div>
                    <div className="section-color">
                        <div className="about-text">
                            <h2>Core Curriculum and Skills</h2>
                            <h3>Programming and Web Technologies:</h3>
                            <p>
                                Even though we specialized in UX, we had a lot
                                of the same subjects as other IT courses, and we
                                were tested and evaluated in subjects that could
                                qualify us as "Fullstack Developers". We learned
                                Javascript, HTML5, CSS like other Front-end
                                students, but we worked a lot with react. Some
                                of the other subjects I learnt about were Java,
                                Informationtechnology + security, Animation,
                                databases etc. This made us equipped to jump
                                between specialities and gave us more options
                                with future work. Gaining knowledge about other
                                specialities allowed us to understand the impact
                                of UX design in the field.
                            </p>
                            <h3>User Experience (UX) Design:</h3>
                            <p>
                                I gained a lot of knowledge in UX and I do feel
                                most comfortable and wise with my own
                                speciality. Through the program, I've planned
                                and executed usertests, learned how to read
                                data, created userstorys and personas, including
                                targeted products for the right audience. This
                                has helped me to determine if we have been on
                                the right path, by creating wireframes and
                                prototypes in Figma to test our audience, to
                                ensure their satisfaction with the product.
                            </p>
                            <h3>
                                User Interface (UI) Design and Visual
                                Communication:
                            </h3>
                            <p>
                                I got a sharper eye for colors and shapes, and
                                can distinguish between a visually pleasing and
                                userfriendly design, more than before. Our
                                teachers taught us the importance of WCAG and to
                                ensure accesibility on the websites/apps.
                            </p>
                            <h3>Project Management and Agile Development:</h3>
                            <p>
                                I've always enjoyed being responsible and
                                working by myself, but this program taught me
                                the importance of collaborating with other
                                studuents, and how we can use each others
                                strenghts to build our product. We worked in
                                agile teams and used other programs like "Miro",
                                which has helped us planning. We also used scrum
                                to set up tasks withing a timeline.
                            </p>
                        </div>
                    </div>
                    <div className="double-text-section">
                        <div className="text">
                            <h2>Practical Experience</h2>
                            <p>
                                I applied my knowledge in UX with my previous
                                work, as a Counter Manager in a fragrance store.
                                With user psychology and segmentation, I learned
                                how to approach each costumer, what brands are
                                targeted for their audience and analyzed their
                                needs. I wanted to become better in react to
                                become a future Front-end/Fullstack developer,
                                and building this website with the knowledge I
                                have from previous subjects has really helped
                                me.
                            </p>
                        </div>

                        <div className="text">
                            <h2>Summary</h2>
                            <p>
                                This program taught me alot about things I
                                struggeled with earlier, especially coding, but
                                I learned that I loved it and I kept on learning
                                it after I was done studying. I proved myself
                                that I am very skilled in UX design and that I
                                aquire knowledge about this topic very easily. I
                                am able to put myself in the users position and
                                continuously improve my products.
                            </p>
                        </div>
                    </div>
                </div>
            </h2>
        </div>
    );
}
