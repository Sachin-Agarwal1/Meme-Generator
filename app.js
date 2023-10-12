let btn = document.querySelector("button");
let img = document.querySelector(".meme-generator img");
let memTitle = document.querySelector(".meme-generator .meme-title");
let memeAuthor = document.querySelector(".meme-generator .meme-author");

let updateDetails = (url, title, author)=>{
    img.setAttribute("src", url);
    memTitle.innerHTML = `Title of the Meme => ${title}`;
    memeAuthor.innerHTML = `Meme by: ${author}`;
    
}

let generateMeme = ()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res)=>res.json())
    .then((data)=>{
        updateDetails(data.url, data.title, data.author)
    })

    .catch((err)=>{
        console.log("Error Accured:", err);
    });
}

btn.addEventListener("click", generateMeme);

generateMeme();