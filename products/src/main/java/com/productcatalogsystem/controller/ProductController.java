package com.productcatalogsystem.controller;

import com.productcatalogsystem.entity.Product;
import com.productcatalogsystem.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import  java.util.List;
@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public Product addProduct(@RequestBody Product product){
       return productService.addProduct(product);
    }

    @GetMapping
    public List<Product> displayAllProduct(){
        return productService.displayAllProduct();
    }
}
