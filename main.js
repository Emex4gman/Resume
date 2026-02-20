let projectItems = document.querySelectorAll(".project-item");

const normalizeProjectImagePath = (imagePath) => {
  if (typeof imagePath !== "string") {
    return "";
  }

  if (/^(?:[a-z]+:)?\/\//i.test(imagePath) || imagePath.startsWith("/")) {
    return imagePath;
  }

  return imagePath.replace(/^\.\.\//, "./");
};

const createProjectMarkup = (item) => `
      <div class="project-item">
              <div class="project-left">
                <h2 class="project-title">${item.title}</h2>
                <p class="project-subtext">${item.subTitle}</p>
                <p>
                 ${item.body}
                </p>
                <p><em>${item.rolePlayed}</em></p>

                <ul>
               
                  <li>
                  ${item.appFunctions.join("</li><li>")}
                   
                  </li>
                </ul>
                <a href="${item.applink}">
                  <button class="technology-btn">MORE INFO</button>
                </a>

                <p>TECHNOLOGIES</p>
                <button class="technology-btn">${item.tools.join(
                  '</button><button class="technology-btn">'
                )}</button>
              </div>
              <div class="project-right">
                <img
                  class="project-image"
                  src="${normalizeProjectImagePath(item.image)}"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
    `;

const buildProjectSectionWithJson = (jsonList) => {
  const projectsContent = document.querySelector(".projects-content");
  if (!projectsContent || !Array.isArray(jsonList)) {
    return;
  }

  projectsContent.insertAdjacentHTML(
    "beforeend",
    jsonList.map((item) => createProjectMarkup(item)).join("")
  );
  projectItems = document.querySelectorAll(".project-item");
};

window.onload = () => {
  fetch("data/projects.json")
    .then((response) => response.json())
    .then((json) => {
      buildProjectSectionWithJson(json);
    })
    .catch((error) => {
      console.error("Unable to load projects data.", error);
    });

  // Animate the home page text.
  setTimeout(() => {
    const homeContent = document.querySelector(".home-content");
    if (!homeContent) {
      return;
    }

    homeContent.style.opacity = 1;
    homeContent.style.position = "relative";
    homeContent.style.left = 0;
  }, 350);

  const screens = {
    home: document.querySelector(".home"),
    about: document.querySelector(".about"),
    skills: document.querySelector(".skills"),
    projects: document.querySelector(".projects"),
    blog: document.querySelector(".blog"),
    contact: document.querySelector(".contact"),
  };

  const toggleProjectPage = () => {
    const isProjectsScreenActive =
      screens.projects && screens.projects.classList.contains("active-screen");

    projectItems.forEach((projectItem) => {
      projectItem.style.display = isProjectsScreenActive ? "block" : "none";
    });
  };

  const setActiveScreen = (screenName) => {
    Object.entries(screens).forEach(([name, screen]) => {
      if (!screen) {
        return;
      }

      screen.classList.toggle("active-screen", name === screenName);
    });
    toggleProjectPage();
  };

  const registerScreenToggle = (selector, screenName) => {
    document.querySelectorAll(selector).forEach((button) => {
      button.addEventListener("click", () => {
        setActiveScreen(screenName);
      });
    });
  };

  registerScreenToggle(".homeButton", "home");
  registerScreenToggle(".aboutButton", "about");
  registerScreenToggle(".skillsButton", "skills");
  registerScreenToggle(".projectsButton", "projects");
  registerScreenToggle(".blogButton", "blog");
  registerScreenToggle(".contactButton", "contact");
};
