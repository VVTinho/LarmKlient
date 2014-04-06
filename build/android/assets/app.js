// this sets the background color of the master UIView (when there are no windows/tab groups on it)
// Titanium.UI.setBackgroundColor('#000');

var win1 = Titanium.UI.createWindow({  
    title:'OpenLogger',
    backgroundColor:'#fff'
});

win1.orientationModes = [Titanium.UI.PORTRAIT];

var tabGroup = Titanium.UI.createTabGroup();

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'OpenLogger',
    backgroundColor:'#888888',
    window:win1
});

tabGroup.addTab(tab1);
tabGroup.open();

// Titanium.UI.backgroundColor = 'white';

var wrapper = Titanium.UI.createLabel({
	text: 'LarmKlient',
	color: '#000000',
	top: '16%',
	textAlign:'center',
	font: {
		fontWeight: 'bold',
		fontSize: 22
	},
	height:'auto'
});
win1.add(wrapper);

var wrapperloggain = Titanium.UI.createLabel({
	text: 'Logga In',
	color: '#000000',
	top: '22%',
	textAlign:'center',
	font: {
		fontWeight: 'bold',
		fontSize: 18
	},
	height:'auto'
});
win1.add(wrapperloggain);
win1.open();

var username = Titanium.UI.createTextField({
	top:'36%',
	borderRadius:3,
	hintText:'användarnamn',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	width:'60%',
	height:'auto',
	left:'20%',
	right:'20%',
	touchEnabled: true 
});
win1.add(username);

var pass = Titanium.UI.createTextField({
	top:'46%',
	borderRadius:3,
	hintText:'lösenord',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	width:'60%',
	height:'auto',
	left:'20%',
	right:'20%',
	touchEnabled: true,
	passwordMask: true  
});
win1.add(pass);

var loginBtn = Titanium.UI.createButton({  
	title:'Logga In',  
	top:'54%',  
	width:'60%',  
	height:'10%',  
	borderRadius:1,  
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win1.add(loginBtn);
  
loginBtn.addEventListener('click',function(e) {
	
	// var loginReq = Titanium.Network.createHTTPClient();
	// var url = 'login.json';
	// var json;
	  
    if (username.value == 'ith' && pass.value == 'ithith') {  

	    // loginReq.open("GET",url);  
	    // authstr = 'Basic ' +Titanium.Utils.base64encode(username.value +':' +pass.value); 
	    // loginReq.setRequestHeader('Authorization', authstr);
	
	    // loginReq.send();
	    
	    var win = Titanium.UI.createWindow({
	        url:'larmgrupper.js',
	        title:'Login'
	    });
 		win.open({modal:true});
	    // win1.close();
    	// win1.hide();
	     
	    /* var fileName = 'wordsAndMeanings.json';
		var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, fileName); 
		var preParseData = file.read().text; // file.read() will return the blob. file.read().text is what you want
		var response = JSON.parse(preParseData); */
	}
	else {  
	    alert("Fyll i ditt användarnamn och lösenord");  
	}  
});
/*loginReq.onload = function() {
	  
    var jsonObject = JSON.parse(this.responseText);
    
    console.log("jsonObject " + jsonObject);
    
    
    if (jsonObject[0].Token === "asdfadsfasdfadsf")  
        {  
            alert("Authenticated");  
        }  
    else  
        {  
            alert("response.message");  
        } 
}; */ 
win1.open();

var copyrightLabel = Ti.UI.createLabel({
	text: 'Copyright OpenLogger 2014',
	color: '#000',
	top: '84%',
	textAlign:'center',
	font: {
		fontWeight: 'bold',
		fontSize: 12
	},
	height:'auto'
});
win1.add(copyrightLabel);

win1.addEventListener('android:back',function() {
	alert('Stäng av Aplikationen/LarmKlient genom att trycka på mitt knappen.');
});

// ------------------------- PUSH NOTIFICATION ----------------------------- //

// alert(Ti.Platform.id);

// 85201559b42e688f

// var myPushDeviceToken = "85201559b42e688f";
// var myPushDeviceToken;
 
// var CloudPush = require('ti.cloudpush');//Import the cloud push module. */
 
/*
CloudPush.retrieveDeviceToken({
success : function deviceTokenSuccess(e) {
alert('Current Device Token : ' + e.deviceToken);
myPushDeviceToken = e.deviceToken; // Store the Device Token for subscribe the future use.
},
 
error : function deviceTokenError(e) {
alert('Failed to register for push! ' + e.error);
}
});

var Cloud = require('ti.cloud');//Import the cloud module.

// vladimir.trigueiros@gmail.com

Cloud.Users.create({
    email: 'balubbas@gmail.com',
    first_name: 'Vladimir',
    last_name: 'V.Trigueiros',
    password: 'mavatrordu1234',
    password_confirmation: 'mavatrordu1234'
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'sessionId: ' + Cloud.sessionId + '\n' +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});

// type:'android'

Cloud.PushNotifications.subscribe({
    channel: 'planen',
    device_token: myPushDeviceToken,
    type : 'gcm'
}, function (e) {
    if (e.success) {
        alert('Success');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});*/

//-------------------------------------------------------------

// exports.pushNotification = function()

push();

function push() {
	var hostURL = "http://service.openlogger.se/mobile/register.php?";
	
	var gcm = require('com.activate.gcm');
	Ti.API.info('module gcm is => ' + gcm);
	
	Ti.API.info('Registering...');
	
	gcm.registerC2dm
	( 
		{
			success:function(e) {
				Ti.API.info('JS registration success event: ' + e.registrationId);
				alert('Yeah JS registration success event: ' + e.registrationId);
				alert('Sender ID:' + gcm.getSenderId());
				alert('Registration ID:' + gcm.getRegistrationId());
				
				var appName = Ti.App.name;
				var appVersion = Ti.App.version;
				
				var deviceUUID = Ti.Platform.macaddress; // Ti.Network.remoteDeviceUUID;
				var deviceName = Ti.Platform.username;
				var deviceModel = Ti.Platform.model;
				var deviceSystemVersion = Ti.Platform.version;
				var deviceToken = e.deviceToken;
				var regId = e.registrationId;
				
				//deviceUUID = deviceUUID.replace(/-/ig,'');
				//deviceToken = deviceToken.replace(/<>/ig, '');

				var host = hostURL;
				var urlString = host;
				//urlString += "&appname=" + appName;
				//urlString += "&appversion=" + appVersion;
				//urlString += "&deviceuid=" + deviceUUID;
				urlString += "&devicetoken=" + deviceToken;
				urlString += "&devicename=" + deviceName;
				//urlString += "&devicemodel=" + deviceModel;
				//urlString += "&deviceversion=" + deviceSystemVersion;
				urlString += "regId=" + regId;
				
				var loader = Ti.Network.createHTTPClient();
				loader.setTimeout(60000);
				
				loader.onload = function(evt) {
					alert(evt);
				};
				
				loader.open('GET', urlString, false);
				loader.send();
				
				alert(urlString);
			},
			error:function(e) {
				Ti.API.error("Error during registration : " + e.error);
				alert("Error during registration : " + e.error);
				
				var message;
				if(e.error == "ACCOUNT_MISSING") {
					message = "No Google account found; you will need to add on in order to activate notifications";
				}

				Titanium.UI.createAlertDialog
				(
					{
						title:'Push Notification Setup',
						message:message,
						buttonNames:['OK']
					}
				).show();
			},
			callback:function(e) // called when a push notification is received
			{
				Ti.API.info('JS message event: ' + JSON.stringify(e.data));
				alert('JS message event: ' + JSON.stringify(e.data));

				//same as e.data
				//var data = Ti.App.Properties.getString("com.activate.gcm.last_data","");
				//data = JSON.parse(data);
				//Ti.App.Properties.removeProperty("com.activate.gcm.last_data");
				//Ti.App.Properties.hasProperty("com.activate.gcm.last_data");
				//Ti.Android.NotificationManager.cancelAll();

			}
		}
	);
};
/*
var senderId = '420806563262';

var c2dm = require('com.findlaw.c2dm');
Ti.API.info("module is => " + c2dm);

Ti.API.info('Registering...');
c2dm.registerC2dm(senderId, {
    success:function(e) {
        Ti.API.info('JS registration success event: ' + e.registrationId);

        var params = {devicecode: e.registrationId, deviceType: "Android"};
        JOURNAL.webApi.webCallPOST(JOURNAL.serviceLocatorModel.urls.Membership, "/registerdevice", params, JOURNAL.registerDeviceComplete, JOURNAL.registerDeviceError);
    },
    error:function(e) {
        Ti.API.error("Error during registration: "+e.error);

        var message;
        if(e.error == "ACCOUNT_MISSING") {
            message = "No Google account found; you'll need to add one (in Settings/Accounts) in order to activate notifications";
        } else {
            message = "Error during registration: "+e.error;
        }

        Titanium.UI.createAlertDialog({
            title: 'Push Notification Setup',
            message: message,
            buttonNames: ['OK']
        }).show();
    },
    callback:function(e) // called when a push notification is received
    {
        Ti.API.info('JS message event: ' + JSON.stringify(e.data));

        var intent = Ti.Android.createIntent({
            action: Ti.Android.ACTION_MAIN,
            flags: Ti.Android.FLAG_ACTIVITY_NEW_TASK | Ti.Android.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED,
            className: 'com.geneca.journaling.GenecaJournalingActivity',
            //className: 'org.appcelerator.titanium.TiActivity',
            packageName: 'com.geneca.journaling'
        });
        intent.addCategory(Ti.Android.CATEGORY_LAUNCHER);

        // This is fairly static: Not much need to be altered here
        var pending = Ti.Android.createPendingIntent({
            activity: Ti.Android.currentActivity,
            intent: intent,
            type: Ti.Android.PENDING_INTENT_FOR_ACTIVITY,
        });

        var notification = Ti.Android.createNotification({
            contentIntent: pending,
            contentTitle: 'New message',
            contentText: e.data.message,
            tickerText: "New message"
        });

        Ti.Android.NotificationManager.notify(1, notification);
    }
});*/