
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

});