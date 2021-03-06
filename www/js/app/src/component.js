
define(['jquery', 'react', 'app/monlift', 'app/auth', 'components/header', 'components/parametters', 'components/body', 'components/footer', 'components/forms', 'components/buttons', 'components/profile', 'components/myInfos', 'components/myCars', 'components/requestAlert', 'components/addLift', 'components/addUsername', 'components/listLiftComponent', 'components/addFirstCar','components/addCar'], 
		function($, React, monlift, auth, headers, parametters, Body, footers, forms, buttons, profile, myInfos, myCars, requestAlert,addLift, addUsername, liftListcomponent, addFirstCar, addCar) {
 

	 ML = monlift.getInstance();
	 
	 return {
		getHeader: function(){
			return headers.Header;
		},
		
		
		getLogoutButton: function(){
			return buttons.LogoutButton;
		},
		
		getLoginButton: function(){
			return buttons.LoginButton;
		},
		
		getRegisterButton: function(){
			return buttons.RegisterButton;
		},
		
 		getHomePage: function(){
			return Body.Body;
		
		},
		
		getFooter: function()
		{
			return footers.IndexFooter;
		},
		
		
		getLoginForm: function(){
		
		},
		
		getRegisterForm: function(){
		
		},
		
		
		getSearchForm: function(){
			return forms.SearchForm;
		},
		
		getDriverHomePage: function(){
		
		},
		
		getProfilePage: function()
		{
			return profile.PassengerProfile;
		},
		
		getParamettersPage : function()
		{
			return parametters.Parametters;
		},
		getInfosPage: function()
		{
			return myInfos.MyInfos;
		},
		
		getCarsPage: function()
		{
			return myCars.MyCars;
		},
		
		getRequestAlertPage:function(){
			return requestAlert.RequestAlert;
		},
		

		getAddLiftPage:function(){
			return addLift.AddLift;
		},

		

		getAddUsernamePage : function () {
			return addUsername.AddUsername;
		},


		getLiftListPage : function(){
			return liftListcomponent.LiftListcomponent;
		},
		
		getAddCarPage : function() {
			return addCar.AddCar;
		},
		
		getAddFirstCarPage : function() {
			return addFirstCar.AddFirstCar;
		}


		
		
		 
	 }
 	
 })