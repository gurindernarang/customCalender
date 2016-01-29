/*global cordova, module*/

module.exports = {
    greet: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "PLUGIN by gurinder", "greet", [name]);
    }
};
