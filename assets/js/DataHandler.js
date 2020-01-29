export default class DataHandler {

    static addCity(citiesData, country_id, title, description) {
        const newID = this.generateNewId(citiesData);
        let newCity = {
            "id": newID,
            "country_id": country_id,
            "title" : title,
            "desc" : description
        };
        citiesData.push(newCity);
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

    static getElementsID(citiesData, cityName, cityDescription) {
        let citiesId = -1;
        citiesData.forEach(city => {
            console.log('cityDescription', cityDescription);
            console.log('city.desc', city['desc']);
            console.log(city);
           if (city['title'].replace(/(\r\n|\n|\r)/gm, "") === cityName && city['desc'].replace(/(\r\n|\n|\r)/gm, "") === cityDescription) {
               citiesId = city['id'];
               return citiesId;
           }
        });
        return citiesId;
    }

    static updateElement(citiesData, elementsID, newCityName, newCityDescription) {
        citiesData.forEach(city => {
           if (city['id'] === elementsID) {
               city['title'] = newCityName;
               city['desc'] = newCityDescription;
           }
        });
    }

    static pushToLocalStorage(citiesData) {
        localStorage.setItem('cities-data', JSON.stringify(citiesData));
    }

    static retrieveFromLocalStorage() {
        let newArray = null;
        if (localStorage.getItem("cities-data") !== null) {
            newArray = JSON.parse(localStorage.getItem('cities-data'));
        }
        return newArray;
    }
}