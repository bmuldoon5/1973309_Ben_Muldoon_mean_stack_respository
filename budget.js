function addInfo(){
    var clientName = document.getElementById("ClientName").value;
    var projectName = document.getElementById("ProjectName").value;
    var budget = document.getElementById("Budget").value;
    console.log(clientName)
    console.log(projectName);
    console.log(budget);
    document.getElementById("ClientName").innerHTML=title;
    document.getElementById("ProjectName").innerHTML=desc;
    document.getElementById("Budget").innerHTML= budget;
}

var empData=[];
function storeInSession() {
   // localStorage.setItem("empInfo",JSON.stringify(empData));
   
   sessionStorage.setItem("empInfo",JSON.stringify(empData));
}
function retrieveFromSession() {
    //var obj = JSON.parse(localStorage.getItem("empInfo"));
    var obj = JSON.parse(sessionStorage.getItem("empInfo"));
    console.log(obj);
}
var totalBudget=0;
function onFormSubmit() {
    var formData = readData();
    insertNewRecords(formData);
    resetForm();
    empData.push(formData);  
    console.log(empData)
}
function calcBudget(){
    var totalBudget=0;
    
    for(i in empData){
        var newBudget = parseInt(empData[i].budget);
        totalBudget= totalBudget+ newBudget;
    }

    document.getElementById("budget1").innerText=totalBudget;
    return totalBudget;
}
function readData() {
    var formData={};
    formData.clientName=document.getElementById("ClientName").value;
    formData.projectName = document.getElementById("ProjectName").value;
    formData.budget = document.getElementById("Budget").value;
    return formData;
}
function insertNewRecords(formData) {
    var table = document.getElementById("details");
    var tableBody = table.getElementsByTagName("tbody")[0];
    var newRow = tableBody.insertRow(tableBody.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML=formData.clientName;
    var cell2 =newRow.insertCell(1);
    cell2.innerHTML= formData.projectName;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML=formData.budget
 
}
function deleteRec(data){
    var row = data.parentElement.parentElement;
    document.getElementById("details").deleteRow(row.rowIndex);
}
var data;
function updateRec(data){
    this.data = data;
    var row = data.parentElement.parentElement;
    var cells = row.getElementsByTagName("td");
    var name = cells[0].innerHTML;
    var age =  cells[1].innerHTML;
    document.getElementById("ClientName").value=clientName;
    document.getElementById("ProjectName").value=projectName; 
    document.getElementById("Budget").value=budget;
}
function resetForm() {
    document.getElementById("ClientName").value="";
    document.getElementById("ProjectName").value="";
    document.getElementById("Budget").value="";
}