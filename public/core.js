/*var $ = require('jQuery');

// $.ajax({
//     url: 'api.reimaginebanking.com/atms?key=bfb89f2b1bfd56ed997cf7e93471eaed',
//     success: function(results){
//         console.log(results)
//     }
// });
// // jQuery.get( "https://api.reimaginebanking.com/customers?key=bfb89f2b1bfd56ed997cf7e93471eaed");


/*var request = require('superagent');
request.get('http://api.reimaginebanking.com/accounts?key=bfb89f2b1bfd56ed997cf7e93471eaed').end(function(err, res){
    console.log(res.body[0]._id);
});*/

var customer_id;
var name;

function pickDortha(){
    /*var xhttp = new XMLHttpRequest();
    var url = "/setUser";
    var params = "";
    xhttp.open("POST", url, false);
        
    xhttp.setRequestHeader('Content-type', 'application/json');

    xhttp.onreadystatechange = function() {//Call a function when the state changes.
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            alert(xhttp.responseText);
        }
    }
    xhttp.send({user: 'Dortha'});*/
    window.location.href = "customer.html";
}

function getDortha(){

}

function pickRandal(){
    window.location.href = "customer.html";
    customer_id = "59e18456a73e4942cdafe19b";
    name = "Randal Schlutz";
}

function pickDarrel(){
    window.location.href = "customer.html";
    customer_id = "59e18455a73e4942cdafe19c";
    name = "Darrel Powlowski";
}



