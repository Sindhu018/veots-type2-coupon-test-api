const couponModel = require("./couponModel");

const couponPost = async(req,res)=>{
    try{
        console.log(req.body)
        const {couponCount,...couponDetails} = req.body;
        let couponCodes = [];
        for(let i =0;i<couponCount;i++){
            const min = 10000; // Minimum value for the 5-digit number
            const max = 99999; // Maximum value for the 5-digit number

            // Generate a random number between min and max (inclusive)
            const couponCode = Math.floor(Math.random() * (max - min + 1) + min);
            couponCodes.push({
                ...couponDetails,
                couponCode
            })
        }
        const response = await couponModel.insertMany(couponCodes)

        return res.status(200).json({response})
    }catch(e){
        console.log(e)
        return res.status(500).json({"message":"Somethinh went wrong"})
    }

}

const getCouponOne =async(req,res)=>{
    try{
        const {couponCode,couponHeading,couponContent,logo,expiry,webLink,tc} = await couponModel.findOne({}).lean()

        let modifiedCoupon =
        {
            couponCode,
            "couponDetails":{
                couponHeading,
                couponContent
            },
            logo,
            expiry,
            tc,
            webLink

        }
        return res.status(200).json({"response":modifiedCoupon})
    }catch(e){
        console.log(e)
        return res.status(500).json({"message":"Something went wrong"})
    }
}
module.exports.couponPost = couponPost
module.exports.getCouponOne = getCouponOne;