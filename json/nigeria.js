$(document).ready(function() {
	var nigeria = [
		{
			"name":"Abia State",
			"id":1,
			"locals":
			[
				{
					"name":"Aba South",
					"id":1
				},
				{
					"name":"Arochukwu",
					"id":2
				},
				{
					"name":"Bende",
					"id":3
				},
				{
					"name":"Ikwuano",
					"id":4
				},
				{
					"name":"Isiala Ngwa North",
					"id":5
				},
				{
					"name":"Isiala Ngwa South",
					"id":6
				},
				{
					"name":"Isuikwuato",
					"id":7
				},
				{
					"name":"Obi Ngwa",
					"id":8},
				{
					"name":"Ohafia",
					"id":9},
				{
					"name":"Osisioma",
					"id":10
				},
				{
					"name":"Ugwunagbo",
					"id":11
				},
				{
					"name":"Ukwa East",
					"id":12
				},
				{
					"name":"Ukwa West",
					"id":13
				},
				{
					"name":"Umuahia North",
					"id":14
				},
				{
					"name":"Umuahia South",
					"id":15
				},
				{
					"name":"Umu Nneochi",
					"id":16
				}
			]
		},
		{
			"name":"Adamawa State",
			"id":2,
			"locals": [
				{
					"name":"Fufure",
					"id":18
				},
				{
					"name":"Ganye",
					"id":19
				},
				{
					"name":"Gayuk",
					"id":20
				},
				{
					"name":"Gombi",
					"id":21
				},
				{
					"name":"Grie",
					"id":22
				},
				{
					"name":"Hong",
					"id":23
				},
				{
					"name":"Jada",
					"id":24
				},
				{
					"name":"Lamurde",
					"id":25
				},
				{
					"name":"Madagali",
					"id":26
				},
				{
					"name":"Maiha",
					"id":27
				},
				{
					"name":"Mayo Belwa",
					"id":28
				},
				{
					"name":"Michika",
					"id":29
				},
				{
					"name":"Mubi North",
					"id":30
				},
				{
					"name":"Mubi South",
					"id":31
				},
				{
					"name":"Numan",
					"id":32
				},
				{
					"name":"Shelleng",
					"id":33
				},
				{
					"name":"Song",
					"id":34
				},
				{
					"name":"Toungo",
					"id":35
				},
				{
					"name":"Yola North",
					"id":36
				},
				{
					"name":"Yola South",
					"id":37
				}
			]
		},
		{
			"name":"Akwa Ibom State",
			"id":3,
			"locals":[
			{
				"name":"Eastern Obolo",
				"id":39
			},
			{
				"name":"Eket",
				"id":40
			},
			{"name":"Esit Eket","id":41},{"name":"Essien Udim","id":42},{"name":"Etim Ekpo","id":43},{"name":"Etinan","id":44},{"name":"Ibeno","id":45},{"name":"Ibesikpo Asutan","id":46},{"name":"Ibiono-Ibom","id":47},{"name":"Ika","id":48},{"name":"Ikono","id":49},{"name":"Ikot Abasi","id":50},{"name":"Ikot Ekpene","id":51},{"name":"Ini","id":52},{"name":"Itu","id":53},{"name":"Mbo","id":54},{"name":"Mkpat-Enin","id":55},{"name":"Nsit-Atai","id":56},{"name":"Nsit-Ibom","id":57},{"name":"Nsit-Ubium","id":58},{"name":"Obot Akara","id":59},{"name":"Okobo","id":60},{"name":"Onna","id":61},{"name":"Oron","id":62},{"name":"Oruk Anam","id":63},{"name":"Udung-Uko","id":64},{"name":"Ukanafun","id":65},{"name":"Uruan","id":66},{"name":"Urue-Offong\/Oruko","id":67},{"name":"Uyo","id":68}]},{"name":"Anambra State","id":4,"locals":[{"name":"Anambra East","id":70},{"name":"Anambra West","id":71},{"name":"Anaocha","id":72},{"name":"Awka North","id":73},{"name":"Awka South","id":74},{"name":"Ayamelum","id":75},{"name":"Dunukofia","id":76},{"name":"Ekwusigo","id":77},{"name":"Idemili North","id":78},{"name":"Idemili South","id":79},{"name":"Ihiala","id":80},{"name":"Njikoka","id":81},{"name":"Nnewi North","id":82},{"name":"Nnewi South","id":83},{"name":"Ogbaru","id":84},{"name":"Onitsha North","id":85},{"name":"Onitsha South","id":86},{"name":"Orumba North","id":87},{"name":"Orumba South","id":88},{"name":"Oyi","id":89}]},{"name":"Bauchi State","id":5,"locals":[{"name":"Bauchi","id":91},{"name":"Bogoro","id":92},{"name":"Damban","id":93},{"name":"Darazo","id":94},{"name":"Dass","id":95},{"name":"Gamawa","id":96},{"name":"Ganjuwa","id":97},{"name":"Giade","id":98},{"name":"Itas\/Gadau","id":99},{"name":"Jama'are","id":100},{"name":"Katagum","id":101},{"name":"Kirfi","id":102},{"name":"Misau","id":103},{"name":"Ningi","id":104},{"name":"Shira","id":105},{"name":"Tafawa Balewa","id":106},{"name":"Toro","id":107},{"name":"Warji","id":108},{"name":"Zaki","id":109}]},{"name":"Bayelsa State","id":6,"locals":[{"name":"Ekeremor","id":111},{"name":"Kolokuma\/Opokuma","id":112},{"name":"Nembe","id":113},{"name":"Ogbia","id":114},{"name":"Sagbama","id":115},{"name":"Southern Ijaw","id":116},{"name":"Yenagoa","id":117}]},{"name":"Benue State","id":7,"locals":[{"name":"Apa","id":119},{"name":"Ado","id":120},{"name":"Buruku","id":121},{"name":"Gboko","id":122},{"name":"Guma","id":123},{"name":"Gwer East","id":124},{"name":"Gwer West","id":125},{"name":"Katsina-Ala","id":126},{"name":"Konshisha","id":127},{"name":"Kwande","id":128},{"name":"Logo","id":129},{"name":"Makurdi","id":130},{"name":"Obi","id":131},{"name":"Ogbadibo","id":132},{"name":"Ohimini","id":133},{"name":"Oju","id":134},{"name":"Okpokwu","id":135},{"name":"Oturkpo","id":136},{"name":"Tarka","id":137},{"name":"Ukum","id":138},{"name":"Ushongo","id":139},{"name":"Vandeikya","id":140}]},{"name":"Borno State","id":8,"locals":[{"name":"Askira\/Uba","id":142},{"name":"Bama","id":143},{"name":"Bayo","id":144},{"name":"Biu","id":145},{"name":"Chibok","id":146},{"name":"Damboa","id":147},{"name":"Dikwa","id":148},{"name":"Gubio","id":149},{"name":"Guzamala","id":150},{"name":"Gwoza","id":151},{"name":"Hawul","id":152},{"name":"Jere","id":153},{"name":"Kaga","id":154},{"name":"Kala\/Balge","id":155},{"name":"Konduga","id":156},{"name":"Kukawa","id":157},{"name":"Kwaya Kusar","id":158},{"name":"Mafa","id":159},{"name":"Magumeri","id":160},{"name":"Maiduguri","id":161},{"name":"Marte","id":162},{"name":"Mobbar","id":163},{"name":"Monguno","id":164},{"name":"Ngala","id":165},{"name":"Nganzai","id":166},{"name":"Shani","id":167}]},{"name":"Cross River State","id":9,"locals":[{"name":"Akamkpa","id":169},{"name":"Akpabuyo","id":170},{"name":"Bakassi","id":171},{"name":"Bekwarra","id":172},{"name":"Biase","id":173},{"name":"Boki","id":174},{"name":"Calabar Municipal","id":175},{"name":"Calabar South","id":176},{"name":"Etung","id":177},{"name":"Ikom","id":178},{"name":"Obanliku","id":179},{"name":"Obubra","id":180},{"name":"Obudu","id":181},{"name":"Odukpani","id":182},{"name":"Ogoja","id":183},{"name":"Yakuur","id":184},{"name":"Yala","id":185}]},{"name":"Delta State","id":10,"locals":[{"name":"Aniocha South","id":187},{"name":"Bomadi","id":188},{"name":"Burutu","id":189},{"name":"Ethiope East","id":190},{"name":"Ethiope West","id":191},{"name":"Ika North East","id":192},{"name":"Ika South","id":193},{"name":"Isoko North","id":194},{"name":"Isoko South","id":195},{"name":"Ndokwa East","id":196},{"name":"Ndokwa West","id":197},{"name":"Okpe","id":198},{"name":"Oshimili North","id":199},{"name":"Oshimili South","id":200},{"name":"Patani","id":201},{"name":"Sapele","id":202},{"name":"Udu","id":203},{"name":"Ughelli North","id":204},{"name":"Ughelli South","id":205},{"name":"Ukwuani","id":206},{"name":"Uvwie","id":207},{"name":"Warri North","id":208},{"name":"Warri South","id":209},{"name":"Warri South West","id":210}]},{"name":"Ebonyi State","id":11,"locals":[{"name":"Afikpo North","id":212},{"name":"Afikpo South","id":213},{"name":"Ebonyi","id":214},{"name":"Ezza North","id":215},{"name":"Ezza South","id":216},{"name":"Ikwo","id":217},{"name":"Ishielu","id":218},{"name":"Ivo","id":219},{"name":"Izzi","id":220},{"name":"Ohaozara","id":221},{"name":"Ohaukwu","id":222},{"name":"Onicha","id":223}]},{"name":"Edo State","id":12,"locals":[{"name":"Egor","id":225},{"name":"Esan Central","id":226},{"name":"Esan North-East","id":227},{"name":"Esan South-East","id":228},{"name":"Esan West","id":229},{"name":"Etsako Central","id":230},{"name":"Etsako East","id":231},{"name":"Etsako West","id":232},{"name":"Igueben","id":233},{"name":"Ikpoba Okha","id":234},{"name":"Orhionmwon","id":235},{"name":"Oredo","id":236},{"name":"Ovia North-East","id":237},{"name":"Ovia South-West","id":238},{"name":"Owan East","id":239},{"name":"Owan West","id":240},{"name":"Uhunmwonde","id":241}]},{"name":"Ekiti State","id":13,"locals":[{"name":"Efon","id":243},{"name":"Ekiti East","id":244},{"name":"Ekiti South-West","id":245},{"name":"Ekiti West","id":246},{"name":"Emure","id":247},{"name":"Gbonyin","id":248},{"name":"Ido Osi","id":249},{"name":"Ijero","id":250},{"name":"Ikere","id":251},{"name":"Ikole","id":252},{"name":"Ilejemeje","id":253},{"name":"Irepodun\/Ifelodun","id":254},{"name":"Ise\/Orun","id":255},{"name":"Moba","id":256},{"name":"Oye","id":257}]},{"name":"Enugu State","id":14,"locals":[{"name":"Awgu","id":259},{"name":"Enugu East","id":260},{"name":"Enugu North","id":261},{"name":"Enugu South","id":262},{"name":"Ezeagu","id":263},{"name":"Igbo Etiti","id":264},{"name":"Igbo Eze North","id":265},{"name":"Igbo Eze South","id":266},{"name":"Isi Uzo","id":267},{"name":"Nkanu East","id":268},{"name":"Nkanu West","id":269},{"name":"Nsukka","id":270},{"name":"Oji River","id":271},{"name":"Udenu","id":272},{"name":"Udi","id":273},{"name":"Uzo Uwani","id":274}]},{"name":"FCT","id":15,"locals":[{"name":"Bwari","id":276},{"name":"Gwagwalada","id":277},{"name":"Kuje","id":278},{"name":"Kwali","id":279},{"name":"Municipal Area Council","id":280}]},{"name":"Gombe State","id":16,"locals":[{"name":"Balanga","id":282},{"name":"Billiri","id":283},{"name":"Dukku","id":284},{"name":"Funakaye","id":285},{"name":"Gombe","id":286},{"name":"Kaltungo","id":287},{"name":"Kwami","id":288},{"name":"Nafada","id":289},{"name":"Shongom","id":290},{"name":"Yamaltu\/Deba","id":291}]},{"name":"Imo State","id":17,"locals":[{"name":"Ahiazu Mbaise","id":293},{"name":"Ehime Mbano","id":294},{"name":"Ezinihitte","id":295},{"name":"Ideato North","id":296},{"name":"Ideato South","id":297},{"name":"Ihitte\/Uboma","id":298},{"name":"Ikeduru","id":299},{"name":"Isiala Mbano","id":300},{"name":"Isu","id":301},{"name":"Mbaitoli","id":302},{"name":"Ngor Okpala","id":303},{"name":"Njaba","id":304},{"name":"Nkwerre","id":305},{"name":"Nwangele","id":306},{"name":"Obowo","id":307},{"name":"Oguta","id":308},{"name":"Ohaji\/Egbema","id":309},{"name":"Okigwe","id":310},{"name":"Orlu","id":311},{"name":"Orsu","id":312},{"name":"Oru East","id":313},{"name":"Oru West","id":314},{"name":"Owerri Municipal","id":315},{"name":"Owerri North","id":316},{"name":"Owerri West","id":317},{"name":"Unuimo","id":318}]},{"name":"Jigawa State","id":18,"locals":[{"name":"Babura","id":320},{"name":"Biriniwa","id":321},{"name":"Birnin Kudu","id":322},{"name":"Buji","id":323},{"name":"Dutse","id":324},{"name":"Gagarawa","id":325},{"name":"Garki","id":326},{"name":"Gumel","id":327},{"name":"Guri","id":328},{"name":"Gwaram","id":329},{"name":"Gwiwa","id":330},{"name":"Hadejia","id":331},{"name":"Jahun","id":332},{"name":"Kafin Hausa","id":333},{"name":"Kazaure","id":334},{"name":"Kiri Kasama","id":335},{"name":"Kiyawa","id":336},{"name":"Kaugama","id":337},{"name":"Maigatari","id":338},{"name":"Malam Madori","id":339},{"name":"Miga","id":340},{"name":"Ringim","id":341},{"name":"Roni","id":342},{"name":"Sule Tankarkar","id":343},{"name":"Taura","id":344},{"name":"Yankwashi","id":345}]},{"name":"Kaduna State","id":19,"locals":[{"name":"Chikun","id":347},{"name":"Giwa","id":348},{"name":"Igabi","id":349},{"name":"Ikara","id":350},{"name":"Jaba","id":351},{"name":"Jema'a","id":352},{"name":"Kachia","id":353},{"name":"Kaduna North","id":354},{"name":"Kaduna South","id":355},{"name":"Kagarko","id":356},{"name":"Kajuru","id":357},{"name":"Kaura","id":358},{"name":"Kauru","id":359},{"name":"Kubau","id":360},{"name":"Kudan","id":361},{"name":"Lere","id":362},{"name":"Makarfi","id":363},{"name":"Sabon Gari","id":364},{"name":"Sanga","id":365},{"name":"Soba","id":366},{"name":"Zangon Kataf","id":367},{"name":"Zaria","id":368}]},{"name":"Kano State","id":20,"locals":[{"name":"Albasu","id":370},{"name":"Bagwai","id":371},{"name":"Bebeji","id":372},{"name":"Bichi","id":373},{"name":"Bunkure","id":374},{"name":"Dala","id":375},{"name":"Dambatta","id":376},{"name":"Dawakin Kudu","id":377},{"name":"Dawakin Tofa","id":378},{"name":"Doguwa","id":379},{"name":"Fagge","id":380},{"name":"Gabasawa","id":381},{"name":"Garko","id":382},{"name":"Garun Mallam","id":383},{"name":"Gaya","id":384},{"name":"Gezawa","id":385},{"name":"Gwale","id":386},{"name":"Gwarzo","id":387},{"name":"Kabo","id":388},{"name":"Kano Municipal","id":389},{"name":"Karaye","id":390},{"name":"Kibiya","id":391},{"name":"Kiru","id":392},{"name":"Kumbotso","id":393},{"name":"Kunchi","id":394},{"name":"Kura","id":395},{"name":"Madobi","id":396},{"name":"Makoda","id":397},{"name":"Minjibir","id":398},{"name":"Nasarawa","id":399},{"name":"Rano","id":400},{"name":"Rimin Gado","id":401},{"name":"Rogo","id":402},{"name":"Shanono","id":403},{"name":"Sumaila","id":404},{"name":"Takai","id":405},{"name":"Tarauni","id":406},{"name":"Tofa","id":407},{"name":"Tsanyawa","id":408},{"name":"Tudun Wada","id":409},{"name":"Ungogo","id":410},{"name":"Warawa","id":411},{"name":"Wudil","id":412}]},{"name":"Katsina State","id":21,"locals":[{"name":"Batagarawa","id":414},{"name":"Batsari","id":415},{"name":"Baure","id":416},{"name":"Bindawa","id":417},{"name":"Charanchi","id":418},{"name":"Dandume","id":419},{"name":"Danja","id":420},{"name":"Dan Musa","id":421},{"name":"Daura","id":422},{"name":"Dutsi","id":423},{"name":"Dutsin Ma","id":424},{"name":"Faskari","id":425},{"name":"Funtua","id":426},{"name":"Ingawa","id":427},{"name":"Jibia","id":428},{"name":"Kafur","id":429},{"name":"Kaita","id":430},{"name":"Kankara","id":431},{"name":"Kankia","id":432},{"name":"Katsina","id":433},{"name":"Kurfi","id":434},{"name":"Kusada","id":435},{"name":"Mai'Adua","id":436},{"name":"Malumfashi","id":437},{"name":"Mani","id":438},{"name":"Mashi","id":439},{"name":"Matazu","id":440},{"name":"Musawa","id":441},{"name":"Rimi","id":442},{"name":"Sabuwa","id":443},{"name":"Safana","id":444},{"name":"Sandamu","id":445},{"name":"Zango","id":446}]},{"name":"Kebbi State","id":22,"locals":[{"name":"Arewa Dandi","id":448},{"name":"Argungu","id":449},{"name":"Augie","id":450},{"name":"Bagudo","id":451},{"name":"Birnin Kebbi","id":452},{"name":"Bunza","id":453},{"name":"Dandi","id":454},{"name":"Fakai","id":455},{"name":"Gwandu","id":456},{"name":"Jega","id":457},{"name":"Kalgo","id":458},{"name":"Koko\/Besse","id":459},{"name":"Maiyama","id":460},{"name":"Ngaski","id":461},{"name":"Sakaba","id":462},{"name":"Shanga","id":463},{"name":"Suru","id":464},{"name":"Wasagu\/Danko","id":465},{"name":"Yauri","id":466},{"name":"Zuru","id":467}]},{"name":"Kogi State","id":23,"locals":[{"name":"Ajaokuta","id":469},{"name":"Ankpa","id":470},{"name":"Bassa","id":471},{"name":"Dekina","id":472},{"name":"Ibaji","id":473},{"name":"Idah","id":474},{"name":"Igalamela Odolu","id":475},{"name":"Ijumu","id":476},{"name":"Kabba\/Bunu","id":477},{"name":"Kogi","id":478},{"name":"Lokoja","id":479},{"name":"Mopa Muro","id":480},{"name":"Ofu","id":481},{"name":"Ogori\/Magongo","id":482},{"name":"Okehi","id":483},{"name":"Okene","id":484},{"name":"Olamaboro","id":485},{"name":"Omala","id":486},{"name":"Yagba East","id":487},{"name":"Yagba West","id":488}]},{"name":"Kwara State","id":24,"locals":[{"name":"Baruten","id":490},{"name":"Edu","id":491},{"name":"Ekiti","id":492},{"name":"Ifelodun","id":493},{"name":"Ilorin East","id":494},{"name":"Ilorin South","id":495},{"name":"Ilorin West","id":496},{"name":"Irepodun","id":497},{"name":"Isin","id":498},{"name":"Kaiama","id":499},{"name":"Moro","id":500},{"name":"Offa","id":501},{"name":"Oke Ero","id":502},{"name":"Oyun","id":503},{"name":"Pategi","id":504}]},{"name":"Lagos State","id":25,"locals":[{"name":"Ajeromi-Ifelodun","id":506},{"name":"Alimosho","id":507},{"name":"Amuwo-Odofin","id":508},{"name":"Apapa","id":509},{"name":"Badagry","id":510},{"name":"Epe","id":511},{"name":"Eti Osa","id":512},{"name":"Ibeju-Lekki","id":513},{"name":"Ifako-Ijaiye","id":514},{"name":"Ikeja","id":515},{"name":"Ikorodu","id":516},{"name":"Kosofe","id":517},{"name":"Lagos Island","id":518},{"name":"Lagos Mainland","id":519},{"name":"Mushin","id":520},{"name":"Ojo","id":521},{"name":"Oshodi-Isolo","id":522},{"name":"Shomolu","id":523},{"name":"Surulere","id":524}]},{"name":"Nasarawa State","id":26,"locals":[{"name":"Awe","id":526},{"name":"Doma","id":527},{"name":"Karu","id":528},{"name":"Keana","id":529},{"name":"Keffi","id":530},{"name":"Kokona","id":531},{"name":"Lafia","id":532},{"name":"Nasarawa","id":533},{"name":"Nasarawa Egon","id":534},{"name":"Obi","id":535},{"name":"Toto","id":536},{"name":"Wamba","id":537}]},{"name":"Niger State","id":27,"locals":[{"name":"Agwara","id":539},{"name":"Bida","id":540},{"name":"Borgu","id":541},{"name":"Bosso","id":542},{"name":"Chanchaga","id":543},{"name":"Edati","id":544},{"name":"Gbako","id":545},{"name":"Gurara","id":546},{"name":"Katcha","id":547},{"name":"Kontagora","id":548},{"name":"Lapai","id":549},{"name":"Lavun","id":550},{"name":"Magama","id":551},{"name":"Mariga","id":552},{"name":"Mashegu","id":553},{"name":"Mokwa","id":554},{"name":"Moya","id":555},{"name":"Paikoro","id":556},{"name":"Rafi","id":557},{"name":"Rijau","id":558},{"name":"Shiroro","id":559},{"name":"Suleja","id":560},{"name":"Tafa","id":561},{"name":"Wushishi","id":562}]},{"name":"Ogun State","id":28,"locals":[{"name":"Abeokuta South","id":564},{"name":"Ado-Odo\/Ota","id":565},{"name":"Egbado North","id":566},{"name":"Egbado South","id":567},{"name":"Ewekoro","id":568},{"name":"Ifo","id":569},{"name":"Ijebu East","id":570},{"name":"Ijebu North","id":571},{"name":"Ijebu North East","id":572},{"name":"Ijebu Ode","id":573},{"name":"Ikenne","id":574},{"name":"Imeko Afon","id":575},{"name":"Ipokia","id":576},{"name":"Obafemi Owode","id":577},{"name":"Odeda","id":578},{"name":"Odogbolu","id":579},{"name":"Ogun Waterside","id":580},{"name":"Remo North","id":581},{"name":"Shagamu","id":582}]},{"name":"Ondo State","id":29,"locals":[{"name":"Akoko North-West","id":584},{"name":"Akoko South-West","id":585},{"name":"Akoko South-East","id":586},{"name":"Akure North","id":587},{"name":"Akure South","id":588},{"name":"Ese Odo","id":589},{"name":"Idanre","id":590},{"name":"Ifedore","id":591},{"name":"Ilaje","id":592},{"name":"Ile Oluji\/Okeigbo","id":593},{"name":"Irele","id":594},{"name":"Odigbo","id":595},{"name":"Okitipupa","id":596},{"name":"Ondo East","id":597},{"name":"Ondo West","id":598},{"name":"Ose","id":599},{"name":"Owo","id":600}]},{"name":"Osun State","id":30,"locals":[{"name":"Atakunmosa West","id":602},{"name":"Aiyedaade","id":603},{"name":"Aiyedire","id":604},{"name":"Boluwaduro","id":605},{"name":"Boripe","id":606},{"name":"Ede North","id":607},{"name":"Ede South","id":608},{"name":"Ife Central","id":609},{"name":"Ife East","id":610},{"name":"Ife North","id":611},{"name":"Ife South","id":612},{"name":"Egbedore","id":613},{"name":"Ejigbo","id":614},{"name":"Ifedayo","id":615},{"name":"Ifelodun","id":616},{"name":"Ila","id":617},{"name":"Ilesa East","id":618},{"name":"Ilesa West","id":619},{"name":"Irepodun","id":620},{"name":"Irewole","id":621},{"name":"Isokan","id":622},{"name":"Iwo","id":623},{"name":"Obokun","id":624},{"name":"Odo Otin","id":625},{"name":"Ola Oluwa","id":626},{"name":"Olorunda","id":627},{"name":"Oriade","id":628},{"name":"Orolu","id":629},{"name":"Osogbo","id":630}]},{"name":"Oyo State","id":31,"locals":[{"name":"Akinyele","id":632},{"name":"Atiba","id":633},{"name":"Atisbo","id":634},{"name":"Egbeda","id":635},{"name":"Ibadan North","id":636},{"name":"Ibadan North-East","id":637},{"name":"Ibadan North-West","id":638},{"name":"Ibadan South-East","id":639},{"name":"Ibadan South-West","id":640},{"name":"Ibarapa Central","id":641},{"name":"Ibarapa East","id":642},{"name":"Ibarapa North","id":643},{"name":"Ido","id":644},{"name":"Irepo","id":645},{"name":"Iseyin","id":646},{"name":"Itesiwaju","id":647},{"name":"Iwajowa","id":648},{"name":"Kajola","id":649},{"name":"Lagelu","id":650},{"name":"Ogbomosho North","id":651},{"name":"Ogbomosho South","id":652},{"name":"Ogo Oluwa","id":653},{"name":"Olorunsogo","id":654},{"name":"Oluyole","id":655},{"name":"Ona Ara","id":656},{"name":"Orelope","id":657},{"name":"Ori Ire","id":658},{"name":"Oyo","id":659},{"name":"Oyo East","id":660},{"name":"Saki East","id":661},{"name":"Saki West","id":662},{"name":"Surulere","id":663}]},{"name":"Plateau State","id":32,"locals":[{"name":"Barkin Ladi","id":665},{"name":"Bassa","id":666},{"name":"Jos East","id":667},{"name":"Jos North","id":668},{"name":"Jos South","id":669},{"name":"Kanam","id":670},{"name":"Kanke","id":671},{"name":"Langtang South","id":672},{"name":"Langtang North","id":673},{"name":"Mangu","id":674},{"name":"Mikang","id":675},{"name":"Pankshin","id":676},{"name":"Qua'an Pan","id":677},{"name":"Riyom","id":678},{"name":"Shendam","id":679},{"name":"Wase","id":680}]},{"name":"Rivers State","id":33,"locals":[{"name":"Ahoada East","id":682},{"name":"Ahoada West","id":683},{"name":"Akuku-Toru","id":684},{"name":"Andoni","id":685},{"name":"Asari-Toru","id":686},{"name":"Bonny","id":687},{"name":"Degema","id":688},{"name":"Eleme","id":689},{"name":"Emuoha","id":690},{"name":"Etche","id":691},{"name":"Gokana","id":692},{"name":"Ikwerre","id":693},{"name":"Khana","id":694},{"name":"Obio\/Akpor","id":695},{"name":"Ogba\/Egbema\/Ndoni","id":696},{"name":"Ogu\/Bolo","id":697},{"name":"Okrika","id":698},{"name":"Omuma","id":699},{"name":"Opobo\/Nkoro","id":700},{"name":"Oyigbo","id":701},{"name":"Port Harcourt","id":702},{"name":"Tai","id":703}]},{"name":"Sokoto State","id":34,"locals":[{"name":"Bodinga","id":705},{"name":"Dange Shuni","id":706},{"name":"Gada","id":707},{"name":"Goronyo","id":708},{"name":"Gudu","id":709},{"name":"Gwadabawa","id":710},{"name":"Illela","id":711},{"name":"Isa","id":712},{"name":"Kebbe","id":713},{"name":"Kware","id":714},{"name":"Rabah","id":715},{"name":"Sabon Birni","id":716},{"name":"Shagari","id":717},{"name":"Silame","id":718},{"name":"Sokoto North","id":719},{"name":"Sokoto South","id":720},{"name":"Tambuwal","id":721},{"name":"Tangaza","id":722},{"name":"Tureta","id":723},{"name":"Wamako","id":724},{"name":"Wurno","id":725},{"name":"Yabo","id":726}]},{"name":"Taraba State","id":35,"locals":[{"name":"Bali","id":728},{"name":"Donga","id":729},{"name":"Gashaka","id":730},{"name":"Gassol","id":731},{"name":"Ibi","id":732},{"name":"Jalingo","id":733},{"name":"Karim Lamido","id":734},{"name":"Kumi","id":735},{"name":"Lau","id":736},{"name":"Sardauna","id":737},{"name":"Takum","id":738},{"name":"Ussa","id":739},{"name":"Wukari","id":740},{"name":"Yorro","id":741},{"name":"Zing","id":742}]},{"name":"Yobe State","id":36,"locals":[{"name":"Bursari","id":744},{"name":"Damaturu","id":745},{"name":"Fika","id":746},{"name":"Fune","id":747},{"name":"Geidam","id":748},{"name":"Gujba","id":749},{"name":"Gulani","id":750},{"name":"Jakusko","id":751},{"name":"Karasuwa","id":752},{"name":"Machina","id":753},{"name":"Nangere","id":754},{"name":"Nguru","id":755},{"name":"Potiskum","id":756},{"name":"Tarmuwa","id":757},{"name":"Yunusari","id":758},{"name":"Yusufari","id":759}]},{"name":"Zamfara State","id":37,"locals":[{"name":"Bakura","id":761},{"name":"Birnin Magaji\/Kiyaw","id":762},{"name":"Bukkuyum","id":763},{"name":"Bungudu","id":764},{"name":"Gummi","id":765},{"name":"Gusau","id":766},{"name":"Kaura Namoda","id":767},{"name":"Maradun","id":768},{"name":"Maru","id":769},{"name":"Shinkafi","id":770},{"name":"Talata Mafara","id":771},{"name":"Chafe","id":772},{"name":"Zurmi","id":773}]}];


	$.each(nigeria, function(index, objs) {
		$('#state').append("<option value='"+ objs.name +"'>" + objs.name + "</option>");	
	});
	var firstState = nigeria[0].locals;
	$.each(firstState, function(index, obj) {
		$('#lg').append("<option value='"+ obj.name +"'>" + obj.name + "</option>");
	});

	$('#state').change(function() {
		var state = $(this).val();
		var lgas;
		$('#lg').empty();

		nigeria.forEach(function(obj) {
			$.each(obj, function(k, v) {
				if(obj.name === state) {
					lgas = obj.locals;
				}								
			});
		});

		$.each(lgas, function(index, obj) {
			$('#lg').append("<option value='"+ obj.name +"'>" + obj.name + "</option>");
		});
	});
	
	for (var i = 1970; i <= 2031; i++) {
		$('#admissionYr').append("<option>" + i + "</option>");
	}

	// $('#state').change(function() {
	// 	var id = $(this).val();
	// 	var ngObj = Object.entries(nigeria);
	// 	ngObj.forEach(function(key, value) {
	// 		Object.entries(value).forEach(function(k, v) {
	// 			var lgas = v.find(obj => obj.id === id);
	// 			alert(lgas);
	// 		});
			
	// 	});
	// });
});
	