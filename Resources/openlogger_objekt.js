var win4 = Titanium.UI.createWindow({  
    title:'Sensor/Larm Objekt',
    backgroundColor:'#fff',
    zIndex:2
});

var tabGroup = Titanium.UI.createTabGroup();

var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Sensor/Larm Objekt',
    backgroundColor:'#888888',
    window:win4
});

var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:'',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

tabGroup.addTab(tab3);
tabGroup.open();

var button3 = Titanium.UI.createButton({
	title:'Tillbaka',
	bottom: 10,
	left: 10,
	zIndex:2
});
win4.add(button3);

button3.addEventListener('click',function() {
    var win = Titanium.UI.createWindow({
        url:'larmgrupper.js',
        title:'Sensor/Larm Objekt'
    });

    //Titanium.UI.currentTab.open(win,{animated:true}); //if you used tabbar in your app
    win.open(win,{animated:true});
    win4.close();
    win4.hide();
});

win4.add(label3);
win4.open();

var pinButton = Titanium.UI.createButton({
	title:'Pin',
	top: 400,
	width: 120
});
win4.add(pinButton);

var changeButton = Titanium.UI.createButton({
	title:'Change value',
	top: 440,
	width: 120
});
win4.add(changeButton);

var pushButton = Titanium.UI.createButton({
	title:'Bekräfta',
	top: 480,
	width: 120
});
win4.add(pushButton);

var xhr = Titanium.Network.createHTTPClient();
xhr.onerror = function(e) {
	    var error = e.error;
	    alert(error);               
};

// http://www.vvt-mediadesign.se/alarmobjects.json
xhr.open('GET', 'http://www.vvt-mediadesign.se/alarmobjects.json');
xhr.send();

var tv = Titanium.UI.createTableView();
win4.add(tv);

xhr.onload = function() {

    var data = [];
    var objekten = JSON.parse(this.responseText);
    
    for (s in objekten) {
    	
        data.push(Titanium.UI.createTableViewRow({title: " Objektnamn: " + objekten[s][3].ObjectName}));
        data.push(Titanium.UI.createTableViewRow({title: " Aktiv: " + objekten[s][3].Active}));
        data.push(Titanium.UI.createTableViewRow({title: " Larmblock: " + objekten[s][3].AlarmBlock}));
        data.push(Titanium.UI.createTableViewRow({title: " Hög gräns aktiv: " + objekten[s][3].HighLimitActive}));
    }
    tv.data = data;
};