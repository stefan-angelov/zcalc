function  handler(event, form) {
    event.preventDefault();
    var charts = {};
    charts.chart1 = "kphpppththkhkppkphktkkpthhhkhkkpttptpppkthkpptppkhtththkhtktttthkphkkhhhkthpkhkhhkkthtppphpkhpphkpppkkhhhtkpkhkpkhkttthhpphhhtpttptpkkkpptphpttthtpkphkphkhtkhhppphtkkkkktpkpkhkkkkhpkkphtpkphtthtkktppptktpkhkktktpktthkpkhhpkpkhkthktthhhphthkkpphkkhhpktttptptkkpkhttkhhpthkktkhpkhptkphhhptpphtphkphtkttktkhhhkppkpttppkhpphhkkhkpphtkhtkhtkppttpkphhhptkkppphhkpkktkptpkpppkppkhtkhhphhtkhppkthpptkpthtktkhhtkthppkkppkkttphtphkhpkktpkthptppkptkppthhpppthhppktkhtptkthppkphhhktkpkhhptppkhttphhktpkkptkhkhtkkhhphktkppkkhphhthkpppttkkkkhtpkptkthpkppthhppttptkhkkkktttthpppptpthpkphtkthtphtkpkkpkkhptttttptkphttpptkkkhpththhkpthhkthphthhhpptktthkkhhkkpkkptktphkpkhhpphtttkkttkhptptthkktpptpktpkhpphhthphpthktptkpptktpphhkkkkkkhtppkkkkhkhkkkkppktppthkkptpthpthtptkphktkhtthpkkhtpkptkkhthphkkhhhhphtptkhhphtkhkpthtkpkphhpkttkktpphkhkkhtpthtpphpthkphhkkpkkhphkhhpkhhhpphppthkkkhhthkkktppkkkthptphthhkphtktthkhkkhthhttpkthphpktthpthhhppphhkhtkkhhpptkhttphtkpkhttpthhhktttkkhkpkppkkthpkppttkpppkkhhpptkpthktpkhpktkhkkhpppkhhtppttptthtthtkhphhttpkhpptkhtkhtphhhkphhtkhhtpptkhkhtkkhkthkktkpkhtkthkkpphhhthkptkphkphhthtthkptptktppkttppphhphpppkptpktpkptkhthptptkptptptkhhhhhhhkkhpkphkhhthkhpkhtpppkhphthpkphhhppptkhtkkpttkkhkthtpkkhpthttpphhhpppkphhkthtttkhkhthkkpphhhthhpkkthhhhkkkkhttthpppkhphtphtktthtpkpkkpkpktkktthkphptkppkthptpthtkhkktkhthhtkhtpkpktppthkppphhhhpppphpppphhpkpkhpptpkhkkthtkhkkthpptptkhhtpppktptpkhhtthktptthttpphkpktphthkthktpktppkkhphtkptttkkkkpkptkptpktthtttpphktphthktppkptttpkkktttttttkpkhkpkhkhkppkphthkpkktkthpkppphkhpphhktkthptktpkkhppktthhtphppptkkkphthkpthhkpphtphhhptpkpthkphhttpthhhkkppkkkktthkkkphktppkhhtkkppthpkptphptktkhhpptkkkktkpkhhkpkkhthpktppthphpkthhhhhpppktktppkkkphtpttkppththphpppkhkptkthkhkkpkhphhtkktkppkhphpkppttkpptkkthhkpphpttphhhhkptkpkkphtpkkkhptthkkkkhttpktktthphthkhkhkkphhttppttpppthppkhtkkttpkkppphhttptpkkkkthppptkpkkkhhtpkhtphptphhpkpktptktphtptkhhhttkptthpptppphkkthhhtphptthphkpthkkththphtphpkkttkktktkkptkhpkhhthhhtkppkhtpkktpkkhpkkkktpkkhhpphthhtthttphpkpkphkphkpttpphtktkhhhhkkkthppkhktkpptthkppktktthkkphkttptphthhphtttttkhpphhthkpkpphkphppktttphkhkpkkpkkttpppkpthktpthptptthtkktttphphpkttphtptkphkhktkhktppkphthhthhtpphkhkkhhkkhtpkkpphhkhhphhkpkhkppkthtpkhktkhtktphtttpkhhtphtkkkthhptkhkthhktkkptptttthkphkkktptkkkthkkhkhhthtpptttkhppppktktpkptktkpkhtktpppkphhkptktpphtpktkkhpphhkhkthhkhhtphtktkkhptkhphpkthkhpppptphhpkkkpkhtkthhkkhkhhhhthhkt";

    charts.chart2 = "pkphkpppptpkkthttkttphpptthhttththpptkttkkpthkpkphttthphphpthhhhkhpptpphkkhpkptpktkhkphkttkpkpkhkthpthththhkpphhptpptkhtkthhtpkphkppkphhttppthhhkktkpttpkhpthtkttpphkphphkktkttthkkkhhtthtttthhkhhppphtktpkhtkphktkkhhkkhhttkkpkthphphtkkkpppkhpkpphthphttpkthtttptkkhktptphhppkpkpkhkhtpphhpphkkkhhkhttkpkkktthhkptphtpkkhktptttkphhkkpkppptpthpkktthppphktkkhphptpkhkhtpkhthkktktppkkkkkkhkthkhthphkptktkhpktthhkkttpktthphtktkttkkhpkkphhhtkhhpptpptthhptkpkhhkkptpkkhpktpktttkkhpkpktpptpkhthtptpptkhkptttkptpptptthhptpkpkkhktphphphkttkthttptppkpkkkhhttttktthhhhhpphkthkktpptkttpttpthhtkktpppkhhtphhkhtkphkhhhhthptkttthpkhktthpphtptptkthtkphpptptkkphkhhhtkkhhpktktkkhptppptkhhktkthphpphptptttphhkhkpkpkkhhthptphpkptkppktpppkphphphkphktkpkkpkkthhhpkpthkptththkpkktthkhkpphktphpptptptkthphtkttkkhhthkptphkhkthtktkptkkttkptthkpppppkkktkkkkpkhhkhtpppkhphpkthpkkttpkhphkhhkptthptphhtptkktktkptthtpphkthhkphkkptthhtkpkptpppppktpphptktkphththhkptkpktkhhkhpttktpkkphhtthhtkphhttkpphphhkktkpkhkhtkhthhhhppkhhpttppphttpttpktptkhkhhtkptkptphpkkthppthkptttptppkhpttphpkhtkpkktkpppkkttkpphtkkhttptkthhtkphkpkthkhthkppphkpthkktpkkkpkkpkhtppkpphktpkpkpphtktpktkhpphthttktpthkpphttpkhtthhhttkthpkppkkhhpkkhkthhkktkktkkhkhtkkttkhpptktkkphhkttktttphhkhkthkkppkhpthkkkthkkhhkthkphkhkttttkhhhhttkkkhkpthktpkhhtppkttpktpkkpptpkhpppkkhpthhpptkhkthkkkttthhkhkppkththpkkpthttpkkphhpphhkphhhpphpppktttktkkhpktkhktkthhttttktphhkkhkptphphpptkhhthttkhpkkhphtkpptttphpttphpktpkpkphtpkptphththttpkp";
    
    var inputString = form.input.value;
    console.log(inputString);


    var selectedTable = getRadioVal(form, "tables");
    var foundedString = searchCharts(inputString, charts, selectedTable);
    console.log(foundedString);
    var forDisplay = stringConvert(foundedString);

    var display = document.getElementById("output");

    displayResult(display, forDisplay);

    return false;
}

function getRadioVal(form, name) {
    var val;
    var radios = form.elements[name];
    for (var i = 0, len = radios.length; i < len; i++) {
        if ( radios[i].checked ) {
            val = radios[i].value;
            break;
        }
    }
    return val;
}

function searchCharts(searchInput, charts, radioValue) {
    var searchArg = searchInput.replace(/\s/g,'').toLowerCase();
    var searchResult = charts[radioValue].indexOf(searchArg);
    var returnStart = searchResult + searchArg.length;
    if (searchArg === "") {
        return "No match";    
    } else {
        if (searchResult === -1) {
            return "No match";
        }  else {
            return charts[radioValue].substring(returnStart, returnStart + 9 );
        }
    }
}

function stringConvert(str) {
    var output;
    if (str === "No match") {
        return str;
    } else {
        output = str.replace(/h|k/g,'1').replace(/t|p/g,'2');
    }

    if ( output[0] === '1') {
        output = output.replace('1','2');
    } else {
        output = output.replace('2','1');
    }
    return output;
}

function displayResult(element, result) {
    element.innerText = result;
}