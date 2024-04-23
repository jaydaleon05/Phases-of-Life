const ageCalculation = () => {
    let age = Number(document.querySelector("#ageInput").value)
    if(age >= 0 && age <= 7){ 
        alert("Early Childhood");
    }else if(age >= 8 && age <= 12){ 
        alert("Childhood");
    }else if(age >= 13 && age <= 16){
        alert("Early Teenager");
    }else if(age >= 17 && age <= 19){
        alert("Late Teenager");
    }else if(age >= 20 && age <= 35){
        alert("Early Adolescence");
    }else if(age >= 36 && age <= 60){
        alert("Adolescencence");
    }else{
        alert("Elderly");
    }
}