# Backend-Ecommerce
backend only
I'm really sorry if I just attach my backend only
This is backend only project because I got a lot of problem connect to frontend, because I am a self-taught programmer 
I did it as much as possible I can,

I will describe and explain the flow of project:
- for backend 
  1. I made registration form with javascript and use express JS for backend
  2. as you can see there is jwt authentication, bcrypt and other library on javascript and the folder name is "user"
  3. I made products form with C# because dotNET is easy to set and make entity and Type for both variable and function.
  4. I choose C# because it is more obvious for CRUD and (searching and pagination) than other framework for me.  I named C# file is "products"
  5. This "products" file means that if you want to post your product on ecommerce for public so that is the reason I made this backend
  6. I made getmapping for get all products and implements in frontend , actually there is a card which allow us to buy this product and on the other case you able to edit and delete that product
  7. and then the flow project is items, items means if you want buy a products you can write your name as "buyer"  and address as "address"
  8. I choose Springboot ( Java)
  9. and then in frontend I'm planning all backend can merge and I make a brochure for "product" and "items" that you have ordered product of ecommerce.    
 
- for frontend
   1. First I demonstrate for route Home the path "/" and if don't have account the Home will send <h1> you are not logged in <h1> and if they have login will            <h1> {props.name ? "Hello "+ props.name : " You are not logged in" }  <h1> 
   2. and I direct to login if they haven't login to Login the path "/login".
   3. if don't have account you have to reigster to Register the path "/register".
   4. after login is success, the web direct to Home and in the navbar provide "Market" path "/market" ("https://localhost:7142/api/products/get" method "GET" for backend)
   5. and provide many products , and there is "Add" Button to add products with ("https://localhost:7142/api/products/post" method "POST" for backend)
   6. to buy these products you can click "Buy" button to  buy it, and it will direct to Identity path "/identity" and show identity form for fill your biodata like name and address.
   7. and after that you can click "Submit" button direct to Brochure path "/brochure" ("http://localhost:8080/api/post) and direct to show the all brochure and order
     Name : ("http://localhost:8080/api/get") <h3> {props.buyer} <h3>
     Address : ("http://localhost:8080/api/get)
     Products : ("https://localhost:7142/api/products/get")
   8. Back to Home
