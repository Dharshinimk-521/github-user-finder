//Display:
// Profile name
// Avatar
// Public repos count

const search = document.getElementById("search");
const profDiv = document.getElementById("profile");

search.addEventListener("click", async function() {
    const username = document.getElementById("input");
    if(!username){
        alert("enter an username");
        return;
    }
    try{
        const res = await fetch(`htpps://api.github.com/users/${username}`);

        if (!res.ok){
            throw new Error("user not found");
        }
        const data = await res.json();
        profDiv.innerHTML=
        `<img src="${data.avatar_url} />
        <h2>${data.name || "No name provided"}</h2>
        <p> Repos : ${data.public_repos}</p>`;

    } catch(err){
        console.log(err);
    }
});