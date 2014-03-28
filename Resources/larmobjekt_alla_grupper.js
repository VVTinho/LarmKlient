var win3 = Titanium.UI.createWindow({  
    title:'Sensor/Larm Objekt',
    backgroundColor:'#fff',
    zIndex:2
    // exitOnClose:true
});

var wrapper = Titanium.UI.createView({
    width:'98%',
    top:'1%',
    height:'40%',
    borderColor:'#000000',
    borderWidth:'2',
    backgroundColor:'#ff9933'
});
win3.add(wrapper);

var wrapperLabel = Titanium.UI.createLabel({
	text: 'Kvitterat LARM',
	color: '#ffffff',
	top: '50%',
	textAlign:'center',
	font: {
		fontWeight: 'bold',
		fontSize: 22
	},
	height:'auto'
});
wrapper.add(wrapperLabel);

var wrappernya = Titanium.UI.createView({
    width:'98%',
    top:'41%',
    height:'19%',
    borderColor:'#000000',
    borderWidth:'2',
    backgroundColor:'#a9a9a9'
});
win3.add(wrappernya);

var wrappernyaLabel = Titanium.UI.createLabel({
	text: 'Nya',
	color: '#000',
	top: '50%',
	textAlign:'center',
	font: {
		fontWeight: 'bold',
		fontSize: 18
	},
	height:'auto'
});
wrappernya.add(wrappernyaLabel);

var wrapperkvitterade = Titanium.UI.createView({
    width:'98%',
    top:'62%',
    height:'20%',
    borderColor:'#000000',
    borderWidth:'2',
    backgroundColor:'#ff9933'
});
win3.add(wrapperkvitterade);

var wrapperkvitteradeLabel = Titanium.UI.createLabel({
	text: 'Kvitterade',
	color: '#000',
	top: '50%',
	textAlign:'center',
	font: {
		fontWeight: 'bold',
		fontSize: 18
	},
	height:'auto'
});
wrapperkvitterade.add(wrapperkvitteradeLabel);

var wrapperatergatt = Titanium.UI.createView({
    width:'98%',
    top:'82%',
    height:'20%',
    borderColor:'#000000',
    borderWidth:'2',
    backgroundColor:'#ffff33'
});
win3.add(wrapperatergatt);

var wrapperatergattLabel = Titanium.UI.createLabel({
	text: 'Har återgått',
	color: '#000',
	top: '50%',
	textAlign:'center',
	font: {
		fontWeight: 'bold',
		fontSize: 18
	},
	height:'auto'
});
wrapperatergatt.add(wrapperatergattLabel);

var tabGroup = Titanium.UI.createTabGroup();

var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Sensor/Larm Objekt',
    backgroundColor:'#888888',
    window:win3
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
win3.add(buttontillbaka);

buttontillbaka.addEventListener('click',function() {
    var winlarmgrupper = Titanium.UI.createWindow({
        url:'larmgrupper.js',
        title:'Sensor/Larm Objekt'
    });
    winlarmgrupper.open({modal:true});
    win3.close();
    win3.hide();
});

win3.add(label3);
win3.open();

var buttonlarmlista = Titanium.UI.createButton({
	title:'Larmlista',
	bottom: 10,
	right: 10,
	zIndex:2
});

buttonlarmlista.addEventListener('click', function() {
    var larmlistawin = Titanium.UI.createWindow({
		url:'larmlista.js',
		title:'Larmlista'
    });
    larmlistawin.open({modal:true});
    win3.close();
    win3.hide();
});
win3.add(buttonlarmlista);

var xhr = Titanium.Network.createHTTPClient();

xhr.onerror = function(e) {
    var error = e.error;
    alert(error);               
};

// http://www.vvt-mediadesign.se/alarmstatus.json
xhr.open('GET', 'alarmstatus.json');
xhr.send();

var viewalla = Titanium.UI.createTableView({
	maxRowHeight:40,
	minRowHeight:30,
	height: Titanium.UI.SIZE,
    width: Titanium.UI.FILL,
    color: 'black'
});
win3.add(viewalla);

xhr.onload = function() {

    var data = [];
    var objekten = JSON.parse(this.responseText);
    
    for (s in objekten) {
        data.push(Titanium.UI.createTableViewRow({
        	title: objekten[s],
        	height: 150,
        	left:'50%',
        	top:160
        }));
        data.push(Titanium.UI.createTableViewRow({
        	title: objekten[s].New,
        	height: 160,
        	left:'50%'
        }));
        data.push(Titanium.UI.createTableViewRow({
        	title: objekten[s].Signed,
        	height: 140,
        	left:'50%'
        }));
        data.push(Titanium.UI.createTableViewRow({
        	title: objekten[s].Returned,
        	height: 140,
        	left:'50%'
        }));
	}
    viewalla.data = data;
};