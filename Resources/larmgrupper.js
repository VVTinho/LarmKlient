var win2 = Titanium.UI.createWindow({  
	title:'Larm Grupper',
	backgroundColor:'#fff',
	zIndex:1
});

sendAjax();

function sendAjax() {

	var xhr = Titanium.Network.createHTTPClient();
	
	xhr.onerror = function(e) {
	    var error = e.error;
	    alert(error);               
	};
	
	// http://www.vvt-mediadesign.se/alarmgroups.json
	xhr.open('GET', 'alarmgroups.json');
	xhr.send();
	
	var tv = Titanium.UI.createTableView({
	    height: Titanium.UI.SIZE,
	    width: Titanium.UI.FILL
	});
	win2.add(tv);
	
	xhr.onload = function() {
	
	    var data = [];
	    
	    var schools = JSON.parse(this.responseText);
	    
	    for (s in schools) {
		    var row = Titanium.UI.createTableViewRow({height:100});
		    
		    var rowItem = Titanium.UI.createView({
		       height : 40,
		       width : Titanium.UI.FILL,
		       layout : 'horizontal'
		    });
		    row.add(rowItem);
		    
		    var title = Titanium.UI.createLabel({
		       height : 40,
		       text : schools[s].Name,
		       width : Titanium.UI.SIZE,
		       left:10
		    });
		    rowItem.add(title);
		    
		    var button = Titanium.UI.createButton({
		        title : 'hämta',
		        width : 100,
		        height : 36,
		        right: 20,
		        buttonid : s
		    });
		    rowItem.add(button);
		    data.push(row);
		
		    /*button.addEventListener('click', function(e) {
		        // Titanium.API.info('button ' + e.source.buttonid + ' clicked.');
		        Titanium.API.info('button ' + JSON.stringify(e.source.buttonid) + ' clicked.');
		        /*if(e.source.buttonid.Name == "Alla Objekt") {
		        	callbuttonone();
		        	alert("ButtonId" + e.source.buttonid.Name);
		        }*/
		    //});
	    };
	    tv.data = data;
	    
      	tv.addEventListener("click", function (event) {
		    if (event.source.buttonid == '0') {
		       callbuttonone();
		    }
		});
		
		tv.addEventListener("click", function (event) {
		    if (event.source.buttonid == '1') {
		       callbuttontwo();
		    }
		});
		
		tv.addEventListener("click", function (event) {
		    if (event.source.buttonid == '2') {
		       callbuttonthree();
		    }
		});
	};
};

function callbuttonone() {
	var win = Titanium.UI.createWindow({
		url:'larmobjekt_alla_grupper.js',
		title:'Alla Larmgrupper'
	});
    win.open({modal:true});
    // win2.close();
    // win2.hide();	
}

function callbuttontwo() {
	var winid = Titanium.UI.createWindow({
		url:'idkommunikation.js',
		title:'ID Kommunikation'
	});
    winid.open({modal:true});
    // win2.close();
    // win2.hide();	
}

function callbuttonthree() {
	var winopenlogger = Titanium.UI.createWindow({
		url:'openlogger.js',
		title:'OpenLogger'
	});
    winopenlogger.open({modal:true});
    // win2.close();
    // win2.hide();	
}

var tabGroup = Titanium.UI.createTabGroup();

var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Larm Grupper',
    backgroundColor:'#888888',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

tabGroup.addTab(tab2);
tabGroup.open();

win2.add(label2);
win2.open();

win2.addEventListener('android:back',function() {
	alert('Det går inte att använda tillbaka knappen på en Android.');
});