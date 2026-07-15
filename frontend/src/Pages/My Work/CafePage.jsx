import "../../Styles/Pages.css";

import cafeAiLogo from "../../Images/Coffee App/cafe_ai_logo.png";

export default function CafePage() {
  return (
    <div className="content-container my-work-page cafe-page">
      <h1>Cafe App Prototype</h1>
      <div className="gap"></div>
      <div className="text-image-section">
        <div className="text">
          <p className="Grade">
            Grade: B | DS3302 Interaction Design | Semester: Fall 2023 Prototype
            in Figma:{" "}
            <a href="https://www.figma.com/file/DV5ZpdUi3nBLxc8fLWGW7d/Eksamen---interaksjonsdesign-(Copy)?node-id=0%3A1&t=6k31PnvIUG2Fu3Id-1">
              Click Here!
            </a>
          </p>
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
      <div className="section-color"></div>
      <div>
        <div>
          <h2>Project Goals</h2>
          <p>
            The main goal was to design a user-friendly café app that felt
            intuitive for both younger and older users, while still supporting
            real business needs. We focused on universal design and
            accessibility from the beginning, and prioritized core features such
            as ordering, favorites, campaigns, and digital loyalty cards. The
            full process was iterative from start to finish, moving from
            sketching and wireframing to prototyping, usability testing, and
            continuous refinement based on feedback.
          </p>
        </div>
        <h2>Design Process</h2>
        <div className="double-text-section">
          <div className="text">
            <h3>1. Research and Analysis</h3>
            <p>
              We started by mapping both user needs and business requirements.
              Our primary groups were Zoomers (18-30), who often expect speed,
              personalization, and convenience, and Boomers (30-50), who tend to
              value clarity, trust, and simpler interaction patterns. We also
              benchmarked existing café apps and noticed a recurring issue: many
              solutions handled only loyalty or only ordering, forcing users to
              switch between multiple apps. This led us to define a clear
              concept from the start: one shared café platform combining
              loyalty, campaigns, ordering, and accessible navigation.
            </p>
          </div>

          <div className="text">
            <h3>2. Ideation & Sketching</h3>
            <p>
              In the ideation phase, we used Crazy 8s to quickly explore many
              possible interface directions before committing to one. We kept a
              strong “function before style” mindset inspired by Jeff Johnson’s
              principles, which helped us prioritize clarity over decorative
              design choices. Every key function had to be visible and easy to
              understand at first glance, especially for less experienced app
              users. We then translated our strongest ideas into low-fidelity
              sketches so we could test user flows early and reduce rework later
              in the process.
            </p>
          </div>
        </div>
        <div className="double-text-section">
          <div className="text">
            <h3>3. Wireframing & Early Prototypes</h3>
            <p>
              The wireframing stage focused on building a consistent navigation
              system, a favorites carousel for quick access to cafés and
              products, and a simplified cart and ordering flow. At this stage,
              we tested structure more than aesthetics, making sure users could
              complete tasks with minimal friction. Peer feedback was especially
              useful for improving button placement, text sizing, and navigation
              logic, and several of these adjustments carried directly into the
              final prototype.
            </p>
          </div>

          <div className="text">
            <h3>4. Visual Design</h3>
            <p>
              We began visual design in monochrome to keep attention on layout
              and hierarchy before introducing branding elements. Later, we
              added a five-color system where each color represented a favorite
              café, but we deliberately combined icons with text labels so
              interaction did not depend on color alone. We validated palettes
              with Colorblind Goggles to improve accessibility, and we designed
              for both light and dark mode from the beginning to support
              different user preferences and contexts.
            </p>
          </div>

          <div className="text">
            <h3>5. Prototyping in Figma</h3>
            <p>
              We collaborated in a shared Figma file, which made parallel design
              work and real-time feedback loops efficient throughout the
              project. The prototype included all core user flows: login/logout,
              favorites with color coding (up to five cafés), settings for
              profile and accessibility options, menu browsing and ordering,
              campaign and news updates, and a cart with total price plus
              loyalty stamp progression. We also included digital coupon cards
              that updated automatically to simulate a complete customer
              journey.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>Usability Testing</h2>
        <p>
          We conducted usability testing with three participants (two Zoomers
          and one Boomer) to validate whether the experience worked across
          different expectations and digital habits. One participant described
          the app as simple and intuitive and preferred dark mode, another
          suggested improving the visibility of the cart, and the Boomer
          participant needed more time but strongly appreciated the universal
          app concept. The most important insight was that the cart was too
          hidden, so we introduced a more persistent cart overview to make the
          ordering flow easier to follow.
        </p>
      </div>

      <div>
        <h2>Accessibility & Universal Design</h2>
        <h3>Accessibility principles and implemented features</h3>
        <p>
          We designed for visibility by keeping important functions (favorites,
          cart, and campaigns) consistently available across key screens. We
          added clear feedback through button states and interaction responses
          so users always understood what happened after input. We also used
          constraints intentionally, such as limiting favorites to five cafés,
          to reduce cognitive load. Consistency in navigation patterns and
          interaction logic across screens made the app easier to learn and use.
          Accessibility features included high-contrast mode, larger text
          options, and slower transitions for users with cognitive or motor
          challenges. These choices helped us support a broader range of users
          without creating separate, fragmented flows.
        </p>
      </div>
      <div>
        <h2>Reflection, Learnings & Final Thoughts</h2>

        <p>
          The project reinforced that accessibility should be integrated from
          the beginning rather than added at the end. Working with personas
          (Zoomers and Boomers) helped us balance simplicity with richer feature
          sets, and collaborative work in Figma proved very effective for
          real-time teamwork and faster decision-making. Most importantly,
          iterative testing revealed issues we would not have predicted early,
          such as the need for a much more visible cart during checkout.
        </p>
        <p>
          The café app prototype represents a practical, user-friendly, and
          accessible solution to a common everyday problem. While this is a
          prototype and not a finished product, the design process demonstrates
          how structured interaction design methods can lead from idea to a
          working prototype that addresses both user needs and business goals.
        </p>
      </div>
    </div>
  );
}
