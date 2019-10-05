module.exports = function(app, port, rootPath, apiRoutes) {
	console.log('just entered subjsApi');
	var _ = require('underscore');
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	// Routes for getting the exam JSON data
	app.get('/agricsci/1988', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. A piece of land is said to be on lease to a farmer when the land is",
					"opts": {
						"q0": "A. inherited from his father",
						"q1": "B. given to him as a gift",
						"q2": "C. given as compensation",
						"q3": "D. purchased on credit",
						"q4": "E. given for a specified period on rental basis."
					},
					"ans": "E"
				},
				"Q2": {
					"qs": "2. The problems associated with land tenure through inheritance include the following except",
					"opts": {
						"q0": "A. small land holdings for family members",
						"q1": "B. hatred among family members arising from land sharing",
						"q2": "C. right of individuals to free use and control of inherited land",
						"q3": "D. individuals being restricted to their plots",
						"q4": "E. difficulty to sell part of the inherited land."
					},
					"ans": "C"
				},
				"Q3": {
					"qs": "3. Soil texture is described as the",
					"opts": {
						"q0": "A. distribution of the different sizes of soil particles",
						"q1": "B. arrangement of soil particles in a soil sample",
						"q2": "C. rate at which water moves through the soil",
						"q3": "D. degree to which air spaces aerate the soil",
						"q4": "E. distribution of soil particles in a sample."
					},
					"ans": "A"
				},
				"Q4": {
					"qs": "4. The alternate heating and cooling of rocks result in",
					"opts": {
						"q0": "A. sublimation",
						"q1": "B. volatilization",
						"q2": "C. fragmentation",
						"q3": "D. solidification",
						"q4": "E. sedimentation."
					},
					"ans": "C"
				},
				"Q5": {
					"qs": "5. Which of the following factors influencing agricultural production is biotic factor?",
					"opts": {
						"q0": "A. Parasite",
						"q1": "B. Soil pH",
						"q2": "C. Topography",
						"q3": "D. Soil texture",
						"q4": "E. Temperature."
					},
					"ans": "A"
				},
				"Q6": {
					"qs": "6. Granite is",
					"opts": {
						"q0": "A. a sedimentary rock",
						"q1": "B. a wealtered rock",
						"q2": "C. metamorphic rock",
						"q3": "D. an igneous rock",
						"q4": "E. a plutonic rock."
					},
					"ans": "D"
				},
				"Q7": {
					"qs": "7. In which layer of the soil profile does most biological activity occur?",
					"opts": {
						"q0": "A. Parent materia",
						"q1": "B. D - horizon",
						"q2": "C. C-horizon",
						"q3": "D. B-horizon",
						"q4": "E. A-horizon."
					},
					"ans": "E"
				},
				"Q8": {
					"qs": "8. When leaves of crop plants show brownish colouration from the tips of the mid-ribs backward they are showing deficiency symptom of",
					"opts": {
						"q0": "A. magnesium",
						"q1": "B. zinc",
						"q2": "C. nitrogen",
						"q3": "D. copper",
						"q4": "E. phosphorus."
					},
					"ans": "E"
				},
				"Q9": {
					"qs": "9. Which of the following farm practices can prevent excessive evaporation from soil surfaces?",
					"opts": {
						"q0": "A. Liming",
						"q1": "B. Mulching",
						"q2": "C. Weeding",
						"q3": "D. Harrowing",
						"q4": "E. Ploughing."
					},
					"ans": "B"
				},
				"Q10": {
					"qs": "10. Which of the following is not associated with surface irrigation?",
					"opts": {
						"q0": "A. Natural flooding",
						"q1": "B. Check flooding",
						"q2": "C. Sprinkler irrigation",
						"q3": "D. Mole drains",
						"q4": "E. Tiles."
					},
					"ans": "D"
				},
				"Q11": {
					"qs": "11. Which of the following types of soil contains particles of diameter between 0.02 mm and 2.0 mm?",
					"opts": {
						"q0": "A. Sand",
						"q1": "B. Silt",
						"q2": "C. Gravel",
						"q3": "D. Clay",
						"q4": "E. Stone."
					},
					"ans": "A"
				},
				"Q12": {
					"qs": "12. A farmer cultivating leafy vegetables will require fertilizers with a relatively high content of",
					"opts": {
						"q0": "A. calcium",
						"q1": "B. magnesium",
						"q2": "C. potassium",
						"q3": "D. nitrogen",
						"q4": "E. phosphorus."
					},
					"ans": "D"
				},
				"Q13": {
					"qs": "13. The earthworm is important to the farmer because it",
					"opts": {
						"q0": "A. improves soil structure",
						"q1": "B. improves soil texture",
						"q2": "C. destroys soil pathogens",
						"q3": "D. adds nutrients to the soil",
						"q4": "E. prevents soil erosion."
					},
					"ans": "A"
				},
				"Q14": {
					"qs": "14. The type of rocks formed from the molten magma is known as",
					"opts": {
						"q0": "A. sedimentary",
						"q1": "B. igneous",
						"q2": "C. metamorphic",
						"q3": "D. schist",
						"q4": "E. sandstone."
					},
					"ans": "B"
				},
				"Q15": {
					"qs": "15. The relationship between the microorganisms and plants in the nitrogen cycle is best described as",
					"opts": {
						"q0": "A. parasitism",
						"q1": "B. commensalism",
						"q2": "C. competition",
						"q3": "D. symbiosis",
						"q4": "E. saprophytism."
					},
					"ans": "D"
				},
				"Q16": {
					"qs": "16. The type of energy obtained from the sun for agricultural uses is known as",
					"opts": {
						"q0": "A. potential energy",
						"q1": "B. mechanical energy",
						"q2": "C. nuclear energy",
						"q3": "D. solar energy",
						"q4": "E. kinetic energy."
					},
					"ans": "D"
				},
				"Q17": {
					"qs": "17. Which of the following implements will be used for the next farm operation after clearing a new farmland?",
					"opts": {
						"q0": "A. Harrow",
						"q1": "B. Ridger",
						"q2": "C. Cultivator",
						"q3": "D. Planter",
						"q4": "E. Plough."
					},
					"ans": "E"
				},
				"Q18": {
					"qs": "18. Which of the following cannot be used to rub the metal parts of farm tools before storage?",
					"opts": {
						"q0": "A. Grease",
						"q1": "B. Palm oil",
						"q2": "C. Water",
						"q3": "D. Petroleum jelly",
						"q4": "E. Spent engine oil."
					},
					"ans": "C"
				},
				"Q19": {
					"qs": "19. The common surveying equipment for farmland include the following except",
					"opts": {
						"q0": "A. ranging pole",
						"q1": "B. prismatic compass",
						"q2": "C. measuring tape",
						"q3": "D. Gunter’s chain",
						"q4": "E. spade."
					},
					"ans": "E"
				},
				"Q20": {
					"qs": "20. An example of fungal disease of stored grains is",
					"opts": {
						"q0": "A. rosette",
						"q1": "B. wilt",
						"q2": "C. soft rot",
						"q3": "D. damping off",
						"q4": "E. mould."
					},
					"ans": "E"
				},
				"Q21": {
					"qs": "21. A small plot of land'where intensive cultivation is practised to produce vegetables is generally referred to as",
					"opts": {
						"q0": "A. an orchard",
						"q1": "B. a plantation",
						"q2": "C. a nursery",
						"q3": "D. a garden",
						"q4": "E. a pasture."
					},
					"ans": "D"
				},
				"Q22": {
					"qs": "22. Which of the following plants is not classified as forage grass?",
					"opts": {
						"q0": "A. Giant star",
						"q1": "B. guinea grass",
						"q2": "C. Elephant grass",
						"q3": "D. Gamba grass",
						"q4": "E. Stylo."
					},
					"ans": "E"
				},
				"Q23": {
					"qs": "23. The plant-a-tree-campaign of the Federal Government of Nigeria is a way of encouraging forest",
					"opts": {
						"q0": "A. regulation",
						"q1": "B. exploration",
						"q2": "C. exploitation",
						"q3": "D. integration",
						"q4": "E. regeneration."
					},
					"ans": "E"
				},
				"Q24": {
					"qs": "24. Which of the following is not a method of controlling pests?",
					"opts": {
						"q0": "A. Quarantine",
						"q1": "B. Crop rotation",
						"q2": "C. Fumigation",
						"q3": "D. Trapping",
						"q4": "E. Mulching."
					},
					"ans": "E"
				},
				"Q25": {
					"qs": "25. The most effective method of controlling or preventing viral diseases in plants is by",
					"opts": {
						"q0": "A. planting resistant varieties",
						"q1": "B. spraying crops regularly",
						"q2": "C. burning affected crops",
						"q3": "D. practising crop rotation",
						"q4": "E. treating seeds with chemicals."
					},
					"ans": "A"
				},
				"Q26": {
					"qs": "26. Reduction of ten seedlings of pawpaw to two per stand is referred to as",
					"opts": {
						"q0": "A. pruning",
						"q1": "B. thinning",
						"q2": "C. uprooting",
						"q3": "D. weeding",
						"q4": "E. spacing."
					},
					"ans": "B"
				},
				"Q27": {
					"qs": "27. Which of the following describes the steps in making hay?",
					"opts": {
						"q0": "A. Cut-sun-bale",
						"q1": "B. Dry-silage-silo",
						"q2": "C. Soilage-ferment-cut",
						"q3": "D. Cut-graze-paddock",
						"q4": "E. Bale-dry-silage."
					},
					"ans": "A"
				},
				"Q28": {
					"qs": "28. A situation where only specified trees in a forest reserve are cut down is known as",
					"opts": {
						"q0": "A. selection",
						"q1": "B. afforestation",
						"q2": "C. reforestation",
						"q3": "D. selective exploitation",
						"q4": "E. deforestation."
					},
					"ans": "D"
				},
				"Q29": {
					"qs": "29. The causative organism of maize rust is",
					"opts": {
						"q0": "A. a fungus",
						"q1": "B. a virus",
						"q2": "C. a bacterium",
						"q3": "D. an insect",
						"q4": "E. a nematode."
					},
					"ans": "A"
				},
				"Q30": {
					"qs": "30. The reproductive cells of crops are called",
					"opts": {
						"q0": "A. gametes",
						"q1": "B. genes",
						"q2": "C. chromosomes",
						"q3": "D. anthers",
						"q4": "E. zygotes."
					},
					"ans": "A"
				},
				"Q31": {
					"qs": "31. Which of the following fruits is a capsule? ",
					"opts": {
						"q0": "A. Okra",
						"q1": "B. Groundnut",
						"q2": "C. Mango",
						"q3": "D. Coconut",
						"q4": "E. Apple."
					},
					"ans": "A"
				},
				"Q32": {
					"qs": "32. Birds are important pests of",
					"opts": {
						"q0": "A. tree crops",
						"q1": "B. legumes",
						"q2": "C. cereal",
						"q3": "D. vegetable crops",
						"q4": "E. stored produce."
					},
					"ans": "C"
				},
				"Q33": {
					"qs": "33. The agent of controlled pollination in plants",
					"opts": {
						"q0": "A. wind",
						"q1": "B. insect",
						"q2": "C. man",
						"q3": "D. bird",
						"q4": "E. water."
					},
					"ans": "C"
				},
				"Q34": {
					"qs": "34. Ginning is the process of",
					"opts": {
						"q0": "A. extracting cotton seed oil",
						"q1": "B. separating fibres from the bark of kena",
						"q2": "C. grinding cotton seeds",
						"q3": "D. separating cotton fibre from its seed",
						"q4": "E. converting cotton lint into yarn."
					},
					"ans": "D"
				},
				"Q35": {
					"qs": "35. The groundnut rosette virus is transmitted by",
					"opts": {
						"q0": "A. aphid",
						"q1": "B. mealy bug ",
						"q2": "C. wind",
						"q3": "D. rainsplash",
						"q4": "E. soil."
					},
					"ans": "A"
				},
				"Q36": {
					"qs": "36. Which of the following farm animals possess a pair of caeca?",
					"opts": {
						"q0": "A. Pigs",
						"q1": "B. Cattle",
						"q2": "C. Sheep",
						"q3": "D. Rabbits",
						"q4": "E. Fowls."
					},
					"ans": "E"
				},
				"Q37": {
					"qs": "37. The head of the tapeworm is known as the",
					"opts": {
						"q0": "A. sucker",
						"q1": "B. rostellum",
						"q2": "C. scolex",
						"q3": "D. hook",
						"q4": "E. segment."
					},
					"ans": "C"
				},
				"Q38": {
					"qs": "38. Which of the following is not a function of the ruminal microorganism?",
					"opts": {
						"q0": "A. Digestion of cellulose",
						"q1": "B. Conversion of plant proteins into microbial protein",
						"q2": "C. Production of vitamin B",
						"q3": "D. Production of gas in the rumen",
						"q4": "E. Eructation of the ruminal gas."
					},
					"ans": "E"
				},
				"Q39": {
					"qs": "39. Which of the following factors would you consider the least important for the successful incubation of eggs?",
					"opts": {
						"q0": "A. Light",
						"q1": "B. Temperature",
						"q2": "C. Ventilation",
						"q3": "D. Relative humidity",
						"q4": "E. Turning of the eggs."
					},
					"ans": "A"
				},
				"Q40": {
					"qs": "40. In which area of Nigeria is the Kuri breed of cattle commonly found?",
					"opts": {
						"q0": "A. Borno",
						"q1": "B. Sokoto",
						"q2": "C. Plateau",
						"q3": "D. Obudu",
						"q4": "E. Oyo North."
					},
					"ans": "A"
				},
				"Q41": {
					"qs": "41. Which of the following feeding stuff should be increased in the diet of laying birds?",
					"opts": {
						"q0": "A. Palm kernel meal",
						"q1": "B. Bone meal",
						"q2": "C. Groundnut cake",
						"q3": "D. Vitamin supplement",
						"q4": "E. Wheat offal."
					},
					"ans": "B"
				},
				"Q42": {
					"qs": "42. Crops grown primarily for feeding animals are known as",
					"opts": {
						"q0": "A. vegetables",
						"q1": "B. cereal",
						"q2": "C. foraqe",
						"q3": "D. legumes",
						"q4": "E. shrubs."
					},
					"ans": "C"
				},
				"Q43": {
					"qs": "43. The following livestock diseases are caused by viruses except",
					"opts": {
						"q0": "A. anthrax",
						"q1": "B. foot and mouth disease",
						"q2": "C. rinderpest",
						"q3": "D. newcastle disease",
						"q4": "E. fowl pox."
					},
					"ans": "A"
				},
				"Q44": {
					"qs": "44. Fingerlings refer to the young of",
					"opts": {
						"q0": "A. rabbit",
						"q1": "B. guinea pig",
						"q2": "C. fish",
						"q3": "D. turkey",
						"q4": "E. duck."
					},
					"ans": "C"
				},
				"Q45": {
					"qs": "45. The practice of progeny selection involves selecting breading stock on the basis of the",
					"opts": {
						"q0": "A. performance of offspring",
						"q1": "B. parental characteristics",
						"q2": "C. sire-dam relationships",
						"q3": "D. individual merits of each animal",
						"q4": "E. characteristics of adult and young animals."
					},
					"ans": "A"
				},
				"Q46": {
					"qs": "46. The most important symptom of brucellosis in cattle is",
					"opts": {
						"q0": "A. abortion",
						"q1": "B. swollen testes",
						"q2": "C. lameness",
						"q3": "D. swollen joints",
						"q4": "E. retained placenta."
					},
					"ans": "A"
				},
				"Q47": {
					"qs": "47. Which of the following is not a sign of heat in animals?",
					"opts": {
						"q0": "A. Mounting of other animals",
						"q1": "B. Mucous discharge from the vulva",
						"q2": "C. Restlessness",
						"q3": "D. Grunting sound",
						"q4": "E. Mucous discharge from the rectum."
					},
					"ans": "E"
				},
				"Q48": {
					"qs": "48. Which of the following practices would a farmer not likely adopt in pig management?",
					"opts": {
						"q0": "A. Ear notching",
						"q1": "B. Deworming",
						"q2": "C. Castration",
						"q3": "D. Feeding iron supplement",
						"q4": "E. Dehorning."
					},
					"ans": "E"
				},
				"Q49": {
					"qs": "49. Feeds with high amount of fibre are classified as",
					"opts": {
						"q0": "A. concentrates",
						"q1": "B. roughages",
						"q2": "C. hay",
						"q3": "D. silage",
						"q4": "E. soilage."
					},
					"ans": "B"
				},
				"Q50": {
					"qs": "50. In birds, loss of appetite, respiratory difficulties and nervous paralysis are symptoms of",
					"opts": {
						"q0": "A. coccidiosis",
						"q1": "B. fowl pox",
						"q2": "C. newcastle disease",
						"q3": "D. fowl typhoid",
						"q4": "E. fowl cholera."
					},
					"ans": "C"
				},
				"Q51": {
					"qs": "51. In which of the following ways can fish be processed and preserved?",
					"opts": {
						"q0": "A. Saiting and smoking",
						"q1": "B. Salting and fermentation",
						"q2": "C. Smoking and fermentation",
						"q3": "D. Smoking and pasteurization",
						"q4": "E. Pasteurization and salting."
					},
					"ans": "A"
				},
				"Q52": {
					"qs": "52. The incubation period for turkey is",
					"opts": {
						"q0": "A. 15 days",
						"q1": "B. 21 days",
						"q2": "C. 27 days",
						"q3": "D. 35 days",
						"q4": "E. 42 days."
					},
					"ans": "C"
				},
				"Q53": {
					"qs": "53. Which of the following is commonly used as a source of plant protein in livestock ration?",
					"opts": {
						"q0": "A. Maize",
						"q1": "B. Rice bran",
						"q2": "C. Wheat bran",
						"q3": "D. Groundnut cake",
						"q4": "E. Molasses."
					},
					"ans": "D"
				},
				"Q54": {
					"qs": "54. The brownish flattened and leaf-like parasites found in cattle are called",
					"opts": {
						"q0": "A. tapeworms",
						"q1": "B. liver flukes",
						"q2": "C. ticks",
						"q3": "D. roundworms",
						"q4": "E. lice."
					},
					"ans": "B"
				},
				"Q55": {
					"qs": "55. Which of the following decisions will not benefit a farmer?",
					"opts": {
						"q0": "A. What method o. production to use",
						"q1": "B. What to produce",
						"q2": "C. How and where to dispose of outputs",
						"q3": "D. Diversification of production from the beginning",
						"q4": "E. How and where to obtain inputs."
					},
					"ans": "D"
				},
				"Q56": {
					"qs": "56. Exposing farmer to scientific knowledge is the responsibility of the",
					"opts": {
						"q0": "A. research institutes",
						"q1": "B. farm settlers",
						"q2": "C. agro-service centres",
						"q3": "D. extension personnel",
						"q4": "E. agricultural development project."
					},
					"ans": "D"
				},
				"Q57": {
					"qs": "57. Which of the following is not a source of farm credit?",
					"opts": {
						"q0": "A. Cooperative societies",
						"q1": "B. Government agencies",
						"q2": "C. Commercial banks",
						"q3": "D. Agricultural banks",
						"q4": "E. Mortgage banks."
					},
					"ans": "E"
				},
				"Q58": {
					"qs": "58. The efficiency of agricultural production is not usually improved by the",
					"opts": {
						"q0": "A. use of improved crop varieties and breeds of livestock",
						"q1": "B. increased used of manure and fertilizers",
						"q2": "C. control of pests, diseases and weeds",
						"q3": "D. use of better farm equipment and tools",
						"q4": "E. improved sales of crop and livestock."
					},
					"ans": "E"
				},
				"Q59": {
					"qs": "59. Which of the following is a reason for often marketing harvested crops immediately after harvest?",
					"opts": {
						"q0": "A. There is the lack of storage facilities for harvest crops",
						"q1": "B. Crops cannot be processed immediately",
						"q2": "C. Much more income is generated by early sale",
						"q3": "D. Pests attack only harvested crops",
						"q4": "E. The crops will get spoilt soon after harvest."
					},
					"ans": "A"
				},
				"Q60": {
					"qs": "60. The best method of introducing a new herbicide to rural farmers is through",
					"opts": {
						"q0": "A. mass media",
						"q1": "B. circular letters",
						"q2": "C. farmers’ cooperative",
						"q3": "D. group meeting with farmers",
						"q4": "E. demonstration."
					},
					"ans": "E"
				}
			}
		});
	});

	app.get('/agricsci/1989', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. Peasant farmers sell almost all their produce immediately after harvesting because",
					"opts": {
						"q0": "A. stored produce would be lost to pests",
						"q1": "B. there are inadequate storage facilities",
						"q2": "C. stored produce lose their quality",
						"q3": "D. the produce are perishable",
						"q4": "E. the prices offered for stored produce are low."
					},
					"ans": "B"
				},
				"Q2": {
					"qs": "2. The commonest method of land tenure in Nigeria is",
					"opts": {
						"q0": "A. lease",
						"q1": "B. inheritance",
						"q2": "C. outright purchase",
						"q3": "D. pledge",
						"q4": "E. state allocation."
					},
					"ans": "B"
				},
				"Q3": {
					"qs": "3. Which of the following constitutes a direct monetary cash assistance from government to farmers?",
					"opts": {
						"q0": "A. Agricultural development programmes",
						"q1": "B. Extension service",
						"q2": "C. Supply of inputs",
						"q3": "D. loans",
						"q4": "E. Tractor hiring."
					},
					"ans": "D"
				},
				"Q4": {
					"qs": "4. The cross-section of a segment of soil showing the horizons or layers is known as the soil",
					"opts": {
						"q0": "A. structure",
						"q1": "B. texture",
						"q2": "C. section",
						"q3": "D. depth",
						"q4": "E. profile."
					},
					"ans": "E"
				},
				"Q5": {
					"qs": "5. If a crop requires 1.5 kg phosphorus per hectare, how many kg of manure will be required per hectare if 1 kg manure contains 0.49 kg of phosphorus?",
					"opts": {
						"q0": "A. 2.47",
						"q1": "B. 2.97",
						"q2": "C. 7.35",
						"q3": "D. 12.39",
						"q4": "E. 30.61."
					},
					"ans": "E"
				},
				"Q6": {
					"qs": "6. The factor that does not influence land use is",
					"opts": {
						"q0": "A. topography",
						"q1": "B. population pressure",
						"q2": "C. population graph",
						"q3": "D. forest establishment",
						"q4": "E. soil type."
					},
					"ans": "C"
				},
				"Q7": {
					"qs": "7. Which of the following environmental factors is likely to have the greatest influence on crop production in Nigeria?",
					"opts": {
						"q0": "A. Temperature",
						"q1": "B. Vegetation",
						"q2": "C. Air movement",
						"q3": "D. Moisture",
						"q4": "E. Pressure."
					},
					"ans": "D"
				},
				"Q8": {
					"qs": "8. The process whereby rocks are broken down into small particles through both physical and chemical factors is known as",
					"opts": {
						"q0": "A. rock hydration",
						"q1": "B. rock degradation",
						"q2": "C. oxidation",
						"q3": "D. erosion",
						"q4": "E. weathering."
					},
					"ans": "E"
				},
				"Q9": {
					"qs": "9. The parent material of a soil is formed from the disintegration of",
					"opts": {
						"q0": "A. sand",
						"q1": "B. gravel",
						"q2": "C. silt",
						"q3": "D. rock",
						"q4": "E. organic matter."
					},
					"ans": "D"
				},
				"Q10": {
					"qs": "10. Nitrogen is made available to plants in the form of nitrates through the process of",
					"opts": {
						"q0": "A. deamination and nitrification",
						"q1": "B. ammonification and denitrification",
						"q2": "C. deamination and ammonification",
						"q3": "D. nitrification and denitrification",
						"q4": "E. nitrification and ammonification."
					},
					"ans": "E"
				},
				"Q11": {
					"qs": "11. Which of the following is not an effect of burning on the soil?",
					"opts": {
						"q0": "A. Increasing the organic matter in the soil",
						"q1": "B. Increasing the soil nutrients",
						"q2": "C. Increasing the acidity of the soil",
						"q3": "D. Exposing the soil to erosion",
						"q4": "E. Sterilization of the soil."
					},
					"ans": "A"
				},
				"Q12": {
					"qs": "12. The functions of soil micro-organisms include the following except",
					"opts": {
						"q0": "A. decomposition of dead plant and animal remains",
						"q1": "B. recycling of nutrient",
						"q2": "C. causing plant or animal diseases",
						"q3": "D. living as parasites on crop plants",
						"q4": "E. filtration of soil water for plant use."
					},
					"ans": "E"
				},
				"Q13": {
					"qs": "13.	Slate is derived from",
					"opts": {
						"q0": "A. schist",
						"q1": "B. sandstone",
						"q2": "C. shale",
						"q3": "D. gneiss",
						"q4": "E. quartzite."
					},
					"ans": "C"
				},
				"Q14": {
					"qs": "14. The following are advantages of the sprinkler method of irrigation except",
					"opts": {
						"q0": "A. rate of application of irrigation water can be controlled",
						"q1": "B. portable nature of many sprinkler systems make them suitable for use",
						"q2": "C. the sprinkler systems can be made automatic",
						"q3": "D. method can be used where topography affects harrowing of land",
						"q4": "E. method may be difficult for local farmers to use."
					},
					"ans": "E"
				},
				"Q15": {
					"qs": "15. Rhizobium supplies nitrogen to leguminous plants by",
					"opts": {
						"q0": "A. changing some mineral salts to sulphate of ammonia",
						"q1": "B. incorporating urea into its body",
						"q2": "C. fixing atmospheric nitrogen",
						"q3": "D. decomposing plant remains",
						"q4": "E. Increasing the pH value of the soil."
					},
					"ans": "C"
				},
				"Q16": {
					"qs": "16. The advantage of providing drainage ditches in farms is that it",
					"opts": {
						"q0": "A. requires periodic clearing",
						"q1": "B. is inconvenient for farm mechanization",
						"q2": "C. is labour intensive",
						"q3": "D. is unsuitable for draining basement of farm buildings",
						"q4": "E. is easily adopted by small scale farmers."
					},
					"ans": "E"
				},
				"Q17": {
					"qs": "17. Which of the following sources of farm power cannot be effectively used for processing agricultural products?",
					"opts": {
						"q0": "A. animal",
						"q1": "B. electricity",
						"q2": "C. sun",
						"q3": "D. machines",
						"q4": "E. wind."
					},
					"ans": "A"
				},
				"Q18": {
					"qs": "18. The instrument used to measure the relative humidity is",
					"opts": {
						"q0": "A. thermometer",
						"q1": "B. anemometer",
						"q2": "C. hygrometer",
						"q3": "D. hydrometer",
						"q4": "E. rain gauge."
					},
					"ans": "C"
				},
				"Q19": {
					"qs": "19. The most important limitation of agricultural mechanization is",
					"opts": {
						"q0": "A. small holdings",
						"q1": "B. lack of technical know-how",
						"q2": "C. poor marketing system",
						"q3": "D. inadequate storage facilities",
						"q4": "E. pest attack."
					},
					"ans": "A"
				},
				"Q20": {
					"qs": "20. The best tool(s) a farmer should use to measure out a large farm accurately include(s) the",
					"opts": {
						"q0": "A. garden line and measuring tape",
						"q1": "B. measuring tape and ranging poles",
						"q2": "C. measuring tape only",
						"q3": "D. garden line only",
						"q4": "E. ranging poles and garden line."
					},
					"ans": "B"
				},
				"Q21": {
					"qs": "21. The distance between two successive yam mounds should be about",
					"opts": {
						"q0": "A. 0.10 m",
						"q1": "B. 1.00 m ",
						"q2": "C. 10.00 m",
						"q3": "D. 100.00 m",
						"q4": "E. 1000.00 m."
					},
					"ans": "B"
				},
				"Q22": {
					"qs": "22. The desirable characteristics of forage crops include the following except",
					"opts": {
						"q0": "A. payability",
						"q1": "B. dependability",
						"q2": "C. high yield",
						"q3": "D. resistance to trampling",
						"q4": "E. poor reproductive ability."
					},
					"ans": "E"
				},
				"Q23": {
					"qs": "23. The growing of both forest and agricultural crops on the same piece of land is termed",
					"opts": {
						"q0": "A. mixed cropping",
						"q1": "B. mixed farming",
						"q2": "C. forestry",
						"q3": "D. taungya system",
						"q4": "E. poor reproductive ability."
					},
					"ans": "D"
				},
				"Q24": {
					"qs": "24. Which of the following is not an effect on man of the various preventive and control measures of diseases and pests of crops?",
					"opts": {
						"q0": "A. Air pollution",
						"q1": "B. Water poisoning",
						"q2": "C. Food contamination",
						"q3": "D. Poor health",
						"q4": "E. Poor utilization."
					},
					"ans": "E"
				},
				"Q25": {
					"qs": "25. The units of inheritance which determine the various characteristics of crops are called",
					"opts": {
						"q0": "A. chromosomes",
						"q1": "B. nuclei",
						"q2": "C. genes",
						"q3": "D. cytoplasm",
						"q4": "E. membranes."
					},
					"ans": "C"
				},
				"Q26": {
					"qs": "26. Which of the following crops is a raw material for the production of chocolate?",
					"opts": {
						"q0": "A. Kolanut",
						"q1": "B. Coffee",
						"q2": "C. Banana",
						"q3": "D. Cocoa",
						"q4": "E. Avocado pear."
					},
					"ans": "D"
				},
				"Q27": {
					"qs": "27. In the establishment of pastures, it is best to",
					"opts": {
						"q0": "A. plant only grasses",
						"q1": "B. plant only legumes",
						"q2": "C. plant a mixture of grasses and legumes",
						"q3": "D. let the natural grasses grow",
						"q4": "E. allow weeds to mix with the forage crops."
					},
					"ans": "C"
				},
				"Q28": {
					"qs": "28. A forest established for watershed management will perform the following functions except",
					"opts": {
						"q0": "A. reducing water pollution",
						"q1": "B. controlling fish population",
						"q2": "C. controlling erosion",
						"q3": "D. maintaining a steady stream flow",
						"q4": "E. reducing evaporation."
					},
					"ans": "B"
				},
				"Q29": {
					"qs": "29. The disease which most often attacks groundnut is called",
					"opts": {
						"q0": "A. rosette",
						"q1": "B. mosaic",
						"q2": "C. soft rot",
						"q3": "D. powdery mildew",
						"q4": "E. brown rot."
					},
					"ans": "A"
				},
				"Q30": {
					"qs": "30. The process of meiosis in plants ensures the production of reproductive cells with",
					"opts": {
						"q0": "A. the same number of chromosomes like the parent plant",
						"q1": "B. half the number of chromosomes of the parent plant",
						"q2": "C. no chromosome unlike the parent plants",
						"q3": "D. thrice the number of chromosomes of the parent plant",
						"q4": "E. twice the number of chromosomes of the parent plant."
					},
					"ans": "B"
				},
				"Q31": {
					"qs": "31. Why should a seed-producing farmer spray an insecticide on his crops only when the bees are not around?",
					"opts": {
						"q0": "A. The bees would sting him and ne therefore avoids them",
						"q1": "B. The farmer does not want to waste his chemicals",
						"q2": "C. Bees are important for pollination of his crops",
						"q3": "D. Bees produce honey for him in his farm",
						"q4": "E. Bees are harmless insects."
					},
					"ans": "C"
				},
				"Q32": {
					"qs": "32. The average seed rate for maize is 25 kg per hectare. Allowing for a seed wastage of 5 per cent,' how many kilogram of seeds would be reguired in planting 10 hectares of farmland?",
					"opts": {
						"q0": "A. 237.5",
						"q1": "B. 238.0",
						"q2": "C. 250.0",
						"q3": "D. 255.0",
						"q4": "E. 262.5."
					},
					"ans": "E"
				},
				"Q33": {
					"qs": "33. Thrips cause serious mechanical damages to crops by their",
					"opts": {
						"q0": "A. feeding activities on flowers, leaves and fruits",
						"q1": "B. laying eggs on plants",
						"q2": "C. sucking of the sap of crops",
						"q3": "D. burrowing activities causing damping off in crops",
						"q4": "E. activities as vectors of bacterial diseases."
					},
					"ans": "A"
				},
				"Q34": {
					"qs": "34. The expression of a gene in the phenotype irrespective of whether the cell is homozygous or heterozygous is known as",
					"opts": {
						"q0": "A. recessive",
						"q1": "B. partial dominance",
						"q2": "C. test-cross",
						"q3": "D. segregation",
						"q4": "E. dominance."
					},
					"ans": "E"
				},
				"Q35": {
					"qs": "35. Vegetative propagation can be carried out through the following processes except",
					"opts": {
						"q0": "A. seedling",
						"q1": "B. cutting",
						"q2": "C. layering",
						"q3": "D. grafting",
						"q4": "E. budding."
					},
					"ans": "A"
				},
				"Q36": {
					"qs": "36. Contact insecticides are used to control",
					"opts": {
						"q0": "A. pod borers of legumes",
						"q1": "B. stem borers of cereal",
						"q2": "C. leaf beetles of legumes",
						"q3": "D. peel worm of legumes",
						"q4": "E. bollworms of cotton."
					},
					"ans": "C"
				},
				"Q37": {
					"qs": "37. The part of tne ruminant stomach from which digestive juices are secreted is the",
					"opts": {
						"q0": "A. rumen",
						"q1": "B. reticulum",
						"q2": "C. omasum",
						"q3": "D. paunch",
						"q4": "E. abomasum."
					},
					"ans": "E"
				},
				"Q38": {
					"qs": "38. At which of the following ages are gilts normally mated?",
					"opts": {
						"q0": "A. 8-12 months",
						"q1": "B. 14-15 months",
						"q2": "C. 15 -20 months",
						"q3": "D. 21 -24 months",
						"q4": "E. over 25 months."
					},
					"ans": "A"
				},
				"Q39": {
					"qs": "39. Which of the following breeds of cattle is regarded as the best dairy breed in Nigeria?",
					"opts": {
						"q0": "A. Red Bororo",
						"q1": "B. Keteku",
						"q2": "C. Sokoto Gudaii",
						"q3": "D. Muturu",
						"q4": "E. White Fulani."
					},
					"ans": "E"
				},
				"Q40": {
					"qs": "40. The symptoms of vitamin deficiency diseases in livestock include the following except",
					"opts": {
						"q0": "A. scurvy",
						"q1": "B. loss of appetite",
						"q2": "C. poor blood clotting",
						"q3": "D. improved fertility",
						"q4": "E. rickets."
					},
					"ans": "D"
				},
				"Q41": {
					"qs": "41. A protozoan disease of livestock not transmitted by a vector is",
					"opts": {
						"q0": "A. coccidiosis",
						"q1": "B. babesiosis",
						"q2": "C. trypanosomiasis",
						"q3": "D. redwater",
						"q4": "E. anaplasmosis."
					},
					"ans": "A"
				},
				"Q42": {
					"qs": "42. The best method(s) of regulating fish capture is/are",
					"opts": {
						"q0": "A. gill netting and electro-fishing",
						"q1": "B. quota and mesh- size control",
						"q2": "C. beach seme method",
						"q3": "D. active netting",
						"q4": "E. passive netting."
					},
					"ans": "B"
				},
				"Q43": {
					"qs": "43. Which of the following is not a factor of improvement in breeding cattle?",
					"opts": {
						"q0": "A. Fertility",
						"q1": "B. Butter-fat percentage",
						"q2": "C. Weaning weight",
						"q3": "D. Feed efficiency",
						"q4": "E. Back-fat thickness."
					},
					"ans": "E"
				},
				"Q44": {
					"qs": "44. Which of the following is not a symptom of malnutrition in livestock?",
					"opts": {
						"q0": "A. Bloat",
						"q1": "B. Night blindness",
						"q2": "C. Milk fever",
						"q3": "D. Infertility",
						"q4": "E. Anaemia."
					},
					"ans": "A"
				},
				"Q45": {
					"qs": "45. The act of giving birth in rabbits is known as",
					"opts": {
						"q0": "A. kidding",
						"q1": "B. farrowing",
						"q2": "C. kindling",
						"q3": "D. calving",
						"q4": "E. lambing."
					},
					"ans": "C"
				},
				"Q46": {
					"qs": "46. The exoticbreeds of rabbits found in Nigeria include the following except",
					"opts": {
						"q0": "A. New Zealand white",
						"q1": "B. Chinchila",
						"q2": "C. American Albino",
						"q3": "D. Flemish Giant",
						"q4": "E. Rhode Island Red."
					},
					"ans": "E"
				},
				"Q47": {
					"qs": "47. Minerals such as contained in oyster shell help animals to",
					"opts": {
						"q0": "A. build up their body tissue",
						"q1": "B. develop their bones and teeth",
						"q2": "C. have balanced diet",
						"q3": "D. develop immunity against deficiency diseases",
						"q4": "E. increase their blood mineral content."
					},
					"ans": "B"
				},
				"Q48": {
					"qs": "48. Some of the by-products of fish include the following except",
					"opts": {
						"q0": "A. fish meal",
						"q1": "B. fish silage",
						"q2": "C. glue",
						"q3": "D. oil",
						"q4": "E. leather."
					},
					"ans": "E"
				},
				"Q49": {
					"qs": "49. he commonest ectoparasites of birds are",
					"opts": {
						"q0": "A. lice",
						"q1": "B. fleas",
						"q2": "C. ticks",
						"q3": "D. mites",
						"q4": "E. houseflies."
					},
					"ans": "A"
				},
				"Q50": {
					"qs": "50. The following factors should be considered when selecting a farm animal irrespective of the use management and cost except",
					"opts": {
						"q0": "A. heredity",
						"q1": "B. age",
						"q2": "C. health",
						"q3": "D. fecundity",
						"q4": "E. colour."
					},
					"ans": "C"
				},
				"Q51": {
					"qs": "51. Which of the following is not a factor affecting fertility in farm animals?",
					"opts": {
						"q0": "A. Age",
						"q1": "B. Ovulation rate",
						"q2": "C. Number of ova fertilized",
						"q3": "D. Number of offspring produced",
						"q4": "E. Lactation rate."
					},
					"ans": "E"
				},
				"Q52": {
					"qs": "52. Low fibre and high energy feeds are classified as",
					"opts": {
						"q0": "A.supplements",
						"q1": "B. concentrates",
						"q2": "C. roughages",
						"q3": "D. additives",
						"q4": "E. basal feeds."
					},
					"ans": "B"
				},
				"Q53": {
					"qs": "53. Which of the following is not used for identification purpose in livestock?",
					"opts": {
						"q0": "A. Tattooing",
						"q1": "B. Branding",
						"q2": "C. Tagging",
						"q3": "D. Notching",
						"q4": "E. Shearing."
					},
					"ans": "E"
				},
				"Q54": {
					"qs": "54. The factors that can predispose animals to diseases include the following except",
					"opts": {
						"q0": "A. poor housing",
						"q1": "B. malnutrition",
						"q2": "C. immunity",
						"q3": "D. physical injuries",
						"q4": "E. unfavourable weather."
					},
					"ans": "C"
				},
				"Q55": {
					"qs": "55. The following are factors of agricultural production except",
					"opts": {
						"q0": "A. farmstead",
						"q1": "B. land",
						"q2": "C. labour",
						"q3": "D. capital",
						"q4": "E. management."
					},
					"ans": "A"
				},
				"Q56": {
					"qs": "56. Which of the following deduction is correct of the graph",
					"img": "img**Agric_1989_sectionb_qst56_1.jpg",
					"opts": {
						"q0": "A. A change in price has a drastic effect on quantity demanded but does not affect quantity supplied",
						"q1": "B. A change in price affects quantity demanded and supplied",
						"q2": "C. A change in price does not affect quantity demanded but had drastic effect on supply",
						"q3": "D. The quantity demanded or supplied does not change as prices change",
						"q4": "E. The quantity demanded or supplied changes as price changes."
					},
					"ans": "A"
				},
				"Q57": {
					"qs": "57. Which of the following deduction is correct of the graph",
					"img": "img**Agric_1989_sectionb_qst56_1.jpg",
					"opts": {
						"q0": "A. A change in price has a drastic effect on quantity demanded but does not affect quantity supplied",
						"q1": "B. A change in price affects quantity demanded and supplied",
						"q2": "C. A change in price does not affect quantity demanded but had drastic effect on supply",
						"q3": "D. The quantity demanded or supplied does not change as prices change",
						"q4": "E. The quantity demanded or supplied changes as price changes."
					},
					"ans": "A"
				},
				"Q58": {
					"qs": "58. Farm credits given to farmers can be only in form of",
					"opts": {
						"q0": "A. cash",
						"q1": "B. tractor hiring",
						"q2": "C. insecticides application",
						"q3": "D. fertilizer use",
						"q4": "E. "
					},
					"ans": "E"
				},
				"Q59": {
					"qs": "59. Which of the following is a day-to-day record of work on a farmer’s farm?",
					"opts": {
						"q0": "A. Crop yield book",
						"q1": "B. Labour diary",
						"q2": "C. Farm inventory",
						"q3": "D. Produce account",
						"q4": "E. Profit and loss account."
					},
					"ans": "B"
				},
				"Q60": {
					"qs": "60. Most farmers in Nigeria are hesitant in adopting new farming techniques because they",
					"opts": {
						"q0": "A. are poor and cannot afford to take risks",
						"q1": "B. do not trust the extension worker",
						"q2": "C. do not accept anything that comes from the government",
						"q3": "D. are too old-fashioned to adopt new ideas",
						"q4": "E. are afraid of the market instability."
					},
					"ans": "A"
				}
			}
		});
	});

	app.get('/agricsci/1990', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. Subsistence farming can be appropriately described as planting of crops and rearing of livestock",
					"opts": {
						"q0": "A. for the benefit of the whole country",
						"q1": "B. as export for earning foreign exchange",
						"q2": "C. for the benefit of the community only",
						"q3": "D. for the benefit of the farmer and his family",
						"q4": "E. as raw materials for agro-based industries."
					},
					"ans": "D"
				},
				"Q2": {
					"qs": "2. Which of the following is not the role of government in agricultural production?",
					"opts": {
						"q0": "A. Provision of loans and credits",
						"q1": "B. Building of storage facilities",
						"q2": "C. Establishment of efficient marketing outlets",
						"q3": "D. Provision of subsidies",
						"q4": "E. Provision of labour."
					},
					"ans": "E"
				},
				"Q3": {
					"qs": "3. In encouraging farmers to produce more of a particular crop, the Nigerian government has helped farmers in marketing that crop through the establishment of ",
					"opts": {
						"q0": "A. rural schools of agriculture",
						"q1": "B. markets for the sale of crops",
						"q2": "C. marketing boards",
						"q3": "D. rural extension offices",
						"q4": "E. universities of agriculture."
					},
					"ans": "C"
				},
				"Q4": {
					"qs": "4. Which of the following factors affecting land availability and use is a socio-economic factor?",
					"opts": {
						"q0": "A. Population pressure",
						"q1": "B. Soil type",
						"q2": "C. Topography",
						"q3": "D. Farming systems",
						"q4": "E. Climate."
					},
					"ans": "A"
				},
				"Q5": {
					"qs": "5. A crop not requiring more than 750 mm annual rainfall is most suitable for cultivation in",
					"opts": {
						"q0": "A. swampy forest",
						"q1": "B. sahel savanna",
						"q2": "C. rain forest",
						"q3": "D. sudan savanna",
						"q4": "E. guinea savanna."
					},
					"ans": "B"
				},
				"Q6": {
					"qs": "6. The major factors influencing the physical or mechanical breakdown of rocks into finer particles include the following except",
					"opts": {
						"q0": "A. man",
						"q1": "B. animal",
						"q2": "C. wind",
						"q3": "D. water",
						"q4": "E. solution."
					},
					"ans": "E"
				},
				"Q7": {
					"qs": "7. The equation below represents the process of chemical weathering called",
					"img": "img**Agric_1990_sectionb_qst7_1.jpg",
					"opts": {
						"q0": "A. hydrolysis ",
						"q1": "B. solution ",
						"q2": "C. carbonation ",
						"q3": "D. oxidation ",
						"q4": "E. hydration"
					},
					"ans": "A"
				},
				"Q8": {
					"qs": "8. Which of the following nutrient elements is a micronutrient?",
					"opts": {
						"q0": "A. Phosphorus",
						"q1": "B. Zinc",
						"q2": "C. Iron",
						"q3": "D. Manganese",
						"q4": "E. Boron"
					},
					"ans": "A"
				},
				"Q9": {
					"qs": "9. Which of the following is a disadvantage of using organic manure on the soil?",
					"opts": {
						"q0": "A. Spreading of pests and diseases",
						"q1": "B. Reducing the rate of evaporation from soil surfaces",
						"q2": "C. Improving the nitrogen content of soil",
						"q3": "D. Increasing the humus content of soil",
						"q4": "E. Preventing erosion and leaching"
					},
					"ans": "A"
				},
				"Q10": {
					"qs": "10. Which of the following factors is not considered in the use of irrigation?",
					"opts": {
						"q0": "A. Weed seed distribution over the farm",
						"q1": "B. Cost of maintenance",
						"q2": "C. Availability of water",
						"q3": "D. Build up of pests and diseases",
						"q4": "E. Prevention of salt accumulation through adequate drainage."
					},
					"ans": "E"
				},
				"Q11": {
					"qs": "11. By which of the following ways is the agricultural production in Nigeria affected by topography",
					"opts": {
						"q0": "A. Lowering of crop quality",
						"q1": "B. Determining the manure requirement of a farm",
						"q2": "C. Lowering the level of production",
						"q3": "D. Increasing the pest incidence on crops",
						"q4": "E. Influencing the area of land .actually available for agriculture. "
					},
					"ans": "E"
				},
				"Q12": {
					"qs": "12. Which of the following will not contribute to soil formation in Nigeria?",
					"opts": {
						"q0": "A. Carbonation",
						"q1": "B. Oxidation",
						"q2": "C. Temperature",
						"q3": "D. Hydrolysis",
						"q4": "E. Glaciation."
					},
					"ans": "E"
				},
				"Q13": {
					"qs": "13. The type of soil formed is affected by the following factors except",
					"opts": {
						"q0": "A. farming systems",
						"q1": "B. climate",
						"q2": "C. vegetation",
						"q3": "D. topography",
						"q4": "E. parent material."
					},
					"ans": "A"
				},
				"Q14": {
					"qs": "14. Which of the following is the function of Nitrosomonas in the nitrogen cycle?",
					"opts": {
						"q0": "A. Ammonification",
						"q1": "B. Volatilization ",
						"q2": "C. Nitrification ",
						"q3": "D. Denitrification ",
						"q4": "E. Nitrogen fixation."
					},
					"ans": "C"
				},
				"Q15": {
					"qs": "15. Which of the following farm practices does not have a very harmful effect on the soil?",
					"opts": {
						"q0": "A. Crop rotation",
						"q1": "B. Land clearing",
						"q2": "C. Overgrazing",
						"q3": "D. Flooding.",
						"q4": "E. Bush burning."
					},
					"ans": "A"
				},
				"Q16": {
					"qs": "16. Soil can be drained by the use of the following except",
					"opts": {
						"q0": "A. sprinklers",
						"q1": "B. channels",
						"q2": "C. gutters",
						"q3": "D. ditches",
						"q4": "E. porous pipes."
					},
					"ans": "A"
				},
				"Q17": {
					"qs": "17. Which of the following parts of a tractor need not be regularly checked before the tractor is put into use?",
					"opts": {
						"q0": "A. Engine oil and water level",
						"q1": "B. Power take-off shaft",
						"q2": "C. Tyres and tyre pressure",
						"q3": "D. Brake and gear",
						"q4": "E. Operator’s and adjustment."
					},
					"ans": "E"
				},
				"Q18": {
					"qs": "18. What are give and take lines often used for in farm surveying?",
					"opts": {
						"q0": "A. Levelling measurements of farms",
						"q1": "B. Chain measurements of farmlands",
						"q2": "C. Measuring diversions or obstructions in a farmland",
						"q3": "D. Measuring turning points during surveying",
						"q4": "E. Measuring farms with irregular boundaries."
					},
					"ans": "E"
				},
				"Q19": {
					"qs": "19. Which of the following is not a limitation of farm mechanization?",
					"opts": {
						"q0": "A. Technical know-how",
						"q1": "B. Capital",
						"q2": "C. Small holdings",
						"q3": "D. Lack of spare parts",
						"q4": "E. Labour."
					},
					"ans": "E"
				},
				"Q20": {
					"qs": "20. Incubators are used to supply heat to",
					"opts": {
						"q0": "A. day-old chicks",
						"q1": "B. sick fowls in cold weather ",
						"q2": "C. cockerels to increase their libido",
						"q3": "D. poultry attendants for protection against cold",
						"q4": "E. fertilized ,eggs for chick development."
					},
					"ans": "E"
				},
				"Q21": {
					"qs": "21. Root knot of tomato is caused by a",
					"opts": {
						"q0": "A. Fungus ",
						"q1": "B. bacterium ",
						"q2": "C. virus ",
						"q3": "D. Protozoan ",
						"q4": "E. nematode "
					},
					"ans": "E"
				},
				"Q22": {
					"qs": "22. If the seed rate for guinea corn is 5.6 kg per hectare, what will be the amount of seeds required for planting 35 acre farm?",
					"opts": {
						"q0": "A. 75.1",
						"q1": "B. 78.4",
						"q2": "C. 568.2",
						"q3": "D. 784.5",
						"q4": "E. 960.3"
					},
					"ans": "B"
				},
				"Q23": {
					"qs": "23. The most common weed of pastures in Nigeria is",
					"opts": {
						"q0": "A. spear grass",
						"q1": "B. goat weed",
						"q2": "C. water leaf",
						"q3": "D. tridax ",
						"q4": "E. sida"
					},
					"ans": "A"
				},
				"Q24": {
					"qs": "24. The following are forestry crops except ",
					"opts": {
						"q0": "A. Tectona grandis",
						"q1": "B. Gmelina arborea",
						"q2": "C. Anarcadium",
						"q3": "D. Pinus eliotis",
						"q4": "E. Chforophora excelsa"
					},
					"ans": "C"
				},
				"Q25": {
					"qs": "25. The pest designated as a national pest by the Nigerian Agricultural Advisory Council is",
					"opts": {
						"q0": "A. Variegated grasshopper",
						"q1": "B. Thrips ",
						"q2": "C. Capsid ",
						"q3": "D. Cricket",
						"q4": "E. Weevil"
					},
					"ans": "A"
				},
				"Q26": {
					"qs": "26. Which of the following groups comprises only oil crops?",
					"opts": {
						"q0": "A. Groundnut, jute and cotton",
						"q1": "B. Melon, coconut and sisal hemp",
						"q2": "C. Coconut, cotton and sunflower",
						"q3": "D. Sunflower, rubber and jute",
						"q4": "E. Oil palm, sunflower and jute."
					},
					"ans": "C"
				},
				"Q27": {
					"qs": "27. The mosaic symptom commonly associated with viral diseases of crops can be best observed on",
					"opts": {
						"q0": "A. roots ",
						"q1": "B. stem ",
						"q2": "C. leaves ",
						"q3": "D. fruits ",
						"q4": "E. flowers"
					},
					"ans": "C"
				},
				"Q28": {
					"qs": "28.	The diagram explains the Mendel’s law of",
					"img": "img**Agric_1990_sectionb_qst28_1.jpg",
					"opts": {
						"q0": "A. segregation",
						"q1": "B. independent assortment",
						"q2": "C. chromosomal mutation",
						"q3": "D. homozygosity",
						"q4": "E. heterozygosity"
					},
					"ans": "A"
				},
				"Q29": {
					"qs": "29.	The component labelled II are the",
					"img": "img**Agric_1990_sectionb_qst28_1.jpg",
					"opts": {
						"q0": "A. gametes",
						"q1": "B. parents ",
						"q2": "C. f 1 generation",
						"q3": "D. zygotes ",
						"q4": "E. phenotypes"
					},
					"ans": "A"
				},
				"Q30": {
					"qs": "30. Which of the following is not true of the progenies labelled III? They are",
					"opts": {
						"q0": "A. the first filial generation",
						"q1": "B. all tall pea plants",
						"q2": "C. produced by a monohybrid cross",
						"q3": "D. of the same genotype",
						"q4": "E. different phenotypes."
					},
					"ans": "E"
				},
				"Q31": {
					"qs": "31. If the individual crops obtained in III are crossed, the phenotypic ratio of tall to dwarf progenies would be",
					"opts": {
						"q0": "A. 3 : 1",
						"q1": "B. 1 : 2 :1",
						"q2": "C. 2 : 1",
						"q3": "D. 1 : 2",
						"q4": "E. 4 : 0"
					},
					"ans": "A"
				},
				"Q32": {
					"qs": "32. Pests of crops that feed by piercing and sucking plants include the following except",
					"opts": {
						"q0": "A. stem borers",
						"q1": "B. aphids ",
						"q2": "C. cocoa mirids",
						"q3": "D. cotton stainers",
						"q4": "E. cassava mealy bugs."
					},
					"ans": "A"
				},
				"Q33": {
					"qs": "33. Maize grows best on",
					"opts": {
						"q0": "A. sandy soil",
						"q1": "B. sandy-clay soil",
						"q2": "C. clayey-loam soil",
						"q3": "D. loamy soil",
						"q4": "E. silty-clay soil."
					},
					"ans": "D"
				},
				"Q34": {
					"qs": "34. Soil may be exposed to erosion when a pasture is",
					"opts": {
						"q0": "A. unaergrazed",
						"q1": "B. overgrazed",
						"q2": "C. paadocked",
						"q3": "D. weeded",
						"q4": "E. fenced."
					},
					"ans": "B"
				},
				"Q35": {
					"qs": "35.	Taungya farm involves the combination of",
					"opts": {
						"q0": "A. crop and animal husbandry",
						"q1": "B. crop husbandry and forestry",
						"q2": "C. forestry and animal husbandry",
						"q3": "D. crop husbandry and fish farming",
						"q4": "E. forestry and fisn farming."
					},
					"ans": "B"
				},
				"Q36": {
					"qs": "36.	The destructive effects of variegated grasshoppers are conspicuously observed on",
					"opts": {
						"q0": "A. cassava and yam crops",
						"q1": "B. cocoa and citrus crops",
						"q2": "C. cowpea and maize crops",
						"q3": "D. maize and cassava crops",
						"q4": "E. citrus and weeds."
					},
					"ans": "D"
				},
				// "headd": "Use the diagram below to answer questions 37-40.",
				"Q37": {
					"qs": "37. The site of milk synthesis and milk secretion is labelled",
					"img": "img**Agric_1990_sectionb_qst37_1.jpg",
					"opts": {
						"q0": "A. I",
						"q1": "B. II",
						"q2": "C. IV",
						"q3": "D. V",
						"q4": "E. VII."
					},
					"ans": "A"
				},
				"Q38": {
					"qs": "38.	Milk contents from large ducts are emptied into the part labelled",
					"img": "img**Agric_1990_sectionb_qst37_1.jpg",
					"opts": {
						"q0": "A. I",
						"q1": "B. II",
						"q2": "C. IV",
						"q3": "D. V",
						"q4": "E. VI"
					},
					"ans": "C"
				},
				"Q39": {
					"qs": "39.	Milk is discharged by attaching milking machine to the part labelled",
					"img": "img**Agric_1990_sectionb_qst37_1.jpg",
					"opts": {
						"q0": "A. II",
						"q1": "B. III",
						"q2": "C. IV",
						"q3": "D. VI",
						"q4": "E. VII"
					},
					"ans": "E"
				},
				"Q40": {
					"qs": "40. The ducts that arise from the alveoli are labelled",
					"img": "img**Agric_1990_sectionb_qst37_1.jpg",
					"opts": {
						"q0": "A. II",
						"q1": "B. III",
						"q2": "C. IV",
						"q3": "D. V",
						"q4": "E. VI"
					},
					"ans": "B"
				},
				// "headd": "Use the diagram by the side to answer questions 41-43",
				"Q41": {
					"qs": "41. The shell-producing region is labelled",
					"img": "img**Agric_1990_sectionb_qst41_1.jpg",
					"opts": {
						"q0": "A. IV",
						"q1": "B. V",
						"q2": "C. VI",
						"q3": "D. VII",
						"q4": "E. VIII"
					},
					"ans": "C"
				},
				"Q42": {
					"qs": "42.	The region where the sperm from the cock is deposited is labelled",
					"img": "img**Agric_1990_sectionb_qst41_1.jpg",
					"opts": {
						"q0": "A. II",
						"q1": "B. IV",
						"q2": "C. V",
						"q3": "D. VI",
						"q4": "E. VIII"
					},
					"ans": "C"
				},
				"Q43": {
					"qs": "43.	The oviduct is labelled",
					"img": "img**Agric_1990_sectionb_qst41_1.jpg",
					"opts": {
						"q0": "A. I",
						"q1": "B. II",
						"q2": "C. III",
						"q3": "D. IV",
						"q4": "E. V"
					},
					"ans": "C"
				},
				"Q44": {
					"qs": "44.	A castrated male fowl is known as",
					"opts": {
						"q0": "A. cock ",
						"q1": "B. capon ",
						"q2": "C. cockerel ",
						"q3": "D. hen ",
						"q4": "E. broiler"
					},
					"ans": "B"
				},
				"Q45": {
					"qs": "45.	The type of feed which contains the essential nutrients in the right concentrations and proportions is known as",
					"opts": {
						"q0": "A. growers mash",
						"q1": "B. weaners diet",
						"q2": "C. creep feed",
						"q3": "D. concentrate",
						"q4": "E. balance diet."
					},
					"ans": "E"
				},
				"Q46": {
					"qs": "46.	Which of the following is not a reason why planting a mixture of grass and legume on a pasture is economical to the farmer? The",
					"opts": {
						"q0": "A. mixture can harbour pests",
						"q1": "B. mixture helps in preventing soil erosion",
						"q2": "C. farmer will save on fertilizer",
						"q3": "D. mixture provides a balanced feed for livestock",
						"q4": "E. mixture increases the rate of production of livestock."
					},
					"ans": "A"
				},
				"Q47": {
					"qs": "47.	The parts of the body affected by Newcastle disease of poultry are the",
					"opts": {
						"q0": "A. digestive and circulatory systems",
						"q1": "B. reproductive and excretory tracts",
						"q2": "C. nervous system and respiratory tract",
						"q3": "D. air-sac ana the comb",
						"q4": "E. comb and the legs."
					},
					"ans": "C"
				},
				"Q48": {
					"qs": "48.	A fish pond is an enclosed body of water for",
					"opts": {
						"q0": "A. rearing fish for consumption",
						"q1": "B. rearing aquatic organisms for feeding fish",
						"q2": "C. storing fisn and other organisms",
						"q3": "D. keeping ornamental fish and aquatic plants",
						"q4": "E. rearing fish and other aquatic mammals."
					},
					"ans": "A"
				},
				"Q49": {
					"qs": "49.	The breed of goat noted for its production of high quality Morocco leather is the",
					"opts": {
						"q0": "A. West African dwarf",
						"q1": "B. Kano brown",
						"q2": "C. Ouda ",
						"q3": "D. Bornu red",
						"q4": "E. Sokoto red"
					},
					"ans": "E"
				},
				"Q50": {
					"qs": "50.	Which of the following is not a source of minerals in animal nutrition?",
					"opts": {
						"q0": "A. Green pastures",
						"q1": "B. Fish meal",
						"q2": "C. Blood meal",
						"q3": "D. Cereal",
						"q4": "E. Palm oil."
					},
					"ans": "E"
				},
				"Q51": {
					"qs": "51.	The following are all leguminous forage crops except",
					"opts": {
						"q0": "A. Centrosema pubescens",
						"q1": "B. Vigna sinensis",
						"q2": "C. Stylodsnynrd htsvilid",
						"q3": "D. Panicum Maximum",
						"q4": "E. Pueraria phaseoloiaes"
					},
					"ans": "D"
				},
				"Q52": {
					"qs": "52.	Which of the following livestock diseases is transmitted by ticks?",
					"opts": {
						"q0": "A. Red water",
						"q1": "B. Coccidiosis",
						"q2": "C. Aspergillosis",
						"q3": "D. Trypanosomiasis",
						"q4": "E. Brucellosis"
					},
					"ans": "A"
				},
				"Q53": {
					"qs": "53.	Dissolved oxygen in fisn ponds is maintained at normal level in order to",
					"opts": {
						"q0": "A. accelerate decay of plant materials",
						"q1": "B. prevent disease attacks",
						"q2": "C. prevent acquatic plants from competing with fish",
						"q3": "D. keep fish activities normal",
						"q4": "E. improve the quality offish"
					},
					"ans": "D"
				},
				"Q54": {
					"qs": "54.	Which of the following is not a quality for selecting livestock?",
					"opts": {
						"q0": "A. Feed consumption",
						"q1": "B. Egg production",
						"q2": "C. Mortality rate",
						"q3": "D. Body weight",
						"q4": "E. Litter size."
					},
					"ans": "A"
				},
				"Q55": {
					"qs": "55. Investments with long life span in agricultural economics are otherwise known as",
					"opts": {
						"q0": "A. labour",
						"q1": "B. entrepreneurship",
						"q2": "C. savings deposit",
						"q3": "D. profit ",
						"q4": "E. capital"
					},
					"ans": "E"
				},
				"Q56": {
					"qs": "56. Under normal circumstances, the concept of consumer sovereignty in agriculture implies that",
					"opts": {
						"q0": "A. the consumer and not the farmer determines what to produce",
						"q1": "B. both the farmer and the consumer determine what to produce",
						"q2": "C. the consumer and not the farmer owns the means of production",
						"q3": "D. the environmental factors determine what to produce",
						"q4": "E. the farmers determine what to produce."
					},
					"ans": "A"
				},
				"Q57": {
					"qs": "57.	Agricultural credits given to farmers in form of cash are used by the farmer to",
					"opts": {
						"q0": "A. disseminate the latest technique in farming",
						"q1": "B. implement new policies",
						"q2": "C. investigate the cause of low agricultural production",
						"q3": "D. make the total cash value of his crops greater than his expenses",
						"q4": "E. pay for expenses in his farming business."
					},
					"ans": "E"
				},
				"Q58": {
					"qs": "58. Farm records and account help the farmer to",
					"opts": {
						"q0": "A. manage his farm as a business",
						"q1": "B. repair his tools and machinery",
						"q2": "C. transport his crop to the market",
						"q3": "D. be less dependent on farming for an income",
						"q4": "E. adopt modern techniques of farming."
					},
					"ans": "A"
				},
				"Q59": {
					"qs": "59. The disbanded produce marketing boards in Nigeria dealt with the following commodities except",
					"opts": {
						"q0": "A. oil palm",
						"q1": "B. rubber",
						"q2": "C. cocoa",
						"q3": "D. groundnut",
						"q4": "E. yam."
					},
					"ans": "E"
				},
				"Q60": {
					"qs": "60. Agricultural extension programme would succeed in disseminating new ideas to farmers except if the programme",
					"opts": {
						"q0": "A. is based on research tested on local conditions",
						"q1": "B. involves the people for which the programme is planned",
						"q2": "C. involved only the support to highly trained agricultural extension specialist",
						"q3": "D. is not kept flexible to contemporary technology",
						"q4": "E. is based on planned agricultural programmes."
					},
					"ans": "D"
				}
			}
		});
	});

	app.get('/econ/1988', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. Economics is a science which studies human behaviour as a relationship between ends and scarce means which have alternative uses. ‘Ends’ here refers to",
					"opts": {
						"q0": "A. resources",
						"q1": "B. wants",
						"q2": "C. choice",
						"q3": "D. output",
						"q4": "E. factors"
					},
					"ans": "B"
				},
				"Q2": {
					"qs": "2. A review of occupational distribution of population from time to time helps us to know the",
					"opts": {
						"q0": "A. rate at which the population grows",
						"q1": "B. number of people that make up the labour force",
						"q2": "C. efficiency of the working population",
						"q3": "D. industries which are becoming less important",
						"q4": "E. number of people that are not employed"
					},
					"ans": "B"
				},
				"Q3": {
					"qs": "3. The price of a commodity is determined by the",
					"opts": {
						"q0": "A. supplier",
						"q1": "B. consumer",
						"q2": "C. quantity of goods demanded",
						"q3": "D. quantity of goods supplied",
						"q4": "E. interaction of demand and supply"
					},
					"ans": "E"
				},
				"Q4": {
					"qs": "4. In which of the following economic systems is the consumer referred to as The King’ ?",
					"opts": {
						"q0": "A. Planned economy",
						"q1": "B. Mixed economy",
						"q2": "C. Traditional economy",
						"q3": "D. Free Market economy",
						"q4": "E. Socialist economy"
					},
					"ans": "D"
				},
				"Q5": {
					"qs": "5. Into which of these organizations would you classify the International Monetary Fund (IMF) ?",
					"opts": {
						"q0": "A. Political organization",
						"q1": "B. Trade organization",
						"q2": "C. Financial organization",
						"q3": "D. Social organization",
						"q4": "E. Commercial organization"
					},
					"ans": "C"
				},
				"Q6": {
					"qs": "6. A normal demand curve",
					"opts": {
						"q0": "A. is concave to the point of origin",
						"q1": "B. is convex to the point of origin",
						"q2": "C. is parallel to X axis",
						"q3": "D. is parallel to Y axis",
						"q4": "E. slopes upwards from left to right"
					},
					"ans": "B"
				},
				"Q7": {
					"qs": "7. A demand schedule is",
					"opts": {
						"q0": "A. a table containing the price of goods",
						"q1": "B. a table showing the relationship between price and quantity demanded of a commodity",
						"q2": "C. a table showing the consumer demand in order of importance",
						"q3": "D. the quantity of goods the consumer is prepared to buy",
						"q4": "E. the market demand"
					},
					"ans": "B"
				},
				"Q8": {
					"qs": "8. From the above, the formula for calculating Real Per Capita Income is",
					"img": "img**econ_1988_sectionb_qst8_1.jpg",
					"opts": {
						"q0": "img**econ_1988_sectionb_qst8_2.jpg",
						"q1": "img**econ_1988_sectionb_qst8_3.jpg",
						"q2": "img**econ_1988_sectionb_qst8_4.jpg",
						"q3": "img**econ_1988_sectionb_qst8_5.jpg",
						"q4": "img**econ_1988_sectionb_qst8_6.jpg"
					},
					"ans": "D"
				},
				"Q9": {
					"qs": "9. The above table shows the age distribution of a town in Nigeria. What is the dependency ratio of the town?",
					"img": "img**econ_1988_sectionb_qst9_1.jpg",
					"opts": {
						"q0": "A. 10 : 3",
						"q1": "B. 2 : 1",
						"q2": "C. 3 : 2",
						"q3": "D. 4 : 3",
						"q4": "E. 5 : 2"
					},
					"ans": "C"
				},
				"Q10": {
					"qs": "10. The equilibrium position of a firm is attained",
					"opts": {
						"q0": "A. when MC = AR",
						"q1": "B. when MC = P",
						"q2": "C. when MC = MR",
						"q3": "D. when AC = AR",
						"q4": "E. when AR = MR"
					},
					"ans": "C"
				},
				"Q11": {
					"qs": "11. Which of the following is not an advantage of price control?",
					"opts": {
						"q0": "A. Control of inflation",
						"q1": "B. Distortion of price mechanism",
						"q2": "C. Prevention of exploitation",
						"q3": "D. Control of producer’s profit",
						"q4": "E. Helping low income earners"
					},
					"ans": "B"
				},
				"Q12": {
					"qs": "12. Which of these factors does not cause a change in demand?",
					"opts": {
						"q0": "A. income",
						"q1": "B. Taste and fashion",
						"q2": "C. Population",
						"q3": "D. Price of other commodities",
						"q4": "E. Price of the commodity concerned"
					},
					"ans": "E"
				},
				"Q13": {
					"qs": "13. Price control can be defined as the fixing by government of maximum or minimum prices of",
					"opts": {
						"q0": "A. luxury goods",
						"q1": "B. inferior goods",
						"q2": "C. imported capital goods",
						"q3": "D. certain selected goods",
						"q4": "E. goods consumed by low income earners"
					},
					"ans": "D"
				},
				"Q14": {
					"qs": "14. When the price of commodity A increases, the demand for commodity B decreases, then A and Bare",
					"opts": {
						"q0": "A. close substitutes",
						"q1": "B. complementary goods",
						"q2": "C. supplementary goods",
						"q3": "D. giffen goods",
						"q4": "E. luxurious goods"
					},
					"ans": "A"
				},
				"Q15": {
					"qs": "15. When the demand for a commodity is inelastic, total revenue will fall if ",
					"opts": {
						"q0": "A. price is increased",
						"q1": "B. price is reduced",
						"q2": "C. price remains constant",
						"q3": "D. price is not given",
						"q4": "E. the commodity is a luxury"
					},
					"ans": "B"
				},
				"Q16": {
					"qs": "16. In any economic system, which of the following is not an economic problem?",
					"opts": {
						"q0": "A. What goods and services to produce",
						"q1": "B. For whom to produce goods or services",
						"q2": "C. What techniques of production to be adopted",
						"q3": "D. Equal distribution of the goods and services",
						"q4": "E. How to ensure that the economy grow over time"
					},
					"ans": "D"
				},
				"Q17": {
					"qs": "17. The major currency used for granting credits to member countries of the International Monetary Fund (IMF) is the",
					"opts": {
						"q0": "A. US dollar",
						"q1": "B. Canadian dollar",
						"q2": "C. Pound Sterling",
						"q3": "D. Deutschemark",
						"q4": "E. Belgian franc"
					},
					"ans": "A"
				},
				"Q18": {
					"qs": "18. The two largest producers of crude oil in Nigeria are",
					"opts": {
						"q0": "A. Borno and Ondo States",
						"q1": "B. Oyo and Bendel States",
						"q2": "C. Kwara and Benue States",
						"q3": "D. Rivers and Bendel States",
						"q4": "E. Niger and Rivers States"
					},
					"ans": "D"
				},
				"Q19": {
					"qs": "19. If a producer sells 1 kg of rice for N2.00 and his marginal product is 100 kg, what is the highest wage he can pay the marginal labourer?",
					"opts": {
						"q0": "A. N20.00",
						"q1": "B. N30.00",
						"q2": "C. N50.00",
						"q3": "D. N100.00",
						"q4": "E. N200.00"
					},
					"ans": "E"
				},
				"Q20": {
					"qs": "20. Nigeria indigenization decree was promulgated in order to",
					"opts": {
						"q0": "A. allow indigenes to have full participation in the economic activities of the country",
						"q1": "B. drive away foreigners",
						"q2": "C. give equal chances to indigenes and foreigners in making economic decisions in the country",
						"q3": "D. give industrial training to indigenes",
						"q4": "E. indigenes expose the economic activities of the country"
					},
					"ans": "A"
				},
				"Q21": {
					"qs": "21. An economic system in which most capital aoods are owned by individuals and private firms is known as",
					"opts": {
						"q0": "A. Mixed economy",
						"q1": "B. Planned economy",
						"q2": "C. Capitalist economy",
						"q3": "D. Traditional economy",
						"q4": "E. Civilized economy"
					},
					"ans": "C"
				},
				"Q22": {
					"qs": "22. Which of the following is not a feature of the Sole Proprietorship?",
					"opts": {
						"q0": "A. the Sole Proprietor provides the capital to start the business",
						"q1": "B. the Sole Proprietor is the boss of his business",
						"q2": "C. there is unlimited liability",
						"q3": "D. continuity is doubtful at the death of the proprietor",
						"q4": "E. decision can be taken only by 10 people"
					},
					"ans": "E"
				},
				"Q23": {
					"qs": "23. The International Bank for Reconstruction and Development (IBRD) is important to the developing nations because it",
					"opts": {
						"q0": "A. gives loans to members for legal proceedings",
						"q1": "B. offers grants and aids for defence",
						"q2": "C. enhances financial relationship among countries",
						"q3": "D. offers soft loans for educational and health services",
						"q4": "E. offers grants and aids to finance private projects"
					},
					"ans": "C"
				},
				"Q24": {
					"qs": "24. Which of these best explains the Malthusian theory of population?",
					"opts": {
						"q0": "A. increase in population causes hunger and death",
						"q1": "B. The population increases faster than food supply",
						"q2": "C. The population grows at arithmetic progression while food production grows at geometric progression",
						"q3": "D. People could be sent to ‘No man’s land’ when the population increases",
						"q4": "E. People should produce as many children as they could because passion cannot be controlled"
					},
					"ans": "B"
				},
				"Q25": {
					"qs": "25. Which of the following is the most liquid asset to a commercial bank?",
					"opts": {
						"q0": "A. Money at call and short notice",
						"q1": "B. Treasury Bills",
						"q2": "C. Commercial Bills",
						"q3": "D. Stocks and Shares",
						"q4": "E. Cash"
					},
					"ans": "E"
				},
				"Q26": {
					"qs": "26. Which of the following statements is true about terms of trade?",
					"opts": {
						"q0": "A. Terms of trade shows the difference between the value of exports and imports",
						"q1": "B. Terms of trade indicates the rate at which exports exchange for imports ",
						"q2": "C. It is ratio of the price index of exports to imports",
						"q3": "D. It is usually expressed as a percentage",
						"q4": "E. A rise in the price of exports relative to imports is an improvement"
					},
					"ans": "C"
				},
				"Q27": {
					"qs": "27. Which of these does not relate to the law of comparative advantage?",
					"opts": {
						"q0": "A. The law of comparative advantage was propounded by David Ricardo",
						"q1": "B. The law stresses the importance of relative efficiency",
						"q2": "C. In order to specialize, a country must have absolute advantage",
						"q3": "D. The law is based on opportunity cost principle",
						"q4": "E. The principle if followed, should increase total world output"
					},
					"ans": "C"
				},
				"Q28": {
					"qs": "28. A condition which adversely affects expansion of production is",
					"opts": {
						"q0": "A. effective management ",
						"q1": "B. limited size of the market",
						"q2": "C. availability of funds",
						"q3": "D. increased profit prospects",
						"q4": "E. increasing returns to scale"
					},
					"ans": "B"
				},
				"Q29": {
					"qs": "29. International trade and domestic trade are similar in all aspects except that",
					"opts": {
						"q0": "A. transportation by land, water and air is involved",
						"q1": "B. goods are exchanged",
						"q2": "C. services are exchanged",
						"q3": "D. the same currency is used as medium of exchange",
						"q4": "E. specialization and increased consumption is encouraged"
					},
					"ans": "D"
				},
				"Q30": {
					"qs": "30. The drawer of a cheque is the",
					"opts": {
						"q0": "A. person who is to be paid the sum of money as written on the cheque",
						"q1": "B. person who takes the cheque to the bank",
						"q2": "C. bank on which the cheque is drawn",
						"q3": "D. person who writes out the cheque",
						"q4": "E. bank official who certifies the payment"
					},
					"ans": "D"
				},
				"Q31": {
					"qs": "31. Which of the following is not an item of capital expenditure?",
					"opts": {
						"q0": "A. building of roads and bridges",
						"q1": "B. supply of electricity",
						"q2": "C. building of dams",
						"q3": "D. building of harbours",
						"q4": "E. payment of interest on loans"
					},
					"ans": "E"
				},
				"Q32": {
					"qs": "32. Which of the following roles is being playeclby the Organization of Petroleum exporting countries (OPEC) with regards to Nigeria’s crude oil?",
					"opts": {
						"q0": "A. Exploiting",
						"q1": "B. Exploring",
						"q2": "C. Refining",
						"q3": "D. Marketing",
						"q4": "E. Exporting"
					},
					"ans": "D"
				},
				"Q33": {
					"qs": "33. The coefficient of price elasticity of demand is zero when demand is",
					"opts": {
						"q0": "A. fairly elastic",
						"q1": "B. perfectly inelasti",
						"q2": "C. fairly inelastic",
						"q3": "D. unitary elastic",
						"q4": "E. perfectly elastic"
					},
					"ans": "B"
				},
				"Q34": {
					"qs": "34. External economies occur when",
					"opts": {
						"q0": "A. industries are scattered all around",
						"q1": "B. a firm decides to expand",
						"q2": "C. industries are producing below capacity",
						"q3": "D. firms comprising an industry are concentrated in one area",
						"q4": "E. a firm is located near raw materials"
					},
					"ans": "D"
				},
				"Q35": {
					"qs": "35. When the demand for a commodity is inelastic, who bears greater burden of the indirect tax?",
					"opts": {
						"q0": "A. The producer",
						"q1": "B. The government",
						"q2": "C. The retailer",
						"q3": "D. The consumer",
						"q4": "E. The wholesaler"
					},
					"ans": "D"
				},
				"Q36": {
					"qs": "36. Which of the following crops can be referred to as Nigeria’s current export crops",
					"opts": {
						"q0": "A. Rubber, Groundnuts, Beniseed, Cotton",
						"q1": "B. Shear butter, Sorghum, Onions",
						"q2": "C. Rubber, Cocoa, Coffee, Palm Kernel",
						"q3": "D. Palm Oil, Palm Kernel, Sugarcane",
						"q4": "E. Soya beans, Rice, Groundnut, Cashew nut"
					},
					"ans": "C"
				},
				"Q37": {
					"qs": "37. The imposition of high income tax by government to cut down demand is known as",
					"opts": {
						"q0": "A. monetary policy",
						"q1": "B. budgetary policy",
						"q2": "C. fiscal policy",
						"q3": "D. internal policy",
						"q4": "E. development policy"
					},
					"ans": "C"
				},
				"Q38": {
					"qs": "38. Which of these factors does not affect revenue allocation in Nigeria?",
					"opts": {
						"q0": "A. Needs of an area",
						"q1": "B. Size of the population of an area",
						"q2": "C. Number of industries and land area",
						"q3": "D. Revenue derivable from an area",
						"q4": "E. Development needs of the country"
					},
					"ans": "C"
				},
				"Q39": {
					"qs": "39. The term marginal propensity to consume can best be explained as the",
					"opts": {
						"q0": "A. desire to spend more income on consumption",
						"q1": "B. change in consumption as a percentage of the change in income",
						"q2": "C. average income regularly spend on consumption",
						"q3": "D. total expenditure on consumption",
						"q4": "E. inclination to spend only a little on consumption"
					},
					"ans": "B"
				},
				"Q40": {
					"qs": "40. Subsistence farming means producing food",
					"opts": {
						"q0": "A. mainly for the need of our immediate and extended family",
						"q1": "B. crops for sale mainly",
						"q2": "C. crops mainly for export",
						"q3": "D. to feed the community around",
						"q4": "E. in order to satisfy the government directives"
					},
					"ans": "A"
				}
			}
		});
	});

	app.get('/econ/1989', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. Scarcity in Economics means that resources",
					"opts": {
						"q0": "A. are not enough to share among the producers of goods and services",
						"q1": "B. needed to satisfy human wants are limited",
						"q2": "C. are never enough to share among consumers of goods and services",
						"q3": "D. required to meet our essential wants are unlimited",
						"q4": "E. can be managed if those who use them behave rationally."
					},
					"ans": "B"
				},
				"Q2": {
					"qs": "2. A table which shows the price of a commodity and the quantity of it that is demanded per unit time is a",
					"opts": {
						"q0": "A. time series",
						"q1": "B. demand series",
						"q2": "C. demand curve",
						"q3": "D. demand schedule",
						"q4": "E. time schedule."
					},
					"ans": "D"
				},
				"Q3": {
					"qs": "3. The greatest disadvantage of the barter system is the need for",
					"opts": {
						"q0": "A. durability",
						"q1": "B. divisibility",
						"q2": "C. homogeneity",
						"q3": "D. double coincidence of wants",
						"q4": "E. portability."
					},
					"ans": "D"
				},
				"Q4": {
					"qs": "4. An inflation in which the price level rises steadily at an average rate of about 2% per annum is best described as",
					"opts": {
						"q0": "A. galloping",
						"q1": "B. induced",
						"q2": "C. creeping",
						"q3": "D. suppressed",
						"q4": "E. run-away."
					},
					"ans": "C"
				},
				"Q5": {
					"qs": "5. In Economics, market is defined as",
					"opts": {
						"q0": "A. a place where buyers and sellers come together to exchange goods",
						"q1": "B. any agreement made for consumers to buy all they need",
						"q2": "C. any arrangement made for producers to sell all their goods",
						"q3": "D. any arrangement whereby tne buyers and sellers are in close touch with one another",
						"q4": "E. a place where only consumer goods are sold."
					},
					"ans": "D"
				},
				"Q6": {
					"qs": "6. Money supply at any given point in time refers to",
					"opts": {
						"q0": "A. Bank notes, coins and demand deposits",
						"q1": "B. notes and coins only",
						"q2": "C. minted money",
						"q3": "D. hoarded money",
						"q4": "E. money received as gifts."
					},
					"ans": "A"
				},
				"Q7": {
					"qs": "7. All the following are sources of finance to a Join Stock Company except",
					"opts": {
						"q0": "A. bank loan",
						"q1": "B. equity shares",
						"q2": "C. debentures",
						"q3": "D. preference shares",
						"q4": "E. cooperative thrift."
					},
					"ans": "E"
				},
				"Q8": {
					"qs": "8. Data presented in tables are usually arranged in",
					"opts": {
						"q0": "A. charts and tables",
						"q1": "B. rows and columns",
						"q2": "C. graphs and rows",
						"q3": "D. pictograms and columns",
						"q4": "E. maps and pie charts."
					},
					"ans": "B"
				},
				"Q9": {
					"qs": "9. Which of the following is not a function of money?",
					"opts": {
						"q0": "A. Store of value",
						"q1": "B. Unit of account",
						"q2": "C. Measure of value",
						"q3": "D. Standard for deferred payment",
						"q4": "E. Stability in value."
					},
					"ans": "E"
				},
				"Q10": {
					"qs": "10. Which of the following is not appropriate in calculating national income figures?",
					"opts": {
						"q0": "A. Output method",
						"q1": "B. Income method",
						"q2": "C. Expenditure method",
						"q3": "D. Value added method",
						"q4": "E. Depreciation method."
					},
					"ans": "E"
				},
				"Q11": {
					"qs": "11. What is the correct term for this group of exports: tractors, television, components, drugs and cars?",
					"opts": {
						"q0": "A. Current account items",
						"q1": "B. Visible exports",
						"q2": "C. Capital account items",
						"q3": "D. Invisible exports",
						"q4": "E. visible imports."
					},
					"ans": "B"
				},
				"Q12": {
					"qs": "12. The indicator of the value of money in the market is",
					"opts": {
						"q0": "A. the general price level",
						"q1": "B. effective supply",
						"q2": "C. the equilibrium price",
						"q3": "D. effective demand",
						"q4": "E. consumers income."
					},
					"ans": "A"
				},
				"Q13": {
					"qs": "13. Mobility of labour is not affected by",
					"opts": {
						"q0": "A. the optimum size of population",
						"q1": "B. marriage and family",
						"q2": "C. the regulation of trade unions",
						"q3": "D. the period of training",
						"q4": "E. cultural arid religious beliefs."
					},
					"ans": "A"
				},
				"Q14": {
					"qs": "14. Given that fixed cost is N500.00, variable cost is N1,£00.00 abd,.output is 50 units, what will be the average cost of producing one unit?",
					"opts": {
						"q0": "A. N2,000.00",
						"q1": "B. N60.00",
						"q2": "C. N50.00",
						"q3": "D. N40.00",
						"q4": "E. N30.00."
					},
					"ans": "D"
				},
				"Q15": {
					"qs": "15. Which of the following is regarded as fixed cost?",
					"opts": {
						"q0": "A. Cost of raw materials",
						"q1": "B. Cost of fuel",
						"q2": "C. Cost of light",
						"q3": "D. Rent on land",
						"q4": "E. Labour wages."
					},
					"ans": "D"
				},
				"Q16": {
					"qs": "16. Which of the following reasons explains the upward sloping supply curve in a competitive market?",
					"opts": {
						"q0": "A. Ceteris paribus, marginal cost increases as output increases",
						"q1": "B. As new firms enter the market, factor prices move up",
						"q2": "C. Firms are in business to satisfy consumers",
						"q3": "D. Marginal cost often increases in a competitive market",
						"q4": "E. Firms are in business to produce goods."
					},
					"ans": "A"
				},
				"Q17": {
					"qs": "17. A firm is said to be a Public Joint-Stock Company when it",
					"opts": {
						"q0": "A. is owned by the government",
						"q1": "B. operates as a public corporation",
						"q2": "C. is a limited liability company",
						"q3": "D. sells its shares to members of the public",
						"q4": "E. is administered by the public."
					},
					"ans": "D"
				},
				"Q18": {
					"qs": "18. Which of the following factors is not important in deciding the location of an industry?",
					"opts": {
						"q0": "A. The native language of the people",
						"q1": "B. Availability of suitable labour",
						"q2": "C. Sources of cheap power and raw materials",
						"q3": "D. Proximity to the location of a similar industry",
						"q4": "E. Proximity to the market."
					},
					"ans": "A"
				},
				"Q19": {
					"qs": "19. The clearing nouse of all commercial banks in Nigeria is the",
					"opts": {
						"q0": "A. General Post Office",
						"q1": "B. Bank for Commerce and Industry",
						"q2": "C. Nigerian Industrial Development Bank",
						"q3": "D. Mortgage Bank",
						"q4": "E. Central Bank."
					},
					"ans": "E"
				},
				"Q20": {
					"qs": "20. One of the advantages of a sole proprietorship is that",
					"opts": {
						"q0": "A. risks are unlimited",
						"q1": "B. technological progress is often out of reach",
						"q2": "C. shares and stocks can be issued to raise funds",
						"q3": "D. initiative can be used in all cases",
						"q4": "E. it folds up in the case of death, lunacy or insolvency."
					},
					"ans": "D"
				},
				"Q21": {
					"qs": "21. Which of the following does not hinder the efficient distribution of goods in West Africa?",
					"opts": {
						"q0": "A. Inadequate transportation network",
						"q1": "B. inadequate storage facilities for agricultural goods",
						"q2": "C. inadequate credit facilities for potential distributors",
						"q3": "D. Government participation in the distributive trade",
						"q4": "E. The tendency to hoard and smuggle."
					},
					"ans": "D"
				},
				"Q22": {
					"qs": "22. Which of the following categories of people do not gain during inflation?",
					"opts": {
						"q0": "A. Debtors",
						"q1": "B. Businessmen",
						"q2": "C. Shareholders",
						"q3": "D. investors",
						"q4": "E. Creditors."
					},
					"ans": "E"
				},
				"Q23": {
					"qs": "23. One of the arguments against the presence of middlemen in the distribution chain is that they",
					"opts": {
						"q0": "A. cause increases in tne prices of commodities",
						"q1": "B. are commissioned agents",
						"q2": "C. helps in keeping prices stable",
						"q3": "D. grade and blend goods",
						"q4": "E. can be found almost anywhere."
					},
					"ans": "A"
				},
				"Q24": {
					"qs": "24. Which of the following is the normal channel by which commodities reach the final consumers?",
					"opts": {
						"q0": "A. Manufacturer-wholesaler-agent retailer-consumer",
						"q1": "B. Manufacturer-wholesaler-retailer-consumer",
						"q2": "C. Manufacturer-wholesaler-sales representative-retailer-consumer",
						"q3": "D. Manufacturer-wholesaler-retailer- agent-consumer",
						"q4": "E. Manufacturer-wholesaler-retailer-sales-representative-consumer."
					},
					"ans": "B"
				},
				"Q25": {
					"qs": "25. The movement of a worker from one grade to another within the same industry is a form of mobility of labour which is",
					"opts": {
						"q0": "A. geographical",
						"q1": "B. vertical",
						"q2": "C. occupational",
						"q3": "D. horizontal",
						"q4": "E. lateral."
					},
					"ans": "D"
				},
				"Q26": {
					"qs": "26. A person who buys in bulk and sells in bits is a",
					"opts": {
						"q0": "A. manufacturer",
						"q1": "B. sales representative",
						"q2": "C. retailer",
						"q3": "D. advertiser",
						"q4": "E. distributor."
					},
					"ans": "C"
				},
				"Q27": {
					"qs": "27. Which of the following is not correct?",
					"opts": {
						"q0": "A. Population refers to the number of people living in a place",
						"q1": "B. The population of a place is not static",
						"q2": "C. Population is known through a census",
						"q3": "D. Population is affected by the amount of money in circulation",
						"q4": "E. Population can be affected by natural disaster."
					},
					"ans": "D"
				},
				"Q28": {
					"qs": "28. The money paid per hour or week for work done is known as",
					"opts": {
						"q0": "A. cost",
						"q1": "B. time rate",
						"q2": "C. bonus",
						"q3": "D. wage rate",
						"q4": "E. labour."
					},
					"ans": "D"
				},
				"Q29": {
					"qs": "29. In a rapidly growing economy where human labour is being replaced by machines, there is likely to be a",
					"opts": {
						"q0": "A. classical unemployment",
						"q1": "B. fractional unemployment",
						"q2": "C. seasonal unemployment",
						"q3": "D. residual unemployment",
						"q4": "E. cyclical unemployment."
					},
					"ans": "B"
				},
				"Q30": {
					"qs": "30. Distribution is part of production because it",
					"opts": {
						"q0": "A. makes goods and services available to the final consumer",
						"q1": "B. transports tne goods from place to place",
						"q2": "C. offers employment to people",
						"q3": "D. encourages the provision of good roads, waterways and railways",
						"q4": "E. links the consumers with the producers."
					},
					"ans": "A"
				},
				"Q31": {
					"qs": "31. The grouping of a population into males and females is known as the",
					"opts": {
						"q0": "A. geographical distribution",
						"q1": "B. age distribution",
						"q2": "C. sex distribution",
						"q3": "D. man-woman distribution",
						"q4": "E. occupational distribution."
					},
					"ans": "C"
				},
				"Q32": {
					"qs": "32. Which of the following is the most important reason why wages differ among occupations?",
					"opts": {
						"q0": "A. Length and cost of training",
						"q1": "B. Supply of labour",
						"q2": "C. Attractiveness of the job",
						"q3": "D. Influence of trade unions",
						"q4": "E. Government decision."
					},
					"ans": "B"
				},
				"Q33": {
					"qs": "33. A legal tender is any",
					"opts": {
						"q0": "A. form of money",
						"q1": "B. means of exchange authorized by the state",
						"q2": "C. commodity generally acceptable as a medium of exchange",
						"q3": "D. total productivity of labour",
						"q4": "E. amount of goods and services that the wage can fetch."
					},
					"ans": "C"
				},
				"Q34": {
					"qs": "34. Wages are to some extent determined by the",
					"opts": {
						"q0": "A. marginal utility of labour",
						"q1": "B. marginal productivity of labour",
						"q2": "C. average productivity of labour",
						"q3": "D. total productivity of labour",
						"q4": "E. amount of goods and services that the wage can fetch."
					},
					"ans": "B"
				},
				"Q35": {
					"qs": "35. Inflation in any economy",
					"opts": {
						"q0": "A. has no monetary connection",
						"q1": "B. implies a sustained decrease in the general price level",
						"q2": "C. always increases the value of the national currency",
						"q3": "D. tends to redistribute income arbitrarily",
						"q4": "E. tends to bring down market prices."
					},
					"ans": "D"
				},
				"Q36": {
					"qs": "36. Which of these does not encourage industrial development?",
					"opts": {
						"q0": "A. Tax exemption",
						"q1": "B. Provision of financial institutions",
						"q2": "C. Provision of infrastructural facilities",
						"q3": "D. Limitation of market for industrial products",
						"q4": "E. Government direct participation."
					},
					"ans": "D"
				},
				"Q37": {
					"qs": "37. Industry can simply be defined as",
					"opts": {
						"q0": "A. many firms producing different products",
						"q1": "B. a firm or firms producing similar goods and services",
						"q2": "C. different firms producing different goods",
						"q3": "D. different firms producing equal number of similar goods and services",
						"q4": "E. many firms producing unidentical goods and services."
					},
					"ans": "B"
				},
				"Q38": {
					"qs": "38. The reward of a debenture holder of a public company is a fixed rate of",
					"opts": {
						"q0": "A. interest",
						"q1": "B. return",
						"q2": "C. dividend",
						"q3": "D. rent",
						"q4": "E. allowance."
					},
					"ans": "A"
				},
				"Q39": {
					"qs": "39. The downward sloping of the Average Revenue curve of the monopolist indicates that he",
					"opts": {
						"q0": "A. can control both output and price",
						"q1": "B. can only break-even",
						"q2": "C. can control either the output or the price, but not both",
						"q3": "D. ",
						"q4": "E. exploits the consumers."
					},
					"ans": "C"
				},
				"Q40": {
					"qs": "40. Which of the following hard currencies is usually used in the pricing of oil at the world market particularly by the Organization of Petroleum Exporting Countries (OPEC)? The",
					"opts": {
						"q0": "A. US dollar",
						"q1": "B. Japanese Yen",
						"q2": "C. Pound Sterling",
						"q3": "D. Deutschemark",
						"q4": "E. Naira."
					},
					"ans": "A"
				}
			}
		});
	});

	app.get('/econ/1990', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. Economics can be best defined as the study of",
					"opts": {
						"q0": "A. how to spend the family income efficiently",
						"q1": "B. how to find minimum cost of production",
						"q2": "C. the interpretation of scarce resources and date",
						"q3": "D. how scarce resources can be used efficiently",
						"q4": "E. why resources are scarce."
					},
					"ans": "D"
				},
				"Q2": {
					"qs": "2. Which of the following are resources for holding money instead of investing it? I. Transaction motive II. Precautionary motive ill. Speculative motive IV. Liquidity motive",
					"opts": {
						"q0": "A. I and II only",
						"q1": "B. I and III only",
						"q2": "C. I, II and 111 only",
						"q3": "D. I, II and IV only",
						"q4": "E. II, III and IV only."
					},
					"ans": "C"
				},
				"Q3": {
					"qs": "3. It is generally believed that inflation in West Africa is caused by all the factors listed below except",
					"opts": {
						"q0": "A. excessive bank lending",
						"q1": "B. budget deficit",
						"q2": "C. rising incomes",
						"q3": "D. shortages in supply",
						"q4": "E. decrease in money supply."
					},
					"ans": "E"
				},
				"Q4": {
					"qs": "4. All the followingare specific examples of indirect tax except",
					"opts": {
						"q0": "A. purchases tax",
						"q1": "B. import duty",
						"q2": "C. export duty",
						"q3": "D. excise duty",
						"q4": "E. poll tax."
					},
					"ans": "E"
				},
				"Q5": {
					"qs": "5. Demand in Economics is synonymous with",
					"opts": {
						"q0": "A. needs",
						"q1": "B. wants of the consumers",
						"q2": "C. all goods demanded in the market",
						"q3": "D. wants supported with ability to pay",
						"q4": "E. all consumer goods."
					},
					"ans": "D"
				},
				"Q6": {
					"qs": "6. All the following factors will cause a change in demand except",
					"opts": {
						"q0": "A. the consumer’s income",
						"q1": "B. the consumer’s taste",
						"q2": "C. a change in population size",
						"q3": "D. a change in weather condition",
						"q4": "E. the price of the commodity."
					},
					"ans": "E"
				},
				"Q7": {
					"qs": "7. A rational consumer tends to do all the following except",
					"opts": {
						"q0": "A. buying more at a high price than at a low price",
						"q1": "B. buying more at a low price than at a high price",
						"q2": "C. buying at utility maximization",
						"q3": "D. reacting to price changes",
						"q4": "E. complying with the law of demand."
					},
					"ans": "A"
				},
				"Q8": {
					"qs": "8. A firm that charges different prices for goods or services that have the same technical qualities is called",
					"opts": {
						"q0": "A. a perfect competitor",
						"q1": "B. a monopsony",
						"q2": "C. an oligopoly",
						"q3": "D. a discriminating monopoly",
						"q4": "E. a duopoly."
					},
					"ans": "D"
				},
				"Q9": {
					"qs": "9. A perfect market has all the following features except that",
					"opts": {
						"q0": "A. there are many buyers and few sellers",
						"q1": "B. the commodities bought and soldare homogenous",
						"q2": "C. there is free entry and exit",
						"q3": "D. buyers and sellers have perfect knowledge of the market",
						"q4": "E. there is only one ruling price."
					},
					"ans": "A"
				},
				"Q10": {
					"qs": "10. The purchasing power of the naira will fall when",
					"opts": {
						"q0": "A. workers are retrenched",
						"q1": "B. the colour of the naira is changed",
						"q2": "C. the government cuts all salaries and wages",
						"q3": "D. there is inflation",
						"q4": "E. the naira is overvalued."
					},
					"ans": "D"
				},
				"Q11": {
					"qs": "11. Time deposit has the same meaning as",
					"opts": {
						"q0": "A. current account",
						"q1": "B. demand deposit",
						"q2": "C. deposit account",
						"q3": "D. bank deposit",
						"q4": "E. bank rate."
					},
					"ans": "C"
				},
				"Q12": {
					"qs": "12. Which of the following best explains an inflationary situation at current price level?",
					"opts": {
						"q0": "A. Demand, Supply",
						"q1": "B. Demand Supply",
						"q2": "C. Demand=Supply",
						"q3": "D. Demand/Supply",
						"q4": "E. Demand=Zero."
					},
					"ans": "A"
				},
				"Q13": {
					"qs": "13. The theory of consumer behaviour is based on all the following assumptions except that the",
					"opts": {
						"q0": "A. consumer is assumed irrational",
						"q1": "B. consumer taste remains constant",
						"q2": "C. consumer has budget constraint",
						"q3": "D. consumer aims at maximizing his utility",
						"q4": "E. consumer is exposed to more than one commodity."
					},
					"ans": "A"
				},
				"Q14": {
					"qs": "14. The Joint Stock Company can be a private company whose minimum membership is",
					"opts": {
						"q0": "A. 2",
						"q1": "B. 5",
						"q2": "C. 7",
						"q3": "D. 10",
						"q4": "E. 20."
					},
					"ans": "A"
				},
				"Q15": {
					"qs": "15. Limited liability in Economics means that",
					"opts": {
						"q0": "A. a shareholder’s liability in the event of debt or bankruptcy is limited to the amount he has invested",
						"q1": "B. a shareholder’s liability for the debt company is dependent on how much he is owing",
						"q2": "C. shareholders cannot be asked to pay for the debts of the company",
						"q3": "D. shareholders try to ensure that only a small proportion of the debt comes to them",
						"q4": "E. shareholders want all debts paid equally."
					},
					"ans": "A"
				},
				"Q16": {
					"qs": "16. Regressive tax is not a good tax system because it",
					"opts": {
						"q0": "A. is not convenient to pay",
						"q1": "B. is not certain what to pay",
						"q2": "C. is not economical to collect",
						"q3": "D. does not ensure equity in payment",
						"q4": "E. is not neutral to price trends."
					},
					"ans": "D"
				},
				"Q17": {
					"qs": "17. The price and quantity of crude oil and petrol sold to other countries by Nigeria is fixed by the",
					"opts": {
						"q0": "A. ECOWAS",
						"q1": "B. IMF",
						"q2": "C. OPEC",
						"q3": "D. NNPC",
						"q4": "E. ECA."
					},
					"ans": "C"
				},
				"Q18": {
					"qs": "18. Which of the following is not a member of the OPEC? ",
					"opts": {
						"q0": "A. Indonesia",
						"q1": "B. Iran",
						"q2": "C. Venezuela",
						"q3": "D. UnitedArab Emirates",
						"q4": "E. Egypt."
					},
					"ans": "E"
				},
				"Q19": {
					"qs": "19. Which of the following statements is not true of capital income?",
					"opts": {
						"q0": "A. It helps in the assessment of standard of living",
						"q1": "B. It is calculated as National Income Population",
						"q2": "C. It is calculated as Population National Income",
						"q3": "D. It is used by the UNO to assess and assist developing countries",
						"q4": "E. It is used as one of the indicators of economic growth."
					},
					"ans": "B"
				},
				"Q20": {
					"qs": "20. The notion of short-run and long-run periods is responsible for grouping costs into",
					"opts": {
						"q0": "A. fixed and variable",
						"q1": "B. implicit and explicit",
						"q2": "C. average and total",
						"q3": "D. capital and running",
						"q4": "E. money and opportunity."
					},
					"ans": "A"
				},
				"Q21": {
					"qs": "21. Which of the following statements is not true of cheques? They",
					"opts": {
						"q0": "A. provide an alternative to carrying large sums of money around",
						"q1": "B. can be written out for.any amount needed",
						"q2": "C. are legal tender",
						"q3": "D. provide a form of receipt",
						"q4": "E. provide a record of payments made."
					},
					"ans": "C"
				},
				"Q22": {
					"qs": "22. The liquidity ratio of a commercial bank refers to the",
					"opts": {
						"q0": "A. proportion of the bank’s total assets which should be held in cash and liquid form",
						"q1": "B. total amount of cash for tne bank’s treasury",
						"q2": "C. total amount of cash for the bank in the central bank",
						"q3": "D. proportion of the bank’s cash that should be on loan",
						"q4": "E. proportion of the bank’s cash and assets that should be kept with other banks."
					},
					"ans": "A"
				},
				"Q23": {
					"qs": "23. Which of the following are not agents of distribution?",
					"opts": {
						"q0": "A. Wholesalers",
						"q1": "B. Retailers",
						"q2": "C. Consumers",
						"q3": "D. Government agencies",
						"q4": "E. Cooperative societies."
					},
					"ans": "C"
				},
				"Q24": {
					"qs": "24. One of the greatest demerits of the middlemen in Nigeria is that they",
					"opts": {
						"q0": "A. increase the prices of goods and services at will",
						"q1": "B. Sell in small units only",
						"q2": "C. Store goods in warehouses that are not spacious enough",
						"q3": "D. Sell on credit to retailers only",
						"q4": "E. Do not advertise their goods."
					},
					"ans": "A"
				},
				"Q25": {
					"qs": "25. When a business has unlimited liability",
					"opts": {
						"q0": "A. the owners are not responsible for all its financial debts",
						"q1": "B. all its profits can be taxed by the government",
						"q2": "C. the owners are responsible for all its financial debts",
						"q3": "D. all its assets belong to the members of its board of directors",
						"q4": "E. it ceases to exist at the death of one of its owners."
					},
					"ans": "C"
				},
				"Q26": {
					"qs": "26. When a country has a large labour force, it is beneficial to use a method of production which is",
					"opts": {
						"q0": "A. capital intensive",
						"q1": "B. land intensive",
						"q2": "C. labour intensive",
						"q3": "D. mechanically intensive",
						"q4": "E. technically intensive."
					},
					"ans": "C"
				},
				"Q27": {
					"qs": "27. Which of the following are determinants of the rate of population growth?",
					"opts": {
						"q0": "A. Birth rate, immigration and death rate",
						"q1": "B. Birth rate, death rate and emigration",
						"q2": "C. Death rate, oirth rate and net migration",
						"q3": "D. Migration, large families and birth rate",
						"q4": "E. Death rate, migration and mortality rate."
					},
					"ans": "C"
				},
				"Q28": {
					"qs": "28. The concentration of industries in one area is referred to as",
					"opts": {
						"q0": "A. location of industries",
						"q1": "B. multiplication of industries",
						"q2": "C. pluralization of industries",
						"q3": "D. proliferation of industries",
						"q4": "E. localization of industries."
					},
					"ans": "NO ANSWER"
				},
				"Q29": {
					"qs": "29. Which of the following best describes the budget?",
					"opts": {
						"q0": "A. plan of government’s needs and expenditure for a year",
						"q1": "B. detailed estimate of government financial operation for a year",
						"q2": "C. satisfactory balance between income and expenditure for one year",
						"q3": "D. plan for importation of essential goods and services for one year",
						"q4": "E. plan for control of government industries and corporations for one year."
					},
					"ans": "B"
				},
				"Q30": {
					"qs": "30. Which of the following is not done by the NNPC?",
					"opts": {
						"q0": "A. Production of crude oil",
						"q1": "B. Refining of crude oil",
						"q2": "C. Exploration for crude oil",
						"q3": "D. Exploitation of crude oil",
						"q4": "E. Pricing of crude oil."
					},
					"ans": "E"
				},
				"Q31": {
					"qs": "31. One major function of the central bank is to",
					"opts": {
						"q0": "A. mint money",
						"q1": "B. hold demand deposits and honour cheques",
						"q2": "C. act as a medium of exchange",
						"q3": "D. create money",
						"q4": "E. control and regulate money supply."
					},
					"ans": "E"
				},
				"Q32": {
					"qs": "32. Distribution involves the",
					"opts": {
						"q0": "A. movement of raw materials to production centres",
						"q1": "B. transfer of goods and services from one market to another",
						"q2": "C. movement of goods and services by middlemen to urban centres",
						"q3": "D. transfer of goods and services from wholesalers to consumers",
						"q4": "E. transfer of goods and services from production centre to consumers."
					},
					"ans": "E"
				},
				"Q33": {
					"qs": "33. Disguised unemployment",
					"opts": {
						"q0": "A. is a statistical artifact with no economic meaning",
						"q1": "B. can be eliminated if the capital output rafio is increased",
						"q2": "C. can be eliminated if the press is free",
						"q3": "D. calls for the implementation of five-year plans",
						"q4": "E. exists when manpower is not being utilized efficiently."
					},
					"ans": "E"
				},
				"Q34": {
					"qs": "34. The Nigerian economy can best be described as a",
					"opts": {
						"q0": "A. socialist economy",
						"q1": "B. capitalist economy",
						"q2": "C. mixed economy",
						"q3": "D. controlled economy ",
						"q4": "E. domestic economy."
					},
					"ans": "C"
				},
				"Q35": {
					"qs": "35. The table above illustrates the law of",
					"img": "img**econ_1990_sectionb_qst35_1.jpg",
					"opts": {
						"q0": "A. diminishing marginal utility",
						"q1": "B. diminishing marginal productivity",
						"q2": "C. diminishing returns",
						"q3": "D. increasing returns",
						"q4": "E. increasing productivity."
					},
					"ans": "A"
				},
				"Q36": {
					"qs": "36. The amount of money to be created by commercial banks is actually influenced by the",
					"opts": {
						"q0": "A. legal reserve ratio",
						"q1": "B. external reserve",
						"q2": "C. external borrowing",
						"q3": "D. availability of money and capital market",
						"q4": "E. bank deposits."
					},
					"ans": "A"
				},
				"Q37": {
					"qs": "37. Another name for the International Bank for Reconstruction and Development (IBRD) is",
					"opts": {
						"q0": "A. International Monetary Fund",
						"q1": "B. International Development Bank",
						"q2": "C. World Bank",
						"q3": "D. International Bank of Africa",
						"q4": "E. International Bank for West Africa."
					},
					"ans": "C"
				},
				"Q38": {
					"qs": "38. The headquarters of the Organization of Petroleum Exporting Countries (OPEC) is in",
					"opts": {
						"q0": "A. Geneva, Switzerland",
						"q1": "B. Vienna, Austria",
						"q2": "C. Paris, France",
						"q3": "D. London, Britain",
						"q4": "E. New York, USA."
					},
					"ans": "B"
				},
				"Q39": {
					"qs": "39. The wholesaler provides all.the following services to the manufacturer except",
					"opts": {
						"q0": "A. warehousing",
						"q1": "B. financing production",
						"q2": "C. marketing the product",
						"q3": "D. granting credit",
						"q4": "E. after-sales services."
					},
					"ans": "E"
				},
				"Q40": {
					"qs": "40.	The country that makes the largest contribution to the IMF is",
					"opts": {
						"q0": "A. The USA",
						"q1": "B. Britain",
						"q2": "C. West Germany",
						"q3": "D. France",
						"q4": "E. Norway."
					},
					"ans": "A"
				}
			}
		});
	});

	app.get('/english/1988', function(req, res) {
		res.json({
			data: {
				"headd": "Objective Test Questions: Answer all the questions",
				"S1": {
					"PA": {
						"qst": [
							"Probably the Motorist saw the --1-- lorry too --2-- to be able --3-- disaster.",
							"However, he realized that if he kept to the --4--, a probably --5-- head on --6-- would be unavoidable.",
							"The only alternative was to take the lesser risk of leaving the road.",
							"With great care therefore, he turned sharply --7-- the road and into the ditch by the --8--.",
							"The consequence was that,  instead of being involved in a serious and probably fatal --9--, ",
							"the --10-- escaped with a few minor --11-- and bruises, while the only --12-- to his car was a bent mudguard.",
							"By --13-- into the roadside ditch to avoid what could have been a collision with the approaching lorry, ",
							"he averted a --14-- accident at the --15-- of a few --16-- to himelf and a slight damage to his car."
						],
						"Q1": {
							"opts": {
								"q0": "A. incoming",
								"q1": "B. oncoming",
								"q2": "C. downcoming",
								"q3": "D. offcoming",
								"q4": "E. outcoming"
							},
							"ans": "B"
						},
						"Q2": {
							"opts": {
								"q0": "A. much",
								"q1": "B. early",
								"q2": "C. soon",
								"q3": "D. often",
								"q4": "E. late"
							},
							"ans": "E"
						},
						"Q3": {
							"opts": {
								"q0": "A. avert",
								"q1": "B. revert",
								"q2": "C. convert",
								"q3": "D. averse",
								"q4": "E. reverse"
							},
							"ans": "A"
						},
						"Q4": {
							"opts": {
								"q0": "A. road-side",
								"q1": "B. traffic",
								"q2": "C. way",
								"q3": "D. road",
								"q4": "E. level-crossinq"
							},
							"ans": "D"
						},
						"Q5": {
							"opts": {
								"q0": "A. slight",
								"q1": "B. fatalistic",
								"q2": "C. fatal",
								"q3": "D. mild",
								"q4": "E. fantastic "
							},
							"ans": "C"
						},
						"Q6": {
							"opts": {
								"q0": "A. collision",
								"q1": "B. collusion",
								"q2": "C. confusion",
								"q3": "D. collation",
								"q4": "E. coalition"
							},
							"ans": "A"
						},
						"Q7": {
							"opts": {
								"q0": "A. of",
								"q1": "B. off",
								"q2": "C. up",
								"q3": "D. over",
								"q4": "E. through"
							},
							"ans": "B"
						},
						"Q8": {
							"opts": {
								"q0": "A. road",
								"q1": "B. level-crossing",
								"q2": "C. pavement",
								"q3": "D. alley",
								"q4": "E. roadside"
							},
							"ans": "E"
						},
						"Q9": {
							"opts": {
								"q0": "A. casualty",
								"q1": "B. collusion",
								"q2": "C. fall",
								"q3": "D. accident",
								"q4": "E. jump"
							},
							"ans": "D"
						},
						"Q10": {
							"opts": {
								"q0": "A. transporter",
								"q1": "B. cyclist",
								"q2": "C. driver",
								"q3": "D. rider",
								"q4": "E. motor-cyclist"
							},
							"ans": "C"
						},
						"Q11": {
							"opts": {
								"q0": "A. caught",
								"q1": "B. cuts",
								"q2": "C. cut",
								"q3": "D. cult",
								"q4": "E. carts"
							},
							"ans": "B"
						},
						"Q12": {
							"opts": {
								"q0": "A. damage",
								"q1": "B. collision",
								"q2": "C. accident",
								"q3": "D. repair",
								"q4": "E. fall"
							},
							"ans": "A"
						},
						"Q13": {
							"opts": {
								"q0": "A. swerving",
								"q1": "B. jumping",
								"q2": "C. hooting",
								"q3": "D. speeding",
								"q4": "E. accelerating"
							},
							"ans": "A"
						},
						"Q14": {
							"opts": {
								"q0": "A. huge",
								"q1": "B. gigantic",
								"q2": "C. big",
								"q3": "D. notorious",
								"q4": "E. serious"
							},
							"ans": "E"
						},
						"Q15": {
							"opts": {
								"q0": "A. expends",
								"q1": "B. expenses",
								"q2": "C. expend",
								"q3": "D. expense",
								"q4": "E. expanse"
							},
							"ans": "D"
						},
						"Q16": {
							"opts": {
								"q0": "A. injured",
								"q1": "B. injuries",
								"q2": "C. injury",
								"q3": "D. injurious",
								"q4": "E. injure."
							},
							"ans": "B"
						},
					},
					"PB": {
						"qst": [
							"A hotel is supposed to be home away from home, but the one we ---17--- was hell away from home.",
							"Initially, we were decieved by the beautiful surroundings and by the manager's ---18--- which was warm and inviting.",
							"After the usual ---19--- and signing of forms, we were checked in. We later discovered, to our utter dismay,",
							"that the hotel ---20--- many facilities and that the few available ---21--- were either faulty or ---22---.",
							"the rooms were somehoe tolerable, but there was something we could not manage - food. We complained.",
							"Infact,we ate just to ---23--- alive since whatever was on the ---24---gave no ---25---. The services there were definitely ---26---.",
							"By the time we werer due to ---27--- the following day,everybody heaved a sigh of ---28---. Maybe I heard the manager say:",
							"Did you ---29--- a nice stay? And thinking he heard somebody say yes, he quickly added: Please ---30--- again.",
						],
						"Q17": {
							"opts": {
								"q0": "A. moved into",
								"q1": "B. checked",
								"q2": "C. dropped by",
								"q3": "D. checked into",
								"q4": "E. stood in"
							},
							"ans": "D"
						},
						"Q18": {
							"opts": {
								"q0": "A. reception",
								"q1": "B. intention",
								"q2": "C. rejection",
								"q3": "D. conception",
								"q4": "E. conviction"
							},
							"ans": "A"
						},
						"Q19": {
							"opts": {
								"q0": "A. feeling",
								"q1": "B. filing",
								"q2": "C. fill in",
								"q3": "D. feel in",
								"q4": "E. filling"
							},
							"ans": "E"
						},
						"Q20": {
							"opts": {
								"q0": "A. lacks",
								"q1": "B. failed",
								"q2": "C. lacked",
								"q3": "D. lack",
								"q4": "E. larks"
							},
							"ans": "C"
						},
						"Q21": {
							"opts": {
								"q0": "A. one",
								"q1": "B. ones",
								"q2": "C. warns",
								"q3": "D. warn",
								"q4": "E. once"
							},
							"ans": "B"
						},
						"Q22": {
							"opts": {
								"q0": "A. unattractive",
								"q1": "B. cheap",
								"q2": "C. impressive",
								"q3": "D. standardized",
								"q4": "E. substandard"
							},
							"ans": "E"
						},
						"Q23": {
							"opts": {
								"q0": "A. stay",
								"q1": "B. stand",
								"q2": "C. stop",
								"q3": "D. sit",
								"q4": "E. stoop"
							},
							"ans": "A"
						},
						"Q24": {
							"opts": {
								"q0": "A. menu",
								"q1": "B. list",
								"q2": "C. paper",
								"q3": "D. dish",
								"q4": "E. table"
							},
							"ans": "A"
						},
						"Q25": {
							"opts": {
								"q0": "A. joy",
								"q1": "B. sweetness",
								"q2": "C. problem",
								"q3": "D. fear",
								"q4": "E. digestion"
							},
							"ans": "B"
						},
						"Q26": {
							"opts": {
								"q0": "A. opposing",
								"q1": "B. appealing",
								"q2": "C. appalling",
								"q3": "D. appetizing",
								"q4": "E. oppressing"
							},
							"ans": "C"
						},
						"Q27": {
							"opts": {
								"q0": "A. check in",
								"q1": "B. check out",
								"q2": "C. check up",
								"q3": "D. check into",
								"q4": "E. check off"
							},
							"ans": "B"
						},
						"Q28": {
							"opts": {
								"q0": "A. release",
								"q1": "B. reliefs",
								"q2": "C. relieves",
								"q3": "D. relief",
								"q4": "E. relieve"
							},
							"ans": "D"
						},
						"Q29": {
							"opts": {
								"q0": "A. had",
								"q1": "B. have",
								"q2": "C. hard",
								"q3": "D. heard",
								"q4": "E. has"
							},
							"ans": "B"
						},
						"Q30": {
							"opts": {
								"q0": "A. see",
								"q1": "B. try",
								"q2": "C. drop",
								"q3": "D. return",
								"q4": "E. come"
							},
							"ans": "E"
						}
					},
				},
				"S2": {
					"headd": "In each of the following sentences, there is one word underlined and one gap. From the list of words lettered A to E, choose the word or group of words that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence.",
					"Q31": {
						"qs": "31. Tunde **purchased** various articles at the big sale near kingsway and surprisingly enough, he .... them all before he reached home that day.",
						"opts": {
							"q0": "A. destroyed",
							"q1": "B. bought",
							"q2": "C. sold ",
							"q3": "D. distributed ",
							"q4": "E. lent"
						},
						"ans": "C"
					},
					"Q32": {
						"qs": "32. In this argument, Ade was my **supporter** even though he is often my .... in other matters",
						"opts": {
							"q0": "A. opponent",
							"q1": "B. ally",
							"q2": "C. opposite",
							"q3": "D. proposer",
							"q4": "E. opposite."
						},
						"ans": "A"
					},
					"Q33": {
						"qs": "33. People who are normally .... often turn to be **dauntless** heroes in the face of real danger",
						"opts": {
							"q0": "A. unsteadly",
							"q1": "B. colourless",
							"q2": "C. cowardly",
							"q3": "D. bashful",
							"q4": "E. unfriendly"
						},
						"ans": "C"
					},
					"Q34": {
						"qs": "34. I **encouraged** my younger brother to take on Law as a profession while I .... my sister from doing so.",
						"opts": {
							"q0": "A. financed",
							"q1": "B. warned",
							"q2": "C. dissuaded",
							"q3": "D. persuaded",
							"q4": "E. helped"
						},
						"ans": "C"
					},
					"Q35": {
						"qs": "35. It is quite **customary** to introduce the guest speaker but ..... to insult him.",
						"opts": {
							"q0": "A. illegal ",
							"q1": "B. impolite ",
							"q2": "C. unusual ",
							"q3": "D. useless ",
							"q4": "E. pointless."
						},
						"ans": "C"
					},
					"Q36": {
						"qs": "36. Olu was able to **kindle** the fire which my father had to .... later ",
						"opts": {
							"q0": "A. kill ",
							"q1": "B. switch ",
							"q2": "C. extinguish ",
							"q3": "D. destroy ",
							"q4": "E. ignite"
						},
						"ans": "C"
					}
				},
				"S3": {
					"headd": "After each of the following sentences, the list of possible interpretations of all or part of the sentence is given. Choose the interpretation that you consider appropriate for each sentence.",
					"Q37": {
						"qs": "37. Mr. John has always managed to **keep his head above water**.",
						"opts": {
							"q0": "A. keep his head above water when swimming ",
							"q1": "B. like swimming",
							"q2": "C. know the techniques of swimming ",
							"q3": "D. stay out of financial difficulty ",
							"q4": "E. borrow a large amount of money the bank and he is trying to pay it up"
						},
						"ans": "D"
					},
					"Q38": {
						"qs": "38. The men eventually gained their freedom and decided later to **get their own back on** their oppresors",
						"opts": {
							"q0": "A. strike",
							"q1": "B. have their revenge on",
							"q2": "C. abuse ",
							"q3": "D. get something from",
							"q4": "E. beat up"
						},
						"ans": "B"
					},
					"Q39": {
						"qs": "39. He **went off the rails** as soon as he heard of his failure in the last examination.",
						"opts": {
							"q0": "A. became annoyed",
							"q1": "B. wept bitterly",
							"q2": "C. became disorganized",
							"q3": "D. became a man",
							"q4": "E. lost consciousness"
						},
						"ans": "A"
					},
					"Q40": {
						"qs": "40. **She is eating her heart out for** a sailor who is away at sea",
						"opts": {
							"q0": "A. writing to",
							"q1": "B. longing for",
							"q2": "C. quarreling with",
							"q3": "D. fuming about",
							"q4": "E. hating"
						},
						"ans": "B"
					},
					"Q41": {
						"qs": "41. How do you hopo it? You can't **make bricks without starw**",
						"opts": {
							"q0": "A. use a straw for making bricks",
							"q1": "B. afford not to have all the necessary materials",
							"q2": "C. seek a leader",
							"q3": "D. find bricks and straw",
							"q4": "E. erect a brick without straws."
						},
						"ans": "B"
					},
					"Q42": {
						"qs": "42. Mary's classmates agreed to **send her to Coventry**",
						"opts": {
							"q0": "A. send her to the Sisters at the convent",
							"q1": "B. report he the convent",
							"q2": "C. ignore her",
							"q3": "D. train her to be the leader",
							"q4": "E. send her to the penitentiary"
						},
						"ans": "C"
					}
				},
				"S4": {
					"headd": " From the word listed A to E below each of the following sentences, choose the word or group of words that is nearest in meaning to the underlined expression as it is used in the sentence.",
					"Q43": {
						"qs": "43. My choice of a partner would be based on character, not **looks**. ",
						"opts": {
							"q0": "A. visibility",
							"q1": "B. feasibility",
							"q2": "C. appearance",
							"q3": "D. stares",
							"q4": "E. posture"
						},
						"ans": "C"
					},
					"Q44": {
						"qs": "44. Ade is very winsome yet his neighbour finds it difficult to **put up with** him",
						"opts": {
							"q0": "A. stay with",
							"q1": "B. live with",
							"q2": "C. tolerate",
							"q3": "D. depend on",
							"q4": "E. rely on"
						},
						"ans": "C"
					},
					"Q45": {
						"qs": "45. The girl has just come out of the fattening room and her waist is **adorned** with beads",
						"opts": {
							"q0": "A. surrounded",
							"q1": "B. decorated",
							"q2": "C. besieged",
							"q3": "D. defaced",
							"q4": "E. bedraggled"
						},
						"ans": "B"
					},
					"Q46": {
						"qs": "46. There are some drugs that could **exacerbate** a particular illness",
						"opts": {
							"q0": "A. heal ",
							"q1": "B. ameliorate ",
							"q2": "C. lengthen ",
							"q3": "D. worsen ",
							"q4": "E. detect"
						},
						"ans": "D"
					},
					"Q47": {
						"qs": "47. In accordance with the practice of his religion, Raman’s body was **interred** the day he died.",
						"opts": {
							"q0": "A. sanctified ",
							"q1": "B. preserved",
							"q2": "C. cremated ",
							"q3": "D. buried ",
							"q4": "E. entered."
						},
						"ans": "D"
					},
					"Q48": {
						"qs": "48. What you cannot avoid you try to **endure**",
						"opts": {
							"q0": "A. castoff ",
							"q1": "B. put off",
							"q2": "C. dispense with",
							"q3": "D. practice ",
							"q4": "E. tolerate"
						},
						"ans": "E"
					}
				},
				"S5": {
					"headd": "From the words lettered A to D, choose the word or group of words that best completes each of the following sentences.",
					"Q49": {
						"qs": "49. Adamu is a very good friend on .... I can rely ",
						"opts": {
							"q0": "A. who ",
							"q1": "B. whose ",
							"q2": "C. which ",
							"q3": "D. whom",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q50": {
						"qs": "50. I ought	the letter by now",
						"opts": {
							"q0": "A. to be sent",
							"q1": "B. to have being sent",
							"q2": "C. to have sent",
							"q3": "D. to have to send",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q51": {
						"qs": "51. Toyin’s fever was so acute that she .... an injection",
						"opts": {
							"q0": "A. had to have",
							"q1": "B. had to had",
							"q2": "C. must have",
							"q3": "D. ought to have",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q52": {
						"qs": "52. I know of a cow ... has only three legs",
						"opts": {
							"q0": "A. whom ",
							"q1": "B. which ",
							"q2": "C. who ",
							"q3": "D. of which",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q53": {
						"qs": "53. Ranti: This is not my key, Ayo: Then ... is it?",
						"opts": {
							"q0": "A. of which",
							"q1": "B. whose ",
							"q2": "C. who’s ",
							"q3": "D. whom",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q54": {
						"qs": "54. There was no meat in the market .... Shade bought some fish",
						"opts": {
							"q0": "A. so ",
							"q1": "B. unless ",
							"q2": "C. since ",
							"q3": "D. whereas",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q55": {
						"qs": "The police vehicles raced ... full speed with their sirens blaring",
						"opts": {
							"q0": "A. on",
							"q1": "B. with",
							"q2": "C. at",
							"q3": "D. in",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q56": {
						"qs": "Tutu liked to read detective novels to take his mind .... his worries",
						"opts": {
							"q0": "A. off",
							"q1": "B. away",
							"q2": "C. out",
							"q3": "D. from",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q57": {
						"qs": "57.	I don’t know what to do with these children. They are always fighting ....",
						"opts": {
							"q0": "A. themselves ",
							"q1": "B. myself ",
							"q2": "C. one another",
							"q3": "D. each of them",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q58": {
						"qs": "58.	Wale coudn't have said a thing like that ....",
						"opts": {
							"q0": "A. could he?",
							"q1": "B. did he?",
							"q2": "C. can he?",
							"q3": "D. would he?",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q59": {
						"qs": "59.	If she had known, she wouldn’t have come ....",
						"opts": {
							"q0": "A. would she?",
							"q1": "B. wasn't it?",
							"q2": "C. wouldn't it?",
							"q3": "D. couldn't it?",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q60": {
						"qs": "60. Salary cuts could be the .... of the worker’s protest",
						"opts": {
							"q0": "A. course ",
							"q1": "B. curse ",
							"q2": "C. cause ",
							"q3": "D. coarse",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q61": {
						"qs": "Neither John nor Mary felt happy .... the incident",
						"opts": {
							"q0": "A. for",
							"q1": "B. in",
							"q2": "C. about",
							"q3": "D. by",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q62": {
						"qs": "62.	Any parent would be pleased .... such impressive performance",
						"opts": {
							"q0": "A. at",
							"q1": "B. from",
							"q2": "C. with",
							"q3": "D. for",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q63": {
						"qs": "63.	Stella wanted to show .... with her necklace.",
						"opts": {
							"q0": "A. off",
							"q1": "B. on",
							"q2": "C. over",
							"q3": "D. back",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q64": {
						"qs": "64.	The woman .... daughter he married, is his mother-in-law",
						"opts": {
							"q0": "A. whose ",
							"q1": "B. which",
							"q2": "C. her ",
							"q3": "D. whom",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q65": {
						"qs": "65.	He acts as if he .... a general manager ",
						"opts": {
							"q0": "A. is been",
							"q1": "B. were",
							"q2": "C. has been",
							"q3": "D. is being",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q66": {
						"qs": "66.	The National Essay Competition came .... on the 23rd of July 1986",
						"opts": {
							"q0": "A. out",
							"q1": "B. in",
							"q2": "C. by",
							"q3": "D. up",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q67": {
						"qs": "67.	Mrs. Nwokolo had .... her breakfast before her friend came in",
						"opts": {
							"q0": "A. has",
							"q1": "B. have",
							"q2": "C. had",
							"q3": "D. been had",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q68": {
						"qs": "68.	If the two boys .... been bitten by the snake, they should be taken to the hospital.",
						"opts": {
							"q0": "A. has",
							"q1": "B. had",
							"q2": "C. have",
							"q3": "D. is",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q69": {
						"qs": "69.	The man .... missed death during the collision",
						"opts": {
							"q0": "A. extensively ",
							"q1": "B. always ",
							"q2": "C. narrowly ",
							"q3": "D. amply",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q70": {
						"qs": "70.	I started writing at 9.am. It is now 10a.m, by 11a.m. I .... writing for 2 hours",
						"opts": {
							"q0": "A. will be ",
							"q1": "B. am",
							"q2": "C. will have	been",
							"q3": "D. have been",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q71": {
						"qs": "71.	My .... to you, students, is to be good",
						"opts": {
							"q0": "A. advice ",
							"q1": "B. advise ",
							"q2": "C. adverse ",
							"q3": "D. advance",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q72": {
						"qs": "72.	The car couldn’t keep pace .... the motor cycle especially in congested areas",
						"opts": {
							"q0": "A. along ",
							"q1": "B. with ",
							"q2": "C. down ",
							"q3": "D. on",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q73": {
						"qs": "73.	I want everybody to learn the last ten lines of the poem .... heart",
						"opts": {
							"q0": "A. with",
							"q1": "B. in",
							"q2": "C. for",
							"q3": "D. by",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q74": {
						"qs": "74.	They went .... talking after midnight despite the fact that they all had to get up early.",
						"opts": {
							"q0": "A. by",
							"q1": "B. for",
							"q2": "C. on",
							"q3": "D. with",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q75": {
						"qs": "75.	There was a lot of tension in the area and it was felt that a dispute might flare .... anytime.",
						"opts": {
							"q0": "A. up",
							"q1": "B. down",
							"q2": "C. in",
							"q3": "D. to",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q76": {
						"qs": "76.	People are always afraid to visit Mr. Ade because he is ....",
						"opts": {
							"q0": "A. an army",
							"q1": "B. a soldier",
							"q2": "C. an army man",
							"q3": "D. a military.",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q77": {
						"qs": "77.	I want that spoon washed, I can still see .... on it",
						"opts": {
							"q0": "A. oilness ",
							"q1": "B. greases ",
							"q2": "C. some oil",
							"q3": "D. greasiness",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q78": {
						"qs": "78.	Everybody has to do .... homework",
						"opts": {
							"q0": "A. his",
							"q1": "B. them",
							"q2": "C. theirs",
							"q3": "D. there",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q79": {
						"qs": "79.	Having worked all day it is about time we .... back home",
						"opts": {
							"q0": "A. go",
							"q1": "B. goes",
							"q2": "C. went",
							"q3": "D. gone",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q80": {
						"qs": "80.	At eighteen, Bose is .... to take good care of her sisters.",
						"opts": {
							"q0": "A. enough old",
							"q1": "B. too old",
							"q2": "C. older enough",
							"q3": "D. old enough.",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q81": {
						"qs": "81.	Obi is .... troublesome than I had imagined",
						"opts": {
							"q0": "A. much less",
							"q1": "B. the least",
							"q2": "C. more less",
							"q3": "D. very less",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q82": {
						"qs": "82.	This is not .... house in the street but it is certainly bigger than yours.",
						"opts": {
							"q0": "A. a big",
							"q1": "B. the big",
							"q2": "C. the biggest",
							"q3": "D. the bigger",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q83": {
						"qs": "83.	I find it .... comfortable to travel by air than by road",
						"opts": {
							"q0": "A. quite very much",
							"q1": "B. much more",
							"q2": "C. quite much",
							"q3": "D. very much",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q84": {
						"qs": "84. .... sacrifice was it that people talked about it for years.",
						"opts": {
							"q0": "A. Much great",
							"q1": "B. How great a",
							"q2": "C. As great as",
							"q3": "D. So great a",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q85": {
						"qs": "85.	The press must cater for the needs of the .... public",
						"opts": {
							"q0": "A. readers ",
							"q1": "B. readable ",
							"q2": "C. reading ",
							"q3": "D. reader",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q86": {
						"qs": "86.	I hate that habit ....",
						"opts": {
							"q0": "A. of nagging",
							"q1": "B. by nagging",
							"q2": "C. to nag",
							"q3": "D. having nagged",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q87": {
						"qs": "87.	After he had tried for sometime, he realized that all his efforts were going to be ....",
						"opts": {
							"q0": "A. festive ",
							"q1": "B. futile ",
							"q2": "C. fragrant",
							"q3": "D. fitful.",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q88": {
						"qs": "88.	Mr. Dauda’s two labourers work on .... days.",
						"opts": {
							"q0": "A. alternative ",
							"q1": "B. optional ",
							"q2": "C. alternate",
							"q3": "D. current",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q89": {
						"qs": "89.If she takes .... her mother, you can be sure of her efficiency",
						"opts": {
							"q0": "A. up",
							"q1": "B. on",
							"q2": "C. with",
							"q3": "D. after",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q90": {
						"qs": "90. Please, look .... my answers for me",
						"opts": {
							"q0": "A. over ",
							"q1": "B. across ",
							"q2": "C. after ",
							"q3": "D. on",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q91": {
						"qs": "91.	Ali said that going .... an operation is not a pleasant experience",
						"opts": {
							"q0": "A. through ",
							"q1": "B. over ",
							"q2": "C. in ",
							"q3": "D. by",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q92": {
						"qs": "92.	If pupils will abide .... school rules the tone of discipline will improve.",
						"opts": {
							"q0": "A. on",
							"q1": "B. with",
							"q2": "C. in",
							"q3": "D. by",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q93": {
						"qs": "93. .... inform her that I called",
						"opts": {
							"q0": "A. When she comes back",
							"q1": "B. After she phoned",
							"q2": "C. As she was coming back",
							"q3": "D. When she arrived.",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q94": {
						"qs": "94.	He knew	 ....",
						"opts": {
							"q0": "A. what you said",
							"q1": "B. what they wanted",
							"q2": "C. if they wanted",
							"q3": "D. at where they wanted",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q95": {
						"qs": "95.	The house .... is the most beautiful in that area",
						"opts": {
							"q0": "A. after Femi built",
							"q1": "B. in which Femi built",
							"q2": "C. whose Femi built",
							"q3": "D. which Femi built.",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q96": {
						"qs": "96. .... we shall go together",
						"opts": {
							"q0": "A. If you had come early",
							"q1": "B. If you came early",
							"q2": "C. If you come early",
							"q3": "D. Although you come early.",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q97": {
						"qs": "97.	He said he forgot ....",
						"opts": {
							"q0": "A. what you said",
							"q1": "B. that you said",
							"q2": "C. why you said",
							"q3": "D. when you said",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q98": {
						"qs": "98.	I don’t like my Maths teacher, well, he doesn’t like me ....",
						"opts": {
							"q0": "A. too ",
							"q1": "B. also ",
							"q2": "C. quite ",
							"q3": "D. either",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q99": {
						"qs": "99.	Eze has not heard from his sister Ada since she .... to the United Kingdom",
						"opts": {
							"q0": "A. has gone",
							"q1": "B. had gone",
							"q2": "C. had been going",
							"q3": "D. went",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q100": {
						"qs": "100.	Ada has special love .... children, so she is going to be a teacher",
						"opts": {
							"q0": "A. in",
							"q1": "B. with",
							"q2": "C. of",
							"q3": "D. for",
							"q4": "E. "
						},
						"ans": "D"
					}
				}
			}
		});
	});

	app.get('/english/1989', function(req, res) {
		res.json({
			data: {
				"headd": "Objective Test Questions: Answer all the questions",	
				"S4": {
					"headd": "Instruction: Choose the word opposite in meaning to the underlined word.",
					"Q1": {
						"qs": "1. One of the armed robbers was as **daring** in his words at the stake as the other was",
						"opts": {
							"q0": "A. morose ",
							"q1": "B. secretive ",
							"q2": "C. reckless",
							"q3": "D. timid ",
							"q4": "E. rational."
						},
						"ans": "D"
					},
					"Q2": {
						"qs": "2. His **outspokenness** contrasts with the .... of the father",
						"opts": {
							"q0": "A. humour ",
							"q1": "B. sobriety ",
							"q2": "C. deafness ",
							"q3": "D. dumbness ",
							"q4": "E. taciturnity"
						},
						"ans": "E"
					},
					"Q3": {
						"qs": "3. A gully, which is a **natural** phenomenon, could not be mistaken for a tunnel, which is ....",
						"opts": {
							"q0": "A. supernatural ",
							"q1": "B. false",
							"q2": "C. artificial ",
							"q3": "D. imitative ",
							"q4": "E. modern"
						},
						"ans": "C"
					},
					"Q4": {
						"qs": "4. It is curious how Bayo can be so **carefree** in his ways when his brother is so ....",
						"opts": {
							"q0": "A. meticulous ",
							"q1": "B. eccentric ",
							"q2": "C. easy-going",
							"q3": "D. lovable ",
							"q4": "E. indifferent"
						},
						"ans": "A"
					},
					"Q5": {
						"qs": "5. Personally, I **give in** rather easily when it comes to arguments, but Emeka will always .... to his opinions.",
						"opts": {
							"q0": "A. hold in",
							"q1": "B. hold on",
							"q2": "C. give out",
							"q3": "D. hold off",
							"q4": "E. hold back"
						},
						"ans": "B"
					},
					"Q6": {
						"qs": "6. He **intentionally** threw the documents away and somebody .... burnt them",
						"opts": {
							"q0": "A. carelessly ",
							"q1": "B. willingly ",
							"q2": "C. accidentally",
							"q3": "D. foolishly ",
							"q4": "E. fortunately"
						},
						"ans": "C"
					},
					"Q7": {
						"qs": "7. The crops the farmer **planted** were .... by some naughty boys",
						"opts": {
							"q0": "A. sowed ",
							"q1": "B. weeded ",
							"q2": "C. destroyed ",
							"q3": "D. cultivated ",
							"q4": "E. uprooted."
						},
						"ans": "E"
					},
					"Q8": {
						"qs": "8. The man refused to accept the offer of a job in the **rural** areas; he preferred one in the .... area",
						"opts": {
							"q0": "A. local ",
							"q1": "B. urban",
							"q2": "C. municipal ",
							"q3": "D. township ",
							"q4": "E. zonal"
						},
						"ans": "B"
					},
					"Q30": {
						"qs": "30.	Despite their newness on the job, the workers were remunerated rather handsomely. This means that",
						"opts": {
							"q0": "A. the sum paid was poor",
							"q1": "B. those paid were handsome in appearance",
							"q2": "C. the system of payment was quite attractive",
							"q3": "D. the sum paid out was quite attractive",
							"q4": "E. the workers were paid by handsome officials."
						},
						"ans": "D"
					},
					"Q31": {
						"qs": "31.	The plan to upgrade the dispensary to a general hospital did not materialize. This means that",
						"opts": {
							"q0": "A. the arrangement did not work out as wished",
							"q1": "B. the plan was badly executed",
							"q2": "C. it was difficult to obtain the materials.",
							"q3": "D. the materials purchased were not the right ones",
							"q4": "E. the plan did not meet the required specifications."
						},
						"ans": "A"
					},
					"Q32": {
						"qs": "32.	When the principal was asked what his opinion was on the controversial issue, his reply was ambiguous. This means that the principal’s reply was not",
						"opts": {
							"q0": "A. convincing ",
							"q1": "B. audible ",
							"q2": "C. intelligent ",
							"q3": "D. clear ",
							"q4": "E. comprehensible"
						},
						"ans": "D"
					},
					"Q33": {
						"qs": "33.	Even though Susan was the last in the examination, her result wasn’t too different from what had been expected. This means that",
						"opts": {
							"q0": "A. her result was a disappointment",
							"q1": "B. her result was as expected",
							"q2": "C. she had not been serious with her studies",
							"q3": "D. her result was known early",
							"q4": "E. her poor performance made her feel sad."
						},
						"ans": "B"
					},
					"Q34": {
						"qs": "34.	Despite their strangely unrefined behaviour, the foreigners were given preferential treatment. This means that the foreigners were",
						"opts": {
							"q0": "A. ill-treated because of their coarseness",
							"q1": "B. cautioned before they were attended to",
							"q2": "C. well-treated despite their rudeness",
							"q3": "D. not attended to because of their behaviour",
							"q4": "E. sorry for their unrefined behaviour."
						},
						"ans": "C"
					}
				},
				"S2": {
					"headd": "After each of the following sentences, the list of possible interpretations of all or part of the sentence is given. Choose the interpretation that you consider appropriate for each sentence.",
					"Q9": {
						"qs": "9.	The candidates were told that passing the examination wasn’t **a passport to** getting an admission",
						"opts": {
							"q0": "A. a guarantee",
							"q1": "B. a suggestion in",
							"q2": "C. an equivalent",
							"q3": "D. a necessity for",
							"q4": "E. an intention for"
						},
						"ans": "A"
					},
					"Q10": {
						"qs": "10. She tried to **throw dust in mv eyes**",
						"opts": {
							"q0": "A. blow dust into my eyes",
							"q1": "B. fight me",
							"q2": "C. rebuke me",
							"q3": "D. mislead me",
							"q4": "E. make me blind."
						},
						"ans": "D"
					},
					"Q11": {
						"qs": "11.	Despite the different economic measures taken by the government, the country is not yet **out of the wood**",
						"opts": {
							"q0": "A. on the right path",
							"q1": "B. undeveloped",
							"q2": "C. generating enough money from its forest resources",
							"q3": "D. free from difficulties",
							"q4": "E. above comfort"
						},
						"ans": "D"
					},
					"Q12": {
						"qs": "12. Our House **swept the board** in the inter-house sports competition",
						"opts": {
							"q0": "A. prepared the field",
							"q1": "B. came last",
							"q2": "C. was completely successful",
							"q3": "D. was only partially successful",
							"q4": "E. won a consolation prize."
						},
						"ans": "C"
					},
					"Q13": {
						"qs": "13. The preacher advised those who lost their property in the fire outbreak that every cloud has a silverlininq",
						"opts": {
							"q0": "A. the loss is a common",
							"q1": "B. everybody must witness misfortunes in life",
							"q2": "C. every cloud has some silvery lines behind it",
							"q3": "D. when there is life, there is hope",
							"q4": "E. there is a good side to all misfortunes."
						},
						"ans": "E"
					},
					"Q14": {
						"qs": "14. Mv father always advised me to **take time by the forelock**",
						"opts": {
							"q0": "A. use an opportunity promptly",
							"q1": "B. take things easy",
							"q2": "C. be clever",
							"q3": "D. always hurry up",
							"q4": "E. think twice before I act"
						},
						"ans": "A"
					},
					"Q15": {
						"qs": "15. Soyinka has **made his mark** in the literary world",
						"opts": {
							"q0": "A. become rich",
							"q1": "B. become distinguished",
							"q2": "C. scored high marks",
							"q3": "D. stressed his point",
							"q4": "E. won the competition for authors"
						},
						"ans": "B"
					},
					"Q16": {
						"qs": "16. The runners-up trophy which our school ate won was **cold comfort** for all the efforts we made",
						"opts": {
							"q0": "A. befitting reward",
							"q1": "B. wet comfort",
							"q2": "C. an affectionate consideration",
							"q3": "D. well deserved",
							"q4": "E. a poor consolation."
						},
						"ans": "E"
					},
					"Q17": {
						"qs": "17. Amina used to be **hand in glove with her’s boyfriend**",
						"opts": {
							"q0": "A. cheat her boyfriend",
							"q1": "B. admire her boyfriend",
							"q2": "C. fight her boyfriend",
							"q3": "D. wear her boyfriend’s glove",
							"q4": "E. be close relations with her boyfriend."
						},
						"ans": "E"
					},
					"Q18": {
						"qs": "18. Chike escaped the accident **by a hair’s breadth**",
						"opts": {
							"q0": "A. narrowly",
							"q1": "B. jumping",
							"q2": "C. seriously injured",
							"q3": "D. holding on to another person’s hair",
							"q4": "E. crying for help."
						},
						"ans": "A"
					}
				},
				"S3": {
					"headd": "From the word listed A to E below each of the following sentences, choose the word or group of words that is nearest in meaning to the underlined expression as it is used in the sentence.",
					"Q19": {
						"qs": "19. The decision taken by the panel is **irrevocable**",
						"opts": {
							"q0": "A. irreversible ",
							"q1": "B. unexpected ",
							"q2": "C. acceptable ",
							"q3": "D. irresponsible ",
							"q4": "E. unacceptable."
						},
						"ans": "A"
					},
					"Q20": {
						"qs": "20. Death is **inevitable** for man",
						"opts": {
							"q0": "A. unavoidable ",
							"q1": "B. essential ",
							"q2": "C. necessary ",
							"q3": "D. immortal ",
							"q4": "E. imminent"
						},
						"ans": "A"
					},
					"Q21": {
						"qs": "21. The superintendent was **appalled** by the attitude of some of the employees towards their work.",
						"opts": {
							"q0": "A. annoyed",
							"q1": "B. disappointed ",
							"q2": "C. shocked ",
							"q3": "D. provoked ",
							"q4": "E. depressed."
						},
						"ans": "C"
					},
					"Q22": {
						"qs": "22.	The lawyer’s argument of the case was **exhaustive**",
						"opts": {
							"q0": "A. interesting ",
							"q1": "B. exaggerating ",
							"q2": "C. exhilarating ",
							"q3": "D. thorough ",
							"q4": "E. fascinating"
						},
						"ans": "D"
					},
					"Q23": {
						"qs": "23.	The suspect was made to walk in front of the **anxious** crowds",
						"opts": {
							"q0": "A. surprised ",
							"q1": "B. astonished ",
							"q2": "C. engrossed ",
							"q3": "D. curious ",
							"q4": "E. questionable"
						},
						"ans": "D"
					},
					"Q24": {
						"qs": "24.	The principal’s orders are **imperative**",
						"opts": {
							"q0": "A. lenient ",
							"q1": "B. authoritative ",
							"q2": "C. genuine ",
							"q3": "D. necessary ",
							"q4": "E. optional"
						},
						"ans": "B"
					},
					"Q25": {
						"qs": "25.	It is **absurd** to suggest that Tunde should marry that saucy lady",
						"opts": {
							"q0": "A. pitiable ",
							"q1": "B. hopeless ",
							"q2": "C. humorous ",
							"q3": "D. untrue ",
							"q4": "E. ridiculous"
						},
						"ans": "E"
					},
					"Q26": {
						"qs": "26.	I am very proud to speak before this **august** assembly",
						"opts": {
							"q0": "A. ignominious ",
							"q1": "B. undignified ",
							"q2": "C. monthly ",
							"q3": "D. untrue ",
							"q4": "E. popular"
						},
						"ans": "E"
					},
					"Q27": {
						"qs": "27.	She tried to settle the quarrel but the man remained **obstinate** to listen to her",
						"opts": {
							"q0": "A. offensive ",
							"q1": "B. angry ",
							"q2": "C. stubborn ",
							"q3": "D. unstable ",
							"q4": "E. impolite"
						},
						"ans": "C"
					},
					"Q28": {
						"qs": "28.	Okon attempted to **entice** Eno with the promise of a handsome sum of money",
						"opts": {
							"q0": "A. deceive ",
							"q1": "B. enchant ",
							"q2": "C. force ",
							"q3": "D. trick ",
							"q4": "E. tempt"
						},
						"ans": "E"
					},
					"Q29": {
						"qs": "29.	The monk lived **an ascetic** life in order to discipline himself.",
						"opts": {
							"q0": "A. a holy ",
							"q1": "B. a religious",
							"q2": "C. an enjoyable",
							"q3": "D. a prayerful",
							"q4": "E. an austere."
						},
						"ans": "E"
					}
				},
				// "S4": {
				// 	"headd": "After each of the following sentences, the list of possible interpretations of all or part of the sentence is given. Choose the interpretation that you consider appropriate for each sentence.",
				// 	"Q30": {
				// 		"qs": "30.	Despite their newness on the job, the workers were remunerated rather handsomely. This means that",
				// 		"opts": {
				// 			"q0": "A. the sum paid was poor",
				// 			"q1": "B. those paid were handsome in appearance",
				// 			"q2": "C. the system of payment was quite attractive",
				// 			"q3": "D. the sum paid out was quite attractive",
				// 			"q4": "E. the workers were paid by handsome officials."
				// 		},
				// 		"ans": "D"
				// 	},
				// 	"Q31": {
				// 		"qs": "31.	The plan to upgrade the dispensary to a general hospital did not materialize. This means that",
				// 		"opts": {
				// 			"q0": "A. the arrangement did not work out as wished",
				// 			"q1": "B. the plan was badly executed",
				// 			"q2": "C. it was difficult to obtain the materials.",
				// 			"q3": "D. the materials purchased were not the right ones",
				// 			"q4": "E. the plan did not meet the required specifications."
				// 		},
				// 		"ans": "A"
				// 	},
				// 	"Q32": {
				// 		"qs": "32.	When the principal was asked what his opinion was on the controversial issue, his reply was ambiguous. This means that the principal’s reply was not",
				// 		"opts": {
				// 			"q0": "A. convincing ",
				// 			"q1": "B. audible ",
				// 			"q2": "C. intelligent ",
				// 			"q3": "D. clear ",
				// 			"q4": "E. comprehensible"
				// 		},
				// 		"ans": "D"
				// 	},
				// 	"Q33": {
				// 		"qs": "33.	Even though Susan was the last in the examination, her result wasn’t too different from what had been expected. This means that",
				// 		"opts": {
				// 			"q0": "A. her result was a disappointment",
				// 			"q1": "B. her result was as expected",
				// 			"q2": "C. she had not been serious with her studies",
				// 			"q3": "D. her result was known early",
				// 			"q4": "E. her poor performance made her feel sad."
				// 		},
				// 		"ans": "B"
				// 	},
				// 	"Q34": {
				// 		"qs": "34.	Despite their strangely unrefined behaviour, the foreigners were given preferential treatment. This means that the foreigners were",
				// 		"opts": {
				// 			"q0": "A. ill-treated because of their coarseness",
				// 			"q1": "B. cautioned before they were attended to",
				// 			"q2": "C. well-treated despite their rudeness",
				// 			"q3": "D. not attended to because of their behaviour",
				// 			"q4": "E. sorry for their unrefined behaviour."
				// 		},
				// 		"ans": "C"
				// 	}
				// },
				"S5": {
					"headd": "From the words or group of words lettered A to D, choose the one that best completes each of the following sentences.",
					"Q35": {
						"qs": "35. Mrs. Adam’s purchased ....",
						"opts": {
							"q0": "A. a pure leather bag imported ",
							"q1": "B. an imported pure leather bag",
							"q2": "C. a leather bag imported pure",
							"q3": "D. an imported bag pure leather",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q36": {
						"qs": "36. The students protested against the ....",
						"opts": {
							"q0": "A. thrice sports weekly practice",
							"q1": "B. weekly sports practice thrice",
							"q2": "C. thrice weekly sports practice",
							"q3": "D. weekly thrice sports practice.",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q37": {
						"qs": "37. It was apparent that we were being .... by the heat as soon as the air conditioner was switched off",
						"opts": {
							"q0": "A. beaten ",
							"q1": "B. stifled",
							"q2": "C. attacked ",
							"q3": "D. bitten",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q38": {
						"qs": "38.	The eldest son took a foolish decision which made him .... his claim to the additional chieftaincy title.",
						"opts": {
							"q0": "A. neglect ",
							"q1": "B. yield",
							"q2": "C. disclaim ",
							"q3": "D. forefeit",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q39": {
						"qs": "39.	Jumai’s stay in the hotel afforded her .... chance to do her writing",
						"opts": {
							"q0": "A. ample ",
							"q1": "B. insufficient ",
							"q2": "C. powerful ",
							"q3": "D. opportune",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q40": {
						"qs": "40. If I .... what actually happened, I would have punished him",
						"opts": {
							"q0": "A. had heard",
							"q1": "B. have had",
							"q2": "C. had had",
							"q3": "D. have heard",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q41": {
						"qs": "It .... if the leader of the group had come with them",
						"opts": {
							"q0": "A. will have been better",
							"q1": "B. ought to have being better",
							"q2": "C. would have be better",
							"q3": "D. shall have been better",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q42": {
						"qs": "42.	It is time we .... for the party",
						"opts": {
							"q0": "A. leave ",
							"q1": "B. left ",
							"q2": "C. have to leave",
							"q3": "D. will leave",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q43": {
						"qs": "43.	The suspect .... when I entered the office",
						"opts": {
							"q0": "A. has been questioned",
							"q1": "B. have been questioned",
							"q2": "C. was being questioned",
							"q3": "D. is being questioned.",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q44": {
						"qs": "44.	She .... before I entered the office",
						"opts": {
							"q0": "A. has to be questioned",
							"q1": "B. has been questioned",
							"q2": "C. have been questioned",
							"q3": "D. had been questioned",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q45": {
						"qs": "45.	The president’s speech ... at 7pm yesterday",
						"opts": {
							"q0": "A. is broadcast",
							"q1": "B. has been broadcast",
							"q2": "C. were broadcast",
							"q3": "D. was broadcast",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q46": {
						"qs": "46.	You were punished because you .... last week without permission",
						"opts": {
							"q0": "A. ought not to have travelled",
							"q1": "B. must not have travelled",
							"q2": "C. ought not to travel",
							"q3": "D. will not have travelled.",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q47": {
						"qs": "47. It has been rough so far ....?",
						"opts": {
							"q0": "A. hasn’t it",
							"q1": "B. hadn’t it",
							"q2": "C. isn’t it",
							"q3": "D. wasn’t it",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q48": {
						"qs": "48.	The Minister says he is accountable .... the president, and nobody else",
						"opts": {
							"q0": "A. from ",
							"q1": "B. to",
							"q2": "C. with",
							"q3": "D. by",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q49": {
						"qs": "49.	Nobody was surprised that the thief was convicted .... all the charges",
						"opts": {
							"q0": "A. on ",
							"q1": "B. with",
							"q2": "C. of",
							"q3": "D. over",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q50": {
						"qs": "50.	The PTA meeting did not adjourn until it had discussed all the matters placed .... it.",
						"opts": {
							"q0": "A. by ",
							"q1": "B. with ",
							"q2": "C. before ",
							"q3": "D. over",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q51": {
						"qs": "51.	My uncle is an expert .... Mechanical Engineering",
						"opts": {
							"q0": "A. at ",
							"q1": "B. in ",
							"q2": "C. with ",
							"q3": "D. for",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q52": {
						"qs": "52. .... is the owner of this pair of scissors?",
						"opts": {
							"q0": "A. Who ",
							"q1": "B. Whom ",
							"q2": "C. Which ",
							"q3": "D. Whose",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q53": {
						"qs": "53.	My mother was pleased .... me when she learnt of my success",
						"opts": {
							"q0": "A. with ",
							"q1": "B. at ",
							"q2": "C. in ",
							"q3": "D. for",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q54": {
						"qs": "54.	Musa was disappointed and decided to take it .... Maryam",
						"opts": {
							"q0": "A. with ",
							"q1": "B. at ",
							"q2": "C. in ",
							"q3": "D. out on",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q55": {
						"qs": "55.	The students refused to appear before the .... panel set up to look into their demands",
						"opts": {
							"q0": "A. five-man’s",
							"q1": "B. five-man",
							"q2": "C. five-men's",
							"q3": "D. five-men",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q56": {
						"qs": "56.	He played .... than anyone else",
						"opts": {
							"q0": "A. worse ",
							"q1": "B. badly ",
							"q2": "C. more worse",
							"q3": "D. worst",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q57": {
						"qs": "57.	She can’t sing .... as I had thought",
						"opts": {
							"q0": "A. so well",
							"q1": "B. good ",
							"q2": "C. well ",
							"q3": "D. as well",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q58": {
						"qs": "58.	Tayo was very obstinate; the more his mother insisted .... willingly would he do anything",
						"opts": {
							"q0": "A. the more",
							"q1": "B. as less",
							"q2": "C. the less",
							"q3": "D. so less",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q59": {
						"qs": "59.	There was .... enough food to go round",
						"opts": {
							"q0": "A. scarcely ",
							"q1": "B. a little",
							"q2": "C. almost ",
							"q3": "D. little",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q60": {
						"qs": "60.	That child .... nearly caused an accident",
						"opts": {
							"q0": "A. rather",
							"q1": "B. just",
							"q2": "C. very",
							"q3": "D. fairly.",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q61": {
						"qs": "61.	The students did the assignment, but not .... the way I had expected",
						"opts": {
							"q0": "A. so ",
							"q1": "B. quite",
							"q2": "C. hardly",
							"q3": "D. as",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q62": {
						"qs": "62.	Osaro told members of his club that the match would kick .... at 4.30pm",
						"opts": {
							"q0": "A. up ",
							"q1": "B. off ",
							"q2": "C. back ",
							"q3": "D. on",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q63": {
						"qs": "63.	Ngozi .... comes to see us now",
						"opts": {
							"q0": "A. scarcely never",
							"q1": "B. almost ever",
							"q2": "C. never more",
							"q3": "D. hardly ever",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q64": {
						"qs": "64. As the opposing parties would not agree, the peace meeting .... in confusion.",
						"opts": {
							"q0": "A. broke out",
							"q1": "B. broke through",
							"q2": "C. broke off",
							"q3": "D. broke up",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q65": {
						"qs": "65. Mallam Gana owns many .... on his farm",
						"opts": {
							"q0": "A. cattles ",
							"q1": "B. herd of cattle",
							"q2": "C. heads of cattle",
							"q3": "D. head of cattle.",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q66": {
						"qs": "66.	I want to know your religious ....",
						"opts": {
							"q0": "A. believe ",
							"q1": "B. believing ",
							"q2": "C. beliefs ",
							"q3": "D. believes",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q67": {
						"qs": "67.	He runs ....",
						"opts": {
							"q0": "A. rather much fast",
							"q1": "B. quite rather fast",
							"q2": "C. rather too fast",
							"q3": "D. too rather fast.",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q68": {
						"qs": "68.	The previous assignment was .... for me",
						"opts": {
							"q0": "A. much too difficult",
							"q1": "B. too much difficult",
							"q2": "C. difficult too much",
							"q3": "D. much difficult too",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q69": {
						"qs": "69.	The TV set	was damaged last week has been taken to an electronics engineer",
						"opts": {
							"q0": "A. which ",
							"q1": "B. who ",
							"q2": "C. of whom",
							"q3": "D. of which",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q70": {
						"qs": "70.	My .... house is by the side of the road",
						"opts": {
							"q0": "A. father-in-law’s",
							"q1": "B. father’s-in-law",
							"q2": "C. fathers-in-law",
							"q3": "D. father-in-laws'",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q71": {
						"qs": "71.	The students were advised to look ...... difficult words in the dictionary",
						"opts": {
							"q0": "A. in",
							"q1": "B. on",
							"q2": "C. out",
							"q3": "D. up",
							"q4": "E. "
						},
						"ans": "D"
					},
				},
				"S1": {
					"headd": "In the following passages the numbered gaps indicate missing words, against each	number in	the	list below each	passage five choices are offered in columns lettered A to E. For each question, choose the word that is	the	most suitable to fill the numbered gap in the passage.",
					"PA": {
						"qst": [
							"In Nigeria, the idea of taking a vacation cannot be said to have --72--.",
							"This is not to --73-- that Nigerians are not --74-- of travelling.",
							"The people travel so --75-- that the frequency of the travelling could provide useful --76-- for a --77-- census.",
							"The --78-- of tne year --79-- matters --80-- Nigerians are --81-- studied,",
							"it will be --82-- that they move across the --83-- of the country at an --84-- high rate.",
							"Such movements reach a --85-- with the --86-- of festivals. ",
							"All such times, Nigerians troop out despite the --87-- charges imposed by transport owners.",
						],
						"Q72": {
							"opts": {
								"q0": "A. sunk on",
								"q1": "B. caught on",
								"q2": "C. caught in",
								"q3": "D. taken in",
								"q4": "E. come on"
							},
							"ans": "D"
						},
						"Q73": {
							"opts": {
								"q0": "A. think",
								"q1": "B. withdraw",
								"q2": "C. consider",
								"q3": "D. suggest",
								"q4": "E. disprove"
							},
							"ans": "D"
						},
						"Q74": {
							"opts": {
								"q0": "A. disposed",
								"q1": "B. found",
								"q2": "C. fund",
								"q3": "D. inclined",
								"q4": "E. fond"
							},
							"ans": "E"
						},
						"Q75": {
							"opts": {
								"q0": "A. always",
								"q1": "B. quickly",
								"q2": "C. uniformly",
								"q3": "D. often",
								"q4": "E. aimlessly"
							},
							"ans": "D"
						},
						"Q76": {
							"opts": {
								"q0": "A. data",
								"q1": "B. matter",
								"q2": "C. subjects",
								"q3": "D. items",
								"q4": "E. date"
							},
							"ans": "A"
						},
						"Q77": {
							"opts": {
								"q0": "A. state",
								"q1": "B. seasonal",
								"q2": "C. traffic",
								"q3": "D. regular",
								"q4": "E. regional"
							},
							"ans": "D"
						},
						"Q78": {
							"opts": {
								"q0": "A. duration",
								"q1": "B. age",
								"q2": "C. time",
								"q3": "D. session",
								"q4": "E. span"
							},
							"ans": "C"
						},
						"Q79": {
							"opts": {
								"q0": "A. rarely",
								"q1": "B. narrowly",
								"q2": "C. always",
								"q3": "D. regular",
								"q4": "E. clearly"
							},
							"ans": "A"
						},
						"Q80": {
							"opts": {
								"q0": "A. where",
								"q1": "B. why",
								"q2": "C. if",
								"q3": "D. because",
								"q4": "E. when"
							},
							"ans": "C"
						},
						"Q81": {
							"opts": {
								"q0": "A. really",
								"q1": "B. nicely",
								"q2": "C. quickly",
								"q3": "D. scientifically",
								"q4": "E. closely"
							},
							"ans": "E"
						},
						"Q82": {
							"opts": {
								"q0": "A. known",
								"q1": "B. discovered",
								"q2": "C. uncovered",
								"q3": "D. arrived",
								"q4": "E. concluded"
							},
							"ans": "B"
						},
						"Q83": {
							"opts": {
								"q0": "A. length and size",
								"q1": "B. length and depth",
								"q2": "C. length and breadth",
								"q3": "D. lenght and corner",
								"q4": "E. breadth and size"
							},
							"ans": "C"
						},
						"Q84": {
							"opts": {
								"q0": "A. amazingly",
								"q1": "B. amusingly",
								"q2": "C. arguably",
								"q3": "D. indelibly",
								"q4": "E. intolerably"
							},
							"ans": "A"
						},
						"Q85": {
							"opts": {
								"q0": "A. crescendo",
								"q1": "B. rise",
								"q2": "C. height",
								"q3": "D. increase",
								"q4": "E. peak"
							},
							"ans": "E"
						},
						"Q86": {
							"opts": {
								"q0": "A. incident",
								"q1": "B. arriving",
								"q2": "C. addition",
								"q3": "D. advent",
								"q4": "E. adventure"
							},
							"ans": "D"
						},
						"Q87": {
							"opts": {
								"q0": "A. unusual",
								"q1": "B. exorbitant",
								"q2": "C. expensive",
								"q3": "D. excessive",
								"q4": "E. harsh"
							},
							"ans": "B"
						},
					},
					"PB": {
						"qst": [
							"When you desire to erect a building, you must --88-- a plan that is --89-- both from the point of view of --90-- and that of --91--.",
							"The --92-- must be --93-- cleared. Having decided --94-- the building materials to be --95-- the foundation then --97-- to erect the building.",
							"He --98-- that the bricks are of the --99-- recommended by --100-- builders.",
						],
						"Q88": {
							"opts": {
								"q0": "A. work by",
								"q1": "B. work from",
								"q2": "C. work in",
								"q3": "D. work on",
								"q4": "E. work for"
							},
							"ans": "D"
						},
						"Q89": {
							"opts": {
								"q0": "A. beautiful",
								"q1": "B. commendable",
								"q2": "C. admirable",
								"q3": "D. qualitative",
								"q4": "E. practicable "
							},
							"ans": "E"
						},
						"Q90": {
							"opts": {
								"q0": "A. cost",
								"q1": "B. amount",
								"q2": "C. price",
								"q3": "D. payment",
								"q4": "E. profit"
							},
							"ans": "A"
						},
						"Q91": {
							"opts": {
								"q0": "A. environs",
								"q1": "B. area",
								"q2": "C. context",
								"q3": "D. atmosphere",
								"q4": "E. environment "
							},
							"ans": "B"
						},
						"Q92": {
							"opts": {
								"q0": "A. floor",
								"q1": "B. ground",
								"q2": "C. site",
								"q3": "D. bush",
								"q4": "E. cite"
							},
							"ans": "C"
						},
						"Q93": {
							"opts": {
								"q0": "A. thoroughly",
								"q1": "B. barely",
								"q2": "C. rarely",
								"q3": "D. commonly",
								"q4": "E. crudely"
							},
							"ans": "A"
						},
						"Q94": {
							"opts": {
								"q0": "A. in",
								"q1": "B. with",
								"q2": "C. on",
								"q3": "D. under",
								"q4": "E. up"
							},
							"ans": "C"
						},
						"Q95": {
							"opts": {
								"q0": "A. built",
								"q1": "B. managed",
								"q2": "C. heated",
								"q3": "D. erected",
								"q4": "E. used"
							},
							"ans": "E"
						},
						"Q96": {
							"opts": {
								"q0": "A. probed",
								"q1": "B. dug",
								"q2": "C. levelled",
								"q3": "D. hewn",
								"q4": "E. arranged"
							},
							"ans": "B"
						},
						"Q97": {
							"opts": {
								"q0": "A. continues",
								"q1": "B. demands",
								"q2": "C. prepares",
								"q3": "D. commences",
								"q4": "E. requests"
							},
							"ans": "D"
						},
						"Q98": {
							"opts": {
								"q0": "A. ensures",
								"q1": "B. assures",
								"q2": "C. assumes",
								"q3": "D. insures",
								"q4": "E. presumes"
							},
							"ans": "A"
						},
						"Q99": {
							"opts": {
								"q0": "A. rigidity",
								"q1": "B. flexibility",
								"q2": "C. standard",
								"q3": "D. medium",
								"q4": "E. solidity "
							},
							"ans": "C"
						},
						"Q100": {
							"opts": {
								"q0": "A. architectural",
								"q1": "B. commissioned",
								"q2": "C. supervisory",
								"q3": "D. professional",
								"q4": "E. pragmatic"
							},
							"ans": "D"
						}
					},
				}
			}
		});
	});

	app.get('/english/1990', function(req, res) {
		res.json({
			data: {
				"S2": {
					"headd": "Instruction: Choose the word opposite in meaning to the underlined word.",
					"Q1": {
						"qs": "1. The young engineer is good at **terminating** other people’s projects but has not been capable of .... any of his own",
						"opts": {
							"q0": "A. integrating  ",
							"q1": "B. finishing  ",
							"q2": "C. completing ",
							"q3": "D. initiating  ",
							"q4": "E. organizing."
						},
						"ans": "D"
					},
					"Q2": {
						"qs": "2. The manager who expected to be given **respect** was treated with ....",
						"opts": {
							"q0": "A. dignity",
							"q1": "B. scorn ",
							"q2": "C. shame ",
							"q3": "D. cruelty ",
							"q4": "E. disloyalty"
						},
						"ans": "B"
					},
					"Q3": {
						"qs": "3. Those who had invitation cards were admitted to the party while those who had none were ....",
						"opts": {
							"q0": "A. barred  ",
							"q1": "B. repelled",
							"q2": "C. expelled ",
							"q3": "D. compelled ",
							"q4": "E. restricted"
						},
						"ans": "A"
					},
					"Q4": {
						"qs": "4. Too many **theories** will not help us; we need to be ....",
						"opts": {
							"q0": "A. bookish ",
							"q1": "B. hypothetical ",
							"q2": "C. antithetical ",
							"q3": "D. shrewd ",
							"q4": "E. practical"
						},
						"ans": "E"
					},
					"Q5": {
						"qs": "5. Nobody expects him to show .... for his children but he certainly bestows too much **affection** on them",
						"opts": {
							"q0": "A. love ",
							"q1": "B. concern",
							"q2": "C. intimacy ",
							"q3": "D. devotion ",
							"q4": "E. hatred"
						},
						"ans": "E"
					},
					"Q6": {
						"qs": "6. The challenger was crude and inexperienced in constrast to the champion who was ....",
						"opts": {
							"q0": "A. great ",
							"q1": "B. exposed",
							"q2": "C. celebrated ",
							"q3": "D. refined ",
							"q4": "E. strong"
						},
						"ans": "D"
					},
					"Q7": {
						"qs": "7. What should have been a source of **motivation** for him proved a terrible source of .....",
						"opts": {
							"q0": "A. failure ",
							"q1": "B. harm",
							"q2": "C. discouragement ",
							"q3": "D. uncertainty ",
							"q4": "E. disturbance"
						},
						"ans": "C"
					},
					"Q8": {
						"qs": "8. Ade is very **conservative** in his political ideas whereas Bala expresses .... views always",
						"opts": {
							"q0": "A. radical ",
							"q1": "B. heretical",
							"q2": "C. conventional ",
							"q3": "D. fanatical ",
							"q4": "E. impractical"
						},
						"ans": "C"
					},
					"Q9": {
						"qs": "9. The government has been spending more money on **preventive** rather than on .... medicine",
						"opts": {
							"q0": "A. modern",
							"q1": "B. protective",
							"q2": "C. diagnostic ",
							"q3": "D. traditional ",
							"q4": "E. curative"
						},
						"ans": "E"
					}
				},
				"S5": {
					"headd": "From the words lettered A to E, choose the word that best completes each of the following sentences",
					"Q10": {
						"qs": "10. The fishermen threw a stone into the river and this caused a ....",
						"opts": {
							"q0": "A. sprinkle",
							"q1": "B. sparkle ",
							"q2": "C. splash ",
							"q3": "D. spring ",
							"q4": "E. storm"
						},
						"ans": "C"
					},
					"Q11": {
						"qs": "11. The play was so interesting that the .... clapped for quite a long time at the end",
						"opts": {
							"q0": "A. spectators",
							"q1": "B. watchers",
							"q2": "C. congregation",
							"q3": "D. people",
							"q4": "E. audience"
						},
						"ans": "E"
					},
					"Q12": {
						"qs": "12. The building .... because of weak structural foundation",
						"opts": {
							"q0": "A. tumbled",
							"q1": "B. succumbed ",
							"q2": "C. somersaulted ",
							"q3": "D. collapsed ",
							"q4": "E. caved."
						},
						"ans": "D"
					},
					"Q13": {
						"qs": "13. The magazine was .... by the government for an offensive publication",
						"opts": {
							"q0": "A. prescribed",
							"q1": "B. proscribed ",
							"q2": "C. suspended",
							"q3": "D. condemned ",
							"q4": "E. persecuted"
						},
						"ans": "B"
					},
					"Q14": {
						"qs": "14. Many people reacted to the brutal murder of the popular journalist with strong .....",
						"opts": {
							"q0": "A. indignation ",
							"q1": "B. demonstration",
							"q2": "C. mobilization ",
							"q3": "D. condemnation ",
							"q4": "E. accusation"
						},
						"ans": "D"
					},
					"Q15": {
						"qs": "15. The governor frowned at the .... which slowed down the implementation of policy decisions.",
						"opts": {
							"q0": "A. bureaucracy",
							"q1": "B. autocracy ",
							"q2": "C. opposition ",
							"q3": "D. convention ",
							"q4": "E. insecurity"
						},
						"ans": "A"
					},		
					"Q16": {
						"qs": "16. he doctor .... the illness as yellow fever, not malaria ",
						"opts": {
							"q0": "A. prescribed ",
							"q1": "B. examined ",
							"q2": "C. discovered ",
							"q3": "D. announced ",
							"q4": "E. diagnosed."
						},
						"ans": "E"
					},
					"Q17": {
						"qs": "17. Since the writer did not indicate his name, the editor decided not to publish such .... article",
						"opts": {
							"q0": "A. a discourteous",
							"q1": "B. an anonymous",
							"q2": "C. a scandalous",
							"q3": "D. a libellous",
							"q4": "E. a cowardly"
						},
						"ans": "B"
					},
					"Q37": {
						"qs": "37. If Kunle hadn’t been transferred to Kano his wife would not have resigned her teaching job. This means that",
						"opts": {
							"q0": "A. Kunle was not transferred yet his wife resigned her job",
							"q1": "B. Kunle was transferred and his wife thought of resigning her job",
							"q2": "C. Kunle was transferred and so his wife had to resign her job",
							"q3": "D. Kunle’s wife resigned though her husband wasn’t transferred.",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q38": {
						"qs": "38. I'll call at your house this evening if it doesn't rain. This means that I",
						"opts": {
							"q0": "A. will visit you this evening if it rains",
							"q1": "B. will only phone you if it rains this evening",
							"q2": "C. will sleep in your house this evening if it rains",
							"q3": "D. may not visit you this evening if it rains.",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q39": {
						"qs": "39. Though Ibrahim was provoked, he ought to have controlled himself. This means that Ibrahim",
						"opts": {
							"q0": "A. should have exercised some restraint",
							"q1": "B. was the aggressor",
							"q2": "C. took the provocation with calmness",
							"q3": "D. was found guilty of committing the offence.",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q40": {
						"qs": "40. The members of staff told the principal that they took exception to his comments. This means that the members of staff",
						"opts": {
							"q0": "A. approved of the principal’s comments",
							"q1": "B. objected to the principal's comments",
							"q2": "C. wanted to be exempted from the principal’s comments",
							"q3": "D. warned the principal about his comments.",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q41": {
						"qs": "41. Okon is too quiet for my liking. This means that Okon",
						"opts": {
							"q0": "A. is liked because he is very quiet.",
							"q1": "B. likes people who are quiet.",
							"q2": "C. is not liked because of his extreme quietness",
							"q3": "D. behaves in a very queer and suspicious manner.",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q42": {
						"qs": "42. The teacher said all but one of the sixty candidates scored below a credit grade. This means that",
						"opts": {
							"q0": "A. all the candidates scored below a credit grade",
							"q1": "B. only one of the candidates scored a credit grade",
							"q2": "C. only one of the candidates scored below a credit grade",
							"q3": "D. all the candidates scored a credit grade.",
							"q4": "E. "
						},
						"ans": "B"
					}
				},
				"S3": {
					"headd": "After each of the following sentences, a list of possible interpretations of all or part of the sentence is given. Choose the mterpretation that you consider most appropriate for each sentence.",
					"Q18": {
						"qs": "18. Mrs. Alabi was not around when her case was called and none of her colleagues was willing to hold brief for her. This means that",
						"opts": {
							"q0": "A. her colleagues were afraid",
							"q1": "B. she was not trusted",
							"q2": "C. her colleagues did not want to represent her",
							"q3": "D. she had quarelled with her colleagues.",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q19": {
						"qs": "19. Telling lies has become second nature to Kunle. This means that Kunle",
						"opts": {
							"q0": "A. rarely tells lies",
							"q1": "B. always tells lies",
							"q2": "C. tells lies only on second thoughts",
							"q3": "D. learnt to tell lies from childhood.",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q20": {
						"qs": "20. For us to accomplish the task successfully, all hands must be on deck. This means that every body",
						"opts": {
							"q0": "A. should push with his hands",
							"q1": "B. will have to travel by sea",
							"q2": "C. must cooperate",
							"q3": "D. Should take a test before continuing the task",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q21": {
						"qs": "21. The wedding was attended by the cream of the society. This means that the wedding was attended by",
						"opts": {
							"q0": "A. everybody in the society",
							"q1": "B. only those who were invited",
							"q2": "C. very important people",
							"q3": "D. only the educated people.",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q22": {
						"qs": "22. I want you to keep an eye on that child. This means that I want you to",
						"opts": {
							"q0": "A. discipline the child.",
							"q1": "B. keep the child busy all the time",
							"q2": "C. punish the child if he misbehaves",
							"q3": "D. watch the child all the time.",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q23": {
						"qs": "23. It appears Sade's success at the last examination has gone to her head. This means that Sade is",
						"opts": {
							"q0": "A. conceited ",
							"q1": "B. too happy",
							"q2": "C. crazy ",
							"q3": "D. impudent",
							"q4": "E. "
						},
						"ans": "A"
					},		
					"Q24": {
						"qs": "24. Little Sheila is always as lively as a kitten. This means that Sheila is always",
						"opts": {
							"q0": "A. wearing bright dresses",
							"q1": "B. very realistic jn what she does",
							"q2": "C. moving quickly like a kitten",
							"q3": "D. gay and cheerful",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q25": {
						"qs": "25. This masquerade appears once in a blue moon. This means that the masquerade appears",
						"opts": {
							"q0": "A. on very rare occasions",
							"q1": "B. when the moon is blue",
							"q2": "C. whenever a special request is made",
							"q3": "D. once a month",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q26": {
						"qs": "26. Okon is quite hardworking but his problem is that he has too many irons in the fire. This means that Okon",
						"opts": {
							"q0": "A. is a blacksmith",
							"q1": "B. takes on more problems than he can cope with",
							"q2": "C. is very good at solving problems",
							"q3": "D. is a very successful businessman.",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q37": {
						"qs": "37. If Kunle hadn’t been transferred to Kano his wife would not have resigned her teaching job. This means that",
						"opts": {
							"q0": "A. Kunle was not transferred yet his wife resigned her job",
							"q1": "B. Kunle was transferred and his wife thought of resigning her job",
							"q2": "C. Kunle was transferred and so his wife had to resign her job",
							"q3": "D. Kunle’s wife resigned though her husband wasn’t transferred.",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q38": {
						"qs": "38. I'll call at your house this evening if it doesn't rain. This means that I",
						"opts": {
							"q0": "A. will visit you this evening if it rains",
							"q1": "B. will only phone you if it rains this evening",
							"q2": "C. will sleep in your house this evening if it rains",
							"q3": "D. may not visit you this evening if it rains.",
							"q4": "E. "
						},
						"ans": "D"
					},
					"Q39": {
						"qs": "39. Though Ibrahim was provoked, he ought to have controlled himself. This means that Ibrahim",
						"opts": {
							"q0": "A. should have exercised some restraint",
							"q1": "B. was the aggressor",
							"q2": "C. took the provocation with calmness",
							"q3": "D. was found guilty of committing the offence.",
							"q4": "E. "
						},
						"ans": "A"
					},
					"Q40": {
						"qs": "40. The members of staff told the principal that they took exception to his comments. This means that the members of staff",
						"opts": {
							"q0": "A. approved of the principal’s comments",
							"q1": "B. objected to the principal's comments",
							"q2": "C. wanted to be exempted from the principal’s comments",
							"q3": "D. warned the principal about his comments.",
							"q4": "E. "
						},
						"ans": "B"
					},
					"Q41": {
						"qs": "41. Okon is too quiet for my liking. This means that Okon",
						"opts": {
							"q0": "A. is liked because he is very quiet.",
							"q1": "B. likes people who are quiet.",
							"q2": "C. is not liked because of his extreme quietness",
							"q3": "D. behaves in a very queer and suspicious manner.",
							"q4": "E. "
						},
						"ans": "C"
					},
					"Q42": {
						"qs": "42. The teacher said all but one of the sixty candidates scored below a credit grade. This means that",
						"opts": {
							"q0": "A. all the candidates scored below a credit grade",
							"q1": "B. only one of the candidates scored a credit grade",
							"q2": "C. only one of the candidates scored below a credit grade",
							"q3": "D. all the candidates scored a credit grade.",
							"q4": "E. "
						},
						"ans": "B"
					}
				},
				"S4": {
					"headd": "From the words or groups of words lettered A to E below each of the following sentences, choose the word or group of words that is nearest in meaning to the underlined word or group of words as used in the sentence.",
					"Q27": {
						"qs": "27.	It takes a great deal of **stamina** to run the marathon race",
						"opts": {
							"q0": "A. courage",
							"q1": "B. determination",
							"q2": "C. energy",
							"q3": "D. intelligence",
							"q4": "E. cleverness"
						},
						"ans": "C"
					},
					"Q28": {
						"qs": "28. But for the **principal** actor the plav would have been dull",
						"opts": {
							"q0": "A. important",
							"q1": "B. head",
							"q2": "C. master",
							"q3": "D. famous",
							"q4": "E. main"
						},
						"ans": "E"
					},
					"Q29": {
						"qs": "29. An open car has no protection against the **elements**",
						"opts": {
							"q0": "A. weather",
							"q1": "B. emergency",
							"q2": "C. molecule",
							"q3": "D. atoms",
							"q4": "E. atmosphere"
						},
						"ans": "A"
					},
					"Q30": {
						"qs": "30. He was reluctant to grant my request",
						"opts": {
							"q0": "A. disposed",
							"q1": "B. delighted ",
							"q2": "C. reticent ",
							"q3": "D. unwilling ",
							"q4": "E. agreeable"
						},
						"ans": "D"
					},
					"Q31": {
						"qs": "31. The detective was **perplexed** when the clues in the murder case pointed to at least a dozen different suspects",
						"opts": {
							"q0": "A. surprised",
							"q1": "B. confused",
							"q2": "C. excited",
							"q3": "D. discouraged",
							"q4": "E. disappointed"
						},
						"ans": "B"
					},
					"Q32": {
						"qs": "32. The Military Governor called for **a concerted** effort in solving the problems of the state",
						"opts": {
							"q0": "A. a dramatic",
							"q1": "B. an agitated",
							"q2": "C. a joint",
							"q3": "D. a directed",
							"q4": "E. an unfailing"
						},
						"ans": "C"
					},
					"Q33": {
						"qs": "33. My financial situation is so precarious that very soon I may be **insolvent**",
						"opts": {
							"q0": "A. borrowing",
							"q1": "B. stealing",
							"q2": "C. soluble",
							"q3": "D. dependent",
							"q4": "E. bankrupt"
						},
						"ans": "E"
					},
					"Q34": {
						"qs": "34. The chairman is of the opinion that accepting the proposal would be **inimical** to the objectives of the association",
						"opts": {
							"q0": "A. harmful",
							"q1": "B. relevant",
							"q2": "C. irrelevant",
							"q3": "D. indispensable",
							"q4": "E. helpful"
						},
						"ans": "A"
					},
					"Q35": {
						"qs": "35. The famous politician was noted for his **pragmatic** approach to issues of national interest",
						"opts": {
							"q0": "A. idealistic",
							"q1": "B. romantic",
							"q2": "C. compromising",
							"q3": "D. practical",
							"q4": "E. inconsistent"
						},
						"ans": "D"
					},
					"Q36": {
						"qs": "36. Kunle is very **pessimistic** about our chance of success",
						"opts": {
							"q0": "A. sad",
							"q1": "B. despondent",
							"q2": "C. unconvinced",
							"q3": "D. worried",
							"q4": "E. concerned."
						},
						"ans": "B"
					}
				},
				"S1": {
					"headd": "In the following passages the numbered gaps indicate missing words. Against each number in the list below each passage, five choices are offered in columns lettered A to E. For each question, choose the word that is the most suitable to fill the numbered gap in the passage.",
					"PA": {
						"qst": [
						"For the working woman, the task of looking after the home and --76-- up the children is not easy.",
						"Although the house may have every modern --77-- there is still much --78-- to keep her --79-- cooking, cleaning, mending, washing and ironing.",
						"If she is lucky to have a --80-- help her task is made somehow easier.",
						"The working woman spends much of her income on beauty care. Share buys a lot of --81-- and visits --82-- regularly.",
						"Most women are so occupied with the daily --83-- that they need these things to --84-- themselves up.",
						"Thus the responsibilities of a --85-- are quite demanding and sne could be so busy as to have little time for --86-- engagements.",
						"",
						],
						"Q76": {
							"opts": {
								"q0": "A. taking",
								"q1": "B. pulling",
								"q2": "C. getting",
								"q3": "D. pushing",
								"q4": "E. bringing"
							},
							"ans": "E"
						},
						"Q77": {
							"opts": {
								"q0": "A. convenience",
								"q1": "B. necessity",
								"q2": "C. assistance",
								"q3": "D. convention",
								"q4": "E. auxiliary"
							},
							"ans": "A"
						},
						"Q78": {
							"opts": {
								"q0": "A. thing",
								"q1": "B. engagement",
								"q2": "C. work",
								"q3": "D. labour",
								"q4": "E. employment"
							},
							"ans": "C"
						},
						"Q79": {
							"opts": {
								"q0": "A. tied",
								"q1": "B. busy",
								"q2": "C. alert",
								"q3": "D. ready",
								"q4": "E. serious"
							},
							"ans": "B"
						},
						"Q80": {
							"opts": {
								"q0": "A. willing",
								"q1": "B. fraternal",
								"q2": "C. matrimonial",
								"q3": "D. residential",
								"q4": "E. domestic"
							},
							"ans": "E"
						},
						"Q81": {
							"opts": {
								"q0": "A. decorations",
								"q1": "B. condiments",
								"q2": "C. ornaments",
								"q3": "D. cosmetics",
								"q4": "E. trinkets"
							},
							"ans": "C"
						},
						"Q82": {
							"opts": {
								"q0": "A. saloon",
								"q1": "B. shop",
								"q2": "C. store",
								"q3": "D. salon",
								"q4": "E. studio"
							},
							"ans": "D"
						},
						"Q83": {
							"opts": {
								"q0": "A. events",
								"q1": "B. chores",
								"q2": "C. needs",
								"q3": "D. requirements",
								"q4": "E. demands"
							},
							"ans": "B"
						},
						"Q84": {
							"opts": {
								"q0": "A. smile",
								"q1": "B. encourage",
								"q2": "C. cheer",
								"q3": "D. laugh",
								"q4": "E. relax"
							},
							"ans": "C"
						},
						"Q85": {
							"opts": {
								"q0": "A. housemaid",
								"q1": "B. housemistress",
								"q2": "C. householder",
								"q3": "D. housekeeper",
								"q4": "E. housewife"
							},
							"ans": "E"
						},
						"Q86": {
							"opts": {
								"q0": "A. social ",
								"q1": "B. official",
								"q2": "C. personal",
								"q3": "D. civilized",
								"q4": "E. entertaining"
							},
							"ans": "A"
						},
					},
					"PB": {
						"qst": [
						" For fixed fees, insurance companies will help a firm insure against --87-- and provide some --88--.",
						"Most firms will seek --89-- against fire, fraud and other --90-- happenings for which they pay annual --91-- to the insurance companies.",
						"The payments will vary according to the --92-- to be --93--. Some of these happenings may be --94-- sustained during work or --95-- business debts.",
						"A --96-- number is given to the insured for proper --97-- if you have just bought a new car,",
						"it is advisable to undertake a --98-- policy than a --99-- for more risks are covered in the former than in the --100--.",
						],
						"Q87": {
							"opts": {
								"q0": "A. events",
								"q1": "B. accidents",
								"q2": "C. fluctuations",
								"q3": "D. occurrences",
								"q4": "E. emergencies"
							},
							"ans": "B"
						},
						"Q88": {
							"opts": {
								"q0": "A. money",
								"q1": "B. bonus",
								"q2": "C. gifts",
								"q3": "D. discounts",
								"q4": "E. compensation"
							},
							"ans": "E"
						},
						"Q89": {
							"opts": {
								"q0": "A. protection",
								"q1": "B. provision",
								"q2": "C. prevention",
								"q3": "D. advice",
								"q4": "E. aid"
							},
							"ans": "A"
						},
						"Q90": {
							"opts": {
								"q0": "A. costly",
								"q1": "B. unpleasant",
								"q2": "C. unforeseeable",
								"q3": "D. unknown",
								"q4": "E. sudden"
							},
							"ans": "C"
						},
						"Q91": {
							"opts": {
								"q0": "A. fees",
								"q1": "B. sums",
								"q2": "C. accounts",
								"q3": "D. charges",
								"q4": "E. premiums"
							},
							"ans": "E"
						},
						"Q92": {
							"opts": {
								"q0": "A. dangers",
								"q1": "B. claims",
								"q2": "C. subjects",
								"q3": "D. risks",
								"q4": "E. items"
							},
							"ans": "D"
						},
						"Q93": {
							"opts": {
								"q0": "A. agreed",
								"q1": "B. entered",
								"q2": "C. included",
								"q3": "D. undertaken",
								"q4": "E. covered"
							},
							"ans": "E"
						},
						"Q94": {
							"opts": {
								"q0": "A. damage",
								"q1": "B. loss",
								"q2": "C. harm",
								"q3": "D. injury",
								"q4": "E. grievance"
							},
							"ans": "D"
						},
						"Q95": {
							"opts": {
								"q0": "A. overdrawn",
								"q1": "B. unsecured",
								"q2": "C. illegal",
								"q3": "D. overdue",
								"q4": "E. careless"
							},
							"ans": "D"
						},
						"Q96": {
							"opts": {
								"q0": "A. policy",
								"q1": "B. significant",
								"q2": "C. particular",
								"q3": "D. typical",
								"q4": "E. contract"
							},
							"ans": "A"
						},
						"Q97": {
							"opts": {
								"q0": "A. recognition",
								"q1": "B. entry",
								"q2": "C. identification",
								"q3": "D. accounting",
								"q4": "E. auditing"
							},
							"ans": "C"
						},
						"Q98": {
							"opts": {
								"q0": "A. comprehensive",
								"q1": "B. conditional",
								"q2": "C. total",
								"q3": "D. compact",
								"q4": "E. correct"
							},
							"ans": "A"
						},
						"Q99": {
							"opts": {
								"q0": "A. second hand",
								"q1": "B. winning party",
								"q2": "C. second party",
								"q3": "D. third party",
								"q4": "E. subsidiary"
							},
							"ans": "D"
						},
						"Q100": {
							"opts": {
								"q0": "A. later",
								"q1": "B. previous",
								"q2": "C. first",
								"q3": "D. other",
								"q4": "E. latter"
							},
							"ans": "E"
						}
					}
				}
			}
		});
	});

	app.get('/litineng/1988', function(req, res) {
		res.json({
			data: {
				"SA": {
					"P1":{
						"Q1": {
							"qs": "1. Which of the following is common to all forms of literature?",
							"opts": {
								"q0": "A. language ",
								"q1": "B. chorus",
								"q2": "C. action",
								"q3": "D. narrator",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q2": {
							"qs": "2. The three major forms of literature are",
							"opts": {
								"q0": "A. tragedy, comedy, tragi-comedy",
								"q1": "B. poetry, drama, folktales",
								"q2": "C. drama, lyric, prose fiction",
								"q3": "D. poetry, drama, prose.",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q3": {
							"qs": "3. Beauty in poetry depends mainly on",
							"opts": {
								"q0": "A. expression and rhythm",
								"q1": "B. length and theme",
								"q2": "C. vowels and consonants",
								"q3": "D. mood and verse form",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q4": {
							"qs": "4. The predominant figure of speech in the above extract is ",
							"img": "img**LitInEng_1998_sectionb_qst4_1.jpg",
							"opts": {
								"q0": "A. oxymoron",
								"q1": "B. metaphor",
								"q2": "C. simile",
								"q3": "D. personification.",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q5": {
							"qs": "5. The subject matter of the above extract is ",
							"img": "img**LitInEng_1998_sectionb_qst4_1.jpg",
							"opts": {
								"q0": "A. earthquake",
								"q1": "B. house movement",
								"q2": "C. sea waves",
								"q3": "D. storm.",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q6": {
							"qs": "6. The image depicted in the extract is one of",
							"img": "img**LitInEng_1998_sectionb_qst4_1.jpg",
							"opts": {
								"q0": "A. destruction ",
								"q1": "B. merriment ",
								"q2": "C. happiness ",
								"q3": "D. admiration",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q7": {
							"qs": "7. Pick the odd item from the list below",
							"opts": {
								"q0": "A. Night Rain",
								"q1": "B. Things Fall Apart",
								"q2": "C. Stanley Meets Mutesa",
								"q3": "D. Nightfall in Soweto",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q8": {
							"qs": "8. The poetic device used in the above extract is",
							"img": "img**LitInEng_1998_sectionb_qst8_1.jpg",
							"opts": {
								"q0": "A. assonance ",
								"q1": "B. alliteration ",
								"q2": "C. metaphor ",
								"q3": "D. metonymy",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q9": {
							"qs": "9. A poem written or rendered in praise of a person or thing is called",
							"opts": {
								"q0": "A. a lyric",
								"q1": "B. an ode",
								"q2": "C. an elegy",
								"q3": "D. a panegyric.",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q10": {
							"qs": "10. The basic elements of drama are",
							"opts": {
								"q0": "A. character, plot, episode",
								"q1": "B. dialogue, chorus, plot",
								"q2": "C. character, action, setting",
								"q3": "D. character, monologue, plot",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q11": {
							"qs": "11. The choice of appropriate words to convey the thoughts of an author is called",
							"opts": {
								"q0": "A. idiomatic language",
								"q1": "B. setting",
								"q2": "C. figure of speech",
								"q3": "D. diction",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q12": {
							"qs": "12. The state of mind of a poet can be described as",
							"opts": {
								"q0": "A. style",
								"q1": "B. mood",
								"q2": "C. setting",
								"q3": "D. theme",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q13": {
							"qs": "13. Which of the following is a likely source of traditional oral poetry?",
							"opts": {
								"q0": "A. theatre",
								"q1": "B. fiction",
								"q2": "C. books",
								"q3": "D. songs",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q14": {
							"qs": "14. An African author wno has written piays, poems and prose is",
							"opts": {
								"q0": "A. Wole Soyinka",
								"q1": "B. Zaynab Aikaii",
								"q2": "C. Chinua Achebe",
								"q3": "D. Flora Nwapa",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q15": {
							"qs": "15. In a novel, the antagonist is",
							"opts": {
								"q0": "A. a fully developed character",
								"q1": "B. a flat character",
								"q2": "C. the main female character",
								"q3": "D. the archrival of the hero",
								"q4": "E. "
							},
							"ans": "D"
						},			
						"Q16": {
							"qs": "16. The figure of speech underlined in line 1 is",
							"img": "img**LitInEng_1998_sectionb_qst16_1.jpg",
							"opts": {
								"q0": "A. assonance ",
								"q1": "B. consonance ",
								"q2": "C. onomatopoeia ",
								"q3": "D. alliteration",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q17": {
							"qs": "17. The underlined expression in line 3 is",
							"img": "img**LitInEng_1998_sectionb_qst16_1.jpg",
							"opts": {
								"q0": "A. litotes",
								"q1": "B. personification",
								"q2": "C. hyperbole",
								"q3": "D. synecdoche",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q18": {
							"qs": "18. In poetry, rhythm is created by the regular pattern of",
							"opts": {
								"q0": "A. vowels and consonants",
								"q1": "B. long and short words",
								"q2": "C. stressed and unstressed syllables",
								"q3": "D. stressed syllables and rhymes",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q19": {
							"qs": "19. Which of the following is an African poet?",
							"opts": {
								"q0": "A. Dennis Brutus",
								"q1": "B. William Wordsworth",
								"q2": "C. Rober Frost",
								"q3": "D. W.B. Yeats",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q20": {
							"qs": "20. A play that is full of exaggerated ridicule and laughter is called",
							"opts": {
								"q0": "A. farce",
								"q1": "B. comedy",
								"q2": "C. tragi-comedy",
								"q3": "D. masque.",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q21": {
							"qs": "21. In a play, a long speech by a single character in the presence of other characters is called",
							"opts": {
								"q0": "A. soliloquy",
								"q1": "B. monologue",
								"q2": "C. aside",
								"q3": "D. prologue.",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q22": {
							"qs": "22. Pick the odd item from the list below",
							"opts": {
								"q0": "A. tragedy",
								"q1": "B. comedy",
								"q2": "C. epilogue",
								"q3": "D. tragi-comedy",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q23": {
							"qs": "23. A group of actors in a play is called",
							"opts": {
								"q0": "A. characters",
								"q1": "B. cast",
								"q2": "C. chorus",
								"q3": "D. prompters",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q24": {
							"qs": "24. A novel is usually written in",
							"opts": {
								"q0": "A. prose",
								"q1": "B. verse",
								"q2": "C. scenes",
								"q3": "D. stanzas",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q25": {
							"qs": "25. What distinguishes a novel from a play is",
							"opts": {
								"q0": "A. characters",
								"q1": "B. setting",
								"q2": "C. narration",
								"q3": "D. theme",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q26": {
							"qs": "26. Which of the following best describes Literature? It ",
							"opts": {
								"q0": "A. tells the story of great men and women",
								"q1": "B. is a reflection of man’s life in society",
								"q2": "C. is a record of past events",
								"q3": "D. describes what never happened and cannot happen.",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q27": {
							"qs": "27. The literary device in the statement — ‘Students are to come to class with their Shakespeare’ is called",
							"opts": {
								"q0": "A. metonymy",
								"q1": "B. litotes",
								"q2": "C. synecdoche",
								"q3": "D. personification",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q28": {
							"qs": "28. The first person narrator is usually",
							"opts": {
								"q0": "A. the protagonist",
								"q1": "B. a villain in the novel",
								"q2": "C. the antagonist",
								"q3": "D. a character in the novel",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q29": {
							"qs": "29. Which of the following is closest to the form of the novel?",
							"opts": {
								"q0": "A. the short story",
								"q1": "B. fable ",
								"q2": "C. tale ",
								"q3": "D. epic",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q30": {
							"qs": "30. 'The people’s voices rutted like pigs in the mud' is an example of",
							"opts": {
								"q0": "A. simiie ",
								"q1": "B. metaphor",
								"q2": "C. personification",
								"q3": "D. metonymy",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q31": {
							"qs": "The rhyme scheme is",
							"img": "img**LitInEng_1998_sectionb_qst31_1.jpg",
							"opts": {
								"q0": "A. abba",
								"q1": "B. abab",
								"q2": "C. aabb",
								"q3": "D. bbaa",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q32": {
							"qs": "32. This kind of rhyme scheme is known as",
							"img": "img**LitInEng_1998_sectionb_qst31_1.jpg",
							"opts": {
								"q0": "A. alternate ",
								"q1": "B. irregular ",
								"q2": "C. free verse",
								"q3": "D. couplet",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q33": {
							"qs": "33. A poem of four lines is known as a",
							"img": "img**LitInEng_1998_sectionb_qst31_1.jpg",
							"opts": {
								"q0": "A. sonnet ",
								"q1": "B. couplet ",
								"q2": "C. sestet ",
								"q3": "D. quatrain",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q34": {
							"qs": "34. A poem of 14 lines is known as a",
							"opts": {
								"q0": "A. quatrain",
								"q1": "B. octave ",
								"q2": "C. sestet ",
								"q3": "D. sonnet",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q35": {
							"qs": "35. Pick the odd item from the list",
							"opts": {
								"q0": "A. prose ",
								"q1": "B. poetry",
								"q2": "C. drama",
								"q3": "D. tragedy",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q36": {
							"qs": "36. A play on words is",
							"opts": {
								"q0": "A. innuendo ",
								"q1": "B. humour ",
								"q2": "C. pun ",
								"q3": "D. jest",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q37": {
							"qs": "37. A play is fully realized when it is",
							"opts": {
								"q0": "A. studied",
								"q1": "B. memorized",
								"q2": "C. acted",
								"q3": "D. read",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q38": {
							"qs": "38. An epitaph is",
							"opts": {
								"q0": "A. poem of lamentation",
								"q1": "B. a poem of fourteen lines",
								"q2": "C. an inscription on a tomb",
								"q3": "D. the life history of an author",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q39": {
							"qs": "39. The essential function of a tragedy is to make people",
							"opts": {
								"q0": "A. laugh at mankind",
								"q1": "B. think and feel more deeply",
								"q2": "C. think and laugh",
								"q3": "D. know their enemies",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q40": {
							"qs": "40. Mime is the art of acting that involves the use of",
							"opts": {
								"q0": "A. songs only",
								"q1": "B. speeches only",
								"q2": "C. gestures only",
								"q3": "D. dances only",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q41": {
							"qs": "41. A short witty statement is called an",
							"opts": {
								"q0": "A. epigram",
								"q1": "B. anecdote",
								"q2": "C. epistle",
								"q3": "D. analogy",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q42": {
							"qs": "42. ‘Penny wise; pound foolish’is an example of",
							"opts": {
								"q0": "A. metonymy",
								"q1": "B. hyperbole",
								"q2": "C. metaphor",
								"q3": "D. paradox",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q43": {
							"qs": "43. ‘All fingers are not egual’ is an example of",
							"opts": {
								"q0": "A. meiosis",
								"q1": "B. oxymoron",
								"q2": "C. hyperbole",
								"q3": "D. synecdoche",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q44": {
							"qs": "44. Any expression which creates a mental picture is known as",
							"opts": {
								"q0": "A. paradox ",
								"q1": "B. exaggeration",
								"q2": "C. imagery ",
								"q3": "D. symbolism",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q45": {
							"qs": "45. The predominant sound device in the extract is",
							"img": "img**LitInEng_1998_sectionb_qst45_1.jpg",
							"opts": {
								"q0": "A. assonance ",
								"q1": "B. consonance ",
								"q2": "C. onomatopoeia",
								"q3": "D. alliteration",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q46": {
							"qs": "46. The underlined words in lines 1 and 4 are examples of",
							"img": "img**LitInEng_1998_sectionb_qst45_1.jpg",
							"opts": {
								"q0": "A. external rhyme",
								"q1": "B. internal rhyme",
								"q2": "C. end rhyme",
								"q3": "D. alternate rhyme",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q47": {
							"qs": "47. The omniscient narrator",
							"opts": {
								"q0": "A. uses flashback",
								"q1": "B. knows all about characters and events",
								"q2": "C. makes reference to future incidents",
								"q3": "D. knows all about the author",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q48": {
							"qs": "48. The main femaie character in a play is called",
							"opts": {
								"q0": "A. hero",
								"q1": "B. heroine",
								"q2": "C. clown",
								"q3": "D. antagonist",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q49": {
							"qs": "49. The character that opposses the hero in a novel is called the",
							"opts": {
								"q0": "A. protagonist",
								"q1": "B. antagonist",
								"q2": "C. villain ",
								"q3": "D. clown",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q50": {
							"qs": "50. Pick the odd item from the list",
							"opts": {
								"q0": "A. sentence ",
								"q1": "B. paragraph ",
								"q2": "C. expression ",
								"q3": "D. fiction",
								"q4": "E. "
							},
							"ans": "D"
						}
					},
					"P2": {
						"Q51": {
							"qs": "51. The setting of this extract is the",
							"img": "img**LitInEng_1998_sectionb_qst51_1.jpg",
							"opts": {
								"q0": "A. field ",
								"q1": "B. stream ",
								"q2": "C. farm ",
								"q3": "D. mountain",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q52": {
							"qs": "52. The mood of the narrator is one of",
							"img": "img**LitInEng_1998_sectionb_qst51_1.jpg",
							"opts": {
								"q0": "A. shock ",
								"q1": "B. indifference ",
								"q2": "C. happiness ",
								"q3": "D. kindness",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q53": {
							"qs": "53. The narrator’s companion has just",
							"img": "img**LitInEng_1998_sectionb_qst51_1.jpg",
							"opts": {
								"q0": "A. died ",
								"q1": "B. arrived ",
								"q2": "C. relaxed ",
								"q3": "D. collapsed",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q54": {
							"qs": "54. The extract is an example of",
							"img": "img**LitInEng_1998_sectionb_qst51_1.jpg",
							"opts": {
								"q0": "A. narrative prose",
								"q1": "B. descriptive prose",
								"q2": "C. imaginative prose",
								"q3": "D. expository prose",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q55": {
							"qs": "55. The underlined expression is an example of",
							"img": "img**LitInEng_1998_sectionb_qst51_1.jpg",
							"opts": {
								"q0": "A. hyperbole ",
								"q1": "B. metaphor ",
								"q2": "C. simile ",
								"q3": "D. personification",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q56": {
							"qs": "56. The figure of speech used in the first sentence is",
							"img": "img**LitInEng_1998_sectionb_qst56_1.jpg",
							"opts": {
								"q0": "A. personification ",
								"q1": "B. metaphor ",
								"q2": "C. simile ",
								"q3": "D. metonymy",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q57": {
							"qs": "57. In England, sne had loved her husband, in Africa, she",
							"img": "img**LitInEng_1998_sectionb_qst56_1.jpg",
							"opts": {
								"q0": "A. resented him",
								"q1": "B. accepted him",
								"q2": "C. enjoyed her honeymoon",
								"q3": "D. encouraged him",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q58": {
							"qs": "58. ‘From that day her world collapsed’shows that the woman is",
							"img": "img**LitInEng_1998_sectionb_qst56_1.jpg",
							"opts": {
								"q0": "A. better off",
								"q1": "B. wise ",
								"q2": "C. afraid ",
								"q3": "D. unhappy",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q59": {
							"qs": "59. What made the woman’s world collapse is",
							"img": "img**LitInEng_1998_sectionb_qst56_1.jpg",
							"opts": {
								"q0": "A. falling in love with her husband in winter",
								"q1": "B. cutting short their honeymoon",
								"q2": "C. travelling aboard a ship",
								"q3": "D. their movement to Africa",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q60": {
							"qs": "60. From the last sentence, it is obvious that the couple",
							"img": "img**LitInEng_1998_sectionb_qst56_1.jpg",
							"opts": {
								"q0": "A. is happy",
								"q1": "B. is lonely",
								"q2": "C. is childless",
								"q3": "D. has a child",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q61": {
							"qs": "61. The poem is an example of",
							"img": "img**LitInEng_1998_sectionb_qst61_1.jpg",
							"opts": {
								"q0": "A. a lyric",
								"q1": "B. a dirge",
								"q2": "C. an ode",
								"q3": "D. an epic",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q62": {
							"qs": "62. The predominant literary device used in the extract is",
							"img": "img**LitInEng_1998_sectionb_qst61_1.jpg",
							"opts": {
								"q0": "A. hyperbole ",
								"q1": "B. epigram ",
								"q2": "C. oxymoron ",
								"q3": "D. apostrophe",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q63": {
							"qs": "63. The feeling of the poet is one of",
							"img": "img**LitInEng_1998_sectionb_qst61_1.jpg",
							"opts": {
								"q0": "A. anxiety ",
								"q1": "B. gaiety ",
								"q2": "C. sadness ",
								"q3": "D. frustration",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q64": {
							"qs": "64. The underlined expression contains a",
							"img": "img**LitInEng_1998_sectionb_qst61_1.jpg",
							"opts": {
								"q0": "A. simile ",
								"q1": "B. metaphor ",
								"q2": "C. personification ",
								"q3": "D. litotes",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q65": {
							"qs": "65. The poem is a blank verse because",
							"img": "img**LitInEng_1998_sectionb_qst61_1.jpg",
							"opts": {
								"q0": "A. there is no rhyme",
								"q1": "B. there is rhyme",
								"q2": "C. the rhyme is alternate",
								"q3": "D. it contains couplets",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q66": {
							"qs": "66. The rhyme scheme of the above extract is",
							"img": "img**LitInEng_1998_sectionb_qst16_1.jpg",
							"opts": {
								"q0": "A. alternate ",
								"q1": "B. irregular ",
								"q2": "C. free verse",
								"q3": "D. couplet",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q67": {
							"qs": "67. The literary device used in line 1 is an example of ",
							"img": "img**LitInEng_1998_sectionb_qst16_1.jpg",
							"opts": {
								"q0": "A. climax",
								"q1": "B. apostrophe",
								"q2": "C. metonymy",
								"q3": "D. euphemism",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q68": {
							"qs": "68. The literary device used in lines 3 & 4 of stanza 1 is",
							"img": "img**LitInEng_1998_sectionb_qst16_1.jpg",
							"opts": {
								"q0": "A. paradox",
								"q1": "B. antithesis",
								"q2": "C. apostrophe",
								"q3": "D. rhetorical question",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q69": {
							"qs": "69. The predominant figure of speech, in stanza II is",
							"img": "img**LitInEng_1998_sectionb_qst16_1.jpg",
							"opts": {
								"q0": "A. consonance",
								"q1": "B. alliteration",
								"q2": "C. personification",
								"q3": "D. epigram",
								"q4": "E. "
							},
							"ans": "C"
						},			
						"Q70": {
							"qs": "70. The mood of the poet is that of",
							"img": "img**LitInEng_1998_sectionb_qst16_1.jpg",
							"opts": {
								"q0": "A. carelessness",
								"q1": "B. happiness",
								"q2": "C. gaiety",
								"q3": "D. helplessness",
								"q4": "E. "
							},
							"ans": "B"
						}
					}
				},
				"SB": {
					"P1": {
						"Q71": {
							"qs": "71. Speaker A is",
							"img": "img**LitInEng_1998_sectionb_qst71_1.jpg",
							"opts": {
								"q0": "A. Maria ",
								"q1": "B. Olivia ",
								"q2": "C. Valentine ",
								"q3": "D. Viola",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q72": {
							"qs": "72. Speaker B is",
							"img": "img**LitInEng_1998_sectionb_qst71_1.jpg",
							"opts": {
								"q0": "A. Sir Toby",
								"q1": "B. Sir Andrew",
								"q2": "C. Captain",
								"q3": "D. Olivia",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q73": {
							"qs": "73. Speaker B is worried about Illyria because the lady",
							"img": "img**LitInEng_1998_sectionb_qst71_1.jpg",
							"opts": {
								"q0": "A. is new to Illyria",
								"q1": "B. is not familiar with the language",
								"q2": "C. does not understand the government",
								"q3": "D. is afraid of the people",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q74": {
							"qs": "74. Why is speaker A afraid the brother might be drowned? It is because",
							"img": "img**LitInEng_1998_sectionb_qst71_1.jpg",
							"opts": {
								"q0": "A. the crew was unfaithful",
								"q1": "B. the snip captain threw him overboard",
								"q2": "C. they fought with pirates",
								"q3": "D. they were shipwrecked",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q75": {
							"qs": "75. The figure of speech underlined in the extract is known as",
							"img": "img**LitInEng_1998_sectionb_qst71_1.jpg",
							"opts": {
								"q0": "A. apostrophe",
								"q1": "B. alliteration",
								"q2": "C. assonance",
								"q3": "D. personification",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q76": {
							"qs": "76. Speaker A is",
							"img": "img**LitInEng_1998_sectionb_qst76_1.jpg",
							"opts": {
								"q0": "A. Sebastian",
								"q1": "B. Fabian",
								"q2": "C. Duke",
								"q3": "D. Sir Andrew",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q77": {
							"qs": "77. Speaker A’s object of love is",
							"img": "img**LitInEng_1998_sectionb_qst76_1.jpg",
							"opts": {
								"q0": "A. Maria ",
								"q1": "B. Olivia ",
								"q2": "C. Viola ",
								"q3": "D. Feste",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q78": {
							"qs": "78. The hero of the play is",
							"img": "img**LitInEng_1998_sectionb_qst76_1.jpg",
							"opts": {
								"q0": "A. Antonio ",
								"q1": "B. Sebastian ",
								"q2": "C. Fabian ",
								"q3": "D. Duke",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q79": {
							"qs": "79. The mood of Speaker A in the above scene is one of",
							"img": "img**LitInEng_1998_sectionb_qst76_1.jpg",
							"opts": {
								"q0": "A. sadness ",
								"q1": "B. hope ",
								"q2": "C. joy ",
								"q3": "D. anxiety",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q80": {
							"qs": "80. The play Twelfth Night’ is a",
							"img": "img**LitInEng_1998_sectionb_qst76_1.jpg",
							"opts": {
								"q0": "A. tragi-comedy",
								"q1": "B. farce ",
								"q2": "C. tragedy",
								"q3": "D. comedy",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q81": {
							"qs": "81. Speaker A is",
							"img": "img**LitInEng_1998_sectionb_qst81_1.jpg",
							"opts": {
								"q0": "A. Sir Andrew",
								"q1": "B. Sir Toby",
								"q2": "C. Antonio",
								"q3": "D. Feste",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q82": {
							"qs": "82. Speaker B is",
							"img": "img**LitInEng_1998_sectionb_qst81_1.jpg",
							"opts": {
								"q0": "A. Olivia ",
								"q1": "B. Viola ",
								"q2": "C. Antonio ",
								"q3": "D. Sebastian",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q83": {
							"qs": "83. The Count referred to in the extract is",
							"img": "img**LitInEng_1998_sectionb_qst81_1.jpg",
							"opts": {
								"q0": "A. Orsino",
								"q1": "B. Sir Andrew",
								"q2": "C. Toby",
								"q3": "D. Malvolio",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q84": {
							"qs": "84. The mood of Speaker A, is that of",
							"img": "img**LitInEng_1998_sectionb_qst81_1.jpg",
							"opts": {
								"q0": "A. gaiety",
								"q1": "B. courage",
								"q2": "C. melancholy",
								"q3": "D. fear",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q85": {
							"qs": "85. By the offence in the extract, Speaker A is a",
							"img": "img**LitInEng_1998_sectionb_qst81_1.jpg",
							"opts": {
								"q0": "A. nuisance",
								"q1": "B. pirate",
								"q2": "C. fighter",
								"q3": "D. businessman",
								"q4": "E. "
							},
							"ans": "B"
						}
					},
					"P2": {
						"Q86": {
							"qs": "86. Speaker A is",
							"img": "img**LitInEng_1998_sectionb_qst86_1.jpg",
							"opts": {
								"q0": "A. first chief",
								"q1": "B. priest ",
								"q2": "C. Odewale ",
								"q3": "D. second chief",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q87": {
							"qs": "Speaker A is addressing",
							"img": "img**LitInEng_1998_sectionb_qst86_1.jpg",
							"opts": {
								"q0": "A. second chief",
								"q1": "B. towns people",
								"q2": "C. third chief",
								"q3": "D. Ojuola",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q88": {
							"qs": "The land is not at peace because of",
							"img": "img**LitInEng_1998_sectionb_qst86_1.jpg",
							"opts": {
								"q0": "A. sickness ana death",
								"q1": "B. famine and war",
								"q2": "C. chieftaincy tussle",
								"q3": "D. political unrest",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q89": {
							"qs": "89. Speaker As duty is to",
							"img": "img**LitInEng_1998_sectionb_qst86_1.jpg",
							"opts": {
								"q0": "A. cure the people’s illness",
								"q1": "B. guard the palace",
								"q2": "C. visit sick people",
								"q3": "D. rule and protect the people",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q90": {
							"qs": "90. Where are Speakers A and B when the above statements are made? They are at",
							"img": "img**LitInEng_1998_sectionb_qst86_1.jpg",
							"opts": {
								"q0": "A. Speaker A’s clinic",
								"q1": "B. the house of Speaker B",
								"q2": "C. the farm",
								"q3": "D. the palace",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q91": {
							"qs": "91. 'My Lord' refers to",
							"img": "img**LitInEng_1998_sectionb_qst91_1.jpg",
							"opts": {
								"q0": "A. third chief",
								"q1": "B. Aderopo",
								"q2": "C. Odewale",
								"q3": "D. first chief",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q92": {
							"qs": "92. 'The charges' are made on the basis of",
							"img": "img**LitInEng_1998_sectionb_qst91_1.jpg",
							"opts": {
								"q0": "A. treason",
								"q1": "B. murder",
								"q2": "C. jealousy",
								"q3": "D. suspicion",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q93": {
							"qs": "93. 'Bedsharer' implies",
							"img": "img**LitInEng_1998_sectionb_qst91_1.jpg",
							"opts": {
								"q0": "A. adultery",
								"q1": "B. matrimony",
								"q2": "C. divorce",
								"q3": "D. separation",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q94": {
							"qs": "94. The 'blind bat' is",
							"img": "img**LitInEng_1998_sectionb_qst91_1.jpg",
							"opts": {
								"q0": "A. first chief",
								"q1": "B. Odewale",
								"q2": "C. third chief",
								"q3": "D. Baba Fakunle",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q95": {
							"qs": "95. Speaker A is",
							"img": "img**LitInEng_1998_sectionb_qst91_1.jpg",
							"opts": {
								"q0": "A. first chief",
								"q1": "B. Odewale",
								"q2": "C. third chief",
								"q3": "D. Ojuola",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q96": {
							"qs": "96. Speaker A",
							"img": "img**LitInEng_1998_sectionb_qst96_1.jpg",
							"opts": {
								"q0": "A. Odewale",
								"q1": "B. lya aburo",
								"q2": "C. Ojuola",
								"q3": "D. third chief",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q97": {
							"qs": "97. The trouble in the land is",
							"img": "img**LitInEng_1998_sectionb_qst96_1.jpg",
							"opts": {
								"q0": "A. an epidemic",
								"q1": "B. famine",
								"q2": "C. war",
								"q3": "D. land dispute",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q98": {
							"qs": "98. Speaker B is",
							"img": "img**LitInEng_1998_sectionb_qst96_1.jpg",
							"opts": {
								"q0": "A. Aderopo",
								"q1": "B. Odewale",
								"q2": "C. Priest",
								"q3": "D. Baba Fakunle",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q99": {
							"qs": "99. Ifa oracle is consulted at",
							"img": "img**LitInEng_1998_sectionb_qst96_1.jpg",
							"opts": {
								"q0": "A. Ede",
								"q1": "B. Osogbo",
								"q2": "C. Ife",
								"q3": "D. Kutuje",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q100": {
							"qs": "100. The cause of the trouble is",
							"img": "img**LitInEng_1998_sectionb_qst96_1.jpg",
							"opts": {
								"q0": "A. rivalry",
								"q1": "B. incest",
								"q2": "C. jealousy",
								"q3": "D. war",
								"q4": "E. "
							},
							"ans": "B"
						}
					},
					"P3": {
						"Q71": {
							"qs": "71. Them in line 1 refers to",
							"img": "img**LitInEng_1998_sectionb_qst71b_1.jpg",
							"opts": {
								"q0": "A. Mr. and Mrs Hardcastle",
								"q1": "B. Tony Lumpkin and Diggory",
								"q2": "C. The neighbours",
								"q3": "D. The two Miss Hoggs and Mrs. Grigsby",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q72": {
							"qs": "72. Speaker B wishes to take a trip to",
							"img": "img**LitInEng_1998_sectionb_qst71b_1.jpg",
							"opts": {
								"q0": "A. the countryside",
								"q1": "B. France",
								"q2": "C. London ",
								"q3": "D. a village",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q73": {
							"qs": "73. Speaker A and B are in",
							"img": "img**LitInEng_1998_sectionb_qst71b_1.jpg",
							"opts": {
								"q0": "A. a chamber",
								"q1": "B. the town",
								"q2": "C. London ",
								"q3": "D. a stage coach",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q74": {
							"qs": "74. The name of the youngman coming from town is",
							"img": "img**LitInEng_1998_sectionb_qst74b_1.jpg",
							"opts": {
								"q0": "A. Sir Charles Marlow",
								"q1": "B. Tony Lumpkin",
								"q2": "C. Diggory",
								"q3": "D. Young",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q75": {
							"qs": "75. Speaker A is the father of",
							"img": "img**LitInEng_1998_sectionb_qst74b_1.jpg",
							"opts": {
								"q0": "A. Kate Hardcastle",
								"q1": "B. Tony Lumpkin",
								"q2": "C. Hastings",
								"q3": "D. Diggory",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q76": {
							"qs": "76. The news of the suitor's visit makes Speaker B",
							"img": "img**LitInEng_1998_sectionb_qst74b_1.jpg",
							"opts": {
								"q0": "A. happy ",
								"q1": "B. sad",
								"q2": "C. anxious",
								"q3": "D. pessimistic",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q77": {
							"qs": "77. The underlined expression reveals that speaker B",
							"img": "img**LitInEng_1998_sectionb_qst74b_1.jpg",
							"opts": {
								"q0": "A. likes contracted marriages",
								"q1": "B. disapproves of contracted marriages",
								"q2": "C. is indifferent to the marriage contract",
								"q3": "D. suspects tne meeting may not hold",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q78": {
							"qs": "78. the gentlemen are",
							"img": "img**LitInEng_1998_sectionb_qst78b_1.jpg",
							"opts": {
								"q0": "A. Mr Hardcastle and Sir Marlow",
								"q1": "B. Tony Lumpkin and Landlord",
								"q2": "C. Hastings and Diggory",
								"q3": "D. Young Marlow and Hastings",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q79": {
							"qs": "79. They are both welcome to the house of Mr. and Mrs.",
							"img": "img**LitInEng_1998_sectionb_qst78b_1.jpg",
							"opts": {
								"q0": "A. Hardcastle",
								"q1": "B. Diggory",
								"q2": "C. Hastings",
								"q3": "D. Marlow",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q80": {
							"qs": "80. Speaker A is happy to receive his",
							"img": "img**LitInEng_1998_sectionb_qst78b_1.jpg",
							"opts": {
								"q0": "A. friends",
								"q1": "B. sons-in-law",
								"q2": "C. brothers",
								"q3": "D. daughter’s suitor",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q81": {
							"qs": "81. Speaker B believes Speaker A is",
							"img": "img**LitInEng_1998_sectionb_qst78b_1.jpg",
							"opts": {
								"q0": "A. a steward",
								"q1": "B. the landlord",
								"q2": "C. an inn keeper",
								"q3": "D. a porter",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q82": {
							"qs": "82. Speaker B is ",
							"img": "img**LitInEng_1998_sectionb_qst78b_1.jpg",
							"opts": {
								"q0": "A. Tony Lumpkin",
								"q1": "B. Mr. Hardcastle",
								"q2": "C. Sir Charles Marlow",
								"q3": "D. Young Marlow",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q83": {
							"qs": "83. The heroine of the play, She Stoops to Conquer is",
							"opts": {
								"q0": "A. Miss Hardcastle",
								"q1": "B. Miss Neville",
								"q2": "C. Mrs Hardcastle",
								"q3": "D. Mrs. Grigsby",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q84": {
							"qs": "84. Mrs. Hardcastle is best described as",
							"opts": {
								"q0": "A. dumb",
								"q1": "B. petty",
								"q2": "C. modest",
								"q3": "D. vain",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q85": {
							"qs": "85. Mrs. Hardcastle dotes very much on",
							"opts": {
								"q0": "A. Kate",
								"q1": "B. Tony",
								"q2": "C. Neville",
								"q3": "D. Marlow",
								"q4": "E. "
							},
							"ans": "B"
						}
					},
					"P4": {
						"Q86": {
							"qs": "86. Speaker A is",
							"img": "img**LitInEng_1998_sectionb_qst86b_1.jpg",
							"opts": {
								"q0": "A. Aya",
								"q1": "B. Christie",
								"q2": "C. Ananse",
								"q3": "D. Ekuwa",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q87": {
							"qs": "87. Speaker B is",
							"img": "img**LitInEng_1998_sectionb_qst86b_1.jpg",
							"opts": {
								"q0": "A. the countryside",
								"q1": "B. France",
								"q2": "C. London ",
								"q3": "D. a village",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q88": {
							"qs": "88. The delicious news is the",
							"img": "img**LitInEng_1998_sectionb_qst88b_1.jpg",
							"opts": {
								"q0": "A. head drink ceremony",
								"q1": "B. chieftaincy ceremony ",
								"q2": "C. marriage proposal",
								"q3": "D. the delivery of a cheque",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q89": {
							"qs": "89. The 'delicious news' is delivered by",
							"img": "img**LitInEng_1998_sectionb_qst88b_1.jpg",
							"opts": {
								"q0": "A. the postman",
								"q1": "B. Chief who is chief",
								"q2": "C. the honourable",
								"q3": "D. the messenger",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q90": {
							"qs": "90. Speaker A is",
							"img": "img**LitInEng_1998_sectionb_qst88b_1.jpg",
							"opts": {
								"q0": "A. Anansewa ",
								"q1": "B. Chief who is chief",
								"q2": "C. the messenger",
								"q3": "D. Ananse",
								"q4": "E. "
							},
							"ans": "B"
						},
						"Q91": {
							"qs": "91. The speaker is",
							"img": "img**LitInEng_1998_sectionb_qst91b_1.jpg",
							"opts": {
								"q0": "A. Chief Sapa",
								"q1": "B. Anansewa",
								"q2": "C. Ananse",
								"q3": "D. Chief who is chief",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q92": {
							"qs": "92. The 'little affair' is about",
							"img": "img**LitInEng_1998_sectionb_qst91b_1.jpg",
							"opts": {
								"q0": "A. Ananse",
								"q1": "B. Togbe Klu IV",
								"q2": "C. Chief Sapa",
								"q3": "D. Anansewa",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q93": {
							"qs": "93. 'The object' of interest is",
							"img": "img**LitInEng_1998_sectionb_qst91b_1.jpg",
							"opts": {
								"q0": "A. Anansewa",
								"q1": "B. Ananse",
								"q2": "C. chieftaincy",
								"q3": "D. marriage",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q94": {
							"qs": "94. Speaker A is",
							"img": "img**LitInEng_1998_sectionb_qst94b_1.jpg",
							"opts": {
								"q0": "A. Christie",
								"q1": "B. Aya",
								"q2": "C. Ananse",
								"q3": "D. Anansewa",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q95": {
							"qs": "95. Speaker B is",
							"img": "img**LitInEng_1998_sectionb_qst94b_1.jpg",
							"opts": {
								"q0": "A. Ananse",
								"q1": "B. messenger",
								"q2": "C. Christie",
								"q3": "D. Anansewa",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q96": {
							"qs": "96. Speaker A is Speaker B's",
							"img": "img**LitInEng_1998_sectionb_qst94b_1.jpg",
							"opts": {
								"q0": "A. niece",
								"q1": "B. sister",
								"q2": "C. daughter",
								"q3": "D. father",
								"q4": "E. "
							},
							"ans": "D"
						},
						"Q97": {
							"qs": "97. The speaker is",
							"img": "img**LitInEng_1998_sectionb_qst97b_1.jpg",
							"opts": {
								"q0": "A. Ekuwa",
								"q1": "B. Christie",
								"q2": "C. Aya",
								"q3": "D. Ananse",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q98": {
							"qs": "98. The brass bowl is meant",
							"img": "img**LitInEng_1998_sectionb_qst97b_1.jpg",
							"opts": {
								"q0": "A. to collect gifts",
								"q1": "B. for food",
								"q2": "C. as a gift",
								"q3": "D. for rituals",
								"q4": "E. "
							},
							"ans": "A"
						},
						"Q99": {
							"qs": "99. The above speech is made at the",
							"img": "img**LitInEng_1998_sectionb_qst97b_1.jpg",
							"opts": {
								"q0": "A. naming ceremony",
								"q1": "B. christening ceremony",
								"q2": "C. outdooring ceremony",
								"q3": "D. chieftaincy ceremony",
								"q4": "E. "
							},
							"ans": "C"
						},
						"Q100": {
							"qs": "100. The suitor who finally marries Anansewa is",
							"opts": {
								"q0": "A. Chief Sapa",
								"q1": "B. Chief who is chief",
								"q2": "C. Chief ofthe mines",
								"q3": "D. Togbe Klu IV",
								"q4": "E. "
							},
							"ans": "B"
						}
					}
				}
			}
		});
	});
	
	app.get('/geography/1988', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. The scale of the map is approximately",
					"img": "img**geo_1988_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. 1:10 000",
						"q1": "B. 1:25 000",
						"q2": "C. 1:50 000",
						"q3": "D. 1:200 000",
						"q4": "E. 1:1 000 000."
					},
					"ans": "D"
				},
				"Q2": {
					"qs": "2. What is the appropriate straight line distance between Tiki and Tanko?",
					"img": "img**geo_1988_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. 20.0 km",
						"q1": "B. 27.0 km",
						"q2": "C. 36.0 km",
						"q3": "D. 46.0 km",
						"q4": "E. 16.0 km."
					},
					"ans": "B"
				},
				"Q3": {
					"qs": "3. The approximate bearing of Joma from Tanko is",
					"img": "img**geo_1988_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. 45°",
						"q1": "B. 50°",
						"q2": "C. 65°",
						"q3": "D. 295°",
						"q4": "E. 315°."
					},
					"ans": "C"
				},
				"Q4": {
					"qs": "4. Which of the following settlements is not visible from Tanko?",
					"img": "img**geo_1988_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. Kevu",
						"q1": "B. Magu",
						"q2": "C. Bore",
						"q3": "D. Wazo",
						"q4": "E. Joma."
					},
					"ans": "E"
				},
				"Q5": {
					"qs": "5. Which of the following is likely to be the most important railway town?",
					"img": "img**geo_1988_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. Magu",
						"q1": "B. Tanko",
						"q2": "C. Wazo",
						"q3": "D. Gomi",
						"q4": "E. Kiti."
					},
					"ans": "E"
				},
				"Q6": {
					"qs": "6. Which of the following settlements is located on a col?",
					"img": "img**geo_1988_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. Kofi",
						"q1": "B. Gomi",
						"q2": "C. Joma",
						"q3": "D. Magu",
						"q4": "E. Basa."
					},
					"ans": "C"
				},
				"Q7": {
					"qs": "7. The rivers of Tanko district",
					"img": "img**geo_1988_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. flow into the ocean",
						"q1": "B. are characterized by meanders",
						"q2": "C. have their sources in the central highlands",
						"q3": "D. have radial drainage patterns",
						"q4": "E. are seasonal rivers."
					},
					"ans": "C"
				},
				"Q8": {
					"qs": "8. The main occupation of the inhabitants of Joma area is likey to be",
					"img": "img**geo_1988_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. fishing",
						"q1": "B. lumbering",
						"q2": "C. mining",
						"q3": "D. animal-rearing",
						"q4": "E. pottery-making."
					},
					"ans": "D"
				},
				"Q9": {
					"qs": "9. There are few settlements north and south of Kofi because",
					"img": "img**geo_1988_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. it is mainly on grassland",
						"q1": "B. there are no railways",
						"q2": "C. nobody wants to live there",
						"q3": "D. it is highland area with steep slopes",
						"q4": "E. there are no roads."
					},
					"ans": "D"
				},
				"Q10": {
					"qs": "10. The cultivation of sugarcane is most likely to take place",
					"img": "img**geo_1988_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. north of Wazo",
						"q1": "B. in the area around Kevu",
						"q2": "C. southeast of Wazo",
						"q3": "D. around Lori and environs",
						"q4": "E. in the area around Kagora."
					},
					"ans": "C"
				},
				"Q11": {
					"qs": "11. Which of the following statements is not true of the Solar system?",
					"opts": {
						"q0": "A. The rays of the sun give energy to the system",
						"q1": "B. All the planets rotate around the sun",
						"q2": "C. All the planets have their orbits round the sun",
						"q3": "D. The planets revolve around the sun",
						"q4": "E. The sun is at the centre of the system."
					},
					"ans": "B"
				},
				"Q12": {
					"qs": "12. In the southern hemisphere, the autumnal equinox occurs on",
					"opts": {
						"q0": "A. 21st March",
						"q1": "B. 21st June",
						"q2": "C. 23rd September",
						"q3": "D. 22nd December",
						"q4": "E. 4th January."
					},
					"ans": "C"
				},
				"Q13": {
					"qs": "13. The layer of earth found immediately beneath the crust is called",
					"opts": {
						"q0": "A. hydrosphere",
						"q1": "B. lithosphere",
						"q2": "C. mesosphere",
						"q3": "D. barysphere",
						"q4": "E. core."
					},
					"ans": "C"
				},
				"Q14": {
					"qs": "14. They are formed from the accumulation of materials derived from other rocks which have been cemented together'. This is a description of",
					"opts": {
						"q0": "A. metamorphic rocks",
						"q1": "B. plutonic rocks",
						"q2": "C. organically formed sedimentary rocks",
						"q3": "D. volcanic rocks",
						"q4": "E. mechanically formed sedimentary rocks."
					},
					"ans": "E"
				},
				"Q15": {
					"qs": "15. Which of the following is a volcanic plateau?",
					"opts": {
						"q0": "A. Kukuruku",
						"q1": "B. Terra Rosa",
						"q2": "C. Deccan",
						"q3": "D. Graben",
						"q4": "E. Atlas."
					},
					"ans": "C"
				},
				"Q16": {
					"qs": "16. The overriding portion of the thrust fold is termed",
					"opts": {
						"q0": "A. a simple fold",
						"q1": "B. an overfold",
						"q2": "C. a syncline",
						"q3": "D. a nappe",
						"q4": "E. an anticline."
					},
					"ans": "D"
				},
				"Q17": {
					"qs": "17. Depositional plains refer to all the following except",
					"opts": {
						"q0": "A. alluvial plains",
						"q1": "B. structural plains",
						"q2": "C. deltaic plains",
						"q3": "D. flood plains",
						"q4": "E. drift plains."
					},
					"ans": "B"
				},
				"Q18": {
					"qs": "18. When the roof of a coastal cave collapses, it forms",
					"opts": {
						"q0": "A. a doline",
						"q1": "B. an estuary",
						"q2": "C. a gorge",
						"q3": "D. a lagoon",
						"q4": "E. a geo."
					},
					"ans": "E"
				},
				"Q19": {
					"qs": "19. During wave actions, the rush of water onshore is called",
					"opts": {
						"q0": "A. longshore drift",
						"q1": "B. swash",
						"q2": "C. underlow",
						"q3": "D. backwash",
						"q4": "E. tidal current."
					},
					"ans": "B"
				},
				"Q20": {
					"qs": "20. The Red Sea has a higher degree of salinity than the Mediterranean Sea because the former",
					"opts": {
						"q0": "A. is smaller in size than the latter",
						"q1": "B. is located in a rift valley while the letter is located in a geosyncline",
						"q2": "C. receives a smaller amount of fresh water than the latter",
						"q3": "D. is linked with the Indian Ocean while the latter is linked with the Atlantic",
						"q4": "E. is nearer a hot desert than the latter."
					},
					"ans": "C"
				},
				"Q21": {
					"qs": "21. Most warm ocean currents flow",
					"opts": {
						"q0": "A. on the eastern side of continents",
						"q1": "B. towards the equator",
						"q2": "C. in the Pacific Ocean",
						"q3": "D. on the western side of continents",
						"q4": "E. towards the high latitudes."
					},
					"ans": "E"
				},
				"Q22": {
					"qs": "22. The cooling of a warm moist air current as it passes over a cold sea or land surface often causes",
					"opts": {
						"q0": "A. a counter current",
						"q1": "B. rainfall",
						"q2": "C. a cyclone",
						"q3": "D. fogs",
						"q4": "E. a high tide."
					},
					"ans": "D"
				},
				"Q23": {
					"qs": "23. Which of the following combinations of factors influences atmospheric pressure? I. Latitude II. Soil moisture III.	Altitude IV. Temperature",
					"opts": {
						"q0": "A. I, II and III only",
						"q1": "B. I, II and IV only",
						"q2": "C. I, III and IV only",
						"q3": "D. I and II only",
						"q4": "E. II, III and IV only."
					},
					"ans": "C"
				},
				"Q24": {
					"qs": "24. Which of the following local winds are hot? I. Sirocco II. Leveene III. Mistral IV. Bora",
					"opts": {
						"q0": "A. I and II only",
						"q1": "B. I and III only",
						"q2": "C. II and III only",
						"q3": "D. II and IV only",
						"q4": "E. Ill and IV only."
					},
					"ans": "A"
				},
				"Q25": {
					"qs": "25. When you observe the wind vane, the head of the arrow shows the",
					"opts": {
						"q0": "A. speed of the wind",
						"q1": "B. direction tg, which the wind is blowing",
						"q2": "C. duration of the windweight of the wind",
						"q3": "D. weight of the wind",
						"q4": "E. direction from which the wind is blowing."
					},
					"ans": "B"
				},
				"Q26": {
					"qs": "26. The annual range of temperature is",
					"img": "img**geo_1988_sectionb_qst26_1.jpg",
					"opts": {
						"q0": "A. 3°C",
						"q1": "B. 4°C",
						"q2": "C. 5°C",
						"q3": "D. 6°C",
						"q4": "E. 7°C."
					},
					"ans": "D"
				},
				"Q27": {
					"qs": "27. The above climatic data refers to the",
					"img": "img**geo_1988_sectionb_qst26_1.jpg",
					"opts": {
						"q0": "A. warm temperate climate",
						"q1": "B. equatorial climate",
						"q2": "C. savannah climate",
						"q3": "D. cool temperate climate",
						"q4": "E. desert climate."
					},
					"ans": "C"
				},
				"Q28": {
					"qs": "28. Which of the following least explains the advantages of Koppen’s classification of climate over the Greek classification?",
					"opts": {
						"q0": "A. There are five major divisions in Koppen’s classification",
						"q1": "B. The Greek classification is rather too generalised",
						"q2": "C. Koppen’s classification is based on both rainfall and temperature whereas the Greek classification is based on temperature only",
						"q3": "D. The values of rainfall and temperature used by Koppen’s are based on the requirement of certain plants",
						"q4": "E. The Koppen’s classification was developed more recently than the Greek classification"
					},
					"ans": "A"
				},
				"Q29": {
					"qs": "29. A soil profile refers to the",
					"opts": {
						"q0": "A. gradient of the soil",
						"q1": "B. slope of the soil",
						"q2": "C. vertical section of the soil",
						"q3": "D. mineral composition of the soil",
						"q4": "E. horizontal equivalent of the soii exaggeration."
					},
					"ans": "C"
				},
				"Q30": {
					"qs": "30. The cool temperate woodland is characterized by",
					"opts": {
						"q0": "A. sparse undergrowth and broad-leaved deciduous trees",
						"q1": "B. very sparse vegetation of xerophytic plants",
						"q2": "C. wiry grass and shrub",
						"q3": "D. rolling grassland that are treeless",
						"q4": "E. trees with leaves appearing brown throughout the year."
					},
					"ans": "A"
				},
				"Q31": {
					"qs": "31. Interdependence within the ecosystem can best be interpreted to mean that components of the ecosystem",
					"opts": {
						"q0": "A. prey on one another",
						"q1": "B. harm one another",
						"q2": "C. regulate one another",
						"q3": "D. interact with one another",
						"q4": "E. .create one another"
					},
					"ans": "D"
				},
				"Q32": {
					"qs": "32. Which of the following is not a measure of environmental control?",
					"opts": {
						"q0": "A. Preservation",
						"q1": "B. Stabilisation",
						"q2": "C. Regradation",
						"q3": "D. Afforestation",
						"q4": "E. Conservation."
					},
					"ans": "C"
				},
				"Q33": {
					"qs": "33. The concept of environmental balance can be taken to mean that an alteration in one of the components of the ecosystem may likely result in the",
					"opts": {
						"q0": "A. minimisation of the processes within the system",
						"q1": "B. reversal of the processes within the system",
						"q2": "C. acceleration of the processes within the system",
						"q3": "D. stabilization of the processes within the system",
						"q4": "E. stopping of the processes within the system."
					},
					"ans": "B"
				},
				"Q34": {
					"qs": "34. The rapid exhaustion of non-renewable natural resources may least be aided by one of the following. Which is it?",
					"opts": {
						"q0": "A. Increased urbanisation",
						"q1": "B. Reckless exploitation",
						"q2": "C. Inadequate technology",
						"q3": "D. Natural disaster",
						"q4": "E. Excessive demand."
					},
					"ans": "C"
				},
				"Q35": {
					"qs": "35. Through which of the following sea routes is crude oil from Nigeria transported to Europe?",
					"opts": {
						"q0": "A. North-Atlantic",
						"q1": "B. Trans-Pacific",
						"q2": "C. Far-East",
						"q3": "D. South-Atlantic",
						"q4": "E. Trans-lndian."
					},
					"ans": "D"
				},
				"Q36": {
					"qs": "36. Which of the following continents has the largest population?",
					"opts": {
						"q0": "A. Africa",
						"q1": "B. Asia",
						"q2": "C. Europe",
						"q3": "D. North America",
						"q4": "E. South America."
					},
					"ans": "B"
				},
				"Q37": {
					"qs": "37. Which of the following is most hindered by the line squalls, harmattan haze and rainy season clouds?",
					"opts": {
						"q0": "A. River transport",
						"q1": "B. Road transport",
						"q2": "C. Rail transport",
						"q3": "D. Air transport",
						"q4": "E. Ocean transport."
					},
					"ans": "A"
				},
				"Q38": {
					"qs": "38. All the following are major sources of air pollution except",
					"opts": {
						"q0": "A. gas flaring",
						"q1": "B. domestic cooking",
						"q2": "C. aviation combustion",
						"q3": "D. Industrial furnaces",
						"q4": "E. vehicle Combustion."
					},
					"ans": "B"
				},
				"Q39": {
					"qs": "39. Which of the following statements best describes the relationship between rural and urban centres?",
					"opts": {
						"q0": "A. Cities are not important as rural areas",
						"q1": "B. Rural areas are more productive than cities",
						"q2": "C. Cities can exist without the rural areas",
						"q3": "D. Cities and rural areas depend on each other",
						"q4": "E. Rural areas exist only to serve the cities."
					},
					"ans": "D"
				},
				"Q40": {
					"qs": "40. The only factor that least explains the pattern of population distribution in Nigeria is the",
					"opts": {
						"q0": "A. Arab slave raiding",
						"q1": "B. stability of government of the old kingdoms",
						"q2": "C. physical factor of rainfall",
						"q3": "D. movement of people from one place to another",
						"q4": "E. occurrence of earthquakes in certain areas."
					},
					"ans": "E"
				},
				"Q41": {
					"qs": "41. Which of the following statements is correct about the Sokoto plains?",
					"opts": {
						"q0": "A. It is not an area of inland drainage",
						"q1": "B. It lies in the middle of the country and borders the Rivers Benue and Niger",
						"q2": "C. It is a pear-shaped upland area",
						"q3": "D. It consists of the basement complex rocks",
						"q4": "E. It is dissected by rift valleys and plateaus."
					},
					"ans": "A"
				},
				"Q42": {
					"qs": "42. Which of the following is the characteristic pattern of rural settlements in the eastern scarplands of Nigeria?",
					"opts": {
						"q0": "A. Satellite",
						"q1": "B. Nucleated",
						"q2": "C. Elongated",
						"q3": "D. Dispersed",
						"q4": "E. Linear."
					},
					"ans": "D"
				},
				"Q43": {
					"qs": "43. The following rivers take their sources from the highlands of Western Nigeria except",
					"opts": {
						"q0": "A. Shasha",
						"q1": "B. Wase",
						"q2": "C. Owena",
						"q3": "D. Osse",
						"q4": "E. Siluko."
					},
					"ans": "B"
				},
				"Q44": {
					"qs": "44. The region has volcanic plugs, inselbergs and a crater iake. Which of the following geographical regions is being described?",
					"opts": {
						"q0": "A. Eastern scarplands",
						"q1": "B. Western uplands",
						"q2": "C. North-central plateau",
						"q3": "D. Eastern highlands",
						"q4": "E. North-eastern highlands."
					},
					"ans": "C"
				},
				"Q45": {
					"qs": "45. All the following are important timber producing countries in Africa except",
					"opts": {
						"q0": "A. Nigeria",
						"q1": "B. Ghana",
						"q2": "C. Cote d’Ivoire",
						"q3": "D. Mauritania",
						"q4": "E. Zaire."
					},
					"ans": "D"
				},
				"Q46": {
					"qs": "46. The major problem facing the rearing of livestock in East Africa is the",
					"opts": {
						"q0": "A. competition for land with arable cultivators",
						"q1": "B. torrential rainfall which destroys livestock feeds",
						"q2": "C. poorly developed rail transportation network",
						"q3": "D. inferior breed of cattle which produce only meat",
						"q4": "E. inadequate veterinary services."
					},
					"ans": "A"
				},
				"Q47": {
					"qs": "47. All the following are problems facing the cultivation of fruits in the Mediterranean reigon of Africa except",
					"opts": {
						"q0": "A. long gestation period",
						"q1": "B. frost action",
						"q2": "C. inadequate water",
						"q3": "D. re-stocking",
						"q4": "E. . inadequate processing methods."
					},
					"ans": "E"
				},
				"Q48": {
					"qs": "48. All of the following can be made from the by-products of crude oil except",
					"opts": {
						"q0": "A. plastic",
						"q1": "B. synthetic rubber",
						"q2": "C. glass",
						"q3": "D. detergents",
						"q4": "E. insecticides."
					},
					"ans": "C"
				},
				"Q49": {
					"qs": "49. Which of the following countries in Africa has the greatest hydro-electric potential?",
					"opts": {
						"q0": "A. Nigeria",
						"q1": "B. Zaire",
						"q2": "C. Egypt",
						"q3": "D. Cameroun",
						"q4": "E. Zimbabwe."
					},
					"ans": "C"
				},
				"Q50": {
					"qs": "50. Which of the following is not among the objectives of ECOWAS?",
					"opts": {
						"q0": "A. Promotion of unified budgetary system",
						"q1": "B. Promotion of cultural, social and political ties",
						"q2": "C. Promotion of economic cooperation",
						"q3": "D. Elimination of trade restrictions",
						"q4": "E. Promotion of a unified currency system."
					},
					"ans": "A"
				}
			}
		});
	});

	app.get('/geography/1989', function(req, res) {
		res.json({
			data: {
				// "headd": "Use the map of Yate District below to answer questions 1-10",
				"Q1": {
					"qs": "1. The correct interpretation of the scale of the map is",
					"img": "img**geo_1989_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. 1:10,000",
						"q1": "B. 1:15,000",
						"q2": "C. 1:50,000",
						"q3": "D. 1:100,000",
						"q4": "E. 1:1000,000."
					},
					"ans": "D"
				},
				"Q2": {
					"qs": "2. The bearing of Ogode from Yate is about",
					"img": "img**geo_1989_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. 36°",
						"q1": "B. 55°",
						"q2": "C. 125°",
						"q3": "D. 235°",
						"q4": "E. 325°."
					},
					"ans": "D"
				},
				"Q3": {
					"qs": "3. The distance by air from Ogode to Coki is approximately",
					"img": "img**geo_1989_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. 8.0 km",
						"q1": "B. 18.0 km",
						"q2": "C. 28.0 km",
						"q3": "D. 30.0 km",
						"q4": "E. 50.0 km."
					},
					"ans": "B"
				},
				"Q4": {
					"qs": "4. The feature marked II on the map is best described as",
					"img": "img**geo_1989_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. a plateau",
						"q1": "B. an isolated hill",
						"q2": "C. a ridge",
						"q3": "D. a conical hill",
						"q4": "E. an inserberg."
					},
					"ans": "D"
				},
				"Q5": {
					"qs": "5. Which of the following statements is not true of River Yate?",
					"img": "img**geo_1989_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. It is characterised by rapids and falls in its upper course",
						"q1": "B. It is the main river in the map area",
						"q2": "C. It has a wide flood plain at the lower course",
						"q3": "D. The river Ode is its major tributary",
						"q4": "E. It flows to the North-west."
					},
					"ans": "A"
				},
				"Q6": {
					"qs": "6. Which of the following settlements is not located in a valley?",
					"img": "img**geo_1989_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. Coki",
						"q1": "B. Yale",
						"q2": "C. Ogode",
						"q3": "D. Kure",
						"q4": "E. Busa."
					},
					"ans": "C"
				},
				"Q7": {
					"qs": "7. Which of the following statements best explains why Yate is likely to be the most important town in the	area? It is",
					"img": "img**geo_1989_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. the only settlement situated in a well-drained fertile lowland",
						"q1": "B. the only town served by a railway",
						"q2": "C. located near the confluence of rivers Yate and Ode",
						"q3": "D. the only industrial town in the area",
						"q4": "E. the largest settlement in the area."
					},
					"ans": "E"
				},
				"Q8": {
					"qs": "8. The most probable reason why the railway line has taken its present route is to",
					"img": "img**geo_1989_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. avoid the dense forest vegetation",
						"q1": "B. avoid competition with road transport",
						"q2": "C. make use of the shortest possible route",
						"q3": "D. make use of low gradient",
						"q4": "E. follow the river course."
					},
					"ans": "D"
				},
				"Q9": {
					"qs": "9. The crop which is most likely to be cultivated in the north-west of the river Yate valley is",
					"img": "img**geo_1989_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. pineapple",
						"q1": "B. sugar beet",
						"q2": "C. millet",
						"q3": "D. rubber",
						"q4": "E. rice."
					},
					"ans": "E"
				},
				"Q10": {
					"qs": "10. Why is cattle rearing not likely to be popular at Kura?",
					"img": "img**geo_1989_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. It is a forested area",
						"q1": "B. The climate is unsuitable",
						"q2": "C. The relief is too high",
						"q3": "D. There are inadequate means of communication",
						"q4": "E. The inhabitants are arable farmers."
					},
					"ans": "A"
				},
				"Q11": {
					"qs": "11. Which of the following is not a proof that the earth is spherical?",
					"opts": {
						"q0": "A. The earth’s horizon as seen from a ship",
						"q1": "B. Planetary bodies as observed from telescope",
						"q2": "C. The earth’s shadow in the moon during an eclipse",
						"q3": "D. The four seasons",
						"q4": "E. Sunrise and sunset."
					},
					"ans": "D"
				},
				"Q12": {
					"qs": "12. Lines of longitude can best be described as",
					"opts": {
						"q0": "A. the angular distance of a place north or south of the Equator",
						"q1": "B. imaginary lines on the earth’s surface joining the north and south poles",
						"q2": "C. great circles numbered from 0° to 90°",
						"q3": "D. the distance of a place east or west of the Greenwich Meridian",
						"q4": "E. semi-circles on the globe."
					},
					"ans": "B"
				},
				"Q13": {
					"qs": "13. The commentary of football match which started at4p.m on Friday in Teheran (60°E) would be heard in Seoul (150°E) at ",
					"opts": {
						"q0": "A. 10a.m on Friday",
						"q1": "B. 5p.m on Friday",
						"q2": "C. 10p.m on Thursday",
						"q3": "D. 9a.m on Saturday",
						"q4": "E. 10p.m on Friday."
					},
					"ans": "E"
				},
				"Q14": {
					"qs": "14. Which of the following statements is not correct?",
					"opts": {
						"q0": "A. Basalts and granites contain small and large crystals respectively",
						"q1": "B. Sedimentary rocks which are hardened by compressions are called stratified rocks",
						"q2": "C. igneous rocks occur in layers and contain fossils",
						"q3": "D. Rocks changed by great heat and pressure are known as metamorphic rocks",
						"q4": "E. Calcareous rocks are formed from the remains of living organisms"
					},
					"ans": "C"
				},
				"Q15": {
					"qs": "15. Residual mountains are those caused by",
					"opts": {
						"q0": "A. denudation",
						"q1": "B. residue",
						"q2": "C. faulting",
						"q3": "D. vulcanicity",
						"q4": "E. folding."
					},
					"ans": "A"
				},
				"Q16": {
					"qs": "16. Rocks which do not allow water to pass through them are",
					"opts": {
						"q0": "A. pervious rocks",
						"q1": "B. porous rocks",
						"q2": "C. impermeable rocks",
						"q3": "D. impervious rocks",
						"q4": "E. crystalline rocks."
					},
					"ans": "C"
				},
				"Q17": {
					"qs": "17. The parts labelled X and Y in the diagram above are, respectively",
					"img": "img**geo_1989_sectionb_qst17_1.jpg",
					"opts": {
						"q0": "A. zeugen and rift valley",
						"q1": "B. mesa and canyon",
						"q2": "C. zeugen and canyon",
						"q3": "D. butte and rift valley",
						"q4": "E. mesa and butte."
					},
					"ans": "E"
				},
				"Q18": {
					"qs": "18. It is a sharp, slender, downward-growing pinnacle that hangs from cave roofs. This is a description of a",
					"opts": {
						"q0": "A. polje",
						"q1": "B. stalactite",
						"q2": "C. clint",
						"q3": "D. grike",
						"q4": "E. hanging valley."
					},
					"ans": "B"
				},
				"Q19": {
					"qs": "19. Which of the following best explains why wind erosion is very effective in desert region?",
					"opts": {
						"q0": "A. There are no resistant rock surfaces",
						"q1": "B. The only agent of erosion is wind",
						"q2": "C. Rocks are generally soft and less resistant",
						"q3": "D. There are no large water bodies",
						"q4": "E. Rainfall is insufficient and evaporation is high."
					},
					"ans": "E"
				},
				"Q20": {
					"qs": "20. The following conditions are favourable for the formation of deltas except",
					"opts": {
						"q0": "A. strong current running at right angles to the river mouth",
						"q1": "B. active vertical erosion in the upper course of the river",
						"q2": "C. sheltered and almost tideless coast",
						"q3": "D. absence of large lakes in the river course",
						"q4": "E. shallow sea adjoining the delta."
					},
					"ans": "A"
				},
				"Q21": {
					"qs": "21. The direction of flow of ocean is determined mainly by the",
					"opts": {
						"q0": "A. location of the earth and land sea breezes",
						"q1": "B. shape of the continents and the temperature of the continental interior",
						"q2": "C. prevailing winds and the great depth of the ocean",
						"q3": "D. great depth of the ocean and the amount of fesh water inflow",
						"q4": "E. prevailing winds and the rotation of the earth."
					},
					"ans": "E"
				},
				"Q22": {
					"qs": "22. Which of the following is not asociated with the development of land and sea breezes?",
					"opts": {
						"q0": "A. Saturated air",
						"q1": "B. Descending air",
						"q2": "C. Low pressure",
						"q3": "D. Ascending air",
						"q4": "E. FIigh pressure."
					},
					"ans": "A"
				},
				"Q23": {
					"qs": "23. Which of the following pairs is not correct in the measurement of weather elements?",
					"opts": {
						"q0": "A. Rainfall with raingauge",
						"q1": "B. Humidity with hydrometer",
						"q2": "C. Pressure with anemometer",
						"q3": "D. Temperature with thermometer",
						"q4": "E. Wind direction with wind vane"
					},
					"ans": "C"
				},
				"Q24": {
					"qs": "24. Air pressure at sea levels is higher than at the top of mountain because the air at sea level",
					"opts": {
						"q0": "A. originates from the sea",
						"q1": "B. has a greater weight",
						"q2": "C. consists of a leser mixture of gases",
						"q3": "D. has a lesser weight",
						"q4": "E. consists of a greater mixture of gases."
					},
					"ans": "B"
				},
				"Q25": {
					"qs": "25. Diurnal range of temperature is the",
					"opts": {
						"q0": "A. average of the highest and the lowest monthly temperature",
						"q1": "B. difference betweent the maximum and the minimum temperature for a year",
						"q2": "C. average of the minimum and the maximum daily temperature",
						"q3": "D. Difference between the maximum and the minimum temperature for a month",
						"q4": "E. difference between the highest and the lowest temperature for a day."
					},
					"ans": "E"
				},
				"Q26": {
					"qs": "26. Which of the following climates is characterised by an alternate hot, wet season and cool dry season?",
					"opts": {
						"q0": "A. Equatorial",
						"q1": "B. Mediterranean",
						"q2": "C. Tropical desert",
						"q3": "D. Tropical Monsoon",
						"q4": "E. Tropical continental."
					},
					"ans": "E"
				},
				"Q27": {
					"qs": "27. Koppen’s classification of climate is an empirical system which is based on",
					"opts": {
						"q0": "A. temperature and humidity",
						"q1": "B. precipitation and pressure",
						"q2": "C. pressure and humidity",
						"q3": "D. temperature and pressure",
						"q4": "E. precipitation and temperature."
					},
					"ans": "E"
				},
				"Q28": {
					"qs": "28. Which of the following human activities has a beneficial effect on soils?",
					"opts": {
						"q0": "A. Grazing",
						"q1": "B. Strip cultivation",
						"q2": "C. Bush burning",
						"q3": "D. Slopewise cultivation",
						"q4": "E. Overcropping."
					},
					"ans": "B"
				},
				"Q29": {
					"qs": "29. A good example of the tropical grassland is the vegetation found around",
					"opts": {
						"q0": "A. Kuala Lumpur (Malaysia)",
						"q1": "B. fviassawa (Ethiopia)",
						"q2": "C. Buenos Aires (Argentina)",
						"q3": "D. Kano (Nigeria)",
						"q4": "E. Winnipeg (Canada)."
					},
					"ans": "D"
				},
				"Q30": {
					"qs": "30. Which of the following statements best explains the absence or sparcity of undergrowth in the equatorial rain forest?",
					"opts": {
						"q0": "A. Very little rain reaches the ground because of the dense vegetation",
						"q1": "B. There is too muchprecipitation which destroys the undergrowth",
						"q2": "C. The taller trees cut off most of the sunlight",
						"q3": "D. Most of the precipitation is usually cleared by run-off after heavy thunderstorms",
						"q4": "E. The trees have very strong and large roots which prevent undergrowth."
					},
					"ans": "C"
				},
				"Q31": {
					"qs": "31. A daily mean temperature of about 24°C, an annual rainfall of about 500mm which should fall in the growing period of about five months, and well-drained soils. These are the requirements for the cultivation of",
					"opts": {
						"q0": "A. soya bean",
						"q1": "B. groundnut",
						"q2": "C. sugarcane",
						"q3": "D. coffee",
						"q4": "E. kolanut."
					},
					"ans": "B"
				},
				"Q32": {
					"qs": "32. A study of the eco'system will show the inter-relationship between",
					"opts": {
						"q0": "A. vegetation and soils",
						"q1": "B. man and the environment",
						"q2": "C. climate and vegetation",
						"q3": "D. climate and man",
						"q4": "E. man and natural vegetation."
					},
					"ans": "B"
				},
				"Q33": {
					"qs": "33. The relationship between the elements of the ecosystem is best described as",
					"opts": {
						"q0": "A. multi-directional",
						"q1": "B. parasitic",
						"q2": "C. uni-directional",
						"q3": "D. exclusive",
						"q4": "E. interdependent."
					},
					"ans": "E"
				},
				"Q34": {
					"qs": "34. Which of the following is notan environmental hazard?",
					"opts": {
						"q0": "A. Sedimentation",
						"q1": "B. Flooding",
						"q2": "C. Earthquake",
						"q3": "D. Deforestation",
						"q4": "E. Pollution."
					},
					"ans": "A"
				},
				"Q35": {
					"qs": "35. Which of the following is best used to check flooding in coastal low lands?",
					"opts": {
						"q0": "A. Contour ploughing",
						"q1": "B. Strip cultivation",
						"q2": "C. Terracing",
						"q3": "D. Escavation",
						"q4": "E. Channelisation."
					},
					"ans": "E"
				},
				"Q36": {
					"qs": "36. The natural resources of a nation cannot be measured in terms of",
					"opts": {
						"q0": "A. forest",
						"q1": "B. minerals",
						"q2": "C. population",
						"q3": "D. rivers",
						"q4": "E. buildings."
					},
					"ans": "E"
				},
				"Q37": {
					"qs": "37. Loss of farmlands can be attributed to all the following except",
					"opts": {
						"q0": "A. desertification",
						"q1": "B. gully erosion",
						"q2": "C. laterization",
						"q3": "D. sheet erosion",
						"q4": "E. sedimentation."
					},
					"ans": "E"
				},
				"Q38": {
					"qs": "38. The world’s highest population growth rates are recorded by countries that",
					"opts": {
						"q0": "A. are technologically developed",
						"q1": "B. produce surplus food",
						"q2": "C. have cool climates",
						"q3": "D. produce inadequate food",
						"q4": "E. are highly industrialised."
					},
					"ans": "D"
				},
				"Q39": {
					"qs": "39. The term relative location of a settlement refers to",
					"opts": {
						"q0": "A. the nature of the land on which the settlement is located",
						"q1": "B. a settlement inhabited by relatives",
						"q2": "C. an imaginery point on the settlement",
						"q3": "D. the position of a settlement in relation to others",
						"q4": "E. the position of buildings in relation to one another."
					},
					"ans": "D"
				},
				"Q40": {
					"qs": "40. The use of water transport is limited by all the following except",
					"opts": {
						"q0": "A. wide valleys",
						"q1": "B. waterfalls",
						"q2": "C. floating vegetation",
						"q3": "D. seasonality",
						"q4": "E. narrow gorges."
					},
					"ans": "A"
				},
				"Q41": {
					"qs": "41. Which of the following is not being exported by Nigeria at present?",
					"opts": {
						"q0": "A. Cocoa",
						"q1": "B. Columbite",
						"q2": "C. Coffee",
						"q3": "D. Kaolin",
						"q4": "E. Petroleum."
					},
					"ans": "D"
				},
				"Q42": {
					"qs": "42. The south-eastern scarplands of Nigeria can best be described as lying",
					"opts": {
						"q0": "A. west of the western uplands",
						"q1": "B. west of the Cross River basin",
						"q2": "C. south of the southern coastland",
						"q3": "D. north of the plateau of Chad basin",
						"q4": "E. at the centre of the eastern highlands."
					},
					"ans": "B"
				},
				"Q43": {
					"qs": "43. Which of the following Nigerian rivers provides the longest distance of internal waterways?",
					"opts": {
						"q0": "A. Cross",
						"q1": "B. Benue",
						"q2": "C. Siluko",
						"q3": "D. Ogun",
						"q4": "E. Wase."
					},
					"ans": "B"
				},
				"Q44": {
					"qs": "44. Which of the following poses the greatest problem to agriculture in the north-eastern part of Nigeria?",
					"opts": {
						"q0": "A. Land tenure system",
						"q1": "B. Lack of mechanised tools",
						"q2": "C. Desert encroachment",
						"q3": "D. Sparse farming population",
						"q4": "E. Inadequate capital."
					},
					"ans": "C"
				},
				"Q45": {
					"qs": "45. Jos experiences a moderate temperature compared with other places on the same latitude in Nigeria because it",
					"opts": {
						"q0": "A. is close to the River Niger which exerts some moderating influence on its weather",
						"q1": "B. is on a high altitude",
						"q2": "C. receives relief rain most of the time",
						"q3": "D. lies at the convergence of two different air masses",
						"q4": "E. is surrounded by dense vegetation."
					},
					"ans": "B"
				},
				"Q46": {
					"qs": "46. Textile industries are best located in the northern part of Nigeria because of the",
					"opts": {
						"q0": "A. availability of cotton",
						"q1": "B. high demand for cotton materials",
						"q2": "C. availability of capital",
						"q3": "D. availability of heavymachinery",
						"q4": "E. easy accessibility to the area."
					},
					"ans": "A"
				},
				"Q47": {
					"qs": "47. The greatest hydro-electricity potential in Nigeria is found in the",
					"opts": {
						"q0": "A. Cross-River Basin",
						"q1": "B. Sokoto plains",
						"q2": "C. Niger Benue Trough",
						"q3": "D. Eastern highlands",
						"q4": "E. Chad Basin."
					},
					"ans": "C"
				},
				"Q48": {
					"qs": "48. Bush fallowing ensures that",
					"opts": {
						"q0": "A. artificial fertilizers are used",
						"q1": "B. only one crop is cultivated at a time",
						"q2": "C. the land regains its fertility naturally",
						"q3": "D. modern agricultural machinery are used",
						"q4": "E. more labour is employed."
					},
					"ans": "C"
				},
				"Q49": {
					"qs": "49. Which of the following favours the growth of olives in the Mediterranean region of Africa?",
					"opts": {
						"q0": "A. High temperature and humidity",
						"q1": "B. Heavy rainfall",
						"q2": "C. Abundant supply of skilled labour",
						"q3": "D. Cool, wet winters and warm, dry summers",
						"q4": "E. Moderately stiff loam or clayey soil."
					},
					"ans": "D"
				},
				"Q50": {
					"qs": "50. All the following are true of ECOWAS except that",
					"opts": {
						"q0": "A. it is an international organisation",
						"q1": "B. it is open to all countries of West Africa",
						"q2": "C. its aim is to promote economic cooperation among member countries",
						"q3": "D. it allows citizens of member countries to stay for at least ninety days within any country",
						"q4": "E. non-payment of annual subvention by any member country leads to loss of membership."
					},
					"ans": "E"
				}
			}
		});
	});

	app.get('/geography/1990', function(req, res) {
		res.json({
			data: {
				// "headd": "Now answer the following questions. Use the map of WAWA DISTRICT on page 20 to answer Questions 1-10",
				"Q1": {
					"qs": "1. The scale of the map of Wawa district, stated as a representative fraction is",
					"img": "img**geo_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. 1:10,000",
						"q1": "B. 1:25,000",
						"q2": "C. 1:50,000",
						"q3": "D. 1:100,000",
						"q4": "E. 1:500,000."
					},
					"ans": "D"
				},
				"Q2": {
					"qs": "2. The distance as the crow flies from Doma to Tafi is approximately",
					"img": "img**geo_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. 5.5cm",
						"q1": "B. 11.0cm",
						"q2": "C. 22.0cm",
						"q3": "D. 11.0km",
						"q4": "E. 22.00km."
					},
					"ans": "D"
				},
				"Q3": {
					"qs": "3. The direction of Sadi from Dade is",
					"img": "img**geo_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. north-west",
						"q1": "B. west",
						"q2": "C. east",
						"q3": "D. south-west",
						"q4": "E. south-east."
					},
					"ans": "E"
				},
				"Q4": {
					"qs": "4.The symbol A 1126 north-east of Wawa represents a",
					"img": "img**geo_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. bench mark",
						"q1": "B. trigonometrical station",
						"q2": "C. spot height",
						"q3": "D. beacon",
						"q4": "E. survey pillar."
					},
					"ans": "B"
				},
				"Q5": {
					"qs": "5. The feature marked Yon the map can best be described as a",
					"img": "img**geo_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. spur",
						"q1": "B. plateau",
						"q2": "C. conical hill",
						"q3": "D. scarp",
						"q4": "E. dome."
					},
					"ans": "C"
				},
				"Q6": {
					"qs": "6. Which of the following best explains the growth of Wawa? It",
					"img": "img**geo_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. is a nodal town",
						"q1": "B. is the seat of administration",
						"q2": "C. has a good climate",
						"q3": "D. is an industrial town",
						"q4": "E. has the largest population."
					},
					"ans": "A"
				},
				"Q7": {
					"qs": "7. The most probable reason for the construction of the road from Wawa through Tafi to the plantation is",
					"img": "img**geo_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. to carry the mineral products from Sadi inland",
						"q1": "B. to provide a means of transporting manufactured goods from Tali to Wawa",
						"q2": "C. to supplement railway transport from Sadi",
						"q3": "D. to evacuate farm products from the plantation to the market at Wawa",
						"q4": "E. because a large percentage of the population lives in Tafi."
					},
					"ans": "D"
				},
				"Q8": {
					"qs": "8. Which of the following settlements is located at the highest altitude?",
					"img": "img**geo_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. Doma",
						"q1": "B. Sesi",
						"q2": "C. Tafi",
						"q3": "D. Sadi",
						"q4": "E. Dade."
					},
					"ans": "E"
				},
				"Q9": {
					"qs": "9. The most likely occupation of the people of Dade is",
					"img": "img**geo_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. farming",
						"q1": "B. mining",
						"q2": "C. fishing",
						"q3": "D. lumbering",
						"q4": "E. trading."
					},
					"ans": "A"
				},
				"Q10": {
					"qs": "10. Which of the following industries is likely to be found in Sadi?",
					"img": "img**geo_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. Fishing",
						"q1": "B. Furniture",
						"q2": "C. Cement",
						"q3": "D. Food-processing",
						"q4": "E. Brewing."
					},
					"ans": "C"
				},
				"Q11": {
					"qs": "11. The angular distance of a point on the earth’s surface measured in degrees from the centre of the earth is known as",
					"opts": {
						"q0": "A. latitude",
						"q1": "B. orbit",
						"q2": "C. longitude",
						"q3": "D. international dateline",
						"q4": "E. axis."
					},
					"ans": "A"
				},
				"Q12": {
					"qs": "12. When it is 9.00am in Munich, Western Germamy (longitude 11°E), the time in Calcutta, India (longitude 96°E). is",
					"opts": {
						"q0": "A. 2.40 a.m",
						"q1": "B. 4.20 a.m",
						"q2": "C. 5.40 a.m",
						"q3": "D. 2.40 a.m",
						"q4": "E. 5.40 a.m."
					},
					"ans": "D"
				},
				"Q13": {
					"qs": "13. What is the longitude of a place X whose time is noon when Greenwich meantime is 6p.m?",
					"opts": {
						"q0": "A. 45° W",
						"q1": "B. 60° E",
						"q2": "C. 60° W",
						"q3": "D. 90° E",
						"q4": "E. 90° W."
					},
					"ans": "E"
				},
				"Q14": {
					"qs": "14. Which of the following types of sedimentary rocks is paired with the wrong texture?",
					"opts": {
						"q0": "A. Clay - very fine particles",
						"q1": "B. Sand-coarse particles",
						"q2": "C. Gravel - rounded and larger particles",
						"q3": "D. Breccia - coarse and angular particles",
						"q4": "E. Silt - medium - grained particles."
					},
					"ans": "E"
				},
				"Q15": {
					"qs": "15. Which of the following minerals is most likely to be absent in a region consisting mainly of igneous and metamorphic rocks?",
					"opts": {
						"q0": "A. Gold",
						"q1": "B. Coat",
						"q2": "C. Tin",
						"q3": "D. Copper",
						"q4": "E. Diamond."
					},
					"ans": "B"
				},
				"Q16": {
					"qs": "16. Which of the following combinations of processes is associated with the formation of a rift valley? (I) Tension or compression forces (II) Resistance and faulting (III) Emergence of the middle crust of rocks (IV) Submergence of the middle crust of rocks",
					"opts": {
						"q0": "A. I, II and III only",
						"q1": "B. I, II and IV only",
						"q2": "C. I, III and IV only",
						"q3": "D. II, III and IV only",
						"q4": "E. I and III only."
					},
					"ans": "B"
				},
				"Q17": {
					"qs": "17. Which of the following best explains why the older fold mountains are much lower and less rugged than the newer ones?",
					"opts": {
						"q0": "A. The newer fold mountains are situated in areas of active earth movements",
						"q1": "B. The effects of earth movements resulting in mountain building are much greater nowadays than they were during the period of folding",
						"q2": "C. The newer fold mountains, in contrast to the older ones, are made up of more resistant rocks",
						"q3": "D. The older fold mountains have been subjected to the forces of denudation for longer, geological periods",
						"q4": "E. Most of the newer fold mountains are situated in the interior parts of continents where they are free from constant sea erosion"
					},
					"ans": "D"
				},
				"Q18": {
					"qs": "18. All the following are characteristics of a limestone region except",
					"opts": {
						"q0": "A. stony and broken surface",
						"q1": "B. rugged topography",
						"q2": "C. adequate luxuriant vegetation cover",
						"q3": "D. absence of surface drainage",
						"q4": "E. depressions of varying sizes and depths"
					},
					"ans": "C"
				},
				"Q19": {
					"qs": "19. The presence of gorges in the upper section of rivers is due to the fact that",
					"opts": {
						"q0": "A. the rocks in the upper course are iess resistant",
						"q1": "B. the volume of the river is small",
						"q2": "C. hanging valleys join the main valley as waterfalls to cause the gorges",
						"q3": "D. the upper course has a steep gradient",
						"q4": "E. the water contains chemicals which dissolve the rocks."
					},
					"ans": "D"
				},
				"Q20": {
					"qs": "20. Rock pedestals are most likely to be found in",
					"opts": {
						"q0": "A. regions where river erosion has taken place",
						"q1": "B. arid areas where wind abrasion has modified rocks of differing resistance",
						"q2": "C. regions where wave hydraulic action has taken ace",
						"q3": "D. arid area where wind deflation has scooped out the earth surface",
						"q4": "E. regions where a river has deposited a large load of sediments."
					},
					"ans": "B"
				},
				"Q21": {
					"qs": "21. When the roof of a coastal cave collapses, it forms",
					"opts": {
						"q0": "A. doline",
						"q1": "B. an estuary",
						"q2": "C. a gorge",
						"q3": "D. a lagoon",
						"q4": "E. a geo."
					},
					"ans": "E"
				},
				"Q22": {
					"qs": "22. Which of the following is not typical submarine relief feature?",
					"opts": {
						"q0": "A. Roche moutonnee",
						"q1": "B. Continental sheif",
						"q2": "C. Deep sea plain",
						"q3": "D. Continental slope",
						"q4": "E. Ocean deep."
					},
					"ans": "A"
				},
				"Q23": {
					"qs": "23. Most warm ocean currents",
					"opts": {
						"q0": "A. are found in the Atlantic ocean",
						"q1": "B. flow towards the equator",
						"q2": "C. are found in the Pacific ocean",
						"q3": "D. flow on the western side of continents",
						"q4": "E. flow towards the high latitudes."
					},
					"ans": "E"
				},
				"Q24": {
					"qs": "24. Isothermal maps give information about",
					"opts": {
						"q0": "A. pressure",
						"q1": "B. temperature",
						"q2": "C. wind",
						"q3": "D. rainfall",
						"q4": "E. sunshine."
					},
					"ans": "B"
				},
				"Q25": {
					"qs": "25. The instrument used for recording the direction of the prevailing wind of a place over a period	of one month is	called",
					"opts": {
						"q0": "A. a wind vane",
						"q1": "B. an anemometer",
						"q2": "C. speedometer",
						"q3": "D. a wind rose",
						"q4": "E. a hygrometer."
					},
					"ans": "A"
				},
				"Q26": {
					"qs": "26. A rain gauge is kept in an open place in the observatory because",
					"opts": {
						"q0": "A. it is much more easily accessible to the observer",
						"q1": "B. rain drops get into the funnel without any obstruction",
						"q2": "C. rain falls more heavily in the open space",
						"q3": "D. rain drops are deflected by the wind in an open place",
						"q4": "E. the funnel is easily filled with rain water."
					},
					"ans": "B"
				},
				"Q27": {
					"qs": "27. The climatic chart above most probably refers to the",
					"img": "img**geo_1990_sectionb_qst27_1.jpg",
					"opts": {
						"q0": "A. warm temperate climate",
						"q1": "B. equatorial climate",
						"q2": "C. savanna climate",
						"q3": "D. cool temperate climate",
						"q4": "E. desert climate."
					},
					"ans": "B"
				},
				"Q28": {
					"qs": "28. It has a mean monthly temperature of around 27°C (80°F, heavy precipitation of between 1524mm and 2699mm well distributed throughout the year. There is no distinct winter and no month without rainfall. To which of the following climatic regions does this description refer?",
					"opts": {
						"q0": "A. Mediterranean",
						"q1": "B. Tropical continental",
						"q2": "C. Tropical monsoon",
						"q3": "D. Warm temperate continental",
						"q4": "E. Cool temperate monsoon."
					},
					"ans": "B"
				},
				"Q29": {
					"qs": "29. Foliage is evergreen with thin undergrowth, the leaves are small, thick, leathery and needle-shaped. This description is that of the",
					"opts": {
						"q0": "A. tropical rainforest",
						"q1": "B. temperate woodland",
						"q2": "C. coniferous forest",
						"q3": "D. temperate grassland",
						"q4": "E. deciduous forest."
					},
					"ans": "C"
				},
				"Q30": {
					"qs": "30. The soil in a typical natural rainforest remains fertile and suitable for arable agriculture because",
					"opts": {
						"q0": "A. the vegetation is luxuriant",
						"q1": "B. there is abundant supply of sunshine and rainfall which leach the soil",
						"q2": "C. the soil nutrient is continously being replenished by the decay of the dense undergrowth and fallen leavesthere is absence of plant cover",
						"q3": "D. there is absence of plant cover",
						"q4": "E. the soil is well-drained."
					},
					"ans": "C"
				},
				"Q31": {
					"qs": "31. Which of the crops below requires the following conditions for successful cultivation? (i) Fleavy rainfall of between 1270mm (50 ins) and 2000mm (80 ins) during the 4 to 6 months growing period (ii) High mean temperature of 18° to 27°C (65° to 80°F) with no cold season (iii) A warm, dry period for harvesting (iv) Loamy or clayey soil and an almost level ground (v) Cheap and abundant labour ",
					"opts": {
						"q0": "A. Maize",
						"q1": "B. Cotton",
						"q2": "C. Rice",
						"q3": "D. Cocoa",
						"q4": "E. Millet."
					},
					"ans": "D"
				},
				"Q32": {
					"qs": "32. Which of the following combinations can be regarded as sub-systems within the ecosystem?",
					"opts": {
						"q0": "A. Food chain, hydrological cycle, mineral nutrient cycle",
						"q1": "B. Hydrological cycle, mineral nutrient cycle, environmental controls",
						"q2": "C. Mineral nutrient cycle, hydrological cycle, ecosystem controls",
						"q3": "D. Ecosystem controls, food chain, hydrological cycle",
						"q4": "E. Food chain, ecosystem controls, environmental controls."
					},
					"ans": "A"
				},
				"Q33": {
					"qs": "33. Loss of farmland can be attributed to all the following except",
					"opts": {
						"q0": "A. sedimentation",
						"q1": "B. leaching",
						"q2": "C. desertification",
						"q3": "D. sheet erosion",
						"q4": "E. over-grazing."
					},
					"ans": "A"
				},
				"Q34": {
					"qs": "34. The term gauge in railway transport refers to the",
					"opts": {
						"q0": "A. weight of vehicle that the rails can bear",
						"q1": "B. measurement of gradient along the side slopes of the rails",
						"q2": "C. length of the rails in a country",
						"q3": "D. distance between rails of a track",
						"q4": "E. amount of rainfall experienced along the rails."
					},
					"ans": "D"
				},
				"Q35": {
					"qs": "35. In which of the following areas is fruit farming least important?",
					"opts": {
						"q0": "A. Egypt",
						"q1": "B. Morocco",
						"q2": "C. Algeria",
						"q3": "D. Uganda",
						"q4": "E. Tunisia."
					},
					"ans": "D"
				},
				"Q36": {
					"qs": "36. The major fruits grown in the Mediterranean regions of Africa include,",
					"opts": {
						"q0": "A. grapes, olives, apricots and figs",
						"q1": "B. lime, grapefruit, orange and lemon",
						"q2": "C. pineapples, bananas, lime and figs",
						"q3": "D. apples, pears, apricots and olive",
						"q4": "E. bananas, figs, pineapples and grape fruit"
					},
					"ans": "A"
				},
				"Q37": {
					"qs": "37. The term dispersed settlement refers to a settlement",
					"opts": {
						"q0": "A. of several family residences",
						"q1": "B. along a road",
						"q2": "C. transversed by major route ways",
						"q3": "D. scattered and separate homesteads",
						"q4": "E. made up of high-rise buildings."
					},
					"ans": "D"
				},
				"Q38": {
					"qs": "38. Nigeria is located between latitudes",
					"opts": {
						"q0": "A. 2°N and 10°N",
						"q1": "B. 4°N and 14°N",
						"q2": "C. 6°N and 16°N",
						"q3": "D. 8°Nand18°N",
						"q4": "E. 10°N and 20°N."
					},
					"ans": "B"
				},
				"Q39": {
					"qs": "39. The predominant system of agriculture among rural farmers in Nigeria is",
					"opts": {
						"q0": "A. terrace farming",
						"q1": "B. irrigation farming",
						"q2": "C. plantation agriculture",
						"q3": "D. bush fallowing",
						"q4": "E. mixed farming."
					},
					"ans": "E"
				},
				"Q40": {
					"qs": "40. Which of the following factors does not contribute to the growth of Lagos, Kaduna and Benin?",
					"opts": {
						"q0": "A. Mining",
						"q1": "B. Employment opportunity",
						"q2": "C. Commercial activity",
						"q3": "D. Communication network",
						"q4": "E. Industrial production."
					},
					"ans": "A"
				},
				"Q41": {
					"qs": "41. A town located at the confluence of two rivers in Nigeria is",
					"opts": {
						"q0": "A. Oshodi",
						"q1": "B. Makurdi",
						"q2": "C. Bussa",
						"q3": "D. Lokoja",
						"q4": "E. Aboh."
					},
					"ans": "D"
				},
				"Q42": {
					"qs": "42. Which of the following is sometimes a major problem for incoming aircraft at Sokoto airport?",
					"opts": {
						"q0": "A. Lack of a wide level space for landing",
						"q1": "B. Smoke from industrial buildings",
						"q2": "C. Presence of soft, marshy land",
						"q3": "D. Poor visibility",
						"q4": "E. Location within the city centre."
					},
					"ans": "D"
				},
				"Q43": {
					"qs": "43. All the following are true of plantation agriculture in West Africa except that it",
					"opts": {
						"q0": "A. involves large areas of land",
						"q1": "B. requires modern technology",
						"q2": "C. is practised only by foreign companies",
						"q3": "D. is relatively economical",
						"q4": "E. usually involves the planting of one crop"
					},
					"ans": "C"
				},
				"Q44": {
					"qs": "44. In East Africa, cattle rearing is practised mainly by the",
					"opts": {
						"q0": "A. Tuareg",
						"q1": "B. Kikuyu",
						"q2": "C. ShuwaArab",
						"q3": "D. Chagga",
						"q4": "E. Masai."
					},
					"ans": "C"
				},
				"Q45": {
					"qs": "45. The sahel savanna vegetation is predominantly found in",
					"opts": {
						"q0": "A. Kano State",
						"q1": "B. Katsina State",
						"q2": "C. Oyo State",
						"q3": "D. Anambra State",
						"q4": "E. Borno State."
					},
					"ans": "E"
				},
				"Q46": {
					"qs": "46. Nigeria’s three oil refineries are situated in",
					"opts": {
						"q0": "A. Bendel, Cross River and Kano States",
						"q1": "B. Kaduna, Bendel and Rivers States",
						"q2": "C. Lagos, Imo and Bauchi States",
						"q3": "D. Sokoto, Rivers and Niger States",
						"q4": "E. Kwara, Ondo and Borno States."
					},
					"ans": "B"
				},
				"Q47": {
					"qs": "47. Which of the following towns is not on the railway line from Port Harcourt to Kaduna in Nigeria?",
					"opts": {
						"q0": "A.Aba",
						"q1": "B. Makurdi",
						"q2": "C. Oturkpo",
						"q3": "D. Jebba",
						"q4": "E. Kafanchan."
					},
					"ans": "D"
				},
				"Q48": {
					"qs": "48. Which of the following human occupations was most responsible for the early growth of Kano?",
					"opts": {
						"q0": "A. Industry",
						"q1": "B. Trading",
						"q2": "C. Hunting",
						"q3": "D. Fishing",
						"q4": "E. Agriculture."
					},
					"ans": "B"
				},
				"Q49": {
					"qs": "49. All the following are important timber producing countries in Africa except",
					"opts": {
						"q0": "A. Nigeria",
						"q1": "B. Ghana",
						"q2": "C. Cote d'Ivoire",
						"q3": "D. Mauritania",
						"q4": "E. Zaire."
					},
					"ans": "D"
				},
				"Q50": {
					"qs": "50. Which of the following cities is not the capital of an ECOWAS country?",
					"opts": {
						"q0": "A. Numan",
						"q1": "B. Dakar",
						"q2": "C. Ouagadougou",
						"q3": "D. Lome",
						"q4": "E. Banjul."
					},
					"ans": "A"
				}
			}
		});
	});
	
	app.get('/govt/1988', function(req, res) {
		res.json({
			data: {
				"Q1": {
					"qs": "1. Government refers to all the following, except",
					"opts": {
						"q0": "A. an institution of the state.",
						"q1": "B. the process of ruling a political community.",
						"q2": "C. the exercise of power and authority",
						"q3": "D. the activities of decision-makers",
						"q4": "E. the act of civil disobedience."
					},
					"ans": "E"
				},
				"Q2": {
					"qs": "2. Government as the act of governing means the",
					"opts": {
						"q0": "A. activities of pressure groups and political parties.",
						"q1": "B. act of vetoing a bill.",
						"q2": "C. orders of judiciary and legislature.",
						"q3": "D. activities by which government policies are made and implemented",
						"q4": "E. activities of parliamentary opposition."
					},
					"ans": "D"
				},
				"Q3": {
					"qs": "3. Unwritten constitution means that the constitution is",
					"opts": {
						"q0": "A. not written down",
						"q1": "B. based only on conventions",
						"q2": "C. not contained in any single book",
						"q3": "D. in draft",
						"q4": "E. not approved."
					},
					"ans": "C"
				},
				"Q4": {
					"qs": "4. The delegation of Administrative Powers to the local units with the central supervision and control is called",
					"opts": {
						"q0": "A. devolution",
						"q1": "B. decentralization",
						"q2": "C. deconcentration",
						"q3": "D. centralization",
						"q4": "E. concentration"
					},
					"ans": "A"
				},
				"Q5": {
					"qs": "5. Which of the following is not the function of the government?",
					"opts": {
						"q0": "A. Building of roads, bridges, canals, etc.",
						"q1": "B. Provision of education",
						"q2": "C. Maintenance of relations with other states",
						"q3": "D. defence of territory from external attack",
						"q4": "E. Provision of all the material needs of all citizens"
					},
					"ans": "E"
				},
				"Q6": {
					"qs": "6. A flexible constitution can only be amended by",
					"opts": {
						"q0": "A. two-third (2/3) majority vote in the legislature.",
						"q1": "B. referendum ",
						"q2": "C. three-quarters (3/4) majority vote in the legislature",
						"q3": "D. plebiscite",
						"q4": "E. simple majority vote in the legislature."
					},
					"ans": "E"
				},
				"Q7": {
					"qs": "7. Which one of the following countries has an unwritten constitution?",
					"opts": {
						"q0": "A. Great Britain",
						"q1": "B. France ",
						"q2": "C. United States of America",
						"q3": "D. Federal Republic of Germany",
						"q4": "E. German Democratic Republic"
					},
					"ans": "A"
				},
				"Q8": {
					"qs": "8. A rigid constitution is said to be best suited for a",
					"opts": {
						"q0": "A. Federal Government",
						"q1": "B. Socialist Government.",
						"q2": "C. Military Government",
						"q3": "D. Unitary government",
						"q4": "E. Fascist Government."
					},
					"ans": "A"
				},
				"Q9": {
					"qs": "9. Federal Elections were held in Nigeria in",
					"opts": {
						"q0": "A. 1946, 1951, 1954, 1979 and 1983.",
						"q1": "B. 1954,1959,1964, 1979 and 1983.",
						"q2": "C. 1923, 1946, 1951, 1979 and 1983.",
						"q3": "D. 1954, 1960, 1964, 1979 and 1983.",
						"q4": "E. 1960, 1963, 1964, 1979 and 1983."
					},
					"ans": "B"
				},
				"Q10": {
					"qs": "10. The two components of sovereignty are",
					"opts": {
						"q0": "A. the rule of law and fundamental human rights",
						"q1": "B. political power and political authority",
						"q2": "C. political culture and political socialization",
						"q3": "D. influence and political authority",
						"q4": "E. political independence and supreme authority of the state within its territory."
					},
					"ans": "E"
				},
				"Q11": {
					"qs": "11. Nigeria broke diplomatic relations with Israel in 1973 because of Israeli",
					"opts": {
						"q0": "A. recognition of Biafra.",
						"q1": "B. occupation of Egyptian territory",
						"q2": "C. refusal to give aid to Nigeria.",
						"q3": "D. economic relations with South Africa.",
						"q4": "E. raid on Entebbe airport in Uganda."
					},
					"ans": "B"
				},
				"Q12": {
					"qs": "12. The United Nations organization (UNO) has its headquarters in",
					"opts": {
						"q0": "A. Britain",
						"q1": "B. USSR",
						"q2": "C. USA",
						"q3": "D. China",
						"q4": "E. France."
					},
					"ans": "C"
				},
				"Q13": {
					"qs": "13. The state is different from the government because",
					"opts": {
						"q0": "A. the State unlike the Government is permanent.",
						"q1": "B. the Government is made up of powerful people",
						"q2": "C. members of the Government are elected",
						"q3": "D. the state is created by God",
						"q4": "E. The state can exercise absolute power."
					},
					"ans": "A"
				},
				"Q14": {
					"qs": "14. A state is a special form of human association because it",
					"opts": {
						"q0": "A. has a legitimate monopoly of life and death penalties over its citizens.",
						"q1": "B. is the richest association in society",
						"q2": "C. has a constitution approved by the citizens",
						"q3": "D. can punish law breakers.",
						"q4": "E. has a government."
					},
					"ans": "A"
				},
				"Q15": {
					"qs": "15. Which of the following is not relevant to communism?",
					"opts": {
						"q0": "A. Democracy",
						"q1": "B. Violent revolution",
						"q2": "C. Friedrich Engels",
						"q3": "D. Class war",
						"q4": "E. Private Enterprise"
					},
					"ans": "E"
				},
				"Q16": {
					"qs": "16. A Nigerian citizen can only be deprived of his citizenship if he is",
					"opts": {
						"q0": "A. condemned to death.",
						"q1": "B. convicted by a court of law",
						"q2": "C. married to a foreigner",
						"q3": "D. holding a dual citizenship.",
						"q4": "E. an armed robber."
					},
					"ans": "D"
				},
				"Q17": {
					"qs": "17. In the process of governing, OUTPUT refers to",
					"opts": {
						"q0": "A. the influence of pressure group.",
						"q1": "B. demand of the political system",
						"q2": "C. the decision of the government.",
						"q3": "D. the opinion of the electorate.",
						"q4": "E. the influence of political parties."
					},
					"ans": "C"
				},
				"Q18": {
					"qs": "18. Another word for red-tapism is",
					"opts": {
						"q0": "A. democracy",
						"q1": "B. autocracy",
						"q2": "C. idiosyncrasy",
						"q3": "D. bureaucracy",
						"q4": "E. theocracy"
					},
					"ans": "D"
				},
				"Q19": {
					"qs": "19. Rule adjudication is the main function of the",
					"opts": {
						"q0": "A. Executive",
						"q1": "B. President",
						"q2": "C. Legislature",
						"q3": "D. Judiciary",
						"q4": "E. National Assembly"
					},
					"ans": "D"
				},
				"Q20": {
					"qs": "20. The major problem that arose from the 1979 election centred around the",
					"opts": {
						"q0": "A. inability of many voters to find their names on the voters register.",
						"q1": "B. cancellation of election results in many constituencies because of alleged irregularities",
						"q2": "C. inability of some dissatisfied candidates to seek redress in the court of law.",
						"q3": "D. controversy over the presidential election result",
						"q4": "E. widespread complaint that too many elections were scheduled too close together"
					},
					"ans": "D"
				},
				"Q21": {
					"qs": "21. The following are the key factors which influenced Nigeria’s foreign relations except",
					"opts": {
						"q0": "A. peaceful co¬existence.",
						"q1": "B. economic dependence.",
						"q2": "C. non-interference.",
						"q3": "D. respect for territorial integrity.",
						"q4": "E. international co-operation."
					},
					"ans": "B"
				},
				"Q22": {
					"qs": "22. The independence of Nigeria was in 1945 with the coming to power in Britain of",
					"opts": {
						"q0": "A. Conservative Party.",
						"q1": "B. Tory Party",
						"q2": "C. Liberal Party",
						"q3": "D. Labour Party",
						"q4": "E. Democratic Party."
					},
					"ans": "D"
				},
				"Q23": {
					"qs": "23. Which of the following is not an accepted way of resolving international conflict?",
					"opts": {
						"q0": "A. Diplomacy",
						"q1": "B. Propaganda ",
						"q2": "C. Non-military use of force",
						"q3": "D. Military force (war)",
						"q4": "E. Nuclear war"
					},
					"ans": "E"
				},
				"Q24": {
					"qs": "24. The membership of the Council of States in Nigeria is made up of",
					"opts": {
						"q0": "A. Federal Ministers.",
						"q1": "B. State commissioners",
						"q2": "C. state governors.",
						"q3": "D. the Head of State and the Traditional Chiefs",
						"q4": "E. the State Governors and the Head of State."
					},
					"ans": "E"
				},
				"Q25": {
					"qs": "25. The Commonwealth is",
					"opts": {
						"q0": "A. an economic organization.",
						"q1": "B. made up of all independent ex-colonies of Britain.",
						"q2": "C. made up of all countries who arc friendly with Britain.",
						"q3": "D. made up of independent European countries.",
						"q4": "E. made up of independent African countries who were ex-coionies of Britain."
					},
					"ans": "B"
				},
				"Q26": {
					"qs": "26. In the Oyo traditional political system, the Alaafin of Oyo was elected or chosen by a group known as the",
					"opts": {
						"q0": "A. Bales",
						"q1": "B. Obas",
						"q2": "C. Ogboni",
						"q3": "D. Bashorun",
						"q4": "E. Oyomesi"
					},
					"ans": "E"
				},
				"Q27": {
					"qs": "27. The declaration of a state of emergency in Western Nigeria was protected by the constitution of",
					"opts": {
						"q0": "A. 1954",
						"q1": "B. 1951",
						"q2": "C. 1960",
						"q3": "D. 1963",
						"q4": "E. 1948"
					},
					"ans": "C"
				},
				"Q28": {
					"qs": "28. The primary purpose of the state is to",
					"opts": {
						"q0": "A. establish a system of law and order",
						"q1": "B. train people to become good citizens",
						"q2": "C. cater for all the needs of the citizens.",
						"q3": "D. ensure the self sufficiency of its people.",
						"q4": "E. ensure that its people enjoy absolute freedom"
					},
					"ans": "A"
				},
				"Q29": {
					"qs": "29. The Armed Forces Ruling Council came into existence under the",
					"opts": {
						"q0": "A. Buhari Administration.",
						"q1": "B. Gowon Administration.",
						"q2": "C. Ironsi Administration.",
						"q3": "D. Obasanjo Administration.",
						"q4": "E. Babangida Administration."
					},
					"ans": "E"
				},
				"Q30": {
					"qs": "30. Which of the following is not a specialized agency of the United Nations Organization?",
					"opts": {
					"q0": "A. World Health Organization",
						"q1": "B. The Food and Agriculture Organization",
						"q2": "C. The International Labour Organization",
						"q3": "D. The General Assembly",
						"q4": "E. The International Bank for Reconstruction and Development"
					},
					"ans": "D"
				},
				"Q31": {
					"qs": "31. The creation of the office of the Prime Minister in Nigeria was accomplished in",
					"opts": {
						"q0": "A. 1951",
						"q1": "B. 1954",
						"q2": "C. 1957",
						"q3": "D. 1959",
						"q4": "E. 1960"
					},
					"ans": "C"
				},
				"Q32": {
					"qs": "33. Which of the following is not a function of a party secretariat?",
					"opts": {
						"q0": "A. Electing the leader of the party",
						"q1": "B. Organizing party conferences",
						"q2": "C. Publishing the party’s manifesto",
						"q3": "D. Planning party strategy to win election",
						"q4": "E. Handling publicity for the party"
					},
					"ans": "A"
				},
				"Q33": {
					"qs": "33. The first Military President of Nigeria is",
					"opts": {
						"q0": "A. Lt. General Olusegun Obasanjo.",
						"q1": "B. Major General J.T.U. Aguiyi-lronsi",
						"q2": "C. Major General Ibrahim Babangida",
						"q3": "D. General Murtala Mohammed",
						"q4": "E. General Yabuku Gowon."
					},
					"ans": "C"
				},
				"Q34": {
					"qs": "34. The following factors favoured the introduction of Indirect Rule in Nigeria except the",
					"opts": {
						"q0": "A. shortage of manpower.",
						"q1": "B. shortage of funds",
						"q2": "C. existence of a system of taxation.",
						"q3": "D. existence of educated elite.",
						"q4": "E. existence of organized traditional systems."
					},
					"ans": "D"
				},
				"Q35": {
					"qs": "35. The psychological support a regime gets from its citizens if they believe the regime is right and ought to be obeyed, is known as",
					"opts": {
						"q0": "A. sovereignty",
						"q1": "B. power.",
						"q2": "C. authority.",
						"q3": "D. influence.",
						"q4": "E. legitimacy."
					},
					"ans": "E"
				},
				"Q36": {
					"qs": "36. The voluntary activities of members of a society in the selection of rulers is known as",
					"opts": {
						"q0": "A. political participation.",
						"q1": "B. political socialisation.",
						"q2": "C. political decision.",
						"q3": "D. political culture.",
						"q4": "E. political authority."
					},
					"ans": "A"
				},
				"Q37": {
					"qs": "37. Residual powers under the Nigerian Independence Constitution were the powers exercised by",
					"opts": {
						"q0": "A. the Federal Government.",
						"q1": "B. the Regional Governments.",
						"q2": "C. the Local Governments.",
						"q3": "D. both the Federal and Regional Governments.",
						"q4": "E. both the Local and regional Governments."
					},
					"ans": "B"
				},
				"Q38": {
					"qs": "38. The highest court of appeal under the Republican Constitution of Nigeria was the",
					"opts": {
						"q0": "A. Federal High Court.",
						"q1": "B. Judicial Committee of the Privy Council",
						"q2": "C. Regional Court of Appeal.",
						"q3": "D. Supreme Court.",
						"q4": "E. Federal Court of Appeal."
					},
					"ans": "D"
				},
				"Q39": {
					"qs": "39. Nigeria became a federation of 19 states in",
					"opts": {
						"q0": "A. 1875",
						"q1": "B. 1976",
						"q2": "C. 1967",
						"q3": "D. 1978",
						"q4": "E. 1979."
					},
					"ans": "B"
				},
				"Q40": {
					"qs": "40. A popular form of proportional representation is",
					"opts": {
						"q0": "A. communal representation",
						"q1": "B. single transferable vote.",
						"q2": "C. the alternative.",
						"q3": "D. the second ballot",
						"q4": "E. electoral college."
					},
					"ans": "B"
				},
				"Q41": {
					"qs": "41. A political concept that is composed of the attitudes, beliefs, emotions and values of a society is called political",
					"opts": {
						"q0": "A. culture",
						"q1": "B. single transferable vote.",
						"q2": "C. authority.",
						"q3": "D. socialization.",
						"q4": "E. power."
					},
					"ans": "A"
				},
				"Q42": {
					"qs": "42. Flexible constitution is advantageous because it",
					"opts": {
						"q0": "A. guarantees political stability.",
						"q1": "B. prevents the passing of hasty bills by the legislature.",
						"q2": "C. can cope with emergency periods. ",
						"q3": "D. allows for continuity.",
						"q4": "E. prevents dictatorship."
					},
					"ans": "C"
				},
				"Q43": {
					"qs": "43. The Economic Community of West African States (ECOWAS) is",
					"opts": {
						"q0": "A. an economic association.",
						"q1": "B. a political association.",
						"q2": "C. cultural association.",
						"q3": "D. a social association.",
						"q4": "E. an inter-ethnic association."
					},
					"ans": "A"
				},
				"Q44": {
					"qs": "44. Which of the following is not an aim of the Organization of African Unity (OAU)?",
					"opts": {
						"q0": "A. Promotion of unity and solidarity among African states",
						"q1": "B. Co-operation of efforts to achieve a better life for the African states",
						"q2": "C. Defence of the sovereignty and independence of African states",
						"q3": "D. Eradication of all forms of colonialism and foreign exploitation in Africa",
						"q4": "E. Enthronement of democratic governments in Africa"
					},
					"ans": "E"
				},
				"Q45": {
					"qs": "45. It is the duty of a government to perform all the following functions, except",
					"opts": {
						"q0": "A. preventing internal disorder",
						"q1": "B. ensuring security of life and property.",
						"q2": "C. providing basic welfare services.",
						"q3": "D. providing all the needs of its citizens.",
						"q4": "E. promoting industrial and commercial development."
					},
					"ans": "D"
				},
				"Q46": {
					"qs": "46. Which of the following concepts is out of place?",
					"opts": {
						"q0": "A. Fascism ",
						"q1": "B. Welfarism ",
						"q2": "C. Totalitarianism",
						"q3": "D. Authoritarianism",
						"q4": "E. Dictatorship"
					},
					"ans": "B"
				},
				"Q47": {
					"qs": "47. The primary objective of all political parties is to",
					"opts": {
						"q0": "A. promote the general interest of members of the public",
						"q1": "B. eradicate corrupt on in public life.",
						"q2": "C. control the government.",
						"q3": "D. campaign for vote.",
						"q4": "E. educate the electorate."
					},
					"ans": "C"
				},
				"Q48": {
					"qs": "48. The French polio- Assimilation",
					"opts": {
						"q0": "A. was a device to transfer technology to Africa",
						"q1": "B. was the same in theory as the British policy of Indirect Rule",
						"q2": "C. was aimed at converting Africans to Frenchmen.",
						"q3": "D. enabled the French to stay in Africa.",
						"q4": "E. produced well educated Africans who opposed the policy."
					},
					"ans": "C"
				},
				"Q49": {
					"qs": "49. Military governors we»e members of the Supreme Military Council under the",
					"opts": {
						"q0": "A. Murtala Mohammed Regime.",
						"q1": "B. Yakubu Gowon Regime.",
						"q2": "C. Ibrahim Babangida Regime.",
						"q3": "D. Olusegun Obasanjo Regime.",
						"q4": "E. Muhammadu Buhari Regime."
					},
					"ans": "B"
				},
				"Q50": {
					"qs": "50. The use of forced labour was one of the features of",
					"opts": {
						"q0": "A. British colonial policy.",
						"q1": "B. French colonial policy.",
						"q2": "C. American colonial policy.",
						"q3": "D. Japanese colonial policy.",
						"q4": "E. divide and Rule policy."
					},
					"ans": "B"
				},
				"Q51": {
					"qs": "51. The controversy over the 1979 Presidential election result was",
					"opts": {
						"q0": "A. over the dispute on the conduct of the election.",
						"q1": "B. because educated Nigerians did not approve who received the number of votes.",
						"q2": "C.  due to the interpretation of 1/4 of the vote cast in 2/3 of all the states in the Federation.",
						"q3": "D. because the winning candidate did not pay his taxes as and when due in the past three years.",
						"q4": "E. because one of the candidates was declared elected when the result for one of the states had not been received."
					},
					"ans": "C"
				},
				"Q52": {
					"qs": "52. All the following were frontline fighters for Nigeria’s independence except",
					"opts": {
						"q0": "A. Obafemi Awolowo",
						"q1": "B. Nnamdi Azikiwe",
						"q2": "C. Lateef Jakande",
						"q3": "D. Aminu Kano.",
						"q4": "E. Herbert Macaulay."
					},
					"ans": "C"
				},
				"Q53": {
					"qs": "53. It is argued that most of the new states of Africa cannot remain faithful to the doctrines of non-alignment mainly because of",
					"opts": {
						"q0": "A. corruption",
						"q1": "B. ethnic problems",
						"q2": "C. bad leadership.",
						"q3": "D. poor economy.",
						"q4": "E. illiteracy"
					},
					"ans": "D"
				},
				"Q54": {
					"qs": "54. The first political party in Nigeria was",
					"opts": {
						"q0": "A. National Council of Nigeria Citizens (NCNC).",
						"q1": "B. Nigeria National Democratic Party (NNDP).",
						"q2": "C. Action Group (AP).",
						"q3": "D. Northern People’s Congress. (NPC).",
						"q4": "E. Dynamic Party (DP)."
					},
					"ans": "B"
				},
				"Q55": {
					"qs": "55. To which of these countries did Nigeria send peacekeeping force?",
					"opts": {
						"q0": "A. South Africa",
						"q1": "B. Angola",
						"q2": "C. Chad",
						"q3": "D. Namibia ",
						"q4": "E. Ghana"
					},
					"ans": "C"
				},
				"Q56": {
					"qs": "56. In the federation, the purpose of enumerating the powers of the central government is to",
					"opts": {
						"q0": "A. ensure efficient administration.",
						"q1": "B. ensure greater unity.",
						"q2": "C. reduce the financial burden of the units.",
						"q3": "D. limit its powers against those of the units.",
						"q4": "E. reduce corruption in the government of the units."
					},
					"ans": "D"
				},
				"Q57": {
					"qs": "57. The ultimate aim of a communist system of government is the distribution of goods and services according to",
					"opts": {
						"q0": "A. age",
						"q1": "B. qualification",
						"q2": "C. party loyalty.",
						"q3": "D. need, want, and ability.",
						"q4": "E. status."
					},
					"ans": "D"
				},
				"Q58": {
					"qs": "58. Under what system of government does the state require ownership and control of the means of production for its use in benefiting the population?",
					"opts": {
						"q0": "A. Capitalism ",
						"q1": "B. Socialism ",
						"q2": "C. Feudalism ",
						"q3": "D. Welfarism",
						"q4": "E. Communalism"
					},
					"ans": "B"
				},
				"Q59": {
					"qs": "59. The question of Nigerian civil war was raised for the first time at the meeting of the OAU in September 1967 in",
					"opts": {
						"q0": "A. Kampala",
						"q1": "B. Addis Ababa.",
						"q2": "C. Lagos",
						"q3": "D. Kinshasa.",
						"q4": "E. Nairobi."
					},
					"ans": "D"
				},
				"Q60": {
					"qs": "60. Nigeria objected to the discussion of the civil war in the OAU summit on the grounds that",
					"opts": {
						"q0": "A. it amounts to interference in its internal affairs.",
						"q1": "B. some African countries recognized Biafra.",
						"q2": "C. Tanzania and Ivory Coast recognized Biafra.",
						"q3": "D. the resolution of the conflict was difficult.",
						"q4": "E. the OAU was not capable of resolving the conflict."
					},
					"ans": "A"
				}
			}
		});
	});

	app.get('/govt/1989', function(req, res) {
		res.json({
			data: {
				"Q1": {
					"qs": "1. Government is the machinery established to manage the affairs of",
					"opts": {
						"q0": "A. rulers",
						"q1": "B. aliens",
						"q2": "C. the civil service.",
						"q3": "D. workers and peasants.",
						"q4": "E. the state."
					},
					"ans": "E"
				},
				"Q2": {
					"qs": "2. The judicial organ of government is the body which",
					"opts": {
						"q0": "A. implements the iaw",
						"q1": "B. makes the law.",
						"q2": "C. punishes lawmakers.",
						"q3": "D. rewards lawmakers.",
						"q4": "E. interprets the law."
					},
					"ans": "E"
				},
				"Q3": {
					"qs": "3. Which of the following is a false description of the first Nigerian Prime Minister? He",
					"opts": {
						"q0": "A. was first among equals",
						"q1": "B. presided over the cabinet",
						"q2": "C. was the Head of Government",
						"q3": "D. exercised the executive power with his cabinet",
						"q4": "E. exercised the prerogative of mercy"
					},
					"ans": "E"
				},
				"Q4": {
					"qs": "4. The twelve states structure was created in Nigeria in",
					"opts": {
						"q0": "A. 1965",
						"q1": "B. 1966",
						"q2": "C. 1967",
						"q3": "D. 1974",
						"q4": "E. 1975."
					},
					"ans": "C"
				},
				"Q5": {
					"qs": "5. The laws which the state legislators make normally pass through",
					"opts": {
						"q0": "A. the commissioner",
						"q1": "B. the process of deliberations",
						"q2": "C. the judiciary.",
						"q3": "D. some committees in the civil service",
						"q4": "E. the executive."
					},
					"ans": "B"
				},
				"Q6": {
					"qs": "6. In the parliamentary system of government, ministers are",
					"opts": {
						"q0": "A. chosen from the house as well as outside",
						"q1": "B. collectively responsible to parliament.",
						"q2": "C. representatives of various interests in the country.",
						"q3": "D. not members of the legislature.",
						"q4": "E. appointed by two-third majority of the legislature."
					},
					"ans": "B"
				},
				"Q7": {
					"qs": "7. Any type of restricted franchise is a violation of principle of",
					"opts": {
						"q0": "A. constitutionalism",
						"q1": "B. sovereignty",
						"q2": "C. political equality.",
						"q3": "D. popular election",
						"q4": "E. legality."
					},
					"ans": "C"
				},
				"Q8": {
					"qs": "8. Which of the following is not the responsibility of the Electoral Commission in Nigeria?",
					"opts": {
						"q0": "A. Swearing in of the members of the House of Assembly",
						"q1": "B. Counting and publication of election results",
						"q2": "C. delimitation of constituencies",
						"q3": "D. Compilation of electoral register",
						"q4": "E. Supervision of polling"
					},
					"ans": "A"
				},
				"Q9": {
					"qs": "9. Which of the following is not a civil obligation of a citizen?",
					"opts": {
						"q0": "A. Obedience to law",
						"q1": "B. Payment of taxes",
						"q2": "C. Voting during elections",
						"q3": "D. Freedom of conscience and religion",
						"q4": "E. Respect for the National Flag and Anthem."
					},
					"ans": "D"
				},
				"Q10": {
					"qs": "10. The study of Government offers an individual all the following, except",
					"opts": {
						"q0": "A. knowledge of his rights and duties",
						"q1": "B. training in good citizenship",
						"q2": "C. knowledge of the processes of government",
						"q3": "D. training to become a judge",
						"q4": "E. basis of career opportunities."
					},
					"ans": "D"
				},
				"Q11": {
					"qs": "11. Voting started in Nigeria in 1923 because the Clifford Constitution of 1922 granted",
					"opts": {
						"q0": "A. decolonization",
						"q1": "B. independence",
						"q2": "C. an elective principle",
						"q3": "D. self-government.",
						"q4": "E. parliamentary government."
					},
					"ans": "C"
				},
				"Q12": {
					"qs": "12. The organ of the UNO which can impose mandatory sanctions on any of its members is the",
					"opts": {
						"q0": "A. international Court of Justice.",
						"q1": "B. Economic and Social Council.",
						"q2": "C. General Assembly.",
						"q3": "D. Security Council.",
						"q4": "E. Secretariat."
					},
					"ans": "D"
				},
				"Q13": {
					"qs": "13. A unified local government system was adopted in Nigeria under the",
					"opts": {
						"q0": "A. Tafawa Balewa administration.",
						"q1": "B. Yakubu Gowon administration.",
						"q2": "C. Shehu Shagari administration.",
						"q3": "D. Mutala/Obasanjo administration.",
						"q4": "E. Mohammadu Buhari administration."
					},
					"ans": "D"
				},
				"Q14": {
					"qs": "14. The two parties which formed the coalition government in 1959 were the",
					"opts": {
						"q0": "A. NPC and the NCNC.",
						"q1": "B. NCNC and the AG",
						"q2": "C. NPC and the NNA",
						"q3": "D. PRP and the UPGA.",
						"q4": "E. NPC and the AG."
					},
					"ans": "A"
				},
				"Q15": {
					"qs": "15. Which of the following is not written into the independence constitution of 1960?7.	Which of the following is not written into the independence constitution of 1960?",
					"opts": {
						"q0": "A. Fundamental human rights",
						"q1": "B. Executive powers",
						"q2": "C. Concurrent list",
						"q3": "D. Role of political parties",
						"q4": "E. Legislative powers"
					},
					"ans": "D"
				},
				"Q16": {
					"qs": "16. The process of depriving persons of the right of voting is known as",
					"opts": {
						"q0": "A. enfranchisement",
						"q1": "B. disqualification",
						"q2": "C. dismissal",
						"q3": "D. prohibition",
						"q4": "E. disenfranchisement."
					},
					"ans": "E"
				},
				"Q17": {
					"qs": "17. The predominant influence of Northern Nigeria in the First Republic violated the federal principle of",
					"opts": {
						"q0": "A. effective co-operation among the constituent units.",
						"q1": "B. geographical contiguity.",
						"q2": "C. unity.",
						"q3": "D. absence of marked equalities among the component units.",
						"q4": "E. local autonomy."
					},
					"ans": "D"
				},
				"Q18": {
					"qs": "18. Bicameralism refers to",
					"opts": {
						"q0": "A. a one chamber legislature.",
						"q1": "B. the process of voting in the legislature.",
						"q2": "C. the upper chamber in legislature.",
						"q3": "D. a two-chamber legislature.",
						"q4": "E. legislatures in all sovereign states."
					},
					"ans": "D"
				},
				"Q19": {
					"qs": "19. The head of state under the independence constitution of Nigeria was",
					"opts": {
						"q0": "A. an absolute monarch.",
						"q1": "B. a constitutional monarch.",
						"q2": "C. imposed by the British.",
						"q3": "D. invested with executive power.",
						"q4": "E. popularly elected."
					},
					"ans": "B"
				},
				"Q20": {
					"qs": "20. The principle of separation of powers implies that the three main organs of government work.",
					"opts": {
						"q0": "A. separately",
						"q1": "B. independently but cooperatively.",
						"q2": "C. against one another.",
						"q3": "D. reluctantly and gradually for the executive.",
						"q4": "E. together in the interest of the nation."
					},
					"ans": "B"
				},
				"Q21": {
					"qs": "21. The emergency powers conferred on the Federal Government under the independence constitution was first exercised in the",
					"opts": {
						"q0": "A. Western Region.",
						"q1": "B. Mid-Western Region.",
						"q2": "C. Eastern Region.",
						"q3": "D. Northern Region.",
						"q4": "E. Federal Territory of Lagos."
					},
					"ans": "A"
				},
				"Q22": {
					"qs": "22. A sovereign state is one",
					"opts": {
						"q0": "A. whose constitution can only be changed by a military government.",
						"q1": "B. where its citizens can speak without fear or favour",
						"q2": "C. in which sovereignty is invested in the military",
						"q3": "D. whose citizens are free to evade responsibility.",
						"q4": "E. whose government decisions are made independent of foreign interference."
					},
					"ans": "E"
				},
				"Q23": {
					"qs": "23. Which of the following is not a component of political culture?",
					"opts": {
						"q0": "A. Attitudes",
						"q1": "B. Beliefs ",
						"q2": "C. Emotions ",
						"q3": "D. Age",
						"q4": "E. Societal values"
					},
					"ans": "D"
				},
				"Q24": {
					"qs": "24. Representative democracy is characterized by",
					"opts": {
						"q0": "A. free election and proper register of voters.",
						"q1": "B. unlimited expenditure of political parties.",
						"q2": "C. a politically educated electorate.",
						"q3": "D. representation of the poor only.",
						"q4": "E. rule of interest groups."
					},
					"ans": "A"
				},
				"Q25": {
					"qs": "25. The ratification of the appointment and dismissal of an Emir in the pre-colonial Fulani Empire was done by the",
					"opts": {
						"q0": "A. Empire of Lafiagi and the Etsu of Pategi.",
						"q1": "B. Emirs of Kano and Katsina",
						"q2": "C. Emirs of Gwandu and Sokoto",
						"q3": "D. Emir of Morin.",
						"q4": "E. Emir of Shonga."
					},
					"ans": "C"
				},
				"Q26": {
					"qs": "26. The primary function of a legislature is the",
					"opts": {
						"q0": "A. appointment of the president.",
						"q1": "B. making of laws.",
						"q2": "C. voting of bills",
						"q3": "D. monitoring of the judiciary",
						"q4": "E. re-assignment of civil servants."
					},
					"ans": "B"
				},
				"Q27": {
					"qs": "27. Which of the following title among the fgbos in the pre-colonial era required substantial wealth before one could acquire it",
					"opts": {
						"q0": "A. Ofo",
						"q1": "B. Okpara",
						"q2": "C. Ozo",
						"q3": "D. Eze",
						"q4": "E. Obi."
					},
					"ans": "C"
				},
				"Q28": {
					"qs": "28. According to Marxist theory those who own and control the means of production in a capitalist society are",
					"opts": {
						"q0": "A. exploiters",
						"q1": "B. colonialists.",
						"q2": "C. workers.",
						"q3": "D. shareholders.",
						"q4": "E. bourgeoisie."
					},
					"ans": "E"
				},
				"Q29": {
					"qs": "29. The head of the Oyomesi in the old Oyo Empire was",
					"opts": {
						"q0": "A. Aremo",
						"q1": "B. Are Onakakanfo",
						"q2": "C. Olowo",
						"q3": "D. Bashorun",
						"q4": "E. Oba."
					},
					"ans": "D"
				},
				"Q30": {
					"qs": "30. The head of Nigerian Mission to the Commonwealth of Nations is",
					"opts": {
						"q0": "A. an Ambassador",
						"q1": "B. a Consular.",
						"q2": "C. the Minister of External Affairs",
						"q3": "D. a High Commissioner.",
						"q4": "E. a Diplomat."
					},
					"ans": "D"
				},
				"Q31": {
					"qs": "31. While political parties aim at forming a government, pressure groups aim at",
					"opts": {
						"q0": "A. imposing a military rule",
						"q1": "B. causing social unrest.",
						"q2": "C. influencing government decisions.",
						"q3": "D. controlling a nation’s economy.",
						"q4": "E. uniting all workers."
					},
					"ans": "C"
				},
				"Q32": {
					"qs": "32. Nigeria does not maintain diplomatic relations with South Africa because of the latter’s",
					"opts": {
						"q0": "A. industrial policy.",
						"q1": "B. apartheid policy",
						"q2": "C. foreign policy",
						"q3": "D. agricultural policy",
						"q4": "E. religious policy."
					},
					"ans": "B"
				},
				"Q33": {
					"qs": "33. Which of the following countries does not operate a federal constitution?",
					"opts": {
						"q0": "A. USA",
						"q1": "B. Canada ",
						"q2": "C. Nigeria",
						"q3": "D. France ",
						"q4": "E. Switzerland"
					},
					"ans": "D"
				},
				"Q34": {
					"qs": "34. Socialism developed as a protest against the evils of ",
					"opts": {
						"q0": "A. monarchy",
						"q1": "B. oligarchy",
						"q2": "C. feudalism",
						"q3": "D. capitalism ",
						"q4": "E. fascism"
					},
					"ans": "D"
				},
				"Q35": {
					"qs": "35. The major advantage of the secret ballot is that",
					"opts": {
						"q0": "A. it is faster than other systems.",
						"q1": "B. nobody can be prevented from voting.",
						"q2": "C. it ensures the anonymity of each voter",
						"q3": "D. losers can ask for another secret vote.",
						"q4": "E. it extends the franchise to all adults."
					},
					"ans": "C"
				},
				"Q36": {
					"qs": "36. One of the first actions of military governments when they take over power in Nigeria is to",
					"opts": {
						"q0": "A. detain all the politicians.",
						"q1": "B. appoint new ministers and commissioners.",
						"q2": "C. tour the country to explain why they have taken over.",
						"q3": "D. give bonus to worker",
						"q4": "E. suspend the constitution."
					},
					"ans": "E"
				},
				"Q37": {
					"qs": "37. A parliamentary-cabinet system of government is practised in",
					"opts": {
						"q0": "A. Canada",
						"q1": "B. Nigeria",
						"q2": "C. the Soviet Union",
						"q3": "D. all European countries.",
						"q4": "E. the United States of America."
					},
					"ans": "A"
				},
				"Q38": {
					"qs": "38. Foreign policy refers to",
					"opts": {
						"q0": "A. a policy made by a foreign country.",
						"q1": "B. a policy made by a country for foreigners",
						"q2": "C. a policy made by a country when it is at war.",
						"q3": "D. the international events which govern states internal policies",
						"q4": "E. the general principles which govern a state’s international behaviour."
					},
					"ans": "E"
				},
				"Q39": {
					"qs": "39. The constitution of the Federal Republic of Nigeria",
					"opts": {
						"q0": "A. promotes unity in diversity.",
						"q1": "B. allows for the dominance of the minority ethnic groups.",
						"q2": "C. concentrates governmental power at one level of government.",
						"q3": "D. advances the interest of the rich.",
						"q4": "E. ensures the dominance of one political party."
					},
					"ans": "A"
				},
				"Q40": {
					"qs": "40. Which of the following is not an objective in foreign policy?",
					"opts": {
						"q0": "A. Prestige",
						"q1": "B. Large population",
						"q2": "C. Territorial integrity",
						"q3": "D. Survival ",
						"q4": "E. Preservation of states beliefs and values"
					},
					"ans": "B"
				},
				"Q41": {
					"qs": "41. The principle of anonymity of civil servants means that they are",
					"opts": {
						"q0": "A. career officers.",
						"q1": "B. not the servants of a particular government.",
						"q2": "C. trained for the duties they perform.",
						"q3": "D. not credited or blamed for anything they do.",
						"q4": "E. entitled to pension and gratuity when they retire."
					},
					"ans": "D"
				},
				"Q42": {
					"qs": "42. During the 1964 Federal elections there was a total boycott of voting in",
					"opts": {
						"q0": "A. the Western Region.",
						"q1": "B. Lagos",
						"q2": "C. the Northern Region.",
						"q3": "D. the Eastern Region.",
						"q4": "E. the Mid-Western Region."
					},
					"ans": "D"
				},
				"Q43": {
					"qs": "43. Which of the following is not a pressure group? The",
					"opts": {
						"q0": "A. Nigeria Farmers’ Council",
						"q1": "B. Nigeria Union of Teachers",
						"q2": "C. National Party of Nigeria",
						"q3": "D. Academic Staff Union of Universities",
						"q4": "E. Nigeria Medical Association"
					},
					"ans": "C"
				},
				"Q44": {
					"qs": "44. Which of the following is not a public corporation? The",
					"opts": {
						"q0": "A. Nigerian Ports Authority",
						"q1": "B. National Sports Commission",
						"q2": "C. National Youth Service Corps",
						"q3": "D. Nigerian Railway Corporation",
						"q4": "E. Nigerian Airways"
					},
					"ans": "C"
				},
				"Q45": {
					"qs": "45. Which of the following is not an academic discipline in which a student of Government can specialize?",
					"opts": {
						"q0": "A. Public Administration",
						"q1": "B. Local Government",
						"q2": "C. Political Territory",
						"q3": "D. International Relations",
						"q4": "E. Public Education"
					},
					"ans": "C"
				},
				"Q46": {
					"qs": "46. The Republican Constitution of 1963 was indigenous because it was approved by",
					"opts": {
						"q0": "A. a referendum.",
						"q1": "B. the representatives of the people in parliament.",
						"q2": "C. the British parliament",
						"q3": "D. the colonial government.",
						"q4": "E. the regional legislatures only."
					},
					"ans": "B"
				},
				"Q47": {
					"qs": "47. Local government reforms were carried out by the Federal Military Government in",
					"opts": {
						"q0": "A. 1966",
						"q1": "B. 1967",
						"q2": "C. 1970",
						"q3": "D. 1976",
						"q4": "E. 1979."
					},
					"ans": "D"
				},
				"Q48": {
					"qs": "48. With which country did Nigeria break diplomatic relations in 1963 for exploding a nuclear device in the Sahara?",
					"opts": {
						"q0": "A. The Soviet Union",
						"q1": "B. The U.S.A",
						"q2": "C. China",
						"q3": "D. South Africa",
						"q4": "E. France"
					},
					"ans": "E"
				},
				"Q49": {
					"qs": "49. The first political party in Nigeria was formed after the introduction of the",
					"opts": {
						"q0": "A. Richard Constitution",
						"q1": "B. Clifford Constitution",
						"q2": "C. Bourdillon Constitution",
						"q3": "D. Macpherson Constitution",
						"q4": "E. Lyttleton Constitution."
					},
					"ans": "B"
				},
				"Q50": {
					"qs": "50. Which of the following did not formally recognize Biafra as an independent state?",
					"opts": {
						"q0": "A. Sierra Leone",
						"q1": "B. Tanzania ",
						"q2": "C. Gabon",
						"q3": "D. Ivory Coast",
						"q4": "E. Zambia."
					},
					"ans": "E"
				},
				"Q51": {
					"qs": "51. When there is a conflict between the regional and federal laws under the concurrent legislative list, the",
					"opts": {
						"q0": "A. Federal laws would prevail",
						"q1": "B. Federal laws would be declared null and void.",
						"q2": "C. regional laws would prevail.",
						"q3": "D. Head of State would settle the conflict.",
						"q4": "E. Supreme Court would settle the conflict in favour of the region."
					},
					"ans": "A"
				},
				"Q52": {
					"qs": "52. Nigeria hosted the meeting of Commonwealth Heads of State in",
					"opts": {
						"q0": "A. 1965",
						"q1": "B. 1966",
						"q2": "C. 1967",
						"q3": "D. 1968",
						"q4": "E. 1969"
					},
					"ans": "B"
				},
				"Q53": {
					"qs": "53. A fascist regime is both",
					"opts": {
						"q0": "A. representative and accountable.",
						"q1": "B. responsive and responsible",
						"q2": "C. fair and legitimate",
						"q3": "D. authoritarian",
						"q4": "E. democratic and constitutional."
					},
					"ans": "D"
				},
				"Q54": {
					"qs": "54. Which of the following is not a function of the Secretary-General of the United Nations Organization?",
					"opts": {
						"q0": "A. Supervising the Secretariat",
						"q1": "B. Interpreting the treaties",
						"q2": "C. Alerting the Security Council on any matter that may threaten international peace",
						"q3": "D. Making annual report",
						"q4": "E. Appointing other members of staff under him"
					},
					"ans": "B"
				},
				"Q55": {
					"qs": "55. Capitalism often encourages",
					"opts": {
						"q0": "A. private ownership of the means of production",
						"q1": "B. deconcentration of political and economic powers in the same hands.",
						"q2": "C. a centrally planned economy",
						"q3": "D. public ownership of all forms of enterprises.",
						"q4": "E. anarchy."
					},
					"ans": "A"
				},
				"Q56": {
					"qs": "56. Which of the following African countries has diplomatic relations with South Africa?",
					"opts": {
						"q0": "A. Malawi ",
						"q1": "B. Zambia",
						"q2": "C. Gabon ",
						"q3": "D. Tanzania ",
						"q4": "E. Cameroun"
					},
					"ans": "A"
				},
				"Q57": {
					"qs": "57. Citizens who are legally qualified to vote form",
					"opts": {
						"q0": "A. political parties",
						"q1": "B. Trade Union Congress.",
						"q2": "C. members of the House of Assembly.",
						"q3": "D. the electorate",
						"q4": "E. a ward."
					},
					"ans": "D"
				},
				"Q58": {
					"qs": "58. Election among candidates from the same party before the final elections are called",
					"opts": {
						"q0": "A. Primaries.",
						"q1": "B. Running Mates.",
						"q2": "C. Second ballots.",
						"q3": "D. Party conventions.",
						"q4": "E. Electoral colleges."
					},
					"ans": "A"
				},
				"Q59": {
					"qs": "59. Which of the following countries is not a member of the Economic Community of West African States (ECOWAS)?",
					"opts": {
						"q0": "A. Nigeria",
						"q1": "B. Cameroun ",
						"q2": "C. Ghana",
						"q3": "D. Togo",
						"q4": "E. Ivory Coast."
					},
					"ans": "B"
				},
				"Q60": {
					"qs": "60. The international organization formed after the Second World War to guarantee international peace and security is the",
					"opts": {
						"q0": "A. World Bank.",
						"q1": "B. United Nations Organization.",
						"q2": "C. League of Nations.",
						"q3": "D. British Commonwealth.",
						"q4": "E. European Common Market."
					},
					"ans": "B"
				}
			}
		});
	});

	app.get('/govt/1990', function(req, res) {
		res.json({
			data: {
				"Q1": {
					"qs": "1. Under what constitution did the Supreme Court become the highest Court of Appeal in Nigeria?",
					"opts": {
						"q0": "A. Lyttleton Constitution",
						"q1": "B. Republican Constitution",
						"q2": "C. Macpherson Constitution",
						"q3": "D. Independence Constitution",
						"q4": "E. Richards Constitution"
					},
					"ans": "B"
				},
				"Q2": {
					"qs": "2. Capitalism is an economic system in which",
					"opts": {
						"q0": "A. the economy of the state is centrally planned and controlled.",
						"q1": "B. private persons are permitted to undertake enterprises.",
						"q2": "C. accumulation of private property is forbidden.",
						"q3": "D. the means of production are owned and controlled by the state.",
						"q4": "E. all big industries and land are publicly owned for the common good."
					},
					"ans": "B"
				},
				"Q3": {
					"qs": "3. The process whereby the electorate votes for representatives who in turn vote on their behalf is called",
					"opts": {
						"q0": "A. an indirect election.",
						"q1": "B. an unfair election.",
						"q2": "C. a rigged election.",
						"q3": "D. a disputed election",
						"q4": "E. an unpopular election."
					},
					"ans": "A"
				},
				"Q4": {
					"qs": "4. The main function of the judiciary is to",
					"opts": {
						"q0": "A. serve as the watchdog of executive",
						"q1": "B. enact laws",
						"q2": "C. execute the laws of the land",
						"q3": "D. interpret the laws",
						"q4": "E. protect the interest of accused persons."
					},
					"ans": "D"
				},
				"Q5": {
					"qs": "5. The Nigeria National Democratic Party was founded by",
					"opts": {
						"q0": "A. Dr. Nnamdi Azikiwe.",
						"q1": "B. Chief Obafemi Awolowo.",
						"q2": "C. Herbert Macaulay.",
						"q3": "D. Ernest Okoli",
						"q4": "E. H. O. Davis."
					},
					"ans": "C"
				},
				"Q6": {
					"qs": "6. In which system of government does the state require the control of everything and allows no opposition?",
					"opts": {
						"q0": "A. Feudalism ",
						"q1": "B. Capitalism ",
						"q2": "C. Totalitarianism ",
						"q3": "D. Communism",
						"q4": "E. Socialism"
					},
					"ans": "C"
				},
				"Q7": {
					"qs": "7. The lowest class of people in the hierarchy of Feudal system is made up of the",
					"opts": {
						"q0": "A. Lords",
						"q1": "B. Nobles.",
						"q2": "C. Serfs",
						"q3": "D. Knights",
						"q4": "E. King’s Servants."
					},
					"ans": "C"
				},
				"Q8": {
					"qs": "8. Nigeria broke diplomatic relations with Israel because of that country’s",
					"opts": {
						"q0": "A. raid on a Ugandan town.",
						"q1": "B. occupation of Arab territories, including Egypt",
						"q2": "C. non-support of Nigerian civil war.",
						"q3": "D. support for South Africa.",
						"q4": "E. Refusal to accept pilgrims from Africa."
					},
					"ans": "B"
				},
				"Q9": {
					"qs": "9. In the absence of the existence of traditional rulers in the Igbo communities the British colonial administration appointed the",
					"opts": {
						"q0": "A. Eze",
						"q1": "B. Paramount. Chiefs.",
						"q2": "C. Ozo",
						"q3": "D. Warrant Chiefs.",
						"q4": "E. Obi"
					},
					"ans": "D"
				},
				"Q10": {
					"qs": "10. The progressive nature of Nigeria’s foreign policy between 1975 and 1979 is attributed to all the following except",
					"opts": {
						"q0": "A. the influence of radical intellectuals.",
						"q1": "B. military officers who were acting in foreign affairs before coming into the government",
						"q2": "C. the influence of the American government.",
						"q3": "D. Nigeria’s oil money.",
						"q4": "E. public opinion."
					},
					"ans": "C"
				},
				"Q11": {
					"qs": "11. In the process of governing, input refers to the",
					"opts": {
						"q0": "A. decision and actions of the authorities.",
						"q1": "B. regulations made by the government for the individuals and groups.",
						"q2": "C. demands made by individuals and groups for action by the authorities.",
						"q3": "D. demands which have become official policies.",
						"q4": "E. actions taken by public officials."
					},
					"ans": ""
				},
				"Q12": {
					"qs": "12. Under the 1979 Constitution, members of the Federal Executive Council were called",
					"opts": {
						"q0": "A. Ministers",
						"q1": "B. Commissioners",
						"q2": "C. Senators",
						"q3": "D. Supervisory Councilors",
						"q4": "E. Dr. Joseph Wayas"
					},
					"ans": "A"
				},
				"Q13": {
					"qs": "13. Northern Nigeria became internally self-governing in",
					"opts": {
						"q0": "A. 1956",
						"q1": "B. 1957",
						"q2": "C. 1958",
						"q3": "D. 1959",
						"q4": "E. 1960."
					},
					"ans": "D"
				},
				"Q14": {
					"qs": "14. The first elected executive president of Nigeria was",
					"opts": {
						"q0": "A. Dr. Nnamdi Azikiwe",
						"q1": "B. Alhaji Shehu Shagari",
						"q2": "C. Alhaji Abubakar Tafawa Balewa",
						"q3": "D. Alhaji Aminu Kano",
						"q4": "E. Dr. Joseph Wayas."
					},
					"ans": "B"
				},
				"Q15": {
					"qs": "15. A totalitarian government is a government",
					"opts": {
						"q0": "A. that aspires to control every aspect of a citizens’s life.",
						"q1": "B. for the masses.",
						"q2": "C. of the people by the people and for the people.",
						"q3": "D. that aspires to control only the economic aspect of a citizens’s life.",
						"q4": "E. controlled by the land owners."
					},
					"ans": "A"
				},
				"Q16": {
					"qs": "16. Which of the following was not a demand of the nationalist movement in Nigeria?",
					"opts": {
						"q0": "A. Promotion of Africans to senior service positions",
						"q1": "B. Increase African representation in the legislative assemblies",
						"q2": "C. improved conditions of service and salaries for Africans",
						"q3": "D. Withdrawal of military bases from Africa",
						"q4": "E. Reduction of the dictatorial powers of colonial officers"
					},
					"ans": "D"
				},
				"Q17": {
					"qs": "17. Under the 1979 Nigerian Constitution, each state is allowed to elect",
					"opts": {
						"q0": "A. two senators",
						"q1": "B. five senators",
						"q2": "C. as many senators as the state could finance",
						"q3": "D. from two to five senators, depending on the population of the state.",
						"q4": "E. ten senators."
					},
					"ans": "B"
				},
				"Q18": {
					"qs": "18. Rates are generally collected in Nigeria by the",
					"opts": {
						"q0": "A. Local Government Council.",
						"q1": "B. Department of Inland Revenue.",
						"q2": "C. State Ministry of Finance.",
						"q3": "D. Emirate of Traditional Council",
						"q4": "E. State Governors."
					},
					"ans": "A"
				},
				"Q19": {
					"qs": "19. The second military coup d’etat in Nigeria took place on",
					"opts": {
						"q0": "A. July 29, 1966.",
						"q1": "B. July 29, 1975.",
						"q2": "C. February 13, 1976.",
						"q3": "D. October 1, 1966.",
						"q4": "E. January 15, 1966."
					},
					"ans": "A"
				},
				"Q20": {
					"qs": "20. To be qualified as president of Nigeria, the 1979 Constitution states that one must have attained the age of",
					"opts": {
						"q0": "A. 18 years.",
						"q1": "B. 21 years.",
						"q2": "C. 30 years",
						"q3": "D. 35 years.",
						"q4": "E. 45 years."
					},
					"ans": "D"
				},
				"Q21": {
					"qs": "21. An election which is conducted to fill a vacant seat in a legislature is called a",
					"opts": {
						"q0": "A. bye-election.",
						"q1": "B. general election.",
						"q2": "C. referendum",
						"q3": "D. plebiscite",
						"q4": "E. mini-election."
					},
					"ans": "A"
				},
				"Q22": {
					"qs": "22. In Nigeria the institution that preserves civil liberty is the",
					"opts": {
						"q0": "A. Judicial Service Commission.",
						"q1": "B. Federal Electoral Commission.",
						"q2": "C. Law Courts.",
						"q3": "D. State Security Service.",
						"q4": "E. Police Commission."
					},
					"ans": "C"
				},
				"Q23": {
					"qs": "23. Nigeria became a federation under the 1954 Constitution because the constitution",
					"opts": {
						"q0": "A. provided for equal representation between the North and South.",
						"q1": "B. created the post of a Prime Minister.",
						"q2": "C. Provided for indirect election of members of parliament.",
						"q3": "D. provided for a division of functions between the centre and the component units",
						"q4": "E. abolished the practice of nominating some members of parliament."
					},
					"ans": "D"
				},
				"Q24": {
					"qs": "24. In a parliamentary system of government, the majority party",
					"opts": {
						"q0": "A. executes its own laws only.",
						"q1": "B. legislates all binding laws",
						"q2": "C. makes law for the nation.",
						"q3": "D. forms the government.",
						"q4": "E. provides all the needs of the people."
					},
					"ans": "D"
				},
				"Q25": {
					"qs": "25. A system in which powerful and rich nobles own the lands which are hired out to the poor people to farm is called",
					"opts": {
						"q0": "A. feudalism",
						"q1": "B. capitalism",
						"q2": "C. socialism",
						"q3": "D. communism",
						"q4": "E. communaiism."
					},
					"ans": "A"
				},
				"Q26": {
					"qs": "26. The principle of checks and balances is necessary because it ",
					"opts": {
						"q0": "A. prevents government from becoming dictatorial.",
						"q1": "B. prevents the executives from functioning.",
						"q2": "C. making the executives stronger than the other organs.",
						"q3": "D. makes the three organs hate one another.",
						"q4": "E. leave each organ of government independent of the judiciary."
					},
					"ans": "A"
				},
				"Q27": {
					"qs": "27. Public opinion is very important because it",
					"opts": {
						"q0": "A. guarantees a free press.",
						"q1": "B. protects minorities.",
						"q2": "C. tells the government what action it must take.",
						"q3": "D. lets the government Knee what the people want.",
						"q4": "E. allows the police to identify trouble makers."
					},
					"ans": "D"
				},
				"Q28": {
					"qs": "28. Which branch of government is responsible for implementing laws? The",
					"opts": {
						"q0": "A. Public Service Commission",
						"q1": "B. Local Government",
						"q2": "C. Executive ",
						"q3": "D. legislature ",
						"q4": "E. Judiciary"
					},
					"ans": "C"
				},
				"Q29": {
					"qs": "29. In a unitary system of government",
					"opts": {
						"q0": "A. Parliament is very weak.",
						"q1": "B. There is high' degree of decentralisation.",
						"q2": "C. Political power is.diffused.",
						"q3": "D. there is high degree of centralization.",
						"q4": "E. Legislative powers cannot be delegated to local council."
					},
					"ans": "D"
				},
				"Q30": {
					"qs": "30. On attainment of independence Nigeria declared that she would adopt the policy of non-alignment. This meant that Nigeria",
					"opts": {
						"q0": "A. believed in cooperation as a means of promoting African unity.",
						"q1": "B. would take side with any country that offers aids to her.",
						"q2": "C. would seek the opinion of her West African neighbours before taking any action in international matters.",
						"q3": "D. would not take side with any of the contending power blocs in the international system.",
						"q4": "E. would not interfere in the internal affairs of her neighbours."
					},
					"ans": "D"
				},
				"Q31": {
					"qs": "31. The Angola-Nigeria defence pact was abrogated shortly after independence because",
					"opts": {
						"q0": "A. of opposition from university students in Nigeria.",
						"q1": "B. the British government was dissatisfied with the arrangement.",
						"q2": "C. the Prime Minister of Nigeria was dissatisfied with the arrangement.",
						"q3": "D. the Soviet Union advised Nigeria to abrogate the pact.",
						"q4": "E. Nigeria wanted to make a similar defence pact with USA."
					},
					"ans": "A"
				},
				"Q32": {
					"qs": "32. All the following senior officials constituted the advisory council to the emirs in the pre-colonial system except the",
					"opts": {
						"q0": "A. Waziri",
						"q1": "B. Madawaki",
						"q2": "C. Galadima",
						"q3": "D. Sarkin Fada",
						"q4": "E. Ciroma."
					},
					"ans": "E"
				},
				"Q33": {
					"qs": "33. The Igbo of Eastern Nigeria in the pre-colonial era had",
					"opts": {
						"q0": "A. a dictatorial government",
						"q1": "B. a government of chiefs",
						"q2": "C. no central government",
						"q3": "D. a government controlled by the warrant chiefs",
						"q4": "E. a government by age grade"
					},
					"ans": "C"
				},
				"Q34": {
					"qs": "34. The introduction of Indirect Rule in Eastern Nigeria led to the Aba women riots of",
					"opts": {
						"q0": "A. 1914",
						"q1": "B. 1929.",
						"q2": "C. 1935",
						"q3": "D. 1940",
						"q4": "E. 1956."
					},
					"ans": "B"
				},
				"Q35": {
					"qs": "35. The first president of the National Council for Nigeria and the Camerouns (NCNC) was",
					"opts": {
						"q0": "A. Dr. Nnamdi Azikiwe.",
						"q1": "B. Dr. Michael Okpara",
						"q2": "C. Herbert Macaulay",
						"q3": "D. Ernest Okoli",
						"q4": "E. Chief Dennis Osadebey"
					},
					"ans": "C"
				},
				"Q36": {
					"qs": "36. The kano riots of 1953 is significant because",
					"opts": {
						"q0": "A. it involved rioting between Igbos and Hausas",
						"q1": "B. it was the first outbreak of violence between the major political parties.",
						"q2": "C. many innocent lives were lost.",
						"q3": "D. violence broke out when the. Emir was on an official tour of Sabon Gari, the scene of the violence",
						"q4": "E. the police could not arrest the rioters, thus nobody was charged to court."
					},
					"ans": "B"
				},
				"Q37": {
					"qs": "37. When a constitution is difficult to amend, it is said to be",
					"opts": {
						"q0": "A. federal",
						"q1": "B. unitary",
						"q2": "C. written",
						"q3": "D. flexible",
						"q4": "E. rigid"
					},
					"ans": "E"
				},
				"Q38": {
					"qs": "38. A political authority which maintains sovereign power over a specific geographical area is termed the",
					"opts": {
						"q0": "A. nation ",
						"q1": "B. society ",
						"q2": "C. state ",
						"q3": "D. country ",
						"q4": "E. community"
					},
					"ans": "C"
				},
				"Q39": {
					"qs": "39. A government in which the control of ultimate power is by a few who rule for their own selfish interest is classified as",
					"opts": {
						"q0": "A. a democracy",
						"q1": "B. a dictatorship",
						"q2": "C. aristocracy",
						"q3": "D. a monarchy",
						"q4": "E. an oligarchy"
					},
					"ans": "E"
				},
				"Q40": {
					"qs": "40. In a one-party state",
					"opts": {
						"q0": "A. there is only one dominant party",
						"q1": "B. the legislature is unicameral.",
						"q2": "C. only the workers’ party is allowed to exist",
						"q3": "D. the ruling party is the only legal party.",
						"q4": "E. elections to the legislature are held at the party’s conference."
					},
					"ans": "D"
				},
				"Q41": {
					"qs": "41. A bill that applies to the whole population and is intended to promote general welfare is called",
					"opts": {
						"q0": "A. an edict",
						"q1": "B. a public bill",
						"q2": "C. a decree",
						"q3": "D. a private bil",
						"q4": "E. an appropriation bill"
					},
					"ans": "B"
				},
				"Q42": {
					"qs": "42. The political neutrality of civil servants implies that they",
					"opts": {
						"q0": "A. are not allowed to vote",
						"q1": "B. have permanent tenure.",
						"q2": "C. are not allowed to join any organization or group",
						"q3": "D. have no dealings with politicians",
						"q4": "E. are not allowed to be involved in partisan politics"
					},
					"ans": "E"
				},
				"Q43": {
					"qs": "43. In which system of government are ceremonial and executive powers usually fused?",
					"opts": {
						"q0": "A. Parliamentary",
						"q1": "B. Federal ",
						"q2": "C. Presidential",
						"q3": "D. Democratic",
						"q4": "E. Unitary"
					},
					"ans": "C"
				},
				"Q44": {
					"qs": "44. Which of the following is not a public corporation? the",
					"opts": {
						"q0": "A. Nigeria Ports Authority",
						"q1": "B. National Electric Power Authority",
						"q2": "C. Nigeria National Shipping Line",
						"q3": "D. Nigeria Steel Development Authority",
						"q4": "E. Nigeria Teachers Institute"
					},
					"ans": "E"
				},
				"Q45": {
					"qs": "45. A popular principle of colonial administration in British West Africa was",
					"opts": {
						"q0": "A. association",
						"q1": "B. indirect rule",
						"q2": "C. paternalism",
						"q3": "D. westernization",
						"q4": "E. assimilation."
					},
					"ans": "B"
				},
				"Q46": {
					"qs": "46. The first Governor-General of colonial Nigeria was",
					"opts": {
						"q0": "A. Sir Hugh Clifford",
						"q1": "B. Sir James Robertson",
						"q2": "C. John Macpherson",
						"q3": "D. Donald Cameroon.",
						"q4": "E. Lord Fredrick Lugard"
					},
					"ans": "E"
				},
				"Q47": {
					"qs": "47. The first military government in Nigeria was headed by General",
					"opts": {
						"q0": "A. Yakubu Gowon",
						"q1": "B. Aguiyi Ironsi",
						"q2": "C. Murtala Mohammed",
						"q3": "D. Olusegun Obasanjo",
						"q4": "E. Hassan Katsina."
					},
					"ans": "B"
				},
				"Q48": {
					"qs": "48. The state legislature in the Second Republic of Nigeria was called the",
					"opts": {
						"q0": "A. National Assembly",
						"q1": "B. Legislative Council",
						"q2": "C. Traditional Council",
						"q3": "D. House of Assembly",
						"q4": "E. House of representatives"
					},
					"ans": "D"
				},
				"Q49": {
					"qs": "49. The 1979 Constitution of Nigeria",
					"opts": {
						"q0": "A. provided for a head of government",
						"q1": "B. introduced the participation of women in politics",
						"q2": "C. provided for a head of state who is also the head of government.",
						"q3": "D. provided for House of Chiefs",
						"q4": "E. made all men equal before the law."
					},
					"ans": "C"
				},
				"Q50": {
					"qs": "50. In a democracy, franchise is given to all",
					"opts": {
						"q0": "A. qualified adult citizens.",
						"q1": "B. loyal party members.",
						"q2": "C. citizens except members of the armed forces.",
						"q3": "D. citizens",
						"q4": "E. resident adults."
					},
					"ans": "A"
				},
				"Q51": {
					"qs": "51. The citizenship of a country may be acquired by an individual through",
					"opts": {
						"q0": "A. decolonization",
						"q1": "B. naturalization",
						"q2": "C. nationalization",
						"q3": "D. nomination",
						"q4": "E. neutralization."
					},
					"ans": "B"
				},
				"Q52": {
					"qs": "52. The deity (such as chi or the oracles) in the traditional Igbo political system mainly performed",
					"opts": {
						"q0": "A. legislative and executive functions",
						"q1": "B. judiciary and legislative functions",
						"q2": "C. spiritual and executive functions",
						"q3": "D. judiciary and political functions",
						"q4": "E. executive and judiciary functions."
					},
					"ans": "D"
				},
				"Q53": {
					"qs": "53. The recognition of individual rights, and the industrial revolution contributed to the development of",
					"opts": {
						"q0": "A. socialism ",
						"q1": "B. fascism",
						"q2": "C. capitalism",
						"q3": "D. totalitarianism ",
						"q4": "E. feudalism"
					},
					"ans": "C"
				},
				"Q54": {
					"qs": "54. Nigeria obtained her independence on a platter of gold because the",
					"opts": {
						"q0": "A. nationalists fought for gold.nationalist movements in Nigeria fought at war fronts before independence was granted.",
						"q1": "B. nationalist movements in Nigeria fought at war fronts before independence was granted.",
						"q2": "C. Nigerian nationalists did not fight any war before independence was granted.",
						"q3": "D. Nigerian nationalists used money to fight for independence",
						"q4": "E. British were forced to grant independence to Nigeria."
					},
					"ans": "C"
				},
				"Q55": {
					"qs": "55. All the following achievements are credited to the military administration in Nigeria except the",
					"opts": {
						"q0": "A. creation of states",
						"q1": "B. adoption of the indigenization policy.",
						"q2": "C. establishment of National Youth Service Corps.",
						"q3": "D. inauguration of the Operation Feed the Nation.",
						"q4": "E. introduction of the Green Revolution."
					},
					"ans": "E"
				},
				"Q56": {
					"qs": "56. Power can be defined as the",
					"opts": {
						"q0": "A. ability of the parliament to delegate to another body or person the right to make laws on its behalf.",
						"q1": "B. right to rule irrespective of oppositions to the ruler.",
						"q2": "C. capacity to compel or influence others to do what they would otherwise not do.",
						"q3": "D. capacity to encourage others to do what they had originally intended doing",
						"q4": "E. ability of the government to encourage communities to embark on seir- help projects."
					},
					"ans": "C"
				},
				"Q57": {
					"qs": "57. Political socialization means all the following except the process by which",
					"opts": {
						"q0": "A. artisans learn their trade.",
						"q1": "B. individuals learn howto participate in politics",
						"q2": "C. people through learning come to understand their duties in society.",
						"q3": "D. young men are introduced to party politics.",
						"q4": "E. individuals learn about the various forms of government."
					},
					"ans": "A"
				},
				"Q58": {
					"qs": "58. Public corporations are controlled by all the following except ",
					"opts": {
						"q0": "A. legislators",
						"q1": "B. judges",
						"q2": "C. tax-payers",
						"q3": "D. convicts",
						"q4": "E. ministers"
					},
					"ans": "D"
				},
				"Q59": {
					"qs": "59. Which of the following statements best describes Nigeria’s foreign policy between 1960 and 1966?",
					"opts": {
						"q0": "A. Cautious and relatively inactive",
						"q1": "B. Truly non-aligned",
						"q2": "C. Heavily dependent on eastern bloc countries",
						"q3": "D. Very active and prominent in West African sub-region",
						"q4": "E. Dynamic and active"
					},
					"ans": "A"
				},
				"Q60": {
					"qs": "60. Relations between Nigeria and British became somewhat strained during the civil war mainly because",
					"opts": {
						"q0": "A. British was reluctant to supply Nigeria with the arms she needed to prosecute the war.",
						"q1": "B. Britain accorded diplomatic recognition to “Biafra”.",
						"q2": "C. the soviet union supplied arms to Nigeria.",
						"q3": "D. British granted political asylum to some fugitives.",
						"q4": "E. some British mercenaries were fighting on the Biafran side."
					},
					"ans": "A"
				}
			}
		});
	});
	
	app.get('/maths/1988', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. Evaluate <img src='img/maths/q1a.jpg'>",
					"opts": {
						"q0": "A. 1",
						"q1": "B. 2.02",
						"q2": "C. 20.02",
						"q3": "D. 202",
						"q4": "E. 2020."
					},
					"ans": "D"
				},
				"Q2": {
					"qs": "2. Express the product of 0.06 and 0.09 in standard form",
					"opts": {
						"q0": "A. 5.4 x <img src='img/maths/10vm3.jpg'>",
						"q1": "B. 5.4 x<img src='img/maths/10v1.jpg'>",
						"q3": "D. 5.4 x <img src='img/maths/10v2.jpg'>",
						"q4": "E. 5.4 x <img src='img/maths/10v3.jpg'>"
					},
					"ans": "A"
				},
				"Q3": {
					"qs": "3. Simplify <img src='img/maths/q3a.jpg'>",
					"opts": {
						"q0": "A. 0",
						"q1": "B. 1/24",
						"q2": "C. 2/3",
						"q3": "D. <img src='img/maths/q3b.jpg'>",
						"q4": "E. <img src='img/maths/q3c.jpg'>"
					},
					"ans": "D"
				},
				"Q4": {
					"qs": "4. Find the 8th term of the A.P. -3,-1,1.....",
					"opts": {
						"q0": "A. 13",
						"q1": "B. 11",
						"q2": "C. -8",
						"q3": "D. -11",
						"q4": "E. -17."
					},
					"ans": "B"
				},
				"Q5": {
					"qs": "5. A group of students took a test and the following frequency table shows the scores: Find the mode",
			        "img": "img**math_1988_sectionb_qst4_1.jpg",
					"opts": {
						"q0": "A. 2",
						"q1": "B. 3",
						"q2": "C. 4",
						"q3": "D. 5",
						"q4": "E. 7."
					},
					"ans": "C"
				},
				"Q6": {
					"qs": "6. A group of students took a test and the following frequency table shows the scores:Find the mean score",
					"img": "img**math_1988_sectionb_qst4_1.jpg",
					"opts": {
						"q0": "A. 1.75",
						"q1": "B. 2",
						"q2": "C. 2.5",
						"q3": "D. 2.75",
						"q4": "E. 3."
					},
					"ans": "D"
				},
				"Q7": {
					"qs": "7. A group of students took a test and the following frequency table shows the scores:The median score is",
					"img": "img**math_1988_sectionb_qst4_1.jpg",
					"opts": {
						"q0": "A. 0",
						"q1": "B. 2.5",
						"q2": "C. 3",
						"q3": "D. 5",
						"q4": "E. 7."
					},
					"ans": "C"
				},
				"Q8": {
					"qs": "8. If Cos 60° = 1/2, which of the following angles has a Cos of 1/2?",
					"opts": {
						"q0": "A. 30°",
						"q1": "B. 120°",
						"q2": "C. 150°",
						"q3": "D. 210°",
						"q4": "E. 300°"
					},
					"ans": "E"
				},
				"Q9": {
					"qs": "9. In the diagram, find the ratio |PQ|/|PR|",
					"img": "img**math_1988_sectionb_qst9_1.jpg",
					"opts": {
						"q0": "A. 2/5",
						"q1": "B. 3/5",
						"q2": "C. 2/3",
						"q3": "D. 3/2",
						"q4": "E. 5/3."
					},
					"ans": "B"
				},
				"Q10": {
					"qs": "10. A ladder 9 m long against a vertical wall, making an angle of 64° with the horizontal ground. Calculate, correct to one decimal place, how far the foot of the ladder is from the wall.",
					"opts": {
						"q0": "A. 4.0 m",
						"q1": "B. 5.8 m",
						"q2": "C. 7.1 m",
						"q3": "D. 8.1 m",
						"q4": "E. 18.5 m"
					},
					"ans": "A"
				},
				"Q11": {
					"qs": "11. What is the difference in longitude between P (lat. 50°N. long. 50°W) and Q (lat. 50°N, long, 150°W)?",
					"opts": {
						"q0": "A. 300°",
						"q1": "B. 200°",
						"q2": "C. 130°",
						"q3": "D. 100°",
						"q4": "E. 30°."
					},
					"ans": "D"
				},
				"Q12": {
					"qs": "12. The number 186 047 was corrected to 186 000. Which of the following can correctly describe the degree of approximation made? I. to the nearest hundred II. to the nearest thousand III. to 3 significant figures IV. to 4 significant figures",
					"opts": {
						"q0": "A. I & III only",
						"q1": "B. I & IV only",
						"q2": "C. II & III only",
						"q3": "D. II & IV only",
						"q4": "E. All of them."
					},
					"ans": "C"
				},
				"Q13": {
					"qs": "13. Points P and Q are respectively 24 m north and 7m east of point R. Calculate [PQ] in metres",
					"opts": {
						"q0": "A. 20",
						"q1": "B. 24",
						"q2": "C. 25",
						"q3": "D. 31",
						"q4": "E. 84."
					},
					"ans": "C"
				},
				"Q14": {
					"qs": "14. Points P and Q are respectively 24 m north and 7 m east of point R. What is the bearing of Q from P to the nearest whole degree?",
					"opts": {
						"q0": "A. 16°",
						"q1": "B. 17°",
						"q2": "C. 73°",
						"q3": "D. 106°",
						"q4": "E. 164°."
					},
					"ans": "E"
				},
				"Q15": {
					"qs": "15. If Sin 0 = 3/5 find tan 0 for 0< <img src='img/maths/theta.jpg'> < 90°.",
					"opts": {
						"q0": "A. 4/5",
						"q1": "B. 3/4",
						"q2": "C. 5/8",
						"q3": "D. 1/2",
						"q4": "E. 3/8."
					},
					"ans": "B"
				},
				"Q16": {
					"qs": "16. Simplify <img src='img/maths/q16a.jpg'>",
					"opts": {
						"q0": "A. <img src='img/maths/q16b.jpg'>",
						"q1": "B. 6",
						"q2": "C. 9",
						"q3": "D. 18",
						"q4": "E. 81."
					},
					"ans": "C"
				},
				"Q17": {
					"qs": "17. A student is told to draw the graph of <img src='img/maths/q17a.jpg'>. He is then told to draw a linear graph on the same axis such that the intersection of the two graphs will give the solutions to the equation <img src='img/maths/q17b.jpg'>. What is the equation of the linear graph he needs to draw?",
					"opts": {
						"q0": "A. x = 1",
						"q1": "B. x = -1",
						"q2": "C. y = 1",
						"q3": "D. y = -1",
						"q4": "E. x + y = 1"
					},
					"ans": "C"
				},
				"Q18": {
					"qs": "18. Calculate the value of x in the diagram below",
					"img": "img**math_1988_sectionb_qst18_1.jpg",
					"opts": {
						"q0": "A. 18°",
						"q1": "B. 30°",
						"q2": "C. 40°",
						"q3": "D. 60°",
						"q4": "E. it cannot be determined."
					},
					"ans": "A"
				},
				"Q19": {
					"qs": "19. Find the quadratic equation whose roots are <img src='img/maths/q19a.jpg'> or <img src='img/maths/q19b.jpg'>",
					"opts": {
						"q0": "A. <img src='img/maths/q19c.jpg'>",
						"q1": "B. <img src='img/maths/q19d.jpg'>",
						"q2": "C. <img src='img/maths/q19e.jpg'>",
						"q3": "D. <img src='img/maths/q19f.jpg'>",
						"q4": "E. <img src='img/maths/q19g.jpg'>"
					},
					"ans": "D"
				},
				"Q20": {
					"qs": "20. A sales girl gave a change of N1.15 to a customer instead of N1.25. Calculate her percentage error.",
					"opts": {
						"q0": "A. 10 %",
						"q1": "B. 8.7 %",
						"q2": "C. 8.0 %",
						"q3": "D. 2.4 %",
						"q4": "E. 0.10 %"
					},
					"ans": "C"
				},
				"Q21": {
					"qs": "21.	What is the probability of having an odd number in a single toss of a fair die?",
					"opts": {
						"q0": "A. 1/6",
						"q1": "B. 1/3",
						"q2": "C. 1/2",
						"q3": "D. 2/3",
						"q4": "E. 5/6."
					},
					"ans": "C"
				},
				"Q22": {
					"qs": "22. A water tank is made with a right-angled trapezium-shaped vertical cross-section so that when it is placed on sloping ground the top of the tank is level. The dimensions are as given in the diagram below. If the tank is completely filled with water, how many cubic metres can it hold?",
					"img": "img**math_1988_sectionb_qst22_1.jpg",
					"opts": {
						"q0": "A. 66 <img src='img/maths/cm3.jpg'>",
						"q1": "B. 84 <img src='img/maths/cm3.jpg'>",
						"q2": "C. 132 <img src='img/maths/cm3.jpg'>",
						"q3": "D. 168 <img src='img/maths/cm3.jpg'>",
						"q4": "E. 264 <img src='img/maths/cm3.jpg'>"
					},
					"ans": "C"
				},
				"Q23": {
					"qs": "A water tank is made with a right-angled trapezium-shaped vertical cross-section so that when it is placed on sloping ground the top of the tank is level. The dimensions are as given in the diagram below. 23.	By what number will you multiply your answer in 22 above to determine the capacity of the tank in litres?",
					"img": "img**math_1988_sectionb_qst22_1.jpg",
					"opts": {
						"q0": "A. 1/10",
						"q1": "B. 1",
						"q2": "C. 10",
						"q3": "D. 100",
						"q4": "E. 1000."
					},
					"ans": "E"
				},
				"Q24": {
					"qs": "24. Evaluate <img src='img/maths/q24a.jpg'> without using logarithm tables.",
					"opts": {
						"q0": "A. 0",
						"q1": "B. 1",
						"q2": "C. 1.1738",
						"q3": "D. 1.3802",
						"q4": "E. 10."
					},
					"ans": "B"
				},
				"Q25": {
					"qs": "25. Find the roots of the equation <img src='img/maths/q25a.jpg'>",
					"opts": {
						"q0": "A. x = -2 or 1/2",
						"q1": "B. x = -2 or 1",
						"q2": "C. x = - 2 or 2",
						"q3": "D. x = -1 or 2",
						"q4": "E. x = -1/2 or 2."
					},
					"ans": "E"
				},
				"Q26": {
					"qs": "26. What value of k makes the given expression a * perfect square? <img src='img/maths/q26a.jpg'>",
					"opts": {
						"q0": "A. 2",
						"q1": "B. 4",
						"q2": "C. 8",
						"q3": "D. 16",
						"q4": "E. 64."
					},
					"ans": "D"
				},
				"Q27": {
					"qs": "27. If <img src='img/maths/q27a.jpg'>, what is q?",
					"opts": {
						"q0": "A. 5102",
						"q1": "B. 849.9",
						"q2": "C. 510.2",
						"q3": "D. 84.99",
						"q4": "E. 51.02."
					},
					"ans": "C"
				},
				"Q28": {
					"qs": "28. In the diagram below, O is the centre of the circle, <img src='img/maths/brac.jpg'>BOC is a diameter and <img src='img/maths/brac.jpg'>ADC is 37°. What is <img src='img/maths/brac.jpg'>ACB?",
					"img": "img**math_1988_sectionb_qst28_1.jpg",
					"opts": {
						"q0": "A. 14.7°",
						"q1": "B. 127°",
						"q2": "C. 65°",
						"q3": "D. 53°",
						"q4": "E. 37°."
					},
					"ans": "D"
				},
				"Q29": {
					"qs": "29. Factorize <img src='img/maths/q29a.jpg'>",
					"opts": {
						"q0": "A. (5y - a) (y + 3a)",
						"q1": "B. (5y + a) (y - 3a)",
						"q2": "C. 5y2 + a (2y - 3a)",
						"q3": "D. (y - a) (5y + 3a)",
						"q4": "E. (y + a) (5y-3a)."
					},
					"ans": "E"
				},
				"Q30": {
					"qs": "30. <img src='img/maths/cosx.jpg'> is negative and <img src='img/maths/sinx.jpg'> is negative. Which of the following is true of x?",
					"opts": {
						"q0": "A. 0°< x < 90°",
						"q1": "B. 90°< x < 180°",
						"q2": "C. 180°<x< 270°",
						"q3": "D. 270° < x <360°",
						"q4": "E. -90° < x < 90°."
					},
					"ans": "C"
				},
				"Q31": {
					"qs": "31. Simplify <img src='img/maths/q31a.jpg'> giving your answer correct to two significant figures.",
					"opts": {
						"q0": "A. 213.18",
						"q1": "B. 213.00",
						"q2": "C. 213",
						"q3": "D. 210",
						"q4": "E. 21."
					},
					"ans": "D"
				},
				"Q32": {
					"qs": "32. Which of the following is a correct method for constructing an angle of 60° at Q?",
					"img": "img**math_1988_sectionb_qst32_1.jpg",
					"opts": {
						"q0": "A. I only",
						"q1": "B. II only",
						"q2": "C. III only",
						"q3": "D. I and II only",
						"q4": "E. II and III only."
					},
					"ans": "B"
				},
				"Q33": {
					"qs": "33. If <img src='img/maths/q33a.jpg'>; what is a?",
					"opts": {
						"q0": "A. 0.4",
						"q1": "B. 40",
						"q2": "C. 400",
						"q3": "D. 1000",
						"q4": "E. 10000."
					},
					"ans": "E"
				},
				"Q34": {
					"qs": "34. The student measured the length of a room and obtained the measurement of 3.99 m. If the percentage error of his measurement was 5% and his own measurement was smaller than the length, what is the length of the room?",
					"opts": {
						"q0": "A. 3.78 m",
						"q1": "B. 3.80 m",
						"q2": "C. 4.18 m",
						"q3": "D. 4.20 m",
						"q4": "E. 4.788 m"
					},
					"ans": "D"
				},
				"Q35": {
					"qs": "35. When an aeroplane is 800 m above the ground, its angle of elevation from a point P on the ground is 30°. How far is the plane from P by line of sight?",
					"opts": {
						"q0": "A. 400 m",
						"q1": "B. 800 m",
						"q2": "C. 1500 m",
						"q3": "D. 1600 m",
						"q4": "E. 1700 m"
					},
					"ans": "D"
				},
				"Q36": {
					"qs": "36. In the diagram below, LK//PQ, reflex angle KLM = 241° and <strong><</strong>QPM = 89°. What is the value of <strong><</strong>LMP?",
					"img": "img**math_1988_sectionb_qst36_1.jpg",
					"opts": {
						"q0": "A. 30°",
						"q1": "B. 61°",
						"q2": "C. 89°",
						"q3": "D. 119°",
						"q4": "E. 150°."
					},
					"ans": "A"
				},
				"Q37": {
					"qs": "37. Abidjan is 4° west of Accra and on the same circle of latitude. If the radius of this circle of latitude is 6370 km, how far is Abidjan west of Accra, correct to the nearest kilometer? (Take <img src='img/maths/pi.jpg'>)",
					"opts": {
						"q0": "A. 222 km",
						"q1": "B. 445 km",
						"q2": "C. 890 km",
						"q3": "D. 5005 km",
						"q4": "E. 10010 km"
					},
					"ans": "B"
				},
				"Q38": {
					"qs": "38. Find the product xy if x, 3/2, 6/7, y are in G.P.",
					"opts": {
						"q0": "A. 24/49",
						"q1": "B. 4/7",
						"q2": "C. 9/7",
						"q3": "D. 7/4",
						"q4": "E. 21/8."
					},
					"ans": "C"
				},
				"Q39": {
					"qs": "39. Which of the regions P,Q,R,S and T satisfies the following inequalities: 0<y<1,y<x + 2, x<0",
					"img": "img**math_1988_sectionb_qst39_1.jpg",
					"opts": {
						"q0": "A. P",
						"q1": "B. Q",
						"q2": "C. R",
						"q3": "D. S",
						"q4": "E. T."
					},
					"ans": "E"
				},
				"Q40": {
					"qs": "40. A cone is made from a sector of a circle of radius 14cm and angle of 90°. What is the area of the curved surface of the cone? (Take <img src='img/maths/pi.jpg'>)",
					"opts": {
						"q0": "A. 22 <img src='img/maths/cm2.jpg'>",
						"q1": "B. 38.5 <img src='img/maths/cm2.jpg'>",
						"q2": "C. 77 <img src='img/maths/cm2.jpg'>",
						"q3": "D. 154 <img src='img/maths/cm2.jpg'>",
						"q4": "E. 308 <img src='img/maths/cm2.jpg'>"
					},
					"ans": "D"
				},
				"Q41": {
					"qs": "41.	In the diagram below, O is the centre of the circle through points L, M and N, if <strong><</strong>MLN = 74° and <strong><</strong>MNL = 39°, calculate <strong><</strong>LON.",
					"img": "img**math_1988_sectionb_qst41_1.jpg",
					"opts": {
						"q0": "A. 67°",
						"q1": "B. 100°",
						"q2": "C. 113°",
						"q3": "D. 126°",
						"q4": "E. 134°."
					},
					"ans": "E"
				},
				"Q42": {
					"qs": "42. A rope of length 18m is used to form a sector of a circle of radius 3.5 m, on a school playing field. What is the size of the angle of the sector, correct to the nearest degree?",
					"opts": {
						"q0": "A. 33°",
						"q1": "B. 40°",
						"q2": "C. 90°",
						"q3": "D. 180°",
						"q4": "E. 270°."
					},
					"ans": "D"
				},
				"Q43": {
					"qs": "43. In the diagram, PR is the perpendicular from P to QS, PQ = 2 cm, QR = 1 cm and PR = RS. What is the size of the <img src='img/maths/brac.jpg'>QPS?",
			        "img": "img**math_1988_sectionb_qst43_1.jpg",
					"opts": {
						"q0": "A. 135°",
						"q1": "B. 105°",
						"q2": "C. 90°",
						"q3": "D. 75°",
						"q4": "E. 60°."
					},
					"ans": "D"
				},
				"Q44": {
					"qs": "44. Cotonou and Niamey are on the same line of longitude and Niamey is 7° north of Cotonou. If the radius of the earth is 6400 km, how far is Niamey north of Cotonou along the line of longitude, correct to the nearest kilometer? (Take <img src='img/maths/pi.jpg'>)",
					"opts": {
						"q0": "A. 391 km",
						"q1": "B. 503 km",
						"q2": "C. 782 km",
						"q3": "D. 1006 km",
						"q4": "E. 2012 km"
					},
					"ans": "C"
				},
				"Q45": {
					"qs": "45.	If Q = (all perfect squares less than 30) and P = (all odd numbers form 1 to 10). Find <img src='img/maths/1988q45a.jpg'>.",
					"opts": {
						"q0": "A. (1,4,9,16,25)",
						"q1": "B. (1,3,4,5,7,9,16,25)",
						"q2": "C. (1,3,5,7,9)",
						"q3": "D. (1,9)",
						"q4": "E. 0"
					},
					"ans": "D"
				},
				"Q46": {
					"qs": "46. The histogram below shows the number of candidates, in thousands, obtaining given ranges of marks in a State Examination. Find the total number of candidates that sat for the examination",
					"img": "img**math_1988_sectionb_qst46_1.jpg",
					"opts": {
						"q0": "A. 80000",
						"q1": "B. 120000",
						"q2": "C. 250000",
						"q3": "D. 260000",
						"q4": "E. 270000."
					},
					"ans": "E"
				},
				"Q47": {
					"qs": "47. The histogram below shows the number of candidates, in thousands, obtaining given ranges of marks in a State Examination. How many candidates scored at most 30%?",
					"img": "img**math_1988_sectionb_qst46_1.jpg",
					"opts": {
						"q0": "A. 15000",
						"q1": "B. 20000",
						"q2": "C. 25000",
						"q3": "D. 35000",
						"q4": "E. 60000."
					},
					"ans": "D"
				},
				"Q48": {
					"qs": "48. The surnames of 40 children in a class arranged in alphabetical order. 16 of the surnames begin with O and 9 of the surnames begin with A, 14 of the letters of the alphabet do not appear as the first letter of a surnames. What is the probability that the surname of a child picked at random from the class begins with either O or A?",
					"opts": {
						"q0": "A. 5/8",
						"q1": "B. 7/8",
						"q2": "C. 9/16",
						"q3": "D. 14/25",
						"q4": "E. 39/40."
					},
					"ans": "A"
				},
				"Q49": {
					"qs": "49. The surnames of 40 children in a class arranged in alphabetical order. 16 of the surnames begin with O and 9 of the surnames begin with A, 14 of the letters of the alphabet do not appear as the first letter of a surnames. 49.	If more than one surnames begin with a letter besides A and O, how many surnames begin with that letter?",
					"opts": {
						"q0": "A. 2",
						"q1": "B. 3",
						"q2": "C. 4",
						"q3": "D. 5",
						"q4": "E. 6."
					},
					"ans": "E"
				},
				"Q50": {
					"qs": "50.	Let the universal set U be the set of integers, <img src='img/maths/q50a.jpg'>. Find the complement of the set <img src='img/maths/q50b.jpg'>",
					"opts": {
						"q0": "A. no options",
						"q1": "B. ",
						"q2": "C. ",
						"q3": "D. ",
						"q4": "E. "
					},
					"ans": "B but No Options"
				}
			}
		});
	});

	app.get('/maths/1989', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. If <img src='img/maths/1989q1a.jpg'>, what is a?",
					"opts": {
						"q0": "A. 4",
						"q1": "B. 6",
						"q2": "C. 8",
						"q3": "D. 16",
						"q4": "E. 32."
					},
					"ans": "C"
				},
				"Q2": {
					"qs": "2. If the second and fourth terms of a G.P. are 8 and 32 respectively, what is the sum of the first four terms?",
					"opts": {
						"q0": "A. 28",
						"q1": "B. 40",
						"q2": "C. 48",
						"q3": "D. 60",
						"q4": "E. 68."
					},
					"ans": "D"
				},
				"Q3": {
					"qs": "3. In the diagram, TPS is a straight line, PQRS is a parallelogram with base QR and height 8cm. |QR| = 6 cm and the area of triangle QST is 52 <img src='img/maths/cm2.jpg'>. Find the area of <img src='img/maths/brac.jpg'>QPT. ",
					"img": "img**math_1989_sectionb_qst3_1.jpg",
					"opts": {
						"q0": "A. 39 <img src='img/maths/cm2.jpg'>",
						"q1": "B. 28 <img src='img/maths/cm2.jpg'>",
						"q2": "C. 24 <img src='img/maths/cm2.jpg'>",
						"q3": "D. 21 <img src='img/maths/cm2.jpg'>",
						"q4": "E. 19 <img src='img/maths/cm2.jpg'>."
					},
					"ans": "B"
				},
				"Q4": {
					"qs": "4. Evaluate, using Logarithm Tables <img src='img/maths/1989q4a.jpg'>",
					"opts": {
						"q0": "A. 1.332",
						"q1": "B. 13.32",
						"q2": "C. 133.2",
						"q3": "D. 1332",
						"q4": "E. 13.320."
					},
					"ans": "C"
				},
				"Q5": {
					"qs": "5. In the diagram, O is the centre of the circle, if <img src='img/maths/brac.jpg'>QRS = 62°, find the value of <img src='img/maths/brac.jpg'>SQR.",
					"img": "img**math_1989_sectionb_qst5_1.jpg",
					"opts": {
						"q0": "A. 14°",
						"q1": "B. 28°",
						"q2": "C. 31°",
						"q3": "D. 45°",
						"q4": "E. 90°."
					},
					"ans": "B"
				},
				"Q6": {
					"qs": "6. Factorize <img src='img/maths/1989q6a.jpg'>",
					"opts": {
						"q0": "A. (35 - 2b) (b - 1)",
						"q1": "B. (7+b) (5-b)",
						"q2": "C. (3+7b) (5-b)",
						"q3": "D. (35-b) (3b+7)",
						"q4": "E. (7+b) (5+b)."
					},
					"ans": "B"
				},
				"Q7": {
					"qs": "7. The graph below is that of a quadratic function. <img src='img/maths/1989q7a.jpg'>. The roots of the equation are",
					"img": "img**math_1989_sectionb_qst7_1.jpg",
					"opts": {
						"q0": "A. 1.5,2",
						"q1": "B. -1 5,2",
						"q2": "C. 1,-6",
						"q3": "D. 1,6",
						"q4": "E. .-1,6."
					},
					"ans": "B"
				},
				"Q8": {
					"qs": "8. Find the minimum value of y.",
					"img": "img**math_1989_sectionb_qst7_1.jpg",
					"opts": {
						"q0": "A. y = 2",
						"q1": "B. y = 0",
						"q2": "C. y = 1.5",
						"q3": "D. y = -6",
						"q4": "E. y =-8."
					},
					"ans": "D"
				},
				"Q9": {
					"qs": "9. P and Q are two places on the same circle of latitude 79°S. P is on longitude 68°E while Q is on longitude 22°W. The angular distance between P and Q is",
					"opts": {
						"q0": "A. 12°",
						"q1": "B. 45°",
						"q2": "C. 48°",
						"q3": "D. 90°",
						"q4": "E. 92°."
					},
					"ans": "D"
				},
				"Q10": {
					"qs": "10. Evaluate <img src='img/maths/1989q10a.jpg'>, leaving your answer in standard form.",
					"opts": {
						"q0": "A. 7.5 x <img src='img/maths/10v2.jpg'>",
						"q1": "B. 7.5 x <img src='img/maths/10v1.jpg'>",
						"q2": "C. 7.5 x <img src='img/maths/10vm1.jpg'>",
						"q3": "D. 7.5 x <img src='img/maths/10vm2.jpg'>",
						"q4": "E. 7.5 x <img src='img/maths/10vm3.jpg'>"
					},
					"ans": "C"
				},
				"Q11": {
					"qs": "11. Factorize the following expression; <img src='img/maths/1989q11a.jpg'>",
					"opts": {
						"q0": "A. (2x + 5) (x - 3)",
						"q1": "B. (2x - 5) (x + 3)",
						"q2": "C. (2x- 5) (x - 3)",
						"q3": "D. (2x - 3) (x + 5)",
						"q4": "E. (2x + 5) (x+3)"
					},
					"ans": "B"
				},
				"Q12": {
					"qs": "12. The angle of elevation of X from Y is 30°. If XY = 40 m, how high is X above the level of Y?",
					"opts": {
						"q0": "A. 10 m",
						"q1": "B. 20 m",
						"q2": "C. <img src='img/maths/1989q12a.jpg'> m",
						"q3": "D. 40 m",
						"q4": "E. 50 m"
					},
					"ans": "B"
				},
				"Q13": {
					"qs": "13. Instead of recording the number 1.23 cm of the radius of a tube, a student recorded 1.32 cm. Find the percentage error, correct to one decimal place.",
					"opts": {
						"q0": "A. 6.8 %",
						"q1": "B. 7.3 %",
						"q2": "C. 9.6 %",
						"q3": "D. 14 4 %",
						"q4": "E. 15.4 %"
					},
					"ans": "B"
				},
				"Q14": {
					"qs": "14. In the diagram below, <img src='img/maths/brac.jpg'>SPR = P and <img src='img/maths/brac.jpg'>SQR = 2x. Find x in terms of p.",
					"img": "img**math_1989_sectionb_qst14_1.jpg",
					"opts": {
						"q0": "A. x = p + 2",
						"q1": "B. x = p - 2",
						"q2": "C. <img src='img/maths/1989q14a.jpg'>",
						"q3": "D. <img src='img/maths/1989q14b.jpg'>",
						"q4": "E. x = 2p"
					},
					"ans": "D"
				},
				"Q15": {
					"qs": "15. In the diagram ABDE and FCDE are parallelograms. If |FC| = 12.2 cm and the height |PC| = 4.0 cm, calculate the area of parallelogram ABDE.",
					"img": "img**math_1989_sectionb_qst15_1.jpg",
					"opts": {
						"q0": "A. 3.05 <img src='img/maths/cm2.jpg'>",
						"q1": "B. 8.20 <img src='img/maths/cm2.jpg'>",
						"q2": "C. 16.20 <img src='img/maths/cm2.jpg'>",
						"q3": "D. 24.40 <img src='img/maths/cm2.jpg'>",
						"q4": "E. 48.80 <img src='img/maths/cm2.jpg'>"
					},
					"ans": "E"
				},
				"Q16": {
					"qs": "16. Using the graph above, 1f 0°< x < 60°, what is the value of x for which sin x = cos x?",
					"img": "img**math_1989_sectionb_qst16_1.jpg",
					"opts": {
						"q0": "A. 0°",
						"q1": "B. 20°",
						"q2": "C. 30°",
						"q3": "D. 45°",
						"q4": "E. 50°."
					},
					"ans": "D"
				},
				"Q17": {
					"qs": "17. The Venn diagram below shows the number of students who studied Physics, Chemistry, and Mathematics in a certian school. How many students took at least two of the three subjects?",
					"img": "img**math_1989_sectionb_qst17_1.jpg",
					"opts": {
						"q0": "A. 165",
						"q1": "B. 160",
						"q2": "C. 155",
						"q3": "D. 135",
						"q4": "E. 85."
					},
					"ans": "B"
				},
				"Q18": {
					"qs": "18. An arc of a circle radius 7cm is 14cm long. What angle does the arc subtend at the centre of circle? (Take <img src='img/maths/pi.jpg'>)",
					"opts": {
						"q0": "A. 25.7°",
						"q1": "B. 44°",
						"q2": "C. 51.43°",
						"q3": "D. 98°",
						"q4": "E. 114.55°."
					},
					"ans": "E"
				},
				"Q19": {
					"qs": "19. If G times a certain integer is subtracted from twice the square of the integer, the result is 63. Find the integer.",
					"opts": {
						"q0": "A. 21",
						"q1": "B. 9",
						"q2": "C. 7",
						"q3": "D. 4",
						"q4": "E. 3."
					},
					"ans": "C"
				},
				"Q20": {
					"qs": "20. If 3y = 243, find the value of y.",
					"opts": {
						"q0": "A. 2",
						"q1": "B. 3",
						"q2": "C. 4",
						"q3": "D. 5",
						"q4": "E. 6"
					},
					"ans": "D"
				},
				"Q21": {
					"qs": "21. Points X and Y are respectively 20 km North and 9 km East of a point O. What is the bearing of Y from X? Correct to the nearest degree.",
					"opts": {
						"q0": "A. 024°",
						"q1": "B. 114°",
						"q2": "C. 156°",
						"q3": "D. 204°",
						"q4": "E. 336°"
					},
					"ans": "C"
				},
				"Q22": {
					"qs": "22. In the diagram below, O is the centre of the circle. Calculate the length of the chord AB if |OA| = 5 cm, |OD| = 3 cm and <img src='img/maths/brac.jpg'>AOD = <img src='img/maths/brac.jpg'>BOD.",
					"opts": {
						"q0": "A. 3 cm",
						"q1": "B. 4 cm",
						"q2": "C. 5 cm",
						"q3": "D. 8 cm",
						"q4": "E. 15 cm"
					},
					"ans": "D"
				},
				"Q23": {
					"qs": "23. Calculate the surface area of a hollow cylinder which is closed at one end, if the base radius is 3.5 cm and the height 8 cm. (Take <img src='img/maths/pi.jpg'>)",
					"opts": {
						"q0": "A. 126.5 <img src='img/maths/cm2.jpg'>",
						"q1": "B. 165 <img src='img/maths/cm2.jpg'>",
						"q2": "C. 176 <img src='img/maths/cm2.jpg'>",
						"q3": "D. 214.5 <img src='img/maths/cm2.jpg'>",
						"q4": "E. 253.5 <img src='img/maths/cm2.jpg'>"
					},
					"ans": "D"
				},
				"Q24": {
					"qs": "24. Solve the following equation: <img src='img/maths/1989q24a.jpg'>",
					"opts": {
						"q0": "A. <img src='img/maths/1989q24b.jpg'>",
						"q1": "B. <img src='img/maths/1989q24c.jpg'>",
						"q2": "C. <img src='img/maths/1989q24d.jpg'>",
						"q3": "D. <img src='img/maths/1989q24e.jpg'>",
						"q4": "E. <img src='img/maths/1989q24f.jpg'>"
					},
					"ans": "C"
				},
				"Q25": {
					"qs": "25. Use the pie chart below, which shows the distribution of the population of a village, for Questions 25 and 26. What angle represents grown up girls? Correct to 1 decimal place.",
					"img": "img**math_1989_sectionb_qst25_1.jpg",
					"opts": {
						"q0": "A. 37.5°",
						"q1": "B. 26.7°",
						"q2": "C. 25.7°",
						"q3": "D. 20°",
						"q4": "E. 3.75°."
					},
					"ans": "B"
				},
				"Q26": {
					"qs": "26. What percentage of the population are married? Correct to 1 decimal place.",
					"img": "img**math_1989_sectionb_qst25_1.jpg",
					"opts": {
						"q0": "A. 14.8%",
						"q1": "B. 20.4%",
						"q2": "C. 30.5%",
						"q3": "D. 35.2%",
						"q4": "E. 36.5%."
					},
					"ans": "D"
				},
				"Q27": {
					"qs": "27. If A = (a,b,c), B = (a,b,c,d,e) and C = (a,b,c,d,e,f). Find <img src='img/maths/1989q27a.jpg'>",
					"opts": {
						"q0": "A. (a,b,c,d)",
						"q1": "B. (a,b,c,d,e)",
						"q2": "C. (a,b,c,d,e,f)",
						"q3": "D. (a,b,c)",
						"q4": "E. <img src='img/maths/1989q27b.jpg'>"
					},
					"ans": "B"
				},
				"Q28": {
					"qs": "28. For a class of 30 students, the scores in a Mathematics test out	of	10	marks were as follows: What is the mode of the scores?",
					"img": "img**math_1989_sectionb_qst28_1.jpg",
					"opts": {
						"q0": "A. 3",
						"q1": "B. 4",
						"q2": "C. 5",
						"q3": "D. 6",
						"q4": "E. 7"
					},
					"ans": "E"
				},
				"Q29": {
					"qs": "29. For a class of 30 students, the scores in a Mathematics test out	of	10	marks were as follows: What is the median score?",
					"img": "img**math_1989_sectionb_qst28_1.jpg",
					"opts": {
						"q0": "A. 3",
						"q1": "B. 4",
						"q2": "C. 5",
						"q3": "D. 6",
						"q4": "E. 7"
					},
					"ans": "C"
				},
				"Q30": {
					"qs": "30. For a class of 30 students, the scores in a Mathematics test out	of 10 marks were as follows: What is the range of the distribution?",
					"img": "img**math_1989_sectionb_qst28_1.jpg",
					"opts": {
						"q0": "A. 2",
						"q1": "B. 7",
						"q2": "C. 8",
						"q3": "D. 9",
						"q4": "E. 10"
					},
					"ans": "B"
				},
				"Q31": {
					"qs": "31.	In the diagram below, O is the centre of the circle. If <img src='img/maths/brac.jpg'>PAQ = 75°, what is the value of <img src='img/maths/brac.jpg'>PBQ?",
					"img": "img**math_1989_sectionb_qst31_1.jpg",
					"opts": {
						"q0": "A. 15°",
						"q1": "B. 75°",
						"q2": "C. 105°",
						"q3": "D. 150°",
						"q4": "E. 210°"
					},
					"ans": "C"
				},
				"Q32": {
					"qs": "32. Simplify: <img src='img/maths/1989q32a.jpg'>",
					"opts": {
						"q0": "A. 1",
						"q1": "B. 1/2",
						"q2": "C. 1/9",
						"q3": "D. 1/18",
						"q4": "E. 1/27."
					},
					"ans": "E"
				},
				"Q33": {
					"qs": "33. In the diagram below, what is the size of angle ACB?",
					"img": "img**math_1989_sectionb_qst33_1.jpg",
					"opts": {
						"q0": "A. 40°",
						"q1": "B. 50°",
						"q2": "C. 60°",
						"q3": "D. 80°",
						"q4": "E. 100°."
					},
					"ans": "C"
				},
				"Q34": {
					"qs": "34. With reference to the graph, which of the following solution sets is represented by <img src='img/maths/brac.jpg'>OPQ?",
					"img": "img**math_1989_sectionb_qst34_1.jpg",
					"opts": {
						"q0": "A. <img src='img/maths/1989q34a.jpg'>",
						"q1": "B. <img src='img/maths/1989q34b.jpg'>",
						"q2": "C. <img src='img/maths/1989q34c.jpg'>",
						"q3": "D. <img src='img/maths/1989q34d.jpg'>",
						"q4": "E. <img src='img/maths/1989q34e.jpg'>"
					},
					"ans": "B"
				},
				"Q35": {
					"qs": "35. Find the volume of a cone of radius 3.5 cm and vertical height 12 cm. (Take <img src='img/maths/pi.jpg'>)",
					"opts": {
						"q0": "A. 3.4 <img src='img/maths/cm3.jpg'>",
						"q1": "B. 15.5 <img src='img/maths/cm3.jpg'>",
						"q2": "C. 21.0 <img src='img/maths/cm3.jpg'>",
						"q3": "D. 42.0 <img src='img/maths/cm3.jpg'>",
						"q4": "E. 154.0 <img src='img/maths/cm3.jpg'>."
					},
					"ans": "E"
				},
				"Q36": {
					"qs": "36. The table below gives the scores of a group of students in an English Language test If a student is chosen at random from the group, what is the probability that he scored at least 6 marks?",
					"img": "img**math_1989_sectionb_qst36_1.jpg",
					"opts": {
						"q0": "A. 3/20",
						"q1": "B. 1/5",
						"q2": "C. 1/4",
						"q3": "D. 3/10",
						"q4": "E. 3/4."
					},
					"ans": "C"
				},
				"Q37": {
					"qs": "37. The angle of a sector of a circle of diameter 8 cm is 135°. Find the area of the sector. (Take <img src='img/maths/pi.jpg'>).",
					"opts": {
						"q0": "A. 9 3/7 <img src='img/maths/cm2.jpg'>",
						"q1": "B. 12 4/7 <img src='img/maths/cm2.jpg'> ",
						"q2": "C. 18 5/7 <img src='img/maths/cm2.jpg'>",
						"q3": "D. 25 1/7 <img src='img/maths/cm2.jpg'>",
						"q4": "E. 31 3/7 <img src='img/maths/cm2.jpg'>"
					},
					"ans": "C"
				},
				"Q38": {
					"qs": "38. In the diagram above, O is the centre of the circle QRT and PT is a tangent to the circle at T. Calculate the angle X.",
					"img": "img**math_1989_sectionb_qst38_1.jpg",
					"opts": {
						"q0": "A. 55°",
						"q1": "B. 40°",
						"q2": "C. 35°",
						"q3": "D. 25°",
						"q4": "E. 20°."
					},
					"ans": "E"
				},
				"Q39": {
					"qs": "39. Which of the following gives the point of intersection of the graphs <img src='img/maths/1989q39a.jpg'> and <img src='img/maths/1989q39b.jpg'> shown?",
					"img": "img**math_1989_sectionb_qst39_1.jpg",
					"opts": {
						"q0": "A. (0,6) (3,9)",
						"q1": "B. (-3,0) (2,4)",
						"q2": "C. (-2,4) (3,9)",
						"q3": "D. (-2,3) (-3,2)",
						"q4": "E. (-2,2) (3,6)"
					},
					"ans": "C"
				},
				"Q40": {
					"qs": "40. A sector is cut off from a circle radius 8.2 cm to form a cone, if the radius of the resulting cone is 3.5 cm, calculate the curved surface area of the cone. (Take <img src='img/maths/pi.jpg'>)",
					"opts": {
						"q0": "A. 11.25 <img src='img/maths/cm2.jpg'>",
						"q1": "B. 12.83 <img src='img/maths/cm2.jpg'>",
						"q2": "C. 22.0 <img src='img/maths/cm2.jpg'>",
						"q3": "D. 67.2 <img src='img/maths/cm2.jpg'>",
						"q4": "E. 90.2 <img src='img/maths/cm2.jpg'>"
					},
					"ans": "E"
				},
				"Q41": {
					"qs": "41. If <img src='img/maths/1989q41a.jpg'>, express x in terms of a and p.",
					"opts": {
						"q0": "A. x = u + p",
						"q1": "B. x = a / p",
						"q2": "C. x = p",
						"q3": "D. x = ap",
						"q4": "E. x = ap"
					},
					"ans": "E"
				},
				"Q42": {
					"qs": "42. Calculate, correct to three significant figures, the length of an arc subtends an angle of 70° at the centre of the circle radius 4 cm. (Take <img src='img/maths/pi.jpg'>)",
					"opts": {
						"q0": "A. 2.44 cm",
						"q1": "B. 4.89 cm",
						"q2": "C. 9.78 cm",
						"q3": "D. 25.1 cm",
						"q4": "E. 50.3 cm"
					},
					"ans": "B"
				},
				"Q43": {
					"qs": "43. In the diagram below, O is the centre of the circle. If <img src='img/maths/brac.jpg'>POR = 114°, calculate <img src='img/maths/brac.jpg'>PQR.",
					"img": "img**math_1989_sectionb_qst43_1.jpg",
					"opts": {
						"q0": "A. 123°",
						"q1": "B. 118.5°",
						"q2": "C. 117°",
						"q3": "D. 114°",
						"q4": "E. 54°"
					},
					"ans": "A"
				},
				"Q44": {
					"qs": "44. The angle of depression of a point on the ground from the top of a building is 20.3°. If the distance from the point to the foot of the building is 40 m, calculate the height of the building, correct to one decimal place.",
					"opts": {
						"q0": "A. 37.5 m",
						"q1": "B. 28.1 m",
						"q2": "C. 27.8 m",
						"q3": "D. 14.8 m",
						"q4": "E. 13.9 m"
					},
					"ans": "D"
				},
				"Q45": {
					"qs": "45. Solve for x: <img src='img/maths/1989q45a.jpg'>",
					"opts": {
						"q0": "A. -6,-4",
						"q1": "B. 6,-4",
						"q2": "C. 6,4",
						"q3": "D. -6,4",
						"q4": "E. 5,5"
					},
					"ans": "D"
				},
				"Q46": {
					"qs": "46. Given that log <img src='img/maths/1989q46a.jpg'>, which of the following expresses p in terms of x and q?",
					"opts": {
						"q0": "A. p = 5xq",
						"q1": "B. p = 6xq",
						"q2": "C. <img src='img/maths/1989q46b.jpg'>",
						"q3": "D. <img src='img/maths/1989q46d.jpg'>",
						"q4": "E. <img src='img/maths/1989q46c.jpg'>"
					},
					"ans": "E"
				},
				"Q47": {
					"qs": "47. If <img src='img/maths/1989q47a.jpg'> and <img src='img/maths/1989q47b.jpg'>, what is the value of <img src='img/maths/theta.jpg'> ?",
					"opts": {
						"q0": "A. 30°",
						"q1": "B. 60°",
						"q2": "C. 90°",
						"q3": "D. 120°",
						"q4": "E. 150°"
					},
					"ans": "E"
				},
				"Q48": {
					"qs": "48. What is the probability that 3 customers waiting in a bank will be served in the sequence of their arrival at the bank.",
					"opts": {
						"q0": "A. 1/6",
						"q1": "B. 1/3",
						"q2": "C. 1/2",
						"q3": "D. 2/3",
						"q4": "E. 5/6."
					},
					"ans": "A"
				},
				"Q49": {
					"qs": "49. In the diagram, O is the centre of the circle. If <img src='img/maths/brac.jpg'>POQ = 80° and <img src='img/maths/brac.jpg'>PRQ = 5x, find the value of x.",
			        "img": "img**math_1989_sectionb_qst49_1.jpg",
					"opts": {
						"q0": "A. 4°",
						"q1": "B. 8°",
						"q2": "C. 16°",
						"q3": "D. 20°",
						"q4": "E. 32°"
					},
					"ans": "B"
				},
				"Q50": {
					"qs": "50. In an A.P, the first term is 2, and the sum of the 1st and 6th terms is 16.5. What is the 4th term?",
					"opts": {
						"q0": "A. 12",
						"q1": "B. 9.5",
						"q2": "C. 8",
						"q3": "D. 7",
						"q4": "E. 5.5"
					},
					"ans": "B"
				}
			}
		});
	});

	app.get('/maths/1990', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. Simplify: <img src='img/maths/1990q1a.jpg'>",
					"opts": {
						"q0": "A. 350",
						"q1": "B. 35",
						"q2": "C. 1/35",
						"q3": "D. 1/350",
						"q4": "E. 0"
					},
					"ans": "C"
				},
				"Q2": {
					"qs": "2. What is x ?, <img src='img/maths/1990q2a.jpg'>",
					"opts": {
						"q0": "A. 1",
						"q1": "B. 1.5",
						"q2": "C. 4.5",
						"q3": "D. 18",
						"q4": "E. 40.5"
					},
					"ans": "B"
				},
				"Q3": {
					"qs": "3. Express 0.00562 in standard form",
					"opts": {
						"q0": "A. <img src='img/maths/1990q3a.jpg'>",
						"q1": "B. <img src='img/maths/1990q3b.jpg'>",
						"q2": "C. <img src='img/maths/1990q3c.jpg'>",
						"q3": "D. <img src='img/maths/1990q3d.jpg'>",
						"q4": "E. <img src='img/maths/1990q3e.jpg'>"
					},
					"ans": "A"
				},
				"Q4": {
					"qs": "4. Given that, <img src='img/maths/1990q4a.jpg'>, find the value of P.",
					"opts": {
						"q0": "A. 1/10",
						"q1": "B. 3",
						"q2": "C. 10",
						"q3": "D. 100",
						"q4": "E. 1000"
					},
					"ans": "E"
				},
				"Q5": {
					"qs": "5. Simplify: <img src='img/maths/1990q5a.jpg'>",
					"opts": {
						"q0": "A. <img src='img/maths/1990q5b.jpg'>",
						"q1": "B. <img src='img/maths/1990q5c.jpg'>",
						"q2": "C. <img src='img/maths/1990q5d.jpg'>",
						"q3": "D. <img src='img/maths/1990q5e.jpg'>",
						"q4": "E. <img src='img/maths/1990q5f.jpg'>"
					},
					"ans": "B"
				},
				"Q6": {
					"qs": "6. Evaluate, using logarithm table, <img src='img/maths/1990q6a.jpg'>",
					"opts": {
						"q0": "A. 1.6258",
						"q1": "B. 0.6272",
						"q2": "C. 0.6258",
						"q3": "D. 1.6258",
						"q4": "E. 1.6272"
					},
					"ans": "D"
				},
				"Q7": {
					"qs": "7. If log x = 2.3675 and log y = 0.9750, what is the value of x + y ? Correct to three significant figures.",
					"opts": {
						"q0": "A. 1.18",
						"q1": "B. 1.31",
						"q2": "C. 9.03",
						"q3": "D. 9.44",
						"q4": "E. 9.46"
					},
					"ans": "E"
				},
				"Q8": {
					"qs": "8. While doing his Physics practicals, Idowu recorded a reading as 1.12 cm instead of 1.21 cm. Calculate his percentage error. ",
					"opts": {
						"q0": "A. 1.17 %",
						"q1": "B. 6.38 %",
						"q2": "C. 7.44 %",
						"q3": "D. 8.05 %",
						"q4": "E. 9.00 %"
					},
					"ans": "C"
				},
				"Q9": {
					"qs": "9. Find the 4th term of an A.P. whose first term is 2 and the common difference is 0.5.",
					"opts": {
						"q0": "A. 0.5",
						"q1": "B. 2.5",
						"q2": "C. 3.5",
						"q3": "D. 4",
						"q4": "E. 4.5"
					},
					"ans": "C"
				},
				"Q10": {
					"qs": "10. From the graph, determine the roots of the equation <img src='img/maths/1990q10a.jpg'>",
					"img": "img**math_1990_sectionb_qst10_1.jpg",
					"opts": {
						"q0": "A. -3,4",
						"q1": "B. -2,-6",
						"q2": "C. -2,1.5",
						"q3": "D. -1,1",
						"q4": "E. 2,1.5"
					},
					"ans": "C"
				},
				"Q11": {
					"qs": "11. Find the values of x for which y = 5",
					"opts": {
						"q0": "A. -2.5, 2.0",
						"q1": "B. -2.6, 2.1",
						"q2": "C. -2.0, 1.5",
						"q3": "D. -2.0, 2.0",
						"q4": "E. 0,0"
					},
					"ans": "B"
				},
				"Q12": {
					"qs": "12. An arc of length 22 cm subtends an angle of 0 at the centre of the circle. What is the value of 0 if the radius of the circle is 15 cm ? (Take <img src='img/maths/pi.jpg'>)",
					"opts": {
						"q0": "A. 70°",
						"q1": "B. 84°",
						"q2": "C. 96°",
						"q3": "D. 156°",
						"q4": "E. 168°"
					},
					"ans": "B"
				},
				"Q13": {
					"qs": "13. Find the sum of the first five terms of the G. P. 2, 6, 18........",
					"opts": {
						"q0": "A. 484",
						"q1": "B. 243",
						"q2": "C. 242",
						"q3": "D. 130",
						"q4": "E. 121"
					},
					"ans": "C"
				},
				"Q14": {
					"qs": "14. Let J be the set positive intergers. If <img src='img/maths/1990q14a.jpg'> <img src='img/maths/1990q14b.jpg'> and <img src='img/maths/1990q14c.jpg'>, then ",
					"opts": {
						"q0": "A. H = (1)",
						"q1": "B. H is an infinite set",
						"q2": "C. H = (0,1,2)",
						"q3": "D. H ()",
						"q4": "E. J<H"
					},
					"ans": "A"
				},
				"Q15": {
					"qs": "15. In a class of 80 students, every student had to study Economics or Geography, or both Economics and Geography. If 65 students studied Economics and 50 studied Geography, how many studied both subjects?",
					"opts": {
						"q0": "A. 15",
						"q1": "B. 30",
						"q2": "C. 35",
						"q3": "D. 45",
						"q4": "E. 50."
					},
					"ans": "C"
				},
				"Q16": {
					"qs": "16. The area shaded with horizontal lines is the solution set of the inequalities:",
					"img": "img**math_1990_sectionb_qst16_1.jpg",
					"opts": {
						"q0": "A. <img src='img/maths/1990q16a.jpg'>",
						"q1": "B. <img src='img/maths/1990q16b.jpg'>",
						"q2": "C. <img src='img/maths/1990q16c.jpg'>",
						"q3": "D. <img src='img/maths/1990q16d.jpg'>",
						"q4": "E. <img src='img/maths/1990q16e.jpg'>"
					},
					"ans": "B"
				},
				"Q17": {
					"qs": "17. The area shaded with vertical lines is the solution set of the inequalities:",
					"img": "img**math_1990_sectionb_qst16_1.jpg",
					"opts": {
						"q0": "A. <img src='img/maths/1990q17a.jpg'>",
						"q1": "B. <img src='img/maths/1990q17b.jpg'>",
						"q2": "C. <img src='img/maths/1990q17c.jpg'>",
						"q3": "D. <img src='img/maths/1990q17d.jpg'>",
						"q4": "E. <img src='img/maths/1990q17e.jpg'>"
					},
					"ans": "C"
				},
				"Q18": {
					"qs": "18. In the diagram below, O is the centre of the circle with radius 10 cm, and ABC = 30°. Calculate, correct to 1 decimal place, the length of arc AC. (Take <img src='img/maths/pi.jpg'>)",
					"img": "img**math_1990_sectionb_qst18_1.jpg",
					"opts": {
						"q0": "A. 5.2 cm",
						"q1": "B. 10.5 cm",
						"q2": "C. 13.2 cm",
						"q3": "D. 20.6 cm",
						"q4": "E. 31.4 cm"
					},
					"ans": "B"
				},
				"Q19": {
					"qs": "19. Factorize <img src='img/maths/1990q19a.jpg'>",
					"opts": {
						"q0": "A. (x - 4)(x + 48)",
						"q1": "B. (x-48)(x + 4)",
						"q2": "C. (x- 12)(x+ 16)",
						"q3": "D. (x -12)(x - 16)",
						"q4": "E. (x+ 12)(x + 16)"
					},
					"ans": "C"
				},
				"Q20": {
					"qs": "20. Factorize <img src='img/maths/1990q20a.jpg'>",
					"opts": {
						"q0": "A. (2e - 1)(e - 1)",
						"q1": "B. (e + 1)(2e+ 1)",
						"q2": "C. (2e + 3)(e - 2)",
						"q3": "D. (2e-3)(e- 1)",
						"q4": "E. (e2 - 3(2e - 1)"
					},
					"ans": "A"
				},
				"Q21": {
					"qs": "21. Solve the equation <img src='img/maths/1990q21a.jpg'>",
					"opts": {
						"q0": "A. y = 3 or 7",
						"q1": "B. y = 0 or 7",
						"q2": "C. y = 0 or 3/7",
						"q3": "D. y = 0 or 9",
						"q4": "E. y = 0 or 10"
					},
					"ans": "C"
				},
				"Q22": {
					"qs": "22. Locate the points where <img src='img/maths/1990q22a.jpg'> intersects <img src='img/maths/1990q22b.jpg'>",
					"img": "img**math_1990_sectionb_qst22_1.jpg",
					"opts": {
						"q0": "A. (0,1), (0,2)",
						"q1": "B. (0,2), (0,3)",
						"q2": "C. (0,3), (0,4)",
						"q3": "D. (3,0)(0,-3)",
						"q4": "E. (-3,0)(0,3)"
					},
					"ans": "D"
				},
				"Q23": {
					"qs": "23. Find the value of m which makes <img src='img/maths/1990q23a.jpg'>  a perfect square.",
					"opts": {
						"q0": "A. 2",
						"q1": "B. 4",
						"q2": "C. 8",
						"q3": "D. 12",
						"q4": "E. 16"
					},
					"ans": "E"
				},
				"Q24": {
					"qs": "24. Solve the equation <img src='img/maths/1990q24a.jpg'>",
					"opts": {
						"q0": "A. 3/2, 9",
						"q1": "B. -2/3, 9",
						"q2": "C. 3, 9/2",
						"q3": "D. -3, -9/2",
						"q4": "E. -3, 9/2"
					},
					"ans": "E"
				},
				"Q25": {
					"qs": "25. A sector of a circle of radius 7 cm has an area of 44 <img src='img/maths/cm2.jpg'>. Calculate the angle of the sector, correct to the nearest degree. (Take <img src='img/maths/pi.jpg'>)",
					"opts": {
						"q0": "A. 6°",
						"q1": "B. 26°",
						"q2": "C. 52°",
						"q3": "D. 103°",
						"q4": "E. 206°"
					},
					"ans": "D"
				},
				"Q26": {
					"qs": "26. Calculate the surface area of a sphere of radius 7 cm. (Take <img src='img/maths/pi.jpg'>)",
					"opts": {
						"q0": "A. 86 <img src='img/maths/cm2.jpg'>",
						"q1": "B. 154 <img src='img/maths/cm2.jpg'>",
						"q2": "C. 616 <img src='img/maths/cm2.jpg'>",
						"q3": "D. 1434 <img src='img/maths/cm2.jpg'>",
						"q4": "E. 4312 <img src='img/maths/cm2.jpg'>"
					},
					"ans": "C"
				},
				"Q27": {
					"qs": "27. If the radius of the parallel of latitude 30°N is equal to the radius of the parallel of latitude <img src='img/maths/theta.jpg'>°S, what is the value of <img src='img/maths/theta.jpg'> ?",
					"opts": {
						"q0": "A. 75°",
						"q1": "B. 60°",
						"q2": "C. 45°",
						"q3": "D. 30°",
						"q4": "E. 0°"
					},
					"ans": "D"
				},
				"Q28": {
					"qs": "28. A cylindrical container closed at both ends, has a radius of 7 cm and height 5 cm. Find the total surface area of the container.",
					"opts": {
						"q0": "A. 35 <img src='img/maths/cm3.jpg'>",
						"q1": "B. 154 <img src='img/maths/cm3.jpg'>",
						"q2": "C. 220 <img src='img/maths/cm3.jpg'>",
						"q3": "D. 528 <img src='img/maths/cm3.jpg'>",
						"q4": "E. 770 <img src='img/maths/cm3.jpg'>"
					},
					"ans": "D"
				},
				"Q29": {
					"qs": "29. A cylindrical container closed at both ends, has a radius of 7 cm and height 5 cm. What is the volume of the container?",
					"opts": {
						"q0": "A. 35 <img src='img/maths/cm3.jpg'>",
						"q1": "B. 154 <img src='img/maths/cm3.jpg'>",
						"q2": "C. 220 <img src='img/maths/cm3.jpg'>",
						"q3": "D. 528 <img src='img/maths/cm3.jpg'>",
						"q4": "E. 770 <img src='img/maths/cm3.jpg'>"
					},
					"ans": "E"
				},
				"Q30": {
					"qs": "30. In the diagram below, |PQ| = |PR| = |RS| and RPS = 32°. Find the value of angle QPR.",
					"img": "img**math_1990_sectionb_qst30_1.jpg",
					"opts": {
						"q0": "A. 72°",
						"q1": "B. 64°",
						"q2": "C. 52°",
						"q3": "D. 32°",
						"q4": "E. 26°"
					},
					"ans": "C"
				},
				"Q31": {
					"qs": "31. In the diagram below, WXYZ is a rhombus and angle WYX = 20°. What is the value of XZY.",
					"img": "img**math_1990_sectionb_qst31_1.jpg",
					"opts": {
						"q0": "A. 20°",
						"q1": "B. 30°",
						"q2": "C. 45°",
						"q3": "D. 60°",
						"q4": "E. 70°"
					},
					"ans": "E"
				},
				"Q32": {
					"qs": "32. In the diagram below, PS||RQ, |RQ| = 6.4 cm and perpendicular PH = 3.2 cm. Find the area of SQR.",
					"img": "img**math_1990_sectionb_qst32_1.jpg",
					"opts": {
						"q0": "A. 5.12 <img src='img/maths/cm2.jpg'>",
						"q1": "B. 9.60 <img src='img/maths/cm2.jpg'>",
						"q2": "C. 10.24 <img src='img/maths/cm2.jpg'>",
						"q3": "D. 20.48 <img src='img/maths/cm2.jpg'>",
						"q4": "E. 40.96 <img src='img/maths/cm2.jpg'>"
					},
					"ans": "C"
				},
				"Q33": {
					"qs": "33.	Which angle is equal to <img src='img/maths/1990q33a.jpg'>",
					"img": "img**math_1990_sectionb_qst33_1.jpg",
					"opts": {
						"q0": "A. <img src='img/maths/1990q33b.jpg'>",
						"q1": "B. <img src='img/maths/1990q33c.jpg'>",
						"q2": "C. <img src='img/maths/1990q33d.jpg'>",
						"q3": "D. <img src='img/maths/1990q33e.jpg'>",
						"q4": "E. <img src='img/maths/1990q33f.jpg'>"
					},
					"ans": "A"
				},
				"Q34": {
					"qs": "34. Which triangle is equal in area to <img src='img/maths/1990q34a.jpg'>",
					"img": "img**math_1990_sectionb_qst33_1.jpg",
					"opts": {
						"q0": "A. <img src='img/maths/1990q34b.jpg'>",
						"q1": "B. <img src='img/maths/1990q34c.jpg'>",
						"q2": "C. <img src='img/maths/1990q34d.jpg'>",
						"q3": "D. <img src='img/maths/1990q34e.jpg'>",
						"q4": "E. <img src='img/maths/1990q34f.jpg'>"
					},
					"ans": "B"
				},
				"Q35": {
					"qs": "35. In the diagram below, PQRS is a cyclic quadrilateral, <img src='img/maths/1990q35a.jpg'> and <img src='img/maths/1990q35b.jpg'>. Calculate PRQ",
					"img": "img**math_1990_sectionb_qst35_1.jpg",
					"opts": {
						"q0": "A. 58°",
						"q1": "B. 53°",
						"q2": "C. 48°",
						"q3": "D. 43°",
						"q4": "E. 38°"
					},
					"ans": "C"
				},
				"Q36": {
					"qs": "36.	In the diagram below, O is the centre of the circle. If <img src='img/maths/1990q36a.jpg'>, find the size of <img src='img/maths/1990q36b.jpg'>",
					"img": "img**math_1990_sectionb_qst36_1.jpg",
					"opts": {
						"q0": "A. 110°",
						"q1": "B. 70°",
						"q2": "C. 55°",
						"q3": "D. 35°",
						"q4": "E. 20°"
					},
					"ans": "D"
				},
				"Q37": {
					"qs": "37.	In the diagram above, PQ is a tangent at T to the circle ABT. ABC is a straight line and TC bisects <img src='img/maths/1990q37a.jpg'>. Find x.",
					"img": "img**math_1990_sectionb_qst37_1.jpg",
					"opts": {
						"q0": "A. 20°",
						"q1": "B. 30°",
						"q2": "C. 35°",
						"q3": "D. 40°",
						"q4": "E. 50°"
					},
					"ans": "E"
				},
				"Q38": {
					"qs": "38.	In the diagram below, PQ is a diameter of the circle, centre O and RS meets PQ at S. If <img src='img/maths/1990q38a.jpg'> = 64° and <img src='img/maths/1990q38b.jpg'> = 36°, calculate <img src='img/maths/1990q38c.jpg'>.",
					"img": "img**math_1990_sectionb_qst38_1.jpg",
					"opts": {
						"q0": "A. 28°",
						"q1": "B. 22°",
						"q2": "C. 18°",
						"q3": "D. 16°",
						"q4": "E. 10°"
					},
					"ans": "E"
				},
				"Q39": {
					"qs": "39.	Which of the sketches above gives a correct method for constructing an angle of 120° at the point P?",
					"img": "img**math_1990_sectionb_qst39_1.jpg",
					"opts": {
						"q0": "A. I only",
						"q1": "B. II only",
						"q2": "C. III only",
						"q3": "D. I and II only",
						"q4": "E. I, II and III."
					},
					"ans": "D"
				},
				"Q40": {
					"qs": "40.	Use Mathematical tables to evaluate <img src='img/maths/1990q40a.jpg'>.",
					"opts": {
						"q0": "A. -0.2660",
						"q1": "B. -0.0266",
						"q2": "C. 0.0266",
						"q3": "D. 0.2660",
						"q4": "E. 1.5320."
					},
					"ans": "D"
				},
				"Q41": {
					"qs": "41.	If the shadow of a pole 7 m high is 1/2 its length, what is the angle of elevation of the sun, correct to the nearest degree?",
					"opts": {
						"q0": "A. 90°",
						"q1": "B. 63°",
						"q2": "C. 60°",
						"q3": "D. 26°",
						"q4": "E. 0°"
					},
					"ans": "B"
				},
				"Q42": {
					"qs": "42.	From the top of a building 10 m high, the angle of depression of a stone lying on the horizontal ground is 69°. Calculate, correct to 1 decimal place, the distance of the stone from the foot of the building.",
					"opts": {
						"q0": "A. 3.6 m",
						"q1": "B. 3.8 m",
						"q2": "C. 6.0 m",
						"q3": "D. 9.3 m",
						"q4": "E. 26.1 m"
					},
					"ans": "B"
				},
				"Q43": {
					"qs": "43.	The bearing of a point X from a point Y is 074°. What is the bearing of Y from X?",
					"opts": {
						"q0": "A. 106°",
						"q1": "B. 148°",
						"q2": "C. 164°",
						"q3": "D. 254°",
						"q4": "E. 286°"
					},
					"ans": "D"
				},
				"Q44": {
					"qs": "44. Using the graph above, find the value of sin 270° + 2 cos 270°.",
					"img": "img**math_1990_sectionb_qst44_1.jpg",
					"opts": {
						"q0": "A. -2",
						"q1": "B. -1",
						"q2": "C. 0",
						"q3": "D. 1",
						"q4": "E. 2"
					},
					"ans": "B"
				},
				// "headd": "Use the information below for Questions 45 and 46.",
				"Q45": {
					"qs": "45. The annual salary of Mr. Johnson Mohammed for 1989 was N 12,000.00. He spent this on agricultural projects, education of his children, food items, savings, maintenance and miscellaneous items as shown in the pie chart. How much did he spend on food items?",
					"img": "img**math_1990_sectionb_qst45_1.jpg",
					"opts": {
						"q0": "A. N9,700.00",
						"q1": "B. N6,700.00",
						"q2": "C. N4,000.00",
						"q3": "D. 3,700.00",
						"q4": "E. 2,300.00"
					},
					"ans": "E"
				},
				"Q46": {
					"qs": "46. The annual salary of Mr. Johnson Mohammed for 1989 was N 12,000.00. He spent this on agricultural projects, education of his children, food items, savings, maintenance and miscellaneous items as shown in the pie chart. How much money did he invest in agriculture.",
					"img": "img**math_1990_sectionb_qst45_1.jpg",
					"opts": {
						"q0": "A. N1,200.00",
						"q1": "B. N1,440.00",
						"q2": "C. N2,000.00",
						"q3": "D. N2,910.00",
						"q4": "E. N4,000.00"
					},
					"ans": "E"
				},
				// "headd": "Use the table below to answer Questions 47 and 48.",
				"Q47": {
					"qs": "47. The table shows the amount of money (in naira) collected through voluntary donations in a secondary school. What is the mode?",
					"img": "img**math_1990_sectionb_qst47_1.jpg",
					"opts": {
						"q0": "A. N3",
						"q1": "B. N6",
						"q2": "C. N9",
						"q3": "D. N12",
						"q4": "E. 15"
					},
					"ans": "D"
				},
				"Q48": {
					"qs": "48. The table shows the amount of money (in naira) collected through voluntary donations in a secondary school. Find the median of distribution",
					"img": "img**math_1990_sectionb_qst47_1.jpg",
					"opts": {
						"q0": "A. N3.00",
						"q1": "B. N9.00",
						"q2": "C. N12.00",
						"q3": "D. N15.00",
						"q4": "E. N18.00"
					},
					"ans": "C"
				},
				// "headd": "Use the information below to answer Questions 49 and 50",
				"Q49": {
					"qs": "49. If a student in favour of the proposal is selected for a post, what is the probability that he is from group A?",
					"img": "img**math_1990_sectionb_qst49_1.jpg",
					"opts": {
						"q0": "A. 8/19",
						"q1": "B. 16/35",
						"q2": "C. 10/19",
						"q3": "D. 4/7",
						"q4": "E. 4/5"
					},
					"ans": "E"
				},
				"Q50": {
					"qs": "50. If a student is chosen at random, what is probability that he is against the proposal?",
					"img": "img**math_1990_sectionb_qst49_1.jpg",
					"opts": {
						"q0": "A. 3/19 ",
						"q1": "B. 4/19",
						"q2": "C. 5/19",
						"q3": "D. 9/19",
						"q4": "E. 10/19"
					},
					"ans": "E"
				}
			}
		});
	});
	
	app.get('/physics/1988', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. Which of the units of the following physical quantities are derived? I. Area II. Thrust III. Pressure IV. Mass ",
					"opts": {
						"q0": "A. I, II, III and IV",
						"q1": "B. I, II and III only",
						"q2": "C. I, II and IV only",
						"q3": "D. I, and III only",
						"q4": "E. I and IV only"
					},
					"ans": "B",
					"sel": ""
				},
				"Q2": {
					"qs": "2. The slope of a straight line displacement time graph indicates the",
					"opts": {
						"q0": "A. distance travelled ",
						"q1": "B. uniform velocity ",
						"q2": "C. uniform acceleration",
						"q3": "D. acceleration at an instant",
						"q4": "E. uniform speed"
					},
					"ans": "B",
					"sel": ""
				},
				"Q3": {
					"qs": "3. A man will exert the greatest pressure on a bench when he",
					"opts": {
						"q0": "A. lies flat on his ",
						"q1": "B. lies flat on his belly ",
						"q2": "C. stands on both feet ",
						"q3": "D. stands on one foot only ",
						"q4": "E. stands on the toes of one foot."
					},
					"ans": "E",
					"sel": ""
				},
				"Q4": {
					"qs": "4. The diagram represents a portion of a vernier calliper. What is its reading?",
					"img": "img**phys_1998_sectionb_qst4_1.jpg",
					"opts": {
						"q0": "A. 7.10 cm",
						"q1": "B. 7.09 cm",
						"q2": "C. 6.90 cm",
						"q3": "D. 6.34 cm",
						"q4": "E. 6.29 cm"
					},
					"ans": "E",
					"sel": ""
				},
				"Q5": {
					"qs": "5. When three coplanar non-parallel forces are in equilibrium, I. they can be represented in magnitude and direction by the three sides of a triangle taken in order. II. their lines of action meet at a point III. the magnitude of any one force equals the magnitude of the resultant of the other two. IV. any one force is the equilibrant of the other two. Which of the statements above are correct? ",
					"opts": {
						"q0": "A. I and II only ",
						"q1": "B. II and III only",
						"q2": "C. II, III and IV only ",
						"q3": "D. I, II, III and IV",
						"q4": "E. I, III and IV only"
					},
					"ans": "D",
					"sel": ""
				},
				"Q6": {
					"qs": "6. A ball of mass 0.5 kg moving at 10 m/s collides with another ball of equal mass at rest. If the two balls move off together after the impact, calculate their common velocity.",
					"opts": {
						"q0": "A. 0.2 m/s",
						"q1": "B. 0.5 m/s",
						"q2": "C. 5.0 m/s",
						"q3": "D. 10.0 m/s",
						"q4": "E. 20.0 m/s"
					},
					"ans": "C",
					"sel": ""
				},
				"Q7": {
					"qs": "7. A body is projected into space with an initial velocity Vo at an angle G to the horizontal. Which of the following statements is/are correct about its motion? I. The total time of flight is <img src='img/physics/phys_1998_sectionb_qst7_1.jpg'>. II. The maximum height is <img src='img/physics/phys_1998_sectionb_qst7_2.jpg'>. III. The range is <img src='img/physics/phys_1998_sectionb_qst7_3.jpg'>.",
					"opts": {
						"q1": "A. I and II only",
						"q2": "B. I and III only",
						"q3": "C. II and III only",
						"q4": "D. II only",
						"q5": "E. III only"
					},
					"ans": "D",
					"sel": ""
				},
				"Q8": {
					"qs": "8. The diagram shows a body resting on an inclined plane. If the body slides down the plane, what will be its acceleration? (<img src='img/physics/grav.jpg'>)",
					"img": "img**phys_1998_sectionb_qst8_1.jpg",
					"opts": {
						"q0": "A. 27.5 <img src='img/physics/msm2.jpg'>",
						"q1": "B. 14.8 <img src='img/physics/msm2.jpg'>",
						"q2": "C. 10.5 <img src='img/physics/msm2.jpg'>",
						"q3": "D. 6.2 <img src='img/physics/msm2.jpg'>",
						"q4": "E. 3.3 <img src='img/physics/msm2.jpg'>"
					},
					"ans": "E",
					"sel": ""
				},
				"Q9": {
					"qs": "9. A catapult is used to project a stone. Which of the following energy conversions takes place as the stone is released?",
					"opts": {
						"q0": "A. The kinetic energy of the stone is converted into gravitational potential energy",
						"q1": "B. The gravitational potential energy of catapult is converted into the kinetic energy of the stone",
						"q2": "D. The gravitational potential energy is converted into elastic potential energy",
						"q3": "E. The elastic potential energy of catapult is converted into gravitational potential energy of the stone."
					},
					"ans": "C",
					"sel": ""
				},
				"Q10": {
					"qs": "10. A ball is thrown vertically upwards from the ground with an initial velocity of 50 <img src='img/physics/cmsm1.jpg'>. What is the total time spent by the ball in the air? (<img src='img/physics/grav.jpg'>) ",
					"opts": {
						"q0": "A. 2.5 s",
						"q1": "B. 5.0 s",
						"q2": "C. 10.0 s",
						"q3": "D. 15.0 s",
						"q4": "E. 20.0 s"
					},
					"ans": "C",
					"sel": ""
				},
				"Q11": {
					"qs": "11. Which of the following correctly gives the relationship between linear speed v and angular speed w of a body moving uniformly in a circle of radius r?",
					"opts": {
						"q0": "A. <img src='img/physics/1988q11a.jpg'>",
						"q1": "B. <img src='img/physics/1988q11b.jpg'>",
						"q2": "C. <img src='img/physics/1988q11c.jpg'>",
						"q3": "D. <img src='img/physics/1988q11d.jpg'>",
						"q4": "E. <img src='img/physics/1988q11e.jpg'>"
					},
					"ans": "A",
					"sel": ""
				},
				"Q12": {
					"qs": "12.	The motion of a body is simple harmonic if the ",
					"opts": {
						"q0": "A. acceleration is always directed towards a fixed point",
						"q1": "B. path of motion is a straight ",
						"q2": "C. acceleration is directed towards a fixed point and proportional to its distance from the point",
						"q3": "D. acceleration is proportional to the square of the distance from a fixed point",
						"q4": "E. acceleration is constant and directed towards a fixed point"
					},
					"ans": "C",
					"sel": ""
				},
				"Q13": {
					"qs": "13. Which of the following statements about the gaseous state of matter is not correct? The molecules of a substance in gaseous state ",
					"opts": {
						"q0": "A. are in a constant state of motion",
						"q1": "B. have different speeds",
						"q2": "C. have a temperature which is a measure of the average kinetic energy",
						"q3": "D. have no intermolecular attractive force",
						"q4": "E. have a pressure which is determined by the number of molecules present"
					},
					"ans": "D",
					"sel": ""
				},
				"Q14": {
					"qs": "14.	Which of the following cannot be used to measure the temperature of a substance?",
					"opts": {
						"q0": "A. Variation of pressure with temperature",
						"q1": "B. Expansivity of a liquid",
						"q2": "C. change in resistance of a conductor",
						"q3": "D. Thermo-electric effect",
						"q4": "E. Change in colour with temperature"
					},
					"ans": "E",
					"sel": ""
				},
				"Q15": {
					"qs": "15. The clinical thermometer is characterised by having a ",
					"opts": {
						"q0": "A. wide range of temperature",
						"q1": "B. wide bore",
						"q2": "C. long stem",
						"q3": "D. contriction",
						"q4": "E. narrow bore"
					},
					"ans": "D",
					"sel": ""
				},
				"Q16": {
					"qs": "16. A given mass of gas has a pressure of 80 <img src='img/physics/nmm2.jpg'> at a temperature of 47°C. If the temperature is reduced to 27°C with the volume remaining constant, the new pressure is",
					"opts": {
						"q0": "A. 46.0 <img src='img/physics/nmm2.jpg'>",
						"q1": "B. 75.0 <img src='img/physics/nmm2.jpg'>",
						"q2": "C. 80.0 <img src='img/physics/nmm2.jpg'>",
						"q3": "D. 85.3 <img src='img/physics/nmm2.jpg'>",
						"q4": "E. 139.4 <img src='img/physics/nmm2.jpg'>"
					},
					"ans": "B",
					"sel": ""
				},
				"Q17": {
					"qs": "17. Which of the following is a reason why a concrete floor feels colder to the bare feet than a mat on the same floor during the rainy season? ",
					"opts": {
						"q0": "A. Mat is a better conductor of heat than the feet",
						"q1": "B. Mat loses heat to the bare feet at a faster rate than concrete floor",
						"q2": "c. Mat loses heat to the bare feet while the concrete floor extracts heat from them",
						"q3": "D. Concrete floor is a better conductor of heat than the mat",
						"q4": "E. Mat is a better conductor of heat than the floor"
					},
					"ans": "D",
					"sel": ""
				},
				"Q18": {
					"qs": "18. In which of the following is the expansion of solids a disadvantage? ",
					"opts": {
						"q0": "A. The fitting of wheels in rims",
						"q1": "B. Fire alarms",
						"q2": "C. The thermostat",
						"q3": "D. The bimetallic thermometer",
						"q4": "E. The balance wheel of a watch"
					},
					"ans": "E",
					"sel": ""
				},
				"Q19": {
					"qs": "19.	Which of the following best explains why a person suffers a more severe burn when his skin is exposed to steam, than when boiling water is poured onto his skin? ",
					"opts": {
						"q0": "A. Steam is at a higher temperature than boiling water ",
						"q1": "B. Steam possesses greater heat energy per unit-mass than boiling water",
						"q2": "C. steam spreads more easily over a wider area of the skin than boiling water",
						"q3": "D. Steam penetrates more deeply into the skin than boiling water ",
						"q4": "E. The specific latent heat of vaporization is released in changing from boiling water to steam"
					},
					"ans": "B",
					"sel": ""
				},
				"Q20": {
					"qs": "20.	Which of the following statements about radiant heat is/are not correct? I. Radiant heat cannot travel through a vacuum. II. Rough surfaces emit radiant heat better than polished surfaces. III. Dark surfaces absorb radiant heat better than bright surfaces",
					"opts": {
						"q0": "A. I only",
						"q1": "B. II only",
						"q2": "C. III only",
						"q3": "D. I and II only",
						"q4": "E. II and III only"
					},
					"ans": "A",
					"sel": ""
				},
				"Q21": {
					"qs": "21. 0.5kg of water at 10°C is completely converted to ice at 0°C by extracting 188000 J of heat from it. If the specific heat capacity of water is 4200 <img src='img/physics/jkgm1c1.jpg'>, calculate the specific latent heat of fusion of ice",
					"opts": {
						"q0": "A. 9.0 <img src='img/physics/kjkgm1.jpg'>",
						"q1": "B. 84.0 <img src='img/physics/kjkgm1.jpg'>",
						"q2": "C. 168.0 <img src='img/physics/kjkgm1.jpg'>",
						"q3": "D. 334.0 <img src='img/physics/kjkgm1.jpg'>",
						"q4": "E. 336.0 <img src='img/physics/kjkgm1.jpg'>"
					},
					"ans": "D",
					"sel": ""
				},
				"Q22": {
					"qs": "22. The temperature at which the water vapour present in the air is just sufficient to saturate it is called the",
					"opts": {
						"q0": "A. ice point",
						"q1": "B. boiling point",
						"q2": "C. steam point",
						"q3": "D. dew point",
						"q4": "E. saturation point"
					},
					"ans": "D",
					"sel": ""
				},
				"Q23": {
					"qs": "23. Which of the following instruments may be used to measure relative humidity?",
					"opts": {
						"q0": "A. Hydrometer",
						"q1": "B. Barometer",
						"q2": "C. Manometer",
						"q3": "D. Hypsometer",
						"q4": "E. Hygrometer"
					},
					"ans": "E",
					"sel": ""
				},
				"Q24": {
					"qs": "24. Which of the following will affect the saturation vapour pressure of a liquid? ",
					"opts": {
						"q0": "A. Temperature of the liquid",
						"q1": "B. Humidity of air",
						"q2": "C. Volume of vapour",
						"q3": "D. Volume of the liquid",
						"q4": "E. Mass of the liquid"
					},
					"ans": "A",
					"sel": ""
				},
				"Q25": {
					"qs": "25. Which of the following statements is/are not correct about the image formed by a plane mirror? I. The magnification produced is 1. II. The image distance is the same as the object distance. III. The image is real IV. The image is laterally inverted ",
					"opts": {
						"q0": "A. I only",
						"q1": "B. II only",
						"q2": "C. III only",
						"q3": "D. I and II only",
						"q4": "E. II and IV only"
					},
					"ans": "C",
					"sel": ""
				},
				"Q26": {
					"qs": "26. What will be the characteristics of the image of the object OB shown after the reflection from the mirror?",
					"img": "img**phys_1998_sectionb_qst26_1.jpg",
					"opts": {
						"q0": "A. Diminished, real and erect",
						"q1": "B. Magnified, real and inverted",
						"q2": "C. Diminished, virtual and erect ",
						"q3": "D. Magnified, virtual and erect",
						"q4": "E. Magnified, virtual and inverted"
					},
					"ans": "D",
					"sel": ""
				},
				"Q27": {
					"qs": "27. A transparent rectangular block 5.0 cm thick is placed on a black dot. The dot when viewed, from above is seen 3.0 cm from the top of the block. Calculate the refractive index of the material of the block",
					"opts": {
						"q0": "A. 2/5 ",
						"q1": "B. 3/5 ",
						"q2": "C. 3/2 ",
						"q3": "D. 5/3 ",
						"q4": "E. 5/2"
					},
					"ans": "D",
					"sel": ""
				},
				"Q28": {
					"qs": "28. The velocities of light in air and glass are 3.0 x <img src='img/physics/108msm1.jpg'> respectively. Calculate the sine of the angle of incidence that will produce an angle of refraction of 30° for a ray of light incident on glass",
					"opts": {
						"q0": "A. 1.2",
						"q1": "B. 1.0",
						"q2": "C. 0.8",
						"q3": "D. 0.6",
						"q4": "E. 0.3"
					},
					"ans": "C",
					"sel": ""
				},
				"Q29": {
					"qs": "29. In an experiment to measure the focal length of a converging lens, object distance u and corresponding image distances v were measured and 1/u plotted against 1/v to obtain the type of graph illustrated below. How would f be found from this graph?",
					"img": "img**phys_1998_sectionb_qst29_1.jpg",
					"opts": {
						"q0": "A. f = the slope of the graph",
						"q1": "B. f = the intercept on the 1/u - axis",
						"q2": "C. f = the intercept of the 1/v - axis",
						"q3": "D. f = reciprocal of the slope",
						"q4": "E. f = reciprocal of the intercept on either axis."
					},
					"ans": "E",
					"sel": ""
				},
				"Q30": {
					"qs": "30. An object is placed 36 cm from a converging lens of focal length 24 cm. If a real image which is 4 cm high is formed, calculate the height of the object.",
					"opts": {
						"q0": "A. 2.0 cm",
						"q1": "B. 4.0 cm",
						"q2": "C. 6.0 cm",
						"q3": "D. 8.0 cm",
						"q4": "E. 10.0 cm"
					},
					"ans": "A",
					"sel": ""
				},
				"Q31": {
					"qs": "31. The ability of the eye to focus objects at different distances is called ",
					"opts": {
						"q0": "A. power",
						"q1": "B. accommodation",
						"q2": "C. normal vision",
						"q3": "D. persistence of vision",
						"q4": "E. long sight"
					},
					"ans": "B",
					"sel": ""
				},
				"Q32": {
					"qs": "32. The change of the direction of a wave-front because of a change in the velocity of the wave in another medium is called",
					"opts": {
						"q0": "A. refraction",
						"q1": "B. reflection",
						"q2": "C. diffraction",
						"q3": "D. interference",
						"q4": "E. dispersion"
					},
					"ans": "C",
					"sel": ""
				},
				"Q33": {
					"qs": "33.	A source of sound produces waves in air of wavelength 1.65 m. If the speed of sound in air is 330 m/s the period of vibration in seconds is ",
					"opts": {
						"q0": "A. 200",
						"q1": "B. 2.0",
						"q2": "C. 0.5",
						"q3": "D. 0.02",
						"q4": "E. 0.005"
					},
					"ans": "E",
					"sel": ""
				},
				"Q34": {
					"qs": "34. Which of the following statements is/are not correct about a standing wave? I. it is formed by the superimposition of two progressive waves travelling in the same direction. II. All points on the wave are vibrating with maximum displacement III. It is formed by the superimposition of two progressive waves of different amplitudes travelling in opposite directions. ",
					"opts": {
						"q0": "A. I only ",
						"q1": "B. II only",
						"q2": "C. I and II only",
						"q3": "D. II and III only",
						"q4": "E. I, II and III"
					},
					"ans": "E",
					"sel": ""
				},
				"Q35": {
					"qs": "35. A boy standing some distance from the foot of a tall cliff claps his hands and hears an echo 0.5 s later. If the speed of sound is 340 m/s, how far is he from the cliff? ",
					"opts": {
						"q0": "A. 17 m",
						"q1": "B. 34 m",
						"q2": "C. 85 m",
						"q3": "D. 170 m",
						"q4": "E. 680 m"
					},
					"ans": "C",
					"sel": ""
				},
				"Q36": {
					"qs": "36. A sounding tuning fork is brought near the end of a pipe containing an air column and the loudness of the sound increases. This effect is due to ",
					"opts": {
						"q0": "A. diffraction ",
						"q1": "B. an echo",
						"q2": "C. resonance ",
						"q3": "D. interference ",
						"q4": "E. reverberation"
					},
					"ans": "C",
					"sel": ""
				},
				"Q37": {
					"qs": "37. If the leaves of a positively charged electroscope collapse completely as an object is brought near the cap of the electroscope, the object possesses",
					"opts": {
						"q0": "A. an equal amount of positive.charge ",
						"q1": "B. less amount of negative charge",
						"q2": "C. no charge",
						"q3": "D. a positive charge",
						"q4": "E. an equal amount of negative charge"
					},
					"ans": "E",
					"sel": ""
				},
				"Q38": {
					"qs": "38. A cell can supply currents of 0.80 A and 0.40 A through a 2Q and a 3Q resistor respectively. Calculate the internal resistance of the cell.",
					"opts": {
						"q0": "A. 0.2 <img src='img/physics/ohm.jpg'>",
						"q1": "B. 0.4 <img src='img/physics/ohm.jpg'>",
						"q2": "C. -1.0 <img src='img/physics/ohm.jpg'>",
						"q3": "D. 3.0 <img src='img/physics/ohm.jpg'>",
						"q4": "E. 9.0 <img src='img/physics/ohm.jpg'>"
					},
					"ans": "C",
					"sel": ""
				},
				"Q39": {
					"qs": "39. Which of the following diagrams represents the magnetic field of two isolated unlike poles?",
					"opts": {
						"q0": "A. <img src='img/physics/phys_1998_sectionb_qst39_1.jpg'>",
						"q1": "B. <img src='img/physics/phys_1998_sectionb_qst39_2.jpg'>",
						"q2": "C. <img src='img/physics/phys_1998_sectionb_qst39_3.jpg'>",
						"q3": "D. <img src='img/physics/phys_1998_sectionb_qst39_4.jpg'>",
						"q4": "E. <img src='img/physics/phys_1998_sectionb_qst39_5.jpg'>"
					},
					"ans": "No Option",
					"sel": ""
				},
				"Q40": {
					"qs": "40. A battery of e.m.f. 24 V and internal resistance 4Q is connected to a resistor of 32Q. What is the terminal p.d. of the battery? ",
					"opts": {
						"q0": "A. 24.0 V",
						"q1": "B. 21.3 V",
						"q2": "C. 18.0 V",
						"q3": "D. 2.7 V",
						"q4": "E. 2.0 V"
					},
					"ans": "B",
					"sel": ""
				},
				"Q41": {
					"qs": "41. Calculate the total heat energy developed in 5 minutes by the system above.",
					"img": "img**phys_1998_sectionb_qst41_1.jpg",
					"opts": {
						"q0": "A. 120 J",
						"q1": "B. 144 J",
						"q2": "C. 240 J",
						"q3": "D. 740 J",
						"q4": "E. 8640 J"
					},
					"ans": "E",
					"sel": ""
				},
				"Q42": {
					"qs": "42.	A transformer with 5500 turns in its primary is used between a 240V a.c supply and a 120 V kettle. Calculate the number of turns in the secondary",
					"opts": {
						"q0": "A. 11000",
						"q1": "B. 2750",
						"q2": "C. 460",
						"q3": "D. 232",
						"q4": "E. 10"
					},
					"ans": "B",
					"sel": ""
				},
				"Q43": {
					"qs": "43. Local action is normally prevented from taking place in a simple electric cell by",
					"opts": {
						"q0": "A. introducing an oxidising agent into the acid",
						"q1": "B. not drawing current continuously for long periods",
						"q2": "C. amalgamating the surface of the zinc plate",
						"q3": "D. using a porous pot to isolate the zinc plate from the acid",
						"q4": "E. using dilute sulphuric acid"
					},
					"ans": "C",
					"sel": ""
				},
				"Q44": {
					"qs": "44. Calculate the value of R when G shows no deflection in the circuit illustrated below ",
					"img": "img**phys_1998_sectionb_qst44_1.jpg",
					"opts": {
						"q0": "A. 11 <img src='img/physics/ohm.jpg'>",
						"q1": "B. 36 <img src='img/physics/ohm.jpg'>",
						"q2": "C. 60 <img src='img/physics/ohm.jpg'>",
						"q3": "D. 120 <img src='img/physics/ohm.jpg'>",
						"q4": "E. 225 <img src='img/physics/ohm.jpg'>"
					},
					"ans": "B",
					"sel": ""
				},
				"Q45": {
					"qs": "45. Two parallel conductors carry equal currents in the same direction. Which of the following statements is not a correct observation? ",
					"opts": {
						"q0": "A. Each of the conductors will experience a force",
						"q1": "B. Each of the conductors can move",
						"q2": "C. The forces on the conductors will be equal",
						"q3": "D. There are concentric lines of force around each conductor",
						"q4": "E. The two conductors will repel each other"
					},
					"ans": "E",
					"sel": ""
				},
				"Q46": {
					"qs": "46. It takes 4 minutes to boil a quantity of water electrically. How long will it take to boil some quantity of water using the same heating coil but with the current doubled? (Neglect any external heat losses)",
					"opts": {
						"q0": "A. 64 minutes ",
						"q1": "B. 32 minutes",
						"q2": "C. 8 minutes",
						"q3": "D. 2 minutes",
						"q4": "E. 1 minute"
					},
					"ans": "E",
					"sel": ""
				},
				"Q47": {
					"qs": "47. Which of the following statements is not correct?",
					"opts": {
						"q0": "A. magnetic field is a region in which a magnetic force may be detected ",
						"q1": "B. A line of force is a line along which a magnetic N-pole would tend to move if it were free",
						"q2": "C. Magnetic fields are scalar quantities",
						"q3": "D. Neutral points are obtained where the earth’s magnetic field is exactly equal and opposite to that due to the magnet",
						"q4": "E. The dip angle is the angle between the horizontal and the earth’s total magnetic field"
					},
					"ans": "C",
					"sel": ""
				},
				"Q48": {
					"qs": "48. A lamp is marked 220 V 60 W. Calculate the energy it would consume when connected to a 220 V source for 1 hour",
					"opts": {
						"q0": "A. 216000 J",
						"q1": "B. 13200 J",
						"q2": "C. 3600 J",
						"q3": "D. 864 J",
						"q4": "E. 220 J"
					},
					"ans": "A",
					"sel": ""
				},
				"Q49": {
					"qs": "49. What is the effect of using split-rings in a simple d.c. motor?",
					"opts": {
						"q0": "A. The direction of rotation of the coil is reversed ",
						"q1": "B. The current in the coil flows in the same direction ",
						"q2": "C. The current in the coil becomes alternating",
						"q3": "D. The direction of the force on the coil is reversed",
						"q4": "E. The contact with the voltage source is cut off"
					},
					"ans": "B",
					"sel": ""
				},
				"Q50": {
					"qs": "50. Which of the following statements is not correct about a loaded spiral spring? ",
					"opts": {
						"q0": "A. The extension is proportional to the load applied, provided the elastic limit is not exceeded",
						"q1": "B. If the elastic limit is not exceeded, the contraction is proportional to the load removed ",
						"q2": "C. Up to the yield limit extension is no longer proportional to the applied load",
						"q3": "D. Beyond the elastic limit, extension is no longer proportional to the applied load ",
						"q4": "E. If the spring regains its shape or form after deformation, it is said to be elastic"
					},
					"ans": "C",
					"sel": ""
				},
				"Q51": {
					"qs": "51. Calculate the resistivity of a wire of length 2m and cross- sectional area 0.004<img src='img/physics/cm2.jpg'> if resistance is 3.0<img src='img/physics/ohm.jpg'>",
					"opts": {
						"q0": "A. 0.0000267 <img src='img/physics/ohm.jpg'>cm ",
						"q1": "B. 0.00006 <img src='img/physics/ohm.jpg'>cm",
						"q2": "C. 0.26700 <img src='img/physics/ohm.jpg'>cm",
						"q3": "D. 0.37500 <img src='img/physics/ohm.jpg'>cm",
						"q4": "E. 0.060000 <img src='img/physics/ohm.jpg'>cm"
					},
					"ans": "B",
					"sel": ""
				},
				"Q52": {
					"qs": "52. Which of the following particles or rays have the greatest penetrating power?",
					"opts": {
						"q0": "A. Beta particles",
						"q1": "B. Alpha particles",
						"q2": "C. Gamma particles",
						"q3": "D. Electrons",
						"q4": "E. Neutrons"
					},
					"ans": "C",
					"sel": ""
				},
				"Q53": {
					"qs": "53. When sugar at the bottom of a glass of water gradually dissolves, the water level does not change appreciably. Which of the following statements best explains this?",
					"opts": {
						"q0": "A. Water is a suitable solvent for sugar",
						"q1": "B. The sugar and the water have become a single solution",
						"q2": "C. The volume of the sugar molecules does not change when the sugar dissolves",
						"q3": "D. Sugar molecules are smaller than water molecules",
						"q4": "E. Water molecules are separated by large spaces between them"
					},
					"ans": "E",
					"sel": ""
				},
				"Q54": {
					"qs": "54. Which of the following explains the concave meniscus of water in a glass tube?",
					"opts": {
						"q0": "A. The adhesion between water and glass is greater than the cohesion between water molecules",
						"q1": "B. The cohesion between water molecules is greater than the adhesion between glass water",
						"q2": "C. The molecules of water near the glass are moving faster than the molecules in the other parts",
						"q3": "D. The molecules of water at the water-air boundary are often attracted to the centre of the tube",
						"q4": "E. The weight of the water pulls the central part of the surface down"
					},
					"ans": "A",
					"sel": ""
				},
				"Q55": {
					"qs": "55. The unit of inductance is the",
					"opts": {
						"q0": "A. farad",
						"q1": "B. henry",
						"q2": "C. hertz",
						"q3": "D. ampere",
						"q4": "E. coulomb"
					},
					"ans": "B",
					"sel": ""
				},
				"Q56": {
					"qs": "56. Which of the following is/are not affected by a magnetic field? I. Neutrons II. Cathode rays III. Alpha particles",
					"opts": {
						"q0": "A. I only",
						"q1": "B. II only",
						"q2": "C. III only",
						"q3": "D. II and III only",
						"q4": "E. I, II, and III."
					},
					"ans": "A",
					"sel": ""
				},
				"Q57": {
					"qs": "57. Which of the following is not correct about isotopes of an element? They have ",
					"opts": {
						"q0": "A. the same neutron number ",
						"q1": "B. the same proton number",
						"q2": "C. the same number of electrons",
						"q3": "D. the same chemical properties",
						"q4": "E. different physical properties"
					},
					"ans": "A",
					"sel": ""
				},
				"Q58": {
					"qs": "58. An electron of charge <img src='img/physics/1988q58a.jpg'> is accelerated in vacuum from rest at zero volt towards a plate at 40KV. Calculate the kinetic energy of the electron",
					"opts": {
						"q0": "A. <img src='img/physics/1988q58b.jpg'>",
						"q1": "B. <img src='img/physics/1988q58c.jpg'>",
						"q2": "C. <img src='img/physics/1988q58d.jpg'>",
						"q3": "D. <img src='img/physics/1988q58e.jpg'>",
						"q4": "E. <img src='img/physics/1988q58f.jpg'>"
					},
					"ans": "D",
					"sel": ""
				},
				"Q59": {
					"qs": "59. Which of the following is not an electromagnetic radiation?",
					"opts": {
						"q0": "A. X-ray",
						"q1": "B. Radio waves",
						"q2": "C. Sunlight",
						"q3": "D. Sound waves",
						"q4": "E. Infra-red radiation"
					},
					"ans": "D",
					"sel": ""
				},
				"Q60": {
					"qs": "60.	Two radioactive elements A and B have half-lives of 100 and 50 years respectively. Samples of A and B initially contain equal number of atoms. What is the ratio of the number of the remaining atoms of A to that of B after 200 years",
					"opts": {
						"q0": "A. 4 : 1",
						"q1": "B. 2 : 1",
						"q2": "C. 1 : 1",
						"q3": "D. 1 : 2",
						"q4": "E. 1 : 4"
					},
					"ans": "A",
					"sel": ""
				}
			}
		});
	});

	app.get('/physics/1989', function(req, res) {
		res.json({
			data: {
				"Q1": {
					"qs": "1. Which of the following is not a vector quantity?",
					"opts": {
						"q0": "A. Momentum",
						"q1": "B. Force",
						"q2": "C. Velocity",
						"q3": "D. Temperature",
						"q4": "E. Displacement"
					},
					"ans": "D",
					"sel": ""
				},
				"Q2": {
					"qs": "2. Which of the following is not a consequence of a force field?",
					"opts": {
						"q0": "A. Weight ",
						"q1": "B. Surface tension",
						"q2": "C. Gravitational pull",
						"q3": "D. Magnetic force",
						"q4": "E. Electric force"
					},
					"ans": "B",
					"sel": ""
				},
				"Q3": {
					"qs": "3. A boy pulls a nail from the wall with a string tied to the nail. The string is inclined at an angle of 60° to the wall. If the tension in the string is 4N, what is the effective force used in pulling the nail?",
					"opts": {
						"q0": "A. <img src='img/physics/phys_1989_sectionb_qst3_1.jpg'>",
						"q1": "B. <img src='img/physics/phys_1989_sectionb_qst3_2.jpg'>",
						"q2": "C. <img src='img/physics/phys_1989_sectionb_qst3_3.jpg'>",
						"q3": "D. <img src='img/physics/phys_1989_sectionb_qst3_4.jpg'>",
						"q4": "E. <img src='img/physics/phys_1989_sectionb_qst3_5.jpg'>"
					},
					"ans": "B",
					"sel": ""
				},
				"Q4": {
					"qs": "4. The diagram above represents the trajectory of a projectile with an initial velocity U. If g is the acceleration of free fall, the time taken to reach the maximum height is",
					"img": "img**phys_1989_sectionb_qst4_1.jpg",
					"opts": {
						"q0": "A. <img src='img/physics/phys_1989_sectionb_qst4_2.jpg'>",
						"q1": "B. <img src='img/physics/phys_1989_sectionb_qst4_3.jpg'>",
						"q2": "C. <img src='img/physics/phys_1989_sectionb_qst4_4.jpg'>",
						"q3": "D. <img src='img/physics/phys_1989_sectionb_qst4_5.jpg'>",
						"q4": "E. <img src='img/physics/phys_1989_sectionb_qst4_6.jpg'>"
					},
					"ans": "E",
					"sel": ""
				},
				"Q5": {
					"qs": "5. Using the diagram above calculate the moment of the force of 10N about point P.",
					"img": "img**phys_1989_sectionb_qst5_1.jpg",
					"opts": {
						"q0": "A. 60 Nm",
						"q1": "B. <img src='img/physics/1989q5a.jpg'>",
						"q2": "C. 120 Nm",
						"q3": "D. <img src='img/physics/1989q5b.jpg'>",
						"q4": "E. 240 Nm"
					},
					"ans": "B",
					"sel": ""
				},
				"Q6": {
				    "qs": "6. Which of the following is used to determine the relative density of the acid in a car battery?",
					"opts": {
						"q0": "A. Hypsometer",
						"q1": "B. Hygrometer",
						"q2": "C. Manometer",
						"q3": "D. Hydrometer",
						"q4": "E. Spectrometer"
					},
					"ans": "D",
					"sel": ""
				},
				"Q7": {
					"qs": "7. A block of material of volume 20 <img src='img/physics/cmm3.jpg'> and density 2.5 <img src='img/physics/gcm3.jpg'> is suspended from a spring balance with half the volume of the block immersed in water. What is the reading of the spring balance? (Density of water = 1.0 <img src='img/physics/gcm3.jpg'>)",
					"opts": {
				        "q0": "A. 8 g",
						"q1": "B. 25 g",
						"q2": "C. 30 g",
						"q3": "D. 40 g",
						"q4": "E. 50 g"
					},
					"ans": "D",
					"sel": ""
				},
				"Q8": {
					"qs": "8. A piece of cork which is floating on water is acted upon by the forces of",
					"opts": {
				        "q0": "A. weight and viscosity",
						"q1": "B. weight and upthrust",
						"q2": "C. upthrust and viscosity",
						"q3": "D. weight only",
						"q4": "E. upthrust only"
					},
					"ans": "B",
					"sel": ""
				},
				"Q9": {
					"qs": "9. Which of the following statements is correct about the equilibrium of the object represented in the diagram above?",
					"img": "img**phys_1989_sectionb_qst9_1.jpg",
					"opts": {
						"q0": "A. X and Y are in stable equilibrium",
						"q1": "B. Y and Z are in neutral equilibrium",
						"q2": "C. X is in unstable equilibrium",
						"q3": "D. Z is in stable equilibrium",
						"q4": "E. Y is in neutral equilibrium"
					},
					"ans": "C",
					"sel": ""
				},
				"Q10": {
					"qs": "10. A stone tied to a string is made to revolve in a horizontal circle of radius 4 m with an angular speed for 2 radians per second. With what tangential velocity will the stone move off the circle if the string cuts?",
					"opts": {
						"q0": "A. 16.0 m/s",
						"q1": "B. 8.0 m/s",
						"q2": "C. 6.0 m/s",
						"q3": "D. 2.0 m/s",
						"q4": "E. 0.5 m/s"
					},
					"ans": "B",
					"sel": ""
				},
				"Q11": {
					"qs": "11. The motion of the prongs of sounding tuning fork is",
					"opts": {
						"q0": "A. random",
						"q1": "B. translational",
						"q2": "C. rotational",
						"q3": "D. vibratory",
						"q4": "E. vibratory and rotational"
					},
					"ans": "D",
					"sel": ""
				},
				"Q12": {
					"qs": "12. Which of the following is a derived unit?",
					"opts": {
						"q0": "A. Metre",
						"q1": "B. Coulomb",
						"q2": "C. Kilogram",
						"q3": "D. Second",
						"q4": "E. Ampere"
					},
					"ans": "B",
					"sel": ""
				},
				"Q13": {
					"qs": "13. An engine raises 100kg of water through a height of 60m in 20s. What is the power of the engine? (Take <img src='img/physics/grav.jpg'>)",
					"opts": {
						"q0": "A. 120,000 W",
						"q1": "B. 3000 W",
						"q2": "C. 333 W",
						"q3": "D. 300 W",
						"q4": "E. 30 W"
					},
					"ans": "B",
					"sel": ""
				},
				"Q14": {
					"qs": "14. A thermometer has its stem marked in millimeter instead of degree Celsius. The lower fixed point is 30mm and the upper fixed point is 180mm. Calculate the temperature in degree Celsius when the thermometer reads 45mm",
					"opts": {
						"q0": "A. 67.5 °C",
						"q1": "B. 30.0 °C",
						"q2": "C. 25.0 °C",
						"q3": "D. 15.0 °C",
						"q4": "E. 10.0 °C"
					},
					"ans": "E",
					"sel": ""
				},
				"Q15": {
					"qs": "15. Which of the following surface will radiate heat energy best?",
					"opts": {
						"q0": "A. Red",
						"q1": "B. White",
						"q2": "C. Black",
						"q3": "D. Yellow",
						"q4": "E. Blue"
					},
					"ans": "C",
					"sel": ""
				},
				"Q16": {
					"qs": "16. Which of the following statements is not correct?",
					"opts": {
						"q0": "A. Evaporation takes place only at the surface of a liquid",
						"q1": "B. Boiling takes place throughout the volume of a liquid",
						"q2": "C. Evaporation takes place at all temperatures",
						"q3": "D. Boiling takes place at a particular temperature for a liquid at a given external pressure",
						"q4": "E. The boiling point of a liquid is not affected by impurities"
					},
					"ans": "E",
					"sel": ""
				},
				"Q17": {
					"qs": "17. Water in an open container boils at a lower temperature when heated at the top of a mountain than at sea-level because at the top of a mountain the",
					"opts": {
						"q0": "A. relative humidity is higher than that at a sea-level",
						"q1": "B. rays of the sun add more heat to the water",
						"q2": "C. temperature is lower than that at sea-level",
						"q3": "D. pressure is lower than that at sea-level",
						"q4": "E. pressure is more than that at sea-level"
					},
					"ans": "D",
					"sel": ""
				},
				"Q18": {
					"qs": "18. Which of the following substances is not a good conductor of electricity?",
					"opts": {
						"q0": "A. Human body",
						"q1": "B. Glass",
						"q2": "C. Aluminium",
						"q3": "D. Earth",
						"q4": "E. Copper"
					},
					"ans": "B",
					"sel": ""
				},
				"Q19": {
					"qs": "19. Calculate the heat energy required to vapourize 50g of water initially at 80°C if the specific heat capacity of water is 4.2 J/g K (Specific latent heat of vapourization of water 2260 J/g).",
					"opts": {
						"q0": "A. 533000 J",
						"q1": "B. 230.000 J",
						"q2": "C. 117200 J",
						"q3": "D. 113000 J",
						"q4": "E. 4200 J"
					},
					"ans": "C",
					"sel": ""
				},
				"Q20": {
					"qs": "20. A block of ice at its melting point is left on a table in the atmosphere and it is observed to melt gradually. Which of the following statements is true about the melting process?",
					"opts": {
						"q0": "A. The reaction force of the table on the ice breaks the ice into water molecules",
						"q1": "B. Heat extracted from the ice block makes the ice block cold",
						"q2": "C. The ice block absorbs heat from the atmosphere and its temperature rises",
						"q3": "D. The atmosphere absorbs heat from the ice block and its temperature falls",
						"q4": "E. The ice block absorbs heat from the atmosphere and its temperature remains constant as it melts"
					},
					"ans": "E",
					"sel": ""
				},
				"Q21": {
					"qs": "21. All the heat generated by a current of 2A passing through a 6 ohms resistor for 25s is used to evaporate 5g of a liquid at its boiling point. What is the specific latent heat of the liquid?",
					"opts": {
						"q0": "A. 60 J/g",
						"q1": "B. 120 J/g",
						"q2": "C. 300 J/g",
						"q3": "D. 360 J/g",
						"q4": "E. 1500 J/g"
					},
					"ans": "B",
					"sel": ""
				},
				"Q22": {
					"qs": "22. A positively charged sphere is suspended inside a hollow can placed on an insulating base. If the can is momentarily earthed and the charged sphere is then withdrawn, which of the following diagrams best represents the charge distribution on the can after this process?",
					"opts": {
						"q0": "A. <img src='img/physics/phys_1989_sectionb_qst22_1.jpg'>",
						"q1": "B. <img src='img/physics/phys_1989_sectionb_qst22_2.jpg'>",
						"q2": "C. <img src='img/physics/phys_1989_sectionb_qst22_3.jpg'>",
						"q3": "D. <img src='img/physics/phys_1989_sectionb_qst22_4.jpg'>",
						"q4": "E. <img src='img/physics/phys_1989_sectionb_qst22_5.jpg'>"
					},
					"ans": "E",
					"sel": ""
				},
				"Q23": {
					"qs": "23. Which of the following instruments can be used to compare the relative magnitudes of charge on two given bodies?",
					"opts": {
						"q0": "A. The electrophorus",
						"q1": "B. Ebonite rod",
						"q2": "C. Proof planes",
						"q3": "D. Gold leaf electroscope",
						"q4": "E. Capacitor"
					},
					"ans": "D",
					"sel": ""
				},
				"Q24": {
					"qs": "24. A short chain is usually attached to the back of a petrol tanker trailing behind it to ensure that the",
					"opts": {
						"q0": "A. petrol tanker is balanced on the road",
						"q1": "B. heat generated by friction in the engine can be conducted to the floor",
						"q2": "C. charges generated by friction in the tanker is conducted to the earth",
						"q3": "D. tanker moves slowly as the chain touches the road surface",
						"q4": "E. chain produces sound for the resonance of the tanker’s engine"
					},
					"ans": "C",
					"sel": ""
				},
				"Q25": {
					"qs": "25. A ray of light is incident on a plane mirror at an angle of 35°. What is the angle made by the reflected ray with the surface of the mirror?",
					"opts": {
						"q0": "A. 125°",
						"q1": "B. 70°",
						"q2": "C. 65°",
						"q3": "D. 55°",
						"q4": "E. 35°"
					},
					"ans": "D",
					"sel": ""
				},
				"Q26": {
					"qs": "26. The image in a pin-hole camera is always",
					"opts": {
						"q0": "A. diminished",
						"q1": "B. enlarged",
						"q2": "C. upright",
						"q3": "D. inverted",
						"q4": "E. blurred"
					},
					"ans": "D",
					"sel": ""
				},
				"Q27": {
					"qs": "27. The refractive index for a given transparent medium is 1.4. Which of the following is the minimum angle for total internal reflection to take place in the medium?",
					"opts": {
						"q0": "A. 30°",
						"q1": "B. 36°",
						"q2": "C. 44°",
						"q3": "D. 46°",
						"q4": "E. 54°"
					},
					"ans": "D",
					"sel": ""
				},
				"Q28": {
					"qs": "28. What will be the characteristics of the object OB shown after refraction through",
					"img": "img**phys_1989_sectionb_qst28_1.jpg",
					"opts": {
						"q0": "A. Magnified, virtual and inverted",
						"q1": "B. Real, inverted and magnified",
						"q2": "C. Diminished, virtual and inverted",
						"q3": "D. Erect, real and diminished",
						"q4": "E. Diminished, virtual and erect"
					},
					"ans": "E",
					"sel": ""
				},
				"Q29": {
					"qs": "29. A beam of light consisting of both green G and violet V colours is incident on a prism. Which of the following diagrams correctly illustrates the path of the beam?",
					"opts": {
						"q0": "A. <img src='img/physics/phys_1989_sectionb_qst29_1.jpg'>",
						"q1": "B. <img src='img/physics/phys_1989_sectionb_qst29_2.jpg'>",
						"q2": "C. <img src='img/physics/phys_1989_sectionb_qst29_3.jpg'>",
						"q3": "D. <img src='img/physics/phys_1989_sectionb_qst29_4.jpg'>",
						"q4": "E. <img src='img/physics/phys_1989_sectionb_qst29_5.jpg'>"
					},
					"ans": "E",
					"sel": ""
				},
				"Q30": {
					"qs": "30. The distance between a node and an antinode for a transverse wave is equal to",
					"opts": {
						"q0": "A. the wavelength",
						"q1": "B. thrice the wavelength",
						"q2": "C. one-half of the wavelength",
						"q3": "D. one-quarter of the wavelength",
						"q4": "E. three-quarters of the wavelength"
					},
					"ans": "C",
					"sel": ""
				},
				"Q31": {
					"qs": "31. Which of the following is a stringed instrument?",
					"opts": {
						"q0": "A. Flute",
						"q1": "B. Trumpet",
						"q2": "C. Piano",
						"q3": "D. Drum",
						"q4": "E. Saxophone"
					},
					"ans": "C",
					"sel": ""
				},
				"Q32": {
					"qs": "32. A sound pulse sent vertically downwards into the earth is reflected from two different layers of the earth such that echoes are heard after 1.2s and 1.4s. Assuming the speed of the pulse is 2000 m/s, calculate the distance between the layers",
					"opts": {
						"q0": "A. 200 m",
						"q1": "B. 400 m",
						"q2": "C. 2400 m",
						"q3": "D. 2600 m",
						"q4": "E. 2800 m"
					},
					"ans": "A",
					"sel": ""
				},
				"Q33": {
					"qs": "33. In a wave, the maximum displacement of particles from their equilibrium positions is called",
					"opts": {
						"q0": "A. frequency",
						"q1": "B. amplitude",
						"q2": "C. period",
						"q3": "D. wavelength",
						"q4": "E. wave velocity"
					},
					"ans": "B",
					"sel": ""
				},
				"Q34": {
					"qs": "34. A string is stretched tightly between two points 50 cm apart. It is plucked at its centre and the velocity of the wave produced is 300 m/s. Calculate the number of vibrations made by the string in one second.",
					"opts": {
						"q0": "A. 3",
						"q1": "B. 6",
						"q2": "C. 150",
						"q3": "D. 300",
						"q4": "E. 600"
					},
					"ans": "D",
					"sel": ""
				},
				"Q35": {
					"qs": "35. Which of the following is not a property of longitudinal waves?",
					"opts": {
						"q0": "A. Compression",
						"q1": "B. Reflection",
						"q2": "C. Refraction",
						"q3": "D. Polarization",
						"q4": "E. Diffraction"
					},
					"ans": "B",
					"sel": ""
				},
				"Q36": {
					"qs": "36. The diagrams show lines of force in electric fields. In which of the diagrams would a positive test charge experience less force as it moves from x to y?",
					"img": "img**phys_1989_sectionb_qst36_1.jpg",
					"opts": {
						"q0": "A. III only",
						"q1": "B. II only",
						"q2": "C. I only",
						"q3": "D. I and II only",
						"q4": "E. I and III only"
					},
					"ans": "B",
					"sel": ""
				},
				"Q37": {
					"qs": "37. What is the gravitational potential due to a molecule of mass m at a distance r from it? (G = gravitational constant)",
					"opts": {
						"q0": "A. <img src='img/physics/phys_1989_sectionb_qst37_1.jpg'>",
						"q1": "B. <img src='img/physics/phys_1989_sectionb_qst37_2.jpg'>",
						"q2": "C. <img src='img/physics/phys_1989_sectionb_qst37_3.jpg'>",
						"q3": "D. <img src='img/physics/phys_1989_sectionb_qst37_4.jpg'>",
						"q4": "E. <img src='img/physics/phys_1989_sectionb_qst37_5.jpg'>"
					},
					"ans": "B",
					"sel": ""
				},
				"Q38": {
					"qs": "38. Calculate the escape velocity for a rocket fired from the earth’s surface at a point where the acceleration due to gravity is <img src='img/physics/grav.jpg'> and the radius of the earth is <img src='img/physics/1989q38a.jpg'>",
					"opts": {
						"q0": "A. <img src='img/physics/1989q38b.jpg'>",
						"q1": "B. <img src='img/physics/1989q38c.jpg'>",
						"q2": "C. <img src='img/physics/1989q38d.jpg'>",
						"q3": "D. <img src='img/physics/1989q38e.jpg'>",
						"q4": "E. <img src='img/physics/1989q38f.jpg'>"
					},
					"ans": "B",
					"sel": ""
				},
				"Q39": {
					"qs": "39. The electric force between two point charges each of magnitude q at a distance of r apart in air of permitivity is",
					"opts": {
						"q0": "A. <img src='img/physics/phys_1989_sectionb_qst39_1.jpg'>",
						"q1": "B. <img src='img/physics/phys_1989_sectionb_qst39_2.jpg'>",
						"q2": "C. <img src='img/physics/phys_1989_sectionb_qst39_3.jpg'>",
						"q3": "D. <img src='img/physics/phys_1989_sectionb_qst39_4.jpg'>",
						"q4": "E. <img src='img/physics/phys_1989_sectionb_qst39_5.jpg'>"
					},
					"ans": "E",
					"sel": ""
				},
				"Q40": {
					"qs": "40. What is the total capacitance in the circuit represented by the diagram above?",
					"img": "img**phys_1989_sectionb_qst40_1.jpg",
					"opts": {
						"q0": "A. <img src='img/physics/phys_1989_sectionb_qst40_2.jpg'>",
						"q1": "B. <img src='img/physics/phys_1989_sectionb_qst40_3.jpg'>",
						"q2": "C. <img src='img/physics/phys_1989_sectionb_qst40_4.jpg'>",
						"q3": "D. <img src='img/physics/phys_1989_sectionb_qst40_5.jpg'>",
						"q4": "E. <img src='img/physics/phys_1989_sectionb_qst40_6.jpg'>"
					},
					"ans": "A",
					"sel": ""
				},
				"Q41": {
					"qs": "41. Calculate the energy stored in a <img src='img/physics/1989q41a.jpg'> capacitor if the potential difference between the plates is 20V",
					"opts": {
						"q0": "A. <img src='img/physics/1989q41b.jpg'>",
						"q1": "B. <img src='img/physics/1989q41c.jpg'>",
						"q2": "C. <img src='img/physics/1989q41d.jpg'>",
						"q3": "D. <img src='img/physics/1989q41e.jpg'>",
						"q4": "E. <img src='img/physics/1989q41f.jpg'>"
					},
					"ans": "C",
					"sel": ""
				},
				"Q42": {
					"qs": "42. In the diagram, the galvanometer indicates a null- deflection. What is the potential difference between X and Y?",
					"img": "img**phys_1989_sectionb_qst42_1.jpg",
					"opts": {
						"q0": "A. 0. volt",
						"q1": "B. 1.5 volts",
						"q2": "C. 2.0 volts",
						"q3": "D. 3.0 volts",
						"q4": "E. 4.0 volts"
					},
					"ans": "A",
					"sel": ""
				},
				"Q43": {
					"qs": "43. The circuit represented above is used for charging an accumulator from a d.c supply of e.m.f E1 and internal resistance rr If the e.m.f. of the accumulator is E2 with an internal resistance of r2, then equation for the charging current is",
					"img": "img**phys_1989_sectionb_qst43_1.jpg",
					"opts": {
						"q0": "A. <img src='img/physics/phys_1989_sectionb_qst43_2.jpg'>",
						"q1": "B. <img src='img/physics/phys_1989_sectionb_qst43_3.jpg'>",
						"q2": "C. <img src='img/physics/phys_1989_sectionb_qst43_4.jpg'>",
						"q3": "D. <img src='img/physics/phys_1989_sectionb_qst43_5.jpg'>",
						"q4": "E. <img src='img/physics/phys_1989_sectionb_qst43_6.jpg'>"
					},
					"ans": "A",
					"sel": ""
				},
				"Q44": {
					"qs": "44. A portable generator is connected to six 100 W lamps and a 600 W amplifying system. How much energy is consumed if the generator runs for 6 hours?",
					"opts": {
						"q0": "A. 0.2 kWh",
						"q1": "B. 1.2 kWh",
						"q2": "C. 3.0 kWh",
						"q3": "D. 4.2 kWh",
						"q4": "E. 7.2 kWh"
					},
					"ans": "E",
					"sel": ""
				},
				"Q45": {
					"qs": "45. In a metre bridge experiment, there is a zero deflection of the galvanometer when I = 40cm as shown in the diagram above. Calculate the value of the resistance R.",
					"img": "img**phys_1989_sectionb_qst45_1.jpg",
					"opts": {
						"q0": "A. 62/3 <img src='img/physics/ohm.jpg'>",
						"q1": "B. 15 <img src='img/physics/ohm.jpg'>",
						"q2": "C. 20 <img src='img/physics/ohm.jpg'>",
						"q3": "D. 0.25 <img src='img/physics/ohm.jpg'>",
						"q4": "E. 240 <img src='img/physics/ohm.jpg'>"
					},
					"ans": "B",
					"sel": ""
				},
				"Q46": {
					"qs": "46. Which of the following is not true of a discharge tube?",
					"opts": {
						"q0": "A. The pressure of gas must be very low.",
						"q1": "B. The glass tube must have two electrodes at the ends",
						"q2": "C. The gas in the tube must be carbondioxide",
						"q3": "D. Air is gradually pumped out of the tube",
						"q4": "E. The coating on the walls of the tube at a certain staqe glows"
					},
					"ans": "C",
					"sel": ""
				},
				"Q47": {
					"qs": "47. Which of the following diagrams gives the correct magnetic field pattern around a current carrying straight conductors?",
					"opts": {
						"q0": "A. <img src='img/physics/phys_1989_sectionb_qst47_1.jpg'>",
						"q1": "B. <img src='img/physics/phys_1989_sectionb_qst47_2.jpg'>",
						"q2": "C. <img src='img/physics/phys_1989_sectionb_qst47_3.jpg'>",
						"q3": "D. <img src='img/physics/phys_1989_sectionb_qst47_4.jpg'>",
						"q4": "E. <img src='img/physics/phys_1989_sectionb_qst47_5.jpg'>"
					},
					"ans": "A",
					"sel": ""
				},
				"Q48": {
					"qs": "48. Which of the following is/are correct about a plane rectangular current-carrying coil placed in uniform magnetic field? I. The forces in the two parallel sides produce a resultant translational motion. II. The torque is mum when the plane of the coil is parallel to the direction of the field. III. The forces on the two p sides are equal and opposite",
					"opts": {
						"q0": "A. I only",
						"q1": "B. II only",
						"q2": "C. III only",
						"q3": "D. I and III only",
						"q4": "E. II and III only"
					},
					"ans": "A",
					"sel": ""
				},
				"Q49": {
					"qs": "49. Which of the following materials should be used for the core in order to produce the strongest magnetic effect at J in the circuit illustrated in the diagram?",
					"img": "img**phys_1989_sectionb_qst49_1.jpg",
					"opts": {
						"q0": "A. Copper",
						"q1": "B. Iron",
						"q2": "C. Brass",
						"q3": "D. Plastic",
						"q4": "E. Steel"
					},
					"ans": "E",
					"sel": ""
				},
				"Q50": {
					"qs": "50. When a metal is heated to a high temperature, electrons are emitted from its surface. This process is known as",
					"opts": {
						"q0": "A. photoelectric emission",
						"q1": "B. artificial radioactivity",
						"q2": "C. field emission",
						"q3": "D. secondary emission",
						"q4": "E. thermionic emission"
					},
					"ans": "E",
					"sel": ""
				},
				"Q51": {
					"qs": "51. In an a.c. circuit the peak value of the potential difference is 180 V. What is the instantaneous p.d. when it has reached 1/8th of a cycle?",
					"opts": {
						"q0": "A. 45 V",
						"q1": "B. 90 V",
						"q2": "C. 90*sqrt(2) V",
						"q3": "D. 180 V",
						"q4": "E. 180*sqrt(2) V"
					},
					"ans": "C",
					"sel": ""
				},
				"Q52": {
					"qs": "52. Which of the following will not lower the surface tension of water?",
					"opts": {
						"q0": "A. Detergent",
						"q1": "B. Methylated spirit",
						"q2": "C. Soap solution",
						"q3": "D. Grease",
						"q4": "E. Camphor"
					},
					"ans": "B",
					"sel": ""
				},
				"Q53": {
					"qs": "53. Which of the following gives rise to the line spectra observed in atoms?",
					"opts": {
						"q0": "A. Kinetic energy of moving atom",
						"q1": "B. Potential energy of an electron inside an atom",
						"q2": "C. Change of an electron from a higher to a lower energy level in the atom",
						"q3": "D. Disturbed proton in the nucleus",
						"q4": "E. Excitation of an electron in the atom"
					},
					"ans": "C",
					"sel": ""
				},
				"Q54": {
					"qs": "54.	Which of the following is/are essential properties of the Bohr’s model of the atom? I. The electrons in the orbits have discrete values for their angular momentum. II. When the electrons jump from one orbit to another, they emit discrete energy packets or quanta. III. The energy emitted by the electrons in their orbits contain all possible wavelengths",
					"opts": {
						"q0": "A. I only",
						"q1": "B. I and II only",
						"q2": "C. II and III only",
						"q3": "D. I and III only",
						"q4": "E. I, II and III"
					},
					"ans": "B",
					"sel": ""
				},
				"Q55": {
					"qs": "55.	An elastic string of length I is stretched through a length e by a force F. The area of cross-section of the string is A and its Young’s modulus is E. Which of the following expressions is correct?",
					"opts": {
						"q0": "A. <img src='img/physics/phys_1989_sectionb_qst55_1.jpg'>",
						"q1": "B. <img src='img/physics/phys_1989_sectionb_qst55_2.jpg'>",
						"q2": "C. <img src='img/physics/phys_1989_sectionb_qst55_3.jpg'>",
						"q3": "D. <img src='img/physics/phys_1989_sectionb_qst55_4.jpg'>",
						"q4": "E. <img src='img/physics/phys_1989_sectionb_qst55_5.jpg'>"
					},
					"ans": "C",
					"sel": ""
				},
				"Q56": {
					"qs": "56. In the diagram, V is viscosity and U is upthrust. Which of the following equations holds when the falling body P has attained a terminal velocity?",
					"img": "img**phys_1989_sectionb_qst56_1.jpg",
				        "opts": {
						"q0": "A. V + mg = U",
						"q1": "B. V + U - mg = 0",
						"q2": "C. V = (mg/U)",
						"q3": "D. V - U = mg",
						"q4": "E. V + mg + U = 0"
					},
					"ans": "B",
					"sel": ""
				},
				"Q57": {
					"qs": "57. An electron jumps from one energy level to another in an atom radiating 4.5 x <img src='img/physics/10m19.jpg'> joules. If Planck’s constant is 6.6 x <img src='img/physics/10m34.jpg'> Js what is the wavelength of the radiation? Take velocity of light = <img src='img/physics/vellight.jpg'>",
					"opts": {
						"q0": "A. 4.4 x <img src='img/physics/10m4.jpg'> m",
						"q1": "B. 4.4 x <img src='img/physics/10m7.jpg'> m",
						"q2": "C. 4.0 x <img src='img/physics/10p7.jpg'> m",
						"q3": "D. 1.5 x <img src='img/physics/10m7.jpg'> m",
						"q4": "E. 1.5 x <img src='img/physics/10m19.jpg'> m"
					},
					"ans": "B",
					"sel": ""
				},
				"Q58": {
					"qs": "58. If a nucleus <img src='img/physics/1989q58a.jpg'> decays, a nucleus <img src='img/physics/1989q58b.jpg'> is formed accompanied with the emission of a",
					"opts": {
						"q0": "A. neutron",
						"q1": "B. proton",
						"q2": "C. beta particle",
						"q3": "D. gamma particle",
						"q4": "E. alpha particle"
					},
					"ans": "C",
					"sel": ""
				},
				"Q59": {
					"qs": "59. Which of the following statements is a correct consequence of the uncertainty principle?",
					"opts": {
						"q0": "A. The uncertainty in our knowledge of energy and the duration taken to measure it are each less than Planck’s constant",
						"q1": "B. The complete knowledge of the position of a particle implies the complete igorance of its energy",
						"q2": "C. It is possible to measure exactly both the position and momentum of a particle at the same time",
						"q3": "D. Both momentum and energy of a particle can be known with absolute certainly",
						"q4": "E. A particle’s kinetic energy cannot be measured accurately at any time"
					},
					"ans": "E",
					"sel": ""
				},
				"Q60": {
					"qs": "60. The phenomenon of radioactivity was first discovered by",
					"opts": {
						"q0": "A. Marie Curie",
						"q1": "B. Sir J.J. Thomson",
						"q2": "C. Henri Beequeral",
						"q3": "D. Niels Bohr",
						"q4": "E. Enrico Fremi"

					},
					"ans": "C",
					"sel": ""
				}
			}
		});
	});

	app.get('/physics/1990', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. Which of the following instruments is suitable for making the most accurate measurement of the internal diameter of a test tube?",
					"opts": {
						"q0": "A. metre rule",
						"q1": "B. A pair of callipers",
						"q2": "C. A micrometer screw gauge",
						"q3": "D. A tape rule",
						"q4": "E. A set square"
					},
					"ans": "B",
					"sel": ""
				},
				"Q2": {
					"qs": "2. A particle of mass 2.5 x 10^-6kg revolving around the earth has a radial acceleration of 4 x 107  m/s^2. What is the centripetal force of the particles?",
					"opts": {
						"q0": "A. <img src='img/physics/phys_1990_sectionb_qst2_1.jpg'>",
						"q1": "B. <img src='img/physics/phys_1990_sectionb_qst2_2.jpg'>",
						"q2": "C. <img src='img/physics/phys_1990_sectionb_qst2_3.jpg'>",
						"q3": "D. <img src='img/physics/phys_1990_sectionb_qst2_4.jpg'>",
						"q4": "E. <img src='img/physics/phys_1990_sectionb_qst2_5.jpg'>"
					},
					"ans": "D",
					"sel": ""
				},
				"Q3": {
					"qs": "3. An oscillating pendulum has a velocity of 2 m/s at the equilibrium position O and velocity at same point P. Using the diagram above, calculate the height h of P above O. (Take g = 10 m/s^2)",
					"img": "img**phys_1990_sectionb_qst3_1.jpg",
					"opts": {
						"q0": "A. 5.0 m",
						"q1": "B. 2.0 m",
						"q2": "C. 0.4 m",
						"q3": "D. 0.2 m",
						"q4": "E. 0.1 m"
					},
					"ans": "D",
					"sel": ""
				},
				"Q4": {
					"qs": "4. Which of the following are contact forces? I, Force of tension II. Force of friction, II, Magnetic force IV, Force of reaction.",
					"opts": {
						"q0": "A. I, II and III only",
						"q1": "B. I, II and IV only",
						"q2": "C. I, III and IV only",
						"q3": "D. II, III and IV only",
						"q4": "E. I and IV only"
					},
					"ans": "B",
					"sel": ""
				},
				"Q5": {
					"qs": "5. A plane inclined at an angle at 30° to the horizontal has an efficiency of 50%. The force parallel to the plane required to push a load of 120 N uniformly up the plane is",
					"opts": {
						"q0": "A. 40(3^0.5) N",
						"q1": "B. 60 N",
						"q2": "C. 120 N",
						"q3": "D. 200 N",
						"q4": "E. 240 N"
					},
					"ans": "C",
					"sel": ""
				},
				"Q6": {
					"qs": "6. The diagram represents a portion of a micrometer screw gauge. What is its reading?",
					"img": "img**phys_1990_sectionb_qst6_1.jpg",
					"opts": {
						"q0": "A. 3.70 mm",
						"q1": "B. 3.67 mm",
						"q2": "C. 3.50 mm",
						"q3": "D. 3.33 mm",
						"q4": "E. 3.17 mm"
					},
					"ans": "E",
					"sel": ""
				},
				"Q7": {
					"qs": "7. A girl whose mass is 55kg stands on a spring - weighing machine inside a lift. When the lift starts to ascend, its acceleration is 2 m/s^2. What will be the reading on the machine? (Take g =  m/s^2)",
					"opts": {
						"q0": "A. 66 kg",
						"q1": "B. 55 kg",
						"q2": "C. 44 kg",
						"q3": "D. 22 kg",
						"q4": "E. 11 kg"
					},
					"ans": "A",
					"sel": ""
				},
				"Q8": {
					"qs": "8. Two forces each of 4 N act on the opposite sides of a rectangular plate as shown in the diagram. Calculate the magnitude of the couple acting on the plate.",
					"img": "img**phys_1990_sectionb_qst8_1.jpg",
					"opts": {
						"q0": "A. 6.4 Nm",
						"q1": "B. 3.2 Nm",
						"q2": "C. 1.6 Nm",
						"q3": "D. 0.8 Nm",
						"q4": "E. 0.0 Nm"
					},
					"ans": "C",
					"sel": ""
				},
				"Q9": {
					"qs": "9. A force F is applied to a body P as shown in the diagram above. If the body P moves through a distance r, which of the following represents the work done?",
			        "img": "img**phys_1990_sectionb_qst9_1.jpg",
					"opts": {
						"q0": "img**phys_1990_sectionb_qst9_2.jpg",
						"q1": "img**phys_1990_sectionb_qst9_3.jpg",
						"q2": "img**phys_1990_sectionb_qst9_4.jpg",
						"q3": "img**phys_1990_sectionb_qst9_5.jpg",
						"q4": "img**phys_1990_sectionb_qst9_6.jpg"
					},
					"ans": "E",
					"sel": ""
				},
				"Q10": {
					"qs": "10. An object R leaves a platform XY with a horizontal velocity of 7m^-1 and lands at Q. If it takes the same object 0.3s to fall freely from Y to P, calculate the distance PQ (Take g = 10 m/s^2)",
					"img": "img**phys_1990_sectionb_qst10_1.jpg",
					"opts": {
						"q0": "A. 7.30 m",
						"q1": "B. 2.55 m",
						"q2": "C. 2.10 m",
						"q3": "D. 1.65 m",
						"q4": "E. 0.45 m"
					},
					"ans": "C",
					"sel": ""
				},
				"Q11": {
					"qs": "11. A simple pendulum makes 50 oscillations in one minute. What is its period of oscillation?",
					"opts": {
						"q0": "A. 0.02 s",
						"q1": "B. 0.20 s",
						"q2": "C. 0.83 s",
						"q3": "D. 1.20 s",
						"q4": "E. 50.00 s"
					},
					"ans": "D",
					"sel": ""
				},
				"Q12": {
					"qs": "12. The body P shown in the diagram is in equilibrium. If the mass of the body is 10kg, calculate the tension T in the string. (Take g = 10 m/s^2)",
					"img": "img**phys_1990_sectionb_qst12_1.jpg",
					"opts": {
						"q0": "A. 20/(3^0.5) N",
						"q1": "B. 20 N",
						"q2": "C. 50 N",
						"q3": "D. 200/(3^0.5) N",
						"q4": "E. 200 N"
					},
					"ans": "E",
					"sel": ""
				},
				"Q13": {
					"qs": "13. An object weighs 10.0 N in air and 7.0 N in water. What is its weight when immersed in a liquid of relative density 1.5?",
					"opts": {
						"q0": "A. 4.50 N",
						"q1": "B. 4.67 N",
						"q2": "C. 5.50 N",
						"q3": "D. 6.67 N",
						"q4": "E. 8.50 N"
					},
					"ans": "C",
					"sel": ""
				},
				"Q14": {
					"qs": "14. The absolute zero temperature is defined as the temperature at which",
					"opts": {
						"q0": "A. thermal motion ceases",
						"q1": "B. the temperature of a gas is 273 °C",
						"q2": "C. ice melts",
						"q3": "D. the volume of a real gas is maximum",
						"q4": "E. the pressure of a real gas is maximum"
					},
					"ans": "A",
					"sel": ""
				},
				"Q15": {
					"qs": "15. A cube made of a metal of linear expansivity is warmed through a temperature oft. If the initial volume of the cube is V, what is the increase in volume of the cube?",
					"opts": {
						"q0": "img**phys_1990_sectionb_qst15_1.jpg",
						"q1": "img**phys_1990_sectionb_qst15_2.jpg",
						"q2": "img**phys_1990_sectionb_qst15_3.jpg",
						"q3": "img**phys_1990_sectionb_qst15_4.jpg",
						"q4": "img**phys_1990_sectionb_qst15_5.jpg"
					},
					"ans": "E",
					"sel": ""
				},
				"Q16": {
					"qs": "16. Dry hydrogen is trapped by pellet of mercury in a uniform capillary tube closed at one end. If the length of the column of hydrogen at 27°C is 1.0m, at what temperature will the length be 1.20m?",
					"opts": {
						"q0": "A. 22.5 °C",
						"q1": "B. 32.4 °C",
						"q2": "C. 77.0 °C",
						"q3": "D. 87.0 °C",
						"q4": "E. 360.0 °C"
					},
					"ans": "D",
					"sel": ""
				},
				"Q17": {
					"qs": "17. Two solids P and Q of equal mass are heated to the same temperature and dropped simultaneously into two identical containers X and Y containing equal volumes of water at room temperature. The temperature of X will rise higher than that of Y only if the",
					"opts": {
						"q0": "A. volume of P is greater than that of Q",
						"q1": "B. specific heat capacity of P is higher than that of Q",
						"q2": "C. density of P is greater than that of Q",
						"q3": "D. density of P is lower than that of Q",
						"q4": "E. specific heat capacity of P is lower than that of Q"
					},
					"ans": "B",
					"sel": ""
				},
				"Q18": {
					"qs": "18. If the temperature of a small quantity of water in a closed container is gradually increased from 0° to 40°C then the density of the water within this range",
					"opts": {
						"q0": "A. increases for a while and then decreases",
						"q1": "B. decreases for a while and then increases",
						"q2": "C. increases gradually",
						"q3": "D. decreases gradually",
						"q4": "E. remains the same"
					},
					"ans": "C",
					"sel": ""
				},
				"Q19": {
					"qs": "19. How much heat is given out when a piece of iron of mass 50g and specific heat capacity 460 Jkg^-1k^-1 cools from 85°C to 25°C?",
					"opts": {
						"q0": "A. 1.38 x10^8 J",
						"q1": "B. 2.53 x 10^4 J",
						"q2": "C. 7.66x10^3 J",
						"q3": "D. 1.38 x 10^3 J",
						"q4": "E. 1.27 x 10^3 J"
					},
					"ans": "D",
					"sel": ""
				},
				"Q20": {
					"qs": "20. Heat transfer by convection in a liquid is due to the",
					"opts": {
						"q0": "A. translatory motion of the molecules of the liquid",
						"q1": "B. increased vibration of the molecules of the liquid about their mean positions",
						"q2": "C. expansion of the liquid as it is heated",
						"q3": "D. latent heat of vaporization of the liquid",
						"q4": "E. ability of the liquid to evaporate at all temperatures"
					},
					"ans": "A",
					"sel": ""
				},
				"Q21": {
					"qs": "21. Which of the following is not a suitable method for reducing loss of heat from a piece of hot iron?",
					"opts": {
						"q0": "A. Wrapping it in cotton wool",
						"q1": "B. painting it black",
						"q2": "C. Placing it in a vacuum",
						"q3": "D. Placing it on rubber supports",
						"q4": "E. Keeping it in a closed wooden box"
					},
					"ans": "B",
					"sel": ""
				},
				"Q22": {
					"qs": "22. When the direction of vibration of the particles of a medium is perpendicular to the direction of travel of a wave the wave transmitted is known as",
					"opts": {
						"q0": "A. sound wave",
						"q1": "B. transverse wave",
						"q2": "C. longitudinal wave",
						"q3": "D. stationary wave",
						"q4": "E. mechanical wave"
					},
					"ans": "B",
					"sel": ""
				},
				"Q23": {
					"qs": "23. A bat emits a sound wave at a speed of 1650.0 m/s and receives the echoes 0.15s later. Calculate the distance of the bat from the reflector",
					"opts": {
						"q0": "A. 8.75 m",
						"q1": "B. 16.50 m",
						"q2": "C. 87.75 m",
						"q3": "D. 123.75 m",
						"q4": "E. 330.00 m"
					},
					"ans": "D",
					"sel": ""
				},
				"Q24": {
					"qs": "24. A tuning fork sounds louder when its stem is pressed against a table top than when held in air because",
					"opts": {
						"q0": "A. a larger mass of air is set vibrating by the table top",
						"q1": "B. the whole table vibrates in resonance",
						"q2": "C. the whole table has acquired a larger frequency",
						"q3": "D. the fork and table have the same frequency",
						"q4": "E. the amplitude of the vibrating fork is increased"
					},
					"ans": "C",
					"sel": ""
				},
				"Q25": {
					"qs": "25. Which of the following is/are characteristics of sound? I Pitch II. Loudness III. Quality IV Noise",
					"opts": {
						"q0": "A. I only",
						"q1": "B. II only",
						"q2": "C. I and II only",
						"q3": "D. I, II and III only",
						"q4": "E. I, II III and IV"
					},
					"ans": "D",
					"sel": ""
				},
				"Q26": {
					"qs": "26. The diagram above represents part of a wave motion in air. If the wave travels with a speed of 300 m/s calculate the frequency of the wave",
			        "img": "img**phys_1990_sectionb_qst26_1.jpg",
					"opts": {
						"q0": "A. 360 Hz",
						"q1": "B. 300 Hz",
						"q2": "C. 250 Hz",
						"q3": "D. 150 Hz",
						"q4": "E. 100 Hz"
					},
					"ans": "C",
					"sel": ""
				},
				"Q27": {
					"qs": "27. Which of the following is/are necessary for the Toduction of interference with two wave trains? I. The sources must be close to each other. II The waves must have the same frequency. III. The waves must have the same amplitude. IV. The waves must travel with the speed of light.",
					"opts": {
						"q0": "A. I, II and IV",
						"q1": "B. I, II and III only",
						"q2": "C. I and II only",
						"q3": "D. II, III and IV only",
						"q4": "E. I, II and IV only"
					},
					"ans": "B",
					"sel": ""
				},
				"Q28": {
					"qs": "28. A stone is dropped into the middle of a pool of water. Which of the following statements is/are correct? I, Spherical waves are set up in the water. II. The water moves outwards to the sides of the pool. III. Energy is transmitted outwards from the centre of disturbance",
					"opts": {
						"q0": "A. I only",
						"q1": "B. II only",
						"q2": "C. III only",
						"q3": "D. I and III only",
						"q4": "E. II and III only"
					},
					"ans": "D",
					"sel": ""
				},
				"Q29": {
					"qs": "29. A concave mirror of radius of curvature 20cm has a pin placed at 15cm from its pole. What will be the magnification of the image formed?",
					"opts": {
						"q0": "A. 4.00",
						"q1": "B. 2.00",
						"q2": "C. 1.33",
						"q3": "D. 1.50",
						"q4": "E. 0.25"
					},
					"ans": "B",
					"sel": ""
				},
				"Q30": {
					"qs": "30. Where will the image of the object OB shown in the diagram above be located after reflection from the mirror?",
					"img": "img**phys_1990_sectionb_qst30_1.jpg",
					"opts": {
						"q0": "A. At F",
						"q1": "B. Beyond C",
						"q2": "C. Between O and P",
						"q3": "D. Between P and F ",
						"q4": "E. Between F and C"
					},
					"ans": "D",
					"sel": ""
				},
				"Q31": {
					"qs": "31. A parallel beam of light is to be obtained from the headlamp of a car. At which of the following positions should the source of light be placed from the pole of its spherical mirror?",
					"opts": {
						"q0": "A. At the focal point",
						"q1": "B. At the centre of curvature",
						"q2": "C. Beyond the centre of curvature",
						"q3": "D. Between the focal point and the pole",
						"q4": "E. Between the focal point and the centre of curvature"
					},
					"ans": "A",
					"sel": ""
				},
				"Q32": {
					"qs": "32. The diagram above shows an incident ray AO inclined at an angle of 50° to the interface CB. The refracted ray OB is found to lie along the surface. What is the refractive index of the medium X with respect to air?",
					"img": "img**phys_1990_sectionb_qst32_1.jpg",
					"opts": {
						"q0": "img**phys_1990_sectionb_qst32_2.jpg",
						"q1": "img**phys_1990_sectionb_qst32_3.jpg",
						"q2": "img**phys_1990_sectionb_qst32_4.jpg",
						"q3": "img**phys_1990_sectionb_qst32_5.jpg",
						"q4": "img**phys_1990_sectionb_qst32_6.jpg"
					},
					"ans": "E",
					"sel": ""
				},
				"Q33": {
					"qs": "33. The eye defect j illustrated by the diagram above is",
					"img": "img**phys_1990_sectionb_qst33_1.jpg",
					"opts": {
						"q0": "A. astigmatism",
						"q1": "B. long sightedness",
						"q2": "C. loss accommodation",
						"q3": "D. short sightedness",
						"q4": "E. colour blindness"
					},
					"ans": "B",
					"sel": ""
				},
				"Q34": {
					"qs": "34. A simple microscope forms an image twice the size of the object. If the focal length of the lens of the microscope is 20m, how far is the object from the lens?",
					"opts": {
						"q0": "A. 10 m",
						"q1": "B. 20 m",
						"q2": "C. 30 m",
						"q3": "D. 40 m",
						"q4": "E. 60 m"
					},
					"ans": "C",
					"sel": ""
				},
				"Q35": {
					"qs": "35. Which of the following pairs of light rays shows the widest separation in the spectrum of white light?",
					"opts": {
						"q0": "A. Yellow and red",
						"q1": "B. Orange and green",
						"q2": "C. Violet and blue",
						"q3": "D. Blue and green",
						"q4": "E. Red and indigo"
					},
					"ans": "E",
					"sel": ""
				},
				"Q36": {
					"qs": "36. Given that the gravitational constant is 7 x 10^-11 Nm^2kg^-2, what is the force of attraction between 10^6kg mass of lead hanging one metre away from a 10^3kg mass of iron?",
					"opts": {
						"q0": "A. 7 x 10^-20 N",
						"q1": "B. 7 x 10^-8 N",
						"q2": "C. 7 x 10^-2 N",
						"q3": "D. 7 x 10^3 N",
						"q4": "E. 7 x 10^0 N"
					},
					"ans": "C",
					"sel": ""
				},
				"Q37": {
					"qs": "37. Calculate the current in the 30 resistor shown in the diagram ",
					"img": "img**phys_1990_sectionb_qst37_1.jpg",
					"opts": {
						"q0": "A. 3.0 A",
						"q1": "B. 4.0 A",
						"q2": "C. 4.3 A",
						"q3": "D. 12.0 A",
						"q4": "E. 39.0 A"
					},
					"ans": "B",
					"sel": ""
				},
				"Q38": {
					"qs": "38. What is the electric potential energy between two protons each of charge q and at a distance of r apart? (Permittivity of free space = £o)",
					"opts": {
						"q0": "img**phys_1990_sectionb_qst38_1.jpg",
						"q1": "img**phys_1990_sectionb_qst38_2.jpg",
						"q2": "img**phys_1990_sectionb_qst38_3.jpg",
						"q3": "img**phys_1990_sectionb_qst38_4.jpg",
						"q4": "img**phys_1990_sectionb_qst38_5.jpg"
					},
					"ans": "C",
					"sel": ""
				},
				"Q39": {
					"qs": "39. A work of 30 joules is done is transfering 5 millicoulombs of charge from a point B to a point A in an electric field. The potential difference between B and A is",
					"opts": {
						"q0": "A. 1.7 x 10^-4 V",
						"q1": "B. 3.4 x 10^-4 V",
						"q2": "C. 1.5 x 10^-1 V ",
						"q3": "D. 6.0 x 10^3 V",
						"q4": "E. 1.2 x 10^4 V"
					},
					"ans": "D",
					"sel": ""
				},
				"Q40": {
					"qs": "40. What is the value of R when G shows no deflection in the circuit illustrated?",
					"img": "img**phys_1990_sectionb_qst40_1.jpg",
					"opts": {
						"q0": "A. 800",
						"q1": "B. 750",
						"q2": "C. 450",
						"q3": "D. 200",
						"q4": "E. 100"
					},
					"ans": "D",
					"sel": ""
				},
				"Q41": {
					"qs": "41. Which of the following field patterns between two unlike charges is correct?",
					"opts": {
						"q0": "img**phys_1990_sectionb_qst41_1.jpg",
						"q1": "img**phys_1990_sectionb_qst41_2.jpg",
						"q2": "img**phys_1990_sectionb_qst41_3.jpg",
						"q3": "img**phys_1990_sectionb_qst41_4.jpg",
						"q4": "img**phys_1990_sectionb_qst41_5.jpg"
					},
					"ans": "A",
					"sel": ""
				},
				"Q42": {
					"qs": "42. A charge of 1.0 x 10^-5 coulombs experiences a force of 40 N at a certain point in space. What is the electric field intensity? ",
					"opts": {
						"q0": "A. 8.00 x 10^6 N/C",
						"q1": "B. 4.00 x 10^6 N/C ",
						"q2": "C. 4.00 x 10^-4 N/C ",
						"q3": "D. 2.00 x 10^-4 N/C",
						"q4": "E. 2.50 x 10^-1 N/C"
					},
					"ans": "B",
					"sel": ""
				},
				"Q43": {
					"qs": "43. If the frequency of the a.c. circuit illustrated is 500/TT HZ what would be the reactance in the circuit?",
					"img": "img**phys_1990_sectionb_qst43_1.jpg",
					"opts": {
						"q0": "A. (0.0009/pi) ohms",
						"q1": "B. 100 ohms",
						"q2": "C. 1030 ohms",
						"q3": "D. 1400 ohms",
						"q4": "E. 2500 ohms"
					},
					"ans": "B",
					"sel": ""
				},
				"Q44": {
					"qs": "44. Calculate the resistance of the filament of a lamp rates 240 V, 40 W",
					"opts": {
						"q0": "A. 240 ohms",
						"q1": "B. 360 ohms",
						"q2": "C. 720 ohms",
						"q3": "D. 1440 ohms",
						"q4": "E. 2880 ohms"
					},
					"ans": "D",
					"sel": ""
				},
				"Q45": {
					"qs": "45. Birds can perch safely on overhead electric power cables without being electrocuted because",
					"opts": {
						"q0": "A. birds can withstand high p.d. of the electric power cables",
						"q1": "B. any accumulated charge on the birds is quickly dissipated",
						"q2": "C. the feet of the birds are well insulated",
						"q3": "D. the current is a.c. and has particular direction",
						"q4": "E. there is no p.d between the birds and the cables"
					},
					"ans": "C",
					"sel": ""
				},
				"Q46": {
					"qs": "46. A cell of e.m.f. 1.5 V and internal resistance of 2.5 ohms is connected in series with an ammeter of resistance 0.5 ohms and a resistor of resistance 7.0 Ohms. Calculate the current in the circuit",
					"opts": {
						"q0": "A. 0.15 A",
						"q1": "B. 0.20 A",
						"q2": "C. 0.60 A",
						"q3": "D. 3.00 A",
						"q4": "E. 6.67 A"
					},
					"ans": "A",
					"sel": ""
				},
				"Q47": {
					"qs": "47. A rectangular coil of wire can rotate in a magnetic field. The ends of the coil are soldered to the two halves of a split ring. Two carbon brushes are made to press lightly against the split ring and when these are connected in circuit with a battery and rheostat, the coil rotates. This is a description of",
					"opts": {
						"q0": "A. a suspended- coil vanometer",
						"q1": "B. a moving-cell ammeter",
						"q2": "C. a d.c generator",
						"q3": "D. an electric motor",
						"q4": "E. an induction coil"
					},
					"ans": "C",
					"sel": ""
				},
				"Q48": {
					"qs": "48. How long will it take to heat 3 kg of water from 28°C to 88°C in an electric taking a current of 6 A from an e.m.f. source of 220V?",
					"opts": {
						"q0": "A. 96 s",
						"q1": "B. 1.20 s",
						"q2": "C. 570 s",
						"q3": "D. 600 s",
						"q4": "E. 1200 s"
					},
					"ans": "C",
					"sel": ""
				},
				"Q49": {
					"qs": "49.	Which of the following reduce(s) the effect of the back e.m.f. generated in the primary coil of an induction coil? The capacitor in the circuit II. The make and break contact in the circuit III. The ratio of turns in the secondary to that in the primary",
					"opts": {
						"q0": "A. I only",
						"q1": "B. II only",
						"q2": "C. I and II only",
						"q3": "D. II and III only",
						"q4": "E. I, II and III"
					},
					"ans": "C",
					"sel": ""
				},
				"Q50": {
					"qs": "50. Which of the following particles conduct electricitythrough salty water?",
					"opts": {
						"q0": "A. Atom",
						"q1": "B. Molecules",
						"q2": "C. Electrons",
						"q3": "D. Neutrons",
						"q4": "E. Ions"
					},
					"ans": "E",
					"sel": ""
				},
				"Q51": {
					"qs": "51.	When the pressure of the gas in a discharge tube is gradually lowered. I. there is a violet glow in the tube II. the glow in the tube splits into bands which get further apart. Ill, the glow and the bands eventually disappear and there is a green fluorescence in the tube. IV. the tube breaks into pieces. Which of the following are correct?",
					"opts": {
						"q0": "A. I and II only",
						"q1": "B. I and III only",
						"q2": "C. I and IV only",
						"q3": "D. I, II and III only",
						"q4": "E. I, II III and IV"
					},
					"ans": "B",
					"sel": ""
				},
				"Q52": {
					"qs": "52. Which of the following statements about the atom is/are correct? I. Energy is needed to remove electrons from an atom II. Particles in the nucleus of an atom are bound together by strong forces. III. A large amount of energy is required to separate the particles in the nucleus of an atom. IV. When the nucleus of a uranium atom is split, the energy released accounts for the difference in the masses of the products and the parent nucleus",
					"opts": {
						"q0": "A. I only",
						"q1": "B. I and II only",
						"q2": "C. I and III only",
						"q3": "D. II and IV only",
						"q4": "E. I, II, III and IV"
					},
					"ans": "D",
					"sel": ""
				},
				"Q53": {
					"qs": "53. The nucleon number and the proton number of a neutral atom of an element are 238 and 92 respectively. What	is the number of neutrons in the atom?",
					"opts": {
						"q0": "A. 330",
						"q1": "B. 165",
						"q2": "C. 146",
						"q3": "D. 119",
						"q4": "E. 73"
					},
					"ans": "C",
					"sel": ""
				},
				"Q54": {
					"qs": "54. Water does not drip through an open umbrella of silk material unless the inside of the umbrella is touched. Which of the following phenomena is responsible for this?",
					"opts": {
						"q0": "A. Surface tension",
						"q1": "B. Hydrostatic upthrust",
						"q2": "C. Viscosity",
						"q3": "D. Diffusion",
						"q4": "E. Osmosis"
					},
					"ans": "C",
					"sel": ""
				},
				"Q55": {
					"qs": "55. A radioactive substance has a half-life of 20 hours. What fraction of the original radioactive nuclei will remain after 80 hours?",
					"opts": {
						"q0": "A. 1/32",
						"q1": "B. 1/16",
						"q2": "C. 1/8",
						"q3": "D. 1/4",
						"q4": "E. 1/2"
					},
					"ans": "B",
					"sel": ""
				},
				"Q56": {
					"qs": "56. A metal is illuminated with a radiation of energy 6.88eV. If the kinetic energy of the emitted electrons is 1.50eV, calculate the work function of the metal.",
					"opts": {
						"q0": "A. 0.22 eV",
						"q1": "B. 4.59 eV",
						"q2": "C. 5.38 eV",
						"q3": "D. 8.38 eV",
						"q4": "E. 10.32 eV"
					},
					"ans": "C",
					"sel": ""
				},
				"Q57": {
					"qs": "57. Which of the following is not crystal?",
					"opts": {
						"q0": "A. Sodium chloride",
						"q1": "B. Lead",
						"q2": "C. Copper (II) tetraoxosulphate (VI)",
						"q3": "D. Glass",
						"q4": "E. Germanium"
					},
					"ans": "B",
					"sel": ""
				},
				"Q58": {
					"qs": "58. Viscosity in a liquid does not depend on the",
					"opts": {
						"q0": "A. nature of the liquid",
						"q1": "B. relative velocity between the liquid layers",
						"q2": "C. area of the surfaces in contact",
						"q3": "D. temperature of the liquid",
						"q4": "E. normal reaction between the liquid layers"
					},
					"ans": "E",
					"sel": ""
				},
				"Q59": {
					"qs": "59. What is the difference between a crystalline and an amorphous solid? A crystalline solid ",
					"opts": {
						"q0": "A. has cubic structure while amorphous solid has hexagonal structure",
						"q1": "B. has regularly-repeating pattern while an amorphous solid has not",
						"q2": "C. is white while amorphous solid is yellow",
						"q3": "D. is always hard while amorphous solid is always soft",
						"q4": "E. melts on heating while an amorphous solid sublimates on heating"
					},
					"ans": "B",
					"sel": ""
				},
				"Q60": {
					"qs": "60. Which of the following is not an evidence of the particle nature of matter?",
					"opts": {
						"q0": "A. Diffusion",
						"q1": "B. Brownian motion",
						"q2": "C. Diffraction",
						"q3": "D. Crystal structure",
						"q4": "E. Photoelectricity"
					},
					"ans": "C",
					"sel": ""
				}
			}
		});
	});

	app.get('/physics/1991', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. Which of the following is a fundamental quantity?",
					"opts": {
						"q0": "A. Speed",
						"q1": "B. Density",
						"q2": "C. Length",
						"q3": "D. Impulse",
						"q4": "E. Energy"
					},
					"ans": "C",
					"sel": ""
				},
				"Q2": {
					"qs": "2. A body moves with a constant speed but has an acceleration. This is possible if it",
					"opts": {
						"q0": "A. moves in a straight line",
						"q1": "B. moves in a circle",
						"q2": "C. is oscillating",
						"q3": "D. is in equilibrium",
						"q4": "E. has a varying acceleration."
					},
					"ans": "B",
					"sel": ""
				},
				"Q3": {
					"qs": "3. A ball is projected horizontally from the top of a hill with a velocity of 20m^-1. If it reaches the ground 4 seconds later, what is the height of the hill? (g = 10 m/s^2)",
					"opts": {
						"q0": "A. 20m",
						"q1": "B. 40m",
						"q2": "C. 80m",
						"q3": "D. 160m",
						"q4": "E. 200m."
					},
					"ans": "C",
					"sel": ""
				},
				"Q4": {
					"qs": "4. Two forces, whose resultant is 100 N, are perpendicular to each other. If one of them makes an angle of 60° with the resultant, calculate its magnitude. (Sin 60° = 0.8660, Cos 60° = 0.5000)",
					"opts": {
						"q0": "A. 200.0 N",
						"q1": "B. 173.2 N",
						"q2": "C. 115.5 N",
						"q3": "D. 86.6 N",
						"q4": "E. 50.0 N."
					},
					"ans": "E",
					"sel": ""
				},
				"Q5": {
					"qs": "5. A body moving with uniform acceleration has two points (5,15) and 20,60) on the velocity-time graph of its motion. Calculate",
					"opts": {
						"q0": "A. 0.25 m/s^2 ",
						"q1": "B. 3.00 m/s^2",
						"q2": "C. 4.00 m/s^2",
						"q3": "D. 9.00 m/s^2",
						"q4": "E. 16.00 m/s^2"
					},
					"ans": "B",
					"sel": ""
				},
				"Q6": {
					"qs": "6. The diagram shows the position of a simple pendulum set in motion. At which of the positions does the pendulum have maximum kinetic energy?",
					"img": "img**phys_1991_sectionb_qst6_1.jpg",
					"opts": {
						"q0": "A. 5",
						"q1": "B. 4",
						"q2": "C. 3",
						"q3": "D. 2",
						"q4": "E. 1."
					},
					"ans": "C",
					"sel": ""
				},
				"Q7": {
					"qs": "7. An orange fruit drops to the ground from the top of a tree 45m tall. How long does it take to reach the ground? (g = 10 m/s^2)",
					"opts": {
						"q0": "A. 3.0s",
						"q1": "B. 4.5s",
						"q2": "C. 6.0s",
						"q3": "D. 7.5s",
						"q4": "E. 9.0s."
					},
					"ans": "A",
					"sel": ""
				},
				"Q8": {
					"qs": "8. Power is defined as the",
					"opts": {
						"q0": "A. capacity to exert a force",
						"q1": "B. product of force and time",
						"q2": "C. product of force and distance",
						"q3": "D. ability to do work",
						"q4": "E. energy expended per unit time."
					},
					"ans": "E",
					"sel": ""
				},
				"Q9": {
					"qs": "9. The product PV where P is pressure and V is volume has the same unit as",
					"opts": {
						"q0": "A. power",
						"q1": "B. work",
						"q2": "C. acceleration",
						"q3": "D. impulse",
						"q4": "E. force."
					},
					"ans": "B",
					"sel": ""
				},
				"Q10": {
					"qs": "10. The diagram represents a block-and- tackle pulley system on which an effort of 50 N is just able to lift a load of weight W. If the efficiency of the machine is 40%, find the value of W.",
					"img": "img**phys_1991_sectionb_qst10_1.jpg",
					"opts": {
						"q0": "A. 300 N",
						"q1": "B. 200 N",
						"q2": "C. 140 N",
						"q3": "D. 120 N",
						"q4": "E. 20 N."
					},
					"ans": "D",
					"sel": ""
				},
				"Q11": {
					"qs": "11. A boatman facing north wants to cross a flowing river to a point directly opposite its position at the other bank. If the river is flowing eastwards, in what direction should he row his boat?",
					"opts": {
						"q0": "A. West",
						"q1": "B. East",
						"q2": "C. North-West",
						"q3": "D. North-East",
						"q4": "E. South-West."
					},
					"ans": "C",
					"sel": ""
				},
				"Q12": {
					"qs": "12. The diagram represents Six’s maximum and minimum thermo¬meter. If the temperature of the surrounding falls which, of the following correctly states how the steel indices in the thermometer would respond to the change in temperature?",
					"img": "img**phys_1991_sectionb_qst12_1.jpg",
					"opts": {
						"q0": "A. S1 would move upwards but S2 would not move",
						"q1": "B. S1 would not move but S2 would move upwards",
						"q2": "C. Both S1 and S2 would move upwards",
						"q3": "D. S1 would move upwards and S2 would move downwards",
						"q4": "E. S1 would move downwards and S2 would move upwards."
					},
					"ans": "B",
					"sel": ""
				},
				"Q13": {
					"qs": "13. A wire, 20 m long, is heated from a temperature of 5°C to 55°C, If the change in length is 0.020 m, calculate the linear expansivity of the wire.",
					"opts": {
						"q0": "A. 1.0 x 10^-3K^-1",
						"q1": "B. 2.0 x 10^-4K^-1",
						"q2": "C. 2.0 x 10^-5K^-1",
						"q3": "D. 1.0 x 10^-5K^-1",
						"q4": "E. 2.0 x 10^-6K^-1."
					},
					"ans": "C",
					"sel": ""
				},
				"Q14": {
					"qs": "14. A waterfall is 420 m high. Calculate the difference in temperature of the water between the top and bottom of the waterfall. Neglect heat losses, (g = 10.0 m^-2 specific heat capacity of water = 4.20 x 10^-3 JKg^-1K^-1)",
					"opts": {
						"q0": "A. 0.1 °C",
						"q1": "B. 1.0°C",
						"q2": "C. 4.2°C",
						"q3": "D. 42.0°C",
						"q4": "E. 100.0°C."
					},
					"ans": "B",
					"sel": ""
				},
				"Q15": {
					"qs": "15. The set-up 45cm illustrated above shows a 15cm capillary tube of uniform cross- sectional area in two different arrangements. Using the data in the diagrams, calculate the pressure of the atmosphere",
					"img": "img**phys_1991_sectionb_qst15_1.jpg",
					"opts": {
						"q0": "A. 76 cm of Hg",
						"q1": "B. 75 cm of Hg",
						"q2": "C. 74 cm of Hg",
						"q3": "D. 60 cm of Hg",
						"q4": "E. 45 cm of Hg."
					},
					"ans": "B",
					"sel": ""
				},
				"Q16": {
					"qs": "16. A fixed mass of gas of volume 600cm3 at a temperature of 27°C is cooled at constant pressure to a temperature of 0°C. What is the change in volume?",
					"opts": {
						"q0": "A. 54cm^3",
						"q1": "B. 273cm^3",
						"q2": "C. 300cm^3",
						"q3": "D. 546cm^3",
						"q4": "E. 600cm^3."
					},
					"ans": "A",
					"sel": ""
				},
				"Q17": {
					"qs": "17. The boiling point of a liquid depends on the following except the",
					"opts": {
						"q0": "A. nature of the liquid",
						"q1": "B. external pressure",
						"q2": "C. volume of the liquid",
						"q3": "D. impurities present in the liquid",
						"q4": "E. degree of its molecular cohesive force."
					},
					"ans": "C",
					"sel": ""
				},
				"Q18": {
					"qs": "18. A steam trap is a component of the apparatus used in determining the specific latent heat of vaporisation of steam. In the steady state, the steam trap.",
					"opts": {
						"q0": "A. stores the steam for future use",
						"q1": "B. prevents the steam from escaping",
						"q2": "C. ensures that only dry steam gets into the calorimeter",
						"q3": "D. allows condensed steam to go into the calorimeter",
						"q4": "E. determines the quantity of steam used."
					},
					"ans": "C",
					"sel": ""
				},
				"Q19": {
					"qs": "19. A tap supplies water at 26°C while another supplies water at 82°C. If a man wishes to bathe with water at 40°C the ratio of hot mass of hot water to that of cold water required is",
					"opts": {
						"q0": "A. 1 : 3 ",
						"q1": "B. 3 : 1",
						"q2": "C. 3 : 7 ",
						"q3": "D. 7 : 3",
						"q4": "E. 15 : 8."
					},
					"ans": "A",
					"sel": ""
				},
				"Q20": {
					"qs": "20. Melting ice cools an orange drink far better than the same mass of ice-cold water because",
					"opts": {
						"q0": "A. melting ice is at lower temperature than ice-cold water",
						"q1": "B. water has a higher specific heat than ice",
						"q2": "C. ice floats and cools the air above the drink",
						"q3": "D. ice absorbs latent heat during melting",
						"q4": "E. ice makes better thermal contact than water."
					},
					"ans": "D",
					"sel": ""
				},
				"Q21": {
					"qs": "21. The saturation vapour pressure of a liquid depends on its",
					"opts": {
						"q0": "A. volume",
						"q1": "B. temperature",
						"q2": "C. mass",
						"q3": "D. density",
						"q4": "E. pressure."
					},
					"ans": "B",
					"sel": ""
				},
				"Q22": {
					"qs": "22. The graph shows the expansion of water as the temperature increases from 0°C. Which of the following deductions from the graph are true? I. Water has its maximum density at Q. II. The volume of water is greater at 0°C than at 4°C III. The volume of water decreases uniformiy when cooled from 100°C to 0°C IV. When water solidifies, its volume increases",
			        "img": "img**phys_1991_sectionb_qst22_1.jpg",
					"opts": {
						"q0": "A. I and II only",
						"q1": "B. I and III only",
						"q2": "C. II and III only",
						"q3": "D. I, II and III only",
						"q4": "E. I, II and IV only."
					},
					"ans": "E",
					"sel": ""
				},
				"Q23": {
					"qs": "23. Two mirrors are inclined as shown in the diagram. A ray of light RO strikes the arrangement at O and emerges along PO. The emergent ray has been deviated through",
					 "img": "img**phys_1991_sectionb_qst23_1.jpg",
					"opts": {
						"q0": "A. 240°",
						"q1": "B. 180°",
						"q2": "C. 120°",
						"q3": "D. 60°",
						"q4": "E. 30°"
					},
					"ans": "B",
					"sel": ""
				},
				"Q24": {
					"qs": "24. An image which can be formed on a screen is said to be",
					"opts": {
						"q0": "A. virtual",
						"q1": "B. blurred",
						"q2": "C. inverted",
						"q3": "D. erect",
						"q4": "E. "
					},
					"ans": "E",
					"sel": ""
				},
				"Q25": {
					"qs": "25. Calculate the refractive index of the material of the glass block shown in the diagram if YZ =4 cm",
					 "img": "img**phys_1991_sectionb_qst25_1.jpg",
					"opts": {
						"q0": "A. 0.40",
						"q1": "B. 0.60",
						"q2": "C. 1.50",
						"q3": "D. 1.67",
						"q4": "E. 2.50."
					},
					"ans": "D",
					"sel": ""
				},
				"Q26": {
					"qs": "26. A ray of light is incident at an angle of 30° on a glass prism of refractive index 1.5. Calculate the angle through which the ray is minimally deviated in the prism. (The medium surrounding the prism is air).",
					"opts": {
						"q0": "A. 10.5°",
						"q1": "B. 19.5°",
						"q2": "C. 21.1°",
						"q3": "D. 38.9°",
						"q4": "E. 40.5°."
					},
					"ans": "C",
					"sel": ""
				},
				"Q27": {
					"qs": "27. Which of the follwoing are true of plane-polarised light? I. Plane polarisation of light is the formation of hydrogen bubbles on the particles of light. II. Plane polarisation of light is the splitting of light into its spectral components. III. A plane-polarised light vibrates in one plane. IV. Polarisation of light is characteristic of transverse vibrations",
					"opts": {
						"q0": "A. I and II only",
						"q1": "B. I and IV only",
						"q2": "C. II and III only",
						"q3": "D. III and IV only",
						"q4": "E. I and III only."
					},
					"ans": "D",
					"sel": ""
				},
				"Q28": {
					"qs": "28. At which of the following distances from the lens should a slide be placed in a slide projector if f is the focal length of the projection lens?",
					"opts": {
						"q0": "A. Less than f",
						"q1": "B. Greater than 2f",
						"q2": "C. Greater than f but less than 2f",
						"q3": "D. Equal to f",
						"q4": "E. Equal to 2f."
					},
					"ans": "C",
					"sel": ""
				},
				"Q29": {
					"qs": "29. What part of the camera corresponds to the iris of the eye?",
					"opts": {
						"q0": "A. Shutter",
						"q1": "B. Film",
						"q2": "C. Lens",
						"q3": "D. Diaphragm",
						"q4": "E. Focusing ring."
					},
					"ans": "D",
					"sel": ""
				},
				"Q30": {
					"qs": "30. In the arrangement illustrated above, Y and B are yellow and blue transparent light filters respectively. The colour of a white opaque object when viewed through the filters is",
					 "img": "img**phys_1991_sectionb_qst30_1.jpg",
					"opts": {
						"q0": "A. blue",
						"q1": "B. yellow",
						"q2": "C. black",
						"q3": "D. red",
						"q4": "E. green."
					},
					"ans": "C",
					"sel": ""
				},
				"Q31": {
					"qs": "31. Which of the following is not a machanical wave?",
					"opts": {
						"q0": "A. Wave propagated in stretched string",
						"q1": "B. Waves in closed pipes",
						"q2": "C. Radio waves",
						"q3": "D. Water waves",
						"q4": "E. Sound waves."
					},
					"ans": "C",
					"sel": ""
				},
				"Q32": {
					"qs": "32. Which of the following remain(s) unchanged as light travels from one medium to the other? I, Speed II, Wavelength III. Frequency",
					"opts": {
						"q0": "A. I only",
						"q1": "B. II only",
						"q2": "C. III only",
						"q3": "D. I and II only",
						"q4": "E. II and III only."
					},
					"ans": "C",
					"sel": ""
				},
				"Q33": {
					"qs": "33. Which of the following statements about wae is/ are correct? I. A wavefront is a line which contains all particles whose vibrations are in phase II. The direction of propagation of a wave is the line drawn parallel to the wavefront III. A wavefront is a circle which is common to all particles that are inthe same state of disturbance",
					"opts": {
						"q0": "A. I only",
						"q1": "B. II only",
						"q2": "C. III only",
						"q3": "D. I and II only",
						"q4": "E. I and III only."
					},
					"ans": "E",
					"sel": ""
				},
				"Q34": {
					"qs": "34. What type of motion does the skin of a talking drum perform when it is being struck with the drum stick?",
					"opts": {
						"q0": "A. Random",
						"q1": "B. Rotational",
						"q2": "C. Vibratory",
						"q3": "D. Translational",
						"q4": "E. Circular."
					},
					"ans": "C",
					"sel": ""
				},
				"Q35": {
					"qs": "35. The sound from a bell in an enclosed jar gradually faints away while the jar is being evacuated. Which of the following explains this observation?",
					"opts": {
						"q0": "A. The pressure is reduced",
						"q1": "B. The sound waves are pumped out",
						"q2": "C. The waves are absorbed in the inner walls",
						"q3": "D. There is no more material medium",
						"q4": "E. The air is disturbed."
					},
					"ans": "D",
					"sel": ""
				},
				"Q36": {
					"qs": "36. Which of the following statements is true of the diagram shown?",
					"img": "img**phys_1991_sectionb_qst36_1.jpg",
					"opts": {
						"q0": "A. The two points, A and B are in phase",
						"q1": "B. Distance AB is half the wavelength of the wave",
						"q2": "C. AC and BD are the amplitudes of the wave",
						"q3": "D. The two points A and B represent the wave crests",
						"q4": "E. The wave has four crests."
					},
					"ans": "A",
					"sel": ""
				},
				"Q37": {
					"qs": "37. A man standing 300 m away from a wall sounds a whistle. The echo from the wall reaches him 1.8s later. Calculate the velocity of sound in air",
					"opts": {
						"q0": "A. 540.0  m/s",
						"q1": "B. 333.3  m/s",
						"q2": "C. 270.0  m/s",
						"q3": "D. 166.7  m/s",
						"q4": "E. 83.3  m/s"
					},
					"ans": "B",
					"sel": ""
				},
				"Q38": {
					"qs": "38. In which of the following is a stationary wave produced? I. A vibrating tuning fork’held near the end of a resonance tube closed at one end II. A string tightly stretched between two points and plucked at its middle III. the prongs of a tuning fork vibrating in air",
					"opts": {
						"q0": "A. I only",
						"q1": "B. II only",
						"q2": "C. I and II only",
						"q3": "D. II and III only",
						"q4": "E. I, II and III."
					},
					"ans": "C",
					"sel": ""
				},
				"Q39": {
					"qs": "39. Which of the following modes of vibration of a stretched string is the first overtone?",
					"opts": {
						"q0": "img**phys_1991_sectionb_qst39_1.jpg",
						"q1": "img**phys_1991_sectionb_qst39_2.jpg",
						"q2": "img**phys_1991_sectionb_qst39_3.jpg",
						"q3": "img**phys_1991_sectionb_qst39_4.jpg",
						"q4": "img**phys_1991_sectionb_qst39_5.jpg"
					},
					"ans": "B",
					"sel": ""
				},
				"Q40": {
					"qs": "40. A particle of charge q and mass m moving with a velocity v enters a uniform magnetic field B in the direction of the field. The force on the particle is",
					"opts": {
						"q0": "A. qvB",
						"q1": "B. mqvB",
						"q2": "C. qvB/m",
						"q3": "D. mvB/q",
						"q4": "E. O"
					},
					"ans": "E",
					"sel": ""
				},
				"Q41": {
					"qs": "41, If the frequency of the e.m.f. source in the a.c. circuit illustrated is 500/(pi) Hz, what is the reactance of the inductor?",
					"img": "img**phys_1991_sectionb_qst41_1.jpg",
					"opts": {
						"q0": "A. /450",
						"q1": "B. 0.9",
						"q2": "C. 450/",
						"q3": "D. 450",
						"q4": "E. 900."
					},
					"ans": "E",
					"sel": ""
				},
				"Q42": {
					"qs": "42. Two objects of masses 80kg and 50kg are seperated by a distance of 0.2m. If the gravitational constant is 6.6x10^-11 Nm^2kg, calculate the gravitational attraction between them.",
					"opts": {
						"q0": "A. 4.9 x 10^-9 N",
						"q1": "B. 1.3 x 10^-6 N",
						"q2": "C. 6.6 x 10^-8 N",
						"q3": "D. 6.6 x 10^-6 N",
						"q4": "E. 2.6 x 10^-9 N"
					},
					"ans": "D",
					"sel": ""
				},
				"Q43": {
					"qs": "Two capacitors C1 and C2 are connected as shown in the diagram The capaci-tance C2 is twice C1 When the key is opened the energy stored up in C1 is W. If the key is later closed and the system is allowed to attain electrical equilibrium, the total energy stored in the system will be",
					"img": "img**phys_1991_sectionb_qst43_1.jpg",
					"opts": {
						"q0": "A. 1/2 W",
						"q1": "B. 2/3 W",
						"q2": "C. W",
						"q3": "D. 2 W",
						"q4": "E. 3 W"
					},
					"ans": "E",
					"sel": ""
				},
				"Q44": {
					"qs": "44. In which of the points B labelled A, B, C, D and E on 1 the conductor shown would electric charge tend to concentrate most?",
					"img": "img**phys_1991_sectionb_qst44_1.jpg",
					"opts": {
						"q0": "A. Point A",
						"q1": "B. Point B",
						"q2": "C. Point C",
						"q3": "D. Point D",
						"q4": "E. Point E"
					},
					"ans": "E",
					"sel": ""
				},
				"Q45": {
					"qs": "45. Which of the following is stored by dry Leclanche cell?",
					"opts": {
						"q0": "A. Chemical energy",
						"q1": "B. Nuclear energy",
						"q2": "C. Solar energy",
						"q3": "D. Heat energy",
						"q4": "E. Electrical energy."
					},
					"ans": "E",
					"sel": ""
				},
				"Q46": {
					"qs": "46. Using the data in the circuit illustrated above, calculate the value of R",
					"img": "img**phys_1991_sectionb_qst46_1.jpg",
					"opts": {
						"q0": "A. 0.02 ohms",
						"q1": "B. 0.05 ohms",
						"q2": "C. 5.0 ohms",
						"q3": "D. 20.0 ohms",
						"q4": "E. 50.0 ohms."
					},
					"ans": "E",
					"sel": ""
				},
				"Q47": {
					"qs": "47. A 90W immersion heater is used to supply energy for 5 minutes. The energy supplied is used to completely melt 160 g of a solid at its melting point. Calculate the specific latent heat of fusion of the solid.",
					"opts": {
						"q0": "A. 2.81 J/g",
						"q1": "B. 6.25 J/g",
						"q2": "C. 8.89 J/g",
						"q3": "D. 168.75 J/g",
						"q4": "E. 533.33 J/g."
					},
					"ans": "D",
					"sel": ""
				},
				"Q48": {
					"qs": "48. In the circuit shown above R is a resistor whose resistance increases with increase in temperature. L1 and L2 are identical lamps. If the temperature of R increases.",
					"opts": {
						"q0": "A. L1 becomes brighter and L2 becomes dimmer",
						"q1": "B. L1 becomes brighter and L2 does not change.",
						"q2": "C. L2 becomes dimmer and L1 does not change.",
						"q3": "D. L1 becomes dimmer and L2 does not change.",
						"q4": "E. L2 and L1 becomes brighter."
					},
					"ans": "A",
					"sel": ""
				},
				"Q49": {
					"qs": "49. A house is supplied with a 240 V a.c. mains. To operate a door bell rated at 8 V, a transformer is used. If the number of turns in the primary coil of the transformer is 900, calculate the number of turns in the secondary coil of the transformer.",
					"opts": {
						"q0": "A. 30",
						"q1": "B. 240",
						"q2": "C. 248",
						"q3": "D. 450",
						"q4": "E. 1248."
					},
					"ans": "A",
					"sel": ""
				},
				"Q50": {
					"qs": "50. The diagram shows a current carrying wire between the poles of a magnet. In which direction would the wire tend to move? ",
			        "img": "img**phys_1991_sectionb_qst50_1.jpg",
					"opts": {
						"q0": "A. Into the paper",
						"q1": "B. Out of the paper",
						"q2": "C. Towards the north pole of the magnet",
						"q3": "D. Towards the south pole of the magnet",
						"q4": "E. Towards the top of the page."
					},
					"ans": "B",
					"sel": ""
				},
				"Q51": {
					"qs": "51. An induction coil is generally used to",
					"opts": {
						"q0": "A. rectify an alternating current",
						"q1": "B. produce a large input voltage",
						"q2": "C. smoothen a pulsating direct current",
						"q3": "D. modulate an incoming radio signal",
						"q4": "E. produce a large output voltage."
					},
					"ans": "E",
					"sel": ""
				},
				"Q52": {
					"qs": "52. The unit of stress is",
					"opts": {
						"q0": "A. Nm",
						"q1": "B. N",
						"q2": "C. Nm^-2",
						"q3": "D. Nm^2",
						"q4": "E. Nm^1."
					},
					"ans": "C",
					"sel": ""
				},
				"Q53": {
					"qs": "53. Which of the following statements about viscosity are correct? When a ball falls through a viscous liquid I viscosity opposes the gravitational force on the ball. II viscosity opposes the upthrust on the ball. III viscosity is in the same direction as the upthrust on the ball. IV the ball falls faster the more viscous the liquid is",
					"opts": {
						"q0": "A. I and III only",
						"q1": "B. I and II only",
						"q2": "C. II and IV only",
						"q3": "D. III and IV only",
						"q4": "E. I, II and IV only."
					},
					"ans": "A",
					"sel": ""
				},
				"Q54": {
					"qs": "54. Which of the following statements is not correct? Isotopes of an element have",
					"opts": {
						"q0": "A. the same number of electric charges on the nucleus",
						"q1": "B. the same chemical properties",
						"q2": "C. different nucleon numbers",
						"q3": "D. differnt proton numbers",
						"q4": "E. different atomic masses."
					},
					"ans": "D",
					"sel": ""
				},
				"Q55": {
					"qs": "55.	Which of the following representations is correct for an atom X with 28 electrons and 30 neutrons?",
					"opts": {
						"q0": "img**phys_1991_sectionb_qst55_1.jpg",
						"q1": "img**phys_1991_sectionb_qst55_2.jpg",
						"q2": "img**phys_1991_sectionb_qst55_3.jpg",
						"q3": "img**phys_1991_sectionb_qst55_4.jpg",
						"q4": "img**phys_1991_sectionb_qst55_5.jpg"
					},
					"ans": "D",
					"sel": ""
				},
				"Q56": {
					"qs": "56. When a metal surface is irradiated, photoelectrons may be ejected from the metal. The kinetic energy of the ejected electrons depends on the",
					"opts": {
						"q0": "A. source of the radiation",
						"q1": "B. intensity of the radiation",
						"q2": "C. detection device for the electrons",
						"q3": "D. amplitude of the radiation",
						"q4": "E. frequency of the radiation."
					},
					"ans": "E",
					"sel": ""
				},
				"Q57": {
					"qs": "57.	An electron of charge 1.6 x 10^-19C is accelerated in vacuum from rest at zero volt towards a plate at 40k V. Calculate the kinetic energy of the electron.",
					"opts": {
						"q0": "A. 4.0 x 10^-25 J",
						"q1": "B. 4.0 x 10^-21 J",
						"q2": "C. 6.4 x 10^-20 J",
						"q3": "D. 6.4 x 10^-15 J",
						"q4": "E. 2.5 x 10^-20 J."
					},
					"ans": "D",
					"sel": ""
				},
				"Q58": {
					"qs": "58. The half-life of a radioactive substance is 2 seconds. Calculate the decay constant.",
					"opts": {
						"q0": "A. 0.035s^-1",
						"q1": "B. 0.151s^-1",
						"q2": "C. 0.347s^-1",
						"q3": "D. 0.576s^-1",
						"q4": "E. 1.386s^-1."
					},
					"ans": "No Answer",
					"sel": ""
				},
				"Q59": {
					"qs": "59. The work function of a metal is 4.65eV and the metal is illuminated with a radiation of 6.86eV. What is the kinetic energy of the electrons ejected from the surface of the metal?",
					"opts": {
						"q0": "A. 1.48eV",
						"q1": "B. 2.21 eV",
						"q2": "C. 4.42eV",
						"q3": "D. 5.75eV",
						"q4": "E. 11.51eV."
					},
					"ans": "B",
					"sel": ""
				},
				"Q60": {
					"qs": "60. Which of the following has the highest surface tension?",
					"opts": {
						"q0": "A. Cold water",
						"q1": "B. Soapy water",
						"q2": "C. Warm water",
						"q3": "D. Oily water",
						"q4": "E. Salt water."
					},
					"ans": "A",
					"sel": ""
				}
			}
		});
	});

	app.get('/commerce/1988', function(req, res) {
		res.json('Exam does not exist for this year.');
	});
	
	app.get('/commerce/1989', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. From the above diagram, the box marked H stands for",
					"img": "img**comm_1989_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. trading",
						"q1": "B. production",
						"q2": "C. occupation",
						"q3": "D. farming",
						"q4": "E. advertising"
					},
					"ans": "C",
					"sel": ""
				},
				"Q2": {
					"qs": "2. The box marked W stands for",
					"img": "img**comm_1989_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. industry",
						"q1": "B. foreign trade",
						"q2": "C. home trade",
						"q3": "D. entrepreneur",
						"q4": "E. civil service"
					},
					"ans": "A"
				},
				"Q3": {
					"qs": "3. The box marked M stands for",
					"img": "img**comm_1989_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. quarrying",
						"q1": "B. building",
						"q2": "C. engineering",
						"q3": "D. trade",
						"q4": "E. agriculture"
					},
					"ans": "D"
				},
				"Q4": {
					"qs": "4. Paper money originated in form of receipts given by",
					"opts": {
						"q0": "A. money lenders",
						"q1": "B. goldsmiths",
						"q2": "C. bankers",
						"q3": "D. traders",
						"q4": "E. thrift societies"
					},
					"ans": "B"
				},
				"Q5": {
					"qs": "5. An insurance broker is involved in",
					"opts": {
						"q0": "A. manufacturing occupation",
						"q1": "B. distributive occupation",
						"q2": "C. commercial occupation",
						"q3": "D. extractive occupation",
						"q4": "E. constructive occupation"
					},
					"ans": "C"
				},
				"Q6": {
					"qs": "6. The process of buying, selling and distribution of goods and services is known as",
					"opts": {
						"q0": "A. retail trade",
						"q1": "B. commerce",
						"q2": "C. marketing concept",
						"q3": "D. marketing mix",
						"q4": "E. wholesale trade"
					},
					"ans": "B"
				},
				"Q7": {
					"qs": "7. The practice of employing specialists in relevant occupations is a feature of",
					"opts": {
						"q0": "A. subsistence economy",
						"q1": "B. mobility of labour",
						"q2": "C. mixed economy",
						"q3": "D. exchange economy",
						"q4": "E. division of labour"
					},
					"ans": "E"
				},
				"Q8": {
					"qs": "8. Which of the following converts raw materials into finished goods?",
					"opts": {
						"q0": "A. Extractive industry",
						"q1": "B. Manufacturing industry",
						"q2": "C. Commercial occupation",
						"q3": "D. Constructive industry",
						"q4": "E. Tertiary industry"
					},
					"ans": "B"
				},
				"Q9": {
					"qs": "9. Which of the following supports the view that there was commerce in Nigeria many years ago?",
					"opts": {
						"q0": "A. Communities were interdependent",
						"q1": "B. The economy was subsistent",
						"q2": "C. Specialization was minimal",
						"q3": "D. Cowries were used as money",
						"q4": "E. Horses were used as means of transportation"
					},
					"ans": "A"
				},
				"Q10": {
					"qs": "10. Which of the following towns was important to the trans-Saharan traders?",
					"opts": {
						"q0": "A. Enugu",
						"q1": "B. Oyo",
						"q2": "C. Ilorin",
						"q3": "D. Kaduna",
						"q4": "E. Kano"
					},
					"ans": "E"
				},
				"Q11": {
					"qs": "11. Production ends when goods",
					"opts": {
						"q0": "A. and services are used by the producer",
						"q1": "B. are packed and labelled",
						"q2": "C. are sold in the market",
						"q3": "D. and services reach the final user",
						"q4": "E. are advertised to the consumers."
					},
					"ans": "D"
				},
				"Q12": {
					"qs": "12. A counter offer operates as",
					"opts": {
						"q0": "A. an acceptance",
						"q1": "B. an offer",
						"q2": "C. a rejection",
						"q3": "D. an agreement",
						"q4": "E. a contract"
					},
					"ans": "C"
				},
				"Q13": {
					"qs": "13. In the contract of sale of goods, ‘let the buyer beware’ is signified by",
					"opts": {
						"q0": "A. del credere",
						"q1": "B. uberrima fidei",
						"q2": "C. caveat emptor",
						"q3": "D. res ipsa ioquitor",
						"q4": "E. caveat vendetta"
					},
					"ans": "C"
				},
				"Q14": {
					"qs": "14. Branding is a good example of",
					"opts": {
						"q0": "A. informative advertising",
						"q1": "B. marketing mix",
						"q2": "C. persuasive advertising",
						"q3": "D. consumerism",
						"q4": "E. competitive advertising"
					},
					"ans": "E"
				},
				"Q15": {
					"qs": "15. The critical factor in organizing a business is",
					"opts": {
						"q0": "A. money ",
						"q1": "B. capital ",
						"q2": "C. machinery ",
						"q3": "D. management ",
						"q4": "E. control"
					},
					"ans": "D"
				},
				"Q16": {
					"qs": "16. Which of the following is not an attribute of an effective business manager?",
					"opts": {
						"q0": "A. Empathy",
						"q1": "B. Subjectivity",
						"q2": "C. Altruism",
						"q3": "D. Objectivity",
						"q4": "E. self awareness"
					},
					"ans": "B"
				},
				"Q17": {
					"qs": "17. Prior to the issue of a certificate on a motor insurance contract, the insured is issued with",
					"opts": {
						"q0": "A. a licence of insurance",
						"q1": "B. insurance policy certificate",
						"q2": "C. a cover note",
						"q3": "D. a simple receipt",
						"q4": "E. an invoice"
					},
					"ans": "C"
				},
				"Q18": {
					"qs": "18. The worth of a life assurance policy before maturity date is known as",
					"opts": {
						"q0": "A. principal value",
						"q1": "B. surrender value",
						"q2": "C. accumulated value",
						"q3": "D. prepaid value",
						"q4": "E. accrued value"
					},
					"ans": "B"
				},
				"Q19": {
					"qs": "19. Under the law of insurance, exemption clauses",
					"opts": {
						"q0": "A. enable the insured to claim on the insurance company",
						"q1": "B. protect the insurance company under the contract",
						"q2": "C. guard against occurrence of the insured events",
						"q3": "D. protect a third party under the contract",
						"q4": "E. protect the insured against the insurance company."
					},
					"ans": "B"
				},
				"Q20": {
					"qs": "20. The assured is the",
					"opts": {
						"q0": "A. insurance company",
						"q1": "B. insurance company’s client",
						"q2": "C. insurance broker",
						"q3": "D. insurance agent",
						"q4": "E. insurance manager"
					},
					"ans": "B"
				},
				"Q21": {
					"qs": "21. If a limited liability company wishes to finance expansion in operation by using its retained earnings, it will issue",
					"opts": {
						"q0": "A. debenture stock",
						"q1": "B. preferred stock",
						"q2": "C. dividend warrants",
						"q3": "D. bonus shares",
						"q4": "E. right issue"
					},
					"ans": "D"
				},
				"Q22": {
					"qs": "22. A partnership formed for banking business is made up of",
					"opts": {
						"q0": "A. 2-10 members",
						"q1": "B. 2-20 members",
						"q2": "C. 2-30 members",
						"q3": "D. 2-40 members",
						"q4": "E. 2-50 members"
					},
					"ans": "A"
				},
				"Q23": {
					"qs": "23. Which of the following statements is true of limited partnership?",
					"opts": {
						"q0": "A. Every member is a limited partner",
						"q1": "B. All members are general partners",
						"q2": "C. All members have limited liability",
						"q3": "D. There is at least one ordinary partner",
						"q4": "E. Limited and ordinary partners must be equal in number"
					},
					"ans": "D"
				},
				"Q24": {
					"qs": "24. Which of the following is not required for the dissolution of a partnership?",
					"opts": {
						"q0": "A. Expiration of the partnership deed",
						"q1": "B. Termination of the venture",
						"q2": "C. One partner notifying the other of his intention to dissolve it",
						"q3": "D. Mutual consent of the partners",
						"q4": "E. Order from the Registrar of companies"
					},
					"ans": "E"
				},
				"Q25": {
					"qs": "25. Organizations formed mainly by traders and manufacturers to cater for the interest of their members is called",
					"opts": {
						"q0": "A. trade union",
						"q1": "B. co-operative societies",
						"q2": "C. trade association",
						"q3": "D. chamber of commerce",
						"q4": "E. manufacturers association"
					},
					"ans": "C"
				},
				"Q26": {
					"qs": "26. The power of attorney that transfers to a third party the shareholders right to vote is called",
					"opts": {
						"q0": "A. warrant",
						"q1": "B. shareholder’s benefit",
						"q2": "C. proxy",
						"q3": "D. bond",
						"q4": "E. rights issue"
					},
					"ans": "C"
				},
				"Q27": {
					"qs": "27. The means by which printed messages sent by cable are recorded is called",
					"opts": {
						"q0": "A. telegram",
						"q1": "B. poste restante",
						"q2": "C. telecommunication",
						"q3": "D. telephone",
						"q4": "E. telex services"
					},
					"ans": "E"
				},
				"Q28": {
					"qs": "28. In which of the following would you advise Mr X Y to check and con firm the exact telephone number of a bank located in Ibadan?",
					"opts": {
						"q0": "A. Post Office Guide",
						"q1": "B. Official Gazette",
						"q2": "C. Travellers’guide",
						"q3": "D. Private Branch Exchange",
						"q4": "E. Telephone directory"
					},
					"ans": "E"
				},
				"Q29": {
					"qs": "29. Which of the following is a function of NIPOST?",
					"opts": {
						"q0": "A. Issuing money order",
						"q1": "B. Issuing dividend warrants",
						"q2": "C. Issuing Traveller’s cheques",
						"q3": "D. Minting coins",
						"q4": "E. Printing trade journals."
					},
					"ans": "A"
				},
				"Q30": {
					"qs": "30. Which of the following is charged by the NIPOST on Postal order?",
					"opts": {
						"q0": "A. Interest",
						"q1": "B. tax ",
						"q2": "C. Poundaqe",
						"q3": "D. Premium",
						"q4": "E. Dividend"
					},
					"ans": "C"
				},
				"Q31": {
					"qs": "31. Which of the following describes a distinctive symbol title or design that readily identifies the company or its product?",
					"opts": {
						"q0": "A. Trust ",
						"q1": "B. Trade mark",
						"q2": "C. Trade name",
						"q3": "D. Brand name",
						"q4": "E. Copyright"
					},
					"ans": "B"
				},
				"Q32": {
					"qs": "32. One disadvantage of advertising is that it",
					"opts": {
						"q0": "A. could be misleading through its false claims",
						"q1": "B. decreases sales",
						"q2": "C. makes new products known",
						"q3": "D. teaches the consumer the use of the advertised product",
						"q4": "E. creates employment"
					},
					"ans": "A"
				},
				"Q33": {
					"qs": "33. The activities of a company designed to stimulate consumers by giving them samples, premium, or conducting contests are referred to as",
					"opts": {
						"q0": "A. consumer protection",
						"q1": "B. marketing mix",
						"q2": "C. sales promotion",
						"q3": "D. marketing concept",
						"q4": "E. advertising"
					},
					"ans": "C"
				},
				"Q34": {
					"qs": "34. A clean bill of lading is so-called because",
					"opts": {
						"q0": "A. the colour is pure, white",
						"q1": "B. it is not stained",
						"q2": "C. it is a document of authority",
						"q3": "D. it has no record of damaged goods",
						"q4": "E. it could be transferred to anybody"
					},
					"ans": "D"
				},
				"Q35": {
					"qs": "35. The receipt issued by a warehouse keeper for goods taken into the store is called",
					"opts": {
						"q0": "A. drawback warrant",
						"q1": "B. warranty",
						"q2": "C. dividend warrant",
						"q3": "D. dock warrant",
						"q4": "E. customs warrant"
					},
					"ans": "D"
				},
				"Q36": {
					"qs": "36. If a businessman imports stockfish with a view to exporting them to other countries, this form of trade is known as",
					"opts": {
						"q0": "A. invisible trade",
						"q1": "B. entrepot trade",
						"q2": "C. export trade",
						"q3": "D. import trade",
						"q4": "E. bilateral trade"
					},
					"ans": "B"
				},
				"Q37": {
					"qs": "37. A trader who wants to buy goods from another country sends ",
					"opts": {
						"q0": "A. an advice note",
						"q1": "B. an invoice",
						"q2": "C. a bill of exchange",
						"q3": "D. a statement",
						"q4": "E. an indent"
					},
					"ans": "E"
				},
				"Q38": {
					"qs": "38. Which of the following is an invisible export of Nigeria?",
					"opts": {
						"q0": "A. Shipping services Nigeria renders to Russia",
						"q1": "B. Nigeria’s crude oil to London",
						"q2": "C. banking services rendered to Americans resident in Nigeria",
						"q3": "D. Stockfish from Germany to Nigeria",
						"q4": "E. Nigeria’s groundnut to Egypt."
					},
					"ans": "A"
				},
				"Q39": {
					"qs": "39. Most payments in international trade are made by means of ",
					"opts": {
						"q0": "A. cash",
						"q1": "B. bills of lading",
						"q2": "C. personal cheques",
						"q3": "D. letters of credit",
						"q4": "E. travellers cheques"
					},
					"ans": "D"
				},
				"Q40": {
					"qs": "40. A deficit in the balance of trade occurs when",
					"opts": {
						"q0": "A. visible exports exceed visible imports",
						"q1": "B. total payments exceed visible exports",
						"q2": "C. visible imports exceed visible exports",
						"q3": "D. invisible exports exceed invisible imports",
						"q4": "E. visible exports exceed invisible imports."
					},
					"ans": "C"
				},
				"Q41": {
					"qs": "41. The amount of capital with which a new company proposes to be registered is called",
					"opts": {
						"q0": "A. called -up capita",
						"q1": "B. nominal capital",
						"q2": "C. fixed capital",
						"q3": "D. issued capital",
						"q4": "E. circulating capital"
					},
					"ans": "B"
				},
				"Q42": {
					"qs": "42. The part of business capital that does not change its form in the process of production is known as",
					"opts": {
						"q0": "A. circulating capital",
						"q1": "B. nominal capital",
						"q2": "C. liquid capital",
						"q3": "D. fixed capital",
						"q4": "E. working capital"
					},
					"ans": "D"
				},
				"Q43": {
					"qs": "43. Which of the following is gilt-edged security?",
					"opts": {
						"q0": "A. Government bonds and stocks",
						"q1": "B. Gold mine stocks",
						"q2": "C. Company shares and stocks",
						"q3": "D. Life assurance policy",
						"q4": "E. Bank stocks and securities"
					},
					"ans": "A"
				},
				"Q44": {
					"qs": "44. Pure profit is the element of profit paid",
					"opts": {
						"q0": "A. for land",
						"q1": "B. for capita",
						"q2": "C. a manager",
						"q3": "D. to an entrepreneur",
						"q4": "E. for labour"
					},
					"ans": "D"
				},
				"Q45": {
					"qs": "45. The factor of production which is described as wealth set aside for the production of further wealth is called",
					"opts": {
						"q0": "A. entrepreneur ",
						"q1": "B. land ",
						"q2": "C. capital ",
						"q3": "D. goodwill ",
						"q4": "E. labour"
					},
					"ans": "C"
				},
				"Q46": {
					"qs": "46. Buying and selling of goods and services within the geographical areas of a country is called",
					"opts": {
						"q0": "A. entrepot trade",
						"q1": "B. external trade",
						"q2": "C. domestic trade",
						"q3": "D. regional trade",
						"q4": "E. import trade"
					},
					"ans": "C"
				},
				"Q47": {
					"qs": "47. Which of the following is not an obligation of a common carrier?",
					"opts": {
						"q0": "A. Carrying goods securely and safely",
						"q1": "B. Liability for losses and damages",
						"q2": "C. Delivery of goods at appropriate places",
						"q3": "D. Insuring goods in transit",
						"q4": "E. Passing through agreed routes"
					},
					"ans": "D"
				},
				"Q48": {
					"qs": "48. Which of the following conditions may make the manufacturer sell directly to the consumer?",
					"opts": {
						"q0": "A. Break in communication",
						"q1": "B. Inaccessibility of the wholesaler’s warehouse",
						"q2": "C. The nature of the commodity involved",
						"q3": "D. Inadequate transport facility",
						"q4": "E. Trade imbalance"
					},
					"ans": "C"
				},
				"Q49": {
					"qs": "49. Which of the following is a disadvantage of Hire Purchase to the consumer?",
					"opts": {
						"q0": "A. It increases turnover",
						"q1": "B. Temptation to buy more than one can pay for",
						"q2": "C. it demands more capital from the seller",
						"q3": "D. ",
						"q4": "E. Increased sales lower the seller’s unit cost"
					},
					"ans": "B"
				},
				"Q50": {
					"qs": "50. The three main types of speculators found in the Stock Exchange market are",
					"opts": {
						"q0": "A. stags, brokers, and bulls",
						"q1": "B. bulls, bears and stags",
						"q2": "C. bears, jobbers and stags",
						"q3": "D. bulls, brokers and bears",
						"q4": "E. stags, agents and jobbers"
					},
					"ans": "B"
				},
				"Q51": {
					"qs": "51. Which of the following functions is performed by the stock exchange market?",
					"opts": {
						"q0": "A. Provision for bulk purchase",
						"q1": "B. Issuing of treasury bills",
						"q2": "C. Provision of the purchase and sale of existing securities",
						"q3": "D. Discounting bills of exchange",
						"q4": "E. Providing for short-term investments."
					},
					"ans": "C"
				},
				"Q52": {
					"qs": "52. Which of the following is not a true characteristic of a Chamber of Commerce?",
					"opts": {
						"q0": "A. It is not for profit making",
						"q1": "B. It is open only to political party members",
						"q2": "C. It is democratically administered",
						"q3": "D. It is a voluntary organization",
						"q4": "E. It is independent of government control."
					},
					"ans": "B"
				},
				"Q53": {
					"qs": "53. The management function of evaluating the company’s performance to determine 'whether it is achieving its objective is",
					"opts": {
						"q0": "A. controlling",
						"q1": "B. directing ",
						"q2": "C. organizing ",
						"q3": "D. planning ",
						"q4": "E. consulting"
					},
					"ans": "A"
				},
				"Q54": {
					"qs": "54. Which of the following primarily responsible for protecting consumers against poor quality goods?",
					"opts": {
						"q0": "A. Nigerian National Supply Company",
						"q1": "B. Manufacturers Association of Nigeria",
						"q2": "C. Industrial Arbitration Panel",
						"q3": "D. Standards Organization of Nigeria",
						"q4": "E. Nigeria Chambers of Commerce"
					},
					"ans": "D"
				},
				"Q55": {
					"qs": "55. Information about new goods is passed on to buyers through",
					"opts": {
						"q0": "A. wholesale trade",
						"q1": "B. retail trade",
						"q2": "C. market research",
						"q3": "D. advertising",
						"q4": "E. the manufacturer"
					},
					"ans": "D"
				},
				"Q56": {
					"qs": "56. Which of the following is not a component of a company’s marketing mix?",
					"opts": {
						"q0": "A. Product planning and price structure",
						"q1": "B. company-oriented",
						"q2": "C. organization-oriented",
						"q3": "D. dividend-oriented",
						"q4": "E. customer-oriented"
					},
					"ans": "D"
				},
				"Q57": {
					"qs": "57. An important marketing concept is that all company planning and operations should be",
					"opts": {
						"q0": "A. profit-oriented",
						"q1": "B. company-oriented",
						"q2": "C. organization-oriented",
						"q3": "D. dividend-oriented",
						"q4": "E. customer-oriented"
					},
					"ans": "E"
				},
				"Q58": {
					"qs": "58. Which of the following is the main aim of the Indigenization Decree? To",
					"opts": {
						"q0": "A. alleviate the effects of inflation",
						"q1": "B. eliminate foreigners from Nigerian economy",
						"q2": "C. remove all obstacles to commercial activities",
						"q3": "D. allow Nigerians greater participation in commercial activities",
						"q4": "E. alleviate the effects of a depressed economy"
					},
					"ans": "D"
				},
				"Q59": {
					"qs": "59. Which of the following institutions provides the volume of credit to the public?",
					"opts": {
						"q0": "A. Building societies",
						"q1": "B. Mail order business",
						"q2": "C. Department stores",
						"q3": "D. Finance houses",
						"q4": "E. Bank"
					},
					"ans": "B"
				},
				"Q60": {
					"qs": "60. When a cheque has special crossing it should be",
					"opts": {
						"q0": "A. cashed by the drawer",
						"q1": "B. cashed over the counter",
						"q2": "C. paid into a named bank",
						"q3": "D. paid to the drawee",
						"q4": "E. paid into the Central Bank"
					},
					"ans": "C"
				},
				"Q61": {
					"qs": "61. Through which of the following does the Central Bank carry out the monetary policy of the country?",
					"opts": {
						"q0": "A. Discounting bills",
						"q1": "B. Bank rate",
						"q2": "C. Granting overdrafts",
						"q3": "D. Acting as lender of last resort",
						"q4": "E. Acting as banker to commercial banks"
					},
					"ans": "B"
				},
				"Q62": {
					"qs": "62. Which of the following is not a quality of money?",
					"opts": {
						"q0": "A. Divisibility",
						"q1": "B. Portability",
						"q2": "C. Accessibility",
						"q3": "D. Recognizability",
						"q4": "E. Durability"
					},
					"ans": "C"
				},
				"Q63": {
					"qs": "63. Which of the following is not a means of effecting payments through a current account?",
					"opts": {
						"q0": "A. Cheques",
						"q1": "B. Standing orders",
						"q2": "C. Giro system",
						"q3": "D. Credit transfer",
						"q4": "E. Credit Card"
					},
					"ans": "C"
				},
				"Q64": {
					"qs": "64. A bill holder wishing to dispose of his bills before maturity would be paid",
					"opts": {
						"q0": "A. the discounted value of the bill",
						"q1": "B. the present value of the bills",
						"q2": "C. the premium on the bills only",
						"q3": "D. the accumulated interest on the bills",
						"q4": "E. total face value of the bills with the premium"
					},
					"ans": "A"
				},
				"Q65": {
					"qs": "65. Which of the following is not a necessary seaport facility?",
					"opts": {
						"q0": "A. Berth ",
						"q1": "B. Warehouse ",
						"q2": "C. Container ",
						"q3": "D. Cranes ",
						"q4": "E. Tarmac"
					},
					"ans": "E"
				},
				"Q66": {
					"qs": "66. The main disadvantage of rail transport to the trader is that",
					"opts": {
						"q0": "A. it carries bulky goods only",
						"q1": "B. its cost of carriage is high",
						"q2": "C. it is slow and inflexible",
						"q3": "D. it causes road congestion",
						"q4": "E. it travels on schedule"
					},
					"ans": "C"
				},
				"Q67": {
					"qs": "67. A telephone call within a town is called",
					"opts": {
						"q0": "A. home call",
						"q1": "B. trunk call",
						"q2": "C. district call",
						"q3": "D. zonal call",
						"q4": "E. local call"
					},
					"ans": "E"
				},
				"Q68": {
					"qs": "68. The body controlling the installation and maintenance of telephone in Nigeria is",
					"opts": {
						"q0": "A. NET",
						"q1": "B. ITT",
						"q2": "C. NITEL",
						"q3": "D. NIPOST",
						"q4": "E. NICON"
					},
					"ans": "C"
				},
				"Q69": {
					"qs": "69. A teleprinter is used to transmit",
					"opts": {
						"q0": "A. important documents through the post office",
						"q1": "B. typed messages quickly over a long distance",
						"q2": "C. data to and from computer",
						"q3": "D. messages to areas within a locality",
						"q4": "E. information within a bank"
					},
					"ans": "B"
				},
				"Q70": {
					"qs": "70. Warehousing is one of the functions of the",
					"opts": {
						"q0": "A. wholesaler ",
						"q1": "B. retailer ",
						"q2": "C. Chamber of Commerce",
						"q3": "D. Ministry of Trade and Industry",
						"q4": "E. Export Promotion Department"
					},
					"ans": "A"
				},
				"Q71": {
					"qs": "71. Which of the following price quotations contains the cost price, insurance charges and the cost of transporting the goods?",
					"opts": {
						"q0": "A. F. O. R",
						"q1": "B. C. & F.",
						"q2": "C. F. A. S.",
						"q3": "D. F. O. B",
						"q4": "E. C. I. F"
					},
					"ans": "E"
				},
				"Q72": {
					"qs": "72. Any powers exercised by a company in pursuance of objectives not authorized by the Memorandum of Association is regarded as",
					"opts": {
						"q0": "A. a trespass",
						"q1": "B. a nuisance",
						"q2": "C. ultra vires",
						"q3": "D. uberrimae fide",
						"q4": "E. caveat emptor"
					},
					"ans": "C"
				},
				"Q73": {
					"qs": "73. The process whereby a firm buys over the assets and liabilities of another firm is known as",
					"opts": {
						"q0": "A. amalgamation",
						"q1": "B. cartel",
						"q2": "C. factoring",
						"q3": "D. holding",
						"q4": "E. combine."
					},
					"ans": "D"
				},
				"Q74": {
					"qs": "74. It is advantageous to provide services which are natural monopoly through",
					"opts": {
						"q0": "A. sole traders",
						"q1": "B. partnership",
						"q2": "C. public limited liability companies",
						"q3": "D. public enterprises",
						"q4": "E. co-operative societies"
					},
					"ans": "D"
				},
				"Q75": {
					"qs": "75. The rate at which a country’s exports exchange for its imports is called ",
					"opts": {
						"q0": "A. balance of payments",
						"q1": "B. balance of trade",
						"q2": "C. terms of delivery",
						"q3": "D. terms of trade",
						"q4": "E. counter trade."
					},
					"ans": "D"
				},
				"Q76": {
					"qs": "76. A company had an authorized share capital of N30.000. It offered applicants N20.000 share capital out of which the company collected N 15,000. What was the issued capital?",
					"opts": {
						"q0": "A. N5.000",
						"q1": "B. N10.000",
						"q2": "C. N15.000",
						"q3": "D. N20,000",
						"q4": "E. N35.000"
					},
					"ans": "D"
				},
				"Q77": {
					"qs": "A company had an authorized share capital of N30.000. It offered applicants N20.000 share capital out of which the company collected N 15,000. What was the paid-up capital?",
					"opts": {
						"q0": "A. N35,000",
						"q1": "B. N30,000",
						"q2": "C. N20.000",
						"q3": "D. N15,000",
						"q4": "E. N5,000"
					},
					"ans": "D"
				},
				"Q78": {
					"qs": "A company had an authorized share capital of N30.000. It offered applicants N20.000 share capital out of which the company collected N 15,000. What was the unissued capital?",
					"opts": {
						"q0": "A. N35,000",
						"q1": "B. N30,000",
						"q2": "C. N15.000",
						"q3": "D. N10,000",
						"q4": "E. N5,000"
					},
					"ans": "D"
				},
				"Q79": {
					"qs": "79. Which of the following is not necessary when ordering goods?",
					"opts": {
						"q0": "A. Trade journal",
						"q1": "B. Letter of enquiry",
						"q2": "C. Invoice",
						"q3": "D. Order form",
						"q4": "E. Catalogue"
					},
					"ans": "C"
				},
				"Q80": {
					"qs": "80. With regard to payment, the amount payable when no deductions are made is called",
					"opts": {
						"q0": "A. net price",
						"q1": "B. spot cash",
						"q2": "C. net profit",
						"q3": "D. prompt cash",
						"q4": "E. draft"
					},
					"ans": "B"
				},
				"Q81": {
					"qs": "81. Sending a proforma invoice to a potential customer is",
					"opts": {
						"q0": "A. an indication that the seller is out of business",
						"q1": "B. an indication of the seller’s willingness to grant credit",
						"q2": "C. a polite way of asking the customer to return the goods",
						"q3": "D. an invitation to the buyer to buy on hire purchase",
						"q4": "E. a polite way of refusing to sell on credit"
					},
					"ans": "E"
				},
				"Q82": {
					"qs": "82. Exchange in the international market which does not involve the use of money as a medium is known as",
					"opts": {
						"q0": "A. foreign aid",
						"q1": "B. counter trade",
						"q2": "C. monetization",
						"q3": "D. foreign trade",
						"q4": "E. entrepot trade"
					},
					"ans": "B"
				},
				"Q83": {
					"qs": "83. A shipping company’s document detailing the charges for carrying a particular cargo for a specified journey is known as",
					"opts": {
						"q0": "A. dock warrant",
						"q1": "B. freight note",
						"q2": "C. carriage forward",
						"q3": "D. weight note",
						"q4": "E. credit note"
					},
					"ans": "B"
				},
				"Q84": {
					"qs": "84. Which mode of transport would you suggest as the most suitable for natural gas?",
					"opts": {
						"q0": "A. Air ",
						"q1": "B. Sea ",
						"q2": "C. Pipeline",
						"q3": "D. Road ",
						"q4": "E. Canal"
					},
					"ans": "C"
				},
				"Q85": {
					"qs": "85. Which of the following is true of debenture?",
					"opts": {
						"q0": "A. They are part of the company’s authorized capital",
						"q1": "B. Debenture holders receive interest",
						"q2": "C. Debenture holders receive dividend",
						"q3": "D. Debenture holders are owners of the company",
						"q4": "E. Debenture holders control the company."
					},
					"ans": "B"
				},
				"Q86": {
					"qs": "",
					"opts": {
						"q0": "A. ",
						"q1": "B. ",
						"q2": "C. ",
						"q3": "D. ",
						"q4": "E. "
					},
					"ans": "A"
				},
				"Q87": {
					"qs": "87. Which of the following documents contains the complete information on goods available in the wholesaler’s warehouse? The",
					"opts": {
						"q0": "A. catalogue",
						"q1": "B. order",
						"q2": "C. consignment note",
						"q3": "D. invoice",
						"q4": "E. delivery note"
					},
					"ans": "A"
				},
				"Q88": {
					"qs": "88. Which of the following are true of small shops? I. They exist to serve a local market II. They provide personal services to customers III. There is not much opportunity for expansion IV. There is no need to employ paid assistants",
					"opts": {
						"q0": "A. I,II and III only",
						"q1": "B. II, III and IV only",
						"q2": "C. Ill and IV only",
						"q3": "D. I, II and IV only",
						"q4": "E. II and III only"
					},
					"ans": "A"
				},
				"Q89": {
					"qs": "89. The essence of marketing is",
					"opts": {
						"q0": "A. exchange",
						"q1": "B. sales",
						"q2": "C. trade",
						"q3": "D. research",
						"q4": "E. profit"
					},
					"ans": "B"
				},
				"Q90": {
					"qs": "90. For continuous existence, a service oriented concern depends on",
					"opts": {
						"q0": "A. liquid assets",
						"q1": "B. middlemen",
						"q2": "C. patronage of consumers",
						"q3": "D. legislation of the ruling political party",
						"q4": "E. staff strength of the concern"
					},
					"ans": "C"
				},
				"Q91": {
					"qs": "91.	Which of the following is not a problem of distribution, sales and merchandising?",
					"opts": {
						"q0": "A. Transporting goods",
						"q1": "B. Trade malpractices",
						"q2": "C. Pressure of sales",
						"q3": "D. Sales force complacency",
						"q4": "E. Easy payment for purchases"
					},
					"ans": "E"
				},
				"Q92": {
					"qs": "92. Which of the following is not one of the functions of warehousing?",
					"opts": {
						"q0": "A. Goods are available where they are required",
						"q1": "B. Goods are stored until required",
						"q2": "C. Production takes place ahead of demand",
						"q3": "D. changes are avoided in prices which may result from shortages and gluts",
						"q4": "E. Goods are available when required."
					},
					"ans": "A"
				},
				"Q93": {
					"qs": "93. Which of the following shows the financial position of a business on a given date?",
					"opts": {
						"q0": "A. Bank statement",
						"q1": "B. Balance sheet",
						"q2": "C. Journal ",
						"q3": "D. Cashbook ",
						"q4": "E. Trial Balance"
					},
					"ans": "B"
				},
				"Q94": {
					"qs": "94. The last link in the chain of distribution is the",
					"opts": {
						"q0": "A. wholesaler ",
						"q1": "B. retailer ",
						"q2": "C. consumer ",
						"q3": "D. factor ",
						"q4": "E. advertiser"
					},
					"ans": "C"
				},
				"Q95": {
					"qs": "95. The management function of anticipating the future and determining the best course of action to achieve company objective is",
					"opts": {
						"q0": "A. directing ",
						"q1": "B. organizing",
						"q2": "C. controlling ",
						"q3": "D. planning ",
						"q4": "E. consulting"
					},
					"ans": "D"
				},
				"Q96": {
					"qs": "96. All advertising campaigns for consumer goods must pay attention to",
					"opts": {
						"q0": "A. cinema advertising",
						"q1": "B. radio advertising",
						"q2": "C. point of sale",
						"q3": "D. door to door sale",
						"q4": "E. neon signs"
					},
					"ans": "C"
				},
				"Q97": {
					"qs": "97. Which of the following is an insurance principle?",
					"opts": {
						"q0": "A. Endowment ",
						"q1": "B. Premium ",
						"q2": "C. Proximate cause",
						"q3": "D. Fidelity guarantee",
						"q4": "E. Surrender value"
					},
					"ans": "C"
				},
				"Q98": {
					"qs": "98. Which of the following is an insurance cover undertaken by the Government for its employees?",
					"opts": {
						"q0": "A. Endowment",
						"q1": "B. Marine insurance",
						"q2": "C. Fidelity guarantee insurance",
						"q3": "D. Pensions scheme",
						"q4": "E. Fire insurance"
					},
					"ans": "D"
				},
				"Q99": {
					"qs": "99. The treaty establishing ECOWAS on May 28, 1975 was signed by",
					"opts": {
						"q0": "A. 15 Heads of State",
						"q1": "B. 14 Heads of State",
						"q2": "C. 13 Heads of State",
						"q3": "D. 15 Foreign Ministers",
						"q4": "E. 12 Heads of State"
					},
					"ans": "A"
				},
				"Q100": {
					"qs": "100. One of the main aims of the ECOWAS is to",
					"opts": {
						"q0": "A. foster interchange of goods and services among its members",
						"q1": "B. provide a reliable market for stock and shares",
						"q2": "C. have common political system",
						"q3": "D. have common language",
						"q4": "E. have one currency."
					},
					"ans": "A"
				}
			}
		});
	});

	app.get('/commerce/1990', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. The major divisions of Commerce are",
					"opts": {
						"q0": "A. import, export and transport",
						"q1": "B. trade, communication and warehousing",
						"q2": "C. trade and auxiliaries to trade",
						"q3": "D. exchange, consumption and production",
						"q4": "E. import, trade and production"
					},
					"ans": "C"
				},
				"Q2": {
					"qs": "2. Which of the following statements is not true?",
					"opts": {
						"q0": "A. Commercial services are the life blood of a country’s economic system",
						"q1": "B. There cannot occur commercial services until goods have been produced.",
						"q2": "C. Without commercial services most goods and services will not be produced",
						"q3": "D. There is no stage of production that does not employ commercial services",
						"q4": "E. Commercial services add to the value of a product."
					},
					"ans": "B"
				},
				"Q3": {
					"qs": "3. The three main divisions of production include industrial,",
					"opts": {
						"q0": "A. commercial and banking services",
						"q1": "B. commercial and services",
						"q2": "C. transportation and services",
						"q3": "D. manufacturing and services",
						"q4": "E. banking and services"
					},
					"ans": "B"
				},
				"Q4": {
					"qs": "4. Which of the following is one of the functions of commerce?",
					"opts": {
						"q0": "A. Manufacturing",
						"q1": "B. Growing of tomatoes",
						"q2": "C. Storage of goods",
						"q3": "D. Construction of Roads",
						"q4": "E. Car assembling"
					},
					"ans": "C"
				},
				"Q5": {
					"qs": "5. Which of the following does not belong to the extractive industry?",
					"opts": {
						"q0": "A. Farming ",
						"q1": "B. Insuring ",
						"q2": "C. Mining ",
						"q3": "D. Drilling",
						"q4": "E. Fishing"
					},
					"ans": "B"
				},
				"Q6": {
					"qs": "6. The average stock is",
					"img": "img**comm_1990_sectionb_qst6_1.jpg",
					"opts": {
						"q0": "A. N2000",
						"q1": "B. N3000",
						"q2": "C. N5000",
						"q3": "D. N6000",
						"q4": "E. N7000"
					},
					"ans": "C"
				},
				"Q7": {
					"qs": "7. The cost of goods sold is",
					"img": "img**comm_1990_sectionb_qst6_1.jpg",
					"opts": {
						"q0": "A. N6000",
						"q1": "B. N10000",
						"q2": "C. N42000",
						"q3": "D. N16000",
						"q4": "E. N20000"
					},
					"ans": "A"
				},
				"Q8": {
					"qs": "8. The oldest and commonest form of business in Nigeria is",
					"opts": {
						"q0": "A. partnership",
						"q1": "B. the co-operative society",
						"q2": "C. sole proprietorship",
						"q3": "D. joint stock venture",
						"q4": "E. public corporation"
					},
					"ans": "C"
				},
				"Q9": {
					"qs": "9. If a retailer Mr. Aigbojie buys goods manufactured by Adefila Limited from wholesaler Mrs. Jumai, who will prepare the delivery note?",
					"opts": {
						"q0": "A. Mr. Aigbojie",
						"q1": "B. Adefila Limited",
						"q2": "C. Mr Jumai",
						"q3": "D. Mr Aigbojie and Adefila Limited",
						"q4": "E. Adefila Limited and Mrs. Jumai"
					},
					"ans": "C"
				},
				"Q10": {
					"qs": "10. Which of the following is not a factor of production?",
					"opts": {
						"q0": "A. Capital",
						"q1": "B. land ",
						"q2": "C. Labour ",
						"q3": "D. Organisation ",
						"q4": "E. Staffing"
					},
					"ans": "E"
				},
				"Q11": {
					"qs": "11. In which class of occupation would you place a taxi-driver? ",
					"opts": {
						"q0": "A. Extractive ",
						"q1": "B. Indirect services",
						"q2": "C. Personal services",
						"q3": "D. Primary production",
						"q4": "E. Commercial services"
					},
					"ans": "E"
				},
				"Q12": {
					"qs": "12. The purpose of issuing a credit note is to",
					"opts": {
						"q0": "A. correct errors of overcharging",
						"q1": "B. correct errors of undercharging",
						"q2": "C. write off bad debts",
						"q3": "D. encourage immediate payment",
						"q4": "E. encourage bulk buying"
					},
					"ans": "A"
				},
				"Q13": {
					"qs": "13. The exchange of goods for other goods in home trade is known as",
					"opts": {
						"q0": "A. entrepot trade",
						"q1": "B. home trade",
						"q2": "C. barter trade",
						"q3": "D. foreign trade",
						"q4": "E. countertrade"
					},
					"ans": "C"
				},
				"Q14": {
					"qs": "14. Which of the following advertising media combines the advantages of sound and motion?",
					"opts": {
						"q0": "A. Radio ",
						"q1": "B. Neon signs",
						"q2": "C. Press ",
						"q3": "D. Hoarding",
						"q4": "E. Television"
					},
					"ans": "E"
				},
				"Q15": {
					"qs": "15. Which of the following is a form of sales promotion?",
					"opts": {
						"q0": "A. Promotion through radio",
						"q1": "B. Advertising by television",
						"q2": "C. Distributing printed sales literature",
						"q3": "D. Offering free samples to customers",
						"q4": "E. Advertising by posters"
					},
					"ans": "D"
				},
				"Q16": {
					"qs": "16. Efforts geared towards establishing and maintaining good image for a company is termed",
					"opts": {
						"q0": "A. human relations",
						"q1": "B. professional relations",
						"q2": "C. public relations",
						"q3": "D. trade relations",
						"q4": "E. personnel relations"
					},
					"ans": "C"
				},
				"Q17": {
					"qs": "17. Which of the following is sent as a reply to an inquiry?",
					"opts": {
						"q0": "A. Tender ",
						"q1": "B. Estimate ",
						"q2": "C. Statement ",
						"q3": "D. Advice note",
						"q4": "E. Quotation"
					},
					"ans": "E"
				},
				"Q18": {
					"qs": "18. The above trade document is called",
					"img": "img**comm_1990_sectionb_qst18_1.jpg",
					"opts": {
						"q0": "A. an order",
						"q1": "B. a standing order",
						"q2": "C. a debit note",
						"q3": "D. an invoice",
						"q4": "E. a catalogue"
					},
					"ans": "D"
				},
				"Q19": {
					"qs": "19. E & O. E stands for",
					"img": "img**comm_1990_sectionb_qst18_1.jpg",
					"opts": {
						"q0": "A. errors and omissions exempted",
						"q1": "B. errors and orders exempted",
						"q2": "C. expect omissions and errors",
						"q3": "D. errors and omissions exempted",
						"q4": "E. errors and omissions excluded"
					},
					"ans": "A"
				},
				"Q20": {
					"qs": "20. Which of the following statements best describes net profit? The excess of ",
					"opts": {
						"q0": "A. total revenue over total expenditure",
						"q1": "B. total capital income over expenditure",
						"q2": "C. saies over purchases",
						"q3": "D. total capital formation over capital consumption",
						"q4": "E. total expenditure over total revenue"
					},
					"ans": "A"
				},
				"Q21": {
					"qs": "21. A business is in existence primarily to",
					"opts": {
						"q0": "A. make profit",
						"q1": "B. provide goods and services",
						"q2": "C. provide employment",
						"q3": "D. compete with others in business",
						"q4": "E. sell goods at reasonable prices"
					},
					"ans": "A"
				},
				"Q22": {
					"qs": "22. A number of shops under one roof is the feature of a",
					"opts": {
						"q0": "A. supermarkets",
						"q1": "B. chain store",
						"q2": "C. department store",
						"q3": "D. mail order business ",
						"q4": "E. shopping centre"
					},
					"ans": "C"
				},
				"Q23": {
					"qs": "23. An agreement between two parties which will give rise to enforceable rights and obligation is known as",
					"opts": {
						"q0": "A. a warrant",
						"q1": "B. a contract",
						"q2": "C. a consideration",
						"q3": "D. an offer",
						"q4": "E. an acceptance"
					},
					"ans": "B"
				},
				"Q24": {
					"qs": "24. Auctions and Tenders become binding when they are",
					"opts": {
						"q0": "A. accepted ",
						"q1": "B. offered ",
						"q2": "C. received ",
						"q3": "D. advertised",
						"q4": "E. communicated"
					},
					"ans": "A"
				},
				"Q25": {
					"qs": "25. The organized efforts of consumers to protect themselves against the unfair practices of businessmen is called",
					"opts": {
						"q0": "A. strike",
						"q1": "B. consumerism",
						"q2": "C. amalgamation",
						"q3": "D. co-operation",
						"q4": "E. propaganda"
					},
					"ans": "B"
				},
				"Q26": {
					"qs": "26. Which of the following is the most suitable means of transporting bulky goods from Lagos to Kaduna? By",
					"opts": {
						"q0": "A. Train",
						"q1": "B. Aeroplane",
						"q2": "C. Ship ",
						"q3": "D. Lorry ",
						"q4": "E. Caravan"
					},
					"ans": "A"
				},
				"Q27": {
					"qs": "27. Which of the following is the quickest and accurate means of communication?",
					"opts": {
						"q0": "A. Telegram ",
						"q1": "B. Express mail",
						"q2": "C. Courier services",
						"q3": "D. Telex ",
						"q4": "E. Railex"
					},
					"ans": "D"
				},
				"Q28": {
					"qs": "28. Which of the following is the safest means of sending a postal order from Lagos to a friend in Jos?",
					"opts": {
						"q0": "A. Special delivery",
						"q1": "B. Recorded delivery",
						"q2": "C. Registered letter",
						"q3": "D. First class mail",
						"q4": "E. Express letter"
					},
					"ans": "B"
				},
				"Q29": {
					"qs": "29. One of the objectives of the indigenisation programme of the Federal Government of Nigeria is to",
					"opts": {
						"q0": "A. encourage the use of local raw materials",
						"q1": "B. expel all foreigners from Nigeria",
						"q2": "C. make Nigerian businessmen very rich",
						"q3": "D. maximize local retention of profits",
						"q4": "E. promote foreign trade"
					},
					"ans": "D"
				},
				"Q30": {
					"qs": "30. The law which stipulates that labels should give an accurate account of a product is the",
					"opts": {
						"q0": "A. price control act",
						"q1": "B. consumer credit act",
						"q2": "C. trade description act",
						"q3": "D. hire purchase act",
						"q4": "E. product standard act"
					},
					"ans": "C"
				},
				"Q31": {
					"qs": "31. Which of the following is not an essentia! of a contract?",
					"opts": {
						"q0": "A. Offer and acceptance",
						"q1": "B. Intention to create legal relations",
						"q2": "C. All contracts written out",
						"q3": "D. Legality of object",
						"q4": "E. Consideration"
					},
					"ans": "C"
				},
				"Q32": {
					"qs": "32. One advantage of personal selling is",
					"opts": {
						"q0": "A. low cost",
						"q1": "B. immediate feedback",
						"q2": "C. the appeal to many people at a time",
						"q3": "D. self service",
						"q4": "E. speedy market coverage."
					},
					"ans": "B"
				},
				"Q33": {
					"qs": "33. Charges paid by a ship for staying at a port beyond agreed sailing time is called",
					"opts": {
						"q0": "A. profit",
						"q1": "B. interest",
						"q2": "C. holding",
						"q3": "D. carriage cost",
						"q4": "E. demurrage"
					},
					"ans": "E"
				},
				"Q34": {
					"qs": "34. Entrepot Trade refers to",
					"opts": {
						"q0": "A. importing for domestic consumption",
						"q1": "B. importing for industrial use",
						"q2": "C. importing sparling for government concerns",
						"q3": "D. exporting for factory use",
						"q4": "E. importing for re-export"
					},
					"ans": "E"
				},
				"Q35": {
					"qs": "35. Which of the following could account for a favourable balance of payment?",
					"opts": {
						"q0": "A. High capital repayments",
						"q1": "B. high debt service repayment",
						"q2": "C. higher imports than exports",
						"q3": "D. Higher exports than imports",
						"q4": "E. Higher public spending"
					},
					"ans": "D"
				},
				"Q36": {
					"qs": "36. Which of the following is not part of the facilities provided by the Nigerian Ports Authority?",
					"opts": {
						"q0": "A. Dredging ",
						"q1": "B. Warehousing",
						"q2": "C. Collection of customs duties",
						"q3": "D. Loading and off-loading of cargoes",
						"q4": "E. Off¬loading of cargoes"
					},
					"ans": "C"
				},
				"Q37": {
					"qs": "37. The main purpose of branding is to",
					"opts": {
						"q0": "A. increase the quantity of goods demanded",
						"q1": "B. differentiate goods from other similar goods made by other producers",
						"q2": "C. increase the selling price of goods",
						"q3": "D. enhance turnover of goods",
						"q4": "E. introduce the product to the customers"
					},
					"ans": "B"
				},
				"Q38": {
					"qs": "38. An individual who makes the final use of goods and services provided by a firm is the",
					"opts": {
						"q0": "A. manufacturer",
						"q1": "B. wholesaler ",
						"q2": "C. consumer ",
						"q3": "D. retailer ",
						"q4": "E. trader"
					},
					"ans": "C"
				},
				"Q39": {
					"qs": "39. The Organisation of Petroleum Exporting Countries (OPEC) is an example of a",
					"opts": {
						"q0": "A. cartel ",
						"q1": "B. trust ",
						"q2": "C. holding company",
						"q3": "D. consortium",
						"q4": "E. chamber of commerce"
					},
					"ans": "A"
				},
				"Q40": {
					"qs": "40. When a business is insolvent it may result in",
					"opts": {
						"q0": "A. incorporation",
						"q1": "B. recuperation",
						"q2": "C. liquidation",
						"q3": "D. restoration",
						"q4": "E. nationalization"
					},
					"ans": "C"
				},
				"Q41": {
					"qs": "41. In insurance the term Uberrimae fidei stands for",
					"opts": {
						"q0": "A. utmost good faith",
						"q1": "B. subrogation",
						"q2": "C. insurable interest",
						"q3": "D. indemnity against loss",
						"q4": "E. proximate cause"
					},
					"ans": "A"
				},
				"Q42": {
					"qs": "42. Fidelity guarantee is an insurance cover against loss arising from",
					"opts": {
						"q0": "A. trade debts",
						"q1": "B. personal accidents",
						"q2": "C. dishonest staff",
						"q3": "D. fire disaster",
						"q4": "E. sea disaster"
					},
					"ans": "C"
				},
				"Q43": {
					"qs": "43. Which of the following is a type of marine insurance?",
					"opts": {
						"q0": "A. Endowment",
						"q1": "B. Freight",
						"q2": "C. Accident",
						"q3": "D. Fidelity",
						"q4": "E. Fire"
					},
					"ans": "B"
				},
				"Q44": {
					"qs": "44. The word Ltd written after the name of a company means that",
					"opts": {
						"q0": "A. the individual member’s capital is limited",
						"q1": "B. the total sum of the company’s capital is limited",
						"q2": "C. members are liable to the extent of their holding",
						"q3": "D. company’s location is limited",
						"q4": "E. a shareholder has only one vote."
					},
					"ans": "C"
				},
				"Q45": {
					"qs": "45. Which of the following is a public corporation? The",
					"opts": {
						"q0": "A. Nigeria Breweries Limited",
						"q1": "B. Nigerian Ports Authority",
						"q2": "C. Lagos Chamber of Commerce",
						"q3": "D. Nigerian Bottling Company",
						"q4": "E. Nigeria Merchant Bank Ltd"
					},
					"ans": "B"
				},
				"Q46": {
					"qs": "46. Which of the following is not required in a Memorandum of Association? The",
					"opts": {
						"q0": "A. name of the company",
						"q1": "B. location of the company",
						"q2": "C. names of the Board of Directors",
						"q3": "D. limitation of member’s liability",
						"q4": "E. objectives of the company"
					},
					"ans": "C"
				},
				"Q47": {
					"qs": "47. The amount paid by the insurance company to the insured upon giving up his policy is called",
					"opts": {
						"q0": "A. Surrender value",
						"q1": "B. cash bonus",
						"q2": "C. assured sum",
						"q3": "D. dividend",
						"q4": "E. premium"
					},
					"ans": "A"
				},
				"Q48": {
					"qs": "48. The amount paid by the assured to the insurer is called ",
					"opts": {
						"q0": "A. interest",
						"q1": "B. premium",
						"q2": "C. dividend",
						"q3": "D. indemnity",
						"q4": "E. surrender value"
					},
					"ans": "B"
				},
				"Q49": {
					"qs": "49. With the exception of life assurance and personal accident insurance, contracts of insurance are contracts of",
					"opts": {
						"q0": "A. premium ",
						"q1": "B. indemnity ",
						"q2": "C. proximate cause",
						"q3": "D. utmost good faith",
						"q4": "E. general average cause"
					},
					"ans": "B"
				},
				"Q50": {
					"qs": "50. An author’s exclusive right to published and unpublished works is known as",
					"opts": {
						"q0": "A. patent right",
						"q1": "B. fundamental human right ",
						"q2": "C. copyright ",
						"q3": "D. authorship ",
						"q4": "E. constitutional right"
					},
					"ans": "C"
				},
				"Q51": {
					"qs": "51. Which of the following is a function of money?",
					"opts": {
						"q0": "A. Provision of double coincidence of wants",
						"q1": "B. Durability",
						"q2": "C. Standard for deferred payment",
						"q3": "D. Portability ",
						"q4": "E. Divisibility"
					},
					"ans": "C"
				},
				"Q52": {
					"qs": "52. An overdraft is usually granted to a",
					"opts": {
						"q0": "A. savings account holder",
						"q1": "B. deposit account holder",
						"q2": "C. current account holder",
						"q3": "D. loan account holder",
						"q4": "E. fixed deposit account holder"
					},
					"ans": "C"
				},
				"Q53": {
					"qs": "53. Which of the following documents may be used when an importer requires a longer period of credit before settlement?",
					"opts": {
						"q0": "A. Letter of Credit",
						"q1": "B. Documentary credit",
						"q2": "C. Bill of Lading",
						"q3": "D. Sight Draft",
						"q4": "E. Bill of Exchange"
					},
					"ans": "E"
				},
				"Q54": {
					"qs": "54. The value of anything expressed in monetary terms is the",
					"opts": {
						"q0": "A. utility ",
						"q1": "B. price ",
						"q2": "C. service ",
						"q3": "D. charge ",
						"q4": "E. money"
					},
					"ans": "B"
				},
				"Q55": {
					"qs": "55. Which of the following is not a means of making payment to a businessman?",
					"opts": {
						"q0": "A. Bank draft",
						"q1": "B. Cash",
						"q2": "C. Money order",
						"q3": "D. Cheque ",
						"q4": "E. Statements"
					},
					"ans": "E"
				},
				"Q56": {
					"qs": "56. The production of goods in anticipation of demand is made possible by",
					"opts": {
						"q0": "A. Packaging ",
						"q1": "B. Warehousing",
						"q2": "C. Branding",
						"q3": "D. Advertising",
						"q4": "E. Transporting"
					},
					"ans": "B"
				},
				"Q57": {
					"qs": "57. Total sales less total returns inwards is called",
					"opts": {
						"q0": "A. purchases",
						"q1": "B. net profit",
						"q2": "C. gross profit",
						"q3": "D. average stock",
						"q4": "E. net sales"
					},
					"ans": "E"
				},
				"Q58": {
					"qs": "58. Which of the following currencies does/do not belong to any country within the ECOWAS?",
					"opts": {
						"q0": "A. Naira and Kobo",
						"q1": "B. Dalasi",
						"q2": "C. Cedis and Pesewas",
						"q3": "D. Leo ",
						"q4": "E. Kwasha and Shilling"
					},
					"ans": "E"
				},
				"Q59": {
					"qs": "59. A memorandum of association is a document ",
					"opts": {
						"q0": "A. Inviting the public to buy a company’s shares",
						"q1": "B. governing the affairs of a partnership",
						"q2": "C. showing the assets and liabilities of a company at a certain date",
						"q3": "D. defining a company's relationship with the public",
						"q4": "E. regulating a company’s internal affairs"
					},
					"ans": "D"
				},
				"Q60": {
					"qs": "60. Which of the following is not a means of raising capital by a promoter?",
					"opts": {
						"q0": "A. Goodwill",
						"q1": "B. Borrowing",
						"q2": "C. Selling of shares",
						"q3": "D. Selling real assets",
						"q4": "E. Past savings"
					},
					"ans": "A"
				},
				"Q61": {
					"qs": "61. Which of the following is a feature of co-operative society",
					"opts": {
						"q0": "A. Dividend is based on the number of shares sold",
						"q1": "B. Limited membership",
						"q2": "C. Owned and run by the State",
						"q3": "D. Democratic control and management",
						"q4": "E. Voting rights are not equal"
					},
					"ans": "D"
				},
				"Q62": {
					"qs": "62. A company has recently advertised an issue of one million ordinary shares of 50 kobo at 65 kobo per share. When the issue is fully paid the company will collect",
					"opts": {
						"q0": "A. N65.000.00",
						"q1": "B. N500,000.00",
						"q2": "C. N650,000.00",
						"q3": "D. N1,000,000.00",
						"q4": "E. N65,000,000.00"
					},
					"ans": "C"
				},
				"Q63": {
					"qs": "63. A private limited liability company differs from a public limited liability company because",
					"opts": {
						"q0": "A. of its inability to offer shares to the public",
						"q1": "B. it has a separate entity",
						"q2": "C. it has many shareholders",
						"q3": "D. it declares dividends to shareholders",
						"q4": "E. it pays salaries to its managers"
					},
					"ans": "A"
				},
				"Q64": {
					"qs": "64. Which of the following is not the function of a small retailer?",
					"opts": {
						"q0": "A. Supplying goods to the final consumer",
						"q1": "B. Breaking goods into small units",
						"q2": "C. Granting credits to known customers",
						"q3": "D. Furnishing information to the wholesaler",
						"q4": "E. Selling in large quantities"
					},
					"ans": "E"
				},
				"Q65": {
					"qs": "65. A speculator in the Stock Exchange Market who sells securities in expectation of a fall in their prices is called",
					"opts": {
						"q0": "A. broker ",
						"q1": "B. a bull",
						"q2": "C. a bear",
						"q3": "D. an investor",
						"q4": "E. a stag"
					},
					"ans": "C"
				},
				"Q66": {
					"qs": "66. An association formed by tyre manufacturers to safeguard and promote their interests is known as a",
					"opts": {
						"q0": "A. co-operative society",
						"q1": "B. chamber of commerce",
						"q2": "C. trade union",
						"q3": "D. consortium",
						"q4": "E. trade association"
					},
					"ans": "E"
				},
				"Q67": {
					"qs": "67. The reward of capital is",
					"opts": {
						"q0": "A. dividend ",
						"q1": "B. interest ",
						"q2": "C. profit ",
						"q3": "D. rent ",
						"q4": "E. rebate"
					},
					"ans": "B"
				},
				"Q68": {
					"qs": "68. To inform the buyer that the goods are in transit, the seller sends him",
					"opts": {
						"q0": "A. a quotation",
						"q1": "B. an invoice",
						"q2": "C. a debit note",
						"q3": "D. an advice note",
						"q4": "E. a credit note"
					},
					"ans": "D"
				},
				"Q69": {
					"qs": "69. The main source of capital for a limited liability company is",
					"opts": {
						"q0": "A. bank overdraft",
						"q1": "B. government subsidy",
						"q2": "C. undistributed profits",
						"q3": "D. bank loan",
						"q4": "E. share subscriptions"
					},
					"ans": "E"
				},
				"Q70": {
					"qs": "70. The authorised capital of a company is also referred to as its",
					"opts": {
						"q0": "A. called-up capital",
						"q1": "B. issued capital",
						"q2": "C. subscribed capital",
						"q3": "D. nominal capital",
						"q4": "E. unissued capital"
					},
					"ans": "D"
				},
				"Q71": {
					"qs": "71. Which of the following is an aspect of the marketing concept?",
					"opts": {
						"q0": "A. Product orientation",
						"q1": "B. Sales orientation",
						"q2": "C. Consumer orientation",
						"q3": "D. Mass production",
						"q4": "E. Mass distribution"
					},
					"ans": "C"
				},
				"Q72": {
					"qs": "72. A study to discover consumer’s preferences and needs is called",
					"opts": {
						"q0": "A. marketing",
						"q1": "B. consumer orientation",
						"q2": "C. market research",
						"q3": "D. marketing mix",
						"q4": "E. market demand"
					},
					"ans": "C"
				},
				"Q73": {
					"qs": "73. A partnership agreement specifying the relationship amongst partners is called",
					"opts": {
						"q0": "A. Article of Association",
						"q1": "B. Memorandum of Association",
						"q2": "C. Partnership Act",
						"q3": "D. Partnership Deed",
						"q4": "E. Certificate of Incorporation"
					},
					"ans": "D"
				},
				"Q74": {
					"qs": "74. What is planning?",
					"opts": {
						"q0": "A. Unification of effort and co-ordination of all activities in pursuance of the same goal",
						"q1": "B. Exchange of information among different people in an organisation",
						"q2": "C. Giving instructions to ensure that decisions are carried out to achieve a company’s objective",
						"q3": "D. Division of work and the allocation of duties, authority and responsibilities",
						"q4": "E. Anticipating the future and making decisions for future action to achieve company’s objective"
					},
					"ans": "E"
				},
				"Q75": {
					"qs": "75. Management can be defined as",
					"opts": {
						"q0": "A. getting things done through people",
						"q1": "B. implementation of business decisions",
						"q2": "C. the number of levels in an organisation",
						"q3": "D. the general manager and the employees",
						"q4": "E. decision making"
					},
					"ans": "A"
				},
				"Q76": {
					"qs": "10.	The term capital account in international trade includes I. foreign investment II. long-term lending III.	short-term lending IV. foreign exchange reserve V. short-term borrowing",
					"opts": {
						"q0": "A. I & II only",
						"q1": "B. Ill &V only",
						"q2": "C. II, III & IV only",
						"q3": "D. I, III & IV only",
						"q4": "E. II, IV &V only"
					},
					"ans": "A"
				},
				"Q77": {
					"qs": "77. Money spent for the day-to-day running of a business is called",
					"opts": {
						"q0": "A. fixed capital",
						"q1": "B. working capital",
						"q2": "C. equity capital",
						"q3": "D. capital employed",
						"q4": "E. authorized capital"
					},
					"ans": "B"
				},
				"Q78": {
					"qs": "78. Which of the following is not a fixed asset of a business?",
					"opts": {
						"q0": "A. Sundry debtors",
						"q1": "B. Patent ",
						"q2": "C. Machinery and Plant",
						"q3": "D. Goodwill ",
						"q4": "E. Loose tools"
					},
					"ans": "A"
				},
				"Q79": {
					"qs": "79. The main purpose for establishing a public corporation is to",
					"opts": {
						"q0": "A. make profit",
						"q1": "B. provide employment",
						"q2": "C. provide essential services",
						"q3": "D. compete with entrepreneurs",
						"q4": "E. establish a monopoly"
					},
					"ans": "C"
				},
				"Q80": {
					"qs": "80. A document that regulates the internal operations of a company is known as",
					"opts": {
						"q0": "A. memorandum of association",
						"q1": "B. Articles of association",
						"q2": "C. Prospectus",
						"q3": "D. Certificate of incorporation",
						"q4": "E. Certificate of trading"
					},
					"ans": "B"
				},
				"Q81": {
					"qs": "81. Which of the following is not a reason for imposing a tariff? To",
					"opts": {
						"q0": "A. correct an adverse balance of payments",
						"q1": "B. raise revenue for the government",
						"q2": "C. encourage imports",
						"q3": "D. protect infant industries",
						"q4": "E. encourage the consumption of home-produced goods"
					},
					"ans": "C"
				},
				"Q82": {
					"qs": "82. Customs Duties are",
					"opts": {
						"q0": "A. excise duties",
						"q1": "B. dock dues",
						"q2": "C. customary dues",
						"q3": "D. customs officers’ duties",
						"q4": "E. import tariffs"
					},
					"ans": "E"
				},
				"Q83": {
					"qs": "83. Which of the following documents transfers title to goods?",
					"opts": {
						"q0": "A. Bill of exchange",
						"q1": "B. Treasury bill",
						"q2": "C. Bill of lading",
						"q3": "D. Bill of sight",
						"q4": "E. Bill of sale"
					},
					"ans": "C"
				},
				"Q84": {
					"qs": "84. The purchase of one company by another is called",
					"opts": {
						"q0": "A. incorporation",
						"q1": "B. merger ",
						"q2": "C. cartel ",
						"q3": "D. nationalization",
						"q4": "E. privatization"
					},
					"ans": "B"
				},
				"Q85": {
					"qs": "85. The main object of a cartel agreement is to control",
					"opts": {
						"q0": "A. output to maintain price",
						"q1": "B. directors to achieve higher profits",
						"q2": "C. workers to increase output",
						"q3": "D. requirement to cut cost",
						"q4": "E. shareholders to maintain shares"
					},
					"ans": "A"
				},
				"Q86": {
					"qs": "86. Which of the following concepts is concerned with determining the business objectives and how they can be achieved?",
					"opts": {
						"q0": "A. Planning ",
						"q1": "B. Organizing ",
						"q2": "C. Co-ordinating",
						"q3": "D. Motivating",
						"q4": "E. Delegating"
					},
					"ans": "A"
				},
				"Q87": {
					"qs": "87. A holding company assumes control of its subsidiaries through",
					"opts": {
						"q0": "A. taking over routine administration",
						"q1": "B. becoming the principal customer",
						"q2": "C. majority shareholding",
						"q3": "D. paying all the debts outright",
						"q4": "E. taking over oniy the assets."
					},
					"ans": "C"
				},
				"Q88": {
					"qs": "88. The accomplishment of a company’s objective by guiding and motivating subordinates is known as",
					"opts": {
						"q0": "A. Planning",
						"q1": "B. Organizing ",
						"q2": "C. Managing ",
						"q3": "D. Controlling ",
						"q4": "E. Directing"
					},
					"ans": "E"
				},
				"Q89": {
					"qs": "89. The taking over by state of ownership and control of certain business enterprises is known as",
					"opts": {
						"q0": "A. indigenization",
						"q1": "B. nationalization",
						"q2": "C. privatization",
						"q3": "D. commercialization",
						"q4": "E. rationalization"
					},
					"ans": "B"
				},
				"Q90": {
					"qs": "90. The concept of marketing as a process which begins and ends with the needs and wants of the consumer rather than those of the organization is called",
					"opts": {
						"q0": "A. caveat venditor",
						"q1": "B. consumer orientation",
						"q2": "C. consumer association",
						"q3": "D. consumer protection",
						"q4": "E. caveat emptor"
					},
					"ans": "B"
				},
				"Q91": {
					"qs": "91. Which of the following is not an advantage of advertising? It",
					"opts": {
						"q0": "A. gives information about products",
						"q1": "B. increases sales",
						"q2": "C. increases production",
						"q3": "D. improves the quality of products",
						"q4": "E. introduces new products"
					},
					"ans": "D"
				},
				"Q92": {
					"qs": "92. Which of the following is the acceptable classification of warehouse?",
					"opts": {
						"q0": "A. Ordinary, wholesale and state warehouse",
						"q1": "B. Ordinary, presidential and bonded warehouse",
						"q2": "C. Bonded, royal and queen warehouse",
						"q3": "D. Ordinary, off-shore and bonded warehouse",
						"q4": "E. Private, public and bonded warehouse"
					},
					"ans": "E"
				},
				"Q93": {
					"qs": "93. A cheque made payable to 'bearer'",
					"opts": {
						"q0": "A. can be negotiated for cash by the drawer only",
						"q1": "B. can only be paid into an account",
						"q2": "C. can be negotiated for cash by any holder",
						"q3": "D. is not regarded as a negotiable instrument",
						"q4": "E. must be endorsed to another account for settlement"
					},
					"ans": "C"
				},
				"Q94": {
					"qs": "94. Which of the following arguments are in favour of establishing ECOWAS? I. The countries concerned would be able to expand market beyond their territorial boundaries II. Currency union is the final objective of member countries III. Capital movement is not allowed across the boundaries IV. Free movement across the borders of members would be allowed",
					"opts": {
						"q0": "A. I, II and III only",
						"q1": "B. II and IV only",
						"q2": "C. I, II and IV only",
						"q3": "D. II and III only",
						"q4": "E. I and III only"
					},
					"ans": "C"
				},
				"Q95": {
					"qs": "95. Which of the following countries is not a member of ECOWAS?",
					"opts": {
						"q0": "A. Nigeria ",
						"q1": "B. Gambia ",
						"q2": "C. Sierra-Leone",
						"q3": "D. Ghana",
						"q4": "E. Cameroun"
					},
					"ans": "E"
				},
				"Q96": {
					"qs": "96. The major dealers on a stock exchange market are the",
					"opts": {
						"q0": "A. authorized clerks",
						"q1": "B. Jobbers",
						"q2": "C. investors",
						"q3": "D. brokers",
						"q4": "E. underwriters"
					},
					"ans": "B"
				},
				"Q97": {
					"qs": "97. The selection and promotion of staff in an organisation is the function of the",
					"opts": {
						"q0": "A. marketing department",
						"q1": "B. finance department",
						"q2": "C. personnel department",
						"q3": "D. production department",
						"q4": "E. public relations department"
					},
					"ans": "C"
				},
				"Q98": {
					"qs": "98. A trade document signed by a representative of the country to which goods are being sent is caiied ",
					"opts": {
						"q0": "A. export invoice",
						"q1": "B. consignment note",
						"q2": "C. certificate of origin",
						"q3": "D. pro-forma invoice",
						"q4": "E. consular invoice"
					},
					"ans": "E"
				},
				"Q99": {
					"qs": "99. Which of the following is not an element of the marketing mix?",
					"opts": {
						"q0": "A. Product ",
						"q1": "B. Pricing ",
						"q2": "C. Promotion",
						"q3": "D. Merchandising",
						"q4": "E. Distribution"
					},
					"ans": "D"
				},
				"Q100": {
					"qs": "100. Retail outlets which sell from specialised vans are",
					"opts": {
						"q0": "A. Supermarkets",
						"q1": "B. multiple shops",
						"q2": "C. mail order firms",
						"q3": "D. department stores",
						"q4": "E. mobile shops"
					},
					"ans": "E"
				}
			}
		});
	});

	app.get('/commerce/1991', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. Which of the following is a commercial service?",
					"opts": {
						"q0": "A. Transporting ",
						"q1": "B. Garri processing",
						"q2": "C. Oil drilling",
						"q3": "D. Lumbering",
						"q4": "E. Tailoring"
					},
					"ans": "A"
				},
				"Q2": {
					"qs": "2. The tendency for firms and individuals to concentrate on the activity which is of most advantage of them is known as",
					"opts": {
						"q0": "A. decentralization",
						"q1": "B. diversification",
						"q2": "C. commercialization",
						"q3": "D. specialization",
						"q4": "E. rationalization"
					},
					"ans": "D"
				},
				"Q3": {
					"qs": "3. The major divisions of commerce are",
					"opts": {
						"q0": "A. import, export and banking",
						"q1": "B. home trade and foreign trade",
						"q2": "C. trade and aids to trade",
						"q3": "D. exchange, consumption and production",
						"q4": "E. trade and banking"
					},
					"ans": "C"
				},
				"Q4": {
					"qs": "4. The sole purpose of production is",
					"opts": {
						"q0": "A. employment ",
						"q1": "B. promotion ",
						"q2": "C. consumption ",
						"q3": "D. competition",
						"q4": "E. enterprise"
					},
					"ans": "C"
				},
				"Q5": {
					"qs": "5. Commerce developed as a result of",
					"opts": {
						"q0": "A. speculation",
						"q1": "B. competition",
						"q2": "C. specialization",
						"q3": "D. importation",
						"q4": "E. exportation"
					},
					"ans": "C"
				},
				"Q6": {
					"qs": "6. Which of the following is concerned with obtaining raw materials from their natural locations?",
					"opts": {
						"q0": "A. Extractive industry",
						"q1": "B. Manufacturing industry",
						"q2": "C. Construction industry",
						"q3": "D. Transport industry",
						"q4": "E. Engineering industry"
					},
					"ans": "A"
				},
				"Q7": {
					"qs": "7. In which of the following classes of occupation would you place a Commerce teacher?",
					"opts": {
						"q0": "A. Commercial",
						"q1": "B. Extractive",
						"q2": "C. Direct Service",
						"q3": "D. Manufacturing",
						"q4": "E. Construction"
					},
					"ans": "C"
				},
				"Q8": {
					"qs": "8. Turnover may be increased by",
					"opts": {
						"q0": "A. increasing prices and product differentiation",
						"q1": "B. advertising and cutting prices",
						"q2": "C. refusing credits and customer services",
						"q3": "D. increasing the mark-up",
						"q4": "E. stocking very expensive goods"
					},
					"ans": "B"
				},
				"Q9": {
					"qs": "9. The advantage road transport has over other means of transport is that",
					"opts": {
						"q0": "A. intermediate terminal handling is eliminated by door-to-door delivery ",
						"q1": "B. specialized vehicles can be used to carry certain loads",
						"q2": "C. packaging is very easy as experts handle it",
						"q3": "D. canteen services are provided",
						"q4": "E. weather conditions do not affect it"
					},
					"ans": "A"
				},
				"Q10": {
					"qs": "10. In winding-up a company, the assets of the company are vested in the hands of the",
					"opts": {
						"q0": "A. receiver",
						"q1": "B. liquidator",
						"q2": "C. registrar of companies",
						"q3": "D. directors of companies",
						"q4": "E. the government"
					},
					"ans": "B"
				},
				"Q11": {
					"qs": "11. When more shares are applied for than are offered for sale the offer is said to be over",
					"opts": {
						"q0": "A. issued",
						"q1": "B. floated",
						"q2": "C. subscribed",
						"q3": "D. valued",
						"q4": "E. traded"
					},
					"ans": "C"
				},
				"Q12": {
					"qs": "12. Which of the following deals with the problems involved in the selling of a particular product?",
					"opts": {
						"q0": "A. Market research",
						"q1": "B. Market segmentation",
						"q2": "C. Market sharing",
						"q3": "D. Marketing research",
						"q4": "E. Merchandising"
					},
					"ans": "B"
				},
				"Q13": {
					"qs": "13. If a seller discovers that he had undercharged a buyer, which of the following documents will he use to correct the error?",
					"opts": {
						"q0": "A. A promissory note",
						"q1": "B. A credit note",
						"q2": "C. An advice note",
						"q3": "D. A debit note",
						"q4": "E. A statement of account"
					},
					"ans": "D"
				},
				"Q14": {
					"qs": "14. The Nigerian Television Authority is an example of a",
					"opts": {
						"q0": "A. private limited liability company",
						"q1": "B. public limited liability company",
						"q2": "C. multinational corporation",
						"q3": "D. co-operative society",
						"q4": "E. public corporation"
					},
					"ans": "E"
				},
				"Q15": {
					"qs": "15. The ship owner’s receipt for the goods accepted for carriage in a ship is called",
					"opts": {
						"q0": "A. ship manifest",
						"q1": "B. charter party",
						"q2": "C. mate’s receipt",
						"q3": "D. bill of exchange",
						"q4": "E. bill of lading"
					},
					"ans": "E"
				},
				"Q16": {
					"qs": "16. Demurrage is a charge for",
					"opts": {
						"q0": "A. utilised lay days",
						"q1": "B. unused lay days",
						"q2": "C. exceeding lay days",
						"q3": "D. damaged cargo",
						"q4": "E. jettisoned cargo"
					},
					"ans": "C"
				},
				"Q17": {
					"qs": "17.	Activities aimed at creating an image for an organization are known as",
					"opts": {
						"q0": "A. advertising ",
						"q1": "B. market research",
						"q2": "C. public relation",
						"q3": "D. exhibition ",
						"q4": "E. mass marketing"
					},
					"ans": "C"
				},
				"Q18": {
					"qs": "18.	Patent Right gives the owner the exclusive right to",
					"opts": {
						"q0": "A. produce any type of goods",
						"q1": "B. his invention",
						"q2": "C. form a new business",
						"q3": "D. sell to other manufacturers",
						"q4": "E. produce the same goods with other manufacturers"
					},
					"ans": "B"
				},
				"Q19": {
					"qs": "19.	The method by which insurance companies spread their risks to other insurance companies is called",
					"opts": {
						"q0": "A. double insurance",
						"q1": "B. under-insurance",
						"q2": "C. re-insurance",
						"q3": "D. over-insurance",
						"q4": "E. underwriting"
					},
					"ans": "C"
				},
				"Q20": {
					"qs": "20.	When a number of insurers are liable under one given policy, the principle of insurance that applies is",
					"opts": {
						"q0": "A. indemnity ",
						"q1": "B. subrogation ",
						"q2": "C. abandonment ",
						"q3": "D. contribution ",
						"q4": "E. proximate cause"
					},
					"ans": "D"
				},
				"Q21": {
					"qs": "21.	The interplay of such variables as product, price, distribution and promotion is known as",
					"opts": {
						"q0": "A. the distribution mix",
						"q1": "B. market segmentation",
						"q2": "C. the marketing mix",
						"q3": "D. the marketing concept",
						"q4": "E. product mix"
					},
					"ans": "C"
				},
				"Q22": {
					"qs": "22.	Which of the following refers to sales promotion?",
					"opts": {
						"q0": "A. Non-personal presentation of a product",
						"q1": "B. Offering free samples of products",
						"q2": "C. Providing information about a company and its product",
						"q3": "D. Direct contact with the ultimate buyer",
						"q4": "E. Gathering information about a product"
					},
					"ans": "B"
				},
				"Q23": {
					"qs": "23.	When shares are sold Ex-div it means that the",
					"opts": {
						"q0": "A. buyer is entitled to any dividend which may be declared",
						"q1": "B. shares are sold at per",
						"q2": "C. shares are sold at a premium",
						"q3": "D. seller has the right to the next dividend",
						"q4": "E. shares are sold at a loss"
					},
					"ans": "D"
				},
				"Q24": {
					"qs": "24.	The market for short term loans is known as the",
					"opts": {
						"q0": "A. capital market",
						"q1": "B. discount market",
						"q2": "C. money market",
						"q3": "D. stock market",
						"q4": "E. open market"
					},
					"ans": "C"
				},
				"Q25": {
					"qs": "25.	A house insured against damage by flood was burnt down and the owner had no claims. Which of the following prevented him from making any claim? The principle of",
					"opts": {
						"q0": "A. indemnity ",
						"q1": "B. subrogation ",
						"q2": "C. insurable interest",
						"q3": "D. proximate cause",
						"q4": "E. utmost good faith"
					},
					"ans": "D"
				},
				"Q26": {
					"qs": "26.	The practice of selling goods in foreign markets at less than the cost price is known as",
					"opts": {
						"q0": "A. fair trading",
						"q1": "B. over- invoicing",
						"q2": "C. smuggling ",
						"q3": "D. hedging ",
						"q4": "E. dumping"
					},
					"ans": "E"
				},
				"Q27": {
					"qs": "27.	One of the reasons for nationalization of industries is",
					"opts": {
						"q0": "A. for efficient management",
						"q1": "B. to control corruption and nepotism",
						"q2": "C. to increase the number of shareholders",
						"q3": "D. to control the performance of strategic industries",
						"q4": "E. to drive away foreign investors"
					},
					"ans": "D"
				},
				"Q28": {
					"qs": "28.	The value stated on the share certificate as opposed to the current value is called its",
					"opts": {
						"q0": "A. premium value",
						"q1": "B. exchange value",
						"q2": "C. nominal value",
						"q3": "D. discount value",
						"q4": "E. market value"
					},
					"ans": "C"
				},
				"Q29": {
					"qs": "29.	The main criticism of advertising is that it",
					"opts": {
						"q0": "A. leads to increase in the size of the market",
						"q1": "B. leads to war of brands",
						"q2": "C. increases the price of the products",
						"q3": "D. decreases employment opportunities",
						"q4": "E. uses bad language"
					},
					"ans": "C"
				},
				"Q30": {
					"qs": "30.	The state of scientific knowledge and production process obtainable in a country is part of the",
					"opts": {
						"q0": "A. economic environment of business",
						"q1": "B. political environment of business",
						"q2": "C. legal environment of business",
						"q3": "D. technological environment of business",
						"q4": "E. cultural environment of business"
					},
					"ans": "D"
				},
				"Q31": {
					"qs": "31.	The Act designed to reserve certain businesses exclusively for Nigerians is known as the",
					"opts": {
						"q0": "A. Sale of Goods Act",
						"q1": "B. Weights and Measures Act",
						"q2": "C. Nigerian Enterprises Promotion Act",
						"q3": "D. Standards Organization of Nigeria Act",
						"q4": "E. Trade Marks Act"
					},
					"ans": "C"
				},
				"Q32": {
					"qs": "32.	Which of the following involves gathering and analysing information about demand, consumer wants and new products?",
					"opts": {
						"q0": "A. Sales promotion",
						"q1": "B. Market research",
						"q2": "C. Personal selling",
						"q3": "D. After-sales service",
						"q4": "E. Physical distribution"
					},
					"ans": "B"
				},
				"Q33": {
					"qs": "33.	Which of the following must be submitted to the Registrar of Companies before a company is incorporated?",
					"opts": {
						"q0": "A. Articles of Association and Certificate of Incorporation",
						"q1": "B. Memorandum of Association and Certificate of Incorporation",
						"q2": "C. Articles of Association and Memorandum of Association",
						"q3": "D. Memorandum of Association and Prospectus",
						"q4": "E. Certificate of Incorporation and Prospectus"
					},
					"ans": "C"
				},
				"Q34": {
					"qs": "34.	Which of the following is a feature of Co-operative Societies?",
					"opts": {
						"q0": "A. Each member has several votes during meetings",
						"q1": "B. Profits are shared on the basis of shares held",
						"q2": "C. All members have equal votes during meetings",
						"q3": "D. Members are not involved in running the business",
						"q4": "E. The welfare of members is not taken into consideration"
					},
					"ans": "C"
				},
				"Q35": {
					"qs": "35.	Workers involved in mining, quarrying or fishing are engaged in",
					"opts": {
						"q0": "A. secondary production",
						"q1": "B. primary production",
						"q2": "C. tertiary production",
						"q3": "D. the manufacturing industry",
						"q4": "E. The construction industry"
					},
					"ans": "B"
				},
				"Q36": {
					"qs": "36.	Which of the following is not a method of trade restriction?",
					"opts": {
						"q0": "A. Exchange control",
						"q1": "B. Stock exchange",
						"q2": "C. Import licence",
						"q3": "D. Embargo",
						"q4": "E. Quota"
					},
					"ans": "B"
				},
				"Q37": {
					"qs": "37.	When a customer writes a cheque to withdraw cash from his current account, he is both the",
					"opts": {
						"q0": "A. drawer and the payee",
						"q1": "B. drawee and the payee",
						"q2": "C. drawer and the debtor",
						"q3": "D. drawer and the creditor",
						"q4": "E. drawee and the debtor"
					},
					"ans": "A"
				},
				"Q38": {
					"qs": "38.	The technique of controlling money supply through the purchase and sale of government bonds is called",
					"opts": {
						"q0": "A. bond control technique",
						"q1": "B. exchange control technique",
						"q2": "C. open market operations",
						"q3": "D. price control mechanism",
						"q4": "E. span of control technique"
					},
					"ans": "C"
				},
				"Q39": {
					"qs": "39.	The insurance cover on property being shipped from one location to another comes under ",
					"opts": {
						"q0": "A. burglary insurance",
						"q1": "B. fire insurance",
						"q2": "C. marine insurance",
						"q3": "D. annuity insurance",
						"q4": "E. comprehensive automobile insurance"
					},
					"ans": "C"
				},
				"Q40": {
					"qs": "40.	Debentures are part of a company’s",
					"opts": {
						"q0": "A. authorized share capital",
						"q1": "B. issued share capital",
						"q2": "C. paid-up capital",
						"q3": "D. loan capital",
						"q4": "E. called-up-capital"
					},
					"ans": "D"
				},
				"Q41": {
					"qs": "41.	An application form which is filled by anyone taking out an insurance policy is called",
					"opts": {
						"q0": "A. a policy form",
						"q1": "B. a claims form",
						"q2": "C. a proposal form",
						"q3": "D. a questionnaire",
						"q4": "E. an entry form"
					},
					"ans": "C"
				},
				"Q42": {
					"qs": "42.	A customer is granted an overdraft by the bank subject to his operating a",
					"opts": {
						"q0": "A. savings account",
						"q1": "B. fixed-deposit account",
						"q2": "C. call-deposit account",
						"q3": "D. current account",
						"q4": "E. loans account"
					},
					"ans": "D"
				},
				"Q43": {
					"qs": "43.	The total assets acquired for permanent use in a business concern is called",
					"opts": {
						"q0": "A. current assets",
						"q1": "B. fixed assets",
						"q2": "C. called-up capital",
						"q3": "D. working capital",
						"q4": "E. authorised capital"
					},
					"ans": "B"
				},
				"Q44": {
					"qs": "44.	Which of the following is not provided by NIPOST?",
					"opts": {
						"q0": "A. Private Mail Bag",
						"q1": "B. Recorded Delivery",
						"q2": "C. Business Reply Service",
						"q3": "D. Telegram",
						"q4": "E. Poste Restante"
					},
					"ans": "D"
				},
				"Q45": {
					"qs": "45.	A service provided by the NITEL through which one can dial any number one wants whether it is a local, trunk or overseas is called the",
					"opts": {
						"q0": "A. Internal Communication System",
						"q1": "B. Standard Dialling System",
						"q2": "C. Subscriber’s Dialling System",
						"q3": "D. International Telecommunications",
						"q4": "E. Coded Dialling Order"
					},
					"ans": "C"
				},
				"Q46": {
					"qs": "46 The two main categories of marine losses are",
					"opts": {
						"q0": "A. total loss and partial loss",
						"q1": "B. total loss and particular average loss",
						"q2": "C. total loss and constructive total loss",
						"q3": "D. total loss and actual total loss",
						"q4": "E. partial loss and constructive total loss"
					},
					"ans": "A"
				},
				"Q47": {
					"qs": "47.	Restoring the insured to his former position by the insurer in the event of his suffering the specified loss is called",
					"opts": {
						"q0": "A. subrogation ",
						"q1": "B. compensation ",
						"q2": "C. indemnity ",
						"q3": "D. contribution ",
						"q4": "E. surrender value"
					},
					"ans": "C"
				},
				"Q48": {
					"qs": "48.	The manufacturer would by-pass the wholesaler and the retailer in the distribution of his products if the",
					"opts": {
						"q0": "A. demand is widespread",
						"q1": "B. wholesaler and retailer lack office accommodation",
						"q2": "C. volume of production is high",
						"q3": "D. the product make-up and use are highly technical",
						"q4": "E. manufacturer has no warehouse"
					},
					"ans": "D"
				},
				"Q49": {
					"qs": "49.	Which of the following is statutorily responsible for providing information and incentives required to increase the volume of Made-in-Nigeria goods in foreign markets?",
					"opts": {
						"q0": "A. Association of Nigeria Exports",
						"q1": "B. Nigeria Export Promotion Council (NEPC)",
						"q2": "C. General Agreement on Tariffs and Trade (GATT)",
						"q3": "D. Association of Nigerian Importers",
						"q4": "E. Manufacturers Association of Nigeria"
					},
					"ans": "B"
				},
				"Q50": {
					"qs": "50.	Which of the following is a retail outlet to eliminate the profits of middlemen?",
					"opts": {
						"q0": "A. Producer co-operative",
						"q1": "B. Consumer co-operative",
						"q2": "C. Thrift and credit society",
						"q3": "D. Department store",
						"q4": "E. Multiple shop"
					},
					"ans": "B"
				},
				"Q51": {
					"qs": "51.	The use of catalogues is associated with",
					"opts": {
						"q0": "A. hawkers",
						"q1": "B. roadside traders",
						"q2": "C. mobile shops",
						"q3": "D. chain stores",
						"q4": "E. mail-order business"
					},
					"ans": "E"
				},
				"Q52": {
					"qs": "52.	A document which a retailer sends to a wholesaler requesting him to supply certain items is called",
					"opts": {
						"q0": "A. a letter of inquiry",
						"q1": "B. a catalogue",
						"q2": "C. an invoice",
						"q3": "D. an order",
						"q4": "E. a tender invoice"
					},
					"ans": "D"
				},
				"Q53": {
					"qs": "53.	When a seller sends a pro-forma invoice to a potential customer, it is",
					"opts": {
						"q0": "A. an indication that the seller is out of business",
						"q1": "B. an indication that the goods are out of stock",
						"q2": "C. a polite way of asking him to return the goods already purchased",
						"q3": "D. an invitation to the purchaser to buy on hire-purchase",
						"q4": "E. an indication that credit will not be granted"
					},
					"ans": "E"
				},
				"Q54": {
					"qs": "54.	A merchant wholesaler is one who",
					"opts": {
						"q0": "A. takes title to the goods he sells",
						"q1": "B. does not own the goods he sells",
						"q2": "C. earns a commission for serving as an agent",
						"q3": "D. sometimes makes retail sales",
						"q4": "E. engages in merchandising"
					},
					"ans": "A"
				},
				"Q55": {
					"qs": "55.	A trade deficit means that ",
					"opts": {
						"q0": "A. the balance of trade is favourable",
						"q1": "B. exports are less than imports",
						"q2": "C. imports are less than exports",
						"q3": "D. exports are decreasing",
						"q4": "E. the balance of payments is unfavourable"
					},
					"ans": "B"
				},
				"Q56": {
					"qs": "56.	A document issued by the government authorizing a person to take goods out of the country for sale abroad is known as",
					"opts": {
						"q0": "A. export licence",
						"q1": "B. import licence",
						"q2": "C. dock warrant",
						"q3": "D. bill of lading",
						"q4": "E. consular invoice"
					},
					"ans": "A"
				},
				"Q57": {
					"qs": "57.	The naira is a legal tender because it is",
					"opts": {
						"q0": "A. recognizable",
						"q1": "B. backed by law",
						"q2": "C. generally acceptable",
						"q3": "D. homogeneous",
						"q4": "E. portable"
					},
					"ans": "B"
				},
				"Q58": {
					"qs": "58.	Which of the following enhances the lending powers of commercial banks?",
					"opts": {
						"q0": "A. High bank rate",
						"q1": "B. Increased cash reserve ratio",
						"q2": "C. Provisions for bad and doubtful debts",
						"q3": "D. Decreased liquidity ratio",
						"q4": "E. Increased capital base"
					},
					"ans": "D"
				},
				"Q59": {
					"qs": "59.	A ‘bear’ on the stock exchange sells shares in anticipation of",
					"opts": {
						"q0": "A. a fall in price",
						"q1": "B. a rise in price",
						"q2": "C. a change in price",
						"q3": "D. the liquidation of the company concerned",
						"q4": "E. new issues"
					},
					"ans": "A"
				},
				"Q60": {
					"qs": "60.	When a share is bought at a rate below the par value, it is said to have been sold ",
					"opts": {
						"q0": "A. at a discount",
						"q1": "B. cum div",
						"q2": "C. at a premium",
						"q3": "D. ex-div",
						"q4": "E. pro-rata"
					},
					"ans": "A"
				},
				"Q61": {
					"qs": "61.	Which of the following is a function of marketing?",
					"opts": {
						"q0": "A. manufacturing ",
						"q1": "B. quality control",
						"q2": "C. book-keeping",
						"q3": "D. distribution ",
						"q4": "E. extraction"
					},
					"ans": "D"
				},
				"Q62": {
					"qs": "62.	The principle of subrogation in insurance means that",
					"opts": {
						"q0": "A. the insured could make a profit from his loss",
						"q1": "B. the insured must be fully indemnified",
						"q2": "C. those insured should pool their risks",
						"q3": "D. parties to the insurance contract must reveal all relevant facts",
						"q4": "E. the insurer takes the place of the insured in respect of claims due from third parties"
					},
					"ans": "E"
				},
				"Q63": {
					"qs": "63.	Which of the following are the important functions in any organization?",
					"opts": {
						"q0": "A. Planning, Marketing, Finance and Personnel Management",
						"q1": "B. Planning, Organizing, Controlling and Motivating",
						"q2": "C. Planning, Production, Controlling and Marketing",
						"q3": "D. Planning, Personnel, Organizing and Motivating",
						"q4": "E. Planning, Staffing, Budgeting and Warehousing."
					},
					"ans": "B"
				},
				"Q64": {
					"qs": "64.	Which of the following are elements of the economic environment of business?",
					"opts": {
						"q0": "A. Government policy",
						"q1": "B. Norm and value",
						"q2": "C. Politics",
						"q3": "D. Inflation and unemployment",
						"q4": "E. Family and peer groups"
					},
					"ans": "A"
				},
				"Q65": {
					"qs": "65.	Which of the following is not a necessary document in incorporating a company?",
					"opts": {
						"q0": "A. Memorandum of Association",
						"q1": "B. Articles of Association",
						"q2": "C. A statement of nominal capital",
						"q3": "D. A Certificate of Trading",
						"q4": "E. A statement of minimum subscription"
					},
					"ans": "E"
				},
				"Q66": {
					"qs": "66.	Details of a new share for which the public is being invited to subscribe are contained in the",
					"opts": {
						"q0": "A. Memorandum of Association",
						"q1": "B. Certificate of Trading",
						"q2": "C. Certificate of Incorporation",
						"q3": "D. Prospectus",
						"q4": "E. Balance sheet"
					},
					"ans": "D"
				},
				"Q67": {
					"qs": "67.	Which of the following accompanies goods supplied and forms a receipt when signed by the consignee?",
					"opts": {
						"q0": "A. Invoice",
						"q1": "B. Order",
						"q2": "C. Delivery note",
						"q3": "D. Requisition note",
						"q4": "E. Advice note"
					},
					"ans": "A"
				},
				"Q68": {
					"qs": "68.	A cover note is a",
					"opts": {
						"q0": "A. document of title to goods",
						"q1": "B. letter from the tax authority",
						"q2": "C. label attached to goods for identification",
						"q3": "D. temporary insurance certificate",
						"q4": "E. letter issued by banks to customers"
					},
					"ans": "D"
				},
				"Q69": {
					"qs": "69.	In nationalized industries, losses are borne by the",
					"opts": {
						"q0": "A. taxpayers",
						"q1": "B. shareholders",
						"q2": "C. debenture holders",
						"q3": "D. Minister of Industries",
						"q4": "E. Board of Directors"
					},
					"ans": "A"
				},
				"Q70": {
					"qs": "70.	The main aim of ECOWAS is the",
					"opts": {
						"q0": "A. elimination of apartheid",
						"q1": "B. formation of West African High Command",
						"q2": "C. formation of Government of West African States",
						"q3": "D. promotion of economic and cultural interaction",
						"q4": "E. promotion of ethnic and rural integration among member states"
					},
					"ans": "D"
				},
				"Q71": {
					"qs": "71.	The consumer is always right. This describes the doctrine of",
					"opts": {
						"q0": "A. social responsibility",
						"q1": "B. consumer movement",
						"q2": "C. consumer sovereignty",
						"q3": "D. consumer protection",
						"q4": "E. caveat venditor"
					},
					"ans": "C"
				},
				"Q72": {
					"qs": "72.	Equity interest in a company is represented by",
					"opts": {
						"q0": "A. preference shares",
						"q1": "B. retained earnings",
						"q2": "C. debentures",
						"q3": "D. bonds",
						"q4": "E. ordinary shares"
					},
					"ans": "E"
				},
				"Q73": {
					"qs": "73.	An organization chart shows the",
					"opts": {
						"q0": "A. relative position of employees in a firm",
						"q1": "B. customers’position in a firm",
						"q2": "C. order in which tasks should be tackled",
						"q3": "D. specification of various jobs in a firm",
						"q4": "E. the profit position of the firm"
					},
					"ans": "A"
				},
				"Q74": {
					"qs": "74.	A bill of exchange to which documents of title are attached is known as",
					"opts": {
						"q0": "A. documentary credit",
						"q1": "B. certified bill",
						"q2": "C. documentary bill",
						"q3": "D. irrevocable bil",
						"q4": "E. bill of lading"
					},
					"ans": "C"
				},
				"Q75": {
					"qs": "75.	Which of the following policies could be taken for a guaranteed life income?",
					"opts": {
						"q0": "A. Endowment assurance",
						"q1": "B. Household policy",
						"q2": "C. Annuity",
						"q3": "D. Personal accident insurance",
						"q4": "E. Consequential loss insurance"
					},
					"ans": "C"
				},
				"Q76": {
					"qs": "76.	Buildings, machines and motor vehicles used for purposes of production are examples of",
					"opts": {
						"q0": "A. current assets",
						"q1": "B. current liabilities",
						"q2": "C. working capital",
						"q3": "D. fixed assets",
						"q4": "E. liquid assets"
					},
					"ans": "D"
				},
				"Q77": {
					"qs": "77. The nominal capital of a company is the same as",
					"opts": {
						"q0": "A. authorized capital",
						"q1": "B. issued capital",
						"q2": "C. capital owned",
						"q3": "D. capital employed",
						"q4": "E. called-up capital"
					},
					"ans": "A"
				},
				"Q78": {
					"qs": "78.	A document certifying that goods have been entirely or largely manufactured in the country stated is called",
					"opts": {
						"q0": "A. certificate of origin",
						"q1": "B. bill of lading",
						"q2": "C. letter of hypothecation",
						"q3": "D. consular invoice",
						"q4": "E. ships manifest"
					},
					"ans": "A"
				},
				"Q79": {
					"qs": "79.	A facility used for impressing pre-paid postage rate on letters is called",
					"opts": {
						"q0": "A. vending machine",
						"q1": "B. speed post",
						"q2": "C. recorded delivery service",
						"q3": "D. cash register",
						"q4": "E. franking machine"
					},
					"ans": "E"
				},
				"Q80": {
					"qs": "80.	Which of the following ensures that manufactured goods conform to the required standard?",
					"opts": {
						"q0": "A. Nigerian Industrial Research Centre",
						"q1": "B. Standards Organization of Nigeria",
						"q2": "C. Consumer Consultative Committee",
						"q3": "D. Price Control Board",
						"q4": "E. Indigenisation Decree"
					},
					"ans": "B"
				},
				"Q81": {
					"qs": "81.	Which of the following enjoins the buyers to examine goods thoroughly before making a purchase?",
					"opts": {
						"q0": "A. uberrimae fidei",
						"q1": "B. Caveat subscriptor",
						"q2": "C. Consumer sovereignty",
						"q3": "D. Caveat venditor",
						"q4": "E. Standard for deferred payment"
					},
					"ans": "D"
				},
				"Q82": {
					"qs": "82.	Which of the following is not a function of money?",
					"opts": {
						"q0": "A. Unit of account",
						"q1": "B. Store of value",
						"q2": "C. Determinant of exchange rate",
						"q3": "D. Medium of exchange",
						"q4": "E. Standard for deferred payment"
					},
					"ans": "C"
				},
				"Q83": {
					"qs": "83.	Which of the following is mostly used in Nigeria for settling business transactions?",
					"opts": {
						"q0": "A. Credit transfer",
						"q1": "B. Standing order",
						"q2": "C. Cheques ",
						"q3": "D. Bank notes and coins",
						"q4": "E. Bank drafts"
					},
					"ans": "D"
				},
				"Q84": {
					"qs": "84.	When an order cheque is endorsed it becomes",
					"opts": {
						"q0": "A. a bearer cheque",
						"q1": "B. a certified cheque",
						"q2": "C. an open cheque",
						"q3": "D. a confirmed cheque",
						"q4": "E. a dishonoured cheque"
					},
					"ans": "A"
				},
				"Q85": {
					"qs": "85.	Which of the following requires acceptance by the debtor to make it valuable?",
					"opts": {
						"q0": "A. Postal order",
						"q1": "B. Cheque",
						"q2": "C. Promissory note",
						"q3": "D. Bill of exchange",
						"q4": "E. Bill of lading"
					},
					"ans": "D"
				},
				"Q86": {
					"qs": "86.	Which of the following is not a reason for imposing customs duty? The need to",
					"opts": {
						"q0": "A. raise revenue",
						"q1": "B. protect home industry",
						"q2": "C. prevent dumping",
						"q3": "D. decrease the volume of world trade",
						"q4": "E. retaliate"
					},
					"ans": "D"
				},
				"Q87": {
					"qs": "87.	Which of the following was the chief means of transport during the Trans-Saharan Trade?",
					"opts": {
						"q0": "A. Motor lorries",
						"q1": "B. Horses",
						"q2": "C. Camels",
						"q3": "D. Aeroplanes",
						"q4": "E. Barges"
					},
					"ans": "C"
				},
				"Q88": {
					"qs": "88.	Terms of payments are quoted on the ",
					"opts": {
						"q0": "A. order form",
						"q1": "B. a device note",
						"q2": "C. credit note",
						"q3": "D. debit note",
						"q4": "E. invoice"
					},
					"ans": "E"
				},
				"Q89": {
					"qs": "89.	Who among the following is not a middleman?",
					"opts": {
						"q0": "A. a retailer",
						"q1": "B. broker",
						"q2": "C. factor ",
						"q3": "D. consumer ",
						"q4": "E. wholesaler"
					},
					"ans": "D"
				},
				"Q90": {
					"qs": "90.	The most important factor influencing the form of a business unit is",
					"opts": {
						"q0": "A. expansion possibility",
						"q1": "B. business integrity",
						"q2": "C. the amount of capital available",
						"q3": "D. adequate number of skilled employees",
						"q4": "E. the number of competing firms in the industry"
					},
					"ans": "C"
				},
				"Q91": {
					"qs": "91.	The system of parting with authority but not responsibility is known as",
					"opts": {
						"q0": "A. controlling ",
						"q1": "B. planning ",
						"q2": "C. delegating",
						"q3": "D. motivating ",
						"q4": "E. co-ordinating"
					},
					"ans": "C"
				},
				"Q92": {
					"qs": "92.	That part of the money in circulation not backed by gold is known as",
					"opts": {
						"q0": "A. exchange equalization fund",
						"q1": "B. fiduciary issue",
						"q2": "C. notes and coins",
						"q3": "D. ordinary note issue",
						"q4": "E. fictitious assets"
					},
					"ans": "B"
				},
				"Q93": {
					"qs": "93.	A document sent to a customer at regular intervals to enable him know his indebtedness to his supplier is known as",
					"opts": {
						"q0": "A. debit note",
						"q1": "B. invoice",
						"q2": "C. statement",
						"q3": "D. receipt",
						"q4": "E. consignment note"
					},
					"ans": "C"
				},
				"Q94": {
					"qs": "94.	Who is liable for the contracts entered into by the agent on behalf of his principal? The",
					"opts": {
						"q0": "A. agent ",
						"q1": "B. principal",
						"q2": "C. agent and the principal",
						"q3": "D. third party",
						"q4": "E. lawyer who drew up the agreement"
					},
					"ans": "B"
				},
				"Q95": {
					"qs": "95.	An agreement whereby the seller transfers the title to goods at a price is called",
					"opts": {
						"q0": "A. contract of sale",
						"q1": "B. a hire-purchase agreement",
						"q2": "C. an agency agreement",
						"q3": "D. a contract of carriage of goods",
						"q4": "E. haggling"
					},
					"ans": "A"
				},
				"Q96": {
					"qs": "96. The reward of land as a factor of production is known as",
					"opts": {
						"q0": "A. interest ",
						"q1": "B. rent ",
						"q2": "C. profit ",
						"q3": "D. wages ",
						"q4": "E. toll"
					},
					"ans": "B"
				},
				"Q97": {
					"qs": "97. The outright purchase of one company by another is called",
					"opts": {
						"q0": "A. absorption",
						"q1": "B. merger",
						"q2": "C. cartel",
						"q3": "D. acquisition",
						"q4": "E. privatization"
					},
					"ans": "D"
				},
				"Q98": {
					"qs": "98.	The form of advertising which aims at winning the market for one particular brand is known as",
					"opts": {
						"q0": "A. informative advertisement",
						"q1": "B. generic advertisement",
						"q2": "C. persuasive advertisement",
						"q3": "D. competitive advertisement",
						"q4": "E. direct advertisement"
					},
					"ans": "D"
				},
				"Q99": {
					"qs": "99.	The marketing concept which begins and ends with satisfying the needs and wants of the consumer is called",
					"opts": {
						"q0": "A. caveat venditor",
						"q1": "B. consumer orientation",
						"q2": "C. consumer association",
						"q3": "D. consumer protection",
						"q4": "E. caveat emptor"
					},
					"ans": "B"
				},
				"Q100": {
					"qs": "100.	The relationship between a country’s total receipts and payments in international trade in a given year is called",
					"opts": {
						"q0": "A. balance of trade",
						"q1": "B. balance of payments",
						"q2": "C. terms of trade",
						"q3": "D. balance of current account",
						"q4": "E. balance on capital account"
					},
					"ans": "B"
				}
			}
		});
	});

	app.get('/biology/1988', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. Euglena moves by the",
					"opts": {
						"q0": "A. whipping action of its flagellum",
						"q1": "B. beating of its cilia",
						"q2": "C. rotating action of the flagella",
						"q3": "D. pushing out a jet of water from an organelle",
						"q4": "E. beating the pseudopodia and cilia simultaneously."
					},
					"ans": "A"
				},
				"Q2": {
					"qs": "2. In unicellular organisms essential nutrients can be trans-ported directly to all parts of their body by the process of diffusion only because unicellular organisms have",
					"opts": {
						"q0": "A. a large surface area to volume ratio",
						"q1": "B. a large volume to surface area ratio",
						"q2": "C. permeable cell membrane",
						"q3": "D. outer membrane made of cellulose",
						"q4": "E. their body always immersed in the nutrient material"
					},
					"ans": "A"
				},
				"Q3": {
					"qs": "3. Which of the following is not present in the nucleus of a cell",
					"opts": {
						"q0": "A. Chromosomes ",
						"q1": "B. Nucleolus",
						"q2": "C. Mitochondrion",
						"q3": "D. Genes",
						"q4": "E. Chromatin."
					},
					"ans": "C"
				},
				"Q4": {
					"qs": "4. The network of double membrane that helps to convey materials through the cytoplasm is the",
					"opts": {
						"q0": "A. plasma membrane ",
						"q1": "B. vacuolar membrane",
						"q2": "C. nuclear membrane",
						"q3": "D. endoplasmic reticulum ",
						"q4": "E. mitochondrion."
					},
					"ans": "D"
				},
				"Q5": {
					"qs": "5. In aerobic respiration, oxidative phosphorylation takes place in the",
					"opts": {
						"q0": "A. cytoplasm",
						"q1": "B. mitochondria",
						"q2": "C. lysosome",
						"q3": "D. vacuoles",
						"q4": "E. ribosomes."
					},
					"ans": "B"
				},
				"Q6": {
					"qs": "6. What stage of mitotic division is represented in the dia-gram of the cell illustrated?",
					"img": "img**biol_1988_sectionb_qst6_1.jpg",
					"opts": {
						"q0": "A. Prophase",
						"q1": "B. Telophase",
						"q2": "C. Anaphase",
						"q3": "D. Metaphase",
						"q4": "E. Interphase."
					},
					"ans": "A"
				},
				"Q7": {
					"qs": "7. This stage of mitosis is characterized by the",
					"img": "img**biol_1988_sectionb_qst6_1.jpg",
					"opts": {
						"q0": "A. movement of the chromosomes to the poles",
						"q1": "B. arrangement of chromosomes on the equatorial plate",
						"q2": "C. centromeres moving apart along the spindle.",
						"q3": "D. interaction of the spindles with the chromosomes",
						"q4": "E. condensation of chromosomes and formation of spindles."
					},
					"ans": "E"
				},
				"Q8": {
					"qs": "8. The ability of organisms to maintain a constant internal environment is known as",
					"opts": {
						"q0": "A. diuresis",
						"q1": "B. endosmosis",
						"q2": "C. plasmolysis",
						"q3": "D. dialysis",
						"q4": "E. homeostasis."
					},
					"ans": "E"
				},
				"Q9": {
					"qs": "9. Double fertilization is said to occure in flowering plants because",
					"opts": {
						"q0": "A. two embryos are formed",
						"q1": "B. one egg is fertilized twice",
						"q2": "C. two sperms fertilize each egg",
						"q3": "D. one embryo and an endosperm nucleus are formed",
						"q4": "E. two sperms and two pollen grains are involved."
					},
					"ans": "D"
				},
				"Q10": {
					"qs": "10. The bicuspid valve is located between the",
					"opts": {
						"q0": "A. left auricle and left ventricle",
						"q1": "B. aorta and the left entricle",
						"q2": "C. superior vena cava and the inferior vena cava",
						"q3": "D. right auricle apd the superior vena cava",
						"q4": "E. right auricle and the right ventricle."
					},
					"ans": "A"
				},
				"Q11": {
					"qs": "11. The pulmonary artery carries",
					"opts": {
						"q0": "A. deoxygenated blood from the right ventricle to the lungs",
						"q1": "B. oxygenated blood from the right ventricle to the lungs",
						"q2": "C. oxygenated blood from the left ventricle to the left auricle",
						"q3": "D. deoxygenated blood from the left ventricle to the right auricle",
						"q4": "E. oxygenated blood from the lungs to the right auricle."
					},
					"ans": "A"
				},
				"Q12": {
					"qs": "12. Which of the following blood components has the greatest affinity for oxygen and carbon dioxide?",
					"opts": {
						"q0": "A. Blood plasma",
						"q1": "B. Leucocytes",
						"q2": "C. Thrombocytes",
						"q3": "D. Erythrocytes",
						"q4": "E. Lymphocytes."
					},
					"ans": "D"
				},
				"Q13": {
					"qs": "13. The thoracic cavity is separated from the abdominal cavity by a sheet of muscle called",
					"opts": {
						"q0": "A. pleural membrane",
						"q1": "B. intercostal muscle",
						"q2": "C. diaphragm",
						"q3": "D. pericardiun",
						"q4": "E. epiglottis."
					},
					"ans": "C"
				},
				"Q14": {
					"qs": "14. Which of the following organs is responsible for con-trolling the body temperature regulation and water bal-ance in mammals?",
					"opts": {
						"q0": "A. Kidney",
						"q1": "B. Hypothalamus",
						"q2": "C. Parathyroid",
						"q3": "D. Adrenal",
						"q4": "E. Thymus."
					},
					"ans": "B"
				},
				"Q15": {
					"qs": "15. Deamination is the process during which",
					"opts": {
						"q0": "A. excess amino acid is broken down into ammonia and a keto-acid",
						"q1": "B. fats and oils are converted into an emulsion for absorption",
						"q2": "C. excess glucose is converted and stored as glycogen in the liver",
						"q3": "D. glycogen is reconverted into glucose through the action of glucagon",
						"q4": "E. excess amino acid is converted into protein"
					},
					"ans": "A"
				},
				"Q16": {
					"qs": "16. Which of the following statements on urine production is not correct?",
					"opts": {
						"q0": "A. Concentrated urine is produced under the control of antidiuretic hormone",
						"q1": "B. The total volume of urine produced depends on the need for water excretion",
						"q2": "C. If there is an excess intake of water dilute urine is excreted",
						"q3": "D. If there is a shortage of water in the body the volume of urine produced decreases",
						"q4": "E. In the presence of antidiuretic hormone dilute urine is produced"
					},
					"ans": "A"
				},
				"Q17": {
					"qs": "17. The pigment in the malphigian layer responsible for skin colouration is known as",
					"opts": {
						"q0": "A. haemoglobin",
						"q1": "B. haemocyanin",
						"q2": "C. chlorocruorin",
						"q3": "D. haemoerythrin",
						"q4": "E. melanin."
					},
					"ans": "E"
				},
				"Q18": {
					"qs": "18. Co-ordination is achieved in the tiody of mammals through the action of the",
					"opts": {
						"q0": "A. endocrine and nervous systems",
						"q1": "B. skeletal and nervous systems",
						"q2": "C. muscular and nervous systems",
						"q3": "D. circulatory and nervous systems",
						"q4": "E. skeletal muscular and nervous systems."
					},
					"ans": "A"
				},
				"Q19": {
					"qs": "19. Which of the following statements is correct of hormones? Hormones are",
					"opts": {
						"q0": "A. secreted into the blood through ducts",
						"q1": "B. secreted directly into the blood stream",
						"q2": "C. inactive chemical substances in the blood stream",
						"q3": "D. non-specific in their mode of action",
						"q4": "E. secreted at the site of the target organs."
					},
					"ans": "B"
				},
				"Q20": {
					"qs": "20. The pituitary is called ‘master gland’ because",
					"opts": {
						"q0": "A. it is located in the brain",
						"q1": "B. its secretions are more numerous than those of any other gland",
						"q2": "C. its secretion controls other glands",
						"q3": "D. it is the only organ that produces hormone",
						"q4": "E. it regulates muscular movements."
					},
					"ans": "C"
				},
				"Q21": {
					"qs": "21. Auxins are produced in the",
					"opts": {
						"q0": "A. petiole of leaves",
						"q1": "B. parenchyma of roots and shoots",
						"q2": "C. epidermis of roots and shoots",
						"q3": "D. apical, regions of roots and shoots",
						"q4": "E. sclerenchyma tissue of root and shoots."
					},
					"ans": "D"
				},
				"Q22": {
					"qs": "22. The brain and the spinal cord make up the",
					"opts": {
						"q0": "A. peripheral nervous system",
						"q1": "B. autonomic nervous system",
						"q2": "C. central nervous system",
						"q3": "D. somatic nervous system",
						"q4": "E. sympathetic nervous system."
					},
					"ans": "C"
				},
				"Q23": {
					"qs": "23. Which of the following specialized structures are stimu-lated by.touch, pressure, pain, heat and cold?",
					"opts": {
						"q0": "A. Receptors",
						"q1": "B. Synapse",
						"q2": "C. Cell bodies",
						"q3": "D. Myelin sheath",
						"q4": "E. Relay neurones."
					},
					"ans": "E"
				},
				"Q24": {
					"qs": "24. Which of the follow ing is not correct about a fruit? It",
					"opts": {
						"q0": "A. may contain many seeds",
						"q1": "B. it is a mature ovary",
						"q2": "C. is covered by the pericarp",
						"q3": "D. may develop from the receptacle",
						"q4": "E. possesses only the scar."
					},
					"ans": "D"
				},
				"Q25": {
					"qs": "25. Which structure in the maize grain stores food?",
					"opts": {
						"q0": "A. Radicle",
						"q1": "B. Embryo",
						"q2": "C. Cytoplasm",
						"q3": "D. Seed coat",
						"q4": "E. Endosperm."
					},
					"ans": "E"
				},
				"Q26": {
					"qs": "26. Which of the following does not occur during photosyn-thesis?",
					"opts": {
						"q0": "A. Energy from sunlight is absorbed",
						"q1": "B. Carbon dioxide is evolved",
						"q2": "C. Glucose synthesized",
						"q3": "D. Oxygen is given off",
						"q4": "E. Water is split."
					},
					"ans": "B"
				},
				"Q27": {
					"qs": "27. Even though some flowering plants contain accessory pigments which give them colours they still contain the pigment",
					"opts": {
						"q0": "A. melanin",
						"q1": "B. chlorophyll",
						"q2": "C. xanthophyll",
						"q3": "D. carotene",
						"q4": "E. chlorocruorin."
					},
					"ans": "B"
				},
				"Q28": {
					"qs": "28. Which of the following is not regarded as a micro nutri-ent or trace element essential for plant growth",
					"opts": {
						"q0": "A. Phosphorus",
						"q1": "B. Zinc",
						"q2": "C. Boron",
						"q3": "D. Silicon",
						"q4": "E. Molybdenum."
					},
					"ans": "A"
				},
				"Q29": {
					"qs": "29. In a water culture exprimcnt a plant showed poor growth and yellowing of the leaves. These symptoms were probably due to the absence of",
					"opts": {
						"q0": "A. calcium",
						"q1": "B. phosphorus",
						"q2": "C. iron",
						"q3": "D. zinc",
						"q4": "E. copper."
					},
					"ans": "C"
				},
				"Q30": {
					"qs": "30. The relationship between a lie:bivore and the bacteria which live in its caecum is known as",
					"opts": {
						"q0": "A. parasitism",
						"q1": "B. symbiosis",
						"q2": "C. commensalism",
						"q3": "D. saprophytism",
						"q4": "E. predation."
					},
					"ans": "B"
				},
				"Q31": {
					"qs": "31. Autotropic nutrition may be defined in terms of food obtained",
					"opts": {
						"q0": "A. from other organisms in exchange for some products",
						"q1": "B. by the breakdown of complex substances",
						"q2": "C. by an organism utilizing its own store of energy",
						"q3": "D. by synthesizing simple substances using energy from an external source ",
						"q4": "E. in a synthesized form from other living organism"
					},
					"ans": "D"
				},
				"Q32": {
					"qs": "32. Which of the following is not classified as a terres¬trial habitat?",
					"opts": {
						"q0": "A. Forest",
						"q1": "B. Guinea Savannah",
						"q2": "C. Afro Alpine",
						"q3": "D. Littoral zone",
						"q4": "E. Desert."
					},
					"ans": "D"
				},
				"Q33": {
					"qs": "33. Which of the following does not contribute to the biom¬ass in an ecosystem",
					"opts": {
						"q0": "A. Producers",
						"q1": "B. Food chains",
						"q2": "C. Consumers",
						"q3": "D. Micro-organisms",
						"q4": "E. Saprophytes."
					},
					"ans": "B"
				},
				"Q34": {
					"qs": "34. Which of the following is not a characteristic feature of tropical rainforest habitats?",
					"opts": {
						"q0": "A. Trees with longer boles than those in savanna",
						"q1": "B. Fewer canopy strata than the savanna",
						"q2": "C. Many more trees and climbers than savanna",
						"q3": "D. Plenty of leaf litter on the ground",
						"q4": "E. More diverse communities than the savanna."
					},
					"ans": "B"
				},
				"Q35": {
					"qs": "35. Which of the following factor is not associated with aquatic habitat?",
					"opts": {
						"q0": "A. Temperature",
						"q1": "B. Light intensity",
						"q2": "C. Humidity",
						"q3": "D. Turbidity",
						"q4": "E. Wave action."
					},
					"ans": "C"
				},
				"Q36": {
					"qs": "36. Terrestrial organisms which are capable of maintaining their body temperatures constant within fairly close limits are referred to as",
					"opts": {
						"q0": "A. themoclines",
						"q1": "B. homotherms",
						"q2": "C. poikilotherms",
						"q3": "D. eurytherms",
						"q4": "E. stenotherms."
					},
					"ans": "B"
				},
				"Q37": {
					"qs": "37. Which of the following statements is not true of a cli¬max vegetation? It",
					"opts": {
						"q0": "A. is an ecological phenomenon",
						"q1": "B. is a stable community",
						"q2": "C. eliminates competition",
						"q3": "D. results from succession",
						"q4": "E. involves the	colonization of a habitat."
					},
					"ans": "D"
				},
				"Q38": {
					"qs": "38. The causative organisms of sleeping sickness is the",
					"opts": {
						"q0": "A. Trypanosome",
						"q1": "B. Plasmodium",
						"q2": "C. Vibrio bacterium",
						"q3": "D. Penicillium",
						"q4": "E. tsetse fly."
					},
					"ans": "A"
				},
				"Q39": {
					"qs": "39. Which of the following are not causative organisms of plant diseases?",
					"opts": {
						"q0": "A. Fungi",
						"q1": "B. Viruses",
						"q2": "C. Bacteria",
						"q3": "D. Nematodes",
						"q4": "E. Cercariae."
					},
					"ans": "E"
				},
				"Q40": {
					"qs": "40. The vector of the malarial parasite is the",
					"opts": {
						"q0": "A. male Anopheles",
						"q1": "B. female Culex",
						"q2": "C. male Culex",
						"q3": "D. female Anopheles",
						"q4": "E. female Aedes."
					},
					"ans": "D"
				},
				"Q41": {
					"qs": "41. A constituent of the exhaust gases of motor vehicles which causes serious air pollution is",
					"opts": {
						"q0": "A. water vapour",
						"q1": "B. carbon dioxide",
						"q2": "C. carbon monoxide",
						"q3": "D.  oxygen",
						"q4": "E. ozone."
					},
					"ans": "C"
				},
				"Q42": {
					"qs": "42. Which of the following steps would not be taken to protect or conserve fishing grounds from over exploitation?",
					"opts": {
						"q0": "A. Use of nets with all sizes of mesh",
						"q1": "B. Use of nets with a particular mesh size",
						"q2": "C. Ban on harvesting of some species",
						"q3": "D. Regulating the size of ships allowed into fishing grounds",
						"q4": "E. Limiting the period of fishing in the water."
					},
					"ans": "A"
				},
				"Q43": {
					"qs": "43. Which of the following is not part of the objectives of conservation of natural resources?",
					"opts": {
						"q0": "A. To eliminate wild animals in order to enable other plants and animal survive",
						"q1": "B. To use our resources on sustained yield basis",
						"q2": "C. To guard against indiscriminate killing of plants and animals",
						"q3": "D. To guard against the extinction and exhaustion of natural resources.",
						"q4": "E. To protect the environment."
					},
					"ans": "A"
				},
				"Q44": {
					"qs": "44. During blood transfusion, agglutination may occur as a result of the reaction between",
					"opts": {
						"q0": "A. similar antigens and antibodies",
						"q1": "B. contrasting antigens and antibodies",
						"q2": "C. two different antigens",
						"q3": "D. two different antibodies",
						"q4": "E. white blood cells from the two individuals"
					},
					"ans": "C"
				},
				"Q45": {
					"qs": "45. Which of the following major ideas were proved by Gregor Mende?",
					"opts": {
						"q0": "A. There is a tendency among organisms to increase rapidly in number if conditions are favourable",
						"q1": "B. There is a struggle for existence among a very'large number of offspring",
						"q2": "C. Nature selects organisms which will survive Co produce their kind",
						"q3": "D. All species exhibit structural and functional varia-tions.",
						"q4": "E. Characteristics of an organism are controlled by genes occurring in pairs."
					},
					"ans": "E"
				},
				"Q46": {
					"qs": "46. Assuming that A is gene for normal skin and it is domi-nant, while a is gene for albinism and it is recessive, what is the likely genotype of a couple which had 50% normal and 50% albinos?",
					"opts": {
						"q0": "A. AA, Aa",
						"q1": "B. AA, aa",
						"q2": "C. Aa, Aa",
						"q3": "D. Aa, aa",
						"q4": "E. A A, A A."
					},
					"ans": "D"
				},
				"Q47": {
					"qs": "47. Which of the following is not a constituent of DNA?",
					"opts": {
						"q0": "A. Purine",
						"q1": "B. Phosphate",
						"q2": "C. Cystocine",
						"q3": "D. Deoxyribose",
						"q4": "E. Uracil."
					},
					"ans": "E"
				},
				"Q48": {
					"qs": "48. Which of the following best describes the homologous chromosomes? They are",
					"opts": {
						"q0": "A. a product of the division of a chromosome",
						"q1": "B. two identical chromosomes from each parent",
						"q2": "C. chromosomes arranged on spindle fibres during cell division",
						"q3": "D. daughter chromatids formed during meiotic division",
						"q4": "E. chromosomes during telophase of mitotic division."
					},
					"ans": "B"
				},
				"Q49": {
					"qs": "49. The haploid number of chromosomes in man is",
					"opts": {
						"q0": "A. 48",
						"q1": "B. 46",
						"q2": "C. 42",
						"q3": "D. 24",
						"q4": "E. 23."
					},
					"ans": "E"
				},
				"Q50": {
					"qs": "50. If a cross is made between a pure-breeding red flow¬ered plant and a pure-breeding white flowerd plant where R is dominant for red flower and r is recessive for white, the most likely result of F, genetation will be",
					"opts": {
						"q0": "A. 75% red flowers and 25% white flowers",
						"q1": "B. all red flowers",
						"q2": "C. 75% white flowers and 25% red flowers",
						"q3": "D. 50% red flowers and 50% white flowers",
						"q4": "E. all white flowers."
					},
					"ans": "B"
				},
				"Q51": {
					"qs": "51. A man with blood group A (TA t°) married a woman with blood group O (t° t°). Which of the following is the probable ratio of the blood groups of the offspring?",
					"opts": {
						"q0": "A. 1:1",
						"q1": "B. 3:1",
						"q2": "C. 2:1:1",
						"q3": "D. 1:2:1",
						"q4": "E. 4:1."
					},
					"ans": "A"
				},
				"Q52": {
					"qs": "52. Increasing specialization of structure and function among animals of the same class or order for survival in new and different environment is called",
					"opts": {
						"q0": "A. adaptive radiation",
						"q1": "B. phytogeny",
						"q2": "C. homology",
						"q3": "D. analogy",
						"q4": "E. ontogeny."
					},
					"ans": "B"
				},
				"Q53": {
					"qs": "53. When large numbers of organisms share limited space and resources the result is",
					"opts": {
						"q0": "A. immigration",
						"q1": "B. commensalim",
						"q2": "C. symbiosis",
						"q3": "D. extinction",
						"q4": "E. competition."
					},
					"ans": "E"
				},
				"Q54": {
					"qs": "54. The change in colour of the chameleon	serves as a means of",
					"opts": {
						"q0": "A. attraction to the opposite sex",
						"q1": "B. repulsion of the enemy",
						"q2": "C. a camouflage from a predator.",
						"q3": "D. regulation of body temperature",
						"q4": "E. production of a variety of skin pigments."
					},
					"ans": "C"
				},
				"Q55": {
					"qs": "55. Species can be defined as the group of organisms that",
					"opts": {
						"q0": "A. resemble each other and live in the same habitat",
						"q1": "B. are of common origin and are always found together",
						"q2": "C. resemble each other and can interbreed freely",
						"q3": "D. resemble each other and occupy the same niche",
						"q4": "E. are of common origin but cannot interbreed ueely."
					},
					"ans": "C"
				},
				"Q56": {
					"qs": "56. Which of the following is not an evidence of evolution?",
					"opts": {
						"q0": "A. Fossil",
						"q1": "B. Anatomy",
						"q2": "C. Embryology",
						"q3": "D. Genetics",
						"q4": "E. Behaviour."
					},
					"ans": "E"
				},
				"Q57": {
					"qs": "57. Which of the following is not true about gene mutation? It",
					"opts": {
						"q0": "A. introduces new traits into a population",
						"q1": "B. causes changes in the DNA",
						"q2": "C. may have unnoticeable effect on the phenotype",
						"q3": "D. always affects the chromosome number",
						"q4": "E. is a source of new genes."
					},
					"ans": "C"
				},
				"Q58": {
					"qs": "58. The plants best adapted for life in the desert are",
					"img": "img**biol_1988_sectionb_qst58_1.jpg",
					"opts": {
						"q0": "A. I and IV only",
						"q1": "B. II and IV only",
						"q2": "C. III and IV only",
						"q3": "D. IV and V only",
						"q4": "E. I, II, III and V."
					},
					"ans": "E"
				},
				"Q59": {
					"qs": "59. The rate of transpiration will be highest in",
					"img": "img**biol_1988_sectionb_qst58_1.jpg",
					"opts": {
						"q0": "A. I",
						"q1": "B. II",
						"q2": "C. III",
						"q3": "D. IV",
						"q4": "E. V."
					},
					"ans": "D"
				},
				"Q60": {
					"qs": "60.	Which of the following has the most primitive respiration system?",
					"opts": {
						"q0": "A. Rat",
						"q1": "B. Fish",
						"q2": "C. Toad",
						"q3": "D. Grasshopper",
						"q4": "E. Lizard."
					},
					"ans": "B"
				}
			}
		});
	});

	app.get('/biology/1989', function(req, res) {
		res.json({
			data: {
				// "headd": "Answer all the questions",
				"Q1": {
					"qs": "1. Which of the following constitutes the main internal tissue of a leaf?",
					"opts": {
						"q0": "A. Cuticle",
						"q1": "B. Mesophyll",
						"q2": "C. Vascular tissue",
						"q3": "D. Lower epidermis",
						"q4": "E. Upper epidermis."
					},
					"ans": "B"
				},
				"Q2": {
					"qs": "2. Four cells with osmotic potential equivalent to that of 3% salt solution were immersed respectively in solutions of different concentrations labelled as follows: I	= 4% salt solution;	II = 6% salt solution; III = 1 % salt solution,	IV = 10% salt solution; V = 5% salt solution. Which of the solution will cause an increase in the osmotic pressure within the cell?",
					"opts": {
						"q0": "A. I",
						"q1": "B. II",
						"q2": "C. III",
						"q3": "D. IV",
						"q4": "E. V."
					},
					"ans": "C"
				},
				"Q3": {
					"qs": "3. Which of the following statements is not true of osmotic process?",
					"opts": {
						"q0": "A. There must be a selectively permeable membrane",
						"q1": "B. The two solutions must be of different concentra-tions initially",
						"q2": "C. It involves only the movement of water molecules",
						"q3": "D. Equilibrium is reached when there is equal distri-bution of water molecules",
						"q4": "E. The two solutions are of equal concentration at the beginning of the experiment."
					},
					"ans": "E"
				},
				"Q4": {
					"qs": "4. Which of the following is the correct route for the move¬ment of materials through the kidney?",
					"opts": {
						"q0": "A. Glomerulus —> Bowman’scapsule —> Loop of Henle —> collecting tubule pelvis",
						"q1": "B. Glomerulus —> loop of Henle —> collecting tubule —> Bowmans capsule",
						"q2": "C. Pelvis —> Bowman’s capsule —> glomerulus —> collecting tubule",
						"q3": "D. Bowman’s capsule —> glomerulus —> loop of Henle —> collecting tubule pelvis",
						"q4": "E. Bowman’s capsule —> loop of Henle —> glomerulus —> collecting tubule pelvis."
					},
					"ans": "A"
				},
				"Q5": {
					"qs": "5. Which of the following is the function of the hormone secreted in the Islets of Langerhans? It",
					"opts": {
						"q0": "A. is used in protein metabolism",
						"q1": "B. is involved in sugar synthesis",
						"q2": "C. aids the rate at which glucose is converted to glycogen",
						"q3": "D. controls the fluid content of the body",
						"q4": "E. plays a role in the pH balance of the body fluid."
					},
					"ans": "C"
				},
				"Q6": {
					"qs": "6. Blood is mammals transports oxygen because it con-tains the pigment called",
					"opts": {
						"q0": "A. haemoglobin",
						"q1": "B. Chlorocruorin",
						"q2": "C. melanin",
						"q3": "D. heaemocyanin",
						"q4": "E. haemoerythrin."
					},
					"ans": "A"
				},
				"Q7": {
					"qs": "7. In which of the following is cilia not associated with movement or transport of materials?",
					"opts": {
						"q0": "A. Fallopian tube funnel",
						"q1": "B. Ectoplasm of Paramecium",
						"q2": "C. Lining of the mammalian trachea",
						"q3": "D. Mammalian alimentary canal",
						"q4": "E. Oral groove of Paramecium."
					},
					"ans": "NO ANSWER"
				},
				"Q8": {
					"qs": "8. The pilaferous layer is",
					"img": "img**biol_1989_sectionb_qst8_1.jpg",
					"opts": {
						"q0": "A. I",
						"q1": "B. II",
						"q2": "C. III",
						"q3": "D. IV",
						"q4": "E. V."
					},
					"ans": "A"
				},
				"Q9": {
					"qs": "9. The xylem is labelled",
					"img": "img**biol_1989_sectionb_qst8_1.jpg",
					"opts": {
						"q0": "A. II",
						"q1": "B. IV",
						"q2": "C. V",
						"q3": "D. VI",
						"q4": "E. VII."
					},
					"ans": "C"
				},
				"Q10": {
					"qs": "10. The part through which manufactured sugar is transported is labelled",
					"img": "img**biol_1989_sectionb_qst8_1.jpg",
					"opts": {
						"q0": "A. I",
						"q1": "B. III",
						"q2": "C. IV",
						"q3": "D. VII",
						"q4": "E. VI."
					},
					"ans": "D"
				},
				"Q11": {
					"qs": "11. The loss of water vapour through the aerial parts of the plant to the atmosphere is called",
					"opts": {
						"q0": "A. respiration",
						"q1": "B. gutation",
						"q2": "C. osmoregulation",
						"q3": "D. transpiration",
						"q4": "E. diffusion."
					},
					"ans": "D"
				},
				"Q12": {
					"qs": "12. The upward movement of the sap in the xylem vessel is brought about by",
					"opts": {
						"q0": "A. transpiration stream",
						"q1": "B. guttation",
						"q2": "C. capillarity",
						"q3": "D. osmosis",
						"q4": "E. cohesion."
					},
					"ans": "A"
				},
				"Q13": {
					"qs": "13. The piece of bone repreented in the diagram is found in the",
					"img": "img**biol_1989_sectionb_qst13_1.jpg",
					"opts": {
						"q0": "A. pelvic region",
						"q1": "B. pectoral girdle",
						"q2": "C. vertebral column",
						"q3": "D. skull",
						"q4": "E. thoracic region."
					},
					"ans": "A"
				},
				"Q14": {
					"qs": "14. The part labelled I is the",
					"img": "img**biol_1989_sectionb_qst13_1.jpg",
					"opts": {
						"q0": "A. lumbar",
						"q1": "B. sacrum",
						"q2": "C. ilium",
						"q3": "D. pubis",
						"q4": "E. coccxy."
					},
					"ans": "C"
				},
				"Q15": {
					"qs": "15. The bone that articulates with the part labelled III is the",
					"img": "img**biol_1989_sectionb_qst13_1.jpg",
					"opts": {
						"q0": "A. humerus",
						"q1": "B. femur",
						"q2": "C. tibia",
						"q3": "D. sacrum",
						"q4": "E. fibula."
					},
					"ans": "B"
				},
				"Q16": {
					"qs": "16. Which of the following organisms is at the tissue level of organization",
					"opts": {
						"q0": "A. Euglena",
						"q1": "B. Paramecium",
						"q2": "C. Volvox",
						"q3": "D. Hydra",
						"q4": "E. Chlamydomonas."
					},
					"ans": "D"
				},
				"Q17": {
					"qs": "17. The light-sensitive layer is labelled",
					"img": "img**biol_1989_sectionb_qst17_1.jpg",
					"opts": {
						"q0": "A. I",
						"q1": "B. III",
						"q2": "C. IV",
						"q3": "D. VI",
						"q4": "E. VII."
					},
					"ans": "E"
				},
				"Q18": {
					"qs": "18. The greatest concentration of light receptors is found in the part labelled",
					"img": "img**biol_1989_sectionb_qst17_1.jpg",
					"opts": {
						"q0": "A. VI",
						"q1": "B. V",
						"q2": "C. IV",
						"q3": "D. III",
						"q4": "E. I."
					},
					"ans": "B"
				},
				"Q19": {
					"qs": "19. The aqueous humour is represented by the part labelled",
					"img": "img**biol_1989_sectionb_qst17_1.jpg",
					"opts": {
						"q0": "A. I",
						"q1": "B. II",
						"q2": "C. III",
						"q3": "D. VI",
						"q4": "E. VII."
					},
					"ans": "B"
				},
				"Q20": {
					"qs": "20. Autotrophs are also described as",
					"opts": {
						"q0": "A. consumers",
						"q1": "B. decomposers",
						"q2": "C. carnivores",
						"q3": "D. producers",
						"q4": "E. herbivores."
					},
					"ans": "D"
				},
				"Q21": {
					"qs": "21. In photosynthesis, the following processes are part of the light reaction except",
					"opts": {
						"q0": "A. transfer of radiant energy which reduces a co-factor",
						"q1": "B. absorption of radiant energy by chlorophyll",
						"q2": "C. utilization of the energy in the electron transfer chain to form ATP",
						"q3": "D. formation of glucose using-energy from NADPH. splitting of water into its component parts.",
						"q4": "E. "
					},
					"ans": "D"
				},
				"Q22": {
					"qs": "22. Which of the following is not an adaptation of the small intestine for absorption of digested food. The",
					"opts": {
						"q0": "A. villi are well supplied with blood and lymph vessels",
						"q1": "B. villi are numerous and thin-walled",
						"q2": "C. small intestine has large surface area",
						"q3": "D. small intestine is long and coiled",
						"q4": "E. small intestine leads into the large intestine."
					},
					"ans": "E"
				},
				"Q23": {
					"qs": "23.	A dehiscent fruit formed from several fused carpels with many seeds is classified as",
					"opts": {
						"q0": "A. anachene",
						"q1": "B. a capsule",
						"q2": "C. a folicle",
						"q3": "D. a legume",
						"q4": "E. a nut."
					},
					"ans": "B"
				},
				"Q24": {
					"qs": "24.	The translocation of food materials in plants takes place in the",
					"opts": {
						"q0": "A. xylem",
						"q1": "B. cambium",
						"q2": "C. phloem",
						"q3": "D. parenchyma",
						"q4": "E. sclerenchyma."
					},
					"ans": "C"
				},
				"Q25": {
					"qs": "25.	An association between living organisms in which one lives on and feeds at the expertise of the other organism is know as",
					"opts": {
						"q0": "A. parasitism",
						"q1": "B. commensalism",
						"q2": "C. mutualism",
						"q3": "D. symbiosis",
						"q4": "E. predation."
					},
					"ans": "A"
				},
				"Q26": {
					"qs": "26.	Which of the following statement is not correct about food chains?",
					"opts": {
						"q0": "A. All food chains start with a green plant",
						"q1": "B. Food chains involve feeding relationships among organisms",
						"q2": "C. Shorter food chains indicate more effective utiliza-tion of energy than longer ones.",
						"q3": "D. There is no energy loss in a food chain.",
						"q4": "E. All food chains have primary consumers."
					},
					"ans": "D"
				},
				"Q27": {
					"qs": "27.	Which of the following characteristics is associated with commensalism?",
					"opts": {
						"q0": "A. Both organisms are harmful to each other",
						"q1": "B. The association involves many organisms",
						"q2": "C. The association is beneficial to one of the organisms",
						"q3": "D. Both species are beneficial to each other",
						"q4": "E. This relationship is found only among higher plants."
					},
					"ans": "C"
				},
				"Q28": {
					"qs": "28.	Which of the following statement is not correct about the ecological effect of agricultural activities?",
					"opts": {
						"q0": "A. The use of herbicides and pesticides in farm can cause pollution",
						"q1": "B. Bush-burning encourages desertification",
						"q2": "C. Excessive use of fertilizers in farms may have harmful effects.",
						"q3": "D. Tillage of tropical soils with plough and harrows may encourage erosion",
						"q4": "E. Monocropping is one of the cultural methods of controlling pests."
					},
					"ans": "E"
				},
				"Q29": {
					"qs": "29.	Pest can be controlled without the subsequent danger of polluting the ecosystem by",
					"opts": {
						"q0": "A. introducing a population of species similar to that of the pest",
						"q1": "B. increasing the population of the natural enemies of the pest",
						"q2": "C. eliminating the natural enemies of the pest",
						"q3": "D. keeping the population of natural enemies of the pest constant",
						"q4": "E. spraying the ecosystem with pesticides."
					},
					"ans": "B"
				},
				"Q30": {
					"qs": "30.	The activities of an organism which affect the survival of another organism in a habitat can be described as",
					"opts": {
						"q0": "A. biotic factors",
						"q1": "B. climatic factors",
						"q2": "C. physiographic factors",
						"q3": "D. edaphic factors",
						"q4": "E. abiotic factors."
					},
					"ans": "A"
				},
				"Q31": {
					"qs": "31.	Which ofthe following groups of organisms feeds directly on green plants",
					"opts": {
						"q0": "A. Producer",
						"q1": "B. Decomposer",
						"q2": "C. Primary consumer",
						"q3": "D. Secondary consumer",
						"q4": "E. Tertiary consumer."
					},
					"ans": "C"
				},
				"Q32": {
					"qs": "Which of the following methods is used in food preservation for a long period",
					"opts": {
						"q0": "A. Adding oil to food",
						"q1": "B. Exposing food to fresh air",
						"q2": "C. Keeping the food in a store",
						"q3": "D. Warming the food daily",
						"q4": "E. Salting arid drying the food."
					},
					"ans": "E"
				},
				"Q33": {
					"qs": "33.	Maize is best stored against insect attack",
					"opts": {
						"q0": "A. on raised platforms",
						"q1": "B. in fumigated silos",
						"q2": "C. in a sunny area",
						"q3": "D. while still on the cob",
						"q4": "E. in hummed metal tanks"
					},
					"ans": "B"
				},
				"Q34": {
					"qs": "34.	Which of the following is not an effect of overcrowding on a population?",
					"opts": {
						"q0": "A. Death",
						"q1": "B. Competition",
						"q2": "C. Commensalism",
						"q3": "D. Aggression",
						"q4": "E. Cannibalism."
					},
					"ans": "C"
				},
				"Q35": {
					"qs": "35. The term used in describing the effective management of national resources by man is",
					"opts": {
						"q0": "A. preservation",
						"q1": "B. utilization",
						"q2": "C. economics",
						"q3": "D. development",
						"q4": "E. conservation."
					},
					"ans": "E"
				},
				"Q36": {
					"qs": "36. Breathing roots are characteristic structures of plants growing in",
					"opts": {
						"q0": "A. mangrove swamp",
						"q1": "B. desert",
						"q2": "C. shrub biome",
						"q3": "D. savannah",
						"q4": "E. tropical rain forest."
					},
					"ans": "A"
				},
				"Q37": {
					"qs": "37. At which of the following stages of cell division can the cell be said to be resting",
					"opts": {
						"q0": "A. Anaphase",
						"q1": "B. Telophase",
						"q2": "C. Prophase",
						"q3": "D. Interphase",
						"q4": "E. Metaphase."
					},
					"ans": "D"
				},
				"Q38": {
					"qs": "38. Which of the following represents the phenotypic ratio, when a plant Rr is crossed with another plant. Rr, as-suming that the gene R for round seed is dominant and wrinkled, r is recessive?",
					"opts": {
						"q0": "A. 1:2:1",
						"q1": "B. 2:2:1",
						"q2": "C. 3:2",
						"q3": "D. 3:1",
						"q4": "E. 4:1."
					},
					"ans": "D"
				},
				"Q39": {
					"qs": "39. All hereditary characters in a cell are passed on from parent-cell to daughter-cell through the process of",
					"opts": {
						"q0": "A. mitosis",
						"q1": "B. meiosis",
						"q2": "C. fertilization",
						"q3": "D. implantation",
						"q4": "E. gestation."
					},
					"ans": "A"
				},
				"Q40": {
					"qs": "40. What stage is illustrated by the diagram?",
					"img": "img**biol_1989_sectionb_qst40_1.jpg",
					"opts": {
						"q0": "A. Interphase",
						"q1": "B. Prophase",
						"q2": "C. Metaphase",
						"q3": "D. Anaphase",
						"q4": "E. Telophase."
					},
					"ans": "C"
				},
				"Q41": {
					"qs": "41. What is the name given to the structure labelled A at this stage of cell division?",
					"img": "img**biol_1989_sectionb_qst40_1.jpg",
					"opts": {
						"q0": "A. Chromatin",
						"q1": "B. Chromosome",
						"q2": "C. Chromatid",
						"q3": "D. Gene",
						"q4": "E. Daughter-chromosome."
					},
					"ans": "C"
				},
				"Q42": {
					"qs": "42. The evidence for evolution can be obtained from the following except",
					"opts": {
						"q0": "A. fossil",
						"q1": "B. anatomy",
						"q2": "C. history",
						"q3": "D. embryology",
						"q4": "E. taxonomy."
					},
					"ans": "E"
				},
				"Q43": {
					"qs": "43. The similarity between the bone structure of the arm of a human and the fore-limb of a rabbit indicates",
					"opts": {
						"q0": "A. adaptive radiation",
						"q1": "B. continuous variation",
						"q2": "C. a common origin",
						"q3": "D. convergent evolution",
						"q4": "E. adaptation to the same environment."
					},
					"ans": "NO ANSWER"
				},
				"Q44": {
					"qs": "44. What phenomenon in ecosystem does the diagram illus-trate?",
					"img": "img**biol_1989_sectionb_qst44_1.jpg",
					"opts": {
						"q0": "A. Pyramid of numbers",
						"q1": "B. Food web among organisms",
						"q2": "C. Pyramid of energy",
						"q3": "D. Pyramid of biomass",
						"q4": "E. Evolutionary trend in organisms."
					},
					"ans": "A"
				},
				"Q45": {
					"qs": "45. Which of the following effects would desertification have on the ecological balance represented in the diagram? The calorific value of the energy",
					"img": "img**biol_1989_sectionb_qst44_1.jpg",
					"opts": {
						"q0": "A. 10 x 10^4kcal obtained from the sun would decrease",
						"q1": "B. 10x10^4kcal obtained from the sun would increase",
						"q2": "C. 6 x 104kcal obtained at level I would decrease",
						"q3": "D. 1 x 10^3kcal obtained at level V would increase",
						"q4": "E. 3.5 x 10^4 kcal obtained at level II would increase."
					},
					"ans": "B"
				},
				"Q46": {
					"qs": "46. One of the methods of preventing measles is by",
					"opts": {
						"q0": "A. sleeping under mosquito net",
						"q1": "B. attacking the vectors",
						"q2": "C. attacking the secondary host",
						"q3": "D. vaccinating young children",
						"q4": "E. providing clean water supply."
					},
					"ans": "D"
				},
				"Q47": {
					"qs": "47. Group instinct or social behaviour is not displayed in",
					"opts": {
						"q0": "A. soldier ants",
						"q1": "B. bees",
						"q2": "C. chickens",
						"q3": "D. weaver birds",
						"q4": "E. termites."
					},
					"ans": "C"
				},
				"Q48": {
					"qs": "48.	Which of the following fixes atmospheric nitrogen?",
					"opts": {
						"q0": "A. Rhizobium",
						"q1": "B. Nitosomoas",
						"q2": "C. Nitrobacter",
						"q3": "D. Putrifying bacteria",
						"q4": "E. Dentrilying bacteria."
					},
					"ans": "A"
				},
				"Q49": {
					"qs": "49. The spaces between neutrones through which impulses cross by means of chemical reaction are called",
					"opts": {
						"q0": "A. axons",
						"q1": "B. ganglia",
						"q2": "C. Synapses",
						"q3": "D. dendrites",
						"q4": "E. pia matter."
					},
					"ans": "C"
				},
				"Q50": {
					"qs": "50. The inability of some individuals to perceive the taste of some substances is an example of",
					"opts": {
						"q0": "A. individual adaptation",
						"q1": "B. physiological variation",
						"q2": "C. morphological variation",
						"q3": "D. morphological adaptation",
						"q4": "E. physical variation."
					},
					"ans": "B"
				},
				"Q51": {
					"qs": "51. The term afforestation is used in describing",
					"opts": {
						"q0": "A. harvesting of natural forest resources",
						"q1": "B. planting trees of value to man",
						"q2": "C. fallowing of forest land",
						"q3": "D. felling of trees in the forest",
						"q4": "E. recycling of waste forest product."
					},
					"ans": "B"
				},
				"Q52": {
					"qs": "52. Overcrowding in seedlings of different species is less serious than overcrowding involving one species be¬cause different species may",
					"opts": {
						"q0": "A. have different nutritional needs",
						"q1": "B. lack the same nutrient",
						"q2": "C. be active at the same time",
						"q3": "D. have similar tolerance.",
						"q4": "E. "
					},
					"ans": "A"
				},
				"Q53": {
					"qs": "53. The autonomic nervous system comprises",
					"opts": {
						"q0": "A. sympathetic and parasympathetic systems",
						"q1": "B. cranial and sacral nerves",
						"q2": "C. brain and cranial nerves",
						"q3": "D. spinal chord and spinal nerves",
						"q4": "E. brain and spinal nerves."
					},
					"ans": "A"
				},
				"Q54": {
					"qs": "54. The scientist who discovered the honey-comb structure ol'the cell was",
					"opts": {
						"q0": "A. Robert Hooke",
						"q1": "B. Felix Dujardin",
						"q2": "C. Mathias Schleidyn",
						"q3": "D. Thodore Schowann",
						"q4": "E. Louis Pasteur."
					},
					"ans": "A"
				},
				"Q55": {
					"qs": "Which ofthe following organelles are likely to be present in cells that are actively respiring and photpsynthesizing ?",
					"opts": {
						"q0": "A. Nucleoi and Cenlrioles",
						"q1": "B. Lysosomers and ribosomes",
						"q2": "C. Endoplasmic and reticulum and golgi bodies",
						"q3": "D. Chloroplast and mitochondria",
						"q4": "E. Food Vacuoles and contractile vacuoles."
					},
					"ans": "D"
				},
				"Q56": {
					"qs": "56. Which ofthe following is not true about a bacterial colony grown on an agar plate?",
					"opts": {
						"q0": "A. They are visible without the aid ofthe microscope",
						"q1": "B. Bacteria! cells found in one colony often belong to one species",
						"q2": "C. Different colonies have different colours",
						"q3": "D. only one species of bacteria a colony can grow on a culture at any time",
						"q4": "E. Colonies growing on an agar plate under the same conditions must belong to one species"
					},
					"ans": "C"
				},
				"Q57": {
					"qs": "57. The theory that new organs or characteristic developing organisms when there is a need for them was postulated by",
					"opts": {
						"q0": "A. Charles Darwin",
						"q1": "B. lean Lamarck",
						"q2": "C. Gregor Mendel",
						"q3": "D. Wallace",
						"q4": "E. Louise Pasteur"
					},
					"ans": "B"
				},
				"Q58": {
					"qs": "58. Which of the following is an example of reproductive adaptation?",
					"opts": {
						"q0": "A. Succulent stems of cactus plant",
						"q1": "B. Changing colour of chameleon",
						"q2": "C. Possession of spines by desert plants",
						"q3": "D. Neck colouration in Agama lizard",
						"q4": "E. Leaf-shedding in trees."
					},
					"ans": "D"
				},
				"Q59": {
					"qs": "59. The large intercellular air spaces which penetrate the tissue of most hyrophytes provide a pathway through which",
					"opts": {
						"q0": "A. carbon dioxide absorbed by leaves can diffuse to the roots",
						"q1": "B. oxygen produced in the leaves can diffuse to the submerged parts",
						"q2": "C. salts absorbed by roots can reach other parts of the plant",
						"q3": "D. plant hormones are transported to various parts",
						"q4": "E. manufactured food is translocated."
					},
					"ans": "B"
				},
				"Q60": {
					"qs": "60. Which of the following processes will not introduce carbon dioxide into the atmosphere?",
					"opts": {
						"q0": "A. Breathing",
						"q1": "B. Photosynthesis",
						"q2": "C. Respiration",
						"q3": "D. Putrefaction",
						"q4": "E. Burning."
					},
					"ans": "B"
				}
			}
		});
	});

	app.get('/chemistry/1988', function(req, res) {
		res.json({
			data: {
				"Q1": {
					"qs": "1. Which of the following affect(s) the discharge of ions during electrolysis? I. Position of the ions in the redox series II. Concentration of the ions III. Nature of electrodes, and IV. Temperature of the solution.",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "D"
				},
				"Q2": {
					"qs": "2. Potassium and sodium show similar chemical properties because they I. belong to the same group in the Periodic Table II. have equal number of electrons in their outermost shells III. both exist in the +1 oxidation state in their compounds IV. belong to the same period in the Periodic Table",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "D"
				},
				"Q3": {
					"qs": "3. Pitch and asphalt are residual products from the fractional distillation of petroleum. These substances are used as I. protective coatings for road surfaces II. binding agents for roofing materials III. organic solvents IV. catalysts for cracking",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "B"
				},
				"Q4": {
					"qs": "4. Which of the following can be used to test for the presence of water in the laboratory? I. Anhydrous magnesium chloride FI. Anhydrous calcium chloride III. Anhydrous cobalt (II) chloride IV. Anhydrous copper (II) tetraoxosulphate (VI)",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "C"
				},
				"Q5": {
					"qs": "5. The proportion of carbon, hydrogen and oxygen atoms in a certain organic compound is in the ratio 1:2:1 respectively. The structural formula of the compound can be",
			        "img": "img**chem_1988_sectionb_qst5_1.jpg,img**chem_1988_sectionb_qst5_2.jpg,img**chem_1988_sectionb_qst5_3.jpg,img**chem_1988_sectionb_qst5_4.jpg",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "D"
				},
				"Q6": {
					"qs": "6. which of the following statements on electrolytes and conductors is/are true? I. Electrolytes are compounds while conductors are elements. II. Electrolytes contain mobile ions while conductors consist of mobile electrons. III. Electrolytes can be solutions while conductors are usually solids. IV. Electrolytes and conductors can both be decomposed by an electric current.",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "D"
				},
				"Q7": {
					"qs": "7. Causes Of hardness of water include the presence of I. calcium tetraoxosulphate (VI) II. magnesium tetraoxosulphate (VI) III. calcium hydrogen trioxocarbonate (IV) IV. magnesium hydrogen trioxocarbonate (IV)",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "E"
				},
				"Q8": {
					"qs": "8. Which of the following can be used to illustrate the brownian motion? I. A suspension of sulphur in water viewed under a microscope II. Smoke in a glass container illuminated by a strong light from the side III. A dusty room being swepf and viewed through a beam of sunlight IV. Boiled distilled water viewed under sunlight.",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "D"
				},
				"Q9": {
					"qs": "9. Which of the following statement(s) is/are correct about the trend of ionization energies of elements in the Periodic Table? I. The noble gases have the highest ionization in each period II. Ionization energy decreases down Group I elements III. Ionization energy generally increases from left to right across a period IV. The alkali metals have the lowest ionization energies in each period",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "E"
				},
				"Q10": {
					"qs": "10. Which of the following properties is/are not exhibited by catalysts? I. Altering the rate of a chemical reaction II. Same mass and composition at the end of the reaction III. Causing a change in the equilibrium position of a reversible reaction IV.Starting off a reaction which will normally not occur.",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "C"
				},
				"Q11": {
					"qs": "11. Equilibrium is said to be attained in reversible reaction when",
					"opts": {
						"q0": "A. all the reactants have been used up",
						"q1": "B. all the products have been formed",
						"q2": "C. there is no further change in temperature",
						"q3": "D. the rates of the forward ana backward reactions are equal",
						"q4": "E. the rate of formation of the products decreases with time."
					},
					"ans": "D"
				},
				"Q12": {
					"qs": "12. An acid present in proteins is",
					"opts": {
						"q0": "A. lactic acid",
						"q1": "B. amino acid",
						"q2": "C. propanoic acid",
						"q3": "D. palmitic acid",
						"q4": "E. stearic acid."
					},
					"ans": "B"
				},
				"Q13": {
					"qs": "13. The following are uses of sulphur except",
					"opts": {
						"q0": "A. manufacture of tetraoxosulphate (VI) acid",
						"q1": "B. prevention of the growth of fungi",
						"q2": "C. vulcanization rubber",
						"q3": "D. manufacture of dyes",
						"q4": "E. coating of steel to prevent rusting."
					},
					"ans": "E"
				},
				"Q14": {
					"qs": "14. The reaction represented by the equation is known as",
					"img": "img**chem_1988_sectionb_qst14_1.jpg",
					"opts": {
						"q0": "A. hydrolysis",
						"q1": "B. oxidation",
						"q2": "C. reduction",
						"q3": "D. condensation",
						"q4": "E. fermentation."
					},
					"ans": "E"
				},
				"Q15": {
					"qs": "15. The reaction represented by the equation:",
					"img": "img**chem_1988_sectionb_qst15_1.jpg",
					"opts": {
						"q0": "A. is a double decomposition",
						"q1": "B. is a neutralization",
						"q2": "C. is reversible",
						"q3": "D. is usually catalysed",
						"q4": "E. attains equilibrium after a few seconds."
					},
					"ans": "B"
				},
				"Q16": {
					"qs": "16. The graph illustrates",
					"img": "img**chem_1988_sectionb_qst16_1.jpg",
					"opts": {
						"q0": "A. Charles’law",
						"q1": "B. Boyle’s law",
						"q2": "C. Gay-Lussac’s law",
						"q3": "D. Graham’s law",
						"q4": "E. Dalton’s law."
					},
					"ans": "A"
				},
				"Q17": {
					"qs": "17. Which of the following compounds is aromatic?",
					"opts": {
						"q0": "A. Benzene",
						"q1": "B. Cyclobutane",
						"q2": "C. Cyclopentane",
						"q3": "D. Hexane",
						"q4": "E. Ethene."
					},
					"ans": "A"
				},
				"Q18": {
					"qs": "18. Which of the following does not affect the rate of a chemical reaction?",
					"opts": {
						"q0": "A. Concentration of the reactants",
						"q1": "B. Addition or presence of a catalyst",
						"q2": "C. Size of the reacting particles",
						"q3": "D. The enthalpy change for the reaction",
						"q4": "E. Temperature at which the reaction is carried out."
					},
					"ans": "D"
				},
				"Q19": {
					"qs": "19. Given that 32.0g sulphur contains 6.02 x 10^23 sulphur atoms, how many atoms are there in 2.70g of aluminium? [AI = 27, S = 32]",
					"opts": {
						"q0": "A. 6.02 x 10^23",
						"q1": "B. 3.01 x 10^23",
						"q2": "C. 6.02 x 10^22",
						"q3": "D. 5.08 x 10^22",
						"q4": "E. 3.01 x 10^22."
					},
					"ans": "C"
				},
				"Q20": {
					"qs": "20. The empirical formula of a hydrocarbon containing 0.12 mole of carbon and 0.36 mole of hydrogen is",
					"img": "img**chem_1988_sectionb_qst20_1.jpg,img**chem_1988_sectionb_qst20_2.jpg,img**chem_1988_sectionb_qst20_3.jpg,img**chem_1988_sectionb_qst20_4.jpg,img**chem_1988_sectionb_qst20_5.jpg",
					"opts": {},
					"ans": "B"
				},
				"Q21": {
					"qs": "21. A salt which loses mass when exposed to air is",
					"opts": {
						"q0": "A. hygroscopic",
						"q1": "B. deliquescent",
						"q2": "C. efflorescent",
						"q3": "D. fluorescent",
						"q4": "E. effervescent."
					},
					"ans": "C"
				},
				"Q22": {
					"qs": "22. Detergents are better than soaps for laundry because",
					"opts": {
						"q0": "A. detergents are synthetic while soaps are not",
						"q1": "B. detergents are more soluble in water than soaps.",
						"q2": "C. scum is precipitated when soaps are used with hard water but not with detergents ",
						"q3": "D. soaps form soluble salts with ions causing hardness of water while detergents do not",
						"q4": "E. soaps are in bars while detergents are in powder form."
					},
					"ans": "C"
				},
				"Q23": {
					"qs": "23. Which of the following substances is used as an anaesthetic?",
					"img": "img**chem_1988_sectionb_qst23_1.jpg,img**chem_1988_sectionb_qst23_2.jpg,img**chem_1988_sectionb_qst23_3.jpg,img**chem_1988_sectionb_qst23_4.jpg,img**chem_1988_sectionb_qst23_5.jpg",
					"opts": {},
					"ans": "B"
				},
				"Q24": {
					"qs": "24. Which of the following types of hybridization gives rise to tetrahedral molecules?",
					"img": "img**chem_1988_sectionb_qst24_1.jpg,img**chem_1988_sectionb_qst24_2.jpg,img**chem_1988_sectionb_qst24_3.jpg,img**chem_1988_sectionb_qst24_4.jpg,img**chem_1988_sectionb_qst24_5.jpg",
					"opts": {},
					"ans": "C"
				},
				"Q25": {
					"qs": "25. Which of the following is a neutral oxide?",
					"opts": {
						"q0": "A. Nitrogen (IV) oxide",
						"q1": "B. Carbon (IV) oxide",
						"q2": "C. Sulphur (VI) oxide",
						"q3": "D. Phosphorus (IV) oxide",
						"q4": "E. Nitrogen oxide."
					},
					"ans": "E"
				},
				"Q26": {
					"qs": "26. Which of the following statements is not correct?",
					"opts": {
						"q0": "A. Carbon exhibits allotropy",
						"q1": "B. Sulphur exhibits allotropy",
						"q2": "C. Chlorine exhibits allotropy",
						"q3": "D. Nitrogen is a gas",
						"q4": "E. Argon is a noble gas."
					},
					"ans": "C"
				},
				"Q27": {
					"qs": "27. Which of the following is not true of the elements represented by the symbols",
					"img": "img**chem_1988_sectionb_qst27_1.jpg",
					"opts": {
						"q0": "A. X and Y have the same number of electrons",
						"q1": "B. X and Y have the the same number of protons",
						"q2": "C. X and Y are isotopes",
						"q3": "D. X and Y represent the same element",
						"q4": "E. X and Y represent atoms of different elements."
					},
					"ans": "E"
				},
				"Q28": {
					"qs": "28. The following are uses of radioactive isotopes except for",
					"opts": {
						"q0": "A. sterilization of medical equipment",
						"q1": "B. tracing reaction paths",
						"q2": "C. dating elements",
						"q3": "D. radiography",
						"q4": "E. determining equilibrium positions."
					},
					"ans": "A"
				},
				"Q29": {
					"qs": "29. The main characteristic feature of transition metals is that they",
					"opts": {
						"q0": "A. have the same atomic size",
						"q1": "B. are reducing agents",
						"q2": "C. form ions easily",
						"q3": "D. have variable oxidation states",
						"q4": "E. are highly electropositive."
					},
					"ans": "D"
				},
				"Q30": {
					"qs": "30. The following are heavy chemicals except",
					"opts": {
						"q0": "A. tetraoxosulphate (Vl)acid",
						"q1": "B. caustic soda",
						"q2": "C. sodium trioxocarbonate (IV)",
						"q3": "D. ethene",
						"q4": "E. dyes."
					},
					"ans": "E"
				},
				"Q31": {
					"qs": "31. What quantity of silver is deposited when 96500C of electricity is passed through a solution containing silver ions? (Ag = 108, 1F = 96500C)",
					"opts": {
						"q0": "A. 1.08g",
						"q1": "B. 5.40g",
						"q2": "C. 10.8g",
						"q3": "D. 21.6g",
						"q4": "E. 108g."
					},
					"ans": "E"
				},
				"Q32": {
					"qs": "32. Bubbling of carbon (IV) oxide into calcium hydroxide solution results in the formation of",
					"img": "img**chem_1988_sectionb_qst32_1.jpg,img**chem_1988_sectionb_qst32_2.jpg,img**chem_1988_sectionb_qst32_3.jpg,img**chem_1988_sectionb_qst32_4.jpg,img**chem_1988_sectionb_qst32_5.jpg",
					"opts": {},
					"ans": "D"
				},
				"Q33": {
					"qs": "33. Which of the following is not decomposed by heat?",
					"img": "img**chem_1988_sectionb_qst33_1.jpg,img**chem_1988_sectionb_qst33_2.jpg,img**chem_1988_sectionb_qst33_3.jpg,img**chem_1988_sectionb_qst33_4.jpg,img**chem_1988_sectionb_qst33_5.jpg",
					"opts": {},
					"ans": "D"
				},
				"Q34": {
					"qs": "34. The solubility curves of five salts A - E are shown in the graph below. Which of the salts is the least soluble below 70°C?",
					"img": "img**chem_1988_sectionb_qst34_1.jpg",
					"opts": {},
					"ans": "B"
				},
				"Q35": {
					"qs": "35. Which of the following is not true of the rusting of iron?",
					"opts": {
						"q0": "A. Rusting is a reduction process",
						"q1": "B. Rusting of iron takes place in the presence of oxygen and moisture",
						"q2": "C. The rust formed is reddish brown",
						"q3": "D. The major constituent of rust is hydrated iron (III) oxide",
						"q4": "E. Rusting is similar to burning."
					},
					"ans": "A"
				},
				"Q36": {
					"qs": "36. What volume of oxygen will be left unreacted when a mixture of 100cm3 of hydrogen and 200cm3 of oxygen are exploded in a eudiometer?",
					"img": "img**chem_1988_sectionb_qst36_1.jpg,img**chem_1988_sectionb_qst36_2.jpg,img**chem_1988_sectionb_qst36_3.jpg,img**chem_1988_sectionb_qst36_4.jpg,img**chem_1988_sectionb_qst36_5.jpg",
					"opts": {},
					"ans": "C"
				},
				"Q37": {
					"qs": "37. Water gas is a mixture of",
					"img": "img**chem_1988_sectionb_qst37_1.jpg,img**chem_1988_sectionb_qst37_2.jpg,img**chem_1988_sectionb_qst37_3.jpg,img**chem_1988_sectionb_qst37_4.jpg,img**chem_1988_sectionb_qst37_5.jpg",
					"opts": {},
					"ans": "E"
				},
				"Q38": {
					"qs": "38. How many isomers can be obtained from C4H10?",
					"opts": {
						"q0": "A. 0",
						"q1": "B. 1",
						"q2": "C. 2",
						"q3": "D. 3",
						"q4": "E. 4."
					},
					"ans": "C"
				},
				"Q39": {
					"qs": "39. Which of the following metals cannot be extracted from its ore by using carbon (II) oxide as the reducing agent?",
					"opts": {
						"q0": "A. Cu",
						"q1": "B. Zn",
						"q2": "C. Al",
						"q3": "D. Pb",
						"q4": "E. Fe."
					},
					"ans": "C"
				},
				"Q40": {
					"qs": "40. In the diagram,",
					"img": "img**chem_1988_sectionb_qst40_1.jpg,img**chem_1988_sectionb_qst40_2.jpg,img**chem_1988_sectionb_qst40_3.jpg,img**chem_1988_sectionb_qst40_4.jpg,img**chem_1988_sectionb_qst40_5.jpg,img**chem_1988_sectionb_qst40_6.jpg",
					"opts": {},
					"ans": "E"
				},
				"Q41": {
					"qs": "41. Which of the following is not a naturally occurring iron ore?",
					"img": "img**chem_1988_sectionb_qst41_1.jpg,img**chem_1988_sectionb_qst41_2.jpg,img**chem_1988_sectionb_qst41_3.jpg,img**chem_1988_sectionb_qst41_4.jpg,img**chem_1988_sectionb_qst41_5.jpg",
					"opts": {},
					"ans": "A"
				},
				"Q42": {
					"qs": "42. Which of the following equations represents the reaction of chlorine with hot concentrated sodium hydroxide solution?",
					"img": "img**chem_1988_sectionb_qst42_1.jpg,img**chem_1988_sectionb_qst42_2.jpg,img**chem_1988_sectionb_qst42_3.jpg,img**chem_1988_sectionb_qst42_4.jpg,img**chem_1988_sectionb_qst42_5.jpg",
					"opts": {},
					"ans": "C"
				},
				"Q43": {
					"qs": "43. Aqueous sodium trioxocarbonate (IV) solution is alkaline because ",
					"opts": {
						"q0": "A. the acid from which it is formed is strong",
						"q1": "B. sodium is an alkali metal",
						"q2": "C. sodium trioxocarbonate (IV) is decomposed by water",
						"q3": "D. sodium trioxocarbonate (IV) is stable to heat",
						"q4": "E. sodium trioxocarbonate (IV) is hydrolysed in water."
					},
					"ans": "E"
				},
				"Q44": {
					"qs": "44. Which of the following correctly explains why iodine crystals change directly into the gaseous state when heated?",
					"opts": {
						"q0": "A. Iodine crystals sublime",
						"q1": "B. Iodine atoms are held together by strong forces",
						"q2": "C. Iodine molecules are held together by weak forces",
						"q3": "D. Iodine molecules are covalent",
						"q4": "E. Iodine is a solid at room temperature."
					},
					"ans": "C"
				},
				"Q45": {
					"qs": "45. Which of the following is a waste product in the Solvay Process for the manufacture of sodium trioxocarbonate (IV)?",
					"opts": {
						"q0": "A. Ammonium chloride",
						"q1": "B. Brine",
						"q2": "C. Limestone",
						"q3": "D. Calcium oxide",
						"q4": "E. Calcium chloride."
					},
					"ans": "E"
				},
				"Q46": {
					"qs": "46. This is due to the presence of",
					"img": "img**chem_1988_sectionb_qst46_1.jpg,img**chem_1988_sectionb_qst46_2.jpg,img**chem_1988_sectionb_qst46_3.jpg,img**chem_1988_sectionb_qst46_4.jpg,img**chem_1988_sectionb_qst46_5.jpg",
					"opts": {},
					"ans": "E"
				},
				"Q47": {
					"qs": "47. The complex salt formed when aluminium dissolves in sodium hydroxide solution is",
					"img": "img**chem_1988_sectionb_qst47_1.jpg,img**chem_1988_sectionb_qst47_2.jpg,img**chem_1988_sectionb_qst47_3.jpg,img**chem_1988_sectionb_qst47_4.jpg,img**chem_1988_sectionb_qst47_5.jpg",
					"opts": {},
					"ans": "E"
				},
				"Q48": {
					"qs": "48. The reaction represented by the equation below, was carried out at 27°C. If the enthalpy change was +4500 J and the entropy change was +12 J, what was the free energy change?",
					"img": "img**chem_1988_sectionb_qst48_1.jpg,img**chem_1988_sectionb_qst48_2.jpg.",
					"opts": {
						"q0": "A. -4176 J",
						"q1": "B. +4176 J",
						"q2": "C. - 900 J",
						"q3": "D. +900 J",
						"q4": "E. +8100 J."
					},
					"ans": "D"
				},
				"Q49": {
					"qs": "49. During the electrolysis of dilute tetraoxosulphate (VI) acid solution 0.05 mole of electrons were passed. What volume of gas was produced at the anode? (Gaseous molar volume = 22.4dm^3 at s.t.p.)",
					"opts": {
						"q0": "A. 0.224 dm^3",
						"q1": "B. 0.280dm^3",
						"q2": "C. 0.560dm^3",
						"q3": "D. 2.24dm^3",
						"q4": "E. 22.4dm^3."
					},
					"ans": "B"
				},
				"Q50": {
					"qs": "50. From the information in the table above, what is the e.m.f. of the cell represented by",
					"img": "img**chem_1988_sectionb_qst50_1.jpg,img**chem_1988_sectionb_qst50_2.jpg.",
					"opts": {
						"q0": "A. + 1.571V",
						"q1": "B. -1.67V",
						"q2": "C. -1.122V",
						"q3": "D. + 0.785V",
						"q4": "E. .-0.359V."
					},
					"ans": "E"
				}
			}
		});
	});

	app.get('/chemistry/1989', function(req, res) {
		res.json({
			data: {
				"Q1": {
					"qs": "1. Which of the following is/are water pollutants? I. Fertilizers II. Humanwastes III. Industrial wastes IV. Pesticides",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "E"
				},
				"Q2": {
					"qs": "2. Which of the following is/are properties of cathode rays? They I. flow from the cathode to the anode. II. travel in straight lines and cast a shadow of an object placed in their path. III. are negatively charged IV. are deflected by magnetic fields.",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "E"
				},
				"Q3": {
					"qs": "3. The substance(s) that is/are not used for making mortar include(s) I. calcium oxide II. water III. sand IV. calcium trioxocarbonate (IV)",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "A"
				},
				"Q4": {
					"qs": "4. From the table above, which of the solutions W, X, Y and Z will liberate carbon (IV) oxide from trioxocarbonate (IV) salt? I. Z II. Y III. W IV. X",
					"img": "img**chem_1989_sectionb_qst4_1.jpg",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "B"
				},
				"Q5": {
					"qs": "5. Which of the following statements is/are true of the reaction represented by the ionic equation I. The resulting solution is pink II. 3 mole of electrons are involved III. the oxidation number of Mn changes from +7 to +2 IV. MnO4 is reduced.",
					"img": "img**chem_1989_sectionb_qst5_1.jpg",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "C"
				},
				"Q6": {
					"qs": "6. Which of the following is/are properties of transition metals? They I. are all hard and high-melting metals II. form alloys with one another and with other elements III. are all electropositive IV. form paramagnetic compounds.",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "E"
				},
				"Q7": {
					"qs": "7. Which of the following is/are true of elements in the Periodic Table? I. All elements in the same period have atoms with the same number of main electronic shells. II. The atoms of the elements are arranged in order of increasing number of electrons. III. The last member of each period is a noble gas. IV. All the elements in the same group have the same number of electrons in their outermost shells.",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "E"
				},
				"Q8": {
					"qs": "8. In which of the following reactions would you expect the product to be more stable at higher pressures?",
					"img": "img**chem_1989_sectionb_qst8_1.jpg,img**chem_1989_sectionb_qst8_2.jpg,img**chem_1989_sectionb_qst8_3.jpg,img**chem_1989_sectionb_qst8_4.jpg",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "C"
				},
				"Q9": {
					"qs": "9. Which of the following statements is/are true? I. H2S04 is a strong electrolyte II. CH3COOH is a weak electrolyte III. C6H1206 is a non-electrolyte IV. Aluminium conducts electricity.",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "E"
				},
				"Q10": {
					"qs": "10. Which of the following is/are properties of carbon (II) oxide? I. The gas burns with a pale blue flame, forming carbon (IV) oxide II. It is a good reducing agent III. The gas reacts with certain metals to form carbonyls IV. It combines irreversibly with the haemoglobin of the blood.",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "E"
				},
				"Q11": {
					"qs": "11. The major raw material in a plastic industry is",
					"opts": {
						"q0": "A. ethanol",
						"q1": "B. sulphur",
						"q2": "C. methylethanoate",
						"q3": "D. ethene",
						"q4": "E. ethane."
					},
					"ans": "D"
				},
				"Q12": {
					"qs": "12. Which of the following reactions represents the laboratory preparation of hydrogen?",
					"img": "img**chem_1989_sectionb_qst12_1.jpg,img**chem_1989_sectionb_qst12_2.jpg,img**chem_1989_sectionb_qst12_3.jpg,img**chem_1989_sectionb_qst12_4.jpg,img**chem_1989_sectionb_qst12_5.jpg",
					"opts": {},
					"ans": "C"
				},
				"Q13": {
					"qs": "13. Which of the following statements best explains cracking? It is a process",
					"opts": {
						"q0": "A. in which an alkene adds on itself repeatedly to form long chain polymers",
						"q1": "B. in which large hydrocarbon molecules are broken into smaller units",
						"q2": "C. for measuring the octane number of petrol",
						"q3": "D. in which carbon chain results in a zigzag arrangement",
						"q4": "E. in which aromatic hydrocarbons are produced."
					},
					"ans": "B"
				},
				"Q14": {
					"qs": "14. Which of the following statements is not correct?",
					"opts": {
						"q0": "A. Metals high up in the redox series are usually extracted by electrolysis",
						"q1": "B. Lead is less reactive than magnesium therefore it is lower in the redox series",
						"q2": "C. Aluminium reduces iron (III) oxide to iron in the thermit process",
						"q3": "D. An amphoteric oxide exhibits both acidic and basic properties",
						"q4": "E. Metals ionize by electron gain while non-metals form ions by electron loss."
					},
					"ans": "E"
				},
				"Q15": {
					"qs": "15. 120cm^3 of hydrogen were sparked with 60cm^3 of oxygen at 110°C. What was the volume of stream produced? The equation for the reaction is",
					"img": "img**chem_1989_sectionb_qst15_1.jpg",
					"opts": {
						"q0": "A. 30cm^3",
						"q1": "B. 60cm^3",
						"q2": "C. 90cm^3",
						"q3": "D. 120cm^3",
						"q4": "E. 180cm^3."
					},
					"ans": "D"
				},
				"Q16": {
					"qs": "16. The earthly impurities in iron ore are removed in the blast furnace by the reaction",
					"img": "img**chem_1989_sectionb_qst16_1.jpg,img**chem_1989_sectionb_qst16_2.jpg,img**chem_1989_sectionb_qst16_3.jpg,img**chem_1989_sectionb_qst16_4.jpg,img**chem_1989_sectionb_qst16_5.jpg",
					"opts": {},
					"ans": "C"
				},
				"Q17": {
					"qs": "17. Which of the following hydrocarbons is not likely to be present in petrol?",
					"img": "img**chem_1989_sectionb_qst17_1.jpg,img**chem_1989_sectionb_qst17_2.jpg,img**chem_1989_sectionb_qst17_3.jpg,img**chem_1989_sectionb_qst17_4.jpg,img**chem_1989_sectionb_qst17_5.jpg",
					"opts": {},
					"ans": "A"
				},
				"Q18": {
					"qs": "18. A gas is prepared in the laboratory and the gaseous impurity is to be absorbed by a reagent. Which of the following set-ups illustrates the correct procedure?",
					"img": "img**chem_1989_sectionb_qst18_1.jpg,img**chem_1989_sectionb_qst18_2.jpg,img**chem_1989_sectionb_qst18_3.jpg,img**chem_1989_sectionb_qst18_4.jpg,img**chem_1989_sectionb_qst18_5.jpg",
					"opts": {},
					"ans": "B"
				},
				"Q19": {
					"qs": "19. The most suitable method to use when separating an insoluble solid from a liquid is",
					"opts": {
						"q0": "A. evaporation",
						"q1": "B. filtration",
						"q2": "C. magnetization",
						"q3": "D. sublimation",
						"q4": "E. distillation."
					},
					"ans": "B"
				},
				"Q20": {
					"qs": "20. The following are miscible with water except",
					"opts": {
						"q0": "A. ethylethanoate",
						"q1": "B. methanol",
						"q2": "C. ethanoic acid",
						"q3": "D. methanoic acid",
						"q4": "E. ethanol."
					},
					"ans": "A"
				},
				"Q21": {
					"qs": "21. If 200cm^3 of a gas at s.t.p. has a mass of 0.268g, what is its molar mass? (Molar volume of a gas at s.t.p. = 22.4 dm^3)",
					"opts": {
						"q0": "A. 300g",
						"q1": "B. 200g",
						"q2": "C. 150g",
						"q3": "D. 30g",
						"q4": "E. 15g."
					},
					"ans": "D"
				},
				"Q22": {
					"qs": "22. In the diagram above, d1 is greater than d2. This shows that",
					"img": "img**chem_1989_sectionb_qst22_1.jpg",
					"opts": {
						"q0": "A. concentrated hydrochloric acid liberates hydrogen chloride gas",
						"q1": "B. the ammonia solution used is concentrated",
						"q2": "C. ammonia gas moves faster than hydrogen chloride gas",
						"q3": "D. ammonium chloride is formed when ammonia and hydrogen chloride gas react",
						"q4": "E. ammonia gas is denser than hydrogen chloride gas."
					},
					"ans": "C"
				},
				"Q23": {
					"qs": "23. How many carbon atoms are there in a benzene ring?",
					"opts": {
						"q0": "A. 4",
						"q1": "B. 5",
						"q2": "C. 6",
						"q3": "D. 7",
						"q4": "E. 8."
					},
					"ans": "C"
				},
				"Q24": {
					"qs": "24. Which of the following gases will bleach moist litmus paper?",
					"img": "img**chem_1989_sectionb_qst24_1.jpg,img**chem_1989_sectionb_qst24_2.jpg,img**chem_1989_sectionb_qst24_3.jpg,img**chem_1989_sectionb_qst24_4.jpg,img**chem_1989_sectionb_qst24_5.jpg",
					"opts": {},
					"ans": "A"
				},
				"Q25": {
					"qs": "25. Given that for the reaction A, what is the quantity of heat involved in the reaction B?",
					"img": "img**chem_1989_sectionb_qst25_1.jpg,img**chem_1989_sectionb_qst25_2.jpg",
					"opts": {
						"q0": "A. -108Kj",
						"q1": "B. -54Kj",
						"q2": "C. -27Kj",
						"q3": "D. +27Kj",
						"q4": "E. +54Kj."
					},
					"ans": "C"
				},
				"Q26": {
					"qs": "26. When an element can exist in two or more forms in the same physical state, the element is said to exhibit",
					"opts": {
						"q0": "A. isotopy",
						"q1": "B. isomerism",
						"q2": "C. allotropy",
						"q3": "D. hygroscopy",
						"q4": "E. sublimation."
					},
					"ans": "C"
				},
				"Q27": {
					"qs": "27. Which of'tne following carbohydrates does NOT usually occur in the crystalline form?",
					"opts": {
						"q0": "A. Fructose",
						"q1": "B. Glucose",
						"q2": "C. Sucrose",
						"q3": "D. Maltose",
						"q4": "E. Cellulose."
					},
					"ans": "E"
				},
				"Q28": {
					"qs": "28. Copper can best be purified by",
					"opts": {
						"q0": "A. roasting the impure copper in a blast furnace",
						"q1": "B. heating the oxide with coke",
						"q2": "C. electrolyzing a copper (II) salt solution using the impure copper as the anode",
						"q3": "D. converting the impure copper to a trioxonitrate (V)",
						"q4": "E. washing the impure copper with sodium hydroxide solution."
					},
					"ans": "C"
				},
				"Q29": {
					"qs": "29. Locally produced soap in which wood ash is used as the base is usually soft because the wood ash contains a lot of",
					"opts": {
						"q0": "A. sodium ions",
						"q1": "B. potassium ions",
						"q2": "C. lithium ions",
						"q3": "D. calcium ions",
						"q4": "E. magnesium ions."
					},
					"ans": "B"
				},
				"Q30": {
					"qs": "30. Why is potassium fluoride added to the electrolyte in the extraction of sodium from fused sodium chloride?",
					"opts": {
						"q0": "A. Pure sodium chloride does not conduct electricity",
						"q1": "B. Potassium fluoride prevents the sodium produced from attacking the electrodes",
						"q2": "C. Potassium fluoride increases conductivity",
						"q3": "D. Potassium fluoride reduces the temperature at which sodium chloride fuses",
						"q4": "E. The potassium fluoride acts as a catalyst."
					},
					"ans": "D"
				},
				"Q31": {
					"qs": "31. Ethanedioic acid undergoes the following reaction: The basicity of the acid is therefore",
					"img": "img**chem_1989_sectionb_qst31_1.jpg",
					"opts": {
						"q0": "A. 1",
						"q1": "B. 2",
						"q2": "C. 3",
						"q3": "D. 4",
						"q4": "E. 5."
					},
					"ans": "B"
				},
				"Q32": {
					"qs": "32. The rate of the production of hydrogen in the reaction below can be increased by",
					"img": "img**chem_1989_sectionb_qst32_1.jpg",
					"opts": {
						"q0": "A. using zinc powder instead of zinc granules",
						"q1": "B. using dilute instead of concentrated hydrochloric acid",
						"q2": "C. cooling the container in which the mixture is placed",
						"q3": "D. using an alloy of zinc instead of pure zinc",
						"q4": "E. using hydrogen chloride gas instead of hydrochloric acid solution."
					},
					"ans": "A"
				},
				"Q33": {
					"qs": "33. Octane number is highest in petrol containing a high proportion of",
					"opts": {
						"q0": "A. heptane",
						"q1": "B. octane",
						"q2": "C. 2-methylpentane",
						"q3": "D. 2,4-dimethylpentane",
						"q4": "E. 2,2,4-trimethylpentane."
					},
					"ans": "E"
				},
				"Q34": {
					"qs": "34. Given the following half-cell reaction below how many mole of electrons will be required to produce 1.12dm3 of chlorine gas at s.t.p.? (Molar volume of a gas at s.t.p. = 22.4dm3)",
					"img": "img**chem_1989_sectionb_qst34_1.jpg",
					"opts": {
						"q0": "A. 1.00",
						"q1": "B. 0.40",
						"q2": "C. 0.20",
						"q3": "D. 0.10",
						"q4": "E. 0.01."
					},
					"ans": "D"
				},
				"Q35": {
					"qs": "35. Which of the following is used extensively in manufacturing photographic chemicals?",
					"opts": {
						"q0": "A. Aluminium chloride",
						"q1": "B. Zinc chloride",
						"q2": "C. Silver chloride",
						"q3": "D. Mercury (II) chloride",
						"q4": "E. Iron(ll) chloride."
					},
					"ans": "C"
				},
				"Q36": {
					"qs": "36. Given that 1 mole of carbon - 12 weighs 12.0g, how many atoms are there in 24.Og magnesium? (C = 12, Mg = 24, NA = 6.02 x 10^23 mol^-1)",
					"opts": {
						"q0": "A. 1/2 x6.02 x 10^23",
						"q1": "B. 1 x6.02 x 10^23",
						"q2": "C. 2 x6.02 x 10^23",
						"q3": "D. 3 x6.02 x 10^23",
						"q4": "E. 4 x6.02 x 10^23."
					},
					"ans": "B"
				},
				"Q37": {
					"qs": "37. The IUPAC name of the compound below is",
					"img": "img**chem_1989_sectionb_qst37_1.jpg",
					"opts": {
						"q0": "A. ethoxymethane",
						"q1": "B. methoxyethane",
						"q2": "C. propyl methanoate",
						"q3": "D. methyl propanoate",
						"q4": "E. methyl propylester."
					},
					"ans": "D"
				},
				"Q38": {
					"qs": "38. What is the concentration, in mol dm^-3, of a solution containing 0.1 Og of sodium hydroxide per 50cm3 of solution? (NaOH = 40)",
					"opts": {
						"q0": "A. 0.05",
						"q1": "B. 0.1",
						"q2": "C. 0.5",
						"q3": "D. 2",
						"q4": "E. 5."
					},
					"ans": "A"
				},
				"Q39": {
					"qs": "39. If sulphur is dissolved in carbon (IV) sulphide and the solution is allowed to evaporate, the allotrope of sulphur formed is",
					"opts": {
						"q0": "A. plastic sulphur",
						"q1": "B. amorphous sulphur",
						"q2": "C. rhombic sulphur",
						"q3": "D. monoclinic sulphur",
						"q4": "E. colloidal sulphur."
					},
					"ans": "C"
				},
				"Q40": {
					"qs": "40. Given that for the reaction below, What is the enthalpy of formation of ammonia from its elements?",
					"img": "img**chem_1989_sectionb_qst40_1.jpg",
					"opts": {
						"q0": "A. -46 KJmol^-1",
						"q1": "B. -184 KJmol^-1",
						"q2": "C. -92 KJmol^-1",
						"q3": "D. 184 KJmol^-1",
						"q4": "E. +46 KJmol^-1."
					},
					"ans": "A"
				},
				"Q41": {
					"qs": "41. The following are s-block elements except",
					"opts": {
						"q0": "A. lithium",
						"q1": "B. magnesium",
						"q2": "C. potassium",
						"q3": "D. calcium",
						"q4": "E. aluminium."
					},
					"ans": "E"
				},
				"Q42": {
					"qs": "42. In the diagram above, T1 and T2 represent temperatures and Ea represents activation energy. Which of the following information is a correct deduction from the diagram? The",
					"img": "img**chem_1989_sectionb_qst42_1.jpg",
					"opts": {
						"q0": "A. fraction of molecules capable of undergoing reaction is unaffected by temperature",
						"q1": "B. number of molecules capable of undergoing a reaction is hindered by high temperature",
						"q2": "C. reaction rate is greater in T2 due to a greater number of molecules possessing energy greater than Ea",
						"q3": "D. fraction of molecules having energy lower than Ea is less at T1",
						"q4": "E. reaction rate is greater at T1 because the molecules are freer to collide with one another."
					},
					"ans": "E"
				},
				"Q43": {
					"qs": "43. Which of the following statements is not true of tin? It",
					"opts": {
						"q0": "A. is a p-block element",
						"q1": "B. is extracted from cassiterite, Sn02.",
						"q2": "C. is used for protecting iron containers from corrosion",
						"q3": "D. combines with copper to form the alloy brass",
						"q4": "E. shows two oxidation states, +2 and +4, in most of its compounds."
					},
					"ans": "A"
				},
				"Q44": {
					"qs": "44. What quantity of copper will be deposited by the same quantity of electricity that deposited 9.0g of aluminium? (A = 27, Cu = 64)",
					"opts": {
						"q0": "A. 64g",
						"q1": "B. 32g",
						"q2": "C. 7.1g",
						"q3": "D. 6.4g",
						"q4": "E. 3.2g."
					},
					"ans": "B"
				},
				"Q45": {
					"qs": "45. Given the information in the table below: Which of the nuclei is the most stable?",
					"img": "img**chem_1989_sectionb_qst45_1.jpg",
					"opts": {
						"q0": "A. U",
						"q1": "B. T",
						"q2": "C. S",
						"q3": "D. V",
						"q4": "E. R."
					},
					"ans": "E"
				},
				"Q46": {
					"qs": "46. The electronic configuration of two atoms X and Y are as follows: Which of the statements below is true of the position of X and Y in the Periodic Table?",
					"img": "img**chem_1989_sectionb_qst46_1.jpg",
					"opts": {
						"q0": "A. X belongs	to group 1, Y belongs to period	2",
						"q1": "B. X	belongs to group 1, Y belongs to period 4",
						"q2": "C. X belongs	to group 2, Y belongs to period	1",
						"q3": "D. X	belongs to group 3, Y belongs to period 2",
						"q4": "E. X belongs	to group 3, Y belongs to period	4."
					},
					"ans": "B"
				},
				"Q47": {
					"qs": "47. What is the voltage of the cell represented at A, given that for B and for C?",
					"img": "img**chem_1989_sectionb_qst46_1.jpg",
					"opts": {
						"q0": "A. +0.426V",
						"q1": "B. -0.426V",
						"q2": "C. -0.337V",
						"q3": "D. -1.10V",
						"q4": "E. +1.10V."
					},
					"ans": "E"
				},
				"Q48": {
					"qs": "48. Which of the following is a condition for a spontaneous reaction?",
					"img": "img**chem_1989_sectionb_qst48_1.jpg,img**chem_1989_sectionb_qst48_2.jpg,img**chem_1989_sectionb_qst48_3.jpg,img**chem_1989_sectionb_qst48_4.jpg,img**chem_1989_sectionb_qst48_5.jpg",
					"opts": {},
					"ans": "C"
				},
				"Q49": {
					"qs": "49. 50cm^3 of a saturated solution of potassium trioxonitrate (V) at 40°C contains 5.05g of the salt. What is the solubility of potassium trioxonitrate (V) at40°C? (KNO, = 101)",
					"opts": {
						"q0": "A. 1.0 mol dm^-3",
						"q1": "B. 1.5mol dm^-3",
						"q2": "C. 2.0mol dm^-3",
						"q3": "D. 2.5mol dm^-3",
						"q4": "E. 5.0mol dm^-3."
					},
					"ans": "A"
				},
				"Q50": {
					"qs": "50. The oxidation number of chlorine is+1 in",
					"img": "img**chem_1989_sectionb_qst50_1.jpg,img**chem_1989_sectionb_qst50_2.jpg,img**chem_1989_sectionb_qst50_3.jpg,img**chem_1989_sectionb_qst50_4.jpg,img**chem_1989_sectionb_qst50_5.jpg",
					"opts": {},
					"ans": "E"
				}
			}
		});
	});

	app.get('/chemistry/1990', function(req, res) {
		res.json({
			data: {
				"Q1": {
					"qs": "1. Which of the following will produce nitrogen (IV) oxide and oxygen when heated strongly?",
					"img": "img**chem_1990_sectionb_qst1_1.jpg,img**chem_1990_sectionb_qst1_2.jpg",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "C"
				},
				"Q2": {
					"qs": "2. Which of the following statements is/are correct of AH, the enthalpy of reaction? H is I. the heat change accompanying a chemical reaction. II. negative for exothermic reactions III. positive for endothermic reactions IV. greater than AS for reversible reactions.",
					"img": "img**chem_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "D"
				},
				"Q3": {
					"qs": "3. In which of the following reactions are the underlined species oxidized?",
					"img": "img**chem_1990_sectionb_qst1_1.jpg,img**chem_1990_sectionb_qst3_1.jpg,img**chem_1990_sectionb_qst3_2.jpg,img**chem_1990_sectionb_qst3_3.jpg,img**chem_1990_sectionb_qst3_4.jpg",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "D"
				},
				"Q4": {
					"qs": "4. Which of the following decrease(s) from left to right across the period but increase(s) down the group in the Periodic Table? I. Ionization energy II. Electron affinity III. Electronegativity IV. Atomic radius.",
					"img": "img**chem_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "A"
				},
				"Q5": {
					"qs": "5. A homologous series is one in which I. all compounds can be represented by one general formula. II. successive members differ from one another by CH2. III. physical properties differ only in terms of the number of carbon atoms per molecule IV. the members have the same physical and chemical properties.",
					"img": "img**chem_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "E"
				},
				"Q6": {
					"qs": "6. Which of the following is/are correct of the ammonia molecule? I. It has a tetrahedral shape. II. It has a lone pair of electrons III. The H - N - H bond angle is 180°. IV. It is non-polar molecule.",
					"img": "img**chem_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "E"
				},
				"Q7": {
					"qs": "7. What reaction(s) occur(s) at the electrodes during the electrolysis of concentrated sodium chloride solution using carbon electrodes? I. Oxidation takes place at the anode II. Chlorine is evolved at the anode III. Hydrogen is evolved at the cathode IV. Oxygen is evolved at the cathode.",
					"img": "img**chem_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "D"
				},
				"Q8": {
					"qs": "8. Which of the following statements is/are correct of the gaseous state? The I. intermolecular spaces are very large II. molecules move very fast III. intermolecular forces are negligible IV. intermolecular space can be compressed.",
					"img": "img**chem_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "E"
				},
				"Q9": {
					"qs": "9. Which of the following is/are properties of ethanol? I. It is colourless II. It is miscible with water III. Its boiling point is 78°C. IV. It is a strong electrolyte.",
					"img": "img**chem_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "D"
				},
				"Q10": {
					"qs": "10. Which of the following statements is/are correct about equilibrium? I. Chemical equilibrium is attained when the rates of forward and backward reactions are equal. II. Changes in concentrations of reactants will alter equilibrium concentrations. III. A catalyst alters equally the rates of both the forward and the backward reactions IV. Temperature affects equilibrium concentrations.",
					"img": "img**chem_1990_sectionb_qst1_1.jpg",
					"opts": {
						"q0": "A. only IV is correct",
						"q1": "B. only I and III are correct",
						"q2": "C. only III and IV are correct",
						"q3": "D. only I, II and III are correct",
						"q4": "E. I, II, III and IV are all correct"
					},
					"ans": "E"
				},
				"Q11": {
					"qs": "11. Catalytic hydrogenation of oils results in the production of",
					"opts": {
						"q0": "A. soaps",
						"q1": "B. detergents",
						"q2": "C. alkanes",
						"q3": "D. butter",
						"q4": "E. margarine."
					},
					"ans": "E"
				},
				"Q12": {
					"qs": "12. Which of the following reaction will not take place under normal conditions?",
					"img": "img**chem_1990_sectionb_qst12_1.jpg,img**chem_1990_sectionb_qst12_2.jpg,img**chem_1990_sectionb_qst12_3.jpg,img**chem_1990_sectionb_qst12_4.jpg,img**chem_1990_sectionb_qst12_5.jpg",
					"opts": {},
					"ans": "C"
				},
				"Q13": {
					"qs": "13. A sample of orange juice is suspected to have been contaminated with a yellow dye. Which of the following methods can be used to detect the dye?",
					"opts": {
						"q0": "A. Decantation",
						"q1": "B. Chromatography",
						"q2": "C. Distillation",
						"q3": "D. Filtration",
						"q4": "E. Evaporation."
					},
					"ans": "B"
				},
				"Q14": {
					"qs": "14. The electronic configuration below is that of a",
					"img": "img**chem_1990_sectionb_qst14_1.jpg",
					"opts": {
						"q0": "A. noble gas",
						"q1": "B. Group II element",
						"q2": "C. Group III element",
						"q3": "D. Group V element",
						"q4": "E. Group VI element."
					},
					"ans": "A"
				},
				"Q15": {
					"qs": "15. The heat accompanying the reaction represented by the equation below is described as the heat of",
					"img": "img**chem_1990_sectionb_qst15_1.jpg",
					"opts": {
						"q0": "A. solution",
						"q1": "B. neutralization",
						"q2": "C. vaporization",
						"q3": "D. sublimation",
						"q4": "E. activation."
					},
					"ans": "C"
				},
				"Q16": {
					"qs": "16. Aluminium is above iron in the electrochemical series, yet iron corrodes easily on exposure to air while aluminium does not. This is because aluminium",
					"opts": {
						"q0": "A. has a lower density than iron.",
						"q1": "B. is a better conductor than iron",
						"q2": "C. does not corrode spontaneously",
						"q3": "D. forms a thin layer of inert oxide in moist air",
						"q4": "E. forms amphoteric oxides while iron does not."
					},
					"ans": "D"
				},
				"Q17": {
					"qs": "17. When a solid melts and consequently boils, there is",
					"opts": {
						"q0": "A. a gradual increase in the average kinetic energy of the particles",
						"q1": "B. a sudden decrease in the kinetic energy of the particles",
						"q2": "C. no change in the average kinetic energy of the particles",
						"q3": "D. a rapid change in the nature of bonding of the components",
						"q4": "E. a change in the size of the fundamental particles."
					},
					"ans": "A"
				},
				"Q18": {
					"qs": "18. Which of the following compounds will undergo additional reactions?",
					"opts": {
						"q0": "A. Ethyne",
						"q1": "B. Butane",
						"q2": "C. Pentane",
						"q3": "D. Tetrachloromethane",
						"q4": "E. Ethanol."
					},
					"ans": "A"
				},
				"Q19": {
					"qs": "19. The pH values of the solutions resulting from the dissolution of the oxides of elements M, N, O, P and Q in water are as indicated in the table below: Which of the above elements is likely to be a metal?",
					"img": "img**chem_1990_sectionb_qst19_1.jpg",
					"opts": {
						"q0": "A. M",
						"q1": "B. N",
						"q2": "C. O",
						"q3": "D. P",
						"q4": "E. "
					},
					"ans": "D"
				},
				"Q20": {
					"qs": "20. Which of the following reactions does not occur in the blast furnace during the extraction of iron?",
					"img": "img**chem_1990_sectionb_qst20_1.jpg,img**chem_1990_sectionb_qst20_2.jpg,img**chem_1990_sectionb_qst20_3.jpg,img**chem_1990_sectionb_qst20_4.jpg,img**chem_1990_sectionb_qst20_5.jpg",
					"opts": {},
					"ans": "E"
				},
				"Q21": {
					"qs": "21. A catalyst which increases the rate of a chemical reaction does so by",
					"opts": {
						"q0": "A. increasing the reaction pathway",
						"q1": "B. increasing the surface area of the reactants",
						"q2": "C. increasing the pressure on the system",
						"q3": "D. decreasing the temperature at which the reaction occurs",
						"q4": "E. decreasing the activation energy of the reaction."
					},
					"ans": "E"
				},
				"Q22": {
					"qs": "22. The diagram below shows the shape of",
					"img": "img**chem_1990_sectionb_qst22_1.jpg",
					"opts": {
						"q0": "A. s-orbitals",
						"q1": "B. p-orbitals",
						"q2": "C. d-orbitals",
						"q3": "D. sp-orbitals",
						"q4": "E. sp2-orbitals."
					},
					"ans": "C"
				},
				"Q23": {
					"qs": "23. How many molecules are there in 14g of nitrogen gas at s.t.p.? (N = 14, Avogadro Number = 6.0 x 10^23 mol^-1)",
					"opts": {
						"q0": "A. 1.2 x 10^23",
						"q1": "B. 3.0 x 10^23",
						"q2": "C. 6.0 x 10^23",
						"q3": "D. 1.2 x 10^24",
						"q4": "E. 30 x 10^23."
					},
					"ans": "C"
				},
				"Q24": {
					"qs": "24. Which of the following correctly explains entropy?",
					"opts": {
						"q0": "A. The natural tendency for a system to achieve a greater disorder",
						"q1": "B. A balance of two driving forces between free energy and enthalpy changes",
						"q2": "C. The cause of spontaneity of a reaction",
						"q3": "D. A measure of the enthalpy of a reaction",
						"q4": "E. A measure of the rate of attaining equilibrium in a reversible reaction."
					},
					"ans": "A"
				},
				"Q25": {
					"qs": "25. The gas that is liberated when iron is heated with concentrated tetraoxosulphate (VI) acid is",
					"img": "img**chem_1990_sectionb_qst25_1.jpg,img**chem_1990_sectionb_qst25_2.jpg,img**chem_1990_sectionb_qst25_3.jpg,img**chem_1990_sectionb_qst25_4.jpg,img**chem_1990_sectionb_qst25_5.jpg",
					"opts": {},
					"ans": "B"
				},
				"Q26": {
					"qs": "26. What is emitted during the disintegration of barium nucleus as shown by the equation below?",
			        "img": "img**chem_1990_sectionb_qst26_1.jpg",
					"opts": {
						"q0": "A. Alpha particles",
						"q1": "B. Beta particles",
						"q2": "C. Gamma rays",
						"q3": "D. Neutrons",
						"q4": "E. X - rays."
					},
					"ans": "A"
				},
				"Q27": {
					"qs": "27. The compound with the structure given below: Where R is an alkyl group is classified as an",
					"img": "img**chem_1990_sectionb_qst27_1.jpg",
					"opts": {
						"q0": "A. alkanoic acid",
						"q1": "B. unsaturated compound",
						"q2": "C. alkyl halide",
						"q3": "D. alkane",
						"q4": "E. aromatic compound."
					},
					"ans": "D"
				},
				"Q28": {
					"qs": "28. Which of the following salts in aqueous solution will have a pH greater than 7?",
					"img": "img**chem_1990_sectionb_qst28_1.jpg,img**chem_1990_sectionb_qst28_2.jpg,img**chem_1990_sectionb_qst28_3.jpg,img**chem_1990_sectionb_qst28_4.jpg,img**chem_1990_sectionb_qst28_5.jpg",
					"opts": {},
					"ans": "E"
				},
				"Q29": {
					"qs": "29. The compound of copper which is used in electroplating, dyeing, printing, wood preservation and as a fungicide is",
					"opts": {
						"q0": "A. copper (II) hydroxide",
						"q1": "B. copper (II) trioxonitrate (V) pentahydrate",
						"q2": "C. copper (II) tetraoxosulphate (VI) pentahydrate",
						"q3": "D. copper (II) oxide",
						"q4": "E. copper (II) trioxocarbonate (IV)."
					},
					"ans": "C"
				},
				"Q30": {
					"qs": "30. What is the molecular formula of a compound whose empirical formula is CH O and molar mass is 180? (H = 1,0 = 12,0 = 16) ",
					"img": "img**chem_1990_sectionb_qst30_1.jpg,img**chem_1990_sectionb_qst30_2.jpg,img**chem_1990_sectionb_qst30_3.jpg,img**chem_1990_sectionb_qst30_4.jpg,img**chem_1990_sectionb_qst30_5.jpg",
					"opts": {},
					"ans": "D"
				},
				"Q31": {
					"qs": "31. MO and X20 represent the formulae of oxides of elements M and X respectively. If M and X should combine to form a separate compound, what would be the formula of the compound?",
					"img": "img**chem_1990_sectionb_qst31_1.jpg,img**chem_1990_sectionb_qst31_2.jpg,img**chem_1990_sectionb_qst31_3.jpg,img**chem_1990_sectionb_qst31_4.jpg,img**chem_1990_sectionb_qst31_5.jpg",
					"opts": {},
					"ans": "A"
				},
				"Q32": {
					"qs": "32. Which of the following pollutants is biodegradable?",
					"opts": {
						"q0": "A. Sewage",
						"q1": "B. Plastics",
						"q2": "C. Metal scraps",
						"q3": "D. Lead compounds",
						"q4": "E. Hydrogen sulphide."
					},
					"ans": "A"
				},
				"Q33": {
					"qs": "33. In the reaction represented by the equation; the oxidation number of sulphur changes from",
					"img": "img**chem_1990_sectionb_qst33_1.jpg",
					"opts": {
						"q0": "A. +2 to +6",
						"q1": "B. +4 to +6",
						"q2": "C. 0 to +6",
						"q3": "D. - 2 to +4",
						"q4": "E. +2 to +4."
					},
					"ans": "B"
				},
				"Q34": {
					"qs": "34. Which of the following equations represents the reaction leading to the removal of permanent hardness of water?",
					"img": "img**chem_1990_sectionb_qst34_1.jpg,img**chem_1990_sectionb_qst34_2.jpg,img**chem_1990_sectionb_qst34_3.jpg,img**chem_1990_sectionb_qst34_4.jpg,img**chem_1990_sectionb_qst34_5.jpg",
					"opts": {},
					"ans": "B"
				},
				"Q35": {
					"qs": "35. The delta(H) value for the reaction A + B -> C + D, represented in the graph is",
			        "img": "img**chem_1990_sectionb_qst35_1.jpg",
					"opts": {
						"q0": "A. +200kjmol^-1",
						"q1": "B. +150kjmol^-1",
						"q2": "C. +50kjmol^-1",
						"q3": "D. -100kjmol^-1",
						"q4": "E. -250kjmol^-1."
					},
					"ans": "C"
				},
				"Q36": {
					"qs": "36. The following alloys contain copper except",
					"opts": {
						"q0": "A. magnelium",
						"q1": "B. duralumin",
						"q2": "C. bronze",
						"q3": "D. brass",
						"q4": "E. type metal."
					},
					"ans": "E"
				},
				"Q37": {
					"qs": "37. The compound with the structural formula below is the product of the complete oxidation of",
					"img": "img**chem_1990_sectionb_qst37_1.jpg",
					"opts": {
						"q0": "A. butan-2-ol",
						"q1": "B. 2-methylbutan-1-ol",
						"q2": "C. propan-2-ol",
						"q3": "D. 2-methylpropan-2-ol",
						"q4": "E. 3-methylbutan-2-ol."
					},
					"ans": "B"
				},
				"Q38": {
					"qs": "38. How many mole of AgN03 are there in 500cm3 of 0.01 M AgN03 solution?",
					"opts": {
						"q0": "A. 0.005 mole",
						"q1": "B. 0.05 mole",
						"q2": "C. 0.5 mole",
						"q3": "D. 1 mole",
						"q4": "E. 5 moles."
					},
					"ans": "A"
				},
				"Q39": {
					"qs": "39. Which of the following statements explains why tetraoxosulphate (VI) acid is regarded as a strong acid?",
					"opts": {
						"q0": "A. Tetraoxosulphate (VI) acid is dibasic",
						"q1": "B. The acid is concentrated",
						"q2": "C. The acid is completely ionized in aqueous solution",
						"q3": "D. Tetraoxosulphate (VI) ions are very reactive",
						"q4": "E. The acid is highly corrosive."
					},
					"ans": "C"
				},
				"Q40": {
					"qs": "40. Which of the following is not correct of glucose and fructose? They",
					"opts": {
						"q0": "A. are structural isomers",
						"q1": "B. reduce Fehling’s solution",
						"q2": "C. can be obtained by the hydrolysis of starch",
						"q3": "D. are readily fermented by enzymes",
						"q4": "E. are soluble in water."
					},
					"ans": "D"
				},
				"Q41": {
					"qs": "41. To what temperature must a gas be raised from 273K in order to double both its volume and pressure?",
					"opts": {
						"q0": "A. 298K",
						"q1": "B. 300K",
						"q2": "C. 546K",
						"q3": "D. 819K",
						"q4": "E. 1092K."
					},
					"ans": "E"
				},
				"Q42": {
					"qs": "42. Which of the following gases are produced when dilute tetraoxosulphate (VI) acid reacts with a mixture of iron filings and iron (II) sulphide?",
					"opts": {
						"q0": "A. Hydrogen and sulphur (IV) oxide",
						"q1": "B. Hydrogen and hydrogen sulphide",
						"q2": "C. Hydrogen sulphide and sulphur (IV) oxide",
						"q3": "D. Sulphur (IV) oxide and sulphur (VI) oxide",
						"q4": "E. Hydrogen sulphide and sulphur (VI) oxide."
					},
					"ans": "B"
				},
				"Q43": {
					"qs": "43. If 3 mole of electrons are required to deposit 1 mole of a metal; M during the electrolysis of its molten chloride, the empirical formula of the metallic chloride is",
					"img": "img**chem_1990_sectionb_qst43_1.jpg,img**chem_1990_sectionb_qst43_2.jpg,img**chem_1990_sectionb_qst43_3.jpg,img**chem_1990_sectionb_qst43_4.jpg,img**chem_1990_sectionb_qst43_5.jpg",
					"opts": {},
					"ans": "E"
				},
				"Q44": {
					"qs": "44. Which of the following explains why trioxonitrate (V) acid is not used for preparing hydrogen from metals?",
					"opts": {
						"q0": "A. It is volatile",
						"q1": "B. It is strongly oxidizing",
						"q2": "C. It forms a layer of oxide on the metal",
						"q3": "D. Trioxonitrate (V) salts are soluble in water",
						"q4": "E. It renders the metals passive."
					},
					"ans": "B"
				},
				"Q45": {
					"qs": "45. Which of the following is normally used for drying ammonia gas?",
					"opts": {
						"q0": "A. Concentrated tetraoxosulphate (VI) acid",
						"q1": "B. Calcium oxide",
						"q2": "C. Anhydrous calcium chloride",
						"q3": "D. Phosphorus (V) oxide",
						"q4": "E. Anhydrous copper (II) tetraoxosulphate (VI)."
					},
					"ans": "B"
				},
				"Q46": {
					"qs": "46. Nuclear reactions can be used in the following except",
					"opts": {
						"q0": "A. gauging the thickness of objects",
						"q1": "B. making atomic bombs",
						"q2": "C. curing cancer",
						"q3": "D. generating electricity",
						"q4": "E. purifying water."
					},
					"ans": "E"
				},
				"Q47": {
					"qs": "47. The decomposition of hydrogen peroxide is represented by the equation: What mass of hydrogen peroxide would be required to produce 22.4dm3 of oxygen at s.t.p.? (H = 1, O = 16, molar volume of a gas at s.t.p. = 22.4dm3)",
					"img": "img**chem_1990_sectionb_qst47_1.jpg",
					"opts": {
						"q0": "A. 18 g",
						"q1": "B. 34 g",
						"q2": "C. 36 g",
						"q3": "D. 64 g",
						"q4": "E. 68 g."
					},
					"ans": "E"
				},
				"Q48": {
					"qs": "48.Which of the following compounds crystallizes without water of crystallization?",
					"img": "img**chem_1990_sectionb_qst48_1.jpg,img**chem_1990_sectionb_qst48_2.jpg,img**chem_1990_sectionb_qst48_3.jpg,img**chem_1990_sectionb_qst48_4.jpg,img**chem_1990_sectionb_qst48_5.jpg",
					"opts": {},
					"ans": "D"
				},
				"Q49": {
					"qs": "49. The following metals are extracted by the electrolytic method except",
					"opts": {
						"q0": "A. potassium",
						"q1": "B. calcium",
						"q2": "C. sodium",
						"q3": "D. tin",
						"q4": "E. magnesium."
					},
					"ans": "D"
				},
				"Q50": {
					"qs": "50. Petrol can be obtained from diesel by",
					"opts": {
						"q0": "A. distillation",
						"q1": "B. cracking",
						"q2": "C. catalysis",
						"q3": "D. polymerization",
						"q4": "E. dehydrogenation."
					},
					"ans": "B"
				}
			}
		});
	});
	
	// app.get('/agricsci/1989', function(req, res) {
	// 	res.json({
			// data: {}
		// });
	// });
};