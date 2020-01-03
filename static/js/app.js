var url = "/pvpstats";

var barDiv = document.getElementById('pvp_chart');




d3.json(`/pvpstats`).then(function(data) {
	// console.log(data);
	const names = [];
	const bpm = [];
	Object.entries(data).forEach(([key, value]) => {
		// console.log(value);
		
		names.push(value.name);
		bpm.push(value['info']['BPM']);
		// console.log(value['info']['BPM']);
	});
	var traceA = {
		x: names,
		y: bpm,
		type: 'bar'
	};
	// var traceB = {
	// 	x: ["Player"],
	// 	y: bpm[1],
	// 	name: names[1],
	// 	type: 'bar'
	// }
	
	var graph = [traceA];
	
	var layout = {
		title: "BPM",
	};
	
	Plotly.newPlot(barDiv, graph, layout);
	// console.log(bpm);
	// console.log(names);

	// console.log(data[0]['info']);
	d3.select("#statspvp")
		.selectAll("tr")
		.data(data)
		.enter()
		.append("tr")
		.html(function(d) {
			// console.log(d);
			return `<td>${d['name']}</td><td>${d['info']['BPM']}</td><td>${d['info']['2P']}</td><td>${d['info']['3P']}</td><td>${parseFloat(d['info']['eFG%']).toFixed(2)+"%"}</td><td>${d['info']['PER']}</td>`;
		});



});


function autocomplete(inp, arr) {
	/*the autocomplete function takes two arguments,
	the text field element and an array of possible autocompleted values:*/
	var currentFocus;
	/*execute a function when someone writes in the text field:*/
	inp.addEventListener("input", function(e) {
		var a, b, i, val = this.value;
		/*close any already open lists of autocompleted values*/
		closeAllLists();
		if (!val) { return false;}
		currentFocus = -1;
		/*create a DIV element that will contain the items (values):*/
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		/*append the DIV element as a child of the autocomplete container:*/
		this.parentNode.appendChild(a);
		/*for each item in the array...*/
		for (i = 0; i < arr.length; i++) {
		  /*check if the item starts with the same letters as the text field value:*/
		  if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
			/*create a DIV element for each matching element:*/
			b = document.createElement("DIV");
			/*make the matching letters bold:*/
			b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
			b.innerHTML += arr[i].substr(val.length);
			/*insert a input field that will hold the current array item's value:*/
			b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
			/*execute a function when someone clicks on the item value (DIV element):*/
				b.addEventListener("click", function(e) {
				/*insert the value for the autocomplete text field:*/
				inp.value = this.getElementsByTagName("input")[0].value;
				/*close the list of autocompleted values,
				(or any other open lists of autocompleted values:*/
				closeAllLists();
			});
			a.appendChild(b);
		  }
		}
	});
	/*execute a function presses a key on the keyboard:*/
	inp.addEventListener("keydown", function(e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
		if (e.keyCode == 40) {
		  /*If the arrow DOWN key is pressed,
		  increase the currentFocus variable:*/
		  currentFocus++;
		  /*and and make the current item more visible:*/
		  addActive(x);
		} else if (e.keyCode == 38) { //up
		  /*If the arrow UP key is pressed,
		  decrease the currentFocus variable:*/
		  currentFocus--;
		  /*and and make the current item more visible:*/
		  addActive(x);
		} else if (e.keyCode == 13) {
		  /*If the ENTER key is pressed, prevent the form from being submitted,*/
		  e.preventDefault();
		  if (currentFocus > -1) {
			/*and simulate a click on the "active" item:*/
			if (x) x[currentFocus].click();
		  }
		}
	});
	function addActive(x) {
	  /*a function to classify an item as "active":*/
	  if (!x) return false;
	  /*start by removing the "active" class on all items:*/
	  removeActive(x);
	  if (currentFocus >= x.length) currentFocus = 0;
	  if (currentFocus < 0) currentFocus = (x.length - 1);
	  /*add class "autocomplete-active":*/
	  x[currentFocus].classList.add("autocomplete-active");
	}
	function removeActive(x) {
	  /*a function to remove the "active" class from all autocomplete items:*/
	  for (var i = 0; i < x.length; i++) {
		x[i].classList.remove("autocomplete-active");
	  }
	}
	function closeAllLists(elmnt) {
	  /*close all autocomplete lists in the document,
	  except the one passed as an argument:*/
	  var x = document.getElementsByClassName("autocomplete-items");
	  for (var i = 0; i < x.length; i++) {
		if (elmnt != x[i] && elmnt != inp) {
		x[i].parentNode.removeChild(x[i]);
	  }
	}
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
	  closeAllLists(e.target);
  });
  }

  var roster = ['Jaylen Brown', 'Carsen Edwards', 'Tacko Fall','Javonte Green','Gordon Hayward','Enes Kanter','Romeo Langford','Semi Ojeleye',
  'Vincent Poirier','Marcus Smart','Jayson Tatum','Daniel Theis','Kemba Walker','Brad Wanamaker','Tremont Waters','Grant Williams','Jarrett Allen',
  'Wilson Chandler','Nicolas Claxton','Spencer Dinwiddie','Kevin Durant','Henry Ellenson','Joe Harris','Kyrie Irving','DeAndre Jordan',
  'Rodions Kurucs','Caris LeVert','Timothé Luwawu-Cabarrot','Džanan Musa','David Nwaba','Theo Pinson','Taurean Prince','Kadeem Allen',
  'RJ Barrett','Ignas Brazdeikis','Reggie Bullock','Damyean Dotson','Wayne Ellington','Taj Gibson','Kevin Knox','Marcus Morris',
  'Frank Ntilikina','Elfrid Payton','Bobby Portis','Ivan Rabb','Julius Randle','Mitchell Robinson','Dennis Smith','Jonah Bolden',
  'Trey Burke','Joel Embiid','James Ennis','Tobias Harris','Al Horford','Furkan Korkmaz','Shake Milton','Raul Neto',"Kyle O'Quinn",'Norvel Pelle',
  'Josh Richardson','Mike Scott','Marial Shayok','Ben Simmons','Zhaire Smith','OG Anunoby','Chris Boucher','Oshae Brissett',
  'Terence Davis','Marc Gasol','Dewan Hernandez','Rondae Hollis-Jefferson','Serge Ibaka','Stanley Johnson','Kyle Lowry',
  'Patrick McCaw','Malcolm Miller','Shamorie Ponds','Norman Powell','Pascal Siakam','Matt Thomas','Ryan Arcidiacono',
  'Wendell Carter','Kris Dunn','Cristiano Felício','Daniel Gafford','Shaquille Harrison','Chandler Hutchison','Luke Kornet','Zach LaVine',
  'Lauri Markkanen','Adam Mokoka','Otto Porter','Tomáš Satoranský','Max Strus','Denzel Valentine','Coby White','Jordan Clarkson',
  'Tyler Cook','Matthew Dellavedova','Darius Garland','John Henson','Brandon Knight','Kevin Love','Alfonzo McKinnie','Larry Nance',
  'Cedi Osman','Kevin Porter','Collin Sexton','Tristan Thompson','Dean Wade','Dylan Windler','Jordan Bone','Bruce Brown','Sekou Doumbouya','Andre Drummond',
  'Tim Frazier','Langston Galloway','Blake Griffin','Reggie Jackson','Luke Kennard','Louis King','Thon Maker','Markieff Morris','Sviatoslav Mykhailiuk',
  'Derrick Rose','Tony Snell','Khyri Thomas','Goga Bitadze','Brian Bowen','Malcolm Brogdon','Aaron Holiday','Justin Holiday',
  'Alize Johnson','Jeremy Lamb','T. J. Leaf','T. J. McConnell','Doug McDermott','Naz Mitrou-Long','Victor Oladipo','Domantas Sabonis',
  'JaKarr Sampson','Edmond Sumner','Myles Turner','Giannis Antetokounmpo','Thanasis Antetokounmpo','Dragan Bender','Eric Bledsoe',
  'Sterling Brown','Pat Connaughton','Donte DiVincenzo','George Hill','Ersan İlyasova','Kyle Korver','Brook Lopez','Robin Lopez',
  'Frank Mason','Wesley Matthews','Khris Middleton','Cameron Reynolds',"DeAndre' Bembry",'Charlie Brown','Vince Carter','John Collins',
  'Allen Crabbe','Bruno Fernando','Brandon Goodwin','Kevin Huerter',"De'Andre Hunter",'Damian Jones','Alex Len','Jabari Parker','Chandler Parsons',
  'Cam Reddish','Evan Turner','Tyrone Wallace','Dwayne Bacon','Nicolas Batum','Bismack Biyombo','Miles Bridges','Robert Franks',
  "Devonte' Graham",'Willy Hernangómez','Michael Kidd-Gilchrist','Caleb Martin','Cody Martin','Jalen McDaniels','Malik Monk',
  'Terry Rozier','Kobi Simmons','P. J. Washington','Marvin Williams','Bam Adebayo','Jimmy Butler','Goran Dragic','Udonis Haslem',
  'Tyler Herro','James Johnson','Derrick Jones','Meyers Leonard','Daryl Macon','Kendrick Nunn','KZ Okpala','Kelly Olynyk','Duncan Robinson',
  'Chris Silva','Dion Waiters','Al-Farouq Aminu','D. J. Augustin','Mohamed Bamba','Khem Birch','Michael Carter-Williams','Evan Fournier',
  'Melvin Frazier','Markelle Fultz','Aaron Gordon','Jonathan Isaac','Wes Iwundu','Amile Jefferson','Josh Magette','Terrence Ross',
  'Bradley Beal','Dāvis Bertāns','Isaac Bonga','Troy Brown','Thomas Bryant','Chris Chiozza','Rui Hachimura','Ian Mahinmi','Garrison Mathews',
  'Jordan McRae','C. J. (GL) Miles','Justin Robinson','Admiral Schofield','Ish Smith','Isaiah Thomas','Moritz Wagner','J. J. Barea',
  'Ryan Broekhoff','Jalen Brunson','Antonius Cleveland','Seth Curry','Luka Dončić','Dorian Finney-Smith','Tim Hardaway','Justin Jackson',
  'Maxi Kleber','Courtney Lee','Boban Marjanović','Kristaps Porziņģis','Dwight Powell','Josh Reaves','Isaiah Roby','Ryan Anderson','Clint Capela',
  'Tyson Chandler','Gary Clark','Chris Clemons','Michael Frazier','Eric Gordon','Gerald Green','James Harden','Isaiah Hartenstein',
  'Danuel House','Ben McLemore','Nenê','Austin Rivers','Thabo Sefolosha','P. J. Tucker','Grayson Allen','Kyle Anderson','Dillon Brooks',
  'Bruno Caboclo','Brandon Clarke','Jae Crowder','Marko Gudurić','Solomon Hill','Andre Iguodala','Jaren Jackson','Josh Jackson','Tyus Jones',
  'John Konchar',"De'Anthony Melton",'Ja Morant','Jonas Valančiūnas','Nickeil Alexander-Walker','Lonzo Ball','Zylan Cheatham',
  'Derrick Favors','Josh Gray','Josh Hart','Jaxson Hayes','Jrue Holiday','Brandon Ingram','Frank Jackson','Nicolò Melli','Darius Miller',
  "E'Twaun Moore",'Jahlil Okafor','JJ Redick','Kenrich Williams','LaMarcus Aldridge','Marco Belinelli','DeMarre Carroll','DeMar DeRozan',
  'Drew Eubanks','Bryn Forbes','Rudy Gay','Keldon Johnson','Trey Lyles','Chimezie Metu','Patty Mills','Dejounte Murray','Jakob Pöltl',
  'Luka Šamanić','Lonnie Walker','Quinndary Weatherspoon','Will Barton','Malik Beasley','Bol Bol','Vlatko Čančar','Torrey Craig','P. J. Dozier',
  'Jerami Grant','Gary Harris','Juan Hernangómez','Nikola Jokić','Paul Millsap','Monté Morris','Jamal Murray','Mason Plumlee','Michael Porter',
  'Keita Bates-Diop','Jordan Bell','Robert Covington','Jarrett Culver','Gorgui Dieng','Treveon Graham','Jake Layman','Kelan Martin',
  'Jordan McLaughlin','Shabazz Napier','Jaylen Nowell','Josh Okogie','Naz Reid','Jeff Teague','Karl-Anthony Towns','Noah Vonleh',
  'Steven Adams','Darius Bazley','Deonte Burton','Hamidou Diallo','Luguentz Dort','Terrance Ferguson','Danilo Gallinari','Shai Gilgeous-Alexander',
  'Devon Hall','Mike Muscala','Abdel Nader','Nerlens Noel','Justin Patton','Chris Paul','André Roberson','Kent Bazemore','Moses Brown',
  'Zach Collins','Pau Gasol','Mario Hezonja','Jaylen Hoard','Rodney Hood','Skal Labissière','Damian Lillard','Nassir Little','CJ McCollum',
  'Jusuf Nurkić','Anfernee Simons','Anthony Tolliver','Gary Trent','Bojan Bogdanović','Tony Bradley','Jarrell Brantley','Mike Conley',
  'Ed Davis','Dante Exum','Rudy Gobert','Jeff Green','Joe Ingles','Stanton Kidd','Donovan Mitchell','Emmanuel Mudiay','Georges Niang',
  "Royce O'Neale",'Miye Oni','Nigel Williams-Goss','Ky Bowman','Alec Burks','Willie Cauley-Stein','Marquese Chriss','Stephen Curry',
  'Jacob Evans','Draymond Green','Damion Lee','Kevon Looney','Eric Paschall','Jordan Poole','Glenn Robinson',"D'Angelo Russell",'Alen Smailagić',
  'Omari Spellman','Patrick Beverley','Amir Coffey','Paul George','JaMychal Green','Maurice Harkless','Montrezl Harrell','Mfiondu Kabengele',
  'Kawhi Leonard','Terance Mann','Rodney McGruder','Johnathan Motley','Patrick Patterson','Jerome Robinson','Landry Shamet','Derrick Walton',
  'Lou Williams','Kostas Antetokounmpo','Avery Bradley','Kentavious Caldwell-Pope','Alex Caruso','Quinn Cook','DeMarcus Cousins','Troy Daniels',
  'Anthony Davis','Jared Dudley','Danny Green','Talen Horton-Tucker','Dwight Howard','LeBron James','Kyle Kuzma','JaVale McGee',
  'Zach Norvell','Deandre Ayton','Aron Baynes','Devin Booker','Mikal Bridges','Jevon Carter','Cheick Diallo','Jared Harper','Ty Jerome',
  'Cameron Johnson','Tyler Johnson','Frank Kaminsky','Jalen Lecque','Élie Okobo','Kelly Oubre','Ricky Rubio','Trevor Ariza','Marvin Bagley',
  'Harrison Barnes','Nemanja Bjelica','Bogdan Bogdanović','Dewayne Dedmon','Yogi Ferrell',"De'Aaron Fox",'Wenyen Gabriel','Harry Giles',
  'Kyle Guy','Buddy Hield','Richaun Holmes','Justin James','DaQuan Jeffries','Cory Joseph',
  'Klay Thompson', 'Clyde Lovellette','Wes Unseld','William Gates','K.C. Jones','Lenny Wilkens','Dave Bing','Elvin Hayes',
  'Neil Johnston','Earl Monroe','Nate Archibald','Dave Cowens','Harry Gallatin','Sergei Belov','Lusia Harris-Stewart','Connie Hawkins',
  'Bob Lanier','Nera White','Walt Bellamy','Julius Erving','Dan Issel','Dick McGuire','Ann Meyers','Calvin Murphy','Uļjana Semjonova',
   'Bill Walton','Carol Blazejowski','Buddy Jeannette','Kareem Abdul-Jabbar','Anne Donovan','Vern Mikkelsen','Cheryl Miller',
  'Krešimir Ćosić','George Gervin','Gail Goodrich','Nancy Lieberman','David Thompson','George Yardley','Joan Crawford','Denise Curry',
   'Alex English','Bailey Howell','Larry Bird','Marques Haynes','Arnie Risen','Kevin McHale','Bob McAdoo','Isiah Thomas',
   'Moses Malone','Magic Johnson','Dražen Petrović','Dino Meneghin','Robert Parish','James Worthy','Dražen Dalipagić',
   'Clyde Drexler','Maurice Stokes','Lynette Woodard','Hortencia de Fatima Marcari','Charles Barkley','Joe Dumars','Dominique Wilkins',
   'Adrian Dantley','Patrick Ewing','Hakeem Olajuwon','Michael Jordan','David Robinson','John Stockton','Cynthia Cooper-Dyke',
   'Dennis Johnson','Gus Johnson','Karl Malone','Ubiratan Pereira Maciel','Scottie Pippen','Dennis Rodman','Chris Mullin',
   'Arvydas Sabonis','Artis Gilmore','Teresa Edwards','Goose Tatum','Mel Daniels','Katrina McClain','Reggie Miller','Ralph Sampson',
   'Chet Walker','Jamaal Wilkes','Roger Brown','Bernard King','Gary Payton','Richie Guerin','Dawn Staley',
   'Šarūnas Marčiulionis','Alonzo Mourning','Mitch Richmond','Guy Rodgers','Louie Dampier','Spencer Haywood','John Isaacs',
   'Lisa Leslie','Dikembe Mutombo','Jo Jo White','Yao Ming','Cumberland Posey','Sheryl Swoopes','Zelmo Beaty',"Shaquille O'Neal",
   'Allen Iverson','Tracy McGrady','Nikos Galis','George McGinnis','Ray Allen','Maurice Cheeks','Grant Hill','Jason Kidd',
   'Steve Nash','Katie Smith','Tina Thompson','Ora Mae Washington','Dino Rađa','Charlie Scott','Carl Braun','Chuck Cooper',
   'Vlade Divac','Bobby Jones','Sidney Moncrief','Jack Sikma','Teresa Weatherspoon','Paul Westphal'];



  autocomplete(document.getElementById("pvp1"), roster);
  autocomplete(document.getElementById("pvp2"), roster);


// function tabulateLeft(data, columns) {
// 	var table = d3.select('stats1').append('table')
// 	var thead = table.append('thead')
// 	var	tbody = table.append('tbody');

// 	// append the header row
// 	thead.append('tr')
// 	  .selectAll('th')
// 	  .data(columns).enter()
// 	  .append('th')
// 		.text(function (column) { return column; });

// 	// create a row for each object in the data
// 	var rows = tbody.selectAll('tr')
// 	  .data(data)
// 	  .enter()
// 	  .append('tr');

// 	// create a cell in each row for each column
// 	var cells = rows.selectAll('td')
// 	  .data(function (row) {
// 		return columns.map(function (column) {
// 		  return {column: column, value: row[column]};
// 		});
// 	  })
// 	  .enter()
// 	  .append('td')
// 		.text(function (d) { return d.value; });

//   return table;
// }

// // render the table(s)
// tabulateLeft([data[0]["info"]], ["BPM", "2P", "3P", "AST", "eFG%", "PER"]);

// function tabulateRight(data, columns) {
// 	var table = d3.select('stats2').append('table')
// 	var thead = table.append('thead')
// 	var	tbody = table.append('tbody');

// 	// append the header row
// 	thead.append('tr')
// 	  .selectAll('th')
// 	  .data(columns).enter()
// 	  .append('th')
// 		.text(function (column) { return column; });

// 	// create a row for each object in the data
// 	var rows = tbody.selectAll('tr')
// 	  .data(data)
// 	  .enter()
// 	  .append('tr');

// 	// create a cell in each row for each column
// 	var cells = rows.selectAll('td')
// 	  .data(function (row) {
// 		return columns.map(function (column) {
// 		  return {column: column, value: row[column]};
// 		});
// 	  })
// 	  .enter()
// 	  .append('td')
// 		.text(function (d) { return d.value; });

//   return table;
// }

// render the table(s)












// var svgWidth = 1000;
// var svgHeight = 750;

// var chartMargin = {
// 	top:30,
// 	right: 30,
// 	bottom: 30,
// 	left: 30
// };

// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// var svg = d3.select("#pvp_chart")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);

// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// function buildPlot() {
// 	d3.csv("../../career_best.csv", function(d) {
//   return {
//     year: new Date(+d.Year, 0, 1), // convert "Year" column to Date
//     make: d.BPM,
//     model: d["2P"],
//     length: +d["3P"] // convert "Length" column to number
//   };
// }, function(error, rows) {
//   console.log(rows);
// });
// 	};
// ;
// buildPlot();

// playerz.forEach(function(d) {
// 	d.BPM = +d.BPM;
// });

// var xBandScale = d3.scaleBand()
//     .domain(playerz.map(d => d.Player))
//     .range([0, chartWidth])
//     .padding(0.1);

// var yLinearScale = d3.scaleLinear()
//     .domain([0, d3.max(playerz, d => d.BPM)])
//     .range([chartHeight, 0]);

// var bottomAxis = d3.axisBottom(xBandScale);
// var leftAxis = d3.axisLeft(yLinearScale).ticks(10);

// chartGroup.append("g")
//     .call(leftAxis);

// chartGroup.append("g")
//     .attr("transform", `translate(0, ${chartHeight})`)
//     .call(bottomAxis);

// chartGroup.selectAll(".bar")
//     .data(tvData)
//     .enter()
//     .append("rect")
//     .attr("class", "bar")
//     .attr("x", d => xBandScale(d.Player))
//     .attr("y", d => yLinearScale(d.BPM))
//     .attr("width", xBandScale.bandwidth())
//     .attr("height", d => chartHeight - yLinearScale(d.BPM));
// });








// d3.json(url, function(info) {
// 		console.log(info);

// 		const names = info[0][3];
// 		console.log(names);





// function buildPlot() {
// 	console.log('hello');
// 	var url = "/pvpstats";
// 	d3.json(url, function(info) {
// 		console.log(info);

// 		const names = info[0][3];
// 		console.log(names);
// 	});
// };
// buildPlot();





// // Testing Testin 123
// var barDiv = document.getElementById('pvp_chart');

// var traceA = {
// 	x: ["jason", "emily", "nico", "rebecca"],
// 	y: [3, 5, 192, 5],
// 	type: 'bar'
// };

// var data = [traceA];

// var layout = {
// 	title: "testing"
// };
// Plotly.newPlot(barDiv, data, layout);