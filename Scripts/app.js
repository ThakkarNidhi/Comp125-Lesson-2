
(function(){
    "use strict";
    
    
    var paraElements = [];
    
    paraElements[0] = document.getElementById("para1");
    paraElements[1] = document.getElementById("para2");
    paraElements[2] = document.getElementById("para3");
    
    var paragraphs = [];
    
    paragraphs[0] = "Our age is known as the age of Information Technology. Information Technology with its superhighway has not only revolutionised man’s way of working but also his very existence. IT (Information Technology) revolution is sweeping our civilization bringing about unfathomable changes in our present-day civilization. Twenty first century belongs to the IT world";
    paragraphs[1] = "The term ‘Information Technology’ or simply known as IT is a generic name given to all improvements that are taking place in our world due to the inter-linked advancement in technology, learning, and information. The term refers to recent technological developments that are taking place in our world as a result of better technology, due to better information.";
    paragraphs[2] = "It consists of a number of allied modern advancements such as, computer, Internet, websites, surfing, E-mail, E-commerce. E-governance, Video- conference, cellular phones, paging, fax machines, smart cards, credit cards, ATM cards etc. All these have been possible due to the advancement in information gathering technique or system which is known as ‘Information Superhighway’ which, like a highway, opens us to a world of technology and information full of immense possibilities.";
    
    for (var i = 0; i < paraElements.length; i++) {
        if(paraElements[i]) {
         paraElements[i].textContent = paragraphs[i];
        }
    }
    
    
})();