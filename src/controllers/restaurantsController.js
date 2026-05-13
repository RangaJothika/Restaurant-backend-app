const { getAllRestaurants } = require("../repositories/restaurantsRepo.js");
const service = require("../services/restaurantsService.js");

// const getRestaurants = (req, res) => {
//     const restaurants = service.getAllRestaurants();
//     res.json(restaurants);//js obj to json and send it in reposnse
// }

const getRestaurants = async (req, res) => {
    const restaurants = await service.getAllRestaurants();
    res.json(restaurants);//js obj to json and send it in reposnse
}

// const getRestaurantById = (req, res) => {
//     const id = req.params.id;
//     const restaurant = service.getRestaurantById(id);
//     res.json(restaurant);
// }

const getRestaurantById = async (req, res) => {
    const id = req.params.id;
    const restaurant = await service.getRestaurantById(id);
    res.json(restaurant);
}

const filterRestaurant = async (req, res) => {
    const restaurant = await service.filterRestaurant();
    res.json(restaurant);
}

// const saveRestaurants = (req, res) => {
//     const result = service.saveRestaurants(req.body);
//     res.json(result);
// }
const saveRestaurants = async (req, res) => {
    const result = await service.saveRestaurants(req.body);
    res.json(result);
}


const updateRestaurant = async (req, res) => {
    const id = req.params.id;//get id path variable
    const result = await service.updateRestaurant(id, req.body);
    res.json(result);
}

const deleteRestaurant = async (req, res) => {
    const id = req.params.id;
    const result = await service.deleteRestaurant(id);
    res.json(result);
}

module.exports = { getRestaurants, getRestaurantById, saveRestaurants, updateRestaurant, filterRestaurant, deleteRestaurant };//as we export more ,we use obj here







