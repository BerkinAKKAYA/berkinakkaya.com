type BlogPost = {
	slug: string;
	title: string;
	date: Date;
	tags: string[];
	hide?: boolean;
};

const BlogPosts: BlogPost[] = [
	{
		slug: "useful-bash-aliases",
		title: "Useful Bash Aliases",
		date: new Date("20 October 2020"),
		tags: ["Linux"],
	},
	{
		slug: "what-minimalism-removed-from-my-life",
		title: "What Minimalism Removed From My Life",
		date: new Date("06 November 2020"),
		tags: ["Minimalism", "Life"],
	},
	{
		slug: "my-keyboard-driven-workflow",
		title: "My Keyboard Driven Workflow",
		date: new Date("12 November 2020"),
		tags: ["Linux"],
	},
	{
		slug: "my-goals-for-2021",
		title: "My Goals for 2021",
		date: new Date("07 December 2020"),
		tags: ["Life"],
	},
	{
		slug: "the-future-of-web-and-mobile-apps",
		title: "The Future of Web and Mobile Apps",
		date: new Date("05 January 2021"),
		tags: ["Tech"],
	},
	{
		slug: "compling-and-installing-a-custom-linux-kernel",
		title: "Compiling and Installing a Custom Linux Kernel",
		date: new Date("08 February 2021"),
		tags: ["Linux"],
	},
];

export default BlogPosts;
