import "../../Styles/Pages.css";
import ikeaLogo from "../../Images/ikea-logo.png";

export default function IkeaPage() {
  return (
    <div className="content-container ikea-page">
      <div className="text-image-section logo-intro-section">
        <div className="text">
          <p>
            <h1>Ikea - My First Job</h1>I landed my very first job at IKEA when
            I was 18. What started as a summer job turned into a permanent
            part-time position that I held throughout the rest of high school
            and for two years afterward.
          </p>
        </div>
        <div className="image">
          <img className="logo-intro-image" src={ikeaLogo} alt="Ikea Logo" />
        </div>
      </div>
      <div className="gap"></div>
      <div className="section-color">
        <div>
          <h2>Childrens Playroom</h2>
          <div>
            <p>
              Working in the playroom was one of my absolute favorite
              responsibilities. It was incredibly rewarding because it allowed
              me to socialize, engage, and play with the children while their
              parents shopped. A big part of the role involved organizing
              activities such as movie screenings, reading books aloud, drawing,
              and doing puzzles. Creating a fun and welcoming environment
              brought me so much joy, especially when regular children would
              come by just to hang out with me, even on days when their parents
              weren't actually shopping. I’ve even saved some of the drawings
              the kids gave me over the years.:)
            </p>
          </div>
          <div>
            <h3>Safety and Routines</h3>
            <p>
              Maintaining a high standard of safety and strict adherence to
              routines was vital in the playroom. Every morning before opening,
              I spent an hour going through a rigorous safety checklist to
              ensure the room and play equipment were perfectly safe. We also
              followed strict protocols for checking children in and out. It was
              critical that the right child was returned to the right parent and
              that we maintained an organized queue system. No child could be
              admitted without registered parental contact information, ensuring
              we could communicate instantly with the guardians in case of an
              emergency.
            </p>
          </div>
        </div>
      </div>
      <div className="gap"></div>
      <div className="section-color"></div>
      <div>
        <div>
          <h2>External Goods Pickup & Customer Service Host</h2>

          <div className="double-text-section">
            <div className="text">
              <h3>External Goods Pickup</h3>
              <p>
                For larger items that required home delivery or collection from
                external storage, I managed the front desk. My responsibilities
                included checking customer orders and documentation, verifying
                that the warehouse team had picked the correct items, and
                ensuring a smooth final handover to the customer.
              </p>
            </div>
            <div className="text">
              <h3>Customer Service Host</h3>
              <p>
                As a greeter at the entrance, I was the face of IKEA. My role
                was to welcome customers, help them navigate the store, and
                assist with any product inquiries. I also took pride in keeping
                the entrance area tidy, organized, and well-stocked with
                shopping bags.
              </p>
            </div>
          </div>
          <h3>Self-Checkout & Cashier</h3>
          <p>
            I monitored the self-checkout area, proactively assisting customers
            with error messages or technical issues to ensure a seamless
            checkout experience. On occasion, I also operated the traditional
            cash registers.
          </p>
        </div>
      </div>
      <div className="gap"></div>
      <div className="section-color">
        <div>
          <h2>Training and Certifications</h2>

          <div className="double-text-section">
            <div className="text">
              <h3>Basic First Aid Course</h3>
              <p>
                A required certification for working with children. This
                training equipped me with the skills to recognize when a child
                is in distress, take immediate action, and administer
                life-saving first aid—a valuable skill set that I am incredibly
                grateful to have in everyday life as well.
              </p>
            </div>
            <div className="text">
              <h3>Fire Safety Course</h3>
              <p>
                Standard training for all IKEA co-workers covering evacuation
                protocols and firefighting basics. For those of us in the
                playroom, this included specialized training on how to safely,
                calmly, and efficiently evacuate groups of young children.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
