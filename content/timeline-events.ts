type Event = {
	year: number;
	month: number | null;
	content: string;
};

const Events: Event[] = [
	{
		year: 2017,
		month: null,
		content: "I quitted high school at 10th grade.",
	},
	{
		year: 2018,
		month: null,
		content: "Joined <a class='link' href='https://ldjam.com/users/berkin/games'>Ludum Dare</a> events. Built video games by myself and worked with teams.",
	},
	{
		year: 2019,
		month: 6,
		content: "Started studying <b>Information Security</b> at <b>Istanbul Gedik University</b>.",
	},
	{
		year: 2019,
		month: 7,
		content: "Published my first game in <a class='link' href='https://play.google.com/store/apps/developer?id=Berkin+Akkaya' target='_blank'>Google Play</a>.",
	},
	{
		year: 2019,
		month: 8,
		content: "Completed my internship at <b>Gedik Holding</b>.",
	},
	{
		year: 2020,
		month: 4,
		content: "I started working at <b>Gedik Holding</b> as a <b>Front-End Developer</b>.",
	},
	{
		year: 2022,
		month: 6,
		content: "Started working at Trendyol Group.",
	},
];

export default Events;
