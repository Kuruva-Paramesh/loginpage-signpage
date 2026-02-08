import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json("Back-end working perfectly 🚀");
});

// ❌ NO app.listen()
// ✅ Export app for Vercel
export default app;
