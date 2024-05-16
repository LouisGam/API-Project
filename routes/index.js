import express from "express";
import userRouter from  './users.route';  //Assuming users.route.js is in the same directory
import productsRouter from './products.route';
const router = express.Router();

//Test route(can be removed if not needed)

router.get("/test", (req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"
router.use('/users', userRouter);
 
router.use('/products', productsRouter);

export default router;
