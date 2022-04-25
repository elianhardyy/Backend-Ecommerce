package com.example.backend.entities;



import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;

@Entity
@Table(name = "items")
public class Items {


    @Id
    
    public int Id;
    
    public String Buyer;
    
    public String Address;
    public Items(){}
    public Items(int id, String buyer, String address) {
        Id = id;
        Buyer = buyer;
        Address = address;
    }
    public int getId() {
        return Id;
    }
    public void setId(int id) {
        Id = id;
    }
    public String getBuyer() {
        return Buyer;
    }
    public void setBuyer(String buyer) {
        Buyer = buyer;
    }
    public String getAddress() {
        return Address;
    }
    public void setAddress(String address) {
        Address = address;
    }

    

}


