var json1 = [{ "Name" : "Alfreds Futterkiste", "City" : "Berlin", "Country" : "Germany" }, { "Name" : "Berglunds snabbköp", "City" : "Luleå", "Country" : "Sweden" }, { "Name" : "Centro comercial Moctezuma", "City" : "México D.F.", "Country" : "Mexico" }, { "Name" : "Ernst Handel", "City" : "Graz", "Country" : "Austria" }, { "Name" : "FISSA Fabrica Inter. Salchichas S.A.", "City" : "Madrid", "Country" : "Spain" }, { "Name" : "Galería del gastrónomo", "City" : "Barcelona", "Country" : "Spain" }, { "Name" : "Island Trading", "City" : "Cowes", "Country" : "UK" }, { "Name" : "Königlich Essen", "City" : "Brandenburg", "Country" : "Germany" }, { "Name" : "Laughing Bacchus Wine Cellars", "City" : "Vancouver", "Country" : "Canada" }, { "Name" : "Magazzini Alimentari Riuniti", "City" : "Bergamo", "Country" : "Italy" }, { "Name" : "North/South", "City" : "London", "Country" : "UK" }, { "Name" : "Paris spécialités", "City" : "Paris", "Country" : "France" }, { "Name" : "Rattlesnake Canyon Grocery", "City" : "Albuquerque", "Country" : "USA" }, { "Name" : "Simons bistro", "City" : "København", "Country" : "Denmark" }, { "Name" : "The Big Cheese", "City" : "Portland", "Country" : "USA" }, { "Name" : "Vaffeljernet", "City" : "Århus", "Country" : "Denmark" }, { "Name" : "Wolski Zajazd", "City" : "Warszawa", "Country" : "Poland" }];

//JSON.parse(json1);
console.log(json1[0]);
//alert(json1.Name);

//json2 = [];
json1.sort(function(a,b){
    return a.Country.toLowerCase().localeCompare(b.Country.toLowerCase());
});
function agregar(){
    var table = document.getElementById("mitabla");
    
    //var datos = document.getElementsByTagName("input");
    for(let i=0;i<json1.length;i++){
        var fila = document.createElement("tr");
        var celdaName = document.createElement("td");
        var textoCeldaName = document.createTextNode(json1[i].Name);
        celdaName.appendChild(textoCeldaName);
        fila.appendChild(celdaName);
        
        var celdaCity = document.createElement("td");
        var textoCeldaCity = document.createTextNode(json1[i].City);
        celdaCity.appendChild(textoCeldaCity);
        fila.appendChild(celdaCity);
        
        var celdaCountry = document.createElement("td");
        var textoCeldaCountry = document.createTextNode(json1[i].Country);
        celdaCountry.appendChild(textoCeldaCountry);
        fila.appendChild(celdaCountry);
        table.appendChild(fila);
    }
  

    
};
agregar();