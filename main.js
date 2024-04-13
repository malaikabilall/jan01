"use strict";
//fetch promise return krta ha
//required Api
//async and await is short method then fetch
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let url = "https://jsonplaceholder.typicode.com/posts/1";
fetch;
let fetchData = fetch(url)
    .then((res) => (res.json()))
    .then(data => console.log(data))
    .catch(err => console.log(err));
console.log(fetchData);
// async and await
let func = () => __awaiter(void 0, void 0, void 0, function* () {
    let fetchData = yield fetch(url);
    let res = yield fetchData.json();
    console.log(res);
    return res;
});
func();
//try catch
//syncronasily(line by line)
//asyncronasily
//error handling
console.log("start");
function f1() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let fetchData = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
            let res = yield fetchData.json();
            console.log(res);
        }
        catch (error) {
            console.log("Error in Api");
        }
    });
}
f1();
console.log("end");
