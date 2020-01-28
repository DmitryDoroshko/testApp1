import Listeners from "./Listeners.js";

export default class Rendering {
    static createCityItemElement(cityName, cityDescription, citiesId) {
        let cityItem = document.createElement('div');
        cityItem.classList.add('js-cities__item');
        // Wrapper
        let cityItemInnerWrapper = document.createElement('div');
        cityItemInnerWrapper.classList.add('js-cities__item-inner-wrapper');
        // Label
        let cityLabel = document.createElement('label');
        cityLabel.classList.add('js-cities__item-name-label');

        // City Name Textarea
        let cityNameTextArea = document.createElement('textarea');
        cityNameTextArea.classList.add('js-cities__item-label-country-name');
        cityNameTextArea.setAttribute('rows', '2');
        cityNameTextArea.setAttribute('cols', '33');
        cityNameTextArea.readOnly = true;
        cityNameTextArea.innerText = String(cityName);

        // City description textarea
        let cityDescriptionTextArea = document.createElement('textarea');
        cityDescriptionTextArea.classList.add('js-cities__item-description');
        cityDescriptionTextArea.setAttribute('rows', '5');
        cityDescriptionTextArea.setAttribute('cols', '33');
        cityDescriptionTextArea.readOnly = true;
        cityDescriptionTextArea.innerText = String(cityDescription);

        cityLabel.appendChild(cityNameTextArea);
        cityLabel.appendChild(cityDescriptionTextArea);

        cityItemInnerWrapper.appendChild(cityLabel);

        cityItem.appendChild(cityItemInnerWrapper);
        // Buttons div
        let buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('js-cities__item-buttons');

        // Button edit
        let buttonEdit = document.createElement('button');
        buttonEdit.setAttribute('type', 'button');
        buttonEdit.classList.add('js-cities__item-edit-btn');
        buttonEdit.classList.add('btn');
        buttonEdit.innerText = 'Edit';

        // Button delete
        let buttonDelete = document.createElement('button');
        buttonDelete.setAttribute('type', 'button');
        buttonDelete.classList.add('js-cities__item-delete-btn');
        buttonDelete.classList.add('btn');
        buttonDelete.innerText = 'Delete';

        // TODO: Add event listeners to buttons

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
                let newCityElement = Rendering.createCityItemElement(city['title'], city['desc'], id);
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
}