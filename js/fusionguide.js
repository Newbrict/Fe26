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
