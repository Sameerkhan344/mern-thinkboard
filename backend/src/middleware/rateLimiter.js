import ratelimit from "../config/upstash.js";



const rateLimiter = async (req, res, next) => {
    // if we pass ` {userid} or ip address ` on the place of "my-rate-limit" so that limit for working on individual per user
    try {
        const { success } = await ratelimit.limit("my-rate-limit");
        if (!success) {
            res.status(429).json({ message: "Too many requests, please try again later" })
        }
        next();
    } catch (error) {
        console.log("Rate limit error", error);
        next(error);
    }
}
export default rateLimiter;