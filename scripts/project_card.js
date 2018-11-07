// https://codepen.io/uxjulia/pen/xgjmzp

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
    photo.style.backgroundImage = `url(cgi-bin/${this.data.imgsrc})`;
    photo.className = "photo";

    const officers = this.data.officers.reduce((ul, cur) => {
      const li = document.createElement("li");
      li.className = "author";

      const a = document.createElement("a");

      a.innerHTML = `<b>${cur.position}</b>: ${cur.name}`;
      a.href = cur.link || "#";

      li.appendChild(a);
      ul.appendChild(li);

      return ul;
    }, document.createElement("ul"));
    officers.className = "details";

    const details = this.data.links.reduce((ul, cur) => {
      const li = document.createElement("li");
      li.className = "author";

      const a = document.createElement("a");

      a.innerText = cur.title;
      a.href = cur.link || "#";

      li.appendChild(a);
      ul.appendChild(li);

      return ul;
    }, officers);

    const description = document.createElement("div");
    description.className = "description";

    const h1 = document.createElement("h1");
    h1.innerText = this.data.name;

    const p = document.createElement("p");
    p.innerText = this.data.description;

    const announcements = this.data.announcements.reduce((div, cur) => {
      const h2 = document.createElement("h2");
      const p = document.createElement("p");

      h2.innerText = cur.title;
      p.innerText = cur.description;

      div.appendChild(h2);
      div.appendChild(p);

      return div;
    }, document.createElement("div"));
    announcements.className = "description";

    description.appendChild(h1);
    description.appendChild(p);
    description.appendChild(announcements);

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
