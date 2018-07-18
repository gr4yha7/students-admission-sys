print(db.createCollection("departments"), {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["name"],
			properties: {
				name: {
					bsonType: "string",
					description: "must be a string and is required"
				}
			}
		}
	}
})