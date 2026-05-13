const express = require("express");
const app = express();

const restaurantRoutes = require("./routes/restaurantsRoute.js");//require doesnot load file,only exported value in that file,so router only requierd adn stored here

app.use(express.json());//middleware-converts the req body it get to js obj from json
app.use("/restaurants", restaurantRoutes)//not a middleware-route mounting(matching) happens here(like request mapping annotation to specific class )

module.exports = app;//exporting app obj 