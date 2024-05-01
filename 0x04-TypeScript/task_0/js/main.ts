interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Annacletter",
	lastName: "Tatenda",
	age: 35,
	location: "Cape town"
};

const student2: Student = {
        firstName: "Cletter",
        lastName: "Manon",
        age: 40,
        location: "Harare"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "blue";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

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
