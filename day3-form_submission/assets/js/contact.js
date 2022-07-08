const myEmail = "aditiakurniawanx@mail.com"

function getData() {
    let name = document.getElementById("name").value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subjectForm = document.getElementById('subjectForm').value
    let message = document.getElementById('message').value

    let a = document.createElement('a')
    a.href = `mailto:${myEmail}?subject=${subjectForm}&body=Hello My Name ${name} ${message}, please call me at ${phone} you want to join in my project`
    a.click()
}