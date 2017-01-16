// Create the array to hold the flavor objects
var flavors = [];

// Icing on the Cake Flavor
var icingOnTheCake = {
	name: "Icing on the Cake",
	description: "Have your cake and lick it too.",
	ingredients: "A creamy ice cream with a confetti swirl.",
	price: 5,
	imageSource: "/img/icingOnTheCake.jpg"
};

// Love Potion Flavor
var lovePotion = {
	name: "Love Potion #18",
	description: "fall in love with white chocolate and raspberry ice cream",
	ingredients: "White chocolate, raspberry, chocolate chips, milk.",
	price: 6,
	imageSource: "/img/lovePotion18.jpg"
};

// Strawberry Cheesecake
var strawberryCheesecake = {
	name: "Strawberry Cheesecake",
	description: "cheesecake ice cream loaded with cheesecake and strawberry pieces",
	ingredients: "strawberry, cheesecake, milk, sugar, water",
	price: 5,
	imageSource: "/img/strawberryCheesecake.jpg"
};

// Winter White Chocolate
var winterWhite = {
	name: "Winter White Chocolate",
	description: "White chocolate ice cream with cherry and chocolate pieces",
	ingredients: "cherry, milk chocolate pieces, white chocolate, sugar, water",
	price: 4,
	imageSource: "/img/winterWhiteChocolate.jpg"
};

// Pink Bubble Gum
var pinkBubbleGum = {
	name: "Pink Bubble Gum",
	description: "two treats in one! bubble gum ice cream loaded with candy-coated bubble gum pieces",
	ingredients: "Bubble gum, candy, beeswax, cream, sugar, milk",
	price: 5,
	imageSource: "/img/pinkBubbleGum.jpg"
};


// Rainbow Sherbet
var rainboxSherbet = {
	name: "Rainbow Sherbet",
	description: "Pineapple, orange, and raspberry battle for your taste bud love",
	ingredients: "Pineapple, raspberry, orange, water, sugar",
	price: 3,
	imageSource: "/img/rainbowSherbet.jpg"
};

// Wild N' Reckless
var wildReckless = {
	name: "Wild N' Reckless",
	description: "You're invited to a green apple, blue raspberry, fruit punch party! fruit has never had so much fun",
	ingredients: "Green apple, blue raspberry, fruit punch, and a kick of rum.",
	price: 5,
	imageSource: "/img/wildNreckless.jpg"
};


// Rock N' Pop
var rockPop = {
	name: "Rock N' Pop",
	description: "Prepare your mouth for fireworks of flavor!",
	ingredients: "Green grape, purple green apple sorbet, popping candy",
	price: 6,
	imageSource: "/img/rockNpopSwirl.jpg"
};

// Patriot Pop
var patriotPop = {
	name: "Patriot Pop",
	description: "True red, white, and blue",
	ingredients: "Cherry, lemon, blue raspberry sorbet, sugar, water",
	price: 6,
	imageSource: "/img/patriotPop.jpg"
};

// Push these new objets into the flavors array
flavors.push(icingOnTheCake);
flavors.push(lovePotion);
flavors.push(strawberryCheesecake);
flavors.push(winterWhite);
flavors.push(pinkBubbleGum);
flavors.push(rainboxSherbet);
flavors.push(wildReckless);
flavors.push(rockPop);
flavors.push(patriotPop);

console.log("FLAVORS: ", flavors);

// THESE ARE THE IDs OF EACH HTML ELEMENT THAT IS BEING POPULATED WITH JAVASCRIPT -------------------
// Icing on The Cake
// <article>	"icingOnTheCake"
// <h3> 		"cakeName"
// <img>		"cakeImg"								(image)
// <p> 			"cakeDesc"								(desc)
// <p>			"cakeIng"								(ingred)
// <p>			"cakePrice"								(price)

var cakeNameDOM = document.getElementById("cakeName");
var cakeImgSrcDOM = document.getElementById("cakeImg");
var cakeDescDOM = document.getElementById("cakeDesc");
var cakeIngDOM = document.getElementById("cakeIng");
var cakePriceDOM = document.getElementById("cakePrice");

cakeNameDOM.innerHTML = flavors[0].name;
cakeDescDOM.innerHTML = flavors[0].description;
cakeIngDOM.innerHTML = flavors[0].ingredients;
cakePriceDOM.innerHTML = "$" + flavors[0].price;

// Set image source
cakeImgSrcDOM.src = flavors[0].imageSource;

// THESE ARE THE IDs OF EACH HTML ELEMENT THAT IS BEING POPULATED WITH JAVASCRIPT -------------------
// Love Potion #18
// <article>		"potionCard"
// <h3>				"potionName"
// <img>			"potionImg"							(image)
// <p>				"potionDesc"						(desc)
// <p>				"potionIng"							(ingred)
// <p>				"potionPrice"						(price)


var potionNameDOM = document.getElementById("potionName");
var potionImgSrcDOM = document.getElementById("potionImg");
var potionDescDOM = document.getElementById("potionDesc");
var potionIngDOM = document.getElementById("potionIng");
var potionPriceDOM = document.getElementById("potionPrice");

potionNameDOM.innerHTML = flavors[1].name;
potionDescDOM.innerHTML = flavors[1].description
potionIngDOM.innerHTML = flavors[1].ingredients;
potionPriceDOM.innerHTML = "$" + flavors[1].price;

// Set image source
potionImgSrcDOM.src = flavors[1].imageSource;

// THESE ARE THE IDs OF EACH HTML ELEMENT THAT IS BEING POPULATED WITH JAVASCRIPT -------------------
// Strawberry Cheesecake
// <article>		"strawberryCheesecake"
// <h3>				"strawberryName"
// <img>			"strawberryImg"						(image)
// <p>				"strawberryDesc"					(desc)
// <p>				"strawberryIng"						(ingred)
// <p>				"strawberryPrice"					(price)

var strawNameDOM = document.getElementById("strawberryName");
var strawImgSrcDOM = document.getElementById("strawberryImg");
var strawDescDOM = document.getElementById("strawberryDesc");
var strawIngDOM = document.getElementById("strawberryIng");
var strawPriceDOM = document.getElementById("strawberryPrice");

strawNameDOM.innerHTML = flavors[2].name;
strawDescDOM.innerHTML = flavors[2].description;
strawIngDOM.innerHTML = flavors[2].ingredients;
strawPriceDOM.innerHTML = "$" + flavors[2].price;

// Set image source
strawImgSrcDOM.src = flavors[2].imageSource;

// THESE ARE THE IDs OF EACH HTML ELEMENT THAT IS BEING POPULATED WITH JAVASCRIPT -------------------
// Winter White Chocolate
// <article>		"winterWhiteChocolate"
// <h3>				"winterWhiteName"
// <img>			"winterWhiteImg"					(image)
// <p>				"winterWhiteDesc"					(desc)
// <p>				"winterWhiteIng"					(ingred)
// <p>				"winterWhitePrice"					(price)

var winterNameDOM = document.getElementById("winterWhiteName");
var winterImgSrcDOM = document.getElementById("winterWhiteImg");
var winterDescDOM = document.getElementById("winterWhiteDesc");
var winterIngDOM = document.getElementById("winterWhiteIng");
var winterPriceDOM = document.getElementById("winterWhitePrice");

winterNameDOM.innerHTML = flavors[3].name;
winterDescDOM.innerHTML = flavors[3].description;
winterIngDOM.innerHTML = flavors[3].ingredients;
winterPriceDOM.innerHTML = "$" + flavors[3].price;

// Set image source
winterImgSrcDOM.src = flavors[3].imageSource;

// THESE ARE THE IDs OF EACH HTML ELEMENT THAT IS BEING POPULATED WITH JAVASCRIPT -------------------
// Pink Bubble Gum
// <article>		"pinkBubbleGum"
// <h3>				"bubbleGumName"
// <img>			"bubbleGumImg"						(image)
// <p>				"bubbleGumDesc"						(desc)
// <p>				"bubbleGumIng"						(ingred)
// <p>				"bubbleGumPrice"					(price)

var pinkNameDOM = document.getElementById("bubbleGumName");
var pinkImgSrcDOM = document.getElementById("bubbleGumImg");
var pinkDescDOM = document.getElementById("bubbleGumDesc");
var pinkIngDOM = document.getElementById("bubbleGumIng");
var pinkPriceDOM = document.getElementById("bubbleGumPrice");

pinkNameDOM.innerHTML = flavors[4].name;
pinkDescDOM.innerHTML = flavors[4].description;
pinkIngDOM.innerHMTL = flavors[4].ingredients;
pinkPriceDOM.innerHTML = "$" + flavors[4].price;

// Set image source
pinkImgSrcDOM.src = flavors[4].imageSource;


// THESE ARE THE IDs OF EACH HTML ELEMENT THAT IS BEING POPULATED WITH JAVASCRIPT -------------------
// Rainbow Sherbet
// <article>		"rainbowSherbet"
// <h3>				"sherbetName"
// <img>			"sherbetImg"						(image)
// <p>				"sherbetDesc"						(desc)
// <p>				"sherbetIng"						(ingred)
// <p>				"sherbetPrice"						(price)

var rainbowNameDOM = document.getElementById("sherbetName");
var rainbowImgSrcDOM = document.getElementById("sherbetImg");
var rainbowDescDOM = document.getElementById("sherbetDesc");
var rainbowIngDOM = document.getElementById("sherbetIng");
var rainbowPriceDOM = document.getElementById("sherbetPrice");

rainbowNameDOM.innerHTML = flavors[5].name;
rainbowDescDOM.innerHTML = flavors[5].description;
rainbowIngDOM.innerHTML = flavors[5].ingredients;
rainbowPriceDOM.innerHTML = "$" + flavors[5].price;

rainbowImgSrcDOM.src = flavors[5].imageSource;


// THESE ARE THE IDs OF EACH HTML ELEMENT THAT IS BEING POPULATED WITH JAVASCRIPT -------------------
// Wile N' Reckless
// <article>		"wildReckless"
// <h3>				"wildRecklessName"
// <img>			"wildRecklessImg"					(image)
// <p>				"wildRecklessDesc"					(desc)
// <p>				"wildRecklessIng"					(ingred)
// <p>				"wildRecklessPrice"					(price)

var wildNameDOM = document.getElementById("wildRecklessName");
var wildImgSrcDOM = document.getElementById("wildRecklessImg");
var wildDescDOM = document.getElementById("wildRecklessDesc");
var wildIngDOM = document.getElementById("wildRecklessIng");
var wildPriceDOM = document.getElementById("wildRecklessPrice");

wildNameDOM.innerHTML = flavors[6].name;
wildDescDOM.innerHTML = flavors[6].description;
wildIngDOM.innerHTML = flavors[6].ingredients;
wildPriceDOM.innerHTML = "$" + flavors[6].price;

// Set image source
wildImgSrcDOM.src = flavors[6].imageSource;


// THESE ARE THE IDs OF EACH HTML ELEMENT THAT IS BEING POPULATED WITH JAVASCRIPT -------------------
// Rock N' Pop
// <article>		"rockPop"
// <h3>				"rockPopName"
// <img>			"rockPopImg"						(image)
// <p>				"rockPopDesc"						(desc)
// <p>				"rockPopIng"						(ingred)
// <p>				"rockPopPrice"						(price)

var rockNameDOM = document.getElementById("rockPopName");
var rockImgSrcDOM = document.getElementById("rockPopImg");
var rockDescDOM = document.getElementById("rockPopDesc");
var rockIngDOM = document.getElementById("rockPopIng");
var rockPriceDOM = document.getElementById("rockPopPrice");

rockNameDOM.innerHTML = flavors[7].name;
rockDescDOM.innerHTML = flavors[7].description;
rockIngDOM.innerHTML = flavors[7].ingredients;
rockPriceDOM.innerHTML = "$" + flavors[7].price;

// Set image source
rockImgSrcDOM.src = flavors[7].imageSource;


// THESE ARE THE IDs OF EACH HTML ELEMENT THAT IS BEING POPULATED WITH JAVASCRIPT -------------------
// Patriot Pop
// <article>		"patriotPop"
// <h3>				"patriotPopName"
// <img>			"patriotPopImg"						(image)
// <p>				"patriotPopDesc"					(desc)
// <p>				"patriotPopIng"						(ingred)
// <p>				"patriotPopPrice"					(price)

var patriotNameDOM = document.getElementById("patriotPopName");
var patriotImgSrcDOM = document.getElementById("patriotPopImg");
var patriotDescDOM = document.getElementById("patriotPopDesc");
var patriotIngDOM = document.getElementById("patriotPopIng");
var patriotPriceDOM = document.getElementById("patriotPopPrice");

patriotNameDOM.innerHTML = flavors[8].name;
patriotDescDOM.innerHTML = flavors[8].description;
patriotIngDOM.innerHTML = flavors[8].ingredients;
patriotPriceDOM.innerHTML = "$" + flavors[8].price;

// Set image source
patriotImgSrcDOM.src = flavors[8].imageSource;