'use strict';

angular.module('myApp.view2', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])

  .controller('View2Ctrl', [function () {

  }]);

// (function () {
//   let objInput = document.getElementById('wrapper');
//   if (objInput) {
//     objInput.addEventListener('change', function (event) {
//       var elem = event.target;
//       console.log(elem.name);
//       console.log(elem.tagName);
//       console.log(elem.type);
//       if (elem.name === "myText") {
//         console.log(elem.value);
//       }
//     });
//   }
// });
var arrParam = [];
function myFun(_this, id) {
  console.log(_this.value + " > > > " + id);

  // if (arrParam.some(person => person.id === id)) {
  //   console.log("Object found inside the array.");
  //   arrParam.push({ id: id, val: param });
  // } else {
  //   console.log("Object not found.");
  //   arrParam.push({ id: id, val: param });

  // }

  const index = arrParam.findIndex((e) => e.id === id);
  //Condition > Check value is number
  if (!isNaN(parseInt(_this.value))) {

    //Checking value is exist or not
    if (index === -1) {
      arrParam.push({ id: id, val: _this.value });
    } else {
      arrParam[index].val = _this.value;
    }
    _this.classList.remove("err");


  } else {
    console.log("not valid input >>> ", _this.classList);
    _this.classList.add("err");
    if (index > -1) { arrParam.splice(index, 1) }
  }

  console.log(arrParam);
}


function fnGetChangeInputValue() {
  // var getAllInput = document.getElementById('wrapper').getElementsByTagName("input");
  // console.log(getAllInput);
  // for(var i = getAllInput.length-1; i>=0; i--)
  //   {
  //       var elInput = getAllInput[i];  

  //       console.log(elInput.value);
  //   }

  var inputs = document.querySelectorAll("#wrapper input[name='myText']");
  for (var i = 0; i < inputs.length; i += 1) {

    let _value = inputs[i].value;
    let _dataVal = inputs[i].getAttribute("data-val");
    if (parseInt(_value) != parseInt(_dataVal)) {
      console.log(_value, ' | ', _dataVal);
    }
  }

}