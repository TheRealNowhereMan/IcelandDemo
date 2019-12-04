describe("GildedRose", function() {
	//Array of inventory items expected after adjustment
	var tstitems = [];
	tstitems.push(new Item('Aged Brie', 0, 2));
	tstitems.push(new Item('Backstage passes', -2, 0));
	tstitems.push(new Item('Backstage passes', 8, 4));
	tstitems.push(new Item('Sulfuras', 2, 2));
	tstitems.push(new Item('Normal​ ​Item', -2, 50));
	tstitems.push(new Item('Normal​ ​Item', 1, 1));
	tstitems.push(new Item('NO​ ​SUCH​ ​ITEM', null, null));
	tstitems.push(new Item('Conjured', 1, 0));
	tstitems.push(new Item('Conjured', -2, 1));

	//call testsuite function for every test item in inventory array
	tstitems.forEach(testSuite);
  
	function testSuite(value, i) {
		//create a test suite for each inventory item
		//each spec expects the main inventory item to match the test item defined above
		describe(items[i].name, function() {
			//create test spec for name
			it("name", function() {
				expect(items[i].name).toBe(value.name);
			});
			//create test spec for sell in
			it("sell_in", function() {
				expect(items[i].sell_in).toBe(value.sell_in);
			});
			//create test spec for quality
			it("quality", function() {
				expect(items[i].quality).toBe(value.quality);
			});

		});
	}
});