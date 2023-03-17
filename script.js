//your code here
const url="https://randomuser.me/api/";

const image=document.querySelector("#image");
const Name=document.querySelector("#heading");
const info=document.querySelector("#info");

userObj={email:"",age:"",phone:""};

//for initial loading
async function initial(){
	const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let Phone=data.results[0].cell;
    // console.log(data.results[0].cell);
    userObj.phone=Phone;

    let Email =data.results[0].email;
    // console.log(data.results[0].email);
    userObj.email=Email;

    let age=data.results[0].dob.age;
    // console.log(data.results[0].dob.age);
    userObj.age=age;

    let name = data.results[0].name.first+" "+data.results[0].name.last;
    // console.log(data.results[0].name.first+" "+data.results[0].name.last);
    Name.innerText=name;

    let picture = data.results[0].picture.large;
    image.setAttribute("src",picture);
}
initial();

// after user interaction
 async function fetchUser(){
     info.textContent="";
	const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let Phone=data.results[0].cell;
    // console.log(data.results[0].cell);
    userObj.phone=Phone;

    let Email =data.results[0].email;
    // console.log(data.results[0].email);
    userObj.email=Email;

    let age=data.results[0].dob.age;
    // console.log(data.results[0].dob.age);
    userObj.age=age;

    let name = data.results[0].name.first+" "+data.results[0].name.last;
    // console.log(data.results[0].name.first+" "+data.results[0].name.last);
    Name.innerText=name;

    let picture = data.results[0].picture.large;
    image.setAttribute("src",picture);
}

function getAge(){
    info.textContent=userObj.age;
}

function getEmail(){
    info.textContent=userObj.email;
}

function getPhone(){
    info.textContent=userObj.phone;
}