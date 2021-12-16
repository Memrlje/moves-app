
const { MongoClient, ObjectID} = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "movies-app";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log(error);
    }

    const db = client.db(databaseName);
    db.collection("movies").insertMany([
        { 
        "title": "The Shawshank Redemption",
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "director": "Frank Darabont",
        "stars": "['Tim Robbins', 'Morgan Freeman', 'Bob Gunton']",
        "ratings": "[1, 4, 2, 3, 2, 4, 1, 4, 5, 4, 4, 3 , 4]"
        },
        { 
        "title": "The Godfather",
        "description": "The Godfather follows Vito Corleone, Don of the Corleone family, as he passes the mantel to his unwilling son, Michael.",
        "director": "Francis Ford Coppola",
        "stars": "['Marlon Brando', 'Al Pacino', 'James Caan']",
        "ratings": "[5, 4, 5, 3, 2, 1, 1, 4, 1, 4, 3, 1 , 4]"
        },
        { 
        "title": "The Godfather: Part II",
        "description": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        "director": "Francis Ford Coppola",
        "stars": "['Al Pacino', 'Robert De Niro', 'Robert Duvall']",
        "ratings": "[5, 1, 5, 3, 2, 2, 1, 4, 5, 3, 3, 4 , 4]"
        },
        { 
        "title": "The Dark Knight",
        "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "director": "Christopher Nolan",
        "stars": "['Christian Bale', 'Heath Ledger', 'Aaron Eckhart']",
        "ratings": "[5, 5, 5, 3, 4, 1, 1, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "12 Angry Men",
        "description": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
        "director": "Sidney Lumet",
        "stars": "['Henry Fonda', 'Lee J. Cobb', 'Martin Balsam']",
        "ratings": "[5, 4, 3, 3, 2, 1, 3, 4, 5, 1, 3, 1 , 4]"
        },
        { 
        "title": "The Lord of the Rings: The Return of the King",
        "description": "Gandalf and Aragorn lead the World of Men against Saurons army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        "director": "Peter Jackson",
        "stars": "['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen', 'Orlando Bloom']",
        "ratings": "[4, 4, 5, 5, 4, 5, 3, 5, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "Pulp Fiction",
        "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "director": "Quentin Tarantino",
        "stars": "['John Travolta', 'Uma Thurman', 'Samuel L. Jackson', 'Bruce Willis']",
        "ratings": "[5, 1, 5, 1, 2, 1, 1, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "Schindlers List",
        "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        "director": "Steven Spielberg",
        "stars": "['Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley', 'Caroline Goodall']",
        "ratings": "[5, 2, 5, 3, 2, 1, 1, 4, 5, 2, 3, 3 , 4]"
        },
        { 
        "title": "Inception",
        "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        "director": "Christopher Nolan",
        "stars": "['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page']",
        "ratings": "[3, 2, 1, 3, 2, 1, 1, 4, 2, 4, 3, 3 , 4]"
        },
        { 
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        "director": "Peter Jackson",
        "stars": "['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen', 'Orlando Bloom']",
        "ratings": "[5, 4, 5, 4, 3, 5, 5, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "The Lord of the Rings: The Two Towers",
        "description": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Saurons new ally, Saruman, and his hordes of Isengard.",
        "director": "Peter Jackson",
        "stars": "['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen', 'Orlando Bloom']",
        "ratings": "[5, 4, 5, 3, 2, 4, 4, 4, 5, 4, 4, 4 , 4]"
        },
        { 
        "title": "Forrest Gump",
        "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        "director": "Robert Zemeckis",
        "stars": "['Tom Hanks', 'Robin Wright', 'Gary Sinise', 'Sally Field']",
        "ratings": "[3, 4, 3, 3, 2, 1, 2, 3, 5, 4, 4, 3 , 4]"
        },
        { 
        "title": "The Good, the Bad and the Ugly",
        "description": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
        "director": "Sergio Leone",
        "stars": "['Clint Eastwood', 'Eli Wallach', 'Lee Van Cleef', 'Aldo Giuffrè']",
        "ratings": "[5, 4, 5, 3, 1, 1, 1, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "The Matrix",
        "description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        "director": "Lana Wachowski",
        "stars": "['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss']",
        "ratings": "[2, 1, 5, 3, 2, 1, 1, 4, 5, 2, 2, 3 , 4]"
        },
        { 
        "title": "Goodfellas",
        "description": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        "director": "Martin Scorsese",
        "stars": "['Robert De Niro', 'Ray Liotta', 'Joe Pesci']",
        "ratings": "[4, 4, 5, 3, 2, 1, 1, 2, 5, 2, 3, 2 , 4]"
        },
        { 
        "title": "Parasite",
        "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        "director": "Bong Joon Ho",
        "stars": "['Kang-ho Song', 'Sun-kyun Lee', 'Yeo-jeong Cho']",
        "ratings": "[5, 4, 5, 3, 2, 1, 1, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "Interstellar",
        "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity\"s survival.",
        "director": "Christopher Nolan",
        "stars": "['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain']",
        "ratings": "[2, 3, 5, 4, 2, 4, 1, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "Spirited Away",
        "description": "During her familys move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        "director": "Hayao Miyazaki",
        "stars": "['Daveigh Chase', 'Suzanne Pleshette', 'Miyu Irino']",
        "ratings": "[5, 4, 5, 3, 2, 2, 2, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "The Green Mile",
        "description": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
        "director": "Frank Darabont",
        "stars": "['Tom Hanks', 'Michael Clarke Duncan', 'David Morse']",
        "ratings": "[5, 4, 5, 4, 3, 2, 2, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "Gladiator",
        "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        "director": " Ridley Scott",
        "stars": "['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen']",
        "ratings": "[5, 4, 5, 3, 2, 1, 1, 4, 5, 4, 3, 3 , 4]"
        },
    ])
    db.collection("shows").insertMany([
        { 
        "title": "Planet Earth II",
        "description": "David Attenborough returns with a new wildlife documentary that shows life in a variety of habitats.",
        "director": "Frank Darabont",
        "stars": "['David Attenborough', 'Chadden Hunter']",
        "ratings": "[5, 4, 2, 3, 2, 2, 2, 4, 2, 4, 3, 3 , 4]"
        },
        { 
        "title": " Planet Earth",
        "description": "Emmy Award-winning, 11 episodes, five years in the making, the most expensive nature documentary series ever commissioned by the BBC, and the first to be filmed in high definition.",
        "director": "Francis Ford Coppola",
        "stars": "['Marlon Brando', 'Sigourney Weaver']",
        "ratings": "[3, 4, 3, 3, 3, 1, 3, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "Breaking Bad",
        "description": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his familys future.",
        "director": "Vince Gilligan",
        "stars": "['Bryan Cranston', 'Aaron Paul', 'Anna Gunn']",
        "ratings": "[1, 4, 1, 3, 1, 1, 1, 4, 1, 4, 3, 3 , 4]"
        },
        { 
        "title": "Band of Brothers",
        "description": "The story of Easy Company of the U.S. Army 101st Airborne Division and their mission in World War II Europe, from Operation Overlord to V-J Day.",
        "director": "",
        "stars": "['Scott Grimes', 'Damian Lewis', 'Ron Livingston']",
        "ratings": "[5, 5, 5, 3, 3, 4, 4, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "Chernobyl",
        "description": "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the worlds worst man-made catastrophes.",
        "director": "Craig Mazin",
        "stars": "['Jessie Buckley', 'Jared Harris', 'Stellan Skarsgård']",
        "ratings": "[5, 4, 5, 3, 2, 1, 1, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "The Wire",
        "description": "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.",
        "director": "David Simon",
        "stars": "['Dominic West', 'Lance Reddick', 'Sonja Sohn']",
        "ratings": "[5, 4, 5, 3, 2, 1, 1, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "Blue Planet II",
        "description": "David Attenborough returns to the worlds oceans in this sequel to the acclaimed documentary filming rare and unusual creatures of the deep, as well as documenting the problems our oceans face.",
        "director": "",
        "stars": "['David Attenborough', 'Peter Drost']",
        "ratings": "[1, 1, 1, 2, 2, 1, 1, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "Avatar: The Last Airbender",
        "description": "n a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
        "director": "Michael Dante DiMartino",
        "stars": "['Dee Bradley Baker', 'Zach Tyler Eisen', 'Mae Whitman']",
        "ratings": "[5, 4, 5, 3, 2, 1, 1, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "The Sopranos",
        "description": "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.",
        "director": "David Chase",
        "stars": "['James Gandolfini', 'Lorriane Bracco', 'Edie Falco']",
        "ratings": "[5, 4, 5, 3, 2, 1, 1, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "Rick and Morty",
        "description": "An animated series that follows the exploits of a super scientist and his not-so-bright grandson.",
        "director": "Dan Harmon",
        "stars": "['Justin Roiland', 'Chris Parnell', 'Spencer Grammer']",
        "ratings": "[5, 4, 5, 3, 2, 1, 1, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "Fullmetal Alchemist: Brotherhood",
        "description": "Two brothers search for a Philosophers Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
        "director": "Hiromu Arakawa",
        "stars": "['Kent Williams', 'Iemasa Kayumi', 'Vic Magnogna']",
        "ratings": "[5, 4, 5, 1, 1, 1, 1, 2, 5, 3, 3, 3 , 4]"
        },
        { 
        "title": "Sherlock",
        "description": "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
        "director": "Mark Gatiss",
        "stars": "['Benedict Cumberbatch', 'Martin Freeman', 'Una Stubbs']",
        "ratings": "[1, 4, 5, 3, 2, 2, 1, 4, 3, 4, 4, 3 , 4]"
        },
        { 
        "title": "Firefly",
        "description": "Five hundred years in the future, a renegade crew aboard a small spacecraft tries to survive as they travel the unknown parts of the galaxy and evade warring factions as well as authority agents out to get them.",
        "director": "Joss Whedon",
        "stars": "['Nathan Fillion', 'Gina Torres','Alan Tudyk']",
        "ratings": "[1, 4, 1, 3, 2, 1, 1, 1, 5, 4, 1, 2 , 4]"
        },
        { 
        "title": "True Detective",
        "description": "Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
        "director": "Nic Pizzolatto",
        "stars": "['Matthew McConaughey', 'Colin Farrell', 'Woody Harrelson']",
        "ratings": "[5, 4, 5, 3, 4, 3, 3, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "Cowboy Bebop",
        "description": "The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners.",
        "director": "Hajime Yatate",
        "stars": "['Kôichi Yamadera', 'Unshô Ishizuka', 'Steve Blum']",
        "ratings": "[5, 4, 5, 3, 2, 1, 1, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "Only Fools and Horses",
        "description": "Comedy that follows two brothers from Londons rough Peckham estate as they wheel and deal through a number of dodgy deals and search for the big score thatll make them millionaires.",
        "director": "John Sullivan",
        "stars": "['David Jason', 'Nicholas Lyndhurst', 'Lennard Pearce']",
        "ratings": "[5, 4, 5, 3, 2, 2, 3, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "Gravity Falls",
        "description": "Twin siblings Dipper and Mabel Pines spend the summer at their great-uncles tourist trap in the enigmatic Gravity Falls, Oregon.",
        "director": "Alex Hirsch",
        "stars": "['Jason Ritter', 'Alex Hirsch', 'Kristen Schaal']",
        "ratings": "[5, 4, 5, 3, 2, 1, 1, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "Black Mirror",
        "description": "An anthology series exploring a twisted, high-tech multiverse where humanitys greatest innovations and darkest instincts collide.",
        "director": "Charlie Brooker",
        "stars": "['Daniel Lapaine', 'Hannah John-Kamen', 'Michaela Coel']",
        "ratings": "[5, 4, 5, 3, 2, 1, 1, 4, 5, 4, 3, 3 , 4]"
        },
        { 
        "title": "BoJack Horseman",
        "description": "BoJack Horseman was the star of the hit television show \"Horsin Around\" in the 80s and 90s, but now hes washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.",
        "director": "Raphael Bob-Waksberg",
        "stars": "['Will Arnett', 'Amy Sedaris', 'Aaron Paul']",
        "ratings": "[5, 4, 5, 3, 2, 1, 1, 4, 5, 4, 3, 1 , 1]"
        },
        { 
        "title": "Vikings",
        "description": "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.",
        "director": "Michael Hirst",
        "stars": "['Travis Fimmel', 'Alexander Ludwig', 'Katheryn Winnick']",
        "ratings": "[5, 4, 5, 3, 2, 1, 1, 4, 5, 2, 2, 2 , 2]"
        },
    ])
});

