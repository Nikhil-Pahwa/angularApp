(function(){
	var app = angular.module('store-product',[]);

	app.directive('productTabsPanel',function(){
		
		return{
			restrict: 'E',
			templateUrl: 'templates/product-tabs-panel.html',
			controller: function(){
				this.selectedTab = 1;// By defaule one will be selected.

				this.setTab = function(value){
					this.selectedTab = value;
				};

				this.getSelectedTab = function(){
					return this.selectedTab;
				}
			},
			controllerAs: 'tab'
		}
	});

	app.directive('productInformation',function(){
		return{
			restrict: 'E',
			templateUrl: 'templates/product-information.html'
		}
	});
})();	