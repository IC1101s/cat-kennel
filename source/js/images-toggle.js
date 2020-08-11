let imagesItem = document.querySelectorAll(".nurslings__images-item");
let imagesList = document.querySelector(".nurslings__images-list");
let togglePrev = document.querySelector(".nurslings__button-toggle--prev");
let toggleNext = document.querySelector(".nurslings__button-toggle--next");
let buttonToggles = document.querySelector(".nurslings__button-toggles");
let sliderWidth = imagesItem[0].offsetWidth;
let sliderIndex = 0;

slide = function () {
	imagesList.style.transform = `translate3d(-${sliderIndex * sliderWidth}px, 0px, 0px)`;

	togglePrev.classList.toggle('disabled', sliderIndex === 0);
    toggleNext.classList.toggle('disabled', sliderIndex === --imagesItem.length);
};

buttonToggles.addEventListener('click', function () {
	let target = event.target;

	if (target === toggleNext) {
	  sliderIndex++;
	} else if (target === togglePrev) {
	  sliderIndex--;
	} else {
	  return;
	}

	slide();
});
