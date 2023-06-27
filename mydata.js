let favoriteBooks = [
    {
        title: "The Lord of the Rings - The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        year: 1954,
        characters: ["Frodo", "Gandalf", "Aragorn", "Elrond"]
        review: "I like this book for The combination of its immersive fantasy world, engaging characters, epic quest, timeless themes, masterful writing."
    },
    {
        title: "Eragon",
        author: "Christopher Paolini",
        year: 2002,
        characters: ["Eragon", "Saphira", "Brom", "Arya"]
        review: "I like this book because it offers an enticing blend of fantasy elements, relatable characters, thrilling adventures, and themes that resonate with readers of various ages."
    }
]

let favSongs = [
{
	title: "Caprice",
	artist: "Worakls",
	year: 2019,
	genres: ["Electronica"],
	sale: 444000,
	review: `I like it, because the song's combination of melodic beauty, emotional depth, rhythmic appeal, genre fusion, atmospheric quality.`
},
{
	title: "Supremacy",
	artist: "Muse",
	year: 2013,
	genres: ["Hard rock", "Progressive rock"],
	sale: 40000000,
	review: `I like it, because this is a combination of an epic sound, strong vocals, engaging instrumentation, catchy hooks.`
}
]

let favMovies = [
	{
		title: "JOKER",
		year: 2019,
		rating: 8.4,
		review: "I like this film because it's a complex and controversial film that explores dark themes and contains graphic content. People's responses and interpretations may vary, and enjoyment of the film can be subjective. The reasons mentioned above provide insights into why the movie has resonated with many viewers who appreciate its performances, psychological depth, atmosphere, social commentary, unique approach to the superhero genre, artistic merit, and the awards recognition it has received.",
		directors: ["Todd Phillips"],
		writers: ["Todd Phillips", "Scott Silver", "Bob Kane"],
		stars: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
		genres: ["Crime", "Drama", "Thriller"]
	},
	{
		title: "The Intouchables",
		year: 2011,
		rating: 8.5,
		review: "I like this film because the film's unique and inspiring story, humor, strong performances, themes of friendship and acceptance, cultural exchange, real-life impact, and international success all contribute to its popularity and positive reception.",
		directors: ["Olivier Nakache", "Éric Toledano"],
		writers: ["Olivier Nakache", "Éric Toledano", "Philippe Pozzo di Borgo"],
		stars: ["Francois Cluzet", "Omar Sy", "Anne Le Ny"],
		genres: ["Biography", "Comedy", "Drama"]
	},
	{
		title: "FREE SOLO",
		year: 2018,
		rating: 8.1,
		review: "I like this film for combination of the jaw-dropping athletic achievement, tension and suspense, human drama, cinematic beauty, exploration of fear and limitations, real-life authenticity, and award-winning filmmaking create a powerful and immersive viewing experience for audiences.",
		directors: ["Jimmy Chin", "Elizabeth Chai Vasarhelyi"],
		writers: ["Has no writers"],
		stars: ["Alex Hannold", "Tommy Caldwell", "Jimmy Chin"],
		genres: ["Documentary", "Adventure", "Sport"]
	},
	{
		title: "THE TWO POPES",
		year: 2019,
		rating: 7.6,
		review: "I like this film for combination of stellar performances, humanizing the papacy, intellectual debates, historical significance, themes of forgiveness and redemption, cinematic craftsmanship, and timeliness and relevance make the film appealing to a wide range of viewers.",
		directors: ["Fernando Meirelles"],
		writers: ["Anthony McCarten"],
		stars: ["Jonathan Pryce", "Anthony Hopkins", "Juan Minujín"],
		genres: ["Biography", "Comedy", "Drama"]
	}
]

let ourTeam = {
	name: "RandomNumber Generator(1,6)",
	members:[
		{
			name: "Péter Lázár",
			birthday: { year: "1986", month: "07", day: "03" },
			location: { country: "Hungary", city: "Hosszúhetény" },
			codingLevel: {level: 20, seniority: "junior"},
			favorites: {"favMovies": favMovies, "favBooks": favBooks, "favSongs": favSongs},
			colors: {primary: {red: 0, green:0, blue:255}, secondary: {red: 0, green:255, blue:0}}
		}
  ],
}
