import Product from '../model/productSchema.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    }catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const getProductById = async (request, response) => {
    try {
        const products = await Product.findById(request.params.id);
        console.log("server prod:");
        console.log(products);
        response.json(products);
    }catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const addProducts = async (request, response) => {
    try {
        console.log("prod");
        const prod = request;
        console.log(prod.body);
        const title = prod.body.title;
        const price = prod.body.price;
        const description = prod.body.description;
        const imageUrl = prod.file.path
        const newProd = new Product({ title:title,price:price,description:description,imageUrl:imageUrl});
        const success = await newProd.save();
            response.status(200).json({ mesage: prod });
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}


//delete product

export const deleteProduct = async(request,res,next)=>{
    const product = await Product.findById(request.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    await product.remove();
    res.status(200).json({
        success:true,
        message:"product deleted succesfully"
    })
}

//update product -- admin

export const updateProduct = async (request, res, next) => {
    let product = await Product.findById(request.params.id);
    console.log("update");
    if (!product) {
      return res.status(500).json({
        successs: false,
        message: "Product not found",
      });
    }


    const prod = request;
    console.log(prod.body);
    const title = prod.body.title;
    const price = prod.body.price;
    const description = prod.body.description;
    if(!prod.file)
    {
        product = await Product.findByIdAndUpdate(request.params.id, { title:title,price:price,description:description,imageUrl:product.imageUrl}, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
          });
          res.status(200).json({
            success: true,
            product,
          });
          return;
    }
  

        const imageUrl = prod.file.path
        const newProd = new Product({ title:title,price:price,description:description,imageUrl:imageUrl});

    

    product = await Product.findByIdAndUpdate(request.params.id, { title:title,price:price,description:description,imageUrl:imageUrl}, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
  
    res.status(200).json({
      success: true,
      product,
    });
  };