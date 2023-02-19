const myStorage={ 
 car:{ 
 inside:{ 
 'glove box':'maps', 
 'passengerseat':'crumbs', 
 }, 
 outside:{ 
 trunk:'jack', 
  
 }, 
 }, 
  
 }; 
 function gloveBoxContents(){ 
 const gloveBoxContents=myStorage.car.inside['glove box']; 
 console.log(gloveBoxContents); 
 } 
 gloveBoxContents();