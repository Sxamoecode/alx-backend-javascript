import ClassRoom from "./0-classroom.js";

/**
 * return an array of 3 ClassRoom objects
 * of sizes 19, 20, 34
 */
function initializeRooms () {
	return [19, 20, 34].map((size) => new ClassRoom(size));
}
