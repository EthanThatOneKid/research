class GitHub_Markdown {

  constructor(src, parent) {

    this.src = src;
    this.parent = parent;
    this.html;

    this.load_md();

  }

  render() {

    this.parent.innerHTML = this.html;

  }

  async load_md() {

    const res = await fetch(this.src);
    const md = await res.text();

    const parsed = new commonmark.Parser().parse(md);
    this.html = new commonmark.HtmlRenderer().render(parsed);

    this.render();

  }

}
