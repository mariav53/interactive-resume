'use strict';

//función para desplegar sección
function editar(idContent){
	document.getElementById(idContent).style.display = 'block';
}
//función para cerrar sección
function cerrar(idContent){
	document.getElementById(idContent).style.display = 'none';
}
//función para desplegar vista previa
function vistaPrevia(idContent){
	document.getElementById(idContent).style.display = 'block';
}
//Rellenar formulario Datos Perfil
function fillProfile(){
	vistaPrevia("preview");
	var datosNombre = document.querySelector("#name").value;
	var datosApellido = document.querySelector("#lastname").value;
	var datosProfesion = document.querySelector("#profession").value;

	datosNombre = datosNombre.toUpperCase();
	datosApellido = datosApellido.toUpperCase();

	document.querySelector("#data-profile").innerHTML = datosNombre + ' ' + datosApellido;
	document.querySelector("#data-profession").innerHTML = datosProfesion;

}

function deleteProfile() {
	document.querySelector("#data-profile").innerHTML = '';
	document.querySelector("#data-profession").innerHTML = '';
}

var profileDelete = document.querySelector('.delete-profile');
profileDelete.addEventListener('click', deleteProfile);

var saveProfile = document.querySelector('.saveProfile');
saveProfile.addEventListener('click', fillProfile);

//formulario Datos extracto
function fillSummary(){
	var datosExtracto = document.querySelector("#summary").value;
	vistaPrevia("preview");
	document.querySelector("#data-summary").innerHTML = datosExtracto;
}
var saveSumary = document.querySelector('.saveSumary');
saveSumary.addEventListener('click', fillSummary);

function deleteSummary() {
	document.querySelector("#data-summary").innerHTML = '';

}

var summaryDelete = document.querySelector('.delete-summary');
summaryDelete.addEventListener('click', deleteSummary);

//funciones validar email
function validateEmail(email) {
	var regex = /\b[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,20}\b/gi;
	if( regex.test(email) ) {
		return true;
	} else {
		return false;
	}
}
function checkEmail() {
	var email = document.getElementById( "email" ).value;
	if( validateEmail(email) === false ) {
		document.querySelector(".error_email" ).innerHTML = "Introduce un email válido";
	} else{
		document.querySelector(".error_email" ).innerHTML = " ";
	}
}
//funciones validar Telefono
function validatePhone(telephone) {
	var regexPhone = /^([0-9]+){9}$/
	if( regexPhone.test(telephone) ) {
		return true;
	} else {
		return false;
	}
}
function checkTelephone() {
	var telephone = document.getElementById( "telephone" ).value;
	if( validatePhone(telephone) === false ) {
		document.querySelector(".error_telephone" ).innerHTML = "Introduce un número telefónico válido";
	} else{
		document.querySelector(".error_telephone" ).innerHTML = " ";
	}
}

//formulario Datos contacto
function fillContact(){
	checkEmail();
	checkTelephone();
	var datosTelefono = document.querySelector("#telephone").value;
	var datosEmail = document.querySelector("#email").value;
	vistaPrevia("preview");
	document.querySelector("#data-telephone").innerHTML = datosTelefono;
	document.querySelector("#data-email").innerHTML = datosEmail;
}
var saveContact = document.querySelector('.saveContact');
saveContact.addEventListener('click', fillContact);

function deleteContact() {
	document.querySelector("#data-telephone").innerHTML = '';
	document.querySelector("#data-email").innerHTML = '';

}

var contactDelete = document.querySelector('.delete-contact');
contactDelete.addEventListener('click', deleteContact);

//SECCION EXPERIENCIA LABORAL//////////////////////////////////////////////////////
var jobTitle = document.querySelector("#position");
var jobExperience = document.querySelector('#experience');
var startMonth = document.querySelector('.month');
var startYear = document.querySelector('.year');
var endMonth = document.querySelector('#month-end');
var endYear = document.querySelector('#year-end');
var currentCheck = document.querySelector('#actuality');
var jobList = [];
var jobListPreview = document.querySelector(".span-experience");


function addJob() {
	var job = {
		cargo: jobTitle.value,
		empresa:jobExperience.value,
		mesIni:startMonth.value,
		anoIni:startYear.value,
		actual: currentCheck.checked,
		mesFin:endMonth.value,
		anoFin:endYear.value
	};
	jobList.push(job);
	var allJobList = '';

	for (var i = 0; i < jobList.length; i++) {
		allJobList += '<li>Cargo: ' + jobList[i].cargo +'</li>';
		allJobList += '<li>Empresa: ' + jobList[i].empresa +'</li>';
		allJobList += '<li>Fecha de inicio: ' + jobList[i].mesIni + ' - '+jobList[i].anoIni+ '</li>';
		allJobList += '<li>Fecha de fin: ';
		if (jobList[i].actual) {
			allJobList += 'actualmente';
		} else {
			allJobList += jobList[i].mesFin + ' - '+jobList[i].anoFin +'</li>';
		}
		allJobList += '<hr class="line"><br>'
	}
	jobListPreview.innerHTML = allJobList;
	document.querySelector("#position").value = '';
	document.querySelector('#experience').value = '';
	document.querySelector('.initial').value = '';
	document.querySelector('.end').value = '';
	vistaPrevia("preview");
}



var botonPruebaEx = document.querySelector('.prueba_experience');
botonPruebaEx.addEventListener('click', addJob);

function deleteJob() {
	jobList = [];
	jobListPreview.innerHTML = '';
}

var jobDelete = document.querySelector('.delete-experience');
jobDelete.addEventListener('click', deleteJob);


//SECCION EDUCACION//////////////////////////////////////////////////////
var studyName = document.querySelector(".education");
var studyInstitution = document.querySelector('.education_university');
var studyList = [];
var studyListPreview = document.querySelector(".data-studies");

function addStudy() {
	var study = {
		name: studyName.value,
		insti:studyInstitution.value
	};
	if (study.name != '' && study.insti != ''){
		studyList.push(study);
		previewStudy();
		document.querySelector(".education").value = '';
		document.querySelector('.education_university').value = '';
		vistaPrevia("preview");
	}

}
function previewStudy(){
	var allStudyList = '';

	for (var i = 0; i < studyList.length; i++) {
		allStudyList += '<li>' + studyList[i].name +'</li>';
		allStudyList += '<li>' + studyList[i].insti +'</li><hr class="line">';
	}
	studyListPreview.innerHTML = allStudyList;
}



function deleteStudies() {
	studyList = [];
	studyListPreview.innerHTML = '';
}


var botonPrueba = document.querySelector('.prueba');
botonPrueba.addEventListener('click', addStudy);

//SECCION IDIOMAS//////////////////////////////////////////////////////


var languageName = document.querySelector(".languages");
var languageLevel = document.querySelector("#level");
var languageList = [];
var languageListPreview = document.querySelector(".data-languages");

function addLanguage() {
	var language = {
		name: languageName.value,
		lvl:languageLevel.value
	};
	languageList.push(language);
	var allLanguageList = '';

	for (var i = 0; i < languageList.length; i++) {
		allLanguageList += '<li>' + languageList[i].name +'</li>';
		allLanguageList += '<li>' + languageList[i].lvl +'</li><hr class="line">';

	}
	languageListPreview.innerHTML = allLanguageList;
	document.querySelector(".languages").value = '';
	document.querySelector('.level').value = '';
	vistaPrevia("preview");
}
var botonIdioma = document.querySelector('.prueba_language');
botonIdioma.addEventListener('click', addLanguage);

function deleteLanguage() {
	languageList = [];
	languageListPreview.innerHTML = '';
}

//SECCION INTERESES/////
var interestName = document.querySelector("#interest");
var interestList = [];
var interestListPreview = document.querySelector(".data-interest");

function addInterest() {
	var interest = {
		interes: interestName.value
	};
	interestList.push(interest);
	var allInterestList = '';

	for (var i = 0; i < interestList.length; i++) {
		allInterestList += '<li>' + interestList[i].interes +'</li>';

	}
	interestListPreview.innerHTML = allInterestList;
	document.querySelector("#interest").value = '';
	vistaPrevia("preview");
}
var botonInteres = document.querySelector('.prueba_interest');
botonInteres.addEventListener('click', addInterest);

function deleteInterest() {
	interestList = [];
	interestListPreview.innerHTML = '';
}

function fillMore(){
	vistaPrevia("preview");
	var datosHabilidades1 = document.querySelector("#skills1").value;
	var datosHabilidades2 = document.querySelector("#skills2").value;
	var datosHabilidades3 = document.querySelector("#skills3").value;

	var newSkill= document.querySelectorAll('.skillName');
	var inputSkill = document.querySelectorAll('.skills');
	var inputLevel = document.querySelectorAll('.level_skills');

	for (var i = 0; i < newSkill.length; i++) {
		newSkill[i].innerHTML = inputSkill[i].value;
		newSkill[i].parentElement.style.width = inputLevel[i].value + '%';
	}
	document.querySelector("#skillName1").innerHTML = datosHabilidades1;
	document.querySelector("#skillName2").innerHTML = datosHabilidades2;
	document.querySelector("#skillName3").innerHTML = datosHabilidades3;
}
var saveMore = document.querySelector('.saveMore');
saveMore.addEventListener('click', fillMore);

function deleteSkills(){
	var previewSkillNames= document.querySelectorAll('.skillName');
	var previewSkillLevels= document.querySelectorAll('.levelSkill');

	var inputSkillNames = document.querySelectorAll('.skills');
	var inputSkillLevels = document.querySelectorAll('.level_skills');

	for (var i = 0; i < previewSkillNames.length; i++) {
		previewSkillNames[i].innerHTML = '';
		previewSkillNames[i].parentElement.style.width = 0;
	}

	for (var i = 0; i < inputSkillNames.length; i++) {
		inputSkillNames[i].value = '';
		inputSkillLevels[i].value = '';
	}


	//inputLevel.style.width = '';
}
function deleteAdditional() {
	deleteInterest();
	deleteLanguage();
	deleteStudies();
	deleteSkills();
}
var additionalDelete = document.querySelector('.delete-additional');
additionalDelete.addEventListener('click', deleteAdditional);
//función para periodo de incio y periodo de fin
var monthOptions = '<option value="Enero">Enero</option>';
monthOptions = monthOptions + '<option value="Febrero"> Febrero</option>';
monthOptions = monthOptions + '<option value="Marzo">Marzo</option>';
monthOptions = monthOptions + '<option value="Abril">Abril</option>';
monthOptions = monthOptions + '<option value="Mayo">Mayo</option>';
monthOptions = monthOptions + '<option value="Junio">Junio</option>';
monthOptions = monthOptions + '<option value="Julio">Julio</option>';
monthOptions = monthOptions + '<option value="Agosto">Agosto</option>';
monthOptions = monthOptions + '<option value="Septiembre">Septiembre</option>';
monthOptions = monthOptions + '<option value="Octubre">Octubre</option>';
monthOptions = monthOptions + '<option value="Noviembre">Noviembre</option>';
monthOptions = monthOptions + '<option value="Diciembre">Diciembre</option>';

var months = document.querySelectorAll('.month');
for (var i = 0; i < months.length; i++) {
	months[i].innerHTML = monthOptions;
}

var years = 2052;
var yearOptions = ''; //almacena options de html que van en el select

for (var initialYear=1950; initialYear<years; initialYear++) {
	yearOptions = yearOptions + '<option>' + (initialYear) + '</option>';
}
var yearsAll = document.querySelectorAll('.year');
for (var i = 0; i < yearsAll.length; i++) {
	yearsAll[i].innerHTML = yearOptions;
}

//función para nivel de idiomas
var options = '<option value ="A1">A1</option>';
var options = options + '<option value ="A2">A2</option>';
var options = options + '<option value ="B1">B1</option>';
var options = options + '<option value ="B2">B2</option>';
var options = options + '<option value ="C1">C1</option>';
var options = options + '<option value ="C2">C2</option>';
document.querySelector('#level').innerHTML = options;


//smooth scroll function
(function() {
	if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {
		var smoothScroll = function (anchor, duration) {
			var startLocation = window.pageYOffset;
			var endLocation = anchor.offsetTop;
			var distance = endLocation - startLocation;
			var increments = distance/(duration/16);
			var stopAnimation;
			var animateScroll = function () {
				window.scrollBy(0, increments);
				stopAnimation();
			};
			if ( increments >= 0 ) {
				stopAnimation = function () {
					var travelled = window.pageYOffset;
					if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
						clearInterval(runAnimation);
					}
				};
			} else {
				stopAnimation = function () {
					var travelled = window.pageYOffset;
					if ( travelled <= (endLocation || 0) ) {
						clearInterval(runAnimation);
					}
				};
			}
			var runAnimation = setInterval(animateScroll, 16);
		};
		var scrollToggle = document.querySelectorAll('.scroll');
		[].forEach.call(scrollToggle, function (toggle) {
			toggle.addEventListener('click', function(e) {
				e.preventDefault();
				var dataID = toggle.getAttribute('href');
				var dataTarget = document.querySelector(dataID);
				var dataSpeed = toggle.getAttribute('data-speed');
				if (dataTarget) {
					smoothScroll(dataTarget, dataSpeed || 1000);
				}
			}, false);
		});
	}

})();

var themes = document.querySelectorAll('.botoncito');
var showPreview = document.querySelector('.showpreview');


function applyTheme(event){
	var themeSelected = event.currentTarget.getAttribute('data-theme-class');
	showPreview.classList.remove('theme1', 'theme2', 'theme3',  'theme4');
	showPreview.classList.add(themeSelected);

}

for (var i = 0; i < themes.length; i++) {
	themes[i].addEventListener('click', applyTheme);
}

// /*imprimir*/
function printCurriculum(){

	var printer = document.getElementById('preview2');
	printer.style.display="block";


	var content = printer.innerHTML;
	var viewPrint= document.body.innerHTML;

	document.body.innerHTML = content;
	window.print();
	document.body.innerHTML = viewPrint;
}
