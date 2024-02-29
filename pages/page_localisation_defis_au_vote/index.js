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