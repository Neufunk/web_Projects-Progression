
$(document).ready(function() {
	var isshow = localStorage.getItem('isshow');
    if (isshow == null) {
        localStorage.setItem('isshow', 1);
        alert("La modification de l'état d'avancement des projets en cliquant sur les puces est à titre informatif et "+
			"prévisionnel uniquement. Le code source ne sera pas modifié. \n F5 pour revenir à la vue par défaut");   
    }
	switchStatut();
	appliCarProgression();
	statistiquesProgression();
	evenementsProgression();
	etudiantProgression();
	supportProgression();
});

function appliCarProgression() {
	var done = $("#applicar .li-done").length;
	var undone = $("#applicar .li-undone").length;
	var progress = (done/(done+undone))*100;
	var elem = document.getElementById("appliCarBar"); 
	var width = 0;
	var id = setInterval(frame, 15);
	function frame() {
		if (width >= progress) {
			clearInterval(id);
			 } else {
			width++; 
			elem.style.width = width + '%';
			document.getElementById("appliCarPercent").innerHTML = width * 1 + '%';
		}
	}
}

function statistiquesProgression() {
	var done = $("#logiciel-statistiques .li-done").length;
	var undone = $("#logiciel-statistiques .li-undone").length;
	var progress = (done/(done+undone))*100;
	var elem = document.getElementById("statistiquesBar"); 
	var width = 0;
	var id = setInterval(frame, 15);
	function frame() {
		if (width >= progress) {
			clearInterval(id);
			 } else {
			width++; 
			elem.style.width = width + '%';
			document.getElementById("statistiquesPercent").innerHTML = width * 1 + '%';
		}
	}
}

function evenementsProgression() {
	var done = $("#website-evenements .li-done").length;
	var undone = $("#website-evenements .li-undone").length;
	var progress = (done/(done+undone))*100;
	var elem = document.getElementById("evenementsBar"); 
	var width = 0;
	var id = setInterval(frame, 15);
	function frame() {
		if (width >= progress) {
			clearInterval(id);
			 } else {
			width++; 
			elem.style.width = width + '%';
			document.getElementById("evenementsPercent").innerHTML = width * 1 + '%';
		}
	}
}

function etudiantProgression() {
	var done = $("#formulaire-etudiants .li-done").length;
	var undone = $("#formulaire-etudiants .li-undone").length;
	var progress = (done/(done+undone))*100;
	var bar = document.getElementById("etudiantBar"); 
	var width = 0;
	var id = setInterval(frame, 15);
	function frame() {
		if (width >= progress) {
			clearInterval(id);
			 } else {
			width++; 
			bar.style.width = width + '%';
			document.getElementById("etudiantPercent").innerHTML = width * 1 + '%';
		}
	}
}

function supportProgression() {
	var done = $("#support-informatique .li-done").length;
	var undone = $("#support-informatique .li-undone").length;
	var progress = (done/(done+undone))*100;
	var bar = document.getElementById("supportBar"); 
	var width = 0;
	var id = setInterval(frame, 15);
	function frame() {
		if (width >= progress) {
			clearInterval(id);
			 } else {
			width++; 
			bar.style.width = width + '%';
			document.getElementById("supportPercent").innerHTML = width * 1 + '%';
		}
	}
}

function switchStatut() {
	$('#website-evenements li').on('click', function() {
		var classe = $(this).attr("class");
		if (classe == "li-done") {
			$(this).attr('class', 'li-undone');
			evenementsProgression();
		} else if (classe == "li-undone") {
			$(this).attr('class', 'li-done');
			evenementsProgression();
		}
	});
	$('#applicar li').on('click', function() {
		var classe = $(this).attr("class");
		if (classe == "li-done") {
			$(this).attr('class', 'li-undone');
			appliCarProgression();
		} else if (classe == "li-undone") {
			$(this).attr('class', 'li-done');
			appliCarProgression();
		}
	});
	$('#support-informatique li').on('click', function() {
		var classe = $(this).attr("class");
		if (classe == "li-done") {
			$(this).attr('class', 'li-undone');
			supportProgression();
		} else if (classe == "li-undone") {
			$(this).attr('class', 'li-done');
			supportProgression();
		}
	});
	$('#formulaire-etudiants li').on('click', function() {
		var classe = $(this).attr("class");
		if (classe == "li-done") {
			$(this).attr('class', 'li-undone');
			etudiantProgression();
		} else if (classe == "li-undone") {
			$(this).attr('class', 'li-done');
			etudiantProgression();
		}
	});
	$('#logiciel-statistiques li').on('click', function() {
		var classe = $(this).attr("class");
		if (classe == "li-done") {
			$(this).attr('class', 'li-undone');
			statistiquesProgression();
		} else if (classe == "li-undone") {
			$(this).attr('class', 'li-done');
			statistiquesProgression();
		}
	});
}