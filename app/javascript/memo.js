function post (){
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const XHM = new XMLHttpRequest();
    XHM.open("POST", "/posts", true);
    XHM.responseType = "json"
    XHM.send(formData)
  })
};

window.addEventListener("turbo:load", post);