import "../../Styles/Pages.css";

export default function AnimationsPage() {
  return (
    <div className="content-container">
      <h1>Animations</h1>
      <div className="text-image-section">
        <div className="text">
          <h2>Bouncing Ball</h2>
          <p>
            1/3 of my submission for the exam in "Animation". This was the
            animation i spent the longest time on. I learned a lot of teqniques
            and how to add effects on different elements. Pairing that with
            timing and changing those effects after an action, was very fun and
            I learnt alot from this animation.
          </p>
        </div>
        <div className="image">
          <video
            src="/video/bouncingBall.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="animations"
          />
        </div>
      </div>

      <div className="text-image-section">
        <div className="text">
          <h2>Netflix Logo</h2>
          <p>
            2/3 of my submission for the exam in "Animation". I've watched alot
            of TV through the years, and we are all familiar with the classic
            netflix logo intro sound, and their different animations. I decided
            to create my own, to understand how to implement text in animations.
          </p>
        </div>
        <div className="image">
          <video
            src="/video/netflixLogo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="animations"
          />
        </div>
      </div>

      <div>
        <div className="text-image-section">
          <div className="text">
            <h2>Loading Bar</h2>
            <p>
              3/3 of my submission for the exam in "Animation". A very simple,
              but clean loading bar that loops, and there is an fade in-out
              effect on all the objects. I wanted to create a simple animation
              like this one, as it might be useful for design in the future.
            </p>
          </div>
          <div className="image">
            <video
              src="/video/loadingBar.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="animations"
            />
          </div>
        </div>
      </div>
      <div className="text-image-section">
        <div className="text">
          <h2>UinMunch Group Porto</h2>
          <p>
            An intro for the videopresentation for our exam in Agile Project,
            when we created the app UInMunch. I designet it myself and kept the
            colors from our app as an inspiration. It was not necessary or a
            demand to create an animation, but with some extra time the last day
            before delivery, I decided that it would be a nice touch. I also
            really enjoyed animation, so I did it while I could.
          </p>
        </div>
        <div className="image">
          <video
            src="/video/portoAnimasjon.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="animations"
          />
        </div>
      </div>
    </div>
  );
}
