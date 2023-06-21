const express = require("express")
const router = express.Router()
const couponController = require("./couponController")

router.post("/post-coupons",couponController.couponPost)
router.get("/get-coupon-one",couponController.getCouponOne)
module.exports = router;