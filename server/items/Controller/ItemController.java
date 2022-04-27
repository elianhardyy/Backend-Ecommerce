package com.example.backend.Controller;

import java.util.List;

import com.example.backend.entities.Items;
import com.example.backend.services.ItemService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping(value="/api")
@CrossOrigin
public class ItemController {
    @Autowired ItemService itemservice;

    @GetMapping("/items")
    public List<Items> getItem(){
        return itemservice.getItems();
    }
    @PostMapping("/itemposting")
    public Items saveItem(@RequestBody Items item){
        return itemservice.createItems(item);
    }
    @PutMapping("/itemediting")
    public Items putItem(@RequestBody Items item){
        return itemservice.editItems(item);
    }
    @DeleteMapping("/{id}")
    public Integer deleteItem(@PathVariable int id){
        return itemservice.delItems(id);
    }
}
