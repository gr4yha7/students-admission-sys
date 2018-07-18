print(db.createCollection("accounts", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["name", "email", "password", "phone", "gender"],
			properties: {
				name: {
					bsonType: "string",
					description: "must be a string and is required"
				},
				email: {
					bsonType: "string",
					pattern: "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.com$",
					description: "must be a string and is required"
				},
				password: {
					bsonType: "string",
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
			}
		}
	}
}))