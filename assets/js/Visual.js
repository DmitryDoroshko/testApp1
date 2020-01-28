export default class Visual {
    static toggleVisuallyHidden(item) {
        item.classList.add('visually-hidden');
    }

    static toggleVisuallyObservable(item) {
        item.classList.remove('visually-hidden');
    }
}