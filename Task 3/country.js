// in the program to print the country name region subregion and population.


const  req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
  const obj = JSON.parse(this.response);
  for(let ind = 0; ind < obj.length; ind++) {
      console.log(obj[ind].name);
      console.log(obj[ind].region);
      console.log(obj[ind].subregion);
      console.log(obj[ind].population);
  }
};