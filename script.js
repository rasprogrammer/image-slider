// image-slider 
const imageSlider = document.querySelector('#image-slider');
let imageInterval = null;

if (imageSlider) {
    const sliderArea = imageSlider.querySelector('.slide-area');
    const list = sliderArea.children;

    // image indexes
    let index = 0;
    const lastIndex = list.length - 1;
    
    // slider controls button
    const prevBtn = imageSlider.querySelector('.prev');
    const nextBtn = imageSlider.querySelector('.next');
    
    function showSliderImage(index) {
        for (let i = 0; i < list.length; i++) {
            list[i].style.zIndex = 0;
            list[i].style.display = "none";
            if (i == index) {
                list[i].style.zIndex = 1;
                list[i].style.display = "block";
            }
        }
    }

    function prevImage(e) {
        // when user click for show previous image
        if (e) {
            clearInterval(imageInterval);
            imageInterval = null;
            autoChangeImage();
        }
        
        if (index == 0) {
            index = lastIndex;
        } else {
            index--;
        }
        showSliderImage(index);
    }
    
    function nextImage(e) {
        // when user click for show previous image
        if (e) {
            clearInterval(imageInterval);
            imageInterval = null;
            autoChangeImage();
        }
        
        if (index == lastIndex) {
            index = 0;
        } else {
            index++;
        }
        showSliderImage(index);
    }

    function autoChangeImage() {
        imageInterval = setInterval(() => {
            nextImage();
        }, 3000);
    }

    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    showSliderImage(0);
    autoChangeImage();
}
