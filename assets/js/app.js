// importing countries and cities data
import { countriesData } from './countries-data.js';
import { citiesData } from './cities-data.js';

// Main sections
let countriesDiv = bindCountries();
let citiesDiv = bindCities();

// Add city preview elements
let addCityBtn = bindAddCityButton();
let addCityPreviewWrapper = bindCityPreviewWrapper();

// Add city form elements
let addCityFormWrapper = bindCityFormWrapper();
let cancelBtnForm = bindCancelBtnForm();

// By default showing the first country in the list
renderCities(citiesDiv, 1, citiesData);

createAddCityBtnListener(addCityBtn, addCityPreviewWrapper, addCityFormWrapper);
createCancelBtnFormListener(cancelBtnForm, addCityPreviewWrapper, addCityFormWrapper);

function bindCities(countryId) {
    return document.querySelector('.js-cities');
}

function bindCountries() {
    return document.querySelector('.js-countries');
}

function bindAddCityButton() {
    return document.querySelector('.js-cities__item-add-btn');
}

function bindCityPreviewWrapper() {
    return document.querySelector('.js-cities__item-add-btn-wrapper');
}

function bindCityFormWrapper() {
    return document.querySelector('.js-cities__item-add-city-info');
}

function bindCancelBtnForm() {
    return document.querySelector('.js-cities__item-add-city-cancel-btn');
}

function toggleVisuallyHidden(item) {
    item.classList.add('visually-hidden');
}

function toggleVisuallyObservable(item) {
    item.classList.remove('visually-hidden');
}

function createAddCityBtnListener(addCityBtn, addCityPreviewWrapper, addCityFormWrapper) {
    addCityBtn.addEventListener('click', () => {
        // Add city preview gets hidden
        toggleVisuallyHidden(addCityPreviewWrapper);
        // Add city form appears
        toggleVisuallyObservable(addCityFormWrapper);
    });
}

function createCancelBtnFormListener(cancelBtnForm, addCityPreviewWrapper, addCityFormWrapper) {
    cancelBtnForm.addEventListener('click', () => {
       // Add city form gets hidden
       toggleVisuallyHidden(addCityFormWrapper);
       // Add city preview appears
        toggleVisuallyObservable(addCityPreviewWrapper);
    });
}

function createCityItemElement() {

}

function renderCities(citiesDiv, countryId, citiesData) {

}

function clearCitiesFromDOM() {

}