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