
/* Mobile Nav Overlay */

function openNav() {
	document.getElementById("topnav_menu").style.height = "100%";
}

function closeNav() {
	document.getElementById("topnav_menu").style.height = "0%";
}

/* Getintouch Nav Overlay */

function openContact() {
	document.getElementById("topnav_contact").style.height = "100%";
}

function closeContact() {
	document.getElementById("topnav_contact").style.height = "0%";
}

 
/* Gallery Photo Modal */

function openModal() {
	document.getElementById("gallery_modal").style.display = "block";
}

function closeModal() {
	document.getElementById("gallery_modal").style.display = "none";
}

var slide_index = 1;
show_slides(slide_index);

function plus_slides(n) {
	show_slides(slide_index += n);
}

function current_slide(n) {
	show_slides(slide_index = n);
}

function show_slides(n) {
	var i;
	var slides = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("gallery");
	var gallery_caption_text = document.getElementById("gallery_caption");
	if (n > slides.length) {slide_index = 1}
	if (n < 1) {slide_index = slides.length}
	for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
	}

	slides[slide_index-1].style.display = "block";
	gallery_caption_text.innerHTML = dots[slides-1].alt;
}

document.addEventListener('keyup',function(e){
    if (e.key === "Escape") { 
        // hide modal code
        closeModal()
    }
});

