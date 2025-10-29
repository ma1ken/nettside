import "../../Styles/Pages.css";

import cafeAiLogo from "../../Images/Coffee App/cafe_ai_logo.png";

export default function CafePage() {
  return (
    <div className="content-container">
      <h1>Cafe App Prototype</h1>
      <div className="text-image-section">
        <div className="text">
          <h2 className="Grade">Grade:B</h2>
          <h2>DS3302 Interaction Design</h2>
          <h2>Semester: Fall 2023</h2>
          <h2>
            Prototype in Figma:{" "}
            <a href="https://www.figma.com/file/DV5ZpdUi3nBLxc8fLWGW7d/Eksamen---interaksjonsdesign-(Copy)?node-id=0%3A1&t=6k31PnvIUG2Fu3Id-1">
              Click Here!
            </a>
          </h2>
          <p>
            This project was developed as the final exam in Interaction Design.
            The assignment was to design a mobile app prototype that improves
            the everyday coffee-buying experience while integrating loyalty
            programs, promotions, and ordering into one shared platform. Instead
            of individual café chains having separate apps, our concept aimed to
            merge them into one universal café app. This solution would provide
            users with simplicity and convenience, while giving cafés greater
            exposure to new customers.
          </p>
        </div>
        <div className="image">
          <img src={cafeAiLogo} alt="Ai generated of a coffee app" />
        </div>
      </div>
      <div>
        <div>
          <h2>Project Goals</h2>
          <p>
            Project Goals Create a user-friendly café app that is intuitive for
            both younger and older users. Ensure the design follows universal
            design principles with a focus on accessibility. Prototype core
            features: ordering, favorites, campaigns, and digital loyalty cards.
            Use iterative design methods (sketching → prototyping → testing →
            refining).
          </p>
        </div>
        <h2>Design Process</h2>
        <div className="double-text-section">
          <div className="text">
            <h3>1. Research and Analysis</h3>
            <p>
              We began by identifying user needs and business requirements:
              Target groups: Zoomers (18-30): Digitally native, expect speed,
              personalization, and convenience. Boomers (30-50): Less
              app-experienced, need simplicity, clarity, and trust.
              Benchmarking: We analyzed existing apps from popular cafés. Many
              focused only on loyalty or only on ordering, which made them
              fragmented and repetitive. Our insight: users want one app instead
              of five. Concept: A shared café app with loyalty, campaigns, and
              universal usability.
            </p>
          </div>

          <div className="text">
            <h3>2. Ideation & Sketching</h3>
            <p>
              We used Crazy 8s to explore a wide range of interface ideas
              quickly. Key principles guiding us: Function before style (Jeff
              Johnson, Designing with the Mind in Mind). Simplicity: avoid
              unnecessary decoration. Accessibility: all functions must be
              visible and understandable at first glance. We created
              low-fidelity sketches to test flows before investing in visual
              details.
            </p>
          </div>
        </div>
        <div className="double-text-section">
          <div className="text">
            <h3>3. Wireframing & Early Prototypes</h3>
            <p>
              Wireframes focused on: Navigation bar with consistent icons.
              Favorites carousel for quick access to cafés/products. Simple cart
              and order flow. Feedback from peers helped us refine button
              placements, text size, and navigation logic.
            </p>
          </div>

          <div className="text">
            <h3>4. Visual Design</h3>
            <p>
              Our first versions were monochrome to keep focus on layout. Later,
              we introduced five colors, each representing a favorite café.
              Icons + text labels were added to reduce reliance on color alone.
              Color palettes were tested with Colorblind Goggles to ensure
              accessibility. Light/dark mode was integrated from the start.
            </p>
          </div>

          <div className="text">
            <h3>5.Prototyping in Figma</h3>
            <p>
              We collaborated in a shared Figma file, allowing parallel work and
              real-time feedback. Key prototype features: Login Page: Simple
              login/logout. Favorites: Up to five cafés with color coding.
              Settings : Profile, support, dark/light mode, accessibility
              options. Menu & Ordering: Carousel with favorite products, cart
              integration. Campaigns & News: Promotions and seasonal updates.
              Cart: With total price and loyalty stamps. Coupons: Digital stamp
              cards updating automatically.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>Usability Testing</h2>
        <p>
          We tested with three participants (two Zoomers, one Boomer): User 1
          (27): Found the app simple, preferred dark mode. User 2 (25):
          Suggested a clearer cart overview. User 3 (50): Needed more time, but
          appreciated the universal app idea. Main learning: The cart was too
          hidden. We fixed this by adding a persistent cart overview.
        </p>
      </div>

      <div>
        <h2>Accessibility & Universal Design</h2>
        <h3>
          We applied principles from Donald Norman and Jakob Nielsen’s
          heuristics:
        </h3>
        <p>
          Visibility: Important functions (favorites, cart, campaigns) always
          visible. Feedback: Buttons provide visual confirmation. Constraints:
          Limited favorites (max 5 cafés) to reduce complexity. Consistency:
          Same navigation logic across all screens.
        </p>
        <h3>Accessibility features:</h3>
        <p>
          High-contrast mode. Larger text option. Slower transitions for users
          with cognitive or motor challenges.
        </p>
      </div>
      <div>
        <h2>Reflection & Learnings</h2>
        <h3>
          This project strengthened my skills in user-centered design and
          iterative prototyping. Key takeaways:
        </h3>
        <p>
          Accessibility must be integrated from the start, not added as an
          afterthought. Personas (Zoomers & Boomers) helped balance simplicity
          with advanced features. Figma collaboration was new but very effective
          for real-time teamwork. Iterative testing revealed insights we could
          not have predicted (e.g., the need for a visible cart).
        </p>
      </div>
      <div>
        <h2>Final Thoughts</h2>{" "}
        <p>
          The café app prototype represents a practical, user-friendly, and
          accessible solution to a common everyday problem. While this is a
          prototype and not a finished product, the design process demonstrates
          how structured interaction design methods can lead from idea to a
          working prototype that addresses both user needs and business goals.
        </p>
      </div>
      <h1>MORE INFO AND IMAGES COMING ASAP!</h1>
    </div>
  );
}
