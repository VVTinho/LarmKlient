var win4 = Titanium.UI.createWindow({  
    title:'Larmlista',
    backgroundColor:'#fff',
    zIndex:3
});

win4.orientationModes = [Titanium.UI.PORTRAIT];

var tabGroup = Titanium.UI.createTabGroup();

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Larmlista',
    backgroundColor:'#888888',
    window:win4
});

tabGroup.addTab(tab1);
tabGroup.open();

var buttontillbaka = Titanium.UI.createButton({
	title:'Tillbaka',
	bottom: 10,
	left: 10,
	zIndex:3
});
win4.add(buttontillbaka);

buttontillbaka.addEventListener('click',function() {
    var winlarmlista = Titanium.UI.createWindow({
        url:'larmgrupper.js',
        title:'Sensor/Larm Grupper'
    });
    winlarmlista.open({modal:true});
    win4.close();
    win4.hide();
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
    win4.close();
    win4.hide();
});
win4.add(button1);

win4.open();

var xhr = Titanium.Network.createHTTPClient();

xhr.onerror = function(e) {
	    var error = e.error;
	    alert(error);               
};

xhr.open('GET', 'http://www.vvt-mediadesign.se/alarmobjects.json');
xhr.send();

var viewtable = Titanium.UI.createTableView({
	maxRowHeight:40,
	minRowHeight:30,
	height: Titanium.UI.SIZE,
    width: Titanium.UI.FILL,
    color: 'black'
});
win4.add(viewtable);

xhr.onload = function() {

    var data = [];
    var objekten = JSON.parse(this.responseText);
    
    for (s in objekten) {
    	// data.push(Titanium.UI.createTableViewRow({title: " Objektnamn: " + objekten[s][0].ObjectName + " Aktiv: " + objekten[s][0].Active}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][0].ObjectName + " Larmtid:" + " Larmtyp:" + " Gräns:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][1].ObjectName + " Larmtid:" + " Larmtyp:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][2].ObjectName + " Larmtid:" + " Larmtyp:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][3].ObjectName + " Larmtid:" + " Larmtyp:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][4].ObjectName + " Larmtid:" + " Larmtyp:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][5].ObjectName + " Larmtid:" + " Larmtyp:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][6].ObjectName + " Larmtid:" + " Larmtyp:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][7].ObjectName + " Larmtid:" + " Larmtyp:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][8].ObjectName + " Larmtid:" + " Larmtyp:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][9].ObjectName + " Larmtid:" + " Larmtyp:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][10].ObjectName + " Larmtid:" + " Larmtyp:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][11].ObjectName + " Larmtid:" + " Larmtyp:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][12].ObjectName + " Larmtid:" + " Larmtyp:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][13].ObjectName + " Larmtid:" + " Larmtyp:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][14].ObjectName + " Larmtid:" + " Larmtyp:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][15].ObjectName + " Larmtid:" + " Larmtyp:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][16].ObjectName + " Larmtid:" + " Larmtyp:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][17].ObjectName + " Larmtid:" + " Larmtyp:"}));
        data.push(Titanium.UI.createTableViewRow({title: " Mätobjekt beskrivning: " + objekten[s][18].ObjectName + " Larmtid:" + " Larmtyp:"}));
        // 1 = Mätobjekt beskrivning
        // 2 = Larmtid
        // 3 = Larmtyp
        // 4 = Gräns
        // 5 = Max eller Min
        // 6 = Aktuellt värde
    }
    viewtable.data = data;
};