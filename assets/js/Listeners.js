import Visual from "./Visual.js";
import Rendering from "./Rendering.js";
import DataHandler from "./DataHandler.js";
export default class Listeners {

    constructor() {
        this.selectedCountryID = 1;
        this.selectedElementsID = 1;
    }

    createAddCityBtnListener(addCityBtn, addCityPreviewWrapper, addCityFormWrapper) {
        addCityBtn.addEventListener('click', () => {
            // Add city preview gets hidden
            Visual.toggleVisuallyHidden(addCityPreviewWrapper);
            // Add city form appears
            Visual.toggleVisuallyObservable(addCityFormWrapper);
        });
    }

    createAddCityFormBtnListener(submitBtnForm, cityNameTextAreaForm, cityDescriptionTextAreaForm, citiesData, citiesContainerDiv) {
        submitBtnForm.addEventListener('click', (e) => {
            if (!DataHandler.addCity(citiesData, this.selectedCountryID, String(cityNameTextAreaForm.value), String(cityDescriptionTextAreaForm.value))) {
                Rendering.showAlert("City Not Added");
            } else {
                Rendering.renderCities(citiesContainerDiv, this.selectedCountryID, citiesData);
                DataHandler.pushToLocalStorage(citiesData);
            }
        });
    }

    createCancelBtnFormListener(cancelBtnForm, addCityPreviewWrapper, addCityFormWrapper) {
        cancelBtnForm.addEventListener('click', () => {
            // Add city form gets hidden
            Visual.toggleVisuallyHidden(addCityFormWrapper);
            // Add city preview appears
            Visual.toggleVisuallyObservable(addCityPreviewWrapper);
        });
    }

    createCountryDivListener(countriesItems, selectedCountryId, citiesData, citiesContainerDiv) {
        countriesItems.forEach((country, id) => {
            country.addEventListener('click', (e) => {
                selectedCountryId = id + 1;
                this.selectedCountryID = selectedCountryId;
                Rendering.clearCitiesFromDOM(citiesContainerDiv);
                Rendering.renderCities(citiesContainerDiv, selectedCountryId, citiesData);
            })
        });
    }

    createButtonEditListener(buttonEdit, citiesData, citiesContainerDiv) {
        buttonEdit.addEventListener('click', (event) => {
            // Find our text areas
            let cityNameTextarea = event.target.parentElement.parentElement.querySelector('.js-cities__item-label-country-name');
            let cityDescriptionTextarea = event.target.parentElement.parentElement.querySelector('.js-cities__item-description');

            // Find the element's id that we're about to edit
            this.selectedElementsID = DataHandler.getElementsID(citiesData,
                String(cityNameTextarea.value.replace(/(\r\n|\n|\r)/gm, "")), String(cityDescriptionTextarea.value.replace(/(\r\n|\n|\r)/gm, "")));
            console.log('this.selectedElementsId', this.selectedElementsID);
            let selectedElementsId = this.selectedElementsID;
            let selectedCountryId = this.selectedCountryID;

            // Enable editing
            cityNameTextarea.readOnly = false;
            cityDescriptionTextarea.readOnly = false;

            // Add event listener on enter pressed
            document.body.addEventListener('keyup', function (e) {
                if (e.keyCode === 13) {
                    console.log('clicked enter');
                    let newCityNameTextarea = event.target.parentElement.parentElement.querySelector('.js-cities__item-label-country-name');
                    let newCityDescriptionTextarea = event.target.parentElement.parentElement.querySelector('.js-cities__item-description');


                    DataHandler.updateElement(citiesData, selectedElementsId, String(newCityNameTextarea.value), String(newCityDescriptionTextarea.value));
                    Rendering.renderCities(citiesContainerDiv, selectedCountryId, citiesData);
                    DataHandler.pushToLocalStorage(citiesData);
                }
            });
        });
    }

    createButtonDeleteListener(buttonDelete, citiesData, citiesContainerDiv) {
        buttonDelete.addEventListener('click', (event) => {
            let cityNameTextarea = event.target.parentElement.parentElement.querySelector('.js-cities__item-label-country-name');
            let cityDescriptionTextarea = event.target.parentElement.parentElement.querySelector('.js-cities__item-description');
            this.selectedElementsID = DataHandler.getElementsID(citiesData, String(cityNameTextarea.value), String(cityDescriptionTextarea.value));
            DataHandler.deleteElement(citiesData, this.selectedElementsID);
            Rendering.renderCities(citiesContainerDiv, this.selectedCountryID, citiesData);
            DataHandler.pushToLocalStorage(citiesData);
        });
    }
}
