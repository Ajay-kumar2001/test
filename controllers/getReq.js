const porducts = require("../models/porducts");
let getreq = async (req, res) => {
  try {
    console.log("serch", req.query.searchItem);
    let searchItem = req.query.searchItem;
    //getting the data  from the data Base
    let allProducts = await porducts.find();
    //  checking  if data is present or not
    if (!allProducts.length) {
      res.status(404).json({ message: "data not found" });
    } else {
      //sending the data as response in  the form of json format
      if (req.query.searchItem) {
        let products = allProducts.filter(
          (item) =>
            item.product_name.includes(req.query.searchItem) ||item.product_disp.includes(req.query.searchItem)
            
        );
        console.log("pord", products);
        res.status(200).json(products);
      } else {
        res.status(200).json(allProducts);
      }
    }
  } catch (er) {
    res.send(er);
  }
};
module.exports = getreq;
