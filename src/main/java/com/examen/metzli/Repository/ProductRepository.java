package com.examen.metzli.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examen.metzli.Entity.Product;

public interface ProductRepository  extends JpaRepository<Product, Long>{

}
