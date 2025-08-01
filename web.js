const myModule = (function() {
    function clickOnSolution() {
        const ul = document.getElementById("dropdown-ul");
        const li = document.getElementById("click-solution");
        li.addEventListener("click", () => {
            ul.classList.toggle('hidden');
        })
    }

    function changeTheme() {
        const themeBtn = document.getElementById("change-theme");
        const isDark = document.body.classList.contains('dark');
        if (isDark) {
            document.body.classList.toggle('dark');
            themeBtn.innerHTML = '&#127769;';
        }
        else {
            document.body.classList.toggle("dark");
            themeBtn.innerHTML = '&#9728;';
        }
    }

    function onClickThemeBtn() {
        const themeBtn = document.getElementById("change-theme");
        themeBtn.addEventListener("click", () => changeTheme());
    }

    // function fetchData() {
    //     const url = "https://jsonplaceholder.typicode.com/posts";
    //     fetch(url).then(response => response.json())
    //     .then(data => {
    //         const ul = document.getElementById("main__ul");
    //         for (let i = 0; i < 3; i++) {
    //             const li = document.createElement("li");
    //             li.classList.add("text-16", "py-10");
    //             li.innerHTML = `${data[i].title} <br> ${data[i].body}`;
    //             ul.appendChild(li);
    //         }
    //     })
    //     .catch(error => console.log(error));
    // }

    async function fetchData() {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const x = await fetch(url).then(response => { return response.json()})
        .then(data => {
            const ul = document.getElementById("main__ul");
            for (let i = 0; i < 3; i++) {
                const li = document.createElement("li");
                li.classList.add("text-16", "py-10");
                li.innerHTML = `${data[i].title} <br> ${data[i].body}`;
                ul.appendChild(li);
            }
        })
        .catch(error => {return console.log(error)});
        return Promise.resolve(x);
    }

    return {
        clickOnSolution,
        onClickThemeBtn,
        fetchData
    }
})();

myModule.clickOnSolution();
myModule.onClickThemeBtn();
myModule.fetchData();