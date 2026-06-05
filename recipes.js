const recipeBooks = {
    india: { 
        flag: "🇮🇳", 
        icon: "🍛", 
        name: "Indian Cuisine",
        recipes: [
            {
                name: "🍗 Chicken Tikka Masala",
                ingredients: ["🍗 500g Chicken", "🥛 200g Yogurt", "🧂 Tikka masala", "🧄 Garlic", "🧅 Ginger", "🧂 Spices", "🍅 Tomato sauce", "🥛 Cream"],
                instructions: [
                    "1. Marinate chicken with yogurt & spices 4hrs",
                    "2. Grill chicken pieces till charred",
                    "3. Make creamy tomato gravy base", 
                    "4. Add grilled chicken to gravy",
                    "5. Simmer with cream & butter",
                    "6. Garnish with coriander"
                ],
                time: "50 mins", difficulty: "Medium", servings: "4"
            },
            {
                name: "🧈 Butter Chicken", 
                ingredients: ["🍗 500g Chicken", "🧈 100g Butter", "🥛 200ml Cream", "🍅 3 Tomatoes", "🧄 Garlic", "🧅 Onion", "🌿 Kasuri methi"],
                instructions: [
                    "1. Marinate chicken 2hrs in yogurt",
                    "2. Fry chicken golden brown",
                    "3. Make rich tomato gravy", 
                    "4. Add chicken to creamy gravy",
                    "5. Simmer 15 mins with butter",
                    "6. Serve with naan"
                ],
                time: "45 mins", difficulty: "Medium", servings: "4"
            },
            {
                name: "🍛 Biryani",
                ingredients: ["🍗 1kg Chicken", "🍚 500g Basmati rice", "🧅 Fried onions", "🧂 Biryani masala", "🥛 Yogurt", "🌿 Mint", "🧈 Saffron"],
                instructions: [
                    "1. Marinate chicken overnight",
                    "2. Half-cook soaked basmati rice",
                    "3. Layer chicken & rice", 
                    "4. Add fried onions & saffron",
                    "5. Dum cook 30 mins sealed",
                    "6. Fluff & serve hot"
                ],
                time: "90 mins", difficulty: "Hard", servings: "6"
            },
            {
                name: "🧀 Paneer Tikka",
                ingredients: ["🧀 400g Paneer", "🫑 Bell peppers", "🧅 Onion", "🥛 Yogurt marinade", "🧂 Tikka masala", "🧈 Butter"],
                instructions: [
                    "1. Marinate paneer & veggies 2hrs",
                    "2. Skewer alternately",
                    "3. Grill or tandoor 15 mins",
                    "4. Baste with butter",
                    "5. Serve with mint chutney",
                    "6. Garnish with lemon"
                ],
                time: "30 mins", difficulty: "Easy", servings: "4"
            },
            {
                name: "🥣 Dal Makhani",
                ingredients: ["🌰 1 cup Urad dal", "🌰 ¼ cup Rajma", "🧈 100g Butter", "🥛 ½ cup Cream", "🍅 Tomatoes", "🧄 Ginger garlic"],
                instructions: [
                    "1. Soak & pressure cook dals",
                    "2. Make onion-tomato masala",
                    "3. Add cooked dal to masala",
                    "4. Simmer 30 mins on low",
                    "5. Finish with butter & cream",
                    "6. Smoke with charcoal"
                ],
                time: "60 mins", difficulty: "Medium", servings: "4"
            },
            {
                name: "🥔 Aloo Paratha",
                ingredients: ["🥔 4 Boiled potatoes", "🍚 2 cups Wheat flour", "🧂 Spices", "🧅 Onion", "🌿 Coriander", "🧈 Butter"],
                instructions: [
                    "1. Mash potatoes with spices",
                    "2. Make dough with wheat flour",
                    "3. Stuff potato filling",
                    "4. Roll & cook on tawa",
                    "5. Apply butter both sides",
                    "6. Serve with curd"
                ],
                time: "30 mins", difficulty: "Easy", servings: "4"
            },
            {
                name: "🐑 Rogan Josh",
                ingredients: ["🐑 500g Mutton", "🧂 Fennel powder", "🧅 Yogurt", "🌶️ Kashmiri chili", "🧄 Ginger", "🍅 Tomatoes"],
                instructions: [
                    "1. Marinate mutton with yogurt",
                    "2. Fry whole spices",
                    "3. Add ginger-garlic-onion",
                    "4. Cook mutton till tender",
                    "5. Add fennel & Kashmiri chili",
                    "6. Slow cook 45 mins"
                ],
                time: "75 mins", difficulty: "Medium", servings: "4"
            },
            {
                name: "🥞 Dosa", 
                ingredients: ["🍚 Rice", "🌰 Urad dal", "🧂 Salt", "🥥 Coconut chutney", "🍛 Sambar"],
                instructions: [
                    "1. Soak rice & urad dal",
                    "2. Grind to smooth batter",
                    "3. Ferment overnight",
                    "4. Spread thin on tawa",
                    "5. Cook till golden & crisp",
                    "6. Serve with chutney"
                ],
                time: "30 mins", difficulty: "Medium", servings: "4"
            },
            {
                name: "🥟 Idli Sambhar",
                ingredients: ["🥟 Idli batter", "🍛 Sambhar", "🥥 Coconut chutney", "🌿 Coriander"],
                instructions: [
                    "1. Steam idli batter in moulds",
                    "2. Prepare toor dal sambhar",
                    "3. Make coconut chutney",
                    "4. Serve hot idlis",
                    "5. Pour sambhar over idlis",
                    "6. Add chutney side"
                ],
                time: "25 mins", difficulty: "Easy", servings: "4"
            },
            {
                name: "🍞 Pav Bhaji",
                ingredients: ["🥔 Potatoes", "🍅 Tomatoes", "🫛 Peas", "🫑 Capsicum", "🍞 Pav buns", "🧈 Butter"],
                instructions: [
                    "1. Boil & mash mixed veggies",
                    "2. Make onion-tomato masala",
                    "3. Add mashed veggies",
                    "4. Mash to thick bhaji",
                    "5. Fry pav buns in butter",
                    "6. Serve with lemon & onion"
                ],
                time: "35 mins", difficulty: "Easy", servings: "4"
            },
            {
                name: "🥘 Chana Masala",
                ingredients: ["🌰 1 cup Chickpeas", "🍅 Tomatoes", "🧅 Onions", "🧂 Chana masala", "🧄 Ginger garlic"],
                instructions: [
                    "1. Soak & pressure cook chickpeas",
                    "2. Make onion-tomato masala",
                    "3. Add spices & cooked chickpeas",
                    "4. Simmer 20 mins",
                    "5. Garnish with coriander",
                    "6. Serve with puri/bhatura"
                ],
                time: "40 mins", difficulty: "Easy", servings: "4"
            },
            {
                name: "🍲 Rasam",
                ingredients: ["🍅 Tomatoes", "🫛 Toor dal water", "🌶️ Rasam powder", "🧄 Garlic", "🌿 Curry leaves"],
                instructions: [
                    "1. Boil tomatoes with dal water",
                    "2. Add rasam powder & spices",
                    "3. Temper with garlic & mustard",
                    "4. Add curry leaves & coriander",
                    "5. Serve hot as soup",
                    "6. Perfect with rice"
                ],
                time: "20 mins", difficulty: "Easy", servings: "4"
            },
            {
                name: "🍛 Palak Paneer",
                ingredients: ["🌿 500g Spinach", "🧀 250g Paneer", "🧅 Onion", "🍅 Tomatoes", "🧄 Garlic", "🥛 Cream"],
                instructions: [
                    "1. Blanch & blend spinach",
                    "2. Fry onions & tomatoes",
                    "3. Add spinach puree",
                    "4. Add paneer cubes",
                    "5. Finish with cream",
                    "6. Serve with naan"
                ],
                time: "30 mins", difficulty: "Easy", servings: "4"
            },
            {
                name: "🍗 Chicken 65",
                ingredients: ["🍗 500g Chicken", "🌶️ Curry leaves", "🧄 Ginger garlic", "🧂 Spices", "🌿 Coriander"],
                instructions: [
                    "1. Marinate chicken 2hrs",
                    "2. Deep fry till crisp",
                    "3. Temper curry leaves & garlic",
                    "4. Toss fried chicken",
                    "5. Garnish with lemon",
                    "6. Serve as starter"
                ],
                time: "25 mins", difficulty: "Medium", servings: "4"
            },
            {
                name: "🥗 Kachumber Salad",
                ingredients: ["🍅 Tomatoes", "🧅 Onions", "🥒 Cucumber", "🌿 Coriander", "🍋 Lemon", "🧂 Salt"],
                instructions: [
                    "1. Chop all veggies fine",
                    "2. Mix with lemon juice",
                    "3. Add salt & pepper",
                    "4. Garnish with coriander",
                    "5. Serve fresh",
                    "6. Perfect side dish"
                ],
                time: "10 mins", difficulty: "Easy", servings: "4"
            },
            {
                name: "🥥 Coconut Chutney",
                ingredients: ["🥥 Coconut", "🫛 Chana dal", "🧄 Ginger", "🌿 Coriander", "🫑 Green chili"],
                instructions: [
                    "1. Grind coconut with spices",
                    "2. Temper with mustard & urad dal",
                    "3. Add curry leaves",
                    "4. Mix well",
                    "5. Serve with idli/dosa",
                    "6. Store refrigerated"
                ],
                time: "15 mins", difficulty: "Easy", servings: "4"
            },
            {
                name: "🍯 Jalebi",
                ingredients: ["🍚 Maida", "🥛 Yogurt", "🍯 Sugar syrup", "🧈 Ghee", "🧂 Baking soda"],
                instructions: [
                    "1. Make maida batter",
                    "2. Ferment 8hrs",
                    "3. Make sugar syrup",
                    "4. Fry jalebi spirals",
                    "5. Soak in hot syrup",
                    "6. Serve hot"
                ],
                time: "60 mins", difficulty: "Medium", servings: "6"
            },
            {
                name: "🥛 Lassi",
                ingredients: ["🥛 2 cups Yogurt", "🍯 Sugar", "🥛 ½ cup Water", "🌿 Cardamom", "🧉 Saffron"],
                instructions: [
                    "1. Blend yogurt & sugar",
                    "2. Add water & ice",
                    "3. Add cardamom powder",
                    "4. Garnish with saffron",
                    "5. Serve chilled",
                    "6. Sweet or salted"
                ],
                time: "5 mins", difficulty: "Easy", servings: "2"
            },
            {
                name: "🍖 Tandoori Chicken",
                ingredients: ["🍗 1kg Chicken", "🥛 Yogurt", "🧂 Tandoori masala", "🧄 Ginger garlic", "🧈 Butter"],
                instructions: [
                    "1. Make deep cuts in chicken",
                    "2. Apply tandoori marinade",
                    "3. Marinate overnight",
                    "4. Grill or tandoor",
                    "5. Baste with butter",
                    "6. Serve with salads"
                ],
                time: "40 mins", difficulty: "Medium", servings: "4"
            },
            {
                name: "🍛 Vindaloo",
                ingredients: ["🐖 Pork/Chicken", "🧄 Vinegar", "🌶️ Vindaloo masala", "🧅 Potatoes", "🍅 Tomatoes"],
                instructions: [
                    "1. Marinate meat in vinegar",
                    "2. Fry vindaloo paste",
                    "3. Add meat & potatoes",
                    "4. Slow cook 45 mins",
                    "5. Adjust spice level",
                    "6. Serve with rice"
                ],
                time: "60 mins", difficulty: "Medium", servings: "4"
            }
        ]
    },


   thailand: {
    flag: "🇹🇭", 
    icon: "🍜", 
    name: "Thai Cuisine",
    recipes: [
        {
            name: "🍜 Pad Thai",
            ingredients: ["🍜 Rice noodles", "🥚 Eggs", "🦐 Shrimp", "🌿 Bean sprouts", "🥜 Peanuts", "🌶️ Tamarind", "🧄 Garlic", "🧅 Shallots"],
            instructions: [
                "1. Soak rice noodles 20 mins",
                "2. Stir-fry garlic & shallots", 
                "3. Add eggs & shrimp",
                "4. Toss with noodles & sauce",
                "5. Add bean sprouts & chives",
                "6. Garnish with peanuts & lime"
            ],
            time: "25 mins", difficulty: "Medium", servings: "2"
        },
        {
            name: "🍲 Tom Yum Soup",
            ingredients: ["🍤 Shrimp", "🍄 Mushrooms", "🌿 Lemongrass", "🍃 Kaffir lime", "🌶️ Chili", "🥬 Galangal", "🍋 Lime", "🛢️ Fish sauce"],
            instructions: [
                "1. Boil lemongrass & galangal",
                "2. Add mushrooms & shrimp",
                "3. Add chili paste & fish sauce",
                "4. Simmer 5 mins",
                "5. Finish with lime juice",
                "6. Garnish with coriander"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🌿 Green Curry",
            ingredients: ["🐔 Chicken", "🥥 Coconut milk", "🌿 Green curry paste", "🍆 Eggplant", "🫛 Bamboo shoots", "🍃 Kaffir lime"],
            instructions: [
                "1. Fry green curry paste",
                "2. Add coconut milk",
                "3. Add chicken & veggies",
                "4. Simmer 15 mins",
                "5. Add fish sauce & sugar",
                "6. Garnish with basil"
            ],
            time: "30 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥥 Massaman Curry",
            ingredients: ["🥩 Beef", "🥥 Coconut milk", "🥜 Peanuts", "🍯 Palm sugar", "🍋 Tamarind", "🧅 Potatoes"],
            instructions: [
                "1. Fry massaman paste",
                "2. Add coconut milk & beef",
                "3. Add potatoes & peanuts",
                "4. Simmer 1.5 hrs",
                "5. Season with tamarind",
                "6. Serve with rice"
            ],
            time: "120 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥗 Som Tam",
            ingredients: ["🥬 Green papaya", "🍅 Cherry tomatoes", "🫛 Long beans", "🦐 Dried shrimp", "🥜 Peanuts", "🧄 Garlic", "🌶️ Chili"],
            instructions: [
                "1. Shred green papaya",
                "2. Pound garlic & chilies",
                "3. Add tomatoes & beans",
                "4. Mix with fish sauce & lime",
                "5. Toss with peanuts",
                "6. Serve immediately"
            ],
            time: "15 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🍚 Thai Fried Rice",
            ingredients: ["🍚 Jasmine rice", "🥚 Eggs", "🦐 Shrimp", "🥬 Chinese broccoli", "🧄 Garlic", "🌿 Cilantro"],
            instructions: [
                "1. Fry garlic & eggs",
                "2. Add shrimp & rice",
                "3. Season with fish sauce",
                "4. Add chinese broccoli",
                "5. Fry till crispy",
                "6. Garnish with cucumber"
            ],
            time: "15 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🥭 Mango Sticky Rice",
            ingredients: ["🥭 Ripe mango", "🍚 Glutinous rice", "🥥 Coconut milk", "🍯 Palm sugar"],
            instructions: [
                "1. Steam sticky rice",
                "2. Cook coconut milk sauce",
                "3. Mix rice with sauce",
                "4. Slice ripe mango",
                "5. Pour extra sauce",
                "6. Sprinkle sesame seeds"
            ],
            time: "30 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍖 Satay",
            ingredients: ["🍗 Chicken", "🥥 Coconut milk", "🌶️ Turmeric", "🧄 Lemongrass", "🧂 Coriander"],
            instructions: [
                "1. Marinate chicken skewers",
                "2. Grill till charred",
                "3. Make peanut sauce",
                "4. Serve with cucumber",
                "5. Dip in peanut sauce",
                "6. Garnish with cilantro"
            ],
            time: "25 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🥬 Papaya Salad",
            ingredients: ["🥬 Papaya", "🍅 Tomatoes", "🫛 Crab", "🥜 Peanuts", "🌶️ Bird's eye chili"],
            instructions: [
                "1. Shred unripe papaya",
                "2. Pound chilies & garlic",
                "3. Add crab & fish sauce",
                "4. Toss with lime juice",
                "5. Add peanuts",
                "6. Serve fresh"
            ],
            time: "15 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🔴 Red Curry",
            ingredients: ["🐔 Chicken", "🥥 Coconut milk", "🔴 Red curry paste", "🍆 Eggplant", "🫛 Bamboo"],
            instructions: [
                "1. Fry red curry paste",
                "2. Add coconut milk",
                "3. Add chicken & eggplant",
                "4. Simmer 10 mins",
                "5. Add fish sauce",
                "6. Garnish with basil"
            ],
            time: "25 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍲 Tom Kha Gai",
            ingredients: ["🐔 Chicken", "🥥 Coconut milk", "🍄 Mushrooms", "🌿 Galangal", "🍋 Lime", "🍃 Lemongrass"],
            instructions: [
                "1. Simmer coconut milk",
                "2. Add galangal & lemongrass",
                "3. Add chicken & mushrooms",
                "4. Season with fish sauce",
                "5. Finish with lime juice",
                "6. Garnish with cilantro"
            ],
            time: "25 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🥡 Spring Rolls",
            ingredients: ["🥬 Veggies", "🍤 Shrimp", "🌿 Glass noodles", "🥚 Egg", "🌶️ Sweet chili sauce"],
            instructions: [
                "1. Mix filling ingredients",
                "2. Wrap in spring roll sheets",
                "3. Seal with egg wash",
                "4. Deep fry till golden",
                "5. Drain excess oil",
                "6. Serve with dipping sauce"
            ],
            time: "30 mins", difficulty: "Medium", servings: "6"
        },
        {
            name: "🍲 Khao Soi",
            ingredients: ["🐔 Chicken", "🍜 Egg noodles", "🥥 Coconut milk", "🌶️ Curry paste", "🧅 Pickled mustard"],
            instructions: [
                "1. Fry curry paste",
                "2. Add coconut milk & chicken",
                "3. Boil egg noodles",
                "4. Assemble in bowl",
                "5. Top with crispy noodles",
                "6. Serve with condiments"
            ],
            time: "40 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍤 Goong Pao",
            ingredients: ["🍤 Shrimp", "🥬 Asparagus", "🧄 Garlic", "🌶️ Chili", "🛢️ Oyster sauce"],
            instructions: [
                "1. Stir-fry shrimp quickly",
                "2. Add asparagus & garlic",
                "3. Season with sauces",
                "4. Toss 2 mins high heat",
                "5. Garnish with spring onion",
                "6. Serve with rice"
            ],
            time: "15 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🍜 Drunken Noodles",
            ingredients: ["🍜 Wide rice noodles", "🌿 Holy basil", "🥬 Chinese broccoli", "🌶️ Chili", "🧄 Garlic"],
            instructions: [
                "1. Stir-fry garlic & chilies",
                "2. Add noodles & sauce",
                "3. Toss with veggies",
                "4. Add holy basil last",
                "5. Serve immediately",
                "6. Extra spicy!"
            ],
            time: "20 mins", difficulty: "Medium", servings: "2"
        },
        {
            name: "🥥 Sticky Rice",
            ingredients: ["🍚 Glutinous rice", "🥥 Coconut milk", "🍯 Sugar"],
            instructions: [
                "1. Soak rice 4hrs",
                "2. Steam in basket",
                "3. Cook coconut sauce",
                "4. Mix rice with sauce",
                "5. Rest 10 mins",
                "6. Serve warm"
            ],
            time: "30 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🌶️ Nam Prik",
            ingredients: ["🌶️ Chili", "🧄 Garlic", "🦐 Shrimp paste", "🍅 Tomatoes", "🥬 Veggies"],
            instructions: [
                "1. Grill chilies & garlic",
                "2. Pound with shrimp paste",
                "3. Add grilled tomatoes",
                "4. Season with fish sauce",
                "5. Serve with veggies",
                "6. Traditional dip"
            ],
            time: "20 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍗 Gai Yang",
            ingredients: ["🍗 Chicken", "🧄 Garlic", "🌿 Coriander root", "🧂 Fish sauce", "🍯 Sugar"],
            instructions: [
                "1. Marinate chicken overnight",
                "2. Grill over charcoal",
                "3. Charred skin crispy",
                "4. Serve with sticky rice",
                "5. Nam jim jaew sauce",
                "6. Thai BBQ chicken"
            ],
            time: "30 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🥗 Yum Salad",
            ingredients: ["🍤 Shrimp", "🐔 Chicken", "🥒 Cucumber", "🍅 Tomatoes", "🌿 Herbs", "🌶️ Chili"],
            instructions: [
                "1. Boil shrimp & chicken",
                "2. Slice veggies thin",
                "3. Toss with lime dressing",
                "4. Add fish sauce & sugar",
                "5. Garnish with herbs",
                "6. Spicy Thai salad"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍜 Kuay Teow",
            ingredients: ["🍜 Rice noodles", "🥩 Beef", "🥬 Pak choi", "🧄 Garlic", "🛢️ Dark soy"],
            instructions: [
                "1. Boil rice noodles",
                "2. Stir-fry beef & garlic",
                "3. Add pak choi",
                "4. Season with soy sauces",
                "5. Toss with noodles",
                "6. Serve hot"
            ],
            time: "20 mins", difficulty: "Easy", servings: "2"
        }
    ]
},

   japan: {
    flag: "🇯🇵", 
    icon: "🍣", 
    name: "Japanese Cuisine",
    recipes: [
        {
            name: "🍣 Sushi Roll",
            ingredients: ["🍚 Sushi rice", "🌿 Nori seaweed", "🐟 Tuna/Salmon", "🥒 Cucumber", "🥑 Avocado", "🧧 Wasabi"],
            instructions: [
                "1. Cook sushi rice with vinegar",
                "2. Place nori on bamboo mat",
                "3. Spread rice evenly",
                "4. Add fish & veggies in center",
                "5. Roll tightly using mat",
                "6. Slice & serve with soy sauce"
            ],
            time: "45 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍜 Ramen",
            ingredients: ["🍜 Ramen noodles", "🥚 Eggs", "🐖 Pork", "🌿 Green onions", "🛢️ Soy/tonkotsu broth", "🍄 Mushrooms"],
            instructions: [
                "1. Boil ramen noodles",
                "2. Make rich pork broth",
                "3. Soft boil marinated eggs",
                "4. Assemble in bowl",
                "5. Add toppings (chashu, nori)",
                "6. Slurp immediately!"
            ],
            time: "120 mins", difficulty: "Hard", servings: "2"
        },
        {
            name: "🍤 Tempura",
            ingredients: ["🍤 Shrimp", "🥬 Veggies", "🥚 Egg", "🍚 Cake flour", "🥛 Ice water", "🛢️ Oil"],
            instructions: [
                "1. Make light tempura batter",
                "2. Heat oil to 170°C",
                "3. Dip shrimp & veggies",
                "4. Fry 2-3 mins till crisp",
                "5. Drain on paper towel",
                "6. Serve with tentsuyu sauce"
            ],
            time: "20 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍗 Teriyaki Chicken",
            ingredients: ["🍗 Chicken thigh", "🍯 Soy sauce", "🍯 Mirin", "🍯 Sugar", "🧄 Ginger"],
            instructions: [
                "1. Pan fry chicken skin down",
                "2. Mix teriyaki sauce",
                "3. Flip & glaze chicken",
                "4. Reduce sauce to thick",
                "5. Garnish with sesame",
                "6. Serve with rice"
            ],
            time: "20 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🐟 Sashimi",
            ingredients: ["🐟 Fresh tuna", "🐟 Salmon", "🐟 Yellowtail", "🌿 Shiso", "🧧 Wasabi", "🥢 Soy sauce"],
            instructions: [
                "1. Slice fish 3mm thick",
                "2. Arrange on chilled plate",
                "3. Garnish with shiso leaves",
                "4. Serve ice cold",
                "5. Dip lightly in soy",
                "6. Eat immediately"
            ],
            time: "15 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🍜 Udon Noodles",
            ingredients: ["🍜 Thick udon", "🥩 Beef", "🥬 Spinach", "🥚 Egg", "🛢️ Dashi broth"],
            instructions: [
                "1. Boil udon noodles",
                "2. Make dashi broth",
                "3. Simmer beef & spinach",
                "4. Add udon to broth",
                "5. Top with raw egg",
                "6. Sprinkle green onions"
            ],
            time: "25 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🍙 Onigiri",
            ingredients: ["🍚 Sushi rice", "🌿 Nori", "🥓 Salmon", "🧂 Umeboshi", "🦪 Seaweed"],
            instructions: [
                "1. Wet hands with saltwater",
                "2. Mold rice into triangles",
                "3. Add filling in center",
                "4. Wrap with nori strip",
                "5. Press gently to shape",
                "6. Perfect lunch snack"
            ],
            time: "15 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🐙 Takoyaki",
            ingredients: ["🐙 Boiled octopus", "🥚 Batter", "🥓 Bonito flakes", "🥥 Takoyaki sauce", "🧿 Aonori"],
            instructions: [
                "1. Heat takoyaki pan",
                "2. Pour batter halfway",
                "3. Add octopus pieces",
                "4. Fill with more batter",
                "5. Flip constantly till golden",
                "6. Drizzle sauce & mayo"
            ],
            time: "20 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥞 Okonomiyaki",
            ingredients: ["🥬 Cabbage", "🍚 Flour", "🥚 Eggs", "🐖 Pork belly", "🥥 Okonomiyaki sauce"],
            instructions: [
                "1. Mix cabbage batter",
                "2. Pour on hot griddle",
                "3. Add pork belly slices",
                "4. Flip when golden",
                "5. Drizzle okonomiyaki sauce",
                "6. Sprinkle bonito flakes"
            ],
            time: "25 mins", difficulty: "Medium", servings: "2"
        },
        {
            name: "🍵 Miso Soup",
            ingredients: ["🍄 Tofu", "🌿 Wakame seaweed", "🥬 Green onions", "🍵 Miso paste", "🥛 Dashi"],
            instructions: [
                "1. Make dashi stock",
                "2. Dissolve miso paste",
                "3. Add tofu cubes",
                "4. Add wakame seaweed",
                "5. Sprinkle green onions",
                "6. Serve steaming hot"
            ],
            time: "10 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍣 Nigiri",
            ingredients: ["🍚 Sushi rice", "🐟 Raw fish", "🧧 Wasabi"],
            instructions: [
                "1. Shape rice oval",
                "2. Slice fish thinly",
                "3. Add dab of wasabi",
                "4. Press fish on rice",
                "5. Dip lightly in soy",
                "6. Eat in one bite"
            ],
            time: "20 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥢 Yakitori",
            ingredients: ["🍗 Chicken", "🥬 Leeks", "🧂 Salt", "🍯 Tare sauce"],
            instructions: [
                "1. Skewer chicken & leeks",
                "2. Grill over binchotan charcoal",
                "3. Season with salt",
                "4. Glaze with tare sauce",
                "5. Char slightly",
                "6. Serve with shichimi"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍲 Oden",
            ingredients: ["🥚 Eggs", "🧈 Daikon", "🍄 Konnyaku", "🐟 Fish cakes", "🥬 Chikuwa"],
            instructions: [
                "1. Make dashi broth",
                "2. Simmer ingredients 1hr",
                "3. Add radish & konnyaku",
                "4. Season with soy",
                "5. Serve in small bowls",
                "6. Winter comfort food"
            ],
            time: "90 mins", difficulty: "Easy", servings: "6"
        },
        {
            name: "🥟 Gyoza",
            ingredients: ["🥬 Cabbage", "🐖 Pork", "🥢 Ginger", "🧄 Garlic", "🥚 Wrappers"],
            instructions: [
                "1. Mix pork filling",
                "2. Wrap in gyoza skins",
                "3. Pan fry bottom",
                "4. Add water & steam",
                "5. Crispy bottom soft top",
                "6. Dip in soy vinegar"
            ],
            time: "30 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍜 Soba",
            ingredients: ["🍜 Buckwheat noodles", "🥬 Spinach", "🥚 Egg", "🛢️ Tsuyu broth"],
            instructions: [
                "1. Boil soba noodles",
                "2. Make chilled dipping sauce",
                "3. Blanch spinach",
                "4. Serve cold with wasabi",
                "5. Dip noodles in tsuyu",
                "6. Slurp loudly!"
            ],
            time: "15 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🍲 Sukiyaki",
            ingredients: ["🥩 Thin beef", "🥬 Napa cabbage", "🍄 Shiitake", "🥚 Eggs", "🛢️ Warishita sauce"],
            instructions: [
                "1. Arrange ingredients on table",
                "2. Heat iron pot",
                "3. Add warishita sauce",
                "4. Cook beef & veggies",
                "5. Dip in raw egg",
                "6. Eat family style"
            ],
            time: "30 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥗 Sunomono",
            ingredients: ["🦐 Shrimp", "🥒 Cucumber", "🌿 Wakame", "🍋 Rice vinegar"],
            instructions: [
                "1. Thinly slice cucumber",
                "2. Salt & drain water",
                "3. Boil & shock shrimp",
                "4. Mix vinegar dressing",
                "5. Toss all together",
                "6. Garnish with sesame"
            ],
            time: "15 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍖 Tonkatsu",
            ingredients: ["🍖 Pork cutlet", "🍚 Panko breadcrumbs", "🥚 Egg", "🥬 Cabbage"],
            instructions: [
                "1. Pound pork thin",
                "2. Bread with flour-egg-panko",
                "3. Deep fry 170°C",
                "4. Drain & slice",
                "5. Serve with tonkatsu sauce",
                "6. Shredded cabbage side"
            ],
            time: "20 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🥢 Shabu Shabu",
            ingredients: ["🥩 Thin beef", "🥬 Veggies", "🍜 Udon", "🥚 Egg", "🛢️ Ponzu"],
            instructions: [
                "1. Boil kombu dashi",
                "2. Swirl beef in hot broth",
                "3. Cook veggies",
                "4. Dip in ponzu sauce",
                "5. End with udon noodles",
                "6. Interactive hot pot"
            ],
            time: "30 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍙 Tamagoyaki",
            ingredients: ["🥚 4 Eggs", "🍯 Sugar", "🛢️ Soy sauce", "🧂 Dashi", "🛢️ Oil"],
            instructions: [
                "1. Beat eggs with seasonings",
                "2. Heat tamagoyaki pan",
                "3. Pour thin egg layer",
                "4. Roll & push aside",
                "5. Repeat 4-5 times",
                "6. Slice into pieces"
            ],
            time: "15 mins", difficulty: "Medium", servings: "4"
        }
    ]
},

    italy: {
    flag: "🇮🇹", 
    icon: "🍕", 
    name: "Italian Cuisine",
    recipes: [
        {
            name: "🍕 Margherita Pizza",
            ingredients: ["🍅 San Marzano tomatoes", "🧀 Fresh mozzarella", "🌿 Basil", "🥖 Pizza dough", "🛢️ Olive oil"],
            instructions: [
                "1. Stretch pizza dough thin",
                "2. Add tomato sauce base",
                "3. Fresh mozzarella slices",
                "4. Bake 450°C 90 seconds",
                "5. Fresh basil leaves",
                "6. Drizzle olive oil"
            ],
            time: "20 mins", difficulty: "Medium", servings: "2"
        },
        {
            name: "🍝 Spaghetti Carbonara",
            ingredients: ["🍝 Spaghetti", "🥚 3 Egg yolks", "🧀 Pecorino Romano", "🥓 Guanciale", "🧂 Black pepper"],
            instructions: [
                "1. Boil spaghetti al dente",
                "2. Fry guanciale till crisp",
                "3. Mix egg yolks & pecorino",
                "4. Toss hot pasta with eggs",
                "5. Add guanciale & pepper",
                "6. NO CREAM!"
            ],
            time: "15 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍝 Lasagna",
            ingredients: ["🍝 Lasagna sheets", "🥩 Bolognese sauce", "🧀 Bechamel", "🧀 Parmesan", "🍅 Tomatoes"],
            instructions: [
                "1. Make rich bolognese sauce",
                "2. Prepare creamy bechamel",
                "3. Layer pasta & sauces",
                "4. Top with parmesan",
                "5. Bake 180°C 40 mins",
                "6. Rest 10 mins before cutting"
            ],
            time: "120 mins", difficulty: "Hard", servings: "6"
        },
        {
            name: "🍝 Pasta Bolognese",
            ingredients: ["🍝 Tagliatelle", "🥩 Ground beef", "🍅 Tomatoes", "🥬 Carrot", "🧅 Onion", "🍷 Red wine"],
            instructions: [
                "1. Soffritto (onion-carrot-celery)",
                "2. Brown ground beef",
                "3. Deglaze with red wine",
                "4. Add tomatoes & simmer 3hrs",
                "5. Toss with tagliatelle",
                "6. Fresh parmesan"
            ],
            time: "180 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍚 Risotto",
            ingredients: ["🍚 Arborio rice", "🍲 Chicken stock", "🧈 Butter", "🧀 Parmesan", "🧅 Onion", "🍷 White wine"],
            instructions: [
                "1. Warm chicken stock",
                "2. Soffritto onions",
                "3. Toast arborio rice",
                "4. Deglaze with white wine",
                "5. Add stock ladle by ladle",
                "6. Finish with mantecatura"
            ],
            time: "35 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍮 Tiramisu",
            ingredients: ["🍮 Mascarpone", "🥚 Eggs", "🍯 Sugar", "☕ Espresso", "🍪 Savoiardi", "🥃 Marsala"],
            instructions: [
                "1. Whip egg yolks & sugar",
                "2. Mix mascarpone cream",
                "3. Dip savoiardi in espresso",
                "4. Layer cream & biscuits",
                "5. Dust cocoa powder",
                "6. Chill 4hrs minimum"
            ],
            time: "30 mins", difficulty: "Easy", servings: "8"
        },
        {
            name: "🥩 Osso Buco",
            ingredients: ["🥩 Veal shanks", "🍷 White wine", "🥬 Celery", "🧅 Onion", "🥕 Carrot", "🍋 Lemon zest"],
            instructions: [
                "1. Brown veal shanks",
                "2. Soffritto vegetables",
                "3. Deglaze with white wine",
                "4. Braise 2hrs covered",
                "5. Gremolata (parsley-lemon-garlic)",
                "6. Serve with saffron risotto"
            ],
            time: "150 mins", difficulty: "Hard", servings: "4"
        },
        {
            name: "🥗 Caprese Salad",
            ingredients: ["🍅 Ripe tomatoes", "🧀 Mozzarella", "🌿 Basil", "🛢️ Olive oil", "🧂 Sea salt"],
            instructions: [
                "1. Slice tomatoes thick",
                "2. Slice mozzarella same size",
                "3. Layer tomato-mozzarella",
                "4. Fresh basil leaves",
                "5. Drizzle best olive oil",
                "6. Pinch sea salt"
            ],
            time: "10 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🥟 Gnocchi",
            ingredients: ["🥔 1kg Potatoes", "🍚 Flour", "🥚 Egg yolk", "🧂 Salt", "🧈 Butter"],
            instructions: [
                "1. Boil potatoes in skin",
                "2. Rice through ricer",
                "3. Add flour & egg yolk",
                "4. Knead gently",
                "5. Shape into gnocchi",
                "6. Boil till they float"
            ],
            time: "45 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍮 Panna Cotta",
            ingredients: ["🥛 Cream", "🥛 Milk", "🍯 Sugar", "🍮 Gelatin", "🍓 Berries"],
            instructions: [
                "1. Heat cream & milk",
                "2. Dissolve sugar",
                "3. Bloom & add gelatin",
                "4. Pour into molds",
                "5. Chill 4hrs",
                "6. Unmold & berry coulis"
            ],
            time: "20 mins", difficulty: "Easy", servings: "6"
        },
        {
            name: "🍕 Quattro Stagioni",
            ingredients: ["🍅 Tomato sauce", "🧀 Mozzarella", "🍄 Mushrooms", "🛢️ Artichokes", "🐖 Ham", "🫒 Olives"],
            instructions: [
                "1. Divide pizza in 4 sections",
                "2. Tomato base everywhere",
                "3. 4 different toppings",
                "4. Mozzarella everywhere",
                "5. High heat pizza oven",
                "6. Fresh basil finish"
            ],
            time: "25 mins", difficulty: "Medium", servings: "2"
        },
        {
            name: "🍝 Pesto Genovese",
            ingredients: ["🌿 Basil", "🧀 Parmesan", "🥜 Pine nuts", "🧄 Garlic", "🛢️ Olive oil", "🍝 Trofie"],
            instructions: [
                "1. Pound basil & pine nuts",
                "2. Add garlic & parmesan",
                "3. Slowly emulsify olive oil",
                "4. Cook trofie al dente",
                "5. Toss with pesto",
                "6. Boiling water emulsion"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍝 Amatriciana",
            ingredients: ["🍝 Bucatini", "🥓 Guanciale", "🍅 San Marzano", "🧀 Pecorino", "🌶️ Chili"],
            instructions: [
                "1. Render guanciale fat",
                "2. Remove guanciale",
                "3. Tomato sauce in fat",
                "4. Add chili flakes",
                "5. Toss with bucatini",
                "6. Pecorino tableside"
            ],
            time: "25 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥖 Focaccia",
            ingredients: ["🍚 Flour", "🧂 Salt", "🛢️ Olive oil", "🍃 Rosemary", "🧂 Sea salt"],
            instructions: [
                "1. High hydration dough",
                "2. Long cold ferment",
                "3. Stretch & fold",
                "4. Dimple generously",
                "5. Rosemary & sea salt",
                "6. 250°C steam bake"
            ],
            time: "12hrs", difficulty: "Medium", servings: "6"
        },
        {
            name: "🧀 Mozzarella",
            ingredients: ["🥛 Fresh milk", "🧂 Citric acid", "🧂 Rennet", "🧂 Salt"],
            instructions: [
                "1. Heat milk to 32°C",
                "2. Add citric acid",
                "3. Add rennet solution",
                "4. Cut & heat curds",
                "5. Stretch in hot water",
                "6. Form balls & brine"
            ],
            time: "60 mins", difficulty: "Hard", servings: "4"
        },
        {
            name: "🍝 Ravioli",
            ingredients: ["🍚 Flour", "🥚 Eggs", "🥬 Spinach", "🧀 Ricotta", "🧈 Butter"],
            instructions: [
                "1. Fresh pasta dough",
                "2. Roll thin sheets",
                "3. Fill with ricotta-spinach",
                "4. Seal ravioli parcels",
                "5. Boil 2 mins",
                "6. Sage butter sauce"
            ],
            time: "90 mins", difficulty: "Hard", servings: "4"
        },
        {
            name: "🥗 Insalata",
            ingredients: ["🌿 Arugula", "🍅 Tomatoes", "🧀 Parmesan", "🛢️ Olive oil", "🍋 Lemon"],
            instructions: [
                "1. Fresh rocket/arugula",
                "2. Heirloom tomatoes",
                "3. Shaved parmesan",
                "4. Lemon-olive oil dressing",
                "5. Sea salt flakes",
                "6. Simple perfection"
            ],
            time: "10 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🍕 Calzone",
            ingredients: ["🍅 Tomato sauce", "🧀 Mozzarella", "🍖 Salami", "🥬 Spinach", "🥚 Egg wash"],
            instructions: [
                "1. Pizza dough half",
                "2. Fill one side generously",
                "3. Fold & seal edges",
                "4. Egg wash & slash top",
                "5. High heat bake",
                "6. Serve with marinara"
            ],
            time: "25 mins", difficulty: "Medium", servings: "2"
        },
        {
            name: "🍮 Cannoli",
            ingredients: ["🍚 Flour", "🥛 Marsala wine", "🧀 Ricotta", "🍯 Sugar", "🍊 Candied fruit"],
            instructions: [
                "1. Fry cannoli shells",
                "2. Whip ricotta & sugar",
                "3. Pipe filling",
                "4. Dip ends in chocolate",
                "5. Candied orange pieces",
                "6. Dust powdered sugar"
            ],
            time: "60 mins", difficulty: "Medium", servings: "12"
        }
    ]
},

    mexico: {
    flag: "🇲🇽", 
    icon: "🌮", 
    name: "Mexican Cuisine",
    recipes: [
        {
            name: "🌮 Tacos Al Pastor",
            ingredients: ["🥩 Pork shoulder", "🍍 Pineapple", "🌶️ Guajillo chiles", "🧄 Garlic", "🥬 Onion", "🌿 Cilantro", "🧀 Cotija"],
            instructions: [
                "1. Marinate pork with chiles 24hrs",
                "2. Stack on vertical spit",
                "3. Slow roast with pineapple",
                "4. Shave thin slices",
                "5. Serve in corn tortillas",
                "6. Top with onion & cilantro"
            ],
            time: "180 mins", difficulty: "Hard", servings: "6"
        },
        {
            name: "🥑 Guacamole",
            ingredients: ["🥑 4 Avocados", "🍅 Tomatoes", "🧅 Red onion", "🌿 Cilantro", "🌶️ Jalapeño", "🍋 Lime"],
            instructions: [
                "1. Mash avocados coarsely",
                "2. Fine dice onion & tomato",
                "3. Mince jalapeño & cilantro",
                "4. Mix with lime juice",
                "5. Season with salt",
                "6. Serve with tortilla chips"
            ],
            time: "10 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🌯 Enchiladas",
            ingredients: ["🍗 Chicken", "🧀 Cheese", "🌶️ Enchilada sauce", "🥬 Onion", "🧀 Sour cream"],
            instructions: [
                "1. Shred cooked chicken",
                "2. Warm corn tortillas",
                "3. Fill & roll tightly",
                "4. Cover with enchilada sauce",
                "5. Top with cheese",
                "6. Bake 20 mins 180°C"
            ],
            time: "40 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🌯 Burritos",
            ingredients: ["🍚 Rice", "🐮 Beef", "🫘 Beans", "🥑 Guacamole", "🧀 Cheese", "🥬 Lettuce"],
            instructions: [
                "1. Warm large flour tortilla",
                "2. Layer rice & beans base",
                "3. Add seasoned beef",
                "4. Toppings (guac, cheese, salsa)",
                "5. Fold & roll tightly",
                "6. Optional grill for crisp"
            ],
            time: "25 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🌶️ Chiles Rellenos",
            ingredients: ["🌶️ Poblano peppers", "🧀 Queso fresco", "🥚 Egg batter", "🍅 Tomato sauce"],
            instructions: [
                "1. Roast & peel poblanos",
                "2. Stuff with queso fresco",
                "3. Dip in egg batter",
                "4. Fry till golden",
                "5. Serve with tomato sauce",
                "6. Garnish with cilantro"
            ],
            time: "45 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍲 Pozole",
            ingredients: ["🐖 Pork", "🌽 Hominy", "🌶️ Chiles", "🧄 Garlic", "🥬 Cabbage", "🍋 Lime"],
            instructions: [
                "1. Simmer pork & hominy 3hrs",
                "2. Blend red chile sauce",
                "3. Combine & cook 30 mins",
                "4. Shred pork",
                "5. Serve with toppings",
                "6. Radish, cabbage, lime"
            ],
            time: "240 mins", difficulty: "Hard", servings: "8"
        },
        {
            name: "🍫 Mole Poblano",
            ingredients: ["🐔 Chicken", "🌶️ 30+ chiles", "🥥 Chocolate", "🥜 Nuts", "🍯 Sugar"],
            instructions: [
                "1. Toast & soak chiles",
                "2. Grind nuts & seeds",
                "3. Blend all ingredients",
                "4. Simmer 2hrs",
                "5. Add chicken pieces",
                "6. Garnish with sesame"
            ],
            time: "180 mins", difficulty: "Hard", servings: "6"
        },
        {
            name: "🌯 Tamales",
            ingredients: ["🌽 Masa", "🐖 Pork", "🍅 Chile sauce", "🥬 Corn husks"],
            instructions: [
                "1. Cook pork in chile sauce",
                "2. Spread masa on husk",
                "3. Add pork filling",
                "4. Fold & tie husks",
                "5. Steam 90 mins",
                "6. Let rest 15 mins"
            ],
            time: "180 mins", difficulty: "Hard", servings: "12"
        },
        {
            name: "🧀 Quesadillas",
            ingredients: ["🧀 Oaxaca cheese", "🥬 Mushrooms", "🌶️ Chiles", "🥑 Avocado"],
            instructions: [
                "1. Heat corn tortillas",
                "2. Add Oaxaca cheese",
                "3. Optional fillings",
                "4. Fold & press",
                "5. Crisp both sides",
                "6. Serve with salsa"
            ],
            time: "10 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🍩 Churros",
            ingredients: ["🍚 Flour", "🥚 Eggs", "🧈 Butter", "🍯 Cinnamon sugar"],
            instructions: [
                "1. Boil water & butter",
                "2. Add flour make choux",
                "3. Pipe into hot oil",
                "4. Fry till golden",
                "5. Roll in cinnamon sugar",
                "6. Dip in chocolate sauce"
            ],
            time: "30 mins", difficulty: "Medium", servings: "8"
        },
        {
            name: "🥗 Ceviche",
            ingredients: ["🐟 White fish", "🍋 Lime juice", "🍅 Tomatoes", "🧅 Red onion", "🌿 Cilantro"],
            instructions: [
                "1. Cube fresh fish",
                "2. Cover with lime juice",
                "3. 'Cook' 20 mins fridge",
                "4. Drain & mix veggies",
                "5. Season with salt",
                "6. Serve ice cold"
            ],
            time: "25 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍲 Sopa Azteca",
            ingredients: ["🍗 Chicken", "🥫 Tortilla chips", "🥑 Avocado", "🧀 Cheese", "🍋 Lime"],
            instructions: [
                "1. Chicken tomato broth",
                "2. Fry tortilla strips",
                "3. Assemble in bowl",
                "4. Pour hot broth",
                "5. Toppings (avocado, cheese)",
                "6. Squeeze fresh lime"
            ],
            time: "30 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🌮 Carnitas",
            ingredients: ["🐖 Pork shoulder", "🍊 Oranges", "🧄 Garlic", "🌿 Bay leaves", "🧂 Salt"],
            instructions: [
                "1. Season pork generously",
                "2. Slow cook with oranges",
                "3. Shred & crisp in fat",
                "4. Double fry for crunch",
                "5. Serve in tacos",
                "6. Onion, cilantro, salsa"
            ],
            time: "240 mins", difficulty: "Medium", servings: "6"
        },
        {
            name: "🥑 Pico de Gallo",
            ingredients: ["🍅 Tomatoes", "🧅 White onion", "🌶️ Jalapeño", "🌿 Cilantro", "🍋 Lime"],
            instructions: [
                "1. Fine dice all ingredients",
                "2. Mix gently",
                "3. Season with salt & lime",
                "4. Let flavors meld 15 mins",
                "5. Taste & adjust",
                "6. Fresh salsa ready!"
            ],
            time: "15 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍺 Michelada",
            ingredients: ["🍺 Mexican beer", "🌶️ Chile rim", "🍋 Lime juice", "🧂 Salt", "🌶️ Sauce"],
            instructions: [
                "1. Salt chile rim glass",
                "2. Add lime juice & sauces",
                "3. Fill with ice",
                "4. Top with cold beer",
                "5. Garnish lime wedge",
                "6. Enjoy ice cold"
            ],
            time: "5 mins", difficulty: "Easy", servings: "1"
        },
        {
            name: "🌮 Barbacoa",
            ingredients: ["🐮 Beef cheeks", "🌿 Banana leaves", "🌶️ Chiles", "🧄 Garlic"],
            instructions: [
                "1. Marinate beef overnight",
                "2. Wrap in banana leaves",
                "3. Slow pit roast 8hrs",
                "4. Shred tender meat",
                "5. Serve in corn tortillas",
                "6. Consome dipping sauce"
            ],
            time: "480 mins", difficulty: "Hard", servings: "8"
        },
        {
            name: "🌯 Chile Relleno",
            ingredients: ["🌶️ Poblano peppers", "🧀 Queso fresco", "🥚 Batter", "🍅 Salsa roja"],
            instructions: [
                "1. Char & peel poblanos",
                "2. Stuff with cheese",
                "3. Flour & egg batter",
                "4. Fry till golden",
                "5. Serve on salsa",
                "6. Fresh crema topping"
            ],
            time: "40 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥗 Esquites",
            ingredients: ["🌽 Corn kernels", "🧀 Cotija cheese", "🌶️ Chile powder", "🍋 Lime", "🧈 Mayo"],
            instructions: [
                "1. Sauté corn kernels",
                "2. Mix mayo & lime",
                "3. Toss corn in sauce",
                "4. Cotija cheese crumble",
                "5. Chile powder & cilantro",
                "6. Street corn salad"
            ],
            time: "15 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍲 Caldo Tlalpeño",
            ingredients: ["🍗 Chicken", "🌽 Corn", "🥫 Chickpeas", "🌿 Chipotle", "🥑 Avocado"],
            instructions: [
                "1. Chicken vegetable broth",
                "2. Add chickpeas & corn",
                "3. Chipotle for smokiness",
                "4. Serve with rice",
                "5. Avocado & lime garnish",
                "6. Healing chicken soup"
            ],
            time: "45 mins", difficulty: "Easy", servings: "6"
        },
        {
            name: "🍡 Paletas",
            ingredients: ["🥭 Mango", "🍓 Strawberry", "🥥 Coconut", "🥛 Condensed milk"],
            instructions: [
                "1. Puree fresh fruit",
                "2. Sweeten with condensed milk",
                "3. Pour into molds",
                "4. Freeze 6hrs",
                "5. Run under warm water",
                "6. Mexican popsicles"
            ],
            time: "15 mins", difficulty: "Easy", servings: "8"
        }
    ]
},

    france: {
    flag: "🇫🇷", 
    icon: "🥖", 
    name: "French Cuisine",
    recipes: [
        {
            name: "🥪 Croque Monsieur",
            ingredients: ["🍞 Sourdough bread", "🐖 Ham", "🧀 Gruyère", "🥛 Béchamel sauce", "🧈 Butter"],
            instructions: [
                "1. Make thick béchamel sauce",
                "2. Layer ham & Gruyère sandwich",
                "3. Top with béchamel & more cheese",
                "4. Bake 200°C until golden",
                "5. Serve with Dijon mustard",
                "6. Classic French bistro sandwich"
            ],
            time: "20 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🐌 Escargot",
            ingredients: ["🐌 Snails", "🧈 Garlic butter", "🌿 Parsley", "🧄 Garlic", "🥖 Baguette"],
            instructions: [
                "1. Purge & poach snails",
                "2. Make garlic parsley butter",
                "3. Fill snail shells",
                "4. Bake 180°C 8-10 mins",
                "5. Grill till golden brown",
                "6. Serve with crusty baguette"
            ],
            time: "30 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍗 Coq au Vin",
            ingredients: ["🍗 Chicken thighs", "🍷 Burgundy wine", "🥓 Lardons", "🍄 Mushrooms", "🥕 Carrots"],
            instructions: [
                "1. Marinate chicken overnight",
                "2. Render bacon lardons",
                "3. Brown chicken pieces",
                "4. Braise with wine 2hrs",
                "5. Add pearl onions & mushrooms",
                "6. Finish with butter swirl"
            ],
            time: "180 mins", difficulty: "Hard", servings: "4"
        },
        {
            name: "🥩 Beef Bourguignon",
            ingredients: ["🥩 Beef chuck", "🍷 Red Burgundy", "🥓 Bacon", "🍄 Mushrooms", "🥗 Pearl onions"],
            instructions: [
                "1. Cube & sear beef",
                "2. Bacon fat vegetables",
                "3. Deglaze with Burgundy",
                "4. Slow braise 3hrs",
                "5. Glazed pearl onions",
                "6. Julia Child masterpiece"
            ],
            time: "240 mins", difficulty: "Hard", servings: "6"
        },
        {
            name: "🍆 Ratatouille",
            ingredients: ["🍆 Eggplant", "🥒 Zucchini", "🫑 Bell peppers", "🍅 Tomatoes", "🧄 Garlic"],
            instructions: [
                "1. Individually cook vegetables",
                "2. Tomato piperade base",
                "3. Layer in terracotta dish",
                "4. Slow bake 90 mins",
                "5. Fresh thyme & basil",
                "6. Serve warm or room temp"
            ],
            time: "120 mins", difficulty: "Medium", servings: "6"
        },
        {
            name: "🥞 Crêpes",
            ingredients: ["🍚 Flour", "🥛 Milk", "🥚 Eggs", "🧈 Butter", "🍯 Sugar"],
            instructions: [
                "1. Whisk thin batter",
                "2. Rest 30 mins",
                "3. Hot buttered pan",
                "4. Swirl thin layer",
                "5. Flip delicate crêpe",
                "6. Sweet or savory fillings"
            ],
            time: "25 mins", difficulty: "Easy", servings: "8"
        },
        {
            name: "🍮 Soufflé",
            ingredients: ["🥚 Egg whites", "🧀 Gruyère cheese", "🥛 Béchamel", "🌿 Nutmeg"],
            instructions: [
                "1. Béchamel cheese base",
                "2. Whip egg whites stiff",
                "3. Fold gently into base",
                "4. Fill buttered ramekins",
                "5. Bake immediately 190°C",
                "6. Serve instantly puffed!"
            ],
            time: "30 mins", difficulty: "Hard", servings: "4"
        },
        {
            name: "🥧 Quiche Lorraine",
            ingredients: ["🥧 Pâte brisée", "🥓 Lardons", "🥛 Cream", "🥚 Eggs", "🧀 Gruyère"],
            instructions: [
                "1. Blind bake pastry",
                "2. Render lardons crisp",
                "3. Custard cream-egg mixture",
                "4. Layer bacon & cheese",
                "5. Pour custard bake",
                "6. Slice warm or cold"
            ],
            time: "60 mins", difficulty: "Medium", servings: "6"
        },
        {
            name: "🍲 Bouillabaisse",
            ingredients: ["🐟 Fish", "🦐 Shrimp", "🦪 Mussels", "🍅 Tomatoes", "🧄 Saffron"],
            instructions: [
                "1. Fish fumet stock",
                "2. Rouille saffron broth",
                "3. Layer shellfish first",
                "4. Firm fish fillets",
                "5. Grilled bread rouille",
                "6. Marseille fisherman soup"
            ],
            time: "90 mins", difficulty: "Hard", servings: "6"
        },
        {
            name: "🍬 Macarons",
            ingredients: ["🥚 Almond flour", "🍯 Sugar", "🥚 Egg whites", "🍬 Food coloring"],
            instructions: [
                "1. Macaronage perfect consistency",
                "2. Pipe 3cm circles",
                "3. Rest 30 mins skin",
                "4. Bake low 140°C",
                "5. Italian meringue ganache",
                "6. Assemble sandwiched"
            ],
            time: "90 mins", difficulty: "Hard", servings: "20"
        },
        {
            name: "🥖 Baguette",
            ingredients: ["🍚 Flour T55", "🧂 Sea salt", "💧 Water", "🦠 Levain"],
            instructions: [
                "1. High hydration autolyse",
                "2. Stretch & fold development",
                "3. Cold retard overnight",
                "4. Shape baguettes",
                "5. Steam bake 250°C",
                "6. Perfect crust crackle"
            ],
            time: "1440 mins", difficulty: "Hard", servings: "4"
        },
        {
            name: "🧀 Fondue",
            ingredients: ["🧀 Gruyère", "🧀 Emmenthal", "🍷 White wine", "🧄 Garlic", "🥃 Kirsch"],
            instructions: [
                "1. Rub pot with garlic",
                "2. Wine & grated cheese",
                "3. Cornstarch slurry",
                "4. Stir figure 8 motion",
                "5. Lemon juice balance",
                "6. Dip bread cubes"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🥩 Steak Frites",
            ingredients: ["🥩 Hanger steak", "🥔 Fries", "🧈 Béarnaise", "🧂 Fleur de sel"],
            instructions: [
                "1. Rest steak room temp",
                "2. Double fry fries",
                "3. High heat sear steak",
                "4. Baste with butter",
                "5. Béarnaise sauce tarragon",
                "6. Perfect pink medium rare"
            ],
            time: "30 mins", difficulty: "Medium", servings: "2"
        },
        {
            name: "🍮 Crème Brûlée",
            ingredients: ["🥛 Cream", "🥚 Egg yolks", "🍯 Sugar", "🌿 Vanilla"],
            instructions: [
                "1. Infuse cream vanilla",
                "2. Temper egg yolks",
                "3. Strain into ramekins",
                "4. Water bath 80°C",
                "5. Chill overnight",
                "6. Torch caramelized sugar"
            ],
            time: "60 mins", difficulty: "Medium", servings: "6"
        },
        {
            name: "🥗 Niçoise Salad",
            ingredients: ["🐟 Tuna", "🥚 Eggs", "🫓 Anchovies", "🫐 Olives", "🌿 Green beans"],
            instructions: [
                "1. Niçoise olives vinaigrette",
                "2. Seared tuna steaks",
                "3. Soft boiled eggs",
                "4. Blanched green beans",
                "5. Little gem lettuce",
                "6. Compose don't toss"
            ],
            time: "25 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🍷 Cassoulet",
            ingredients: ["🐑 Lamb", "🫘 Tarbais beans", "🐖 Sausage", "🦆 Duck confit"],
            instructions: [
                "1. Soak beans overnight",
                "2. Pork skin mirepoix",
                "3. Layer meats & beans",
                "4. Slow bake 6hrs",
                "5. Crust broken 7 times",
                "6. Toulouse winter warmer"
            ],
            time: "480 mins", difficulty: "Hard", servings: "8"
        },
        {
            name: "🥞 Galette",
            ingredients: ["🍚 Buckwheat flour", "🥛 Milk", "🥚 Egg", "🧀 Ham", "🧀 Cheese"],
            instructions: [
                "1. Buckwheat batter",
                "2. Hot cast iron",
                "3. Egg in center",
                "4. Fold ham & cheese",
                "5. Complete fold triangle",
                "6. Breton savory pancake"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍲 Blanquette",
            ingredients: ["🐮 Veal", "🥬 Mushrooms", "🥕 Carrots", "🥛 Cream", "🍋 Lemon"],
            instructions: [
                "1. Poach veal white stock",
                "2. Pearl onions & mushrooms",
                "3. Velvety cream sauce",
                "4. Lemon juice brightness",
                "5. Rice or steamed potatoes",
                "6. Classic white stew"
            ],
            time: "120 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🧀 Camembert",
            ingredients: ["🥛 Raw milk", "🦠 Penicillium mold", "🧂 Salt"],
            instructions: [
                "1. Curdle raw milk",
                "2. Drain & mold wheels",
                "3. Salt & inoculate mold",
                "4. Age 4-6 weeks",
                "5. Perfectly ripe runny",
                "6. Baguette & wine"
            ],
            time: "3024 hrs", difficulty: "Hard", servings: "4"
        },
        {
            name: "🍇 Escargots",
            ingredients: ["🐌 Helix snails", "🧈 Herb butter", "🥖 French bread", "🌿 Parsley"],
            instructions: [
                "1. Purge snails 48hrs",
                "2. Court-bouillon poach",
                "3. Classic snail butter",
                "4. Escargot dishes",
                "5. High heat gratinate",
                "6. Bread for every drop"
            ],
            time: "60 mins", difficulty: "Medium", servings: "4"
        }
    ]
},
china: {
    flag: "🇨🇳", 
    icon: "🥟", 
    name: "Chinese Cuisine",
    recipes: [
        {
            name: "🦆 Peking Duck",
            ingredients: ["🦆 Whole duck", "🥢 Hoisin sauce", "🥬 Pancakes", "🥒 Cucumber", "🌿 Spring onions"],
            instructions: [
                "1. Air dry duck 24hrs fridge",
                "2. Pour boiling water over skin",
                "3. Maltose & vinegar glaze",
                "4. Roast hanging 200°C 1hr",
                "5. Crispy skin, wrap pancakes",
                "6. Hoisin cucumber onion rolls"
            ],
            time: "1440 mins", difficulty: "Hard", servings: "6"
        },
        {
            name: "🥟 Dim Sum",
            ingredients: ["🦐 Shrimp", "🥬 Bamboo shoots", "🧄 Ginger", "🌿 Coriander", "🥟 Wrappers"],
            instructions: [
                "1. Chop shrimp & veggies fine",
                "2. Season with ginger soy",
                "3. Wrap har gow pleats",
                "4. Steam bamboo lined 8 mins",
                "5. Chili oil & soy dip",
                "6. Yum cha dim sum platter"
            ],
            time: "45 mins", difficulty: "Medium", servings: "8"
        },
        {
            name: "🍗 Kung Pao Chicken",
            ingredients: ["🍗 Chicken thigh", "🌶️ Sichuan peppercorns", "🥜 Peanuts", "🌶️ Dried chilies", "🫑 Bell peppers"],
            instructions: [
                "1. Velvet chicken cornstarch",
                "2. Toast Sichuan peppercorns",
                "3. Deep fry peanuts golden",
                "4. Quick stir-fry chilies",
                "5. Toss chicken & peppers",
                "6. Numbing spicy ma la"
            ],
            time: "25 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍲 Mapo Tofu",
            ingredients: ["豆腐 Silken tofu", "🥩 Ground pork", "🌶️ Doubanjiang", "🌶️ Sichuan pepper", "🥬 Scallions"],
            instructions: [
                "1. Render pork sizzling fat",
                "2. Fermented chili bean paste",
                "3. Add chicken stock",
                "4. Silken tofu gentle cubes",
                "5. Chili oil slick surface",
                "6. Ma la face-numbing heat"
            ],
            time: "20 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥟 Dumplings",
            ingredients: ["🥬 Chinese chives", "🐖 Pork belly", "🧄 Ginger", "🛢️ Sesame oil", "🥟 Wrappers"],
            instructions: [
                "1. Mix pork filling sticky",
                "2. Chop chives super fine",
                "3. 18 pleats per dumpling",
                "4. Pan fry water steam",
                "5. Crispy bottom q-bounce",
                "6. Black vinegar ginger dip"
            ],
            time: "60 mins", difficulty: "Medium", servings: "6"
        },
        {
            name: "🔥 Hot Pot",
            ingredients: ["🥩 Beef slices", "🦐 Prawns", "🍄 Enoki mushrooms", "🥬 Bok choy", "🥚 Eggs"],
            instructions: [
                "1. Dual broth (spicy/mild)",
                "2. Arrange meats & veggies",
                "3. Simmer sesame paste dip",
                "4. Swirl thin slices cooked",
                "5. Noodle finish broth",
                "6. Interactive family feast"
            ],
            time: "60 mins", difficulty: "Easy", servings: "6"
        },
        {
            name: "🍜 Chow Mein",
            ingredients: ["🍜 Egg noodles", "🥬 Bean sprouts", "🧅 Onion", "🥕 Carrots", "🦐 Shrimp"],
            instructions: [
                "1. Parboil & shock noodles",
                "2. Wok hei high flame",
                "3. Crispy noodle base",
                "4. Veggie shower technique",
                "5. Dark soy caramelize",
                "6. Spring onion finish"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍖 Sweet Sour Pork",
            ingredients: ["🍖 Pork tenderloin", "🫐 Pineapple", "🫑 Bell peppers", "🥒 Cucumber", "🍯 Sauce"],
            instructions: [
                "1. Double fry pork cubes",
                "2. Tangy pineapple sweet sauce",
                "3. Flash wok veggies",
                "4. Glaze pork crispy",
                "5. Sesame seeds garnish",
                "6. Cantonese classic"
            ],
            time: "30 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍚 Egg Fried Rice",
            ingredients: ["🍚 Day-old rice", "🥚 Eggs", "🌿 Spring onions", "🦐 Shrimp", "🧂 Salt"],
            instructions: [
                "1. Scramble eggs wok",
                "2. Cold rice separate grains",
                "3. High heat constant motion",
                "4. Season light MSG optional",
                "5. Green onion perfume",
                "6. Perfect every grain"
            ],
            time: "10 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🥟 Xiaolongbao",
            ingredients: ["🥟 Thin wrappers", "🐖 Pork", "🥬 Ginger", "🍲 Pork gelatin", "🌿 Vinegar"],
            instructions: [
                "1. Pork aspic gelatin",
                "2. 18 fine pleats",
                "3. Steam bamboo basket",
                "4. Soup burst mouth",
                "5. Ginger vinegar dip",
                "6. Shanghai delicate"
            ],
            time: "90 mins", difficulty: "Hard", servings: "8"
        },
        {
            name: "🍜 Dan Dan Noodles",
            ingredients: ["🍜 Alkaline noodles", "🥩 Minced pork", "🌶️ Chili oil", "🥬 Preserved veg", "🥜 Peanuts"],
            instructions: [
                "1. Chili crisp oil base",
                "2. Pork su zhī crisp",
                "3. Ya cai preserved mustard",
                "4. Toss thick wheat noodles",
                "5. Peanut sesame crunch",
                "6. Sichuan street snack"
            ],
            time: "25 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥟 Baozi",
            ingredients: ["🥟 Steamed buns", "🐖 BBQ pork", "🥚 Egg", "🌿 Spring onion"],
            instructions: [
                "1. Proof dough double size",
                "2. Char siu pork filling",
                "3. Spiral pleat folding",
                "4. Steam 12 mins high",
                "5. Fluffy q-bounce texture",
                "6. Breakfast bun perfection"
            ],
            time: "120 mins", difficulty: "Medium", servings: "12"
        },
        {
            name: "🍗 General Tso",
            ingredients: ["🍗 Dark meat chicken", "🌶️ Dried chilies", "🍯 Sticky sauce", "🥬 Broccoli"],
            instructions: [
                "1. Triple fry chicken",
                "2. Chili garlic explosive",
                "3. Cornstarch sweet sauce",
                "4. Glaze wok sizzling",
                "5. Sesame seeds finish",
                "6. American Chinese icon"
            ],
            time: "35 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍲 Wonton Soup",
            ingredients: ["🥟 Wontons", "🥬 Bok choy", "🌿 Spring onion", "🍲 Chicken broth", "🦐 Shrimp"],
            instructions: [
                "1. Shrimp pork wontons",
                "2. Crystal clear broth",
                "3. Float gently surface",
                "4. Blanched greens",
                "5. Garland green onion",
                "6. Comfort bowl warmth"
            ],
            time: "40 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥬 Bok Choy",
            ingredients: ["🥬 Baby bok choy", "🧄 Garlic", "🛢️ Oyster sauce", "🌿 Sesame oil"],
            instructions: [
                "1. High heat blanch",
                "2. Ice shock crispness",
                "3. Garlic oyster flash",
                "4. Wok dry high flame",
                "5. Sesame perfume finish",
                "6. Perfect green side"
            ],
            time: "10 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍲 Congee",
            ingredients: ["🍚 Jasmine rice", "🐖 Pork bone", "🥚 Century egg", "🌿 Ginger"],
            instructions: [
                "1. Rice water 1:10 ratio",
                "2. Simmer 2hrs constant stir",
                "3. Creamy rice porridge",
                "4. Pork ginger shreds",
                "5. Century egg yolk",
                "6. Sick day cure"
            ],
            time: "150 mins", difficulty: "Easy", servings: "6"
        },
        {
            name: "🥟 Har Gow",
            ingredients: ["🦐 Shrimp", "🥬 Bamboo", "🌿 Scallions", "🥟 Translucent wrapper"],
            instructions: [
                "1. Wheat starch wrapper",
                "2. Shrimp bamboo filling",
                "3. 18 fine pleats",
                "4. Steam perfect curve",
                "5. Dip chili soy",
                "6. Cantonese dim sum jewel"
            ],
            time: "50 mins", difficulty: "Hard", servings: "8"
        },
        {
            name: "🍜 Lo Mein",
            ingredients: ["🍜 Fresh egg noodles", "🥩 Beef", "🥬 Napa cabbage", "🧄 Garlic"],
            instructions: [
                "1. Parboil lo mein",
                "2. Wok beef high heat",
                "3. Veggie shower technique",
                "4. Dark soy oyster mix",
                "5. Noodle toss embrace",
                "6. Restaurant style"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍗 Sesame Chicken",
            ingredients: ["🍗 Chicken thigh", "🥜 Toasted sesame", "🍯 Honey glaze", "🌶️ Chilies"],
            instructions: [
                "1. Crispy fried chicken",
                "2. Sticky sesame sauce",
                "3. Chili crunch heat",
                "4. Perfect glaze coating",
                "5. Green onion sesame",
                "6. Takeout favorite"
            ],
            time: "30 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥢 Ma Po Tofu",
            ingredients: ["豆腐 Tofu", "🥩 Pork mince", "🌶️ Fermented black bean", "🌶️ Chili oil"],
            instructions: [
                "1. Silken tofu perfect cubes",
                "2. Pork sizzling render",
                "3. Doubanjiang explosive",
                "4. Sichuan flower pepper",
                "5. Silky spicy ma la",
                "6. Rice essential partner"
            ],
            time: "25 mins", difficulty: "Medium", servings: "4"
        }
    ]
},

    spain: {
    flag: "🇪🇸", 
    icon: "🍤", 
    name: "Spanish Cuisine",
    recipes: [
        {
            name: "🍚 Paella Valenciana",
            ingredients: ["🐰 Rabbit", "🐔 Chicken", "🦐 Prawns", "🟡 Saffron", "🌾 Bomba rice", "🫘 Green beans"],
            instructions: [
                "1. Sofrito onion tomato paprika",
                "2. Brown rabbit & chicken",
                "3. Saffron infused stock",
                "4. Bomba rice perfect ratio",
                "5. Socarrat crispy bottom",
                "6. Rest 5 mins paellera"
            ],
            time: "90 mins", difficulty: "Hard", servings: "6"
        },
        {
            name: "🥣 Gazpacho",
            ingredients: ["🍅 Ripe tomatoes", "🫑 Green peppers", "🧅 Cucumber", "🧄 Garlic", "🥖 Bread"],
            instructions: [
                "1. Chill all ingredients",
                "2. Blend silky smooth",
                "3. Extra virgin olive oil",
                "4. Sherry vinegar balance",
                "5. Ice cold serve",
                "6. Garnished diced veggies"
            ],
            time: "15 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🥔 Patatas Bravas",
            ingredients: ["🥔 Potatoes", "🌶️ Spicy brava sauce", "🧄 Aioli", "🧂 Smoked paprika"],
            instructions: [
                "1. Double fry potatoes crisp",
                "2. Brava sauce pimentón",
                "3. Garlic aioli swirl",
                "4. Fresh parsley sprinkle",
                "5. Tapas bar classic",
                "6. Sherry vinegar kick"
            ],
            time: "30 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍢 Tapas",
            ingredients: ["🫓 Jamón", "🧀 Manchego", "🫒 Olives", "🍅 Cherry tomatoes", "🥒 Pickles"],
            instructions: [
                "1. Artfully arrange platters",
                "2. Jamón Ibérico thin slices",
                "3. Manchego different ages",
                "4. Gordal olives brine",
                "5. Pan con tomate side",
                "6. Sherry wine pairing"
            ],
            time: "15 mins", difficulty: "Easy", servings: "6"
        },
        {
            name: "🍩 Churros con Chocolate",
            ingredients: ["🍩 Churros", "🍫 Thick chocolate", "🥛 Milk", "🍯 Sugar", "🌿 Cinnamon"],
            instructions: [
                "1. Choux pastry pipe stars",
                "2. Fry golden crisp",
                "3. Cinnamon sugar roll",
                "4. Thick hot chocolate",
                "5. Dip & double dip",
                "6. Madrid breakfast ritual"
            ],
            time: "30 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥔 Tortilla Española",
            ingredients: ["🥔 Potatoes", "🥚 Eggs", "🧅 Onion", "🛢️ Olive oil"],
            instructions: [
                "1. Thin potato onion slices",
                "2. Slow confit olive oil",
                "3. Beat eggs perfect",
                "4. Cook low slow",
                "5. Flip perfect circle",
                "6. Room temp perfection"
            ],
            time: "40 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍷 Sangria",
            ingredients: ["🍷 Rioja wine", "🍊 Oranges", "🍋 Lemons", "🍎 Apples", "🥂 Brandy"],
            instructions: [
                "1. Slice fresh fruit",
                "2. Muddle lightly",
                "3. Rioja tempranillo base",
                "4. Brandy orange liqueur",
                "5. Chill overnight",
                "6. Soda sparkle serve"
            ],
            time: "10 mins", difficulty: "Easy", servings: "6"
        },
        {
            name: "🍖 Jamón Ibérico",
            ingredients: ["🍖 Ibérico de bellota", "🥖 Pan", "🍅 Tomatoes", "🧄 Garlic"],
            instructions: [
                "1. Room temp thin slices",
                "2. Marble fat melt",
                "3. Pan tumaca toast",
                "4. Drizzle arbequina oil",
                "5. Simple perfection",
                "6. Acorn fed treasure"
            ],
            time: "10 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍮 Crema Catalana",
            ingredients: ["🥛 Milk", "🥚 Yolks", "🍯 Sugar", "🌿 Cinnamon", "🍊 Citrus zest"],
            instructions: [
                "1. Infuse milk spices",
                "2. Temper egg yolks",
                "3. Thick pastry cream",
                "4. Chill shallow bowls",
                "5. Torch caramelized sugar",
                "6. Crack with spoon"
            ],
            time: "30 mins", difficulty: "Medium", servings: "6"
        },
        {
            name: "🥟 Empanadas",
            ingredients: ["🥟 Dough", "🐮 Beef", "🫒 Olives", "🥚 Hard boiled", "🌶️ Pimentón"],
            instructions: [
                "1. Picadillo beef filling",
                "2. Empanada dough circles",
                "3. Repulgue braided seal",
                "4. Egg wash golden",
                "5. Bake or fry",
                "6. Gallega street food"
            ],
            time: "60 mins", difficulty: "Medium", servings: "12"
        },
        {
            name: "🍤 Gambas al Ajillo",
            ingredients: ["🍤 Head-on prawns", "🧄 Garlic slices", "🌶️ Guindilla chili", "🛢️ Olive oil"],
            instructions: [
                "1. Extra virgin olive oil",
                "2. Garlic slices not minced",
                "3. Chili infusion gentle",
                "4. Head-on shrimp plunge",
                "5. Sherry splash flambé",
                "6. Bread sopa everything"
            ],
            time: "15 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🥩 Cocido Madrileño",
            ingredients: ["🥩 Beef shank", "🐖 Chorizo", "🫘 Chickpeas", "🥬 Cabbage", "🥕 Carrots"],
            instructions: [
                "1. Overnight bone broth",
                "2. Meats vegetables separate",
                "3. Chickpeas fideos third",
                "4. Reparto traditional order",
                "5. Winter Madrid comfort",
                "6. Sopa noodles first"
            ],
            time: "360 mins", difficulty: "Hard", servings: "8"
        },
        {
            name: "🍝 Fideuà",
            ingredients: ["🍝 Fide noodles", "🦐 Prawns", "🦪 Mussels", "🟡 Saffron", "🫑 Peppers"],
            instructions: [
                "1. Noodle paella sofrito",
                "2. Seafood broth infusion",
                "3. Fideos bomba style",
                "4. Socarrat noodle crust",
                "5. Aioli essential",
                "6. Valencia seafood pasta"
            ],
            time: "45 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥗 Ensaladilla Rusa",
            ingredients: ["🥔 Potatoes", "🥒 Carrots", "🧅 Peas", "🥚 Eggs", "🧈 Mayonnaise"],
            instructions: [
                "1. Perfect dice uniform",
                "2. Boil al dente",
                "3. House mayonnaise",
                "4. Mount gently fold",
                "5. Olive oil poached tuna",
                "6. Piquillo pepper rosette"
            ],
            time: "30 mins", difficulty: "Easy", servings: "6"
        },
        {
            name: "🍷 Albóndigas",
            ingredients: ["🥩 Ground beef", "🥚 Egg", "🥖 Bread", "🍅 Tomato sauce", "🌿 Parsley"],
            instructions: [
                "1. Panada bread milk bind",
                "2. Meatball perfect size",
                "3. Gentle poach sauce",
                "4. Sofrito rich tomato",
                "5. Sherry wine depth",
                "6. Tapas skewer serve"
            ],
            time: "45 mins", difficulty: "Medium", servings: "6"
        },
        {
            name: "🥖 Pan Tumaca",
            ingredients: ["🥖 Rustic bread", "🍅 Ripe tomatoes", "🧄 Garlic", "🛢️ Olive oil"],
            instructions: [
                "1. Grill or toast bread",
                "2. Raw garlic rub",
                "3. Tomato flesh grate",
                "4. Generous olive oil",
                "5. Sea salt flakes",
                "6. Catalonia breakfast"
            ],
            time: "10 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍤 Calamares",
            ingredients: ["🍤 Squid tubes", "🥚 Flour batter", "🧂 Salt", "🍋 Lemon"],
            instructions: [
                "1. Fresh squid rings",
                "2. Light flour dusting",
                "3. Hot olive oil flash",
                "4. Perfect golden crisp",
                "5. Lemon wedge squeeze",
                "6. Andalusian beach snack"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍮 Flan",
            ingredients: ["🥚 Eggs", "🥛 Condensed milk", "🥛 Evaporated milk", "🍯 Caramel"],
            instructions: [
                "1. Perfect caramel molds",
                "2. Custard smooth blend",
                "3. Water bath gentle",
                "4. Chill overnight set",
                "5. Unmold perfect",
                "6. Golden caramel pool"
            ],
            time: "60 mins", difficulty: "Medium", servings: "8"
        },
        {
            name: "🥩 Fabada",
            ingredients: ["🫘 Fabes Asturianas", "🐖 Morcilla", "🐷 Lacon", "🌿 Saffron"],
            instructions: [
                "1. Soak beans overnight",
                "2. Cold water slow simmer",
                "3. Meats separate cook",
                "4. Combine gentle union",
                "5. No stirring fabes",
                "6. Asturias winter bean"
            ],
            time: "240 mins", difficulty: "Medium", servings: "6"
        },
        {
            name: "🍷 Riojanas",
            ingredients: ["🍷 Rioja wine", "🍯 Honey", "🍊 Oranges", "🌿 Cinnamon", "🥃 Brandy"],
            instructions: [
                "1. Warm spiced wine",
                "2. Citrus peel infusion",
                "3. Honey sweetness balance",
                "4. Brandy warmth finish",
                "5. Cinnamon stick stirrer",
                "6. Castilla winter warmer"
            ],
            time: "15 mins", difficulty: "Easy", servings: "6"
        }
    ]
},

    
        greece: {
    flag: "🇬🇷", 
    icon: "🧀", 
    name: "Greek Cuisine",
    recipes: [
        {
            name: "🥙 Gyro",
            ingredients: ["🍖 Pork shoulder", "🥖 Pita bread", "🍅 Tomatoes", "🧅 Onions", "🧀 Tzatziki", "🥔 Fries"],
            instructions: [
                "1. Vertical rotisserie pork slices",
                "2. Warm fluffy pita bread",
                "3. Tomato onion french fries",
                "4. Generous tzatziki sauce",
                "5. Fold & wrap tight",
                "6. Street food perfection"
            ],
            time: "120 mins", difficulty: "Medium", servings: "6"
        },
        {
            name: "🧀 Feta Salad",
            ingredients: ["🧀 Feta block", "🍅 Tomatoes", "🥒 Cucumber", "🫑 Green pepper", "🫒 Kalamata olives", "🛢️ Olive oil"],
            instructions: [
                "1. Ripe tomatoes wedges",
                "2. Cucumber half moons",
                "3. Green pepper rings",
                "4. Whole Kalamata olives",
                "5. Feta slab oregano",
                "6. Drizzle olive oil"
            ],
            time: "15 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍢 Souvlaki",
            ingredients: ["🍖 Pork chunks", "🧄 Garlic", "🛢️ Olive oil", "🌿 Oregano", "🍋 Lemon"],
            instructions: [
                "1. Marinate pork overnight",
                "2. Skewer meat chunks",
                "3. Charcoal grill hot",
                "4. Lemon oregano baste",
                "5. Pita tzatziki wrap",
                "6. Greek street skewer"
            ],
            time: "30 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🥗 Greek Salad",
            ingredients: ["🍅 Tomatoes", "🥒 Cucumber", "🧅 Red onion", "🫒 Olives", "🧀 Feta", "🛢️ Olive oil"],
            instructions: [
                "1. No lettuce traditional",
                "2. Ripe summer tomatoes",
                "3. Cucumber chunks large",
                "4. Red onion ice water",
                "5. Feta barrel aged",
                "6. Oregano olive oil"
            ],
            time: "10 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍤 Calamari",
            ingredients: ["🍤 Squid tubes", "🥚 Flour batter", "🧂 Salt", "🍋 Lemon", "🛢️ Olive oil"],
            instructions: [
                "1. Fresh squid rings",
                "2. Light semolina flour",
                "3. Hot olive oil flash",
                "4. Golden crisp perfect",
                "5. Sea salt lemon zest",
                "6. Aegean island snack"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍲 Moussaka",
            ingredients: ["🍆 Eggplant", "🥔 Potatoes", "🥩 Ground beef", "🧀 Béchamel", "🍅 Tomatoes"],
            instructions: [
                "1. Grill eggplant slices",
                "2. Meat sauce cinnamon",
                "3. Potato base layer",
                "4. Béchamel thick crown",
                "5. Golden bake bubbly",
                "6. Greek lasagna comfort"
            ],
            time: "120 mins", difficulty: "Hard", servings: "8"
        },
        {
            name: "🌯 Pita Bread",
            ingredients: ["🍚 Flour", "🥛 Yogurt", "🧂 Salt", "🛢️ Olive oil"],
            instructions: [
                "1. Greek yogurt dough",
                "2. Rest 30 mins",
                "3. Hot cast iron",
                "4. Pocket puff perfect",
                "5. Warm soft fluffy",
                "6. Souvlaki essential"
            ],
            time: "45 mins", difficulty: "Medium", servings: "8"
        },
        {
            name: "🫒 Dolmades",
            ingredients: ["🫒 Grape leaves", "🍚 Rice", "🥬 Herbs", "🍋 Lemon", "🛢️ Olive oil"],
            instructions: [
                "1. Blanch grape leaves",
                "2. Rice herb filling",
                "3. Roll cigar tight",
                "4. Simmer lemon broth",
                "5. Olive oil glossy",
                "6. Cold meze delight"
            ],
            time: "90 mins", difficulty: "Medium", servings: "12"
        },
        {
            name: "🍤 Saganaki",
            ingredients: ["🧀 Kefalograviera", "🥚 Flour egg", "🍯 Honey", "🌿 Sesame seeds"],
            instructions: [
                "1. Thick cheese slices",
                "2. Egg flour crust",
                "3. Pan fry golden",
                "4. Flame flambé ouzo",
                "5. Honey sesame drizzle",
                "6. Opa! flaming cheese"
            ],
            time: "15 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍯 Baklava",
            ingredients: ["🥮 Phyllo dough", "🥜 Walnuts", "☕ Syrup", "🧈 Butter", "🌿 Cinnamon"],
            instructions: [
                "1. Nut cinnamon filling",
                "2. Phyllo butter layers",
                "3. Diamond cut precise",
                "4. Honey syrup hot",
                "5. Cool syrup absorb",
                "6. Sticky sweet layers"
            ],
            time: "90 mins", difficulty: "Medium", servings: "24"
        },
        {
            name: "🥙 Falafel",
            ingredients: ["🌿 Chickpeas", "🧄 Garlic", "🌿 Parsley", "🌿 Coriander", "🧂 Cumin"],
            instructions: [
                "1. Soaked dry chickpeas",
                "2. Herb spice blitz",
                "3. Ball icebox firm",
                "4. Hot oil deep fry",
                "5. Tahini sauce pita",
                "6. Greek island version"
            ],
            time: "45 mins", difficulty: "Medium", servings: "6"
        },
        {
            name: "🥗 Tzatziki",
            ingredients: ["🥛 Greek yogurt", "🥒 Cucumber", "🧄 Garlic", "🍋 Lemon", "🌿 Dill"],
            instructions: [
                "1. Strain yogurt thick",
                "2. Grated cucumber squeeze",
                "3. Raw garlic mince",
                "4. Lemon juice olive oil",
                "5. Fresh dill whisper",
                "6. Gyro dipping essential"
            ],
            time: "15 mins", difficulty: "Easy", servings: "6"
        },
        {
            name: "🍖 Lamb Kleftiko",
            ingredients: ["🍖 Lamb shoulder", "🧄 Garlic", "🍋 Lemon", "🌿 Oregano", "🥬 Potatoes"],
            instructions: [
                "1. Bone-in lamb marinate",
                "2. Clay pot parchment",
                "3. Slow 160°C 5hrs",
                "4. Fall off bone tender",
                "5. Lemon potato roast",
                "6. Shepherd thief style"
            ],
            time: "360 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥟 Spanakopita",
            ingredients: ["🌿 Spinach", "🧀 Feta", "🥚 Eggs", "🥮 Phyllo", "🧅 Onions"],
            instructions: [
                "1. Wilted spinach squeeze",
                "2. Feta dill egg bind",
                "3. Phyllo butter layers",
                "4. Triangle triangle fold",
                "5. Golden bake crisp",
                "6. Spinach pie triangles"
            ],
            time: "60 mins", difficulty: "Medium", servings: "12"
        },
        {
            name: "🍇 Souvlakia",
            ingredients: ["🍗 Chicken", "🧄 Yogurt", "🌿 Herbs", "🛢️ Olive oil", "🍋 Lemon"],
            instructions: [
                "1. Yogurt herb marinade",
                "2. Skewer chicken cubes",
                "3. Charcoal grill smokey",
                "4. Lemon squeeze fresh",
                "5. Pita tzatziki wrap",
                "6. Greek BBQ skewers"
            ],
            time: "30 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🥖 Pita",
            ingredients: ["🍚 Flour", "🥛 Water", "🧂 Salt", "🦠 Yeast"],
            instructions: [
                "1. High hydration dough",
                "2. Long slow ferment",
                "3. Hot stone oven",
                "4. Pocket puff magic",
                "5. Warm soft pliable",
                "6. Souvlaki perfect wrap"
            ],
            time: "120 mins", difficulty: "Medium", servings: "8"
        },
        {
            name: "🧀 Feta",
            ingredients: ["🥛 Sheep milk", "🧂 Salt", "🦠 Rennet"],
            instructions: [
                "1. Sheep goat milk blend",
                "2. Natural rennet curdle",
                "3. Feta brine barrels",
                "4. Age minimum 2 months",
                "5. Crumble perfect texture",
                "6. Greek salad star"
            ],
            time: "1440 hrs", difficulty: "Hard", servings: "4"
        },
        {
            name: "🍲 Avgolemono",
            ingredients: ["🍗 Chicken", "🍚 Rice", "🥚 Eggs", "🍋 Lemon", "🥬 Celery"],
            instructions: [
                "1. Rich chicken broth",
                "2. Arborio rice creamy",
                "3. Egg lemon liaison",
                "4. Temper slow gentle",
                "5. Velvety soup silk",
                "6. Greek comfort cure"
            ],
            time: "60 mins", difficulty: "Medium", servings: "6"
        },
        {
            name: "🥗 Horiatiki",
            ingredients: ["🍅 Village tomatoes", "🥒 Cucumber", "🧅 Onion", "🫒 Olives", "🧀 Barrel feta"],
            instructions: [
                "1. Countryside ingredients",
                "2. No lettuce pure",
                "3. Rugged chop rustic",
                "4. Oregano olive oil",
                "5. Feta slab crown",
                "6. Village salad authentic"
            ],
            time: "10 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍯 Loukoumades",
            ingredients: ["🍚 Flour yeast", "🍯 Honey syrup", "🥜 Walnuts", "🌿 Cinnamon", "🛢️ Oil"],
            instructions: [
                "1. Yeasted dough balls",
                "2. Hot oil golden puffs",
                "3. Honey cinnamon syrup",
                "4. Walnut cinnamon sprinkle",
                "5. Warm sticky sweet",
                "6. Greek doughnut delight"
            ],
            time: "45 mins", difficulty: "Medium", servings: "8"
        }
    ]
},

 
   turkey: {
    flag: "🇹🇷", 
    icon: "🍖", 
    name: "Turkish Cuisine",
    recipes: [
        {
            name: "🍖 Kebab",
            ingredients: ["🍖 Ground lamb", "🧄 Garlic", "🌿 Parsley", "🧂 Sumac", "🧅 Onion", "🫒 Pita bread"],
            instructions: [
                "1. Mix lamb with grated onion",
                "2. Add garlic parsley sumac salt",
                "3. Skewer long sausage shape",
                "4. Charcoal grill 10 mins each side",
                "5. Serve with pita & yogurt",
                "6. Traditional Turkish BBQ"
            ],
            time: "30 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥙 Döner",
            ingredients: ["🍗 Chicken/lamb slices", "🥖 Lavash bread", "🥒 Cucumber", "🍅 Tomatoes", "🧀 Yogurt sauce", "🧅 Onions"],
            instructions: [
                "1. Vertical spit rotating meat",
                "2. Shave thin crispy slices",
                "3. Warm lavash bread",
                "4. Salad yogurt garlic sauce",
                "5. Wrap tightly street style",
                "6. Istanbul classic wrap"
            ],
            time: "25 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🥟 Manti",
            ingredients: ["🥟 Wonton wrappers", "🐑 Ground lamb", "🧅 Onion", "🌿 Parsley", "🧀 Yogurt", "🧄 Garlic butter"],
            instructions: [
                "1. Mix lamb onion parsley",
                "2. Fill tiny wonton squares",
                "3. Seal into mini ravioli",
                "4. Boil 8 mins tender",
                "5. Tomato butter yogurt sauce",
                "6. Turkish ravioli perfection"
            ],
            time: "45 mins", difficulty: "Hard", servings: "4"
        },
        {
            name: "🍲 Mercimek Çorbası",
            ingredients: ["🫘 Red lentils", "🧅 Onion", "🥕 Carrot", "🧄 Garlic", "🧂 Cumin", "🍋 Lemon"],
            instructions: [
                "1. Sauté onion carrot garlic",
                "2. Add washed red lentils",
                "3. Simmer 30 mins creamy",
                "4. Blend half smooth",
                "5. Cumin paprika butter finish",
                "6. Lemon wedge tableside"
            ],
            time: "35 mins", difficulty: "Easy", servings: "6"
        },
        {
            name: "🍚 Pilav",
            ingredients: ["🍚 Basmati rice", "🥚 Vermicelli", "🧈 Butter", "🐔 Chicken stock", "🧂 Salt"],
            instructions: [
                "1. Brown vermicelli in butter",
                "2. Add washed basmati rice",
                "3. Pour hot chicken stock",
                "4. Simmer covered 15 mins",
                "5. Fluff rest 10 mins",
                "6. Perfect kebab companion"
            ],
            time: "25 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🥙 Lahmacun",
            ingredients: ["🥖 Pizza dough", "🍖 Ground meat", "🍅 Tomatoes", "🧅 Onion", "🌿 Parsley", "🌶️ Paprika"],
            instructions: [
                "1. Thin pizza dough rounds",
                "2. Spicy meat tomato topping",
                "3. High heat wood oven",
                "4. 90 seconds ultra crispy",
                "5. Roll with parsley lemon",
                "6. Turkish street pizza"
            ],
            time: "20 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍖 Adana Kebab",
            ingredients: ["🍖 Lamb leg mince", "🫒 Red pepper paste", "🧂 Salt", "🌶️ Chili flakes", "🧄 Garlic"],
            instructions: [
                "1. 80/20 lamb mince coarse",
                "2. Red pepper paste chili",
                "3. Wide flat skewers",
                "4. Charcoal high heat",
                "5. Juicy spicy perfection",
                "6. Authentic Adana style"
            ],
            time: "25 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥬 Tabule",
            ingredients: ["🌾 Bulgur", "🌿 Parsley", "🍅 Tomatoes", "🥒 Cucumber", "🧅 Onion", "🍋 Lemon"],
            instructions: [
                "1. Soak fine bulgur 15 mins",
                "2. Chop parsley ultra fine",
                "3. Dice cucumber tomatoes",
                "4. Lemon olive oil pomegranate",
                "5. Mix gently chilled",
                "6. Fresh herb salad"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍮 Baklava",
            ingredients: ["🥮 Phyllo dough", "🥜 Pistachios", "🧈 Butter", "🍯 Sugar syrup", "🌰 Walnuts"],
            instructions: [
                "1. Layer buttered phyllo sheets",
                "2. Nut filling every 5 layers",
                "3. Cut diamonds before baking",
                "4. 180°C 40 mins golden",
                "5. Boiling sugar syrup soak",
                "6. Gaziantep masterpiece"
            ],
            time: "60 mins", difficulty: "Hard", servings: "12"
        },
        {
            name: "☕ Turkish Coffee",
            ingredients: ["☕ Fine ground coffee", "🥛 Water", "🍯 Sugar optional"],
            instructions: [
                "1. 2 tsp coffee per cup",
                "2. Cold water cezve pot",
                "3. Sugar if desired",
                "4. Slow stir no boil",
                "5. Thick foam perfect",
                "6. Fortune in grounds"
            ],
            time: "5 mins", difficulty: "Easy", servings: "1"
        },
        {
            name: "🥙 Pide",
            ingredients: ["🥖 Pizza dough", "🧀 Mozzarella", "🥚 Egg", "🧈 Butter", "🌿 Nigella seeds"],
            instructions: [
                "1. Oval boat shape dough",
                "2. Cheese meat spinach filling",
                "3. Curved raised edges",
                "4. Egg yolk center bake",
                "5. Butter sesame finish",
                "6. Turkish pizza boat"
            ],
            time: "30 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍲 Ezogelin Soup",
            ingredients: ["🫘 Red lentils", "🍚 Bulgur", "🌶️ Paprika", "🧅 Onion", "🍅 Tomato paste"],
            instructions: [
                "1. Sauté onion tomato paste",
                "2. Red lentils bulgur rice",
                "3. Spicy paprika cumin broth",
                "4. Simmer 30 mins creamy",
                "5. Mint lemon butter finish",
                "6. Turkish spicy lentil"
            ],
            time: "35 mins", difficulty: "Easy", servings: "6"
        },
        {
            name: "🍖 Şiş Kebab",
            ingredients: ["🍖 Lamb cubes", "🧄 Yogurt", "🌿 Thyme", "🛢️ Olive oil", "🧂 Salt"],
            instructions: [
                "1. Marinate lamb overnight",
                "2. Large metal skewers",
                "3. Charcoal grill medium rare",
                "4. Tomato pepper onion skewer",
                "5. Pita yogurt salad side",
                "6. Classic şiş style"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🥬 Çoban Salata",
            ingredients: ["🍅 Tomatoes", "🥒 Cucumber", "🧅 Onion", "🫒 Olives", "🌿 Parsley", "🧂 Sumac"],
            instructions: [
                "1. Large chop seasonal veggies",
                "2. Shepherd chunky style",
                "3. Sumac lemon olive oil",
                "4. No lettuce traditional",
                "5. Feta optional crumble",
                "6. Fresh meze classic"
            ],
            time: "10 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🥟 Börek",
            ingredients: ["🥮 Yufka dough", "🧀 Feta cheese", "🥚 Egg", "🥛 Milk", "🧈 Butter"],
            instructions: [
                "1. Layer yufka sheets butter",
                "2. Feta spinach filling",
                "3. Roll spiral or triangle",
                "4. Egg milk wash bake",
                "5. Crispy golden layers",
                "6. Savory pastry star"
            ],
            time: "40 mins", difficulty: "Medium", servings: "6"
        },
        {
            name: "🍯 Kunefe",
            ingredients: ["🧀 Mozzarella", "🥮 Kadayıf shred", "🧈 Butter", "🍯 Sugar syrup"],
            instructions: [
                "1. Shred kadayıf butter toss",
                "2. Half in pan press",
                "3. Mozzarella layer melt",
                "4. Top kadayıf golden crisp",
                "5. Hot sugar syrup soak",
                "6. Cheese pull heaven"
            ],
            time: "25 mins", difficulty: "Medium", servings: "8"
        },
        {
            name: "🥙 Simit",
            ingredients: ["🍚 Flour", "🧂 Salt", "🧂 Sesame seeds", "🥄 Molasses water"],
            instructions: [
                "1. Turkish bagel dough",
                "2. Rope twist ring shape",
                "3. Molasses water dip",
                "4. Heavy sesame coating",
                "5. Stone oven bake",
                "6. Street breakfast staple"
            ],
            time: "45 mins", difficulty: "Medium", servings: "8"
        },
        {
            name: "🍲 Iskender",
            ingredients: ["🍖 Döner meat", "🍚 Pilav rice", "🧀 Yogurt", "🍅 Tomato sauce", "🧈 Butter"],
            instructions: [
                "1. Pita cubes base layer",
                "2. Hot döner meat slices",
                "3. Boiling tomato sauce",
                "4. Generous melted butter",
                "5. Thick yogurt rivers",
                "6. Bursa meat heaven"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🥬 Meze",
            ingredients: ["🫘 Hummus", "🍆 Baba ganoush", "🧀 Feta", "🫒 Olives", "🥒 Pickles"],
            instructions: [
                "1. Small plate assortment",
                "2. Dip spread nibble",
                "3. Raki companion perfect",
                "4. Endless flavor variety",
                "5. Social eating culture",
                "6. Turkish tapas style"
            ],
            time: "15 mins", difficulty: "Easy", servings: "6"
        },
        {
            name: "🍖 Testi Kebab",
            ingredients: ["🍖 Lamb chunks", "🥕 Carrots", "🍅 Tomatoes", "🧄 Garlic", "🧂 Spices"],
            instructions: [
                "1. Clay pot layering",
                "2. Meat veggies spices",
                "3. Sealed clay testı pot",
                "4. Wood oven 8 hours",
                "5. Dramatic neck break serve",
                "6. Cappadocia specialty"
            ],
            time: "480 mins", difficulty: "Hard", servings: "4"
        }
    ]
},

   korea: {
    flag: "🇰🇷", 
    icon: "🌮", 
    name: "Korean Cuisine",
    recipes: [
        {
            name: "🌮 Korean BBQ",
            ingredients: ["🥩 Thin beef slices", "🥬 Lettuce wraps", "🧄 Garlic", "🌶️ Gochujang", "🥒 Kimchi", "🥑 Perilla leaves"],
            instructions: [
                "1. Tabletop grill sizzling hot",
                "2. Thin beef slices marinated",
                "3. Sesame oil salt dip",
                "4. Lettuce ssamjang kimchi wrap",
                "5. Garlic mushroom side grill",
                "6. Korean BBQ table ritual"
            ],
            time: "30 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍲 Kimchi Jjigae",
            ingredients: ["🥒 Kimchi", "🐖 Pork belly", "🧀 Tofu", "🧅 Onion", "🌶️ Gochugaru", "🥣 Broth"],
            instructions: [
                "1. Old ripe kimchi best",
                "2. Pork belly fat render",
                "3. Spicy gochugaru paste",
                "4. Kimchi juice broth base",
                "5. Tofu zucchini finish",
                "6. Boiling hot pot comfort"
            ],
            time: "25 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍜 Bibimbap",
            ingredients: ["🍚 Rice", "🥚 Fried egg", "🥬 Namul veggies", "🌶️ Gochujang", "🥩 Beef", "🥒 Cucumber"],
            instructions: [
                "1. Hot stone bowl rice",
                "2. 5 color veggie namul",
                "3. Seasoned beef bulgogi",
                "4. Sunny side egg crown",
                "5. Gochujang sauce mix",
                "6. Crispy rice edge"
            ],
            time: "35 mins", difficulty: "Medium", servings: "2"
        },
        {
            name: "🍗 Bulgogi",
            ingredients: ["🥩 Ribeye thin sliced", "🍐 Asian pear", "🧂 Soy sauce", "🧄 Garlic", "🌿 Sesame oil", "🥢 Scallions"],
            instructions: [
                "1. Pear onion garlic blend",
                "2. Soy sugar sesame marinade",
                "3. Thin beef slices coat",
                "4. 30 mins fridge marinate",
                "5. High heat quick sear",
                "6. Sweet savory perfection"
            ],
            time: "40 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🥟 Mandu",
            ingredients: ["🥟 Dumpling wrappers", "🐖 Pork", "🥬 Kimchi", "🧅 Tofu", "🌿 Garlic chives", "🥚 Egg wash"],
            instructions: [
                "1. Kimchi pork filling mix",
                "2. Round wrapper pleat seal",
                "3. Steam boil pan fry combo",
                "4. Crispy bottom soft top",
                "5. Dipping sauce chili oil",
                "6. Korean potsticker style"
            ],
            time: "30 mins", difficulty: "Medium", servings: "6"
        },
        {
            name: "🍜 Japchae",
            ingredients: ["🍜 Sweet potato noodles", "🥩 Bulgogi beef", "🥬 Spinach", "🫛 Bell peppers", "🥢 Carrot matchsticks", "🌿 Sesame"],
            instructions: [
                "1. Boil glass noodles al dente",
                "2. Soy sesame marinade sauce",
                "3. Stir fry veggies separate",
                "4. Beef mushrooms peppers",
                "5. Noodles veggies meat toss",
                "6. Sweet savory chewy delight"
            ],
            time: "25 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍲 Samgyetang",
            ingredients: ["🐓 Young chicken", "🌾 Ginseng", "🧅 Garlic", "🌰 Sticky rice", "🌿 Jujube dates", "🥄 Broth"],
            instructions: [
                "1. Stuff chicken rice ginseng",
                "2. Pot with garlic jujube",
                "3. Milky chicken broth simmer",
                "4. 2 hours medicinal soup",
                "5. Hot summer energy tonic",
                "6. Korean ginseng chicken"
            ],
            time: "120 mins", difficulty: "Medium", servings: "2"
        },
        {
            name: "🥓 Samgyeopsal",
            ingredients: ["🥓 Pork belly slices", "🥬 Lettuce", "🧄 Garlic", "🌶️ Chili", "🦐 Shrimp paste", "🥢 Scissors"],
            instructions: [
                "1. Thick pork belly strips",
                "2. Table grill sizzling fat",
                "3. Shrimp paste salt dip",
                "4. Lettuce garlic chili wrap",
                "5. Meat scissors table cut",
                "6. Korean pork belly BBQ"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍜 Tteokbokki",
            ingredients: ["🌾 Rice cakes", "🌶️ Gochujang", "🍬 Sugar", "🐚 Anchovy stock", "🥬 Fish cake", "🧀 Mozzarella"],
            instructions: [
                "1. Cylindrical rice cakes soak",
                "2. Red gochujang anchovy sauce",
                "3. Boil thick glossy sauce",
                "4. Fish cake green onion",
                "5. Mozzarella cheese pull",
                "6. Street food spicy rice"
            ],
            time: "20 mins", difficulty: "Easy", servings: "3"
        },
        {
            name: "🥗 Namul",
            ingredients: ["🥬 Spinach", "🥕 Carrots", "🌱 Soybean sprouts", "🧂 Salt", "🌿 Sesame oil", "🧄 Garlic"],
            instructions: [
                "1. Blanch season each veggie",
                "2. Spinach sesame soy blanch",
                "3. Carrot matchsticks sesame",
                "4. Bean sprouts garlic salt",
                "5. 7 color banchan variety",
                "6. Korean seasoned vegetables"
            ],
            time: "20 mins", difficulty: "Easy", servings: "6"
        },
        {
            name: "🍲 Doenjang Jjigae",
            ingredients: ["🫘 Doenjang paste", "🥓 Pork", "🍄 Mushrooms", "🥬 Zucchini", "🧀 Tofu", "🥣 Kelp broth"],
            instructions: [
                "1. Doenjang soybean paste sauté",
                "2. Pork zucchini mushrooms",
                "3. Kelp anchovy broth boil",
                "4. Tofu cubes gentle simmer",
                "5. Earthy umami comfort stew",
                "6. Korean soybean hot pot"
            ],
            time: "30 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🥟 Gimbap",
            ingredients: ["🌿 Nori seaweed", "🍚 Sushi rice", "🥕 Carrot", "🥬 Spinach", "🥚 Egg", "🦪 Crab stick"],
            instructions: [
                "1. Seasoned sushi rice",
                "2. Colorful veggie egg strips",
                "3. Bamboo mat tight roll",
                "4. Nori seaweed seal crisp",
                "5. 1 inch thick slices",
                "6. Korean seaweed rice roll"
            ],
            time: "40 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍗 Dakgalbi",
            ingredients: ["🍗 Chicken thigh", "🥬 Cabbage", "🍜 Sweet potato noodles", "🌶️ Gochujang", "🧅 Onion", "🥢 Perilla"],
            instructions: [
                "1. Chicken gochujang marinade",
                "2. Cast iron pan sizzling",
                "3. Cabbage sweet potato noodles",
                "4. Stir fry spicy sweet",
                "5. Tabletop communal cooking",
                "6. Chuncheon spicy chicken"
            ],
            time: "25 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍜 Kalguksu",
            ingredients: ["🍜 Hand-pulled noodles", "🐓 Chicken", "🥬 Zucchini", "🌿 Seaweed", "🥣 Broth", "🥢 Scallions"],
            instructions: [
                "1. Rich chicken broth simmer",
                "2. Knife-cut fresh noodles",
                "3. Zucchini seaweed garnish",
                "4. Slippery chewy noodle bite",
                "5. Comfort food winter classic",
                "6. Korean knife-cut noodles"
            ],
            time: "45 mins", difficulty: "Medium", servings: "4"
        
        },
    

 {
    name: "🥢 Jjajangmyeon", 
    ingredients: [
        "🍜 Fresh jjajangmyeon noodles", 
        "🥜 Chunjang black bean paste", 
        "🥩 Pork belly (cubed)", 
        "🥕 Zucchini (1/2 inch cubes)", 
        "🧅 Onion (chunked)", 
        "🥬 Cabbage", 
        "🥔 Potato (cubed)", 
        "🧂 Sugar", 
        "🥣 Chicken stock", 
        "🌾 Cornstarch slurry"
    ],
    instructions: [
        "1. Sauté pork belly until fat renders",
        "2. Add chunjang paste - fry 3 mins dark",
        "3. Potato zucchini onion cabbage cubes",
        "4. Chicken stock sugar simmer 10 mins",
        "5. Cornstarch slurry - glossy thick sauce",
        "6. Boil noodles al dente - sauce toss",
        "7. Cucumber matchsticks garnish fresh",
        "8. Korean-Chinese black bean magic"
    ],
    time: "25 mins", 
    difficulty: "Medium", 
    servings: "2"
}
    ]
},


    vietnam: {
    flag: "🇻🇳", 
    icon: "🥢", 
    name: "Vietnamese Cuisine",
    recipes: [
        {
            name: "🥢 Pho",
            ingredients: ["🍜 Rice noodles", "🥩 Beef brisket", "⭐ Star anise", "🌿 Cilantro", "🌶️ Thai basil", "🥬 Bean sprouts", "🧅 Onion", "🫚 Ginger"],
            instructions: [
                "1. Char onion ginger for smokiness",
                "2. Beef bones simmer 6 hours",
                "3. Star anise cinnamon cloves",
                "4. Fish sauce rock sugar balance",
                "5. Thin beef slices rare cooked",
                "6. Fresh herbs lime chili table"
            ],
            time: "360 mins", difficulty: "Hard", servings: "6"
        },
        {
            name: "🥡 Spring Rolls",
            ingredients: ["🥡 Rice paper", "🦐 Shrimp", "🥬 Lettuce", "🥕 Carrot", "🌿 Mint", "🍜 Vermicelli", "🥜 Peanuts"],
            instructions: [
                "1. Soak rice paper till pliable",
                "2. Layer lettuce vermicelli herbs",
                "3. Shrimp carrot diagonal center",
                "4. Tight roll tuck sides",
                "5. Peanut Hoisin dipping sauce",
                "6. Fresh crunchy Vietnamese roll"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍜 Bun Cha",
            ingredients: ["🐷 Pork patties", "🍜 Vermicelli", "🥗 Herbs", "🥒 Pickles", "🌶️ Chili garlic", "🥢 Fish sauce"],
            instructions: [
                "1. Pork belly mince patties",
                "2. Charcoal grill caramelized",
                "3. Nuoc cham dipping sauce",
                "4. Vermicelli fresh herbs pile",
                "5. Dip eat Hanoi style",
                "6. Obama approved bowl"
            ],
            time: "25 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥗 Goi Cuon",
            ingredients: ["🥗 Rice paper", "🦐 Shrimp", "🍤 Pork", "🥬 Lettuce", "🌿 Basil mint", "🥕 Carrot"],
            instructions: [
                "1. Double layer rice paper",
                "2. Pork shrimp lettuce base",
                "3. Fresh herb fragrant layer",
                "4. Roll tight triangle cut",
                "5. Peanut sauce hoisin dip",
                "6. Summer roll perfection"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍲 Banh Mi",
            ingredients: ["🍞 Baguette", "🐷 Pork pate", "🥬 Pickles", "🥗 Cilantro", "🌶️ Chili", "🥚 Egg"],
            instructions: [
                "1. French baguette airy crust",
                "2. Pate liver sausage layer",
                "3. Pork roll cucumber pickles",
                "4. Chili cilantro generous",
                "5. Maggi sauce drizzle",
                "6. Vietnamese sandwich king"
            ],
            time: "15 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🥢 Com Tam",
            ingredients: ["🍚 Broken rice", "🥩 Grilled pork", "🥚 Sunny egg", "🥗 Pickles", "🥢 Fish sauce"],
            instructions: [
                "1. Broken rice grains perfect",
                "2. Pork chop lemongrass grill",
                "3. Sunny side egg crown",
                "4. Cucumber tomato pickles",
                "5. Fish sauce nuoc cham",
                "6. Saigon street rice plate"
            ],
            time: "25 mins", difficulty: "Easy", servings: "2"
        },
        {
            name: "🍜 Bun Bo Hue",
            ingredients: ["🍜 Thick rice noodles", "🐷 Pork knuckle", "🌿 Lemongrass", "🌶️ Chili oil", "🥬 Herbs"],
            instructions: [
                "1. Fermented shrimp paste base",
                "2. Lemongrass beef bone broth",
                "3. Thick round rice vermicelli",
                "4. Pork knuckle beef shank",
                "5. Chili oil red seductive",
                "6. Hue spicy beef noodle"
            ],
            time: "180 mins", difficulty: "Hard", servings: "6"
        },
        {
            name: "🥗 Goi Ga",
            ingredients: ["🍗 Chicken", "🥬 Cabbage", "🥕 Carrot", "🌿 Mint cilantro", "🥜 Peanuts", "🥢 Lime"],
            instructions: [
                "1. Poached chicken shred fine",
                "2. Cabbage carrot julienne",
                "3. Fresh herb explosion",
                "4. Lime fish sauce dressing",
                "5. Fried shallots peanut crunch",
                "6. Vietnamese chicken salad"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍲 Canh Chua",
            ingredients: ["🐟 Fish", "🍍 Pineapple", "🍅 Tomato", "🥬 Okra", "🌿 Rice paddy herb", "🥄 Tamarind"],
            instructions: [
                "1. Tamarind water sour base",
                "2. Catfish fillets elephant ear",
                "3. Pineapple tomato okra chunks",
                "4. Rice paddy herb finish",
                "5. Sweet sour spicy balance",
                "6. Mekong delta sour soup"
            ],
            time: "25 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥡 Banh Xeo",
            ingredients: ["🥡 Rice flour batter", "🦐 Shrimp", "🐷 Pork", "🥬 Bean sprouts", "🌿 Herbs"],
            instructions: [
                "1. Crispy rice flour batter",
                "2. Pork shrimp sizzling hot",
                "3. Bean sprouts steam close",
                "4. Turmeric yellow golden hue",
                "5. Fresh herbs lettuce wrap",
                "6. Sizzling crepe perfection"
            ],
            time: "30 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥢 Hu Tieu",
            ingredients: ["🍜 Rice noodles", "🐷 Pork", "🦐 Shrimp", "🥚 Quail egg", "🌿 Garlic chives"],
            instructions: [
                "1. Clear pork shrimp broth",
                "2. Fine rice vermicelli swirl",
                "3. Pork slices quail egg",
                "4. Fried garlic chives",
                "5. Chili lime tableside",
                "6. Southern noodle soup"
            ],
            time: "40 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍲 Bo Kho",
            ingredients: ["🥩 Beef shank", "🥕 Carrot", "⭐ Star anise", "🌿 Lemongrass", "🍞 Baguette"],
            instructions: [
                "1. Beef shank star anise",
                "2. Lemongrass curry powder",
                "3. Slow braise tender melt",
                "4. Carrot chunks sweet balance",
                "5. Baguette dipping ritual",
                "6. Vietnamese beef stew"
            ],
            time: "180 mins", difficulty: "Medium", servings: "6"
        },
        {
            name: "🥗 Goi Tom",
            ingredients: ["🦐 Shrimp", "🥬 Herbs", "🥜 Peanuts", "🥒 Cucumber", "🌶️ Chili"],
            instructions: [
                "1. Poached shrimp cool shock",
                "2. Fresh herb explosion",
                "3. Lime fish sauce dressing",
                "4. Peanut crunch texture",
                "5. Chili heat balance",
                "6. Shrimp herb salad"
            ],
            time: "15 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍜 Mi Quang",
            ingredients: ["🍜 Turmeric rice noodles", "🐷 Pork", "🦐 Shrimp", "🥬 Herbs", "🥜 Peanuts"],
            instructions: [
                "1. Turmeric yellow rice noodles",
                "2. Pork shrimp double protein",
                "3. Annatto oil red seductive",
                "4. Fresh herbs peanut mound",
                "5. Little broth wet dry",
                "6. Central Vietnam specialty"
            ],
            time: "30 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥡 Banh Cuon",
            ingredients: ["🥡 Rice batter", "🥩 Pork", "🦐 Shrimp", "🌿 Mint", "🥢 Fish sauce"],
            instructions: [
                "1. Steamed rice crepe thin",
                "2. Pork mushroom fried shallot",
                "3. Roll slice perfect bite",
                "4. Mint cilantro fresh herbs",
                "5. Fish sauce nuoc mam",
                "6. Hanoi steamed roll"
            ],
            time: "25 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🍲 Chả Cá Lã Vọng",
            ingredients: ["🐟 Fish", "🌿 Dill", "🥬 Herbs", "🍜 Rice noodles", "🥜 Peanuts"],
            instructions: [
                "1. Turmeric fish cubes marinade",
                "2. Tabletop sizzling pan dill",
                "3. Fresh herb mountain pile",
                "4. Rice noodle vermicelli base",
                "5. Peanut shrimp paste sauce",
                "6. Hanoi legendary fish grill"
            ],
            time: "30 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥢 Nem Nuong",
            ingredients: ["🐷 Pork sausage", "🍜 Vermicelli", "🥗 Herbs", "🥜 Peanuts", "🥢 Sauce"],
            instructions: [
                "1. Grilled pork sausage lemongrass",
                "2. Vermicelli herb rice paper",
                "3. Peanut dipping sauce thick",
                "4. Fresh cucumber pickle crunch",
                "5. Roll eat sausage style",
                "6. Central Vietnam grilled pork"
            ],
            time: "25 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥗 Duong Beo",
            ingredients: ["🥗 Rice paper", "🦐 Shrimp", "🥬 Herbs", "🥜 Peanuts"],
            instructions: [
                "1. Shrimp paste fat rice paper",
                "2. Fresh herb topping",
                "3. Crispy pork rind crumble",
                "4. Peanut crunchy finish",
                "5. Dip eat fat delicious",
                "6. Central Vietnam specialty"
            ],
            time: "20 mins", difficulty: "Easy", servings: "4"
        },
        {
            name: "🍜 Miến Lươn",
            instructions: [
                "1. Glass noodles eel broth",
                "2. Eel grilled charred perfect",
                "3. Fermented bean paste base",
                "4. Dill herb fresh pile",
                "5. Chili lime heat balance",
                "6. Northern eel noodle soup"
            ],
            time: "30 mins", difficulty: "Medium", servings: "4"
        },
        {
            name: "🥡 Banh Khoai",
            ingredients: ["🥡 Rice flour", "🦐 Shrimp", "🥬 Bean sprouts", "🌿 Herbs"],
            instructions: [
                "1. Sweet potato rice batter",
                "2. Shrimp bean sprouts fill",
                "3. Crispy edges golden center",
                "4. Lettuce herb wrap",
                "5. Fish sauce nuoc cham dip",
                "6. Hue crispy pancake"
            ],
            time: "25 mins", difficulty: "Medium", servings: "4"
        }
    ]
},
}
