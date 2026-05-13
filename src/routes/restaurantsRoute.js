const express = require("express");
const router = express.Router();//roter obj

const restaurantController = require("../controllers/restaurantsController.js");

router.get("/", restaurantController.getRestaurants);//getmapping to specific method
router.get("/filter", restaurantController.filterRestaurant);//it has to be above /:id as when controller checks from top it finds thsi first for filter or it will find /:id for filter and consider id="filter"
router.get("/:id", restaurantController.getRestaurantById);
router.post("/", restaurantController.saveRestaurants);
router.put("/:id", restaurantController.updateRestaurant);//:id is dynamic varaible
router.patch("/:id", restaurantController.updateRestaurant);
router.delete("/:id", restaurantController.deleteRestaurant);


module.exports = router;
