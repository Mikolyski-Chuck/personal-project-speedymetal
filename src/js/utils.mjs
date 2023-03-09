
// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
export function getItemFromUrl(parameters) {
  // Get Id from url query string
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(parameters);
  return product;
}

export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
  var htmlItems = list.map((o) => templateFn(o));
  var sortSetting = document.getElementById("sort").value;
  var sortedItems;
  if (sortSetting == "name") {
    sortedItems = sortName(htmlItems);
  }
  if (sortSetting == "price") {
    sortedItems = sortPrice(htmlItems);
  }
  const displayItems = sortedItems.map((x) => getDisplayData(x));
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, displayItems.join(""));
}






export function renderWithTemplate(templateFn, parentElement, data, ...callBacks) {
  parentElement.insertAdjacentHTML("afterbegin", templateFn);
  
  if (callBacks) {
    for (let i in callBacks) {
    callBacks[i](data);
    }
  }
}

async function loadTemplate(path) {
    const response = await fetch(path);
    const template = response.text();
    return template;
}

export async function loadHeaderFooter(){
  const header = await loadTemplate("../partials/header.html");
  const footer = await loadTemplate("../partials/footer.html");
  const headerEle = document.querySelector("#main-header");
  const footerEle = document.querySelector("#main-footer");

  renderWithTemplate(header, headerEle, "");
  renderWithTemplate(footer, footerEle);
}





