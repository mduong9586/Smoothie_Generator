'use strict'
const dairy = localStorage.getItem('dairy');
const calories = localStorage.getItem('calories');
const flavor = localStorage.getItem('flavor');


console.log(dairy, calories, flavor);

function pasteUserInput() {

const recipeData = [
    {
        name: 'Blueberry Strawberry Smoothie',
        dairy: true,
        flavor: fruit,
        calories: 211,
        summary: "This strawberry blueberry smoothie recipe is the perfect creamy blend of fruity flavors! It's a healthy snack or breakfast made in minutes",
        preptime: "5 minutes",
        ingredients: ['1/2 cup skim milk', '1/2 cup of blueberries fresh or frozen', '1 cup of strawberries fresh or frozen', '6 ounces of non-fat vanilla yogurt'],
        direction: ['Add milk, blueberries, strawberries and yogurt to a blender', 'Mix until smooth! If you are using fresh fruit, you may need to add ice to thicken it. Enjoy cold.'],
        nutrition: "Strawberries provide fiber, potassium, folate and antioxidants, but they also ccontain several bioactive compounds (called flavonoids) that are known to help protect against chronic diseases."   
      },
    {   name: 'Banana Smoothie',
        dairy: true,
        flavor: fruit,
        calories: 171,
        summary: "Smoothies are best eaten immediately. But this banana smoothie actually lasts 1 to 2 days refrigerated, stored in a sealed container or a mason jar with the lid on. It may separate, which is perfectly natural. Just shake it up and you are good to go!",
        preptime: "5 minutes",
        ingredients: ['2 medium ripe bananas', '1 ½ cups ice', '¼ cup Greek yogurt', '1/2 to 3/4 cup milk'],
        direction: ['Place all ingredients in a blender, breaking the banana into pieces (start with ½ cup milk, then increase as necessary)', 'Blend until creamy and frothy, stopping and scraping down the sides as necessary.', "If desired, garnish with banana slice and toasted coconut. Serve immediately or store in a covered jar in the refrigerator for 2 days."],
        nutrition: "One serving, or one medium ripe banana, provides about 110 calories, 0 gram fat, 1 gram protein, 28 grams carbohydrate, 15 grams sugar (naturally occurring), 3 grams fiber, and 450 mg potassium."   
      },
    {
        name: 'Spinach Smoothie',
        dairy: true,
        flavor: veggie,
        calories: 171,
        summary: "Smoothies are best eaten immediately. But this spinach smoothie actually lasts 1 to 2 days refrigerated, stored in a sealed container or a mason jar with the lid on. It may separate, which is perfectly natural. Just shake it up and you are good to go!",
        preptime: "5 minutes",
        ingredients: ['1 large green apple', '½ cup water', '¼ cup raw cashews (or 1 banana and 1 ½ cups frozen mango or pineapple, skip the maple)', '14 cups baby spinach leaves or chopped spinach, loosely packed', '10 ice cubes', '1 tablespoon pure maple syrup', '1 ½ tablespoons fresh squeezed lemon juice (1/2 lemon)'],
        direction: ['Chop the apple into chunks, leaving the peel on.', 'Place everything in a blender and blend until smooth, stopping and scrapping as necessary.'],
        nutrition: "High in calcium, more than other vegetables; Very high in Vitamin K and Vitamin A; Low in calories (1 cup of raw spinach has 45 calories)"   
      },
    {
        name: 'Peanut Butter Smoothie',
        dairy: true,
        flavor: fruit,
        calories: 280,
        summary: "The flavor is best when it is freshly made, but it stores well too. Store it in a sealed container or a mason jar with the lid on. It may separate, which is perfectly natural. Just shake it up and you are good to go! It is nice to make this smoothie in advance so you can have breakfast or a snack on demand.",
        preptime: "5 minutes",
        ingredients: ['3 tablespoons peanut butter', '2 medium ripe bananas', '1 ½ cups ice', '¾ cup milk'],
        direction: ['Place all ingredients in a blender, breaking the banana into pieces.', 'Blend until smooth.'],
        nutrition: "Nutritional benefits of peanut butter. Share on Pinterest Peanut butter is a good source of protein and vitamin B-6. Peanut butter provides a good amount of protein, along with essential vitamins and minerals, such as magnesium, potassium, and zinc."   
      },
    {
        name: 'Mango Smoothie',
        dairy: true,
        flavor: fruit,
        calories: 197,
        summary: "This really is the perfect mango smoothie. In fact, it tastes more like mango ice cream than a healthy drink! This bright yellow puree has the best sweet flavor and the creamiest icy texture.",
        preptime: "5 minutes",
        ingredients: ['3 cups frozen mango (or fresh)', '1/2 banana', '½ cup water', '½ cup milk', '5 ice cubes', '1 tablespoon fresh squeezed lemon juice'],
        direction: ['Add all ingredients to a blender except for 1 cup frozen mango.', 'Blend until smooth.', "Add the final 1 cup frozen mango and blend again until smooth."],
        nutrition: "Mangoes are a nutritious tropical fruit that are low in calories, a good source of vitamin A and fiber, and an excellent source of vitamin C."   
      },
    {
        name: 'Watermelon Smoothie',
        dairy: false,
        flavor: fruit,
        calories: 166,
        summary: "This watermelon drink has no refined sugar and is a totally naturally sweet treat! Alex and I served it to our son Larson as a “treat” at the end of a meal: it is a great healthy dessert for kids — and adults, really! If you’d like to make it taste more decadent, you could add a little more sweetener: like a drizzle of maple syrup or honey.",
        preptime: "5 minutes",
        ingredients: ['3 cups cubed watermelon', '10 ounces (2 heaping cups) frozen strawberries', '1 banana, either frozen in slices or at room temperature'],
        direction: ['Chop the watermelon.', 'Place all ingredients in a blender, and blend until smooth and creamy.', "Serve immediately."],
        nutrition: "Watermelon is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit. A scrambling and trailing vine-like plant, it is a highly cultivated fruit worldwide, with more than 1,000 varieties."   
      },
    {
        name: 'Matcha Smoothie',
        dairy: true,
        flavor: fruit,
        calories: 224,
        summary: "Matcha is a fine powder made of ground green tea leaves that originated in East Asia. It is consumed as part of traditional Japanese tea ceremonies, and plays an integral part in Japanese culture. Matcha tastes grassy and earthy. This matcha smoothie pairs sweet fruity flavors with the bitter, grassy flavor of green tea.",
        preptime: "5 minutes",
        ingredients: ['1 ½ cups frozen pineapple', '1 ripe banana', '1 tablespoon matcha green tea powder', '1 teaspoon vanilla extract', '¼ cup Greek yogurt', '½ cup milk', '½ cup ice', '1 tablespoon maple syrup or honey'],
        direction: ['Place all ingredients in a blender, breaking the banana into pieces.', 'If desired you can blend without sweetener first and taste before adding.', 'Blend until creamy and frothy, stopping and scraping down the sides as necessary and adding a splash more milk if necessary.', 'Serve immediately, or store up to 1 day refrigerated (the bitter flavor comes out more as it sits, so you may need to adjust with sweetener after storing).'],
        nutrition: "Watermelon is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit. A scrambling and trailing vine-like plant, it is a highly cultivated fruit worldwide, with more than 1,000 varieties."   
      },
    {
        name: 'Peach Mango Smoothie',
        dairy: true,
        flavor: fruit,
        calories: 292,
        summary: "Peaches and mangos are two of our favorite fruits to use in smoothie recipes: their sweet tart flavor is ideal for sipping. So put them together, and it is fireworks. Try this Peach Mango Smoothie! It tastes like sunshine, with a beautifully bright flavor and creamy, thick texture.",
        preptime: "5 minutes",
        ingredients: ['1 cup frozen peach slices', '1 cup frozen mango chunks', '1 banana', '¼ cup Greek yogurt', '½ cup 100% orange juice (unsweetened)', '¼ cup milk', '6 ice cubes', '½ teaspoon vanilla extract'],
        direction: ['Place all ingredients in a blender, breaking the banana into pieces.', 'Blend until creamy and frothy, stopping and scraping down the sides as necessary.', 'If desired, garnish with a frozen peach.', 'Serve immediately or store in a covered jar in the refrigerator for 2 days.'],
        nutrition: "It provides 6% of your daily vitamin A needs and 15% of daily vitamin C needs. One medium peach also contains 2% or more daily value of vitamins E and K, niacin, folate, iron, choline, potassium, magnesium, phosphorus, manganese, zinc and copper."   
      },
    {
        name: 'Pomegranate Smoothie',
        dairy: true,
        flavor: fruit,
        calories: 225,
        summary: "Try this perfect Pomegranate Smoothie! This delicious pink drink is bursting with fruity flavor and one of our favorite ways to use pomegranate seeds (except eating them by the handful, of course!). It pairs the jewel-toned seeds with frozen pineapple and banana to make a creamy puree that is full of nutrients and vitamins. Throw in a little Greek yogurt for protein and you have got a smoothie that is filling and irresistibly good.",
        preptime: "5 minutes",
        ingredients: ['1 cup pomegranate seeds (cut and seed 1 pomegranate or buy 5 ounces seeds)', '1 cup frozen pineapple', '1 banana', '1 cup ice', '⅓ cup Greek yogurt', '½ tablespoon maple syrup'],
        direction: ['Place the pomegranate seeds in the blender and blend for a few seconds until mostly liquified.', 'Add the remaining ingredients in a blender, breaking the banana into pieces.', 'Blend until creamy and frothy, stopping and scraping down the sides as necessary.', 'Eat immediately or store 1 day in a sealed jar; if it separates, shake to re-integrate it.'],
        nutrition: "There are lots of inflated claims around pomegranate nutrition. In fact, a popular pomegranate products company was hit with an FTC complaint around false advertising about reducing the risk of cancer and heart disease. That said, pomegranates are a very healthy fruit that is part of a healthy diet!"   
      },
    {
        name: 'Dragon Fruit Smoothie',
        dairy: true,
        flavor: fruit,
        calories: 215,
        summary: "You have heard, eat the rainbow: here is a recipe that delivers the best pink puree around. Try this Dragon Fruit Smoothie! Dragon fruit is a delicious tropical fruit that is become extremely popular for smoothies and smoothie bowls. Because who could resist that lovely shade of fuchsia! Pair this tropical fruit is with banana, mango and pineapple for a vibrant puree that is sweet tart and pure delicious.",
        preptime: "5 minutes",
        ingredients: ['1 cup pomegranate seeds (cut and seed 1 pomegranate or buy 5 ounces seeds)', '1 cup frozen pineapple', '1 banana', '1 cup ice', '⅓ cup Greek yogurt', '½ tablespoon maple syrup'],
        direction: ['Place the pomegranate seeds in the blender and blend for a few seconds until mostly liquified.', 'Add the remaining ingredients in a blender, breaking the banana into pieces.', 'Blend until creamy and frothy, stopping and scraping down the sides as necessary.', 'Eat immediately or store 1 day in a sealed jar; if it separates, shake to re-integrate it.'],
        nutrition: "Dragon fruit is high in vitamin C and other antioxidants, which are good for your immune system. It can boost your iron levels. Iron is important for moving oxygen through your body and giving you energy, and dragon fruit has iron. And the vitamin C in dragon fruit helps your body take in and use the iron"   
      },
    {
        name: 'Orange Smoothie',
        dairy: true,
        flavor: fruit,
        calories: 388,
        summary: "Love the citrusy flavor of oranges? Let’s make an orange smoothie! Oranges are often overlooked when it comes to smoothie recipes. But they have got a beautifully citrusy flavor and loads of Vitamin C. This orange smoothie is creamy and tangy, with just the right amount of sweetness.",
        preptime: "5 minutes",
        ingredients: ['2 large peeled oranges (or 3 medium)', '½ tablespoon orange zest', '1 banana', '¼ cup Greek yogurt', '½ teaspoon vanilla extract', '1 tablespoon maple syrup or honey (optional)', '2 to 2 1/2 cups ice'],
        direction: ['Zest about ½ orange.', ' Add the peeled oranges, orange zest, banana, Greek yogurt, vanilla, maple syrup or honey, and ice to a blender.', 'Blend until smooth.' , 'Enjoy immediately or store up to 1 day refrigerated.'],
        nutrition: "An orange is a fruit of various citrus species in the family Rutaceae; it primarily refers to Citrus x sinensis, which is also called sweet orange, to distinguish it from the related Citrus x aurantium, referred to as bitter orange."   
      },
    {
        name: 'Cinnamon Apple Smoothie',
        dairy: true,
        flavor: fruit,
        calories: 210,
        summary: "Here is a smoothie that is full of cozy spiced, naturally sweet flavor: the perfect Apple Smoothie! This one works anytime and in any season. But of course it is perfect for fall when you have got mounds of apples to use up. In fact, it is a healthy way to enjoy the flavors of apple pie or apple crumble! Cinnamon and vanilla are just the right compliment to the sweet tart fruit. It is also loaded with protein from Greek yogurt, which gives it just the right creamy texture. You will almost feel like you are drinking an apple pie milkshake…but a wholesome version!",
        preptime: "5 minutes",
        ingredients: ['2 cups fresh apple chunks (skin on, about 1 large or 2 small apples)', '1 ripe banana', '½ cup Greek yogurt', '¼ cup milk', '8 ice cubes', '½ teaspoon vanilla extract', '¼ teaspoon cinnamon'],
        direction: ['Chop the apple.', ' Place all ingredients in a blender, breaking the banana into pieces.', 'Blend until creamy and frothy, stopping and scraping down the sides as necessary.', 'If desired, garnish with an apple slice.', 'Serve immediately or store in a covered jar in the refrigerator for 1 day.'],
        nutrition: "Apples are a good source of vitamin C: 1 apple contains 14% of your daily needs; They are full of fiber and water: 1 apple has 4 grams fiber or about 15% of your daily needs; Apples contain pectin, a type of fiber that acts as a prebiotic and helps with gut health; Most of the nutrients in apples are in the skin, so you should eat the skin as much as possible. That is why we included the skin in this apple smoothie."   
      },
 ]


console.log(recipeData);
/*
const recipeName = recipeData[0].name;
const recipeSummary = recipeData[0].summary;
const recipePrep = recipeData[0].preptime;
const recipeDirection = recipeData[0].direction;
const recipeCalories = recipeData[0].calories;
const recipeIngre = recipeData[0].ingredients;
*/

const root = document.getElementById("main");
const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

fetch(allRecipes).then((response) => response.json()).then((data) => {
  console.log(data);
  data.forEach((recipe) => {
    console.log(recipe);
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    const h2 = document.createElement("h2")
    h2.textContent = `${recipe.name}`;
    const imgage = document.createElement("img");
    img.src("blabla.png");
    const link = document.createElement("a");
    link.href = "overallrecipe.html";
    container.appendChild(card);
    card.appendChild(h2);
    card.appendChild(imgage);
    card.appendChild(link);
  })
})
.catch((error) => {
  console.lo("Error");
});

}
