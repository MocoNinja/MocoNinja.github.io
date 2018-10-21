window.addEventListener('load', () => {
	initSession();
	navbarEvents();
	handleBestDoggoEver();
});

function initSession() {
	sessionStorage.clear();
	sessionStorage.setItem('active_section', 'section_intro');
}

function navbarEvents() {
	let navElements = document.getElementsByClassName('nav-item');
	Array.from(navElements).forEach(e => e.addEventListener('click', (event) => {
		let element = event.target;
		let newId = element.id.split("section_")[1];
		let oldId = sessionStorage.getItem('active_section').split("section_")[1];
		changeSectionVisibility(oldId, newId);
		changeNavbarEffects(oldId, newId);
	}));
}

function changeSectionVisibility(oldSectionId, newSectionId) {
	if (newSectionId == null || newSectionId == oldSectionId) {
		return;
	}
	document.getElementById(oldSectionId).classList.add('hidden');
	document.getElementById(newSectionId).classList.remove('hidden');
	sessionStorage.setItem('active_section', "section_" + newSectionId);
}

function changeNavbarEffects(oldSectionId, newSectionId) {
	if (newSectionId == null || newSectionId == oldSectionId) {
		return;
	}
	document.getElementById("section_" + newSectionId).parentNode.classList.add('active');
	document.getElementById("section_" + oldSectionId).parentNode.classList.remove('active');
}

function handleBestDoggoEver() {
	let mahDoggo = document.getElementById('best_doggo_ever');
	mahDoggo.addEventListener('dblclick', () => {
		alert("BARK");
	});
}