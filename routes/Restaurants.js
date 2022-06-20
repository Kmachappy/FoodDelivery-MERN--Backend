const express = require('express');
const router = express.Router()
const Restaurant = require('../models/restaurants');
const RestaurantSeed = require('../models/restaurantSeed');


router.get('/',(req,res)=>{
    res.json({message: "You are home"})
})

router.get('/seed', async (req,res)=>{
    try {
        console.log("this is the seed")
        Restaurant.deleteMany({},(err,deleted)=>{
            Restaurant.create(RestaurantSeed,(err,created)=>{
                res.json(created)
            })
        })
    } catch (error) {
        res.json(error)
    }
}
)

router.get('/restaurants', async (req,res)=>{
    try {
        const restaurants = await Restaurant.find({})
        res.json(restaurants)
    } catch (error) {
        res.json(error)
    }
}
)

router.delete('/restaurants/:id', async (req,res)=>{
    try {
        const deleted = await Restaurant.findByIdAndDelete(req.params.id)
        res.json(deleted)
    } catch (error) {
        res.json(error)
    }
}
)

router.put('/restaurants/:id', async (req,res)=>{
    try {
        const updated = await Restaurant.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(updated)
    } catch (error) {
        res.json(error)
    }
}
)

router.post('/restaurants', async (req,res)=>{
    try {
        const created = await Restaurant.create(req.body)
        res.json(created)
    } catch (error) {
        res.json(error)
    }
}
)

router.get('/restaurants/:id', async (req,res)=>{
    try {
        const restaurant = await Restaurant.findById(req.params.id)
        res.json(restaurant)
    } catch (error) {
        res.json(error)
    }
}
)


module.exports = router