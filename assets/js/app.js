import { countriesData } from './countries-data.js';
import { citiesData } from './cities-data.js';
import Binding  from "./Binding.js";
import Listeners from "./Listeners.js";
import Rendering from "./Rendering.js";

// Main sections
let countriesDiv = Binding.bindCountries();
let countriesItems = Binding.bindCountriesItems();
console.log(countriesItems);
let citiesDiv = Binding.bindCities();
let citiesContainerDiv = Binding.bindCitiesContainerDiv();

// Add city preview elements
let addCityBtn = Binding.bindAddCityButton();
let addCityPreviewWrapper = Binding.bindCityPreviewWrapper();

// Add city form elements
let addCityFormWrapper = Binding.bindCityFormWrapper();
let cancelBtnForm = Binding.bindCancelBtnForm();
let cityNameTextAreaForm = Binding.bindCityNameTextAreaForm();
let cityDescriptionTextAreaForm = Binding.bindCityDescriptionTextAreaForm();
let submitBtnForm = Binding.bindSubmitBtnForm();

let selectedCountryId = 1;

submitBtnForm.addEventListener('click', () => {
    console.log(cityNameTextAreaForm.value);
    console.log(cityDescriptionTextAreaForm.value);
});

// By default showing the first country in the list
Rendering.renderCities(citiesContainerDiv, selectedCountryId, citiesData);

Listeners.createAddCityBtnListener(addCityBtn, addCityPreviewWrapper, addCityFormWrapper);
Listeners.createCancelBtnFormListener(cancelBtnForm, addCityPreviewWrapper, addCityFormWrapper);
Listeners.createCountryDivListener(countriesItems, selectedCountryId, citiesData, citiesContainerDiv);


