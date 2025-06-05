import "../../Styles/Pages.css";
import ikeaLogo from "../../Images/ikea-logo.png";

export default function IkeaPage() {
  return (
    <div className="content-container">
      <div className="text-image-section">
        <div className="text">
          <p>
            <h1>Ikea - My First Job</h1>I got my first job at IKEA when I was
            18. It started as a summerjob, then turned into a job I had through
            rest of highschool and two years after (2016-2019).
          </p>
        </div>
        <div className="image">
          <img src={ikeaLogo} alt="Ikea Logo" />
        </div>
      </div>
      <div className="gap"></div>
      <div className="section-color">
        <div>
          <h2>Childrens Playroom</h2>
          <div>
            <p>
              I really enjoyed working in the playroom at Ikea. It was fun and
              it allowed me to socialize and play with children, which i really
              enjoyed. A part of the job is organizing activities for children,
              while their parents are working. We would watch movies, read
              books, draw and play puzzle together. There was always a lot of
              fun to do at work and it gave me a lot of joy, especially when I
              had regular children visiting to hang out with me, even when their
              parents weren't shopping that day. I even have some drawing I got
              from the kids saved. :)
            </p>
          </div>
          <div>
            <h3>Safety and Routines</h3>
            <p>
              I had to follow certain routines in the playroom. Every morning
              before opening up, I had to spend an hour going through a safety
              checklist, to ensure the safety of the children in the room
              throughout the day. There was also a certain practices that had to
              be followed, especially when checking children in and out of the
              room. It was important that the right kid came back to the right
              parent, and that we followed and had a good queue system. No
              children could be let in without any parental contact information,
              and that we had communication with the parent in case of an
              emergency.
            </p>
          </div>
        </div>
      </div>
      <div className="gap"></div>
      <div>
        <div>
          <h2>External Goods Pickup & Costumer Service Host</h2>
          <p>
            While I mostly worked in the playroom, I had other areas I worked
            at:
          </p>
          <div className="double-text-section">
            <div className="text">
              <h3>External Goods Pickup</h3>
              <p>
                While most products were available at the store, the bigger good
                had to be delivered at home or picked up from an external
                storage. I was in the frontdesk, checking in orders and papers
                from the costumers. When everything was picked up by another
                worker, I controlled each item they had ordered and delivered it
                to the costumer.{" "}
              </p>
            </div>
            <div className="text">
              <h3>Costumer Service Host</h3>
              <p>
                Have you ever walked into Ikea and been greeted by a worker?
                That was me. One of the jobs is to welcome costumers and help
                them navigate their way through the store. They would sometimes
                have questions about products, and my job was to help them the
                best way I could. Restocking and filling up bags and tidy the
                area was also a part of the job.
              </p>
            </div>
          </div>
          <p>
            I also worked in the self-checkout area, making sure there were no
            errors or problems for the costumers. I would also work at the
            registry for cash a few times, but it was not a big part of the job.
          </p>
        </div>
      </div>
      <div className="gap"></div>
      <div className="section-color">
        <div>
          <h2>Courses and Training</h2>
          <p>
            Through the years I worked there, I had to go through some training
            to be qualified for working in certain areas, like the playroom.
          </p>
          <div className="double-text-section">
            <div className="text">
              <h3>Basic First Aid Course</h3>
              <p>
                Training that was needed in order to work with children. I was
                in charge of the kids safety, and it was my responsibility to
                understand when a child was in danger, and take action. It was
                also useful knowledge to have in life, as you never know what
                situations you might end up in.
              </p>
            </div>
            <div className="text">
              <h3>Fire Safety Course</h3>
              <p>
                {" "}
                A course that was needed in order to work at IKEA. All workers
                had to know the right protocols in case of a fire and which
                actiomn to take. The playroom even had special training in
                handling the situation to ensure the safety of children in case
                of an evacuation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
