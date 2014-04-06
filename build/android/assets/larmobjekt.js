// create controls tab and root window
var win3 = Titanium.UI.createWindow({  
    title:'Sensor/Larm Objekt',
    backgroundColor:'#fff',
    zIndex:2
});

/*var b = Titanium.UI.createButton({title:'Back'});
win3.leftNavButton = b;
b.addEventListener('click', function() {
    // alert('I was clicked'); // to confirm its being called
	// do the stuff here
	win3.close();
	win3.hide();
});*/

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Sensor/Larm Objekt',
    backgroundColor:'#888888',
    window:win3
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
	top: 10,
	left: 10
});
win3.add(button3);

button3.addEventListener('click',function() {
    var win = Titanium.UI.createWindow({
        url:'larmgrupper.js',
        title:'Sensor/Larm Objekt'
    });

    //Titanium.UI.currentTab.open(win,{animated:true}); //if you used tabbar in your app
    win.open(win,{animated:true});
    win3.close();
    win3.hide();
});

win3.add(label3);
win3.open();

var pinButton = Titanium.UI.createButton({
	title:'Pin',
	top: 400,
	width: 120
});
win3.add(pinButton);

var changeButton = Titanium.UI.createButton({
	title:'Change value',
	top: 440,
	width: 120
});
win3.add(changeButton);

var pushButton = Titanium.UI.createButton({
	title:'Bekräfta',
	top: 480,
	width: 120
});
win3.add(pushButton);