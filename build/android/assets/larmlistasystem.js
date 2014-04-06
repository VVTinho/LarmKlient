var win18 = Titanium.UI.createWindow({  
    title:'Larmlista',
    backgroundColor:'#fff',
    zIndex:3
});

win18.orientationModes = [Titanium.UI.PORTRAIT];

var tabGroup = Titanium.UI.createTabGroup();

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Larmlista',
    backgroundColor:'#888888',
    window:win18
});

tabGroup.addTab(tab1);
tabGroup.open();

var buttontillbaka = Titanium.UI.createButton({
	title:'Tillbaka',
	bottom: 10,
	left: 10,
	zIndex:3
});
win18.add(buttontillbaka);

buttontillbaka.addEventListener('click',function() {
    var winlarmlistasystem = Titanium.UI.createWindow({
        url:'larmgrupper.js',
        title:'Sensor/Larm Grupper'
    });
    winlarmlistasystem.open({modal:true});
    win18.close();
    win18.hide();
});

var button1 = Titanium.UI.createButton({ 
	title :'Hämta',
	bottom:10,
	right:10,
	zIndex:3
});
	    
button1.addEventListener('click',function() {
  
 	var winallaobjekt = Titanium.UI.createWindow({
		url:'kontoretoppenlogger.js',
		title:'Larm'
	});
    winallaobjekt.open({modal:true});
    win18.close();
    win18.hide();
});
win18.add(button1);

win18.open();

var xhr = Titanium.Network.createHTTPClient();

xhr.onerror = function(e) {
	    var error = e.error;
	    alert(error);               
};

// http://www.vvt-mediadesign.se/alarmobjects.json
xhr.open('GET', 'http://www.vvt-mediadesign.se/alarmobjects.json');
xhr.send();

var viewtable = Titanium.UI.createTableView({
	maxRowHeight:40,
	minRowHeight:30,
	height: Titanium.UI.SIZE,
    width: Titanium.UI.FILL,
    color: 'black'
});
win18.add(viewtable);

xhr.onload = function() {

    var data = [];
    var objekten = JSON.parse(this.responseText);
    
    for (s in objekten) {
    	// data.push(Titanium.UI.createTableViewRow({title: " Objektnamn: " + objekten[s][0].ObjectName + " Aktiv: " + objekten[s][0].Active}));
        data.push(Titanium.UI.createTableViewRow({title: " System: " + objekten[s][0].ObjectName + " Larmtid:" + " Larmtyp:" + " Gräns:"}));
        // 1 = Mätobjekt beskrivning
        // 2 = Larmtid
        // 3 = Larmtyp
        // 4 = Gräns
        // 5 = Max eller Min
        // 6 = Aktuellt värde
    }
    viewtable.data = data;
};