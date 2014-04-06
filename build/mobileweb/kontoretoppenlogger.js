var win5 = Titanium.UI.createWindow({  
    title:'Larm Info',
    backgroundColor:'#fff',
    zIndex:4
});

var tabGroup = Titanium.UI.createTabGroup();

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Larm Info',
    backgroundColor:'#888888',
    window:win5
});

tabGroup.addTab(tab1);

tabGroup.open();

win5.open();

var buttontillbakalarminfo = Titanium.UI.createButton({
	title:'Tillbaka',
	bottom: 10,
	left: 10,
	zIndex:4
});
win5.add(buttontillbakalarminfo);

buttontillbakalarminfo.addEventListener('click',function() {
    var winlarmlista = Titanium.UI.createWindow({
        url:'larmgrupper.js',
        title:'Larm Grupper'
    });
    winlarmlista.open({modal:true});
    win5.close();
    win5.hide();
});

/* var larmkommentarbutton = Titanium.UI.createButton({
	title:'Lägg Till Larmkommentar',
	zIndex:4,
	bottom:'10%'
});
win5.add(larmkommentarbutton); */

var skrivavlarmbutton = Titanium.UI.createButton({
	title:'Skriv Av Larm',
	zIndex:4,
	bottom:'30%'
});
win5.add(skrivavlarmbutton);

skrivavlarmbutton.addEventListener('click', function (e) {
    alert('Larmet är avaktiverat');
    // Skicka/Posta meddelandet till json file alarmstatus.
});
win5.add(skrivavlarmbutton);

var input_1 = Titanium.UI.createTextField({
   bottom: '10%',
   width: 200,
   height: 100
});
win5.add(input_1);

var button1 = Titanium.UI.createButton({
    title : "Spara kommentar",
    bottom: '2%'
});

button1.addEventListener('click', function (e) {
    alert('Ditt meddelande har sparats '+input_1.value+'.');
    // Skicka/Posta meddelandet till json file alarmstatus.
});
win5.add(button1);

var wrapper = Titanium.UI.createView({
    width:'98%',
    top:'1%',
    height:'40%',
    borderColor:'#000000',
    borderWidth:'2',
    backgroundColor:'#ffffff'
});
win5.add(wrapper);

var wrapperLabel = Titanium.UI.createLabel({
	text: 'Mätobjekt:',
	color: '#000000',
	top: '20%',
	textAlign:'left',
	font: {
		fontWeight: 'bold',
		fontSize: 18
	},
	height:'auto'
});
wrapper.add(wrapperLabel);

var wrapperLabeltitle = Titanium.UI.createLabel({
	text: 'Larm som upphört: Låg temperatur',
	color: '#000000',
	top: '40%',
	textAlign:'left',
	font: {
		fontWeight: 'bold',
		fontSize: 18
	},
	height:'auto'
});
wrapper.add(wrapperLabeltitle);

var wrapperLabelAlarm = Titanium.UI.createLabel({
	text: 'Kontoret Openlogger',
	color: '#000000',
	top: '54%',
	textAlign:'left',
	font: {
		fontWeight: 'bold',
		fontSize: 18
	},
	height:'auto'
});
wrapper.add(wrapperLabelAlarm);

var wrapperLabelLarmNr = Titanium.UI.createLabel({
	text: 'Larm nr:',
	color: '#000000',
	top: '64%',
	textAlign:'left',
	font: {
		fontWeight: 'bold',
		fontSize: 18
	},
	height:'auto'
});
wrapper.add(wrapperLabelLarmNr);

var wrapperLabelGransvarde = Titanium.UI.createLabel({
	text: 'Gränsvärde:',
	color: '#000000',
	top: '74%',
	textAlign:'left',
	font: {
		fontWeight: 'bold',
		fontSize: 18
	},
	height:'auto'
});
wrapper.add(wrapperLabelGransvarde);

var wrapperLabelMinvarde = Titanium.UI.createLabel({
	text: 'Minvärde:',
	color: '#000000',
	top: '84%',
	textAlign:'left',
	font: {
		fontWeight: 'bold',
		fontSize: 18
	},
	height:'auto'
});
wrapper.add(wrapperLabelMinvarde);