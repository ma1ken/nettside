import "../../Styles/Pages.css";
import fredrikoglouisaLogo from "../../Images/fredrikoglouisa-logo.jpg";

export default function PlansPage() {
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
            <p></p>
            <div></div>
        </div>
    );
}
