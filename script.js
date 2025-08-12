
/* OPEN CLOSE MENU */

const btnMenu = document.querySelector('.button-menu');
const menu = document.querySelector('.menu');
const backgroundMenu = document.querySelector('.background-menu');
const imgBtnMenu = document.querySelector('.button-menu img');

let isMenuClicked = false;

btnMenu.addEventListener('click', () => {

    isMenuClicked = !isMenuClicked;

    if(isMenuClicked){
        menu.style.display = 'block';
        backgroundMenu.style.display = 'block';
        imgBtnMenu.src = './assets/shared/mobile/icon-close.svg';
    }
    else{
        menu.style.display = 'none';
        backgroundMenu.style.display = 'none';
        imgBtnMenu.src = './assets/shared/mobile/icon-hamburger.svg';
    }

});



/* FORM */

if(document.querySelector('.contact')){

    const myForm = document.querySelector('#myForm');
    const formInputs = myForm.querySelectorAll('.input, textarea'); 
    const arrayInputError = document.querySelectorAll('.container-input span.error');

    formInputs.forEach( (input, index) => {

        input.addEventListener('input', () => {
            arrayInputError[index].textContent = '';
            arrayInputError[index].classList.remove('logo-error');
        });

    });


    function validateInput(input, index){

        if (input.validity.valueMissing) {
            arrayInputError[index].textContent = `Can't be empty`;
            arrayInputError[index].classList.add('logo-error');
            return false;
        }

        if (input.validity.tooShort) {
            arrayInputError[index].textContent = `Input too short`;
            arrayInputError[index].classList.add('logo-error');
            return false;
        }

        if (input.validity.tooLong) {
            arrayInputError[index].textContent = `Input too long`;
            arrayInputError[index].classList.add('logo-error');
            return false;
        }

        if (input.type === 'email' && input.validity.typeMismatch) {
            arrayInputError[index].textContent = `Not a valid email address`;
            arrayInputError[index].classList.add('logo-error');
            return false;
        }

        if (input.type === 'tel' && input.validity.patternMismatch ) {
            arrayInputError[index].textContent = `Not a phone number`;
            arrayInputError[index].classList.add('logo-error');
            return false;
        }

        arrayInputError[index].textContent = '';
        arrayInputError[index].classList.remove('logo-error');
        return true;

    }  

    
    myForm.addEventListener('submit', (event) => {

        formInputs.forEach( (input, index) => {

            if (!validateInput(input, index)){
                event.preventDefault(); 
            }
            else{
                console.log('form submit');
                event.preventDefault(); 
            }

        });

    });


}



/* MAP */

if(document.querySelector('.locations')){


    const mapCanada = L.map('map-canada', { scrollWheelZoom: false }).setView([43.64397, -79.38190], 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapCanada);  


    const CanadaOffice = L.marker([43.64740, -79.38157]).addTo(mapCanada);

    CanadaOffice.bindTooltip(
        `<b>Designo Central Office</b><br>3886 Wellington Street`,
        {
            permanent: false,
            direction: 'top',
            offset: [0, -10]
        }
    );



    const mapAustralia = L.map('map-australia', { scrollWheelZoom: false }).setView([-27.6437, 153.0220], 9);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapAustralia); 

    const AustraliaOffice = L.marker([-27.6437, 153.0220]).addTo(mapAustralia);

    AustraliaOffice.bindTooltip(
        `<b>Designo AU Office</b><br>19 Balonne Street`,
        {
            permanent: false,
            direction: 'top',
            offset: [0, -10]
        }
    );



    const mapUK = L.map('map-UK', { scrollWheelZoom: false }).setView([51.5243, -0.1013], 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapUK); 

    const UKOffice = L.marker([51.5243, -0.1013]).addTo(mapUK);

    UKOffice.bindTooltip(
        `<b>Designo UK Office</b><br>13 Colorado Way`,
        {
            permanent: false,
            direction: 'top',
            offset: [0, -10]
        }
    );


    //map zoom

    [CanadaOffice, AustraliaOffice, UKOffice].forEach((item, index) => {

        item.on("click", () => {

            if(index === 0){
               mapCanada.setView(item.getLatLng(), 16);
            }

            if(index === 1){
               mapAustralia.setView(item.getLatLng(), 16);
            }

            if(index === 2){
               mapUK.setView(item.getLatLng(), 16);
            }
        
        })

    });




    if(window.innerWidth >= 768){

        const mapContainer = document.querySelectorAll('.image-map');
        const textOnMouseMove = document.querySelector(".text-mouse-map-hover");

        mapContainer.forEach( (map) => {

            map.addEventListener('mousemove', (event) => {

                textOnMouseMove.style.display = 'inline-block';
                textOnMouseMove.style.left = event.clientX + 'px';
                textOnMouseMove.style.top = event.clientY + 'px';

            });            

        });


        mapContainer.forEach( (map) => {

            map.addEventListener('mouseout', () => {
                textOnMouseMove.style.display = 'none';
            });

        });


        document.addEventListener('keydown', (event) => {

            if (event.key === 'Control') { 

                [mapCanada, mapAustralia, mapUK].forEach( (map) => {
                    map.scrollWheelZoom.enable();    
                });
        
            }

        });


        document.addEventListener('keyup', (event) => {

            if (event.key === 'Control') { 

                [mapCanada, mapAustralia, mapUK].forEach( (map) => {
                    map.scrollWheelZoom.disable();
                });

            }

        });


    }


}
