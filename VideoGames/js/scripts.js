function gamesList() {

    fetch('https://api.rawg.io/api/games?key=6d38070a58e646e98057ece9df9ae5fc')
        .then(function (response) {
            console.log(response);
            return response.text();
        })
        .then(function (data) {
            //console.log('data = ', data);
            let dades = JSON.parse(data);
            //console.log(dades.results.length);
            let root = document.querySelector("#root");
            dades.results.forEach(element => {
                let gameDiv = document.createElement("div");    //Game card is created
                gameDiv.classList.add("game-card", "grow");
                gameDiv.setAttribute("id", element.id);
                root.appendChild(gameDiv);

                let gameImg = document.createElement("img");    //Image is created
                gameImg.setAttribute("src", element.background_image);
                gameImg.classList.add("game-img");

                let gameNameDiv = document.createElement("div");    //Game title added
                gameNameDiv.classList.add("game-title");
                gameNameDiv.textContent = element.name;

                let releasedDiv = document.createElement("div");
                releasedDiv.textContent = element.released;
                releasedDiv.classList.add("game-text");

                let gameRatingDiv = document.createElement("div");  //Rating is created
                gameRatingDiv.classList.add("game-rating");
                gameRatingDiv.textContent = element.rating;
                let gameRatingStar = document.createElement("img");
                gameRatingStar.setAttribute("src", "svg/star.svg");
                gameRatingStar.classList.add("star-img");

                gameDiv.appendChild(gameImg);
                gameDiv.appendChild(gameNameDiv);
                gameDiv.appendChild(releasedDiv);
                gameDiv.appendChild(gameRatingDiv);
                gameRatingDiv.appendChild(gameRatingStar);

            });


            let allGames = document.querySelectorAll(".game-card");
            let allGamesArr = Array.from(allGames);
            allGames.forEach(game => {
                game.addEventListener("click", function () {
                    console.log("click");
                    fetch(`https://api.rawg.io/api/games/${game.id}?key=6d38070a58e646e98057ece9df9ae5fc`)
                        .then(function (response) {
                            //console.log('response =', response);
                            return response.json();
                        })
                        .then(function (data) {
                            //let dada = JSON.parse(data);
                            let floatingDiv = document.querySelector("#detail");
                            let close = document.querySelector(".close");
                            floatingDiv.style.display = "block";       //Show detail div

                            let detailContentDiv = document.querySelector(".detail-content");

                            let detailImg = document.createElement("img");
                            detailImg.classList.add("detail-image");
                            detailImg.setAttribute("src", data.background_image);

                            let detailText = document.createElement("div");
                            detailText.classList.add("detail-text");
                            let detailTextTitle = document.createElement("div");
                            detailTextTitle.classList.add("detail-text-title");
                            let detailTextDesc = document.createElement("div");
                            detailTextDesc.classList.add("detail-text-desc");
                            detailTextTitle.textContent = data.name;
                            detailTextDesc.innerHTML = data.description;
                            let detailTextLink = document.createElement("a");
                            detailTextLink.setAttribute("href", data.website);
                            detailTextLink.setAttribute("target", "_blank");
                            detailTextLink.classList.add("detail-text-link");
                            detailTextLink.textContent = "Visit website";



                            let detailCloseBtn = document.createElement("div");
                            detailCloseBtn.classList.add("close");
                            let closeBtnImg = document.createElement("img");
                            closeBtnImg.setAttribute("src", "svg/closebtnimg.svg");
                            closeBtnImg.classList.add("close-btn-img");



                            detailContentDiv.appendChild(detailImg);

                            detailContentDiv.appendChild(detailText);
                            detailText.appendChild(detailTextTitle);
                            detailText.appendChild(detailTextDesc);
                            detailText.appendChild(detailTextLink);

                            detailContentDiv.appendChild(detailCloseBtn);
                            detailCloseBtn.appendChild(closeBtnImg);




                            closeBtnImg.onclick = function () {
                                floatingDiv.style.display = "none";
                                detailContentDiv.removeChild(detailImg);
                                detailContentDiv.removeChild(detailText);
                                detailContentDiv.removeChild(detailCloseBtn);
                            }
                            window.onclick = function (event) {
                                if (event.target == floatingDiv) {
                                    floatingDiv.style.display = "none";
                                    detailContentDiv.removeChild(detailImg);
                                    detailContentDiv.removeChild(detailText);
                                    detailContentDiv.removeChild(detailCloseBtn);
                                }
                            }


                            console.log('data = ', data);
                        })
                        .catch(function (err) {
                            console.error(err);
                        });
                });
            });




        })
        .catch(function (err) {
            console.error(err);
        });
}

function developersList() {
    fetch('https://api.rawg.io/api/developers?key=6d38070a58e646e98057ece9df9ae5fc')
        .then(function (response) {
            //console.log('response =', response);
            return response.text();
        })
        .then(function (data) {
            let developers = JSON.parse(data);
            //console.log('data = ', data);
            let developersDiv = document.querySelector(".developers-outcard");
            developers.results.forEach(developer => {
                let devDiv = document.createElement("div");
                devDiv.classList.add("dev-div", "grow-dev");

                let devImg = document.createElement("img");
                devImg.setAttribute("src", developer.image_background);
                devImg.classList.add("dev-img");

                let devName = document.createElement("div");
                devName.textContent = developer.name;
                devName.classList.add("dev-name");


                developersDiv.appendChild(devDiv);
                devDiv.appendChild(devImg);
                devDiv.appendChild(devName);

            })
        })
        .catch(function (err) {
            console.error(err);
        });
}

