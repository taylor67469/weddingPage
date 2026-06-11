// function redirect(url, id = "mainContent") {

//   fetch(`dist/html/${url}`)
//     .then(res => res.text())
//     .then(html => {

//       const container = document.getElementById(id);
//       container.innerHTML = html;

//       attachLinkHandlers(); // re-bind after injecting HTML
//     });
// }

// function attachLinkHandlers() {
//   document.querySelectorAll('a').forEach((a) => {
//     a.addEventListener('click', function (e) {
//       e.preventDefault();
//       e.stopPropagation();

//       const url = a.getAttribute("name") + ".html";
//       redirect(url);
//     });
//   });
// }