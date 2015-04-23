(function(){
	//Here we define the app
	var app = angular.module('store',['store-product','global-nav']);	

	app.controller('StoreController',['$http',function($http){
		
		//this.products = gems;
		
		//cacheing is important here.
		var cache = this;
		$http.get('json/product.json').success(function(response){
			cache.products = response;
		});

	}]);

	app.controller('reviewController',function(){
		var obj = {};
		this.addReviewsToList = function(product){
			
			/*obj.name = this.myForm.name;
			obj.email = this.myForm.email;
			obj.description = this.myForm.description;*/

			product.reviews.push(this.myForm);
			this.myForm={};
		};
	});


/*	var gems = [{
			name: 'ruby',
			cost: '2.95',
			description: 'this is gem 101',
			isAvailable: true,
			imageurl:'images/gems/ruby.jpg',
			specification: 'A most unique, completely natural, Mediterranean, free form "horn" coral (Corno), weighting 5.16 cts.',
			reviews: [
				{
					'name':'Nikhil',
					'email': 'nikhil@gmail.com',
					'description': 'Nice product'
				},
				{
					'name':'Iron Man',
					'email':'iron@stark.com'
				}

			]
		},{
			name: 'garnet',
			cost: '3.00',
			description: 'wow',
			isAvailable: false,
			imageurl:'images/gems/garnet.jpg',
			specification: 'A very unique, untreated, ox-blood, Mediterranean coral, weighting 7.94 cts',
			reviews: [
				{
					'name':'Nikhil',
					'email': 'nikhil@gmail.com',
					'description': 'Nice product'
				}			
			]
		},{
			name: 'emerald',
			cost: '4.60',
			description: 'wow',
			isAvailable: true,
			imageurl:'images/gems/emerald.jpg',
			specification: 'One of the last piece of Japanese ox-blood coral, weighting 2.47 cts., fine ox-blood red color, masterly executed',
			reviews: [
				{
					'name':'Iron Man',
					'email':'iron@stark.com'
				}

			]
		}];*/

})();


