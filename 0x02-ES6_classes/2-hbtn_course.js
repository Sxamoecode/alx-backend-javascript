export default class HolbertonCourse {
	constructor (name, length, students) {
		this.name = name;
		this.length = length;
		this.students = students;
	}

	get name() {
		return this._name;
	};
	set name(value) {
		if (value !== String) {
			throw new TypeError("Name must be a string");
		}
		this._name = value;
	}

	get length() {
		return this._length;
	}
	set length(value) {
		if (value !== Number) {
			throw new TypeError("Length must be a number");
		}
		this._length = value;
	}
	
	set students(value) {
		if (!(value instanceof Array)) {
			throw new TypeError('Students must be an array of strings');
		}
		if (!value.every((student) => typeof student === 'string')) {
			throw new TypeError('Students must be an array of strings');
		}
		this._students = value;
	}
}
