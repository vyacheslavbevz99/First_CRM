"use strict";var express=require("express"),controller=require("../controllers/analytics"),router=express.Router();router.get("/overwiew",controller.overview),router.get("/analytics",controller.analytics),module.exports=router;