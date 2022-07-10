let pushProject = []

let iconGroup = document.getElementById("icon-tech")

function addBlog(event) {
  event.preventDefault()

  let name = document.getElementById("name").value
  let startDate = document.getElementById("start-date").value
  let endDate = document.getElementById("end-date").value
  let message = document.getElementById("message").value  
  let image = document.getElementById("upload") 
  let nodejs = document.getElementById('nodejs').checked  
  let reactjs = document.getElementById('reactjs').checked  
  let momentjs = document.getElementById('momentjs').checked  
  let laravel = document.getElementById('laravel').checked  

  image = URL.createObjectURL(image.files[0]);

  let project = {
    name,
    message,
    image,
  };

  pushProject.push(project)
  domInner()
}

function domInner() {
  let content = document.getElementById("project-blog");
  content.innerHTML = "" ;

  for (i = 0; i < pushProject.length; i++) {
    content.innerHTML += `
    <div class="post">
                <img src="${pushProject[i].image}" alt="">
                    <h3>${pushProject[i].name}</h3>
                    <p class="duration">duration : </p>
                    <div class="desc"><p>${pushProject[i].message}</p></div>
                    <div id="icon-tech" class="icon-tech">
                        <i class="fa-brands fa-node-js" title="node.js"></i>
                        <i class="fa-brands fa-react" title="react.js"></i>
                        <i class="fa-regular fa-clock" title="moment.js"></i>
                        <i class="fa-brands fa-laravel" title="laravel"></i>
                    </div>
                    <div class="btn-post">
                        <button type="button" class="edit-btn">edit</button>
                        <button type="button" class="delete-btn">delete</button>
                    </div>
            </div>
    `
  }
}