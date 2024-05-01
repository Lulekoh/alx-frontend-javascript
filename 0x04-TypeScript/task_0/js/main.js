var student1 = {
    firstName: "Annacletter",
    lastName: "Tatenda",
    age: 35,
    location: "Cape town"
};
var student2 = {
    firstName: "Cletter",
    lastName: "Manon",
    age: 40,
    location: "Harare"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = "blue";
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "5px blue";
    locationCell.style.border = "5px blue";
    nameCell.style.padding = "10px";
    locationCell.style.padding = "10px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);
