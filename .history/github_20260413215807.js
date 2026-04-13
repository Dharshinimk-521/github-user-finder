//Display:
// Profile name
// Avatar
// Public repos count

const search = document.getElementById("search");
const profDiv = document.getElementById("profile");
const recentList =document.getElementById("recentList")
let searches = JSON.parse(localStorage.getItem("searches")) || [];
function renderSearch() {
    recentList.innerHTML="";
    searches.forEach((user) => {
        const li = document.createElement("li");
        li.textContent=user;
        li.onclick = () => {
            document.getElementById("input").value = user;
            search.click();
        };
        recentList.appendChild(li)
    })
}

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
        if(!searches.includes(username)){
            searches.unshift(username);//add to begining of that array searches
            if(searches.length>5){
                searches.pop();//keep only last 5

            }
            localStorage.setItem("searches",JSON.stringify(searches));
        }
        const data = await res.json();
        const repoRes= await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await repoRes.json();
        let repoHTML="";
        repos.forEach((repo) => {
            repoHTML+=`
            <div class ="repo-card">
                <h3>Repo: ${repo.name}</h3>
                <p>Stars: ${repo.stargazers_count} | ${repo.language || "No language"}</p>
                <a href=" ${repo.html_url}" target="_blank">View Repo</a>
                </div>`;
        });
        
        profDiv.innerHTML=
        `<img id="repo-prof" src="${data.avatar_url}" />
        <h2>Name: ${data.name || "No name provided"}</h2>
        <p> No. of Repos : ${data.public_repos}</p>
        <p>Bio: ${data.bio}</p>
        <p>Location: ${data.location}</p>
        <p>Followers: ${data.followers}</p>
        <p>Fllowing: ${data.following}</p>
        <h2 id="repo-title">REPO INFO</h2>
        <div class="repo-container">
            ${repoHTML}
            </div>`;
        

    } catch(err){
        console.log(err);
    }
    renderRecent();
});
renderRecent();