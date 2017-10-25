// https://github.com/lorenwest/node-config/wiki/Configuration-Files
module.exports = {
	API_KEY: process.env.API_KEY || '62a22141-fb9d-48b3-8a5b-e27b374f60b4',
	HOST: process.env.HOST || 'https://api.sprucebot.com',
	SKILL_ID: process.env.SKILL_ID || '62a22141-fb9d-48b3-8a5b-e27b374f60b4',
	SKILL_NAME: process.env.SKILL_NAME || 'Base Sprucebot Skill',
	log_colors: {
		error: 'red',
		warn: 'orange',
		info: 'yellow',
		verbose: 'green',
		debug: 'white',
		silly: 'pink'
	}
}
