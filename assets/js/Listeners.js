import Visual from "./Visual.js";
import Rendering from "./Rendering.js";
export default class Listeners {

    static createAddCityBtnListener(addCityBtn, addCityPreviewWrapper, addCityFormWrapper) {
        addCityBtn.addEventListener('click', () => {
            // Add city preview gets hidden
            Visual.toggleVisuallyHidden(addCityPreviewWrapper);
            // Add city form appears
            Visual.toggleVisuallyObservable(addCityFormWrapper);
        });
    }

    static createCancelBtnFormListener(cancelBtnForm, addCityPreviewWrapper, addCityFormWrapper) {
        cancelBtnForm.addEventListener('click', () => {
            // Add city form gets hidden
            Visual.toggleVisuallyHidden(addCityFormWrapper);
            // Add city preview appears
            Visual.toggleVisuallyObservable(addCityPreviewWrapper);
        });
    }

    static createCountryDivListener(countriesItems, selectedCountryId, citiesData, citiesContainerDiv) {
        countriesItems.forEach((country, id) => {
            country.addEventListener('click', (e) => {
                // The id in Countries data is exactly 1 point higher than id in the array of div country__item's
                id++;
                selectedCountryId = id;
                console.log('selected ID', selectedCountryId);
                Rendering.clearCitiesFromDOM(citiesContainerDiv);
                Rendering.renderCities(citiesContainerDiv, selectedCountryId, citiesData);
            })
        });
    }

    static createButtonEditListener(buttonEdit) {

    }

    static createButtonDeleteListener(buttonDelete) {

    }
}