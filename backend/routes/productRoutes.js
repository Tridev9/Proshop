import express from 'express';
const router = express.Router();
import {getProducts, getProductById, createProduct,upadateProduct,deleteProduct,createProductReview,getTopProducts} from '../controllers/productController.js';
import {protect,admin} from '../middleware/authMiddleware.js'
import checkObjectId from '../middleware/checkObjectId.js'

router.route('/').get(getProducts).post(protect,admin,createProduct);

router.route('/:id/reviews').post(protect,checkObjectId,createProductReview);

router.route('/top').get(getTopProducts);

router.route('/:id').get(checkObjectId,getProductById).put(protect,admin,checkObjectId,upadateProduct).delete(protect,admin,checkObjectId,deleteProduct);



export default router;