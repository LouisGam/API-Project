import express from "express";
import * as products from "../controllers/products.controller";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
    let { id } = req.params;
    let data;

    if (id) {
        data = await products.findOne(id);
    } else {
        data = await products.findAll();
    }

    res.json(data);
});

router.post("/", async (req, res, next) => {
    let data = await products.findAll();
    res.json(data);
});

router.put("/:id", async (req, res, next) => {
    let data = await products.findALL();
    res.json(data);
});

router.delete("/:id", async (req, res, next) => {
    let data = await products.dindAll();
res.json(data);
});

export default router;