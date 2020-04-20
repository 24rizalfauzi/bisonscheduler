'use strict'

var env = process.env.NODE_ENV

if (env==='dev') {
	//APP
	var portApp		= 8513
	//DB
	var host     	= 'localhost'
	var user     	= 'root'
	var password	= ''
	var database 	= 'bison_db'
	//EMAIL
	var mailSender 		= '"Rizal Fauzi" <24rizalfauzi@gmail.com>'
	var smtpHost		= 'smtp.gmail.com'
	var smtpPort		= 587
	var smtpAuthUser	= '24rizalfauzi@gmail.com'
	var smtpAuthPass	= '"84d=CEg_`S(@SwN'
	//GIT
	var dirbisonmiddleware		= 'E:/EP/BISONDOCS/github/prod/bison_middleware' // tempat folder middleware di server
	var dirbisonscheduler		= 'E:/EP/BISONDOCS/github/prod/bison_scheduler' // tempat folder scheduler di server
	var dirbisonweb				= 'E:/xampp/htdocs/bisonweb' //bisonweb yang ada di htdocs
	var gitpullbisonmiddleware	= 'git pull https://24rizalfauzi:*****r1zalf4Uzi*****@github.com/24rizalfauzi/bisonmiddleware.git' //buat pull otomatis
	var gitpullbisonweb			= 'git pull https://24rizalfauzi:*****r1zalf4Uzi*****@github.com/24rizalfauzi/bisonweb.git' //buat pull otomatis
	var gitpullbisonscheduler	= 'git pull https://24rizalfauzi:*****r1zalf4Uzi*****@github.com/24rizalfauzi/bisonscheduler.git' //buat pull otomatis
} else if (env==='test') {
	//APP
	var portApp		= 8513
	//DB
	var host     = 'localhost'
	var user     = 'rizalbek_bsi'
	var password = '0~=e~*=(s!oD'
	var database = 'rizalbek_bsi'
	//EMAIL
	var mailSender 	= '"Rizal Fauzi" <24rizalfauzi@gmail.com>'
	var smtpHost		= 'smtp.gmail.com'
	var smtpPort		= 587
	var smtpAuthUser	= '24rizalfauzi@gmail.com'
	var smtpAuthPass	= '"84d=CEg_`S(@SwN'
} else if (env==='prod') {
	//APP
	var portApp		= 8513
	//DB
	var host     	= 'localhost'
	var user     	= 'root'
	var password	= ''
	var database 	= 'bison_db'
	//EMAIL
	var mailSender 	= '"Rizal Fauzi" <24rizalfauzi@gmail.com>'
	var smtpHost		= 'smtp.gmail.com'
	var smtpPort		= 587
	var smtpAuthUser	= '24rizalfauzi@gmail.com'
	var smtpAuthPass	= '"84d=CEg_`S(@SwN'
	//GIT
	var dirbisonmiddleware		= 'E:/EP/BISONDOCS/github/prod/bison_middleware' // tempat folder middleware di server
	var dirbisonscheduler		= 'E:/EP/BISONDOCS/github/prod/bison_scheduler' // tempat folder scheduler di server
	var dirbisonweb				= 'E:/xampp/htdocs/bisonweb' //bisonweb yang ada di htdocs
	var gitpullbisonmiddleware	= 'git pull https://24rizalfauzi:*****r1zalf4Uzi*****@github.com/24rizalfauzi/bisonmiddleware.git' //buat pull otomatis
	var gitpullbisonweb			= 'git pull https://24rizalfauzi:*****r1zalf4Uzi*****@github.com/24rizalfauzi/bisonweb.git' //buat pull otomatis
	var gitpullbisonscheduler	= 'git pull https://24rizalfauzi:*****r1zalf4Uzi*****@github.com/24rizalfauzi/bisonscheduler.git' //buat pull otomatis
}
//APP
module.exports.portApp	= portApp
//DB
module.exports.host     = host
module.exports.user     = user
module.exports.password = password
module.exports.database = database
//EMAIL
module.exports.smtpHost 	= smtpHost
module.exports.smtpPort 	= smtpPort
module.exports.smtpAuthUser = smtpAuthUser
module.exports.smtpAuthPass = smtpAuthPass
module.exports.mailSender 	= mailSender
//GIT
module.exports.dirbisonmiddleware		= dirbisonmiddleware
module.exports.dirbisonweb				= dirbisonweb
module.exports.dirbisonscheduler		= dirbisonscheduler
module.exports.gitpullbisonmiddleware	= gitpullbisonmiddleware
module.exports.gitpullbisonscheduler	= gitpullbisonscheduler