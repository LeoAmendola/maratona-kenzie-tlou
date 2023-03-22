const episodes = [
  {
    img: "./src/img/episodes/episode1.svg",
    title: "When You're Lost in the Darkness",
    description:
      " In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by asoldier.",
  },

  {
    img: "./src/img/episodes/episode2.svg",
    title: "Infected",
    description:
      " Two days before the worldwide outbreak, in Jakarta, Indonesia, the government shows an infected corpse to a mycologist, who tells them there is no cure or vaccine.",
  },
  {
    img: "./src/img/episodes/episode3.svg",
    title: "Long, Long Time",
    description:
      " Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic.",
  },
  {
    img: "./src/img/episodes/episode4.svg",
    title: "Please Hold to My Hand",
    description:
      " Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.",
  },
  {
    img: "./src/img/episodes/episode2.svg",
    title: "Episode 5",
    description:
      " Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.",
  },
  {
    img: "./src/img/episodes/episode3.svg",
    title: "Episode 6",
    description:
      " Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic.",
  },
];

// 1 acessar a lista de episodios através do DOM

const list = document.querySelector(".ep-list");

/* 2 criar uma função que percorra todos os meus
 episodios que estão listados na variável episodes */

function addCard(episodes) {
  for (let i = 0; i < episodes.length; i++) {
    // 3 criar uma função que renderize episodio a episodio

    renderCard(episodes[i]);
  }
}

addCard(episodes);

function renderCard(episodio) {
  const listItem = document.createElement("li");
  listItem.classList.add("ep-card");

  listItem.innerHTML = `
  <img 
  src=${episodio.img} 
  alt=${episodio.title}
  >
  <div class="flex-column">
    <h4 class="font-2-m color-g2">${episodio.title}</h4>
    <p class="font-2-s color-g2">${episodio.description}</p>
  </div>
  `;

  list.appendChild(listItem);
}
