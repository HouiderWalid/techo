import stringHelpers from "./string-helpers";

export default {
    install(vue, options){
        Object.keys(stringHelpers).forEach(key => vue.filter(stringHelpers[key].name, stringHelpers[key].methode))
    }
}
