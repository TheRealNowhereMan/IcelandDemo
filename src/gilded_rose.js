//Create Item prototype
function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
};

//Array of inventory items
var items = [];
items.push(new Item('Aged Brie', 1, 1));
items.push(new Item('Backstage passes', -1, 2));
items.push(new Item('Backstage passes', 9, 2));
items.push(new Item('Sulfuras', 2, 2));
items.push(new Item('Normal​ ​Item', -1, 55));
items.push(new Item('Normal​ ​Item', 2, 2));
items.push(new Item('INVALID ITEM', 2, 2));
items.push(new Item('Conjured', 2, 2));
items.push(new Item('Conjured', -1, 5));

//call quality adjustment function
adjust_quality();

function adjust_quality() {
	//loop through items in inventory
	//with each iteration, make calls to item-specific and shared functions
	//pass current item object as argument
	for (var i = 0; i < items.length; i++)
	{
		if (items[i].name.includes("Sulfuras")) {
			SulfurasUpdate(items[i]);
			SharedUpdate(items[i]);
		}
		else if (items[i].name.includes("Aged Brie")) {
			AgedBrieUpdate(items[i]);
			SharedUpdate(items[i]);
		}
		else if (items[i].name.includes("Backstage pass")) {
			BackstagePassesUpdate(items[i]);
			SharedUpdate(items[i]);
		}
		else if (items[i].name.includes("Conjured")) {
			ConjuredUpdate(items[i]);
			SharedUpdate(items[i]);
		}
		else if (items[i].name.includes("INVALID ITEM")) {
			InvalidItemUpdate(items[i]);
		}
		else {
			StandardUpdate(items[i]);
			SharedUpdate(items[i]);
		}
	}
}

function SulfurasUpdate(item) {
	// Legendary item - never has to be sold or decreases in quality
}

function AgedBrieUpdate(item) {
	//decrease sell in
	item.sell_in -= 1;

	//increase sell in
	if (item.quality < 50) {
		item.quality += 1;
	}
}

function BackstagePassesUpdate(item) {
	//decrease sell in
	item.sell_in -= 1;
	
	//increase quality
	if (item.sell_in < 11) {
		if (item.quality < 50) {
		  item.quality = item.quality + 2
		}
	}
	if (item.sell_in < 6) {
		if (item.quality < 50) {
		  item.quality = item.quality + 3
		}
	}
	if (item.sell_in < 0) {
		item.quality = 0
	}
}

function ConjuredUpdate(item) {
	//decrease quality twice as fast
	if (item.quality > 0) {
		item.quality -= 2;
	}
	//decrease sell-in
	item.sell_in -= 1;
	//decrease quality further if expired
	if (item.sell_in < 0) {
		if (item.quality > 0) {
			item.quality -= 2;
		}
	}
}

function InvalidItemUpdate(item) {
	//change item name and remove values
	item.name = "NO​ ​SUCH​ ​ITEM";
	item.sell_in = null;
	item.quality = null;
}

function StandardUpdate(item) {
	//decrease quality
	if (item.quality > 0) {
		item.quality -= 1;
	}
	//decrease sell-in
	item.sell_in -= 1;
	//decrease quality further if expired
	if (item.sell_in < 0) {
		if (item.quality > 0) {
			item.quality -= 1;
		}
	}
}

function SharedUpdate(item) {
	//quality never exceeds 50
	if (item.quality > 50) {
		item.quality = 50;
	}
}