import { createUser, findUserByEmailOrUserName, userFindById } from "../../lib/user/findUserByEmailOrUsername.js";
import User from "../../models/User.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiRespne } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const register = asyncHandler(async (req, res, next) => {
  const { username, email, password, fullname } = req.body
  if ([username, email, password, fullname].some(field => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required")
  }

  const existUser = await findUserByEmailOrUserName(username, email)
  if (existUser) {
    throw new ApiError(400, "UserAlready exist!!")
  }
  const user = await createUser({ username, email, password, fullname })
  const createdUser = await userFindById(user._id)
  if (!createdUser) {
    throw new ApiError(404, "Something went wrong when registering user!!")
  }
  const accessToken = createdUser.generateAccessToken()
  res.status(201).json(new ApiRespne(200, { accessToken }, "User successfully registed"))

})

export { register }