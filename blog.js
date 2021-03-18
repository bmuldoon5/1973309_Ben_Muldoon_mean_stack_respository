var blogData = []; //need an array to store all the blogs
// clientName - title
//projectName - articles
// Budget - add image
function addInfo(){
    var title = document.getElementById("title").value;
    var article = document.getElementById("article").value;
    var image = document.getElementById("image").value;
    console.log(clientName)
    console.log(projectName);
    console.log(budget);
    document.getElementById("title").innerHTML=title;
    document.getElementById("article").innerHTML=article;
    document.getElementById("image").innerHTML= image;
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
    console.log(obj[0]);
    console.log(obj.length);
    for (i = 0; i <= obj.length; i++); {
        console.log(obj[i]);
        var formData= obj[i];
        console.log(formData);
        formData.title=document.getElementById("title").value;
        formData.article = document.getElementById("article").value;
        formData.image = document.getElementById("image").value;

        insertNewRecords(formData);

    }
}
var totalBudget=0;
function onFormSubmit() {
    var formData = readData();
    insertNewRecords(formData);
    resetForm();
    empData.push(formData);  
    console.log(empData)
}
function readData() {
    var formData={};
    formData.title=document.getElementById("title").value;
    formData.article = document.getElementById("article").value;
    formData.image = document.getElementById("image").value;
    return formData;
}
function insertNewRecords(formData) {
    var table = document.getElementById("details");
    var tableBody = table.getElementsByTagName("tbody")[0];
    var newRow = tableBody.insertRow(tableBody.length);
    var cell1 = newRow.insertCell(0); 
    cell1.innerHTML=formData.title;
    var cell2 =newRow.insertCell(1);
    cell2.innerHTML= formData.article;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML=formData.image
    tableBody.insertRow(tableBody.length);
    //var cell4 = newRow.insertCell(0);
    tableBody.insertRow(tableBody.length);
    
    //cell4.innerHTML = "<hr></hr>" 
 
}
function deleteRec(data){
    var row = data.parentElement.parentElement;
    document.getElementById("details").deleteRow(row.rowIndex);
}
function resetForm() {
    document.getElementById("title").value="";
    document.getElementById("article").value="";
    document.getElementById("image").value="";
}

//getting information back after refresh
window.onload = function(){
    var obj = JSON.parse(sessionStorage.getItem("empInfo"));

}

