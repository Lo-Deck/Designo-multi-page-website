# Frontend Mentor - Designo agency website solution

This is a solution to the [Designo agency website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Your Message` fields are empty should show "Can't be empty"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"
- **Bonus**: View actual locations on the locations page maps (we recommend [Leaflet JS](https://leafletjs.com/) for this)

### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Designo-multi-page-website/blob/main/screenshot/Designo%20Agency%20Website%20Challenge%20-%20mobile%20-%20Home.png).
![screenshot mobile menu](https://github.com/Lo-Deck/Designo-multi-page-website/blob/main/screenshot/Designo%20Agency%20Website%20Challenge%20-%20mobile%20-%20Home%20-%20menu.png).
![screenshot tablet - web design](https://github.com/Lo-Deck/Designo-multi-page-website/blob/main/screenshot/Designo%20Agency%20Website%20Challenge%20-%20tablet%20-%20Web%20Design.png).
![screenshot desktop-home](https://github.com/Lo-Deck/Designo-multi-page-website/blob/main/screenshot/Designo%20Agency%20Website%20Challenge%20-%20desktop%20-%20Home.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Designo-multi-page-website).
- Live Site URL: [Website](https://lo-deck.github.io/Designo-multi-page-website/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

It was the biggest challenge I've ever done, good challenge with mutiple pages, I feel more confident with this kind of challenge, some validation form and display different map with Leafjet JS and openstreetmap.


```js
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

```

### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.
- [FreeCodeCamp](https://www.freecodecamp.org/) - I've been learning a lot.
- [Utopia](https://utopia.fyi/) - To have a better responsive design.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.

