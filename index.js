var child_process = require('child_process');
var loklak = require('loklak');

var prev = '';

setInterval(function() {
	loklak.search({
		q: 'fart',
		count: 1
	}, function(data) {
		process.stdout.write('.');
		if (data.statuses && data.statuses[0].id_str && prev != data.statuses[0].id_str) {
			console.log("[" + Date() + "]:" + data.statuses[0].text);
			prev = data.statuses[0].id_str;
			child_process.exec('vlc -Idummy --qt-start-minimized --play-and-exit sound.mp3', function(err, stdout, stderr) {
				if (err)
					console.log(err);
			});
		}
	});
}, 2000)
