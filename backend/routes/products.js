//In this Routes slash products.js I will write all the routes for the product resource.

import express from "express";
import {
  deleteProduct,
  getProductDetails,
  getProducts,
  newProduct,
  updateProduct,
} from "../controllers/productControllers.js";

const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(newProduct);

router.route("/products/:id").get(getProductDetails);
router.route("/products/:id").put(updateProduct);
router.route("/products/:id").delete(deleteProduct);
export default router;
