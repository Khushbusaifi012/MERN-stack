document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-cards");

    function validateUsername(username) {
        if(username.trim() === "") {
            alert("Username cannot be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        if(!regex.test(username)) {
            alert("Invalid Username");
            return false;
        }
        return true;
    }

    async function fetchUserDetails(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const response = await fetch(url);
            if(!response.ok) throw new Error("User not found");

            const data = await response.json();
            displayUserData(data);

        } catch (error) {
            statsContainer.innerHTML = `<p>${error.message}</p>`;
        } finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    function updateProgress(solved, total, label, circle) {
        const degree = (solved / total) * 360;
        circle.style.background = `conic-gradient(#299f5d ${degree}deg, #283a2e 0deg)`;
        label.textContent = `${solved}/${total}`;
    }

    function displayUserData(data) {
        updateProgress(data.easySolved, data.totalEasy, easyLabel, easyProgressCircle);
        updateProgress(data.mediumSolved, data.totalMedium, mediumLabel, mediumProgressCircle);
        updateProgress(data.hardSolved, data.totalHard, hardLabel, hardProgressCircle);

        const cardsData = [
            {label: "Total Solved", value: data.totalSolved},
            {label: "Easy Solved", value: data.easySolved},
            {label: "Medium Solved", value: data.mediumSolved},
            {label: "Hard Solved", value: data.hardSolved},
        ];

        cardStatsContainer.innerHTML = cardsData.map(d =>
            `<div class="card">
                <h4>${d.label}</h4>
                <p>${d.value}</p>
            </div>`
        ).join("");
    }

    searchButton.addEventListener('click', function() {
        const username = usernameInput.value;
        if(validateUsername(username)) {
            fetchUserDetails(username);
        }
    });
});
