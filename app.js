

var brandName = document.getElementById("brandName");
var productName = document.getElementById("productName");
var specifications = document.getElementById("specifications");
var searchValue = document.getElementById("searchValue");



var mobiles= {
        Samsung: {
            SamsungA10: {
                name: "Samsung A10",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "22,000 PKR"
            },
            SamsungA20: {
                name: "Samsung A20",
                ram: "4gb",
                rom: "64gb",
                camera: "18",
                price: "28,000"
            },
            SamsungA30: {
                name: "Samsung A30",
                ram: "4gb",
                rom: "64gb",
                camera: "25",
                price: "29,000"
            }
        },
        IPhone: {
            IPhone11: {
                name: "IPhone11",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "100,000"
            },
            IPhone12: {
                name: "IPhone12",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "150,000"
            },
            IPhone13: {
                name: "IPhone13",
                ram: "6gb",
                rom: "128gb",
                camera: "24",
                price: "200,000"
            }
        },
        Oppo: {
            OppoV20: {
                name: "OppoV20",
                ram: "8gb",
                rom: "128gb",
                camera: "64",
                price: "54,999"
            },
            OppoF19: {
                name: "OppoF19",
                ram: "6gb",
                rom: "128gb",
                camera: "48",
                price: "36,999"
            },
            OppoF11: {
                name: "OppoF11",
                ram: "4gb",
                rom: "64gb",
                camera: "48",
                price: "35,999"
            }
        },
        Vivo: {
            VivoY20: {
                name: "VivoY20",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "26,999"
            },
            VivoY21: {
                name: "VivoY21",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "43,999"
            },
            VivoY55: {
                name: "VivoY55",
                ram: "8gb",
                rom: "128gb",
                camera: "50",
                price: "64,999"
            }
        }
    }

//  function search(){
//     console.log(searchValue.value)
// }
// search();


// classwork**
// var company = "Samsung";
// var model = "SamsungA10";
// console.log(mobiles[company][model]); 





//render obj details**
function renderData(details) {
  brandName.innerText = details.name; //details. for obj data **
  productName.innerText = "RAM: " + details.ram + ", ROM: " + details.rom + ", Camera: " + details.camera;
  specifications.innerText = "Price: " + details.price;
}

function search() {
    var searchText = searchValue.value.toLowerCase();
    var foundData = null;
  //data found**
    for (var company in mobiles) {  //in sy properties of obj pr iteration**   //searching company** //var bh yhein decclare kia like var i=0 etc.**
      for (var model in mobiles[company]) { //searching model**
        if (model.toLowerCase().includes(searchText)) {
          foundData = mobiles[company][model];
          
          break; //inner loop pr break**
        }
      }

      if (foundData) {
        break; //outer break after finding data**
      }
    }
  //data not found**
    if (foundData) {
      renderData(foundData);
    } else {
      brandName.innerText = "No data found";
      productName.innerText = "";
      specifications.innerText = "";
    }
  }
  
  search();
  
