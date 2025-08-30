import "../../Styles/Pages.css";
import fredrikoglouisaLogo from "../../Images/fredrikoglouisa-logo.jpg";

export default function FredrikLouisaPage() {
    return (
        <div className="content-container">
            <div className="text-image-section">
                <div className="text">
                    <h1>
                        Fredrik og Louisa
                        <br />
                        Coming soon...
                    </h1>

                    <p></p>
                </div>
                <div className="image">
                    <img
                        src={fredrikoglouisaLogo}
                        alt="Fredrik og Louisa Logo"
                    />
                </div>
            </div>
            <div>
                <h2>What is Fredrik & Louisa?</h2>
            </div>
            <div>
                <h2>Molton Brown 20%</h2>
            </div>
            <div>
                <h2>L:A Bruket 40%</h2>
            </div>
            <div>
                <h2>Gen-Z Area 40%</h2>
            </div>
            <div>
                <h2>Kiehl's Counter Manager 80%</h2>
            </div>
            <p></p>
            <div>
                <h2>Other Experience and Appreciation</h2>
            </div>
            <div></div>
        </div>
    );
}
