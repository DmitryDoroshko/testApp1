export default class DataHandler {

    static addCity(citiesData, country_id, title, description) {

        if (!this.isTitleAndDescriptionValid(title, description)) {
            return false;
        }

        const newID = this.generateNewId(citiesData);
        let newCity = {
            "id": newID,
            "country_id": country_id,
            "title" : title,
            "desc" : description
        };

        citiesData.push(newCity); 
        return true;
    }

    static deleteElement(citiesData, id) {
        let targetIndex = -1;
        citiesData.forEach((city, index) => {
            if (city['id'] === id) {
                targetIndex = index;
            }
        });
        citiesData.splice(targetIndex, 1);
        console.log(citiesData);
    }

    static generateNewId(citiesData) {
        let newId = Math.floor(Math.random() * 10000);
        // Check if array already has the
        while (this.hasCoincidence(citiesData, newId)) {
            newId = Math.floor(Math.random() * 10000);
        }
        return newId;
    }

    static hasCoincidence(array, uniqueNum) {
        array.forEach(city => {
           if (city['id'] === uniqueNum) {
               return true;
           }
        });
        return false;
    }

    static updateElement(citiesData, elementsID, newCityName, newCityDescription) {
        citiesData.forEach(city => {
           if (city['id'] === elementsID) {
               city['title'] = newCityName;
               city['desc'] = newCityDescription;
           }
        });
    }

    static pushCitiesDataToLocalStorage(citiesData) {
        localStorage.setItem('cities-data', "" + JSON.stringify(citiesData));
    }

    static pushSelectedCityToLocalStorage(selectedCityId) {
        localStorage.setItem('selected-city-id', JSON.stringify(selectedCityId));
    }

    static pushSelectedCountryToLocalStorage(selectedCountryId) {
        localStorage.setItem('selected-country-id', JSON.stringify(selectedCountryId));
    }

    static retrieveCitiesFromLocalStorage() {
        let newArray = null;
        if (localStorage.getItem("cities-data") !== null) {
            newArray = JSON.parse(localStorage.getItem('cities-data'));
        }
        return newArray;
    }

    static retrieveSelectedCityIdFromLocalStorage() {
        let selectedCityId = null;
        if (localStorage.getItem("selected-city-id") !== null) {
            selectedCityId = JSON.parse(localStorage.getItem("selected-city-id"));
        }
        return selectedCityId;
    }

    static retrieveSelectedCountryIdFromLocalStorage() {
        let selectedCountryId = null;

        if (localStorage.getItem("selected-country-id") !== null) {
            selectedCountryId = JSON.parse(localStorage.getItem("selected-country-id"));
        }

        return selectedCountryId;
    }

    static isTitleAndDescriptionValid(title, description) {
        if (!this.isValidText(title)) {
            return false;
        }
        if (!this.isValidText(description)) {
            return false;
        }
        return true;
    }

    static isValidText(text) {
        if (text.trim() === "") {
            return false;
        }
        return true;
    }
}
