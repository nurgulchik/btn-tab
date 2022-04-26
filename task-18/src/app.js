import style from "./style.css";


const body = document.querySelector("body")

const sectionAbout = document.createElement("section");
sectionAbout.setAttribute("id", "about");
sectionAbout.classList = "section about-section";
body.appendChild(sectionAbout);

const title = document.createElement("div");
title.setAttribute("class", "title");
sectionAbout.appendChild(title);

const titleName = document.createElement("h2");
titleName.innerText="About";
title.appendChild(titleName);

const aboutMain = document.createElement("div");
aboutMain.setAttribute("class", "about-center section-center");
sectionAbout.appendChild(aboutMain);

const imageBlock = document.createElement("article");
imageBlock.setAttribute("class", "about-img");
aboutMain.appendChild(imageBlock);

const image = document.createElement("img");
image.src = "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
imageBlock.appendChild(image);


const aboutBlock = document.createElement("article");
aboutBlock.setAttribute("class", "about");
aboutMain.appendChild(aboutBlock);

const btnContainer = document.createElement("div");
btnContainer.setAttribute("class", "btn-container");
aboutBlock.appendChild(btnContainer);

const btnAbout = document.createElement("button");
btnAbout.setAttribute("class", "tab-btn active");
btnAbout.setAttribute("data-id", "aboutUs");
btnContainer.appendChild(btnAbout);
btnAbout.innerText = "About Us";

const btnMission = document.createElement("button");
btnMission.setAttribute("class", "tab-btn");
btnMission.setAttribute("data-id", "mission");
btnContainer.appendChild(btnMission);
btnMission.innerText = "Our Mission";

const btnGoal = document.createElement("button");
btnGoal.setAttribute("class", "tab-btn");
btnGoal.setAttribute("data-id", "goals");
btnContainer.appendChild(btnGoal);
btnGoal.innerText = "Our Goals";

const contents = document.createElement("div");
contents.setAttribute("class", "about-content");
aboutBlock.appendChild(contents);

const aboutContent = document.createElement("div");
aboutContent.setAttribute("class", "content active");
aboutContent.id = "aboutUs";
contents.appendChild(aboutContent);

const aboutTitle = document.createElement("h4");
aboutContent.appendChild(aboutTitle);
aboutTitle.innerText = "About Us";

const aboutText = document.createElement("p");
aboutContent.appendChild(aboutText);
aboutText.innerText = "About Us lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores odit id quam omnis corporis magni, quibusdam cupiditate alias enim necessitatibus nihil? Perspiciatis minima nostrum repellendus dignissimos mollitia ullam quam laudantium corporis similique ea quos amet quae doloribus fugit voluptate quas iusto explicabo totam et, voluptatum tempore iure cumque maxime. Dolorum.";

const aboutMission = document.createElement("div");
aboutMission.setAttribute("class", "content");
aboutMission.setAttribute("id", "mission");
contents.appendChild(aboutMission);

const missionTitle = document.createElement("h4");
aboutMission.appendChild(missionTitle);
missionTitle.innerText = "Our Mission";

const missionText = document.createElement("p");
aboutMission.appendChild(missionText);
missionText.innerText = "Our Mission dolor sit amet consectetur adipisicing elit. Dolores odit id quam omnis corporis magni, quibusdam cupiditate alias enim necessitatibus nihil? Perspiciatis minima nostrum repellendus dignissimos mollitia ullam quam laudantium corporis similique ea quos amet quae doloribus fugit voluptate quas iusto explicabo totam et, voluptatum tempore iure cumque maxime. Dolorum.";

const aboutGoal = document.createElement("div");
aboutGoal.setAttribute("class", "content");
aboutGoal.setAttribute("id", "goals");
contents.appendChild(aboutGoal);

const goalTitle = document.createElement("h4");
aboutGoal.appendChild(goalTitle);
goalTitle.innerText = "Our Goals";

const goalText = document.createElement("p");
aboutGoal.appendChild(goalText);
goalText.innerText = "Our Goals sum dolor sit amet consectetur adipisicing elit. Dolores odit id quam omnis corporis magni, quibusdam cupiditate alias enim necessitatibus nihil? Perspiciatis minima nostrum repellendus dignissimos mollitia ullam quam laudantium corporis similique ea quos amet quae doloribus fugit voluptate quas iusto explicabo totam et, voluptatum tempore iure cumque maxime. Dolorum.";


const btns = [btnAbout, btnMission, btnGoal];
const content = [aboutContent, aboutMission, aboutGoal];



about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");

    content.forEach(function (article) {
      article.classList.remove("active");
    });

    const tabConent = document.getElementById(id);
    tabConent.classList.add("active");
  }
});













