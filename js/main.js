document.addEventListener('DOMContentLoaded', function () {

	var order = 0;
	var points = 3;
	var speed = 100;
	var inputs = document.getElementsByTagName("input");





	function playAudio(h) {
		console.log(h);
		var x = document.getElementById(h);
		x.currentTime = 0;
		x.play();

	}

	var w = document.getElementsByClassName("string");

	for (let i = 0; i < w.length; i++) {
		w[i].addEventListener("click", function () {

			playAudio(i);
			if (w[i].id === "3" && order == 0) {

				good(this);
			} else if (w[i].id === "19" && order == 1) {

				good(this);
			} else if (w[i].id === "14" && order == 2) {

				good(this);
			} else if (w[i].id === "2" && order == 3) {

				good(this);
			} else if (w[i].id === "18" && order == 4) {

				good(this);
			} else if (w[i].id === "14" && order == 5) {

				good(this);
			} else if (w[i].id === "12" && order == 6) {

				good(this);
			} else if (w[i].id === "14" && order == 7) {

				good(this);
			} else {
				wrong(this);
			}
			check();

		});
	}

	function good(e) {
		e.classList.add("myStyle");
		setTimeout(function () {
			e.classList.remove("myStyle");
		}, 500);
		order++;
		points++;
		console.log(order);
	}

	function wrong(e) {
		e.classList.add("myStyle2");
		setTimeout(function () {
			e.classList.remove("myStyle2");
		}, 500);

		points--;
	}

	function playColors(e) {
		e.classList.add("myStyle");
		setTimeout(function () {
			e.classList.remove("myStyle");
		}, speed);
	}

	var score = document.getElementById("score");
	var pointdiv = document.getElementById("points");

	function check() {
		score.innerHTML = points;
		if (points < 1) {
			pointdiv.innerHTML = "Koniec gry, ponownie rozpoczniesz za 3 sekundy";
			reloadPage();
		}
		if (order > 7) {
			pointdiv.innerHTML = "Gratulacje twoj wynik to " + points + ", ponownie rozpoczniesz za 3 sekundy";
			reloadPage();
		}
		if (order > 7 && points == 11) {

			pointdiv.innerHTML = "Gratulacje opanowales riff do perefekcji!";
			reloadPage();
		}
	}

	var vid = document.getElementById("videobutton");




	vid.addEventListener("click", function () {
		if (inputs[0].checked) {
			speed = 500;
		} else if (inputs[1].checked) {
			speed = 300;

		} else if (inputs[2].checked) {
			speed = 200;

		}

		vid.disabled = true;
		setTimeout(function () {

			playColors(w[3]);
			playAudio(3);
		}, speed)
		setTimeout(function () {
			playColors(w[19]);
			playAudio(19);
		}, speed * 2)
		setTimeout(function () {
			playColors(w[14]);
			playAudio(14);
		}, speed * 3)
		setTimeout(function () {
			playColors(w[2]);
			playAudio(2);
		}, speed * 4)
		setTimeout(function () {
			playColors(w[18]);
			playAudio(18);
		}, speed * 5)
		setTimeout(function () {
			playColors(w[14]);
			playAudio(14);
		}, speed * 6)
		setTimeout(function () {
			playColors(w[12]);
			playAudio(12);
		}, speed * 7)
		setTimeout(function () {
			vid.disabled = false;
			playColors(w[14]);
			playAudio(14);
		}, speed * 8)

	});




	function reloadPage() {
		setTimeout(function () {
			location.reload();
		}, 3000);
	}



}, false);
