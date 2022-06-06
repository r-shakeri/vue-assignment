import Vue from "vue";

export const removeStr = (str, value) => {
    if (!value) return;
    return str.replace(value, "");
}

Vue.filter("removeStr", removeStr);
