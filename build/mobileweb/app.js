// this sets the background color of the master UIView (when there are no windows/tab groups on it)
// Titanium.UI.setBackgroundColor('#000');

var win1 = Titanium.UI.createWindow({  
    title:'OpenLogger',
    backgroundColor:'#fff'
});

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