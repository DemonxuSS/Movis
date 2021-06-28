
var allData = [];
var httpReq = new XMLHttpRequest();
getData("movie/popular");

const BASE_URL = 'https://vmi616437.contaboserver.net/movies/';

function getData(param) {
	httpReq.open("GET", "https://api.themoviedb.org/3/" + param + "?api_key=49b70ab4813b76538e0fa33feb7ed45b")
	httpReq.send();
	httpReq.onreadystatechange = function() {
		if (httpReq.readyState == 4 && httpReq.status == 200) {

			allData = JSON.parse(httpReq.response).results;
            if(allData[0].poster_path != null)
			displayMovies();
            else
            displayActors();
		}
	}
	
}


function displayMovies() {
	var temp = ``;
	for (var i = 0; i < allData.length; i++) {
		if (allData[i].poster_path != null)
			temp += `
        <div class="col-md-6 col-lg-4 my-3">
          <div class="movieShow ">
            <div class="onMovie">
                <img src="https://image.tmdb.org/t/p/w500` + allData[i].poster_path + `" class="img-fluid"/>
                <div class="movieLayer d-flex align-items-center">
                    <div class="movieInfo">
                        <h5>` + allData[i].original_title + `</h5>
                        <p>` + allData[i].overview + `</p>
                        <p> Rating: ` + allData[i].vote_average + `/10</p>
                    </div>
                </div>
             </div>
          </div>
        </div>`;
	}

	document.getElementById("moviesRow").innerHTML = temp;
}

function displayActors() {
	var temp = ``;
	for (var i = 0; i < allData.length; i++) {

		var known = "";
		var iterate = allData[i].known_for.length;
		var source = "";

		allData[i].known_for.forEach(element => {
			iterate--;
			if (element.title != null) {
				known = known + element.title;
			} else if (element.name != null) {
				known = known + element.name;
			}
			if (iterate > 0)
				known = known + ", ";
		});

		if (allData[i].profile_path == null) {
			source = "images/pic.svg";
		} else {
			source = "https://image.tmdb.org/t/p/w500" + allData[i].profile_path;
		}

		temp += `
        <div class="col-md-6 col-lg-4 my-3">
          <div class="movieShow ">
            <div class="onMovie">
                <img src="` + source + `" class="img-fluid"/>
                <div class="movieLayer d-flex align-items-center">
                    <div class="movieInfo">
                        <h5>` + allData[i].name + `</h5>
                        <p>` + known + `</p>
                        <p> Popularity: ` + allData[i].popularity + `</p>
                    </div>
                </div>
             </div>
          </div>
        </div>`;
	}
	document.getElementById("moviesRow").innerHTML = temp;
}

function searchMovie(term) {
	// https://api.themoviedb.org/3/search/movie?api_key=49b70ab4813b76538e0fa33feb7ed45b&language=en-US&query=John%20Wick&page=1&include_adult=false
	//httpReq.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=49b70ab4813b76538e0fa33feb7ed45b&language=en-US&query=b" + pathMovie)
	const uri = term;
	const encoded = encodeURI(uri);
	httpReq.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=49b70ab4813b76538e0fa33feb7ed45b&language=en-US&query=" + encoded + "&page=1&include_adult=false")
	httpReq.send();
	httpReq.onreadystatechange = function() {
		if (httpReq.readyState == 4 && httpReq.status == 200) {
			allData = JSON.parse(httpReq.response).results;
			displayMovies();
		}
	}
}

function searchActor(term) {
	const uri = term;
	const encoded = encodeURI(uri);
	httpReq.open("GET", "https://api.themoviedb.org/3/search/person?api_key=49b70ab4813b76538e0fa33feb7ed45b&language=en-US&query=" + encoded + "&page=1&include_adult=false")
	httpReq.send();
	httpReq.onreadystatechange = function() {
		if (httpReq.readyState == 4 && httpReq.status == 200) {
			allData = JSON.parse(httpReq.response).results;
			displayActors();
		}
	}
	
    //$(".userform").hide();
}

function register(){
	var username = document.getElementById("usernameRegister").value;
	var password = document.getElementById("passwordRegister").value;
	var email = document.getElementById("emailRegister").value;
	const encoded = encodeURI(email);

	try {
		const response = axios.post(`${BASE_URL}/users/adduser?email=${encoded}&password=${password}&userName=${username}&userid=0`);
	
		const exists = response.data;

		console.log(`GET: Here's the list of todos`, response);
	
		return response;
	  } catch (errors) {
		console.error(errors);
	  }
}

async function login(){

	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	let res = await axios.get(`${BASE_URL}/users/login?password=${password}&username=${username}`);

	let userData = res.data;
	if(userData.userName != undefined)
	{

	document.getElementById("profile").style.display = "block";
	document.getElementById("loggedUsername").textContent = userData.userName;
	document.getElementById("loggedEmail").textContent = userData.email;

	localStorage.setItem('Username', userData.userName);
	localStorage.setItem('Password', userData.password);
	localStorage.setItem('Email', userData.email);
	localStorage.setItem('Id', userData.userid);
	}
  }

async function deleteAcc(){

	var id = localStorage.getItem('Id');

	await axios.delete(`${BASE_URL}/users/deleteuser?id=${id}`);

	document.getElementById("profile").style.display = "none";
	document.getElementById("loggedUsername").textContent = "Username";
	document.getElementById("loggedEmail").textContent = "Email";

	localStorage.clear();
}

const apiLogin = async ({username, password})=>{
	await axios.get(`${BASE_URL}/users/login?password=${password}&username=${username}`)
	.then(res=>{

	})
	.catch(e=>{
		console.log(e)
	})
}

$(window).on("load", function() {
	$("#loading").fadeOut(1000, function() {
		localStorage.clear();
		if(localStorage.getItem('Username') != null)
		{
			document.getElementById("profile").style.display = "block";
			document.getElementById("loggedUsername").textContent = localStorage.getItem('Username');
			document.getElementById("loggedEmail").textContent = localStorage.getItem('Email');
		}
		$("body").css("overflow", "auto");
	})
})
