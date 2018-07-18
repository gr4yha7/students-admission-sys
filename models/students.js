print(db.createCollection("students", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["photo", "name", "email", "regNo", 
			"faculty", "department", "admissionYear", "entryType", "degreeProgram", 
			"gender", "phone", "dob", "bloodGroup", "stateOfOrigin",
			"lga", "religion"],
			properties: {
				photo: {
					bsonType: "binary",
					description: "must be binary and is required"
				},
				name: {
					bsonType: "string",
					description: "must be a string and is required"
				},
				regNo: {
					bsonType: "string",
					description: "must be a string and is required"
				},
				faculty: {
					bsonType: "string",
					description: "must be a string and is required"
				},
				department: {
					bsonType: "string",
					description: "must be a string and is required"
				},
				admissionYear: {
					bsonType: "string",
					description: "must be a string and is required"
				},
				entryType: {
					bsonType: "string",
					description: "must be a string and is required"
				},
				degreeProgram: {
					bsonType: "string",
					description: "must be a string and is required"
				},
				dob: {
					bsonType: "date",
					description: "must be a date and is required"
				},
				bloodGroup: {
					bsonType: "string",
					description: "must be a string and is required"
				},
				stateOfOrigin: {
					bsonType: "string",
					description: "must be a string and is required"
				},
				lga: {
					bsonType: "string",
					description: "must be a string and is required"
				},			
				email: {
					bsonType: "string",
					pattern: "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.com$",
					description: "must be a string and is required"
				},
				phone: {
					bsonType: "int",
					pattern: "^[0][0-9]+{11}$",
					minLength: 11,
					maxLenght: 11,
					description: "must be a string and is required"
				},
				gender: {
					bsonType: "string",
					description: "must be a string and is required"
				},
				religion: {
					bsonType: "string",
					description: "must be a string and is required"
				}

			}
		}
	}
}))