

function calcNbChar(id) {
  document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length;
}




function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
 // Y mettre le code Javascript pour valider tous les champs du formulaire
//prompt("Bonjoue Saisissez les champs")

// const e1 = document.querySelector("#name");
//var x = document.getElementById("name");

//  x.querySelector(".container").innerHTML = "Hello World!";

   
    
function testDate (){
let msg;

let mtn = new Date ();

let m = new Date ( document.querySelector("#Date").value);

if (m > mtn){
  msg = false;
}else{
  msg= true;
}
return msg ;

}
function test(){
  let n= document.getElementById("name").value;
  let p = document.getElementById("Prénom").value;
  let a = document.getElementById("Adresse").value;
  let e = document.getElementById("email").value;
  let ma = document.getElementById("Date").value;

  var myModal = new bootstrap.Modal(document.getElementById("myModal"));
 
    

  
  
    
  
    
  if (n.length <= 5 || p.length <= 5 || a.length <= 5 || validateEmail(e) == false || testDate (ma) ==false) {
    document.querySelector(".modal-title").textContent = " Erreur formulaire";
    document.querySelector(".modal-body").innerHTML = "Tout les champs sont obligatoire";
    myModal.show();
  } else {
    
    contactStore.add(n,p,a,e,ma);
    contactStore.showList();

  document.querySelector("table tbody").innerHTML =
  document.querySelector("table tbody").innerHTML +
  `
  <tr>
  <td> ${n} </td>
  <td>${p} </tr>
  <td>${ma}</td>
  <td><a href='http://maps.google.com/maps?q=${a}</td>
  <td>< href='mailto:${e}</td>
  </tr> `;
// CODE à compléter pour insérer les autres données
  
   
  }
  


}