package com.productcatalogsystem.service;


import com.productcatalogsystem.entity.Product;
import com.productcatalogsystem.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;


    public Product addProduct(Product product){
       return productRepository.save(product);
    }

    public List<Product> displayAllProduct(){
        return productRepository.findAll();
    }
}
