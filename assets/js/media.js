let burger = document.querySelector(".humburger");
let menu = document.querySelector(".header-menu");
burger.addEventListener('click', ()=>{
   menu.style.display = (menu.style.display == 'block' ? 'none' : 'block');
});

lightGallery(document.getElementById('light-gallery'), {
    addClass: 'lg-custom-thumbnails',
    appendThumbnailsTo: '.lg-outer',
    animateThumb: false,
    allowMediaOverlap: true,
    plugins: [lgVideo],
	videojs: true,
    videojsOptions: {
        muted: true,
    },
});
lightGallery(document.getElementById('video-gallery')); 



lightGallery(document.getElementById('video-gallery'), {
    plugins: [lgVideo],
    videojs: true,
    videojsOptions: {
        muted: true,
    },
});


