let pushProject = []

let iconGrup = document.getElementById('icontech');

function projectSubmit(event) {
    event.preventDefault()

    let title = document.getElementById("projectName").value
    let desc = document.getElementById("desc").value
    let image = document.getElementById("imageUpload")
    let js = document.getElementById('js').checked
    let html = document.getElementById('html').checked
    let react = document.getElementById('react').checked
    let css = document.getElementById('css').checked
    
    image = URL.createObjectURL(image.files[0]);
    
    let project = {
        title,
        desc,
        image,
    };
    // console.log(project)
    pushProject.push(project)
    domInner()
}


function domInner() {
    let content = document.getElementById('contentProject');
    content.innerHTML = "";

    for (i = 0; i < pushProject.length; i++) {
        content.innerHTML += `

          <div class="post col-sm-3 p-3 my-5 mx-4 bg-light" id="projects">
          <img
            src="${pushProject[i].image}"
            class="img-fluid"
            id="fotoproject"
          />
          <h5 class="project-name pt-2 pb-0 m-0">${pushProject[i].title}</h5>
          <p class="duration text-secondary">durasi : 3 bulan</p>
          <p class="descrition justify-content-around">
            L${pushProject[i].desc}
          </p>
          <div class="tech my-3" id="icontech">
            <img
              src="assets/images/javascript.png
          "
              class="img-fluid"
              width="30"
              height="30"
            />
            <img
              src="assets/images/nodejs.png
          "
              class="img-fluid"
              width="30"
              height="30"
            />
            <img
              src="assets/images/bootstrap.png
          "
              class="img-fluid"
              width="30"
              height="30"
            />
            <img
              src="assets/images/html5.png
          "
              class="img-fluid"
              width="30"
              height="30"
            />
          </div>
          <div class="justify-content-center">
            <a href="Contact.html" class="btn btn-dark my-3 px-5 py-0 me-2">
              Edit
            </a>
            <a href="Contact.html" class="btn btn-dark my-3 px-5 py-0 me-0">
              Delete
            </a>
          </div>
        </div>
    }
    
}