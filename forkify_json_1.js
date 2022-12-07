
    
     /*    let publisherMain="";
    json.recipes.forEach(function(value,index)
           {
           
             publisherMain+=(json.recipes.publisher[value]);
             console.log("hiii");
            document.querySelectorAll(".publisher").innerHTML=publisherMain;
             console.log(value,index);
     })*/
  var items=document.querySelector(".items");
  var publisher=document.querySelectorAll(".publisher");
  var title=document.querySelectorAll(".title");
  var image=document.querySelectorAll(".sidebar_image");
  // navigation buttons
  var previous_page_btn=document.querySelector(".previous_page_btn");
  var next_page_btn=document.querySelector(".next_page_btn");
  var previous=document.querySelector(".previous");
  var next=document.querySelector(".next");
  var pageNumber=0;
  var items_limit=10;
  var limit=Math.ceil(json.recipes.length/items_limit);

 //items.style.display="none";


       function change()
         {
          
          previous_page_btn.style.display="none";
        
           for(let value=0; value<items_limit;value++)
             //for(let value in json.recipes)
             {
               publisher[value].innerHTML=json.recipes[value].publisher;
               title[value].innerHTML=json.recipes[value].title;
               image[value].src=json.recipes[value].image_url;
               }             
              // next_page_btn.style.display="block";
               }
              change();
          function next_page(){
           pageNumber+=1;
              previous_page_btn.style.display="block";
                if(limit>pageNumber)
                 {
                  function secondPage()
                  {
                    if(pageNumber==limit)
                    {
                       previous_page_btn.style.display="none";
                   next.innerHTML=pageNumber+2;
                   previous.innerHTML=pageNumber;
                    for(let value=1;value<items_limit;value++)
                     {
                       publisher[value-1].innerHTML=json.recipes[(pageNumber*items_limit)+value].publisher;
                       title[value-1].innerHTML=json.recipes[(pageNumber*items_limit)+value].title;
                       image[value-1].src=json.recipes[(pageNumber*items_limit)+value].image_url;
                    }
                   
                 } secondPage();
               }
               
             }
         function previous_page(){
                pageNumber-=1;
                if(limit>pageNumber)
                {
                  next.innerHTML=pageNumber;
                  
                }
         }
         
         
         
         
         
         
         
         
         
