# GitHub User Finder

A simple web app that allows users to search for a GitHub profile and view basic information along with their repositories.

---

## Features

- Search GitHub users by username
- Display profile details:
  - Profile picture
  - Name
  - Bio
  - Location
  - Followers and following

- Show public repositories
  - Repository name
  - Stars count
  - Language used
  - Link to view repository

- Recent searches stored using localStorage
- Click on recent searches to search again

---

## Tech Stack

- HTML
- CSS
- JavaScript (Fetch API, DOM, LocalStorage)

---

## Project Structure

```id="l8xk3s"
project/
│── index.html
│── style.css
│── script.js
```

---

## How It Works

- Uses GitHub API to fetch user data:

  ```js
  https://api.github.com/users/{username}
  ```

- Fetches repositories:

  ```js
  https://api.github.com/users/{username}/repos
  ```

- Stores recent searches in localStorage:

  ```js
  localStorage.setItem("searches", JSON.stringify(searches));
  ```

---

## How to Run

1. Download or clone the project
2. Open `index.html` in a browser
3. Enter a GitHub username and click search

---

## Future Improvements

- Add loading indicator
- Show top repositories
- Add error UI
- Improve styling and layout

---

## Author

Dharshini M K
