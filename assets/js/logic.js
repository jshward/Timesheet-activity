
$(document).ready(function () {
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyAm86W1l6VdNdoltxfM7t2dPo5aI3fg7ac",
		authDomain: "timesheet-b52be.firebaseapp.com",
		databaseURL: "https://timesheet-b52be.firebaseio.com",
		projectId: "timesheet-b52be",
		storageBucket: "timesheet-b52be.appspot.com",
		messagingSenderId: "1005863832565"
	};
	firebase.initializeApp(config);

	var database = firebase.database()
	var name = "";
	var role = "";
	var startDate = "";
	var payRate = 0;

	$("#add-employee-btn").on("click", function (event) {
		event.preventDefault();

		// Grabbed values from text boxes
		name = $("#employee-name-input").val().trim();
		role = $("#role-input").val().trim();
		startDate = $("#start-input").val().trim();
		payRate = $("#rate-input").val().trim();

		// Code for handling the push
		database.ref().push({
			name: name,
			role: role,
			startDate: startDate,
			monthly: payRate,
			dateAdded: firebase.database.ServerValue.TIMESTAMP
		});

	});

	database.ref().on("child_added", function (childSnapshot) {
		console.log(childSnapshot.val().name);
		console.log(childSnapshot.val().role);
		console.log(childSnapshot.val().startDate);
		console.log(childSnapshot.val().monthly);
		var employeeTable = $("#employee-table");
		var tableRow = $("<tr>");
		var cellArray = [childSnapshot.val().name, childSnapshot.val().role, childSnapshot.val().startDate, "a Number", childSnapshot.val().monthly, "A Sum of Money"];
		console.log(cellArray);

		for (var i = 0; i < cellArray.length; i++) {
			var tableCell = $("<td>");
			tableCell.append(cellArray[i]);
			tableRow.append(tableCell)
			employeeTable.append(tableRow)





		};
	});
});