fillFusionTable = function() {
	for( var key in gm.fusionRules ) {
		for( var key2 in gm.fusionRules[key] ) {
			var value = gm.fusionRules[key][key2];
			var inHtml = "";
			inHtml += "<tr>"
			inHtml += "  <td>" + gm.labels[value] + "</td>"
			inHtml += "  <td>=</td>"
			inHtml += "  <td>" + gm.labels[key2] + "</td>"
			inHtml += "  <td>+</td>"
			inHtml += "  <td>" + gm.labels[key] + "</td>"
			inHtml += "</tr>"
			$("#fusionTable").append(inHtml);
		}
	}
}

fillDecayTable = function() {
	for( var key in gm.decay ) {
		var value = gm.decay[key].to;
		var inHtml = "";
		inHtml += "<tr>"
		inHtml += "  <td>" + gm.labels[key] + "</td>"
		inHtml += "  <td>decays to</td>"
		inHtml += "  <td>" + gm.labels[value] + "</td>"
		inHtml += "</tr>"
		$("#decayTable").append(inHtml);
	}
}

//GameManager.prototype.decay = {
//  "7Beryllium": {
//    "multipler": "3",
//    "to": "4Helium"
//  },
//  "8Beryllium": {
//    "multipler": "0.5",
//    "to": "4Helium"
//  },
//  "52Iron": {
//    "multipler": "1",
//    "to": "4Helium"
//  },
//  "56Nickel": {
//    "multipler": "2",
//    "to": "56Iron"
//  }
//}

