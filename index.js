
let tbody = document.getElementById("tbody");
let tbody1 = document.getElementById("tbody1");


if (tbody) {
//  fetch function
fetch("http://localhost:3000/news")
 .then(res=> res.json())
 .then(json=>{
    json.map(data =>{
       
        console.log(data);
        tbody.append(td_fun(data));
  });
});
} else {
    console.error("The tbody element was not found in the HTML document.");
  }
    

  if (tbody1) {
    //  fetch function
    fetch("http://localhost:3000/latestnews")
     .then(res=> res.json())
     .then(json=>{
        json.map(data =>{
           
            console.log(data);
            tbody1.append(td_fun1(data));
      });
    });
    } else {
        console.error("The tbody element was not found in the HTML document.");
      }
  
    
  function td_fun({title,description,heading}) {
    let td= document.createElement("tr")
    
    td.innerHTML=`
    
      <td class=" mx-4 d-flex>
      
        <div class="col-md-10 mx-2 d-flex " id="second">
         
          <div class=" mx-4 d-flex  ">
            <div class="width">
            
              <h5 class="text-secondary"> ${title}</h5>
              <h6>${description}</h6>
            </div>
          </div>
        </div>
      </td>`;
      return td;
  }


  function td_fun1({title,description}) {
    let td= document.createElement("tr")
    td.innerHTML=`
      <td>
        <div class="container col-md-2 letest " id="second">
          <div class="STORIES p-4 mt-2 ">
          <h6 class="mx-2 text-secondary"></h6>
            
            <div>
              <h6>${title} <br><span class="text-secondary">${description}</span></h6>
            </div>
            <br>
           
  
          </div>
        </div>
      </td>
      `;
    return td;
  }
   
 