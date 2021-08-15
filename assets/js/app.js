import Binding  from "./Binding.js";
import Listeners from "./Listeners.js";
import Rendering from "./Rendering.js";
import DataHandler from "./DataHandler.js";

let citiesData = [{ "id": 1, "country_id": 1, "title": "London", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure reiciendis sed voluptatibus? Consequuntur, deleniti dolores error est, expedita, facilis incidunt iure nam obcaecati odio quidem quis saepe sed veritatis!" },
    { "id": 2, "country_id": 1, "title": "Liverpool", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure reiciendis sed voluptatibus? Consequuntur, deleniti dolores error est, expedita, facilis incidunt iure nam obcaecati odio quidem quis saepe sed veritatis!" },
    { "id": 3, "country_id": 2, "title": "Paris", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure reiciendis sed voluptatibus? Consequuntur, deleniti dolores error est, expedita, facilis incidunt iure nam obcaecati odio quidem quis saepe sed veritatis!" },
    { "id": 4, "country_id": 3, "title": "Madrid", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure reiciendis sed voluptatibus? Consequuntur, deleniti dolores error est, expedita, facilis incidunt iure nam obcaecati odio quidem quis saepe sed veritatis!" },
    { "id": 5, "country_id": 4, "title": "Berlin", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure reiciendis sed voluptatibus? Consequuntur, deleniti dolores error est, expedita, facilis incidunt iure nam obcaecati odio quidem quis saepe sed veritatis!" },
    { "id": 6, "country_id": 4, "title": "Munich", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure reiciendis sed voluptatibus? Consequuntur, deleniti dolores error est, expedita, facilis incidunt iure nam obcaecati odio quidem quis saepe sed veritatis!" },
    { "id": 7, "country_id": 4, "title": "Hamburg", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure reiciendis sed voluptatibus? Consequuntur, deleniti dolores error est, expedita, facilis incidunt iure nam obcaecati odio quidem quis saepe sed veritatis!" }];

// Main sections
//let countriesDiv = Binding.bindCountries();
let countriesItems = Binding.bindCountriesItems();
//let citiesDiv = Binding.bindCities();
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

let listeners = new Listeners();

// Retrieve data from local storage
if (DataHandler.retrieveFromLocalStorage() != null) {
    citiesData = DataHandler.retrieveFromLocalStorage();
}

// By default showing the first country in the list
Rendering.renderCities(citiesContainerDiv, 1, citiesData);

listeners.createAddCityBtnListener(addCityBtn, addCityPreviewWrapper, addCityFormWrapper);
listeners.createCancelBtnFormListener(cancelBtnForm, addCityPreviewWrapper, addCityFormWrapper);
listeners.createCountryDivListener(countriesItems, 1, citiesData, citiesContainerDiv);
listeners.createAddCityFormBtnListener(submitBtnForm, cityNameTextAreaForm, cityDescriptionTextAreaForm, citiesData, citiesContainerDiv);


