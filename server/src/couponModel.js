const mongoose = require("mongoose")

const couponCodesSchema = mongoose.Schema({
    couponCode:{
        type:String
    },
    couponHeading:{
        type:String
    },
    offerData:{
        type:String
    },
    couponContent:{
        type:String
    },
    logo:{
        type:String
    },
    expiry:{
        type:Date
    },
    webLink:{
        type:String
    },
    tc:{
        type:String
    }
})

module.exports = mongoose.model("couponCodesSchema",couponCodesSchema)