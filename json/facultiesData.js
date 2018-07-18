$(document).ready(function () {
	var faculties = [
	{
		"name" : "Allied Medical Sciences",
		"id" : 1,
		"departments" : [
		{
			"name" : "Medical Laboratory Science"
		},
		{
			"name" : "Nursing Science"
		},
		{
			"name" : "Public Health"
		},
		{
			"name" : "Radiography & Radiological Science"
		}
		]
	},
	{
		"name" : "Arts",
		"id" : 2,
		"departments" : [
		{
			"name" : "English & Literary Studies"
		},
		{
			"name" : "History & International Studies"
		},
		{
			"name" : "Modern Languages & Translation Studies"
		},
		{
			"name" : "Linguistics and Communication Studies"
		},
		{
			"name" : "Philosophy"
		},
		{
			"name" : "Mass Communication"
		},
		{
			"name" : "Religious & Cultural Studies"
		},
		{
			"name" : "Theatre & Media Studies"
		}
		]
	},
	{
		"name" : 'Biological Sciences',
		"id" : 3,
		"departments" : [
		{
			"name" : 'Genetics & Biotechnology'
		},
		{
			"name" : 'Plant & Ecological Studies'
		},
		{
			"name" : 'Microbiology'
		},
		{
			"name" : 'Zoology & Environmental Biology'
		},
		{
			"name" : 'Science Laboratory Technology'
		}
		]
	},
	{
		"name" : 'Basic Medical Sciences',
		"id" : 4,
		"departments" : [
		{
			"name" : 'Anatomy'
		},
		{
			"name" : 'Biochemistry'
		},
		{
			"name" : 'Physiology'
		},
		{
			"name" : 'Pharmacology'
		}
		]
	},
	{
		"name" : 'Physical Sciences',
		"id" : 5,
		"departments" : [
		{
			"name" : 'Computer Science'
		},
		{
			"name" : 'Geology'
		},
		{
			"name" : 'Physics'
		},
		{
			"name" : 'Pure & Applied Chemistry'
		},
		{
			"name" : 'Mathematics'
		},
		{
			"name" : 'Statistics'
		}
		]
	},
	{
		"name" : 'Management Sciences',
		"id" : 6,
		"departments" : [
		{
			"name" : 'Accounting'
		},
		{
			"name" : 'Banking & Finance'
		},
		{
			"name" : 'Business Management'
		},
		{
			"name" : 'Marketing'
		}
		]
	},
	{
		"name" : 'Medicine',
		"id" : 7,
		"departments" : [
		{
			"name" : 'Internal Medicine'
		},
		{
			"name" : 'Surgery'
		},
		{
			"name" : 'Community Medicine'
		},
		{
			"name" : 'Fanily Medicine'
		},
		{
			"name" : 'Orthopaedics & Traumatology & Psychiatry'
		},
		{
			"name" : 'Padiatrics'
		},
		{
			"name" : 'Obstetrics & Gynaecology'
		},
		{
			"name" : 'Radiology'
		},
		{
			"name" : 'Otorhinolaryngology'
		},
		{
			"name" : 'Anaesthesiology'
		},
		{
			"name" : 'Ophthalmology'
		},
		{
			"name" : 'Haematology'
		},
		{
			"name" : 'Chemical Pathology'
		},
		{
			"name" : 'Pathology'
		},
		{
			"name" : 'Medical Microbiology & Parasitology'
		}
		]
	},
	{
		"name" : 'Law',
		"id" : 8,
		"departments" : [
		{
			"name" : 'Private Law'
		},
		{
			"name" : 'Public and International Law'
		}
		]
	},
	{
		"name" : 'Oceanography',
		"id" : 9,
		"departments" : [
		{
			"name" : 'Biological Oceanography'
		},
		{
			"name" : 'Physical Oceanography'
		},
		{
			"name" : 'Mariculture & Marine Fisheries Resources'
		}
		]
	},
	{
		"name" : 'Agriculture',
		"id" : 10,
		"departments" : [
		{
			"name" : 'Crop Science'
		},
		{
			"name" : 'Soil Science'
		},
		{
			"name" : 'Forestry & Wildlife Resources'
		},
		{
			"name" : 'Fisheries & Aquatic Science'
		}
		]
	},
	{
		"name" : 'Dentistry',
		"id" : 11,
		"departments" : [
		{
			"name" : 'Dentistry'
		}]
	},
	{
		"name" : 'Education',
		"id" : 12,
		"departments" : [
		{
			"name" : 'Cont. Education/Dev. Studies'
		},
		{
			"name" : 'Environmental Education'
		},
		{
			"name" : 'Curriculum And Teaching'
		},
		{
			"name" : 'Educational Foundation'
		},
		{
			"name" : 'Edu. Admin. & Planning'
		},
		{
			"name" : 'Human Kinetics & Human Education'
		},
		{
			"name" : 'Guidance & Counselling'
		},
		{
			"name" : 'Library & Info. Science'
		},
		{
			"name" : 'Arts Education'
		},
		{
			"name" : 'Science Education'
		},
		{
			"name" : 'Social Science Education'
		},
		{
			"name" : 'Special Education'
		},
		{
			"name" : 'Vocational Education'
		}
		]
	},
	{
		"name" : 'Social Sciences',
		"id" : 13,
		"departments" : [
		{
			"name" : 'Economics'
		},
		{
			"name" : 'Geography & Env. Science'
		},
		{
			"name" : 'Political Science'
		},
		{
			"name" : 'Sociology'
		},
		{
			"name" : 'Public Admin'
		},
		{
			"name" : 'Social Works'
		}
		]
	},
	{
		"name" : 'Pharmacy',
		"id" : 14,
		"departments" : [
		{
			"name" : 'Pharmacy'
		}
		]
	},
	{
		"name" : 'Engineering',
		"id" : 15,
		"departments" : [
		{
			"name" : 'Mechanical Engineering'
		},
		{
			"name" : 'Civil & Environmental Engineering'
		},
		{
			"name" : 'Electrical/Electronics Engineering'
		},
		]
	}
	
	];

	$.each(faculties, function(index, obj) {
		$('#inputFaculty').append("<option value='"+ obj.name +"'>" + obj.name + "</option>");
	});
	var firstDept = faculties[0].departments;
	$.each(firstDept, function(index, obj) {
		$('#inputDept').append("<option value='"+ obj.name +"'>" + obj.name + "</option>");
	});
	$('#inputFaculty').change(function() {
		var faculty = $(this).val();
		var departments;
		$('#inputDept').empty();

		faculties.forEach(function(obj) {
			$.each(obj, function(k, v) {
				if(obj.name === faculty) {
					departments = obj.departments;
				}
			});
		});
		$.each(departments, function(index, obj) {
			$('#inputDept').append("<option value='"+ obj.name +"'>" + obj.name + "</option>");
		});
	});

});