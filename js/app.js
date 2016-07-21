var initialCats = 
[
	{ 
		name: 'Abi',
		imgScr: 'img/cat_picture1.jpg',
		nicknames: [{name: 'Amy'}, {name: 'Suzy'}, {name: 'Emma'}],
		clickCount: 10	
	},
	{ 
		name: 'Brandon',
		imgScr: 'img/cat_picture2.jpeg',
		nicknames: [{name: 'Brad'}, {name: 'Don'}, {name: 'Adam'}],
		clickCount: 9	
	},
	{ 
		name: 'Cody',
		imgScr: 'img/cat_picture3.jpeg',
		nicknames: [{name: 'Coup'}],
		clickCount: 7	
	},
	{ 
		name: 'Daisy',
		imgScr: 'img/cat_picture4.jpeg',
		nicknames: [{name: 'Dai'}, {name: 'Sassy'}],
		clickCount: 5	
	},
	{ 
		name: 'Emma',
		imgScr: 'img/cat_picture5.jpeg',
		nicknames: [{name: 'Em'}, {name: 'Mimi'}],
		clickCount: 4	
	}		
];
	
var Cat = function(data) {
	this.name = ko.observable(data.name);
	this.imgScr = ko.observable(data.imgScr);
	this.nicknames = ko.observableArray(data.nicknames);
	this.clickCount = ko.observable(data.clickCount);
};

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);
	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem) );
	});
	
	this.currentCat = ko.observable(this.catList()[0]);		
	console.log(this.currentCat().clickCount());
	
	this.incrementCounter = function() {;
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
	
	this.setCurrentCat = function(index) {;
		this.currentCat = this.currentCat = ko.observable(this.catList()[index]);
	};
};	
	

ko.applyBindings(new ViewModel());