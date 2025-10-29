import "../../Styles/Pages.css";
import "../../Styles/HomeLayout.css";
export default function HomeLayout() {
  return (
    <div className="content-container">
      <h1>Welcome to Maikens Portfolio</h1>
      <p>
        On this website you will be able to learn more about me, aka Maiken. On
        the navigation bar on top, you have different options to choose from. If
        you want to learn more about me, choose "About Me", Previous jobs I've
        had "Earlier Jobs", projects I've worked on earlier "My Work", or if you
        want to learn more about the different degrees I have and what I've
        learned "Education". Everything is pretty selfexplainatory. :D
      </p>

      <h2>Plans for this website</h2>
      <ul>
        <li>
          Optimize CSS on all pages with induvidual files, so it looks better
          and more user friendly, as it looks a little bit messy on some pages
          at the moment.
        </li>
        <li>
          Fill out and add more information on all pages, especially "My Work".
          There will be added more projects to showcase my experience.
        </li>
        <li>
          Create an API with all my data, instead of writing it in my JSX files.
        </li>
        <li>
          Add a promt when the user opens the website, and they will choose
          between lightmode/darkmode or an experiene adapted for extra visual
          support.
        </li>
        <li>
          Optimize the website for more devices and add a sidebar insted of a
          navigation bar on phones.
        </li>
        <li>
          Change the route links on each page, so that they show up correctly in
          the URL. Change favicon aswell.
        </li>
        <li>
          Personalize the whole website and make it more fun. I want more pages
          on "About Me" with different themes about my hobbies (music, gaming,
          movies").
        </li>
      </ul>
    </div>
  );
}
