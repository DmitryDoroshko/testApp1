export default class Binding {
    static bindCities(countryId) {
        return document.querySelector('.js-cities');
    }

    static bindCountries() {
        return document.querySelectorAll('.js-countries__item');
    }

    static bindCountriesItems() {
        return document.querySelectorAll('.js-countries__item');
    }

    static bindAddCityButton() {
        return document.querySelector('.js-cities__item-add-btn');
    }

    static bindCityPreviewWrapper() {
        return document.querySelector('.js-cities__item-add-btn-wrapper');
    }

    static bindCityFormWrapper() {
        return document.querySelector('.js-cities__item-add-city-info');
    }

    static bindCancelBtnForm() {
        return document.querySelector('.js-cities__item-add-city-cancel-btn');
    }

    static bindCityNameTextAreaForm() {
        return document.querySelector('.js-cities__item-add-city-info-city-name');
    }

    static bindCityDescriptionTextAreaForm() {
        return document.querySelector('.js-cities__item-add-city-info-city-description');
    }

    static bindSubmitBtnForm() {
        return document.querySelector('.js-cities__item-add-city-btn');
    }

    static bindCitiesContainerDiv() {
        return document.querySelector('.js-cities-itself');
    }

    static bindCitiesOfSpan() {
        return document.querySelector(".js-cities-of__header");
    }
}

export let allCountries = Binding.bindCountries();