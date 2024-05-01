import User from "../../models/User.js"

const findUserByEmailOrUserName = async (username, email) => {
  return await User.findOne({ $or: [{ username }, { email }] })
}

const createUser = async (data) => {
  return await User.create(data)
}
const userFindById = async (id) => {
  return User.findById(id)
}

export { findUserByEmailOrUserName, createUser, userFindById }