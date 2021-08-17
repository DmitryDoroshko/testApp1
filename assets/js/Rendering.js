import Listeners from "./Listeners.js";
import {allCountries} from "./Binding.js";
import DataHandler from "./DataHandler.js";

export default class Rendering {
    static removeActiveFromAllCountriesSelected() {
        allCountries.forEach(country => {
           if (country.classList.contains("active")) {
               country.classList.remove("active");
           }
        });
    }

    static renderSelectedCountryActive(selectedCountryId) {
        Rendering.removeActiveFromAllCountriesSelected();
        DataHandler.pushSelectedCountryToLocalStorage(selectedCountryId);
        allCountries.forEach(country => {
            if (country.dataset.id == selectedCountryId) {
                country.classList.add("active");
            }
        })
    }

    static createCityItemElement(cityName, cityDescription, citiesId, citiesContainerDiv, citiesData) {
        let cityItem = Rendering.getCityItem(citiesId);
        let cityItemInnerWrapper = Rendering.getCityItemInnerWrapper();
        let cityLabel = Rendering.getCityLabel();
        let cityNameTextArea = Rendering.getCityNameTextArea(cityName);
        let cityDescriptionTextArea = Rendering.getCityDescriptionTextArea(cityDescription);

        cityLabel.appendChild(cityNameTextArea);
        cityLabel.appendChild(cityDescriptionTextArea);
        cityItemInnerWrapper.appendChild(cityLabel);
        cityItem.appendChild(cityItemInnerWrapper);

        let buttonsDiv = Rendering.getButtonsDiv();
        let buttonEdit = Rendering.getButtonEdit();
        let buttonDelete = Rendering.getButtonDelete();

        let listeners = new Listeners();
        listeners.createButtonEditListener(buttonEdit, citiesData, citiesContainerDiv);
        listeners.createButtonDeleteListener(buttonDelete, citiesData, citiesContainerDiv);

        buttonsDiv.appendChild(buttonEdit);
        buttonsDiv.appendChild(buttonDelete);

        cityItem.appendChild(buttonsDiv);

        return cityItem;
    }

    static renderCities(citiesContainerDiv, selectedCountryId, citiesData) {
        // First we clear previous cities
        Rendering.clearCitiesFromDOM(citiesContainerDiv);
        // Second we render new cities to citiesContainerDiv
        citiesData.forEach((city, id) => {
            if (city['country_id'] === selectedCountryId) {
                let newCityElement = Rendering.createCityItemElement(city['title'], city['desc'], id, citiesContainerDiv, citiesData);
                citiesContainerDiv.append(newCityElement);
            }
        });

        // Finally we create event listeners for each city
        // or nah
    }

    static clearCitiesFromDOM(container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    static getCityItem(citiesId) {
        let cityItem = document.createElement('div');
        cityItem.classList.add('js-cities__item');
        cityItem.dataset.id = citiesId;
        return cityItem;
    }

    static getCityItemInnerWrapper() {
        let cityItemInnerWrapper = document.createElement('div');
        cityItemInnerWrapper.classList.add('js-cities__item-inner-wrapper');
        return cityItemInnerWrapper;
    }

    static getCityLabel() {
        let cityLabel = document.createElement('label');
        cityLabel.classList.add('js-cities__item-name-label');
        return cityLabel;
    }

    static getCityNameTextArea(cityName) {
        let cityNameTextArea = document.createElement('textarea');
        cityNameTextArea.classList.add('js-cities__item-label-country-name');
        cityNameTextArea.setAttribute('rows', '2');
        cityNameTextArea.setAttribute('cols', '33');
        cityNameTextArea.readOnly = true;
        cityNameTextArea.innerText = String(cityName);
        return cityNameTextArea;
    }

    static getCityDescriptionTextArea(cityDescription) {
        let cityDescriptionTextArea = document.createElement('textarea');
        cityDescriptionTextArea.classList.add('js-cities__item-description');
        cityDescriptionTextArea.setAttribute('rows', '5');
        cityDescriptionTextArea.setAttribute('cols', '33');
        cityDescriptionTextArea.readOnly = true;
        cityDescriptionTextArea.innerText = String(cityDescription);
        return cityDescriptionTextArea;
    }

    static getButtonsDiv() {
        let buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('js-cities__item-buttons');
        return buttonsDiv;
    }

    static getButtonEdit() {
        let buttonEdit = document.createElement('button');
        buttonEdit.setAttribute('type', 'button');
        buttonEdit.classList.add('js-cities__item-edit-btn');
        buttonEdit.classList.add('btn');
        buttonEdit.innerText = 'Edit';
        return buttonEdit;
    }

    static getButtonDelete() {
        let buttonDelete = document.createElement('button');
        buttonDelete.setAttribute('type', 'button');
        buttonDelete.classList.add('js-cities__item-delete-btn');
        buttonDelete.classList.add('btn');
        buttonDelete.innerText = 'Delete';
        return buttonDelete;
    }

    static showAlert(title) {
        alert(title);
    }
}