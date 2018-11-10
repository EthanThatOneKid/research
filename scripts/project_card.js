// https://codepen.io/uxjulia/pen/xgjmzp

// check out some badges to use on https://shields.io/#/examples/


class Project_Card {

  constructor(data) {
    this.data = data;
    this.el = this.createElement();
  }

  createElement() {
    const card = document.createElement("div");
    card.className = "blog-card";

    const meta = document.createElement("div");
    meta.className = "meta";

    const photo = document.createElement("div");
    photo.style.backgroundImage = `url(cgi-bin/${this.data.image})`;
    photo.className = "photo";

    const description = document.createElement("div");
    description.className = "description";

    const h1 = document.createElement("h1");
    h1.textContent = this.data.project;

    const p = document.createElement("p");
    p.textContent = this.data.description;

    const details = document.createElement("ul");
    details.className = "details";

    const stack = this.data.stack.reduce((li, cur) => {
      const span = document.createElement("span");
      span.textContent = cur;
      span.className = "stack";
      li.appendChild(span);
      return li;
    }, document.createElement("li"));
    details.appendChild(stack);

    const website = document.createElement("li");
    const website_a = document.createElement("a");
    website.classList.add("author", "ext_link");
    website_a.href = this.data.website;
    website_a.textContent = "website";
    website.appendChild(website_a);
    details.appendChild(website);

    const github_repo = document.createElement("li");
    const github_repo_a = document.createElement("a");
    github_repo.classList.add("author", "ext_link");
    github_repo_a.href = this.data.github;
    github_repo_a.textContent = "github";
    github_repo.appendChild(github_repo_a);
    details.appendChild(github_repo);

    const github_stars = document.createElement("li");
    const github_stars_a = document.createElement("a");
    const github_stars_img = document.createElement("img");
    github_stars.classList.add("author");
    github_stars_a.href = this.data.github;
    github_stars_img.src = `https://img.shields.io/github/stars/${this.data.github.split("github.com/")[1]}.svg?style=social&label=Stars`;
    github_stars_a.appendChild(github_stars_img);
    github_stars.appendChild(github_stars_a);
    details.appendChild(github_stars);

    const status = document.createElement("li");
    status.classList.add("author", "status");
    status.innerHTML = `<b>status</b>: ${this.data.status}`;
    details.appendChild(status);

    const readmore = document.createElement("a");
    readmore.classList.add("readmore");
    readmore.textContent = "read more";
    readmore.href = this.data.readmore;
    readmore.title = `Read more about ${this.data.project}...`;

    description.appendChild(h1);
    description.appendChild(p);

    meta.appendChild(photo);
    meta.appendChild(details);

    card.appendChild(meta);
    card.appendChild(description);
    card.appendChild(readmore);

    return card;
  }

  containsKeyword(keyword) {
    return this.data.name.toLowerCase().includes(keyword) ||
      this.data.description.toLowerCase().includes(keyword) ||
      this.data.officers.some(officer => officer.name.toLowerCase().includes(keyword));
  }

  toggle(on = true) {
    this.el.style.display = on ? "flex" : "none";
  }

}
