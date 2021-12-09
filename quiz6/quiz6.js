
/* Using MVC, do the next questions*/
/* 2- Create a product router that will receive all the requests 
      coming to the path (/products) */
      const getAllProduct = (req, res) => {
        res.send(proudcts);
      };
      
      
      
      
/* 3- Create an account router that will receive all the requests coming to the path (/account)*/

const getAccount = ("/account", (req, res) => {
        res.send(Account);
});


/* 4- the product router will have the following requests,paths and functions: 
        a) a POST request to the path (/add) that will run the function addProduct 
           that adds the product to the database  
        (assume the data is saved on mongoDB with an already made schema Products )
*/
const addNewProduct= (req, res) => {
        const addedproduct = {
                name: req.body.name,
               price: req.body.price,
              };
              proudect.push(addedproduct);
              res.status(201).send(addedproduct);
            };


/* 5- The account router will have the following requests, paths, functions:
        a) a GET request to the path (/) that call the function getInfo that 
           returns the information of the account (use params to find the account)
        
        (assume the data is saved on mongoDB with an already made schema Products )
*/

const express = require('express')
const saveproduct=(productName,productPrice)=>{
    const newProduct= new products({
        productName,
        productPrice,
    })
    newProduct.save()
   .then(res=>{console.log(res);
    })
    .catch(err=>{console.log(err);
    })
}
saveproduct("book",15)
