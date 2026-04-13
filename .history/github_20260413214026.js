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
        const repoRes= await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await repoRes.json();
        let repoHTML="";
        repos.forEach((repo) => {
            repoHTML+=`
            <dic class ="repo-card">
                <h3>Repo: ${repo.name}</h3>
                <p>${repo.stargazers_count} | ${repo.language || "No language"}</p>
                <a href=" ${repo.html_url}" target="_blank">View Repo</a>
                </div>`;
        });
        
        profDiv.innerHTML=
        `<img src="${data.avatar_url}" />
        <h2>Name: ${data.name || "No name provided"}</h2>
        <p> No. of Repos : ${data.public_repos}</p>
        <p>Bio: ${data.bio}</p>
        <p>Location: ${data.loction}</p>
        <p>Followers: ${data.followers}</p>
        <p>Fllowing: ${data.following}</p>
        <h2 id="repo-title">REPO INFO</h2>
        <div class="repo-container">
            ${repoHTML}
            </div>`;
        

    } catch(err){
        console.log(err);
    }
});