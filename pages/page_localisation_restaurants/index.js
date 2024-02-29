function distanceRestoDepuisVilleDeDepart (value){
// variable où je récupère la valeur de l'option
var villeSelectionnee = value
var distanceLyonVersAutreVille = 0;
switch (villeSelectionnee) {
    case "Berlin":
    distanceLyonVersAutreVille = 1248
    break;
    case "Lille":
    distanceLyonVersAutreVille = 691
    break;
    case "Madrid":
    distanceLyonVersAutreVille = 1223
    break;
    case "Marseille":
    distanceLyonVersAutreVille = 315
    break;
    case "Rennes":
    distanceLyonVersAutreVille = 770
    break;
    case "Tokyo":
    distanceLyonVersAutreVille = 9931
    break;
    case "Toulouse":
    distanceLyonVersAutreVille = 468
    break;
}


var distancesTexte = document.querySelectorAll('tbody')

for(var i=0;i<distancesTexte.length;i++){
    distancesTexte[i].querySelector('input').value = 0
    var dText = distancesTexte[i].innerText
    var distance = dText.match(/[-+]?(\d*\.?\d+)/g)
    if (distance[0]<distanceLyonVersAutreVille && 
        distance[1]>distanceLyonVersAutreVille){
            var inputValue = distancesTexte[i].querySelector('input').value = 1
        }
}
}
// console.log (distanceRestoDepuisVilleDeDepart("Marseille"));

// var distanceTexte = document.querySelectorAll("Entre 1 et 20 km", "Entre 21 et 50 km","Entre 51 et 100 km","Entre 101 et 500 km","Entre 501 et 1 000 km","Entre 1 001 et 2 000 km","Entre 2 001 et 20 000 km")
// for(var i=0;i<distanceText.length ; i++) {
// var texte = "Entre 1 et 20 km"
// var distance = texte.match(/[-+]?(\d*\.?\d+)/g)
// if(distance[0]<distanceLyonVersAutreVille
// &&
// distance[1]>distanceLyonVersAutreVille)
// input = 1
// } else {
//     input=0
// }
// var distanceTexte = document.querySelectorAll("Entre 1 et 20 km", "Entre 21 et 50 km","Entre 51 et 100 km","Entre 101 et 500 km","Entre 501 et 1 000 km","Entre 1 001 et 2 000 km","Entre 2 001 et 20 000 km")
// for(var i=0;i<distanceText.length ; i++) {
// var texte = "Entre 21 et 50 km"
// var distance = test.match(/[-+]?(\d*\.?\d+)/g)
// if(distance[0]<distanceLyonVersAutreVille
// &&
// distance[1]>distanceLyonVersAutreVille)
// input = 1
// } else {
//     input=0
// }

// var distanceTexte = document.querySelectorAll("Entre 1 et 20 km", "Entre 21 et 50 km","Entre 51 et 100 km","Entre 101 et 500 km","Entre 501 et 1 000 km","Entre 1 001 et 2 000 km","Entre 2 001 et 20 000 km")
// for(var i=0;i<distanceText.length ; i++) {
// var texte = "Entre 51 et 100 km"
// var distance = test.match(/[-+]?(\d*\.?\d+)/g)
// if(distance[0]<distanceLyonVersAutreVille
// &&
// distance[1]>distanceLyonVersAutreVille)
// input = 1
// }else {
//     input=0
// }

// var distanceTexte = document.querySelectorAll("Entre 1 et 20 km", "Entre 21 et 50 km","Entre 51 et 100 km","Entre 101 et 500 km","Entre 501 et 1 000 km","Entre 1 001 et 2 000 km","Entre 2 001 et 20 000 km")
// for(var i=0;i<distanceText.length ; i++) {
// var texte = "Entre 101 et 500 km"
// var distance = test.match(/[-+]?(\d*\.?\d+)/g)
// if(distance[0]<distanceLyonVersAutreVille
// &&
// distance[1]>distanceLyonVersAutreVille)
// input = 1
// }else {
//     input=0
// }
// var distanceTexte = document.querySelectorAll("Entre 1 et 20 km", "Entre 21 et 50 km","Entre 51 et 100 km","Entre 101 et 500 km","Entre 501 et 1 000 km","Entre 1 001 et 2 000 km","Entre 2 001 et 20 000 km")
// for(var i=0;i<distanceText.length ; i++) {
// var texte = "Entre 501 et 1000 km"
// var distance = test.match(/[-+]?(\d*\.?\d+)/g)
// if(distance[0]<distanceLyonVersAutreVille
// &&
// distance[1]>distanceLyonVersAutreVille)
// input = 1
// }else {
//     input=0
// }
// var distanceTexte = document.querySelectorAll("Entre 1 et 20 km", "Entre 21 et 50 km","Entre 51 et 100 km","Entre 101 et 500 km","Entre 501 et 1 000 km","Entre 1 001 et 2 000 km","Entre 2 001 et 20 000 km")
// for(var i=0;i<distanceText.length ; i++) {
// var texte = "Entre 1001 et 2000 km"
// var distance = test.match(/[-+]?(\d*\.?\d+)/g)
// if(distance[0]<distanceLyonVersAutreVille
// &&
// distance[1]>distanceLyonVersAutreVille)
// input = 1
// }else {
//     input=0
// }
// var distanceTexte = document.querySelectorAll("Entre 1 et 20 km", "Entre 21 et 50 km","Entre 51 et 100 km","Entre 101 et 500 km","Entre 501 et 1 000 km","Entre 1 001 et 2 000 km","Entre 2 001 et 20 000 km")
// for(var i=0;i<distanceText.length ; i++) {
// var texte = "Entre 2001 et 20000 km"
// var distance = test.match(/[-+]?(\d*\.?\d+)/g)
// if(distance[0]<distanceLyonVersAutreVille
// &&
// distance[1]>distanceLyonVersAutreVille)
// input = 1
// }else {
//     input=0
// }


