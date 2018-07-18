print(db.createCollection("faculties", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["name", "departments"],
			properties: {
				name: {
					bsonType: "string",
					description: "must be a string and is required"
				},
				departments: {
					bsonType: "array",
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
			}
		}
	}
}))

print(db.faculties.insertMany(
	{
		name : "Allied Medical Sciences",
		departments : [
		{
			name : "Medical Laboratory Science"
		},
		{
			name : "Nursing Science"
		},
		{
			name : "Public Health"
		},
		{
			name : "Radiography & Radiological Science"
		}
		]
	},
	{
		name : "Arts",
		departments : [
		{
			name : "English & Literary Studies"
		},
		{
			name : "History & International Studies"
		},
		{
			name : "Modern Languages & Translation Studies"
		},
		{
			name : "Linguistics and Communication Studies"
		},
		{
			name : "Philosophy"
		},
		{
			name : "Mass Communication"
		},
		{
			name : "Religious & Cultural Studies"
		},
		{
			name : "Theatre & Media Studies"
		}
		]
	},
	{
		name : 'Biological Sciences',
		departments : [
		{
			name : 'Genetics & Biotechnology'
		},
		{
			name : 'Plant & Ecological Studies'
		},
		{
			name : 'Microbiology'
		},
		{
			name : 'Zoology & Environmental Biology'
		},
		{
			name : 'Science Laboratory Technology'
		}
		]
	},
	{
		name : 'Basic Medical Sciences',
		departments : [
		{
			name : 'Anatomy'
		},
		{
			name : 'Biochemistry'
		},
		{
			name : 'Physiology'
		},
		{
			name : 'Pharmacology'
		}
		]
	},
	{
		name : 'Physical Sciences',
		departments : [
		{
			name : 'Computer Science'
		},
		{
			name : 'Geology'
		},
		{
			name : 'Physics'
		},
		{
			name : 'Pure & Applied Chemistry'
		}
		{
			name : 'Mathematics'
		},
		{
			name : 'Statistics'
		}
		]
	},
	{
		name : 'Management Sciences',
		departments : [
		{
			name : 'Accounting'
		},
		{
			name : 'Banking & Finance'
		},
		{
			name : 'Business Management'
		},
		{
			name : 'Marketing'
		}
		]
	},
	{
		name : 'Medicine',
		departments : [
		{
			name : 'Internal Medicine'
		},
		{
			name : 'Surgery'
		},
		{
			name : 'Community Medicine'
		},
		{
			name : 'Fanily Medicine'
		},
		{
			name : 'Orthopaedics & Traumatology & Psychiatry'
		},
		{
			name : 'Padiatrics'
		},
		{
			name : 'Obstetrics & Gynaecology'
		},
		{
			name : 'Radiology'
		},
		{
			name : 'Otorhinolaryngology'
		},
		{
			name : 'Anaesthesiology'
		},
		{
			name : 'Ophthalmology'
		},
		{
			name : 'Haematology'
		},
		{
			name : 'Chemical Pathology'
		},
		{
			name : 'Pathology'
		},
		{
			name : 'Medical Microbiology & Parasitology'
		}
		]
	},
	{
		name : 'Law',
		departments : [
		{
			name : 'Private Law'
		},
		{
			name : 'Public and International Law'
		}
		]
	},
	{
		name : 'Oceanography',
		departments : [
		{
			name : 'Biological Oceanography'
		},
		{
			name : 'Physical Oceanography'
		},
		{
			name : 'Mariculture & Marine Fisheries Resources'
		}
		]
	},
	{
		name : 'Agriculture',
		departments : [
		{
			name : 'Crop Science'
		},
		{
			name : 'Soil Science'
		},
		{
			name : 'Forestry & Wildlife Resources'
		},
		{
			name : 'Fisheries & Aquatic Science'
		}
		]
	},
	{
		name : 'Dentistry',
		departments : [
		{
			name : 'Dentistry'
		}]
	},
	{
		name : 'Education',
		departments : [
		{
			name : 'Cont. Education/Dev. Studies'
		},
		{
			name : 'Environmental Education'
		},
		{
			name : 'Curriculum And Teaching'
		},
		{
			name : 'Educational Foundation'
		},
		{
			name : 'Edu. Admin. & Planning'
		},
		{
			name : 'Human Kinetics & Human Education'
		},
		{
			name : 'Guidance & Counselling'
		},
		{
			name : 'Library & Info. Science'
		},
		{
			name : 'Arts Education'
		},
		{
			name : 'Science Education'
		},
		{
			name : 'Social Science Education'
		},
		{
			name : 'Special Education'
		},
		{
			name : 'Vocational Education'
		}
		]
	},
	{
		name : 'Social Sciences',
		departments : [
		{
			name : 'Economics'
		},
		{
			name : 'Geography & Env. Science'
		},
		{
			name : 'Political Science'
		},
		{
			name : 'Sociology'
		},
		{
			name : 'Public Admin'
		},
		{
			name : 'Social Works'
		}
		]
	},
	{
		name : 'Pharmacy',
		departments : [
		{
			name : 'Pharmacy'
		}]
	},
	{
		name : 'Engineering',
		departments : [
		{
			name : 'Mechanical Engineering'
		},
		{
			name : 'Civil & Environmental Engineering'
		},
		{
			name : 'Electrical/Electronics Engineering'
		},
		]
	}
	

	
	
	
))