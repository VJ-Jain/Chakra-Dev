const contextMenuMethod = (event) => {
    event.preventDefault();
};

window.disableCopy = window.disableCopy || function() {
    document.addEventListener('contextmenu', contextMenuMethod);
    document.onselectstart = function () {
        return false;
    };
}

window.enableCopy = window.enableCopy || function() {
    document.removeEventListener('contextmenu', contextMenuMethod);
    document.onselectstart = function () {
        return true;
    };
}