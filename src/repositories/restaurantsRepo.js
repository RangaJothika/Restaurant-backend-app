//for json-fs version alone
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../datas/restaurantsModel.json");//to get absolute path as it is easy to be used from anywhere


const getAllRestaurants = () => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

const saveRestaurants = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));//value,replacer(controller),space(indentation)=args
    return data;
}

module.exports = { getAllRestaurants, saveRestaurants };