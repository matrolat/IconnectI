import express from  'express';
import { addProducts, deleteProduct, getProductById, getProducts, updateProduct } from '../controller/product-controller.js';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' })


const router = express.Router();


router.get('/products', getProducts);
router.get('/getproduct/:id', getProductById);
router.post('/updateproducts/:id', upload.single('imageUrl'),  updateProduct);

router.post('/addproducts/', upload.single('imageUrl'), addProducts);
router.post('/deleteproducts/:id',deleteProduct);
// router.route("/deleteproducts/:id").delete(deleteProduct)

// router.post('/cart/add', addItemInCart);

// router.post('/payment', addPaymentGateway);
// router.post('/callback', paymentResponse);

export default router;