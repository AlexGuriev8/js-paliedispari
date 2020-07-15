// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola
// inserita è palindroma

 var parola = prompt('Inserisci una parola:');
 var stampa = palindroma(parola);


document.getElementById('stamp').innerHTML= stampa;

//function
function palindroma(string){
  var ris ="";
  var numeri = RegExp('[0-9]' );
  var carSpec = RegExp('[!@#$%^&*()+=,./{}|:<>?]');
  string = string.toUpperCase();
  for (var i =  string.length-1; i >= 0; i--) {
    ris += string[i];
  }
  if((numeri.test(string) == true) || (carSpec.test(string) == true) || (string == '') ||(string.length <2)){
    return 'Per questa volta ti perdono';
  } else if(ris == string){
    return "E' una parola palindroma";
  } else {
    return "Non è una parola palindroma";
  }
}
