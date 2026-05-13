const restaurantRepository = require("../repositories/restaurantsRepo");//for json-fs version
const RestaurantSchema = require("../datas/restaurantSchema.js")//for mongodb

// const getAllRestaurants = () => {//service doesnot need req,res para as it wont deal with http commuication
//     return restaurantRepository.getAllRestaurants();
// }

const getAllRestaurants = async () => {
    return await RestaurantSchema.find();//no parameters will return all 
}

// const getRestaurantById = (id) => {
//     const restaurants = restaurantRepository.getAllRestaurants();
//     for (const restaurant of restaurants) {
//         if (restaurant.id == id) {
//             return restaurant;
//         }
//     }
//     // modern way alternative
//     // return restaurants.find(
//     // restaurant => restaurant.id == id
//     // );
// }

const getRestaurantById = async (id) => {
    return await RestaurantSchema.findById(id);
}

const filterRestaurant = async () => {
    // return await RestaurantSchema.find({
    //     $and: [{ stateId: { $gt: 1 } }, { name: "Cool Restaurant" }]//$gt means greater than//conjuction
    // }, { name: 1 });
    // return await RestaurantSchema.find({
    //     $or: [{ stateId: { $gt: 1 } }, { name: "Cool Restaurant" }]//disjunction
    // }, { name: 1 });
    return await RestaurantSchema.find().select(" -name");
}

// const saveRestaurants = (data) => {
//     const restaurants = restaurantRepository.getAllRestaurants();
//     const maxId = restaurants.reduce((max, restaurant) => restaurant.id > max ? restaurant.id : max, 0);
//     const newRestaurant = {
//         "id": maxId + 1,
//         ...data
//     }
//     restaurants.push(newRestaurant);
//     restaurantRepository.saveRestaurants(restaurants);
//     return newRestaurant;
// }
const saveRestaurants = async (data) => {
    const restaurant = new RestaurantSchema(data); // create instance of a mongo document with this data js obj,as mongodb wont store js objs
    return await restaurant.save();          // save to MongoDB
}

//for put and patch ,same logic
// const updateRestaurant = (id, data) => {
//     const restaurants = getAllRestaurants();
//     const oldRestaurant = restaurants.find(//if we use getRestaurantById method here both restaurants and oldRestaurant will be diff instances in memory adn only oldRestaurant will be updated so saving restaurants wont show the updates
//         restaurant => restaurant.id == id
//     );
//     for (const key in data) {
//         oldRestaurant[key] = data[key];//update in in mem only
//     }
//     restaurantRepository.saveRestaurants(restaurants);////update in json file from in mem
//     return oldRestaurant;
// }

//put
// const updateRestaurant = async (id, data) => {
//     return await RestaurantSchema.findByIdAndUpdate(id, data, { new: true });
// }

//patch
const updateRestaurant = async (id, data) => {
    return await RestaurantSchema.findByIdAndUpdate(id, { $set: data }, { new: true });
}

// const deleteRestaurant = (id) => {
//     const restaurants = restaurantRepository.getAllRestaurants();
//     const oldRestaurantIndex = restaurants.findIndex((restaurant) => restaurant.id == id);
//     console.log(oldRestaurantIndex);
//     const oldRestaurant = getRestaurantById(id);
//     if (oldRestaurantIndex != -1) restaurants.splice(oldRestaurantIndex, 1);//only delete in in mem
//     restaurantRepository.saveRestaurants(restaurants);
//     return oldRestaurant;
// }
const deleteRestaurant = async (id) => {
    return await RestaurantSchema.findByIdAndDelete(id);
}

module.exports = { getAllRestaurants, getRestaurantById, saveRestaurants, updateRestaurant, filterRestaurant, deleteRestaurant };
