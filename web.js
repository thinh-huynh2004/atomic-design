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

    function fetchData() {
        const url = "https://jsonplaceholder.typicode.com/posts";
        for (let i = 0; i < 3; i++) {
            const id = "main-li-" + i;
            const li = document.getElementById(id);
            li.innerHTML = `Loading...`;
        }
        fetch(url).then(response => { return response.json()})
        .then(data => {
            for (let i = 0; i < 3; i++) {
                const id = "main-li-" + i;
                const li = document.getElementById(id);
                li.innerHTML = `${data[i].title} <br> ${data[i].body}`;
            }
        })
        .catch(error => {return console.log(error)});
    }

    function onClickNavbarBtn() {
        document.getElementById("btn-navbar").addEventListener("click", () => {
            const div = document.getElementById("navbar-mini");
            div.classList.toggle("btn");
            let check = div.classList.contains("btn");
            if (check) {
                const btn = document.getElementById("btn-navbar");
                btn.style.color = `#f2ad5f`;
                div.style.display = `block`;
            }
            else {
                const btn = document.getElementById("btn-navbar");
                btn.style.color = `#fff`;
                div.style.display = `none`;
            }
        })
    }

    function changeThemeMini() {
        const themeBtn = document.getElementById("change-theme-mini");
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

    function onClickThemeBtnMini() {
        document.getElementById("change-theme-mini").addEventListener("click", () => {
            return changeThemeMini();
        })
    }

    return {
        clickOnSolution,
        onClickThemeBtn,
        fetchData,
        onClickNavbarBtn: onClickNavbarBtn(),
        onClickThemeBtnMini: onClickThemeBtnMini(),
    }
})();

myModule.clickOnSolution();
myModule.onClickThemeBtn();
setInterval(myModule.fetchData, 5000);