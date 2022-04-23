const text = document.querySelector(".text-1");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Front-End Development"
    }, 0);
    setTimeout(() => {
        text.textContent = "Mechatronic Engineering"
    }, 4000);
}

textLoad();
setInterval(textLoad, 8000);

// Filters Tab

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach ( tc=> {
            tc.classList.remove('filters-active')
        })
        target.classList.add('filters-active')

        tabs.forEach( t => {
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

// Swiper 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Copy Discord Username

function copyText(htmlElement){
    if (!htmlElement){
        return;
    }

    let elementText = htmlElement.innerText;

    let inputElement = document.createElement('input');
    inputElement.setAttribute('value',elementText)
    document.body.appendChild(inputElement)
    inputElement.select();
    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
}

document.querySelector('#copy-dc-user').onclick = function(){
    copyText(document.querySelector('#dc-username'));
}

// toast

const openToast = document.querySelector('.open-toast');
const toast = document.querySelector('.toast');
const closeToast = document.querySelector('.close-toast');

openToast.addEventListener('click', () =>{
    toast.classList.add('toastActive')
});

closeToast.addEventListener('click', () =>{
    toast.classList.remove('toastActive')
});