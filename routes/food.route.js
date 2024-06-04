import express from "express";
import * as foods from "../controllers/foods.controller";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
    let { id } = req.params;
    let data;

    if (id) {
        data = await foods.findOne(id);
    } else {
        data = await foods.findAll();
    }

    res.json(data);
});

router.post("/", async (req, res, next) => {
    let data = await foods.addOne(req.body);
    res.json(data);
});

router.put("/:id", async (req, res, next) => {
    let { id } = req.params;
    let data = await foods.updateOne(id, req.body);
    res.json(data);
});

router.delete("/:id", async (req, res, next) => {
    let { id } = req.params;
    let data = await foods.removeOne(id);
res.json(data);
});

export default router;