var img = new Image();


imgArray = [];

for(var i=0;i<4;i++) {
	img = new Image();
	imgArray[i] = img;
}

//assign the path to each picture object
imgArray[0].src = 'Presentation/1.jpg';
imgArray[1].src = 'Presentation/2.jpg';
imgArray[2].src = 'Presentation/3.jpg';
imgArray[3].src = 'Presentation/4.jpg';




//
showing = document.querySelector('#show-center');
showing.setAttribute('src', imgArray[0].src);
index = 0

leftArrow = document.querySelector('#left-arrow');
rightArrow = document.querySelector('#right-arrow');

leftArrow.addEventListener('click', function() {
	controlSlide('left')
})
rightArrow.addEventListener('click', function() {
	controlSlide('right')
})

//Making button under the slideshow
for(var i=0;i<imgArray.length;i++) {
	document.querySelector('.circle').innerHTML +=
	 "<button class='btn btn-danger' onclick=showSlide("+i+") ></button>";

}

checkCircle(0);

slide = document.querySelector('#show-center');

// slide.addEventListener("click", function () {
// 	controlSlide();

// });


function controlSlide(dir) {
	showing.style.animation = 'none';
	showing.offsetHeight;
	// showing.style.animation = null
	if(dir == 'left'){		
		if(index > 0) {
			index -= 1;

			}
		else {
			index = imgArray.length-1;
					
				}
		}
	if(dir == 'right'){		
		if(index < imgArray.length-1) {
			index += 1;

			}
		else {
			index = 0;
					
				}
		}	

		showSlide(index);
		// showing.setAttribute('src', imgArray[index].src);
		checkCircle(index);
		showing.style.animation = 'img-fade-out 0.1s ease-in 0s 1 normal forwards';
}

function showSlide(n) {
	index = n;
	checkCircle(index);

	setTimeout(function () {
		showing.style.animation = 'none';
		showing.offsetHeight;
		showing.style.animation = 'fade-in 0.5s';
		showing.setAttribute('src', imgArray[n].src);
	}, 100);
	

	
	
	showing.style.animation = 'none';
	showing.offsetHeight;
	showing.style.animation = 'img-fade-out 0.1s ease-in 0s 1 normal forwards'
}


function checkCircle(n) {

	//This function do logical check the page of slides and make dot appear properly
	var dot = document.querySelectorAll('.circle button')

	for(var i=0;i<imgArray.length;i++) {
		if (i==n)
		{
			dot[n].style.background  = '#d9534f';
			dot[n].style.opacity = '1';
		}
		else {
			dot[i].style.background  = '#cccccc';
			dot[i].style.opacity = '0.4';
		}
	}
}