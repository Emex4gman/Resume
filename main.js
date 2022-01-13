/// project items
let projectItems = document.querySelectorAll(".project-item");

const buildProjectSectionWithJson = (jsonList) => {
  for (item of jsonList) {
    console.log(item.applink);
    var tut = item.tools.join("</button><button class='technology-btn'>");
    // console.log(tut);
    let child = `
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
                  src="${item.image}"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
    `;
    let divman = document.querySelector(".projects-content");
    divman.innerHTML = divman.innerHTML + child;
    projectItems = document.querySelectorAll(".project-item");
    // console.log(divman.innerHTML);
    // document.querySelector(".projects-content").innerHTML +
    // ("<h1>ghakjfahskjfdksj</h1>");
    // document.querySelector("body").appendChild("<h1>ghakjfahskjfdksj</h1>");
  }
};
window.onload = () => {
  fetch("data/projects.json")
    .then((response) => response.json())
    .then((json) => {
      buildProjectSectionWithJson(json);
    });
  // Anminate the home page text
  setTimeout(() => {
    document.querySelector(".home-content").style.opacity = 1;
    document.querySelector(".home-content").style.position = "relative";
    document.querySelector(".home-content").style.left = 0;
  }, 350);

  //screens
  let home = document.querySelector(".home");
  let about = document.querySelector(".about");
  let skills = document.querySelector(".skills");
  let projects = document.querySelector(".projects");
  let contact = document.querySelector(".contact");
  let blog = document.querySelector(".blog");

  // menu buttons
  let homeButton = document.querySelector(".homeButton");
  let aboutButton = document.querySelector(".aboutButton");
  let skillsButton = document.querySelector(".skillsButton");
  let projectsButtons = document.querySelectorAll(".projectsButton");
  let blogButton = document.querySelector(".blogButton");
  let contactButtons = document.querySelectorAll(".contactButton");

  /// hide pages when not in view
  const toggleProjectPage = () => {
    if (projects.classList.contains("active-screen")) {
      console.log(projects.classList.contains("active-screen"));
      projectItems.forEach((projectItem) => {
        projectItem.style.display = "block";
      });
    } else {
      projectItems.forEach((projectItem) => {
        projectItem.style.display = "none";
      });
    }
  };
  homeButton.addEventListener("click", () => {
    home.classList.add("active-screen");
    about.classList.remove("active-screen");
    skills.classList.remove("active-screen");
    projects.classList.remove("active-screen");
    blog.classList.remove("active-screen");
    contact.classList.remove("active-screen");
    toggleProjectPage();
  });
  aboutButton.addEventListener("click", () => {
    about.classList.add("active-screen");
    home.classList.remove("active-screen");
    skills.classList.remove("active-screen");
    projects.classList.remove("active-screen");
    blog.classList.remove("active-screen");
    contact.classList.remove("active-screen");
    toggleProjectPage();
  });
  skillsButton.addEventListener("click", () => {
    skills.classList.add("active-screen");
    home.classList.remove("active-screen");
    about.classList.remove("active-screen");
    projects.classList.remove("active-screen");
    blog.classList.remove("active-screen");
    contact.classList.remove("active-screen");
    toggleProjectPage();
  });

  projectsButtons.forEach((projectsButton) => {
    projectsButton.addEventListener("click", () => {
      projects.classList.add("active-screen");
      home.classList.remove("active-screen");
      about.classList.remove("active-screen");
      skills.classList.remove("active-screen");
      blog.classList.remove("active-screen");
      contact.classList.remove("active-screen");
      toggleProjectPage();
    });
  });

  blogButton.addEventListener("click", () => {
    blog.classList.add("active-screen");
    home.classList.remove("active-screen");
    about.classList.remove("active-screen");
    projects.classList.remove("active-screen");
    skills.classList.remove("active-screen");
    contact.classList.remove("active-screen");
    toggleProjectPage();
  });

  contactButtons.forEach((contactButton) => {
    contactButton.addEventListener("click", () => {
      contact.classList.add("active-screen");
      home.classList.remove("active-screen");
      about.classList.remove("active-screen");
      skills.classList.remove("active-screen");
      projects.classList.remove("active-screen");
      blog.classList.remove("active-screen");
      toggleProjectPage();
    });
  });

  // var oldX = 0;
  // var oldY = 0;
  // let mouse = document.getElementById("mouse-pointer");
  // let mouseContainer = document.getElementById("mouse-container");

  // window.addEventListener("mousemove", ({ pageX, pageY }) => {
  //   var left = pageX + "px";
  //   var top = pageY + "px";
  //   mouse.style.top = top;
  //   mouseContainer.style.top = top;
  //   mouse.style.left = left;
  //   mouseContainer.style.left = left;
  //   mouseContainer.style.transform = "translate(-0.5rem,-0.5rem )";
  //   getDirection(pageX, pageY);
  // });

  getDirection = (pageX, pageY) => {

  };
};
