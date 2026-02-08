import User from "../models/User.js";

// CREATE
export const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

// READ
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// UPDATE
export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(user);
};

// DELETE
export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};
