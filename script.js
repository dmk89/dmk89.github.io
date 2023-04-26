	window.playerLoad = async (src) => {
		if (window.isMusicActive) {
			window.music.src = src
			window.music.load()
			
			try {
				music.title = "Audionautix - " + /[^\/]*$/.exec(src)[0]
			} catch (err) {
				window.WKLog(err.message + '\n' + err.stack)
			}
			
			window.WKLoad(src)
		}
	}
