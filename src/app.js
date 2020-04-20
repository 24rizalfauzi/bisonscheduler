'use strict';

global.config = require('./config.js')

var sys = require('sys')
var exec = require('child_process').exec;

pullweb()
pullmiddeware()

var request = require('request');
request = request.defaults({
    //'proxy':config.proxyPass,
    //'rejectUnauthorized': false,
    headers: {
        'Authorization': 'key=AAAA8siWdgE:APA91bGBUap3FfMAKmE7NMICID5k8k36SC_EaWO8W7C9YzibQLrOfz1hXGz5pmhi0JHEdzJ7EJ4zgwDvv6ZgEopD-0JiftYazBKmTIrSoIK9tZ7XXeW3sZ4lca7s2q-zF6-TbMLawpOj',
        'Content-Type' : 'application/json'
    }
})

//pull code
var CronJob = require('cron').CronJob;
var job = new CronJob('0 45 1 * * *', async function() {
  await pullweb()
  await pullmiddeware()
}, null, true, 'America/Los_Angeles')
job.start()

// //push notif
// var CronJob = require('cron').CronJob;
// var job = new CronJob('*/5 * * * * *', async function() {
//   await parsingQueryNotifThenSend()
// }, null, true, 'America/Los_Angeles')
// job.start()

// //push email
// var CronJob = require('cron').CronJob;
// var job = new CronJob('*/20 * * * * *', async function() {
//   await parsingQueryPushEmailThenSend()
// }, null, true, 'America/Los_Angeles')
// job.start()

// //push email ke admin, user yang tidak aktif > 7 hari
// var CronJob = require('cron').CronJob;
// var job = new CronJob('0 45 8 * * *', async function() {
//   await parsingUsersLastActiveThenSend()
// }, null, true, 'Asia/Jakarta')
// job.start()

async function pullweb(){
    var command = "cd "+config.dirbisonweb+"&&git init&&"+config.gitpullbisonweb
    console.log(command)
    var execweb = exec(command, function(err, stdout, stderr) {
        if (err) {
            // should have err.code here?  
            console.log(err)
        }
        console.log('stdout :');
        console.log(stdout);
    });

    execweb.on('exit', function (code) {
        // exit code is code
        console.log(code)
    });
}

async function pullmiddeware(){
    var command = `cd ${config.dirbisonmiddleware}`+
                    `&&git init`+
                    `&&${config.gitpullbisonmiddleware}`
    console.log(command)
    var execmiddleware = exec(command, function(err, stdout, stderr) {
        if (err) {
            // should have err.code here?  
            console.log(err)
        }
        console.log('stdout :');
        console.log(stdout);
    });

    execmiddleware.on('exit', function (code) {
        // exit code is code
        console.log(code)
    });
}

// async function parsingQueryNotifThenSend(){
//     var queryPushNotif = await query(`call procGetPushNotif()`)
//     for (let i = 0; i < queryPushNotif[0].length; i++) {
//         var options = {
//             headers: {
//                 'Authorization': 'key=AAAA8siWdgE:APA91bGBUap3FfMAKmE7NMICID5k8k36SC_EaWO8W7C9YzibQLrOfz1hXGz5pmhi0JHEdzJ7EJ4zgwDvv6ZgEopD-0JiftYazBKmTIrSoIK9tZ7XXeW3sZ4lca7s2q-zF6-TbMLawpOj',
//                 'Content-Type' : 'application/json'
//             },
//             uri: 'https://fcm.googleapis.com/fcm/send',
//             method: 'POST',
//             json: {
//                     "notification":{
//                       "title":"closed app Bison Notification",
//                       "body":queryPushNotif[0][i].message,
//                       "sound":"default",
//                       "click_action":"FCM_PLUGIN_ACTIVITY",
//                       "forceStart": "1",
//                       "icon":"fcm_push_icon"
//                     },
//                     "data":{
//                       "landing_page":"tabs/tab2",
//                       "price":"$3,000.00",
//                       "forceStart": "1"
//                     },
//                       "to":queryPushNotif[0][i].token_firebase,
//                       "priority":"high",
//                       "restricted_package_name":""
//                   }
//           };
          
//           request(options, function (error, response, body) {
//             if (!error && response.statusCode == 200) {
//               console.log('sukses push notif')
//             }
//         });
//         await query(`call procUpdateIsPushNotif(`+queryPushNotif[0][i].id+`)`)
//     }
// }

// async function parsingUsersLastActiveThenSend(){

//     console.log('parsing inactive User then send email to admin')

//     var queryGetAdmins = await query(`call procGetAdmins()`)
//     var queryGetUsers = await query(`call procGetUsers()`)

//     var emailAdmins = []
//     for (var i = 0; i < queryGetAdmins[0].length; i++) {
//         emailAdmins.push(queryGetAdmins[0][i].email)
//     }


//     var currentTimestamp = Date.now()

//     var lastActive
//     var selisih
//     var dateSelisih
//     var dayInactive

//     var emailText = 'Berikut adalah list User yang tidak aktif selama lebih dari 7 hari : '
//     for (var i = 0; i < queryGetUsers[0].length; i++) {
//         lastActive = Date.parse(queryGetUsers[0][i].updated_date);
//         lastActive = lastActive || 0
//         selisih = currentTimestamp-lastActive
//         dateSelisih = new Date(selisih)
//         dayInactive = dateSelisih.getDate()
//         if (dayInactive>7) {
//             emailText = emailText + '#' + queryGetUsers[0][i].nip +' '+ queryGetUsers[0][i].name+', '
//         }
//     }

//     console.log(emailText)

//     var doit = await sendEmail({
//         userEmail : emailAdmins,
//         subject : 'List User yang tidak aktif selama lebih dari 7 hari - Bali Smart Innovation',
//         text : emailText,
//         html : emailText
//     })

// }

// async function parsingQueryPushEmailThenSend(){
//     console.log('parsing push email then send')
//     var queryPushEmail = await query(`call procGetPushEmail()`)
//     var doit = null
//     for (var i = 0; i < queryPushEmail[0].length; i++) {
//         doit = await sendEmailThenUpdateTableWhenSuccess({
//             emailId : queryPushEmail[0][i].emailId,
//             userEmail : queryPushEmail[0][i].email,
//             subject : queryPushEmail[0][i].subject,
//             text : queryPushEmail[0][i].text,
//             html : queryPushEmail[0][i].html,
//             attachments : queryPushEmail[0][i].attachments
//         })
//     }
// }

// async function parsingQueryPushNotifThenSend(){
//     console.log('parsing push notif then send')
//     var queryPushNotif = await query(`call procGetPushNotif()`)
//     var doit = null
//     for (var i = 0; i < queryPushNotif[0].length; i++) {
//         doit = await pushNotifThenUpdateTableWhenSuccess({
//             notifId : queryPushNotif[0][i].notifId,
//             token : queryPushNotif[0][i].token,
//             message : queryPushNotif[0][i].message
//         })
//     }
// }

// async function pushNotifThenUpdateTableWhenSuccess(req) {
// return new Promise(function (resolve, reject) {
//         try {
//             (async () => {
//                 await query(`call procUpdateSendPushNotif("`+req.notifId+`","true");`)
//                 resolve('success push notif id:'+req.notifId)
//             })()
//         } catch (error) {
//             console.log('errPushNotif : '+error)
//             reject('errPushNotif : '+error)
//         }
//     })
// }

// async function sendEmail(req) {
// return new Promise(function (resolve, reject) {
//         try {
//             (async () => {
//                 const nodemailer = require('nodemailer')
//                 nodemailer.createTestAccount((err, account) => {
//                     // create reusable transporter object using the default SMTP transport
//                     let transporter = nodemailer.createTransport({
//                         host: config.smtpHost,
//                         port: config.smtpPort,
//                         secure: false, // true for 465, false for other ports
//                         auth: {
//                             user: config.smtpAuthUser, // generated ethereal user
//                             pass: config.smtpAuthPass // generated ethereal password
//                         }
//                     })

//                     // setup email data with unicode symbols
//                     let mailOptions = {
//                         from: config.mailSender, // sender address
//                         to: req.userEmail, // list of receivers
//                         subject: req.subject, // Subject line
//                         text: req.text, // plain text body
//                         html: req.html // html body
//                     };

//                     // send mail with defined transport object
//                     transporter.sendMail(mailOptions, (error, info) => {
//                         (async () => {
//                             if (error) {
//                                 console.log('errSendEmail code 1 : ' + error)
//                                 reject('errSendEmail code 1 : ' + error)
//                             } else {
//                                 resolve('success send email to Admin : User inactive > 7 days')
//                             }
//                         })()
//                     })
//                 })
//             })()
//         } catch (error) {
//             reject('errSendEmail code 2 : ' + error) 
//         }
//     })
// }

// async function sendEmailThenUpdateTableWhenSuccess(req) {
// return new Promise(function (resolve, reject) {
//         try {
//             (async () => {
//                 const nodemailer = require('nodemailer')
//                 nodemailer.createTestAccount((err, account) => {
//                     // create reusable transporter object using the default SMTP transport
//                     let transporter = nodemailer.createTransport({
//                         host: config.smtpHost,
//                         port: config.smtpPort,
//                         secure: false, // true for 465, false for other ports
//                         auth: {
//                             user: config.smtpAuthUser, // generated ethereal user
//                             pass: config.smtpAuthPass // generated ethereal password
//                         }
//                     })

//                     // setup email data with unicode symbols
//                     let mailOptions = {
//                         from: config.mailSender, // sender address
//                         to: req.userEmail, // list of receivers
//                         subject: req.subject, // Subject line
//                         text: req.text, // plain text body
//                         html: req.html // html body
//                     };

//                     // send mail with defined transport object
//                     transporter.sendMail(mailOptions, (error, info) => {
//                         (async () => {
//                             if (error) {
//                                 console.log('errSendEmail code 1 : ' + error)
//                                 reject('errSendEmail code 1 : ' + error)
//                             } else {
//                                 await query(`call procUpdateSendPushEmail(`+req.emailId+`,"true")`)
//                                 resolve('success send email id:'+req.emailId)
//                             }
//                         })()
//                     })
//                 })
//             })()
//         } catch (error) {
//             reject('errSendEmail code 2 : ' + error) 
//         }
//     })
// }


// async function query(query) {
// return new Promise(function (resolve, reject) {
//         try {
//             var mysql      = require('mysql')
//             var connection = mysql.createConnection({
//               host     : config.host,
//               user     : config.user,
//               password : config.password,
//               database : config.database
//             })                 
//             connection.connect()
//             connection.query(query, function (error, results, fields) {
//                 if (error) {
//                     console.log('error database code 1' + error)
//                     resolve('errdb1')
//                 }
//                 resolve(results)
//             })
//             connection.end()
//         } catch (error) {
//             console.log('error database code 2' + error)
//             resolve('errdb2')
//         }
//     })
// }