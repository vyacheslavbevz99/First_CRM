"use strict";var express=require("express"),bodyParser=require("body-parser"),mongoose=require("mongoose"),cors=require("cors"),morgan=require("morgan"),authRoutes=require("./routes/auth"),analyticsRoutes=require("./routes/analytics"),categoryRoutes=require("./routes/category"),orderRoutes=require("./routes/order"),positionRoutes=require("./routes/position"),keys=require("./config/keys"),app=express();mongoose.connect(keys.mongoURL).then(function(){return console.log("MongoDB connected.")}).catch(function(e){return console.log(e)}),app.use(morgan("dev")),app.use(bodyParser.urlencoded({extended:!0})),app.use(bodyParser.json()),app.use(cors()),app.use("/api/auth",authRoutes),app.use("/api/analytics",analyticsRoutes),app.use("/api/category",categoryRoutes),app.use("/api/order",orderRoutes),app.use("/api/position",positionRoutes),module.exports=app;