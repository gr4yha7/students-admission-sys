print(db.createUser({
	user: "admin",
	pwd: "root",
	roles: ["readWrite", "dbAdmin"]
}))