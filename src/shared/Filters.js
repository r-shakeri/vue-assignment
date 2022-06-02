import Vue from "vue"

Vue.filter("removeStr", (str, value) => {
    if (!value) return;
    return str.replace(value, "");
});
