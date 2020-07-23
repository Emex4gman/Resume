window.onload = () => {
  //screens
  let home = document.querySelector('.home')
  let about = document.querySelector('.about')
  let skills = document.querySelector('.skills')
  let projects = document.querySelector('.projects')
  let contact = document.querySelector('.contact')
  /// project items
  let projectItems = document.querySelectorAll('.project-item')

  // menu buttons
  let homeButton = document.querySelector('.homeButton')
  let aboutButton = document.querySelector('.aboutButton')
  let skillsButton = document.querySelector('.skillsButton')
  let projectsButtons = document.querySelectorAll('.projectsButton')
  let contactButtons = document.querySelectorAll('.contactButton')

  /// hide pages when not in view
  const toggleProjectPage = () => {
    if (projects.classList.contains('active-screen')) {
      projectItems.forEach(projectItem => {
        projectItem.style.display = 'block';
      })
    } else {
      projectItems.forEach(projectItem => {
        projectItem.style.display = 'none';
      })
    };

  };
  homeButton.addEventListener('click', () => {
    home.classList.add('active-screen')
    about.classList.remove('active-screen')
    skills.classList.remove('active-screen')
    projects.classList.remove('active-screen')
    contact.classList.remove('active-screen')
    toggleProjectPage();
  })
  aboutButton.addEventListener('click', () => {
    about.classList.add('active-screen')
    home.classList.remove('active-screen')
    skills.classList.remove('active-screen')
    projects.classList.remove('active-screen')
    contact.classList.remove('active-screen')
    toggleProjectPage();

  })
  skillsButton.addEventListener('click', () => {
    skills.classList.add('active-screen')
    home.classList.remove('active-screen')
    about.classList.remove('active-screen')
    projects.classList.remove('active-screen')
    contact.classList.remove('active-screen')
    toggleProjectPage();

  })

  projectsButtons.forEach(projectsButton => {
    projectsButton.addEventListener('click', () => {
      projects.classList.add('active-screen')
      home.classList.remove('active-screen')
      about.classList.remove('active-screen')
      skills.classList.remove('active-screen')
      contact.classList.remove('active-screen')
      toggleProjectPage();

    })
  })



  contactButtons.forEach(contactButton => {
    contactButton.addEventListener('click', () => {
      contact.classList.add('active-screen')
      home.classList.remove('active-screen')
      about.classList.remove('active-screen')
      skills.classList.remove('active-screen')
      projects.classList.remove('active-screen')
      toggleProjectPage();

    })
  })



  var oldX = 0;
  var oldY = 0;
  let mouse = document.getElementById('mouse-pointer')
  let mouseContainer = document.getElementById('mouse-container')

  window.addEventListener('mousemove', ({ pageX, pageY }) => {
    var left = pageX + "px";
    var top = pageY + "px";
    mouse.style.top = top;
    mouseContainer.style.top = top;
    mouse.style.left = left;
    mouseContainer.style.left = left;
    mouseContainer.style.transform = 'translate(-0.5rem,-0.5rem )'
    getDirection(pageX, pageY);
  })

  getDirection = (pageX, pageY) => {
    //deal with the horizontal case
    // if (oldX < pageX) {
    //   mouseContainer.style.transform = 'rotateY(0deg)' //right
    //   mouseContainer.style.transform = 'translateX(-50px)' //right
    // } else {
    //   mouseContainer.style.transform = 'rotateY(180deg)' //left
    // }

    // //deal with the vertical case
    // if (oldY < pageY) {
    //   // "down";
    // } else {
    //   // "up";
    // }

    // oldX = pageX;
    // oldY = pageY;
  }

  // anminate the home page text
  setTimeout(() => {
    document.querySelector(".home-content").style.opacity = 1
    document.querySelector(".home-content").style.position = 'relative';
    document.querySelector(".home-content").style.left = 0
  }, 2000)




};

