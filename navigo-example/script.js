// @ts-nocheck
const $ = document.querySelector.bind(document);
// From Sahi:
// Note 1: A no-op tag function otherwise we get error in browser - Uncaught ReferenceError: html is not defined (inspiration - https://chatgpt.com/c/68f9b0d3-61b8-8322-8c1e-88f949eeb274)
// Note 2: I am using VsCode extension to get syntax highlight for html template literals via - https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html
// Note 3: I am using html template literal instead of putting /*html*/
//      comment before the html string to get syntax highlight using this
//      extension so that I get html formatting via prettier extension on
//      file save as otherwise I do not get code formatting inside of html
//      for the html inside the string on file save.
// @ts-ignore
function html(strings, ...values) {
    let result = "";
    for (let i = 0; i < values.length; i++) {
        result += strings[i] + values[i];
    }
    result += strings[strings.length - 1];
    return result;
}

const nav = html`
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About navigo</a></li>
        <li><a href="/links">Links</a></li>
        <li><a href="/any-path-here">Non Existing Route</a></li>
    </ul>
`;
const contentEl = $("#content");

const TITLE = "Navigo basic example";
function renderHomePage() {
    contentEl.innerHTML = html`
        <h1>${TITLE}</h1>
        <hr />
        ${nav}
    `;
}
function renderAboutPage() {
    contentEl.innerHTML = html`
        <h1>${TITLE} | About</h1>
        <hr />
        ${nav}
        <hr />
        <p>Navigo is vanilla JavaScript router. It has no dependencies.</p>
    `;
}
function renderLinksPage() {
    contentEl.innerHTML = html`
        <h1>${TITLE} | Other links</h1>
        <hr />
        ${nav}
        <hr />
        <p>
            <a href="https://github.com/krasimir/navigo" target="_blank"
                >Documentation</a
            ><br />
            <a href="https://www.npmjs.com/package/navigo" target="_blank"
                >NPM package</a
            >
        </p>
    `;
}
function renerPageNotFound() {
    contentEl.innerHTML = html`<div>
        <h1>${TITLE} | Page not found ❌</h1>
        <hr />
        ${nav}
        <hr />
        <li><a href="/">Go back to HOME 🏡</a></li>
    </div>`;
}
window.addEventListener("load", () => {
    const router = new Navigo("/");
    router
        .on("/about", renderAboutPage)
        .on("/links", renderLinksPage)
        .on("/", renderLinksPage)
        .on("*", renerPageNotFound) // This route must be in the end to act as a fallback
        .resolve();
});
