import express from "express";
import foodRouter from './food.route';
const router = express.Router();

//Test route(can be removed if not needed)

router.get("/test", (req, res) => {
  res.send("working");
});


 
router.use('/nutrition', foodRouter);

export default router;
