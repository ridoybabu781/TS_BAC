import cloudinary from "cloudinary";
const cloud = cloudinary.v2;
import { configDotenv } from "dotenv";
configDotenv();

const { CNAME, CAPI_KEY, CAPI_SECRET } = process.env;

if (!CNAME || !CAPI_KEY || !CAPI_SECRET) {
  throw new Error("Missing required Cloudinary environment variables.");
}

cloud.config({
  cname: CNAME,
  api_key: CAPI_KEY,
  api_secret: CAPI_SECRET,
});

export default cloud;
