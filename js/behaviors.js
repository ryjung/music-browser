/* top menu toggle */
var menu = document.getElementById('top-nav__menu'),
menuHamburger = document.getElementById('nav__menu-button'),
menuCancel = document.getElementById('nav__menu-cancel-button');

menuHamburger.onclick = function() {
	menu.classList.add('expanded');
	menuHamburger.classList.remove('visible');
	menuCancel.classList.add('visible');
}
menuCancel.onclick = function() {
	menu.classList.remove('expanded');
	menuHamburger.classList.add('visible');
	menuCancel.classList.remove('visible');
}
/* show more/less songs toggle */

var toggleBtn = document.getElementById('top-songs__see-more'),
songList = document.getElementById('top-songs-list');

console.log(songList);
toggleBtn.onclick = function (e) {
	console.log(e.target.innerHTML);
	if (e.target.innerHTML === "See More") {
		e.target.innerHTML = "See Less";
		songList.classList.add('expanded');
	} else {
		e.target.innerHTML = "See More";
		songList.classList.remove('expanded');
	}
}