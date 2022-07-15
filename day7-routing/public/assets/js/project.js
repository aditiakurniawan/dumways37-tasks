let pushProject = []

let iconGrup = document.getElementById('icontech');

function projectSubmit(event) {
    event.preventDefault()

    let title = document.getElementById("projectName").value
    let Description = document.getElementById("Description").value
    let image = document.getElementById("imageUpload")
    let js = document.getElementById('nodejs').checked
    let html = document.getElementById('javascript').checked
    let react = document.getElementById('bootstrap').checked
    let css = document.getElementById('html').checked
    
    image = URL.createObjectURL(image.files[0]);
    
    let project = {
        title,
        Description,
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
        <div class="post">
                    <img src="${pushProject[i].image}" alt="">
                    <h3>${pushProject[i].title}</h3>
                    <p class="duration">duration : ...</p>
                    <div class="article"><p> ${pushProject[i].desc}</p></div>
                    <div class="icontech">
                        <i class="fa-brands fa-js-square"></i>
                        <i class="fa-brands fa-css3-alt"></i>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-react"></i>
                    </div>
                    <div class="flex-btn">
                        <button class="delete">delete</button>
                        <button class="edit">edit</button>
                    </div>
                </div>`
    }
    
}