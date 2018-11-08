// https://codepen.io/uxjulia/pen/xgjmzp

// check out some badges to use on https://shields.io/#/examples/build

/*

div
  img
  content
    frameworks (stack)
    project name
    website
    GitHub link
    (more info)
      project name
      status
      description

example_data = {
    "project": "Project X",
    "stack": ["react", "express", "node"],
    "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
    "website": "https://www.google.com",
    "github": "https://www.github.com",
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
    "status": "In Development"
  };

*/


class Project_Card {

  constructor(data) {
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

    const stack = this.data.stack.reduce((ul, cur) => {
      const li = document.createElement("li");
      li.className = "author";

      const span = document.createElement("span");

      span.textContent = cur;

      li.appendChild(span);
      ul.appendChild(li);

      return ul;
    }, document.createElement("ul"));
    stack.className = "details";

    const details = document.createElement("li");
    details.className = "author";
    details.textContent = this.data.description;
    stack.appendChild(details);
    
    const website = document.createElement("li");
    const website_a = document.createElement("a");
    website.className = "author";
    website_a.href = this.data.website;
    website_a.textContent = "website";
    website.appendChild(website_a);
    stack.appendChild(website);
    
    const github_repo = document.createElement("li");
    const github_repo_a = document.createElement("a");
    github_repo.className = "author";
    github_repo_a.href = this.data.github;
    github_repo_a.textContent = "github";
    github_repo.appendChild(github_repo_a);
    stack.appendChild(github_repo);
    
    const status = document.createElement("li");
    status.className = "author";
    status.textContent = `<b>status</b>: ${this.data.status}`;
    stack.appendChild(status);

    const description = document.createElement("div");
    description.className = "description";

    const h1 = document.createElement("h1");
    h1.innerText = this.data.project;

    const p = document.createElement("p");
    p.innerText = this.data.description;

    description.appendChild(h1);
    description.appendChild(p);

    meta.appendChild(photo);
    meta.appendChild(details);

    card.appendChild(meta);
    card.appendChild(description);

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
