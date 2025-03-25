package com.examen.metzli.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Product {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 private String name;
 private Long categoryId;
 private int stock;

 // Getters y Setters
 public Long getId() {
     return id;
 }

 public void setId(Long id) {
     this.id = id;
 }

 public String getName() {
     return name;
 }

 public void setName(String name) {
     this.name = name;
 }

 public Long getCategoryId() {
     return categoryId;
 }

 public void setCategoryId(Long categoryId) {
     this.categoryId = categoryId;
 }

 public int getStock() {
     return stock;
 }

 public void setStock(int stock) {
     this.stock = stock;
 }
}

