// Slider

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true,
    });
});

// Slider buttons

const owl = $('.owl-carousel');

$('.slider__btn--prev').click(function() {
	owl.trigger('prev.owl.carousel');
})

$('.slider__btn--next').click(function() {
	owl.trigger('next.owl.carousel');
})

// Video

const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

videoWrapper.addEventListener('click', function () {
    if (video.paused) {
        videoPicture.classList.add('hidden');
		videoWrapper.classList.remove('video-overlay');
		videoBtn.classList.add('none');
		video.play();
	} else {
		videoWrapper.classList.add('video-overlay');
		videoBtn.classList.remove('none');
		video.pause();
	}
});

