package com.example.backend.services;

import java.util.List;

import com.example.backend.Repository.ItemsRepository;
import com.example.backend.entities.Items;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemService {
    @Autowired ItemsRepository itemRepo;
    public ItemService(){}
    
    public List<Items> getItems(){
        return itemRepo.findAll();
    }

    public Items createItems(Items item){
        return itemRepo.save(item);
    }
    
    public Items editItems(Items item){
        Items olditem = itemRepo.findById((item.getId()).orElse(null); 
        olditem.setBuyer(item.getBuyer());
        olditem.setAddress(item.getAddress());
        itemRepo.save(olditem);
        return olditem;
    }
    public Integer delItems(int id){
        itemRepo.deleteById(id);
        return id;
    }
    
}
