import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  //get user details from frontend
  //validation - not empty
  //check if user already exists :username and email
  //check for images,check for avatar
  //upload them to cloudinary,avatar
  //create user object - create entry in DB
  //remove password and refresh token field from response
  //check for user creation
  //return res or send error

  const { fullName, email, userName, password } = req.body;
  console.log("email: ", email);
});

export { registerUser };
