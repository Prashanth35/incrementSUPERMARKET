sap.ui.controller("complexbinding.view1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf complexbinding.view1
*/
	onInit: function() {
		/*new sap.ui.getCore().attachInit(function(){
		var myvew = new sap.ui.xmlView('my Binding')	
			
	
 var Omodel=new sap.ui.model.json.JSONModel({
	 text1 : "karma",
	 text2 : "nevergiveup",
		 text3 : "work hard"
	 
 });
		myvew.getView().setModel(Omodel);
		myvew.placeAt('content')
		});*/
		var Omodel=new sap.ui.model.json.JSONModel({
			 text1 : "karma",
			 text2 : "nevergiveup",
				 text3 : "work hard"
			 
		 });
				this.getView().setModel(Omodel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf complexbinding.view1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf complexbinding.view1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf complexbinding.view1
*/
//	onExit: function() {
//
//	}
	myFoermaters : function(sText){
		return sText.toUpperCase();
		
	}

});