var win14 = Titanium.UI.createWindow({  
    title:'Sensor/Larm Objekt',
    backgroundColor:'#fff',
    zIndex:2
    // exitOnClose:true
});

var tabGroup = Titanium.UI.createTabGroup();

var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Sensor/Larm Objekt',
    backgroundColor:'#888888',
    window:win14
});

var label3 = Titanium.UI.createLabel({
	color:'#000000',
	text:'',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

tabGroup.addTab(tab3);
tabGroup.open();

var buttontillbaka = Titanium.UI.createButton({
	title:'Tillbaka',
	bottom: 10,
	left: 10,
	zIndex:2
});
win14.add(buttontillbaka);

buttontillbaka.addEventListener('click',function() {
    var winlarmgrupper = Titanium.UI.createWindow({
        url:'larmgrupper.js',
        title:'Sensor/Larm Objekt'
    });
    winlarmgrupper.open({modal:true});
    win14.close();
    win14.hide();
});

win14.add(label3);
win14.open();

var buttonlarmlista = Titanium.UI.createButton({
	title:'Larmlista',
	bottom: 10,
	right: 10,
	zIndex:2
});

buttonlarmlista.addEventListener('click', function() {
    var larmlistawin = Titanium.UI.createWindow({
		url:'larmlistaopenlogger.js',
		title:'Larmlista'
    });
    larmlistawin.open({modal:true});
    win14.close();
    win14.hide();
});
win14.add(buttonlarmlista);

var xhr = Titanium.Network.createHTTPClient();

xhr.onerror = function(e) {
    var error = e.error;
    alert(error);               
};

// http://www.vvt-mediadesign.se/alarmstatus.json
xhr.open('GET', 'http://www.vvt-mediadesign.se/alarmstatus.json');
xhr.send();

xhr.onload = function() {

    var data = [];
    var objekten = JSON.parse(this.responseText);
    
    for (s in objekten) { 
	    var label = Titanium.UI.createLabel ({textAlign:'center',text:'Kvitterade LARM ' + objekten[s],font:{fontWeight:'bold',fontSize:22},color:'#ffffff'});
	    var row = Titanium.UI.createTableViewRow({title:'Kvitterade LARM',backgroundColor:'#ff9933',height:200});
	    row.add(label);
	    data.push(row);
	    
	    var viewalla = Titanium.UI.createTableView({
			height: Titanium.UI.SIZE,
		    width: Titanium.UI.FILL
		});
		win14.add(viewalla);
	}
	
	for (n in objekten) { 
	    var labels = Titanium.UI.createLabel ({textAlign:'center',text:'Nya ' + objekten[s].New,font: {fontWeight: 'bold',fontSize: 22}, color:'#000000'});
	    var rows = Titanium.UI.createTableViewRow({title:'Nya',backgroundColor:'#a9a9a9',height:100});
	    rows.add(labels);
	    data.push(rows);
	    
	    var viewallas = Titanium.UI.createTableView({
			height: Titanium.UI.SIZE,
		    width: Titanium.UI.FILL
		});
		win14.add(viewallas);
	}
	
	for (f in objekten) { 
	    var labelkvitterade = Titanium.UI.createLabel ({textAlign:'center',text:'Kvitterade ' + objekten[s].Signed,font: {fontWeight: 'bold',fontSize: 22}, color:'#000000'});
	    var rowkvitterade = Titanium.UI.createTableViewRow({title:'Kvitterade' ,backgroundColor:'#ffff33',height:100});
	    rowkvitterade.add(labelkvitterade);
	    data.push(rowkvitterade);
	    
	    var viewkvitterade = Titanium.UI.createTableView({
			height: Titanium.UI.SIZE,
		    width: Titanium.UI.FILL
		});
		win14.add(viewkvitterade);
	}
	
	for (v in objekten) { 
	    var labelharatergatt = Titanium.UI.createLabel ({textAlign:'center',text:'Har återgått ' + objekten[s].Returned,font: {fontWeight: 'bold',fontSize: 22}, color:'#000000'});
	    var rowharatergatt = Titanium.UI.createTableViewRow({title:'Har återgått',backgroundColor:'#ffff33',height:100});
	    rowharatergatt.add(labelharatergatt);
	    data.push(rowharatergatt);
	    
	    var viewharhargatt = Titanium.UI.createTableView({
			height: Titanium.UI.SIZE,
		    width: Titanium.UI.FILL
		});
		win14.add(viewharhargatt);
	}

	viewalla.data = data;
	viewallas.data = data;
	viewkvitterade.data = data;
	viewharhargatt.data = data;
};

win14.addEventListener('android:back',function() {
	alert('Använd tillbaka knappen i Applikationen/LarmKlient.');
});