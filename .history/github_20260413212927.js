//Display:
// Profile name
// Avatar
// Public repos count

const search = document.getElementById("search");
const profDiv = document.getElementById("profile");

search.addEventListener("click", async function() {
    const username = document.getElementById("input").value.trim();
    if(!username){
        alert("enter an username");
        return;
    }
    try{
        const res = await fetch(`https://api.github.com/users/${username}`);

        if (!res.ok){
            throw new Error("user not found");
        }
        const data = await res.json();
        profDiv.innerHTML=
        `<img src="${data.avatar_url}" />
        <h2>Name: ${data.name || "No name provided"}</h2>
        <p> No. of Repos : ${data.public_repos}</p>
        <p>Bio: ${data.bio}</p>
        <p>Location: ${data.loction}</p>
        <p>Followers: ${data.followers}</p>
        <p>Fllowing: ${data.following}</p>
        <h2>REPO INFO</h2>`;

    } catch(err){
        console.log(err);
    }
});