package com.example.backend.Repository;

import com.example.backend.entities.Items;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface ItemsRepository extends JpaRepository<Items,Integer> {
    
}
