import moment from "moment";

export const passedTime =  (input) => {
    if (!input) return "";
    return moment(input).fromNow();
}


export const validURL = (str) => {
    const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!]))?/;
    if(!regex.test(str)) {
      return false;
    } else {
      return true;
    }
}