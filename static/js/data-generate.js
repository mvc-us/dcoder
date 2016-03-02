var keys = ['takeout', 'inside', 'nearby'];
function dateArray() {
	var cur = new Date();
	arr = [];
	for (var i = 1; i <= 25; i++) {
		var dict = {};
		var d = new Date(cur.getFullYear(), cur.getMonth(), cur.getDate(), cur.getHours() + i, 0, 0, 0);
		dict['time'] = d.toString();
		for (var i=0; i<keys.length; i++) {
			var k = keys[i];
			if (cur.getHours() + i > 10 && cur.getHours() + i < 22) {
				dict[k] = largeRange();
			} else {
				dict[k] = smallRange();
			}
		}
		arr.push(dict);

	}
	return arr;
}

function largeRange() {
	return Math.floor((Math.random() * 200) + 30);
}

function smallRange() {
	return Math.floor((Math.random() * 5) + 30);
}