import ClassRoom from "./0-classroom.js";

function initializeRooms () {
	return [
		ClassRoom { _maxStudentsSize: 19 },
		ClassRoom { _maxStudentsSize: 20 },
		ClassRoom { _maxStudentsSize: 34 }
	];
}
