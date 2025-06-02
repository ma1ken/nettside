import "../../Styles/Pages.css";
import "../../Styles/MakeupDegree.css";
import makeupArtist from "../../Images/makeup-artist.png";
export default function MakeupDegreePage() {
    return (
        <div className="content-container">
            <h1>
                Makeup Degree
                <br />
                Tone Lise Akademiet
            </h1>
            <div className="text-image-section">
                <div className="text">
                    <h2>
                        I completed my degree as a beauty makeup artist, which
                        took place from 08/2019 to 01/2020.
                    </h2>
                    <p>
                        Makeup has been a big interest ever since I've been a
                        kid. Most kids my age grew up watching youtube in the
                        early days, and learned tips and creative trics from the
                        biggest youtubers in the world.
                    </p>
                    <p>
                        My degree has given me the opportunity to work with
                        models and learn from the best. After working in Fredrik
                        & Louisa for 4 years, I've helped a lot of costumers
                        enhance their features and feel better in themselves. I
                        worked on models that wanted different styles and
                        themes, from graphic liner to bride. On the floor at
                        Fredrik & Louisa, you learn how to find the right shades
                        and products for the costumers in a short amount of
                        time. There are different scenarios where you have the
                        time to apply and compelte makeuplooks on costumers,
                        which was my favorite part of the job. You learn makeup
                        by applying makeup, and I've acquired the skills to help
                        people regardless of skincolor, skintype or conditions.
                        It is a degree that has given me a lot of you and let me
                        be creative, while costuimzing each look to each person.
                    </p>
                </div>
                <div className="image">
                    <img
                        src={makeupArtist}
                        alt="Cartoon holding makeup-equipment"
                    />
                </div>
            </div>
            <div></div>
        </div>
    );
}
