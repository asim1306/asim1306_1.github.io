const calculate = () => {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  let category = "";
  let height_m = parseFloat(height)/100;
  let weight_kg = parseFloat(weight);
  let bmi = (weight_kg/(height_m*height_m)).toFixed(2);
  if(bmi <= 18.4){
    category = "Underweight";
  }
  else if(bmi >= 18.5 && bmi <= 24.9){
    category = "Normal";
  }
  else{
    category = "Overweight";
  }
  if(height == "" || weight == ""){
    alert("Please Enter data!");
  }
  else{
    document.querySelector("#showdata").innerHTML = 
    ` Your BMI is ${bmi} and you are ${category}. `;
  }
};