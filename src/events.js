import _0back from "./images/0/back.png";
import _00 from "./images/0/0.jpg";
import _01 from "./images/0/1.jpg";
import _02 from "./images/0/2.jpg";
import _1back from "./images/1/back.jpeg";
import _10 from "./images/1/0.png";
import _11 from "./images/1/1.png";
import _12 from "./images/1/2.svg";
import _2back from "./images/2/back.jpg";
import _20 from "./images/2/0.webp";
import _21 from "./images/2/1.jpg";
import _22 from "./images/2/2.jpeg";
import _3back from "./images/3/back.webp";
import _30 from "./images/3/0.jpg";
import _31 from "./images/3/1.jpg";
import _32 from "./images/3/2.jpg";
import _4back from "./images/4/back.webp";
import _40 from "./images/4/0.webp";
import _41 from "./images/4/1.jpeg";
import _42 from "./images/4/2.jpg";
import _5back from "./images/5/back.png";
import _50 from "./images/5/0.jpg";
import _51 from "./images/5/1.jpg";
import _52 from "./images/5/2.jpg";
import _6back from "./images/6/back.jpg";
import _60 from "./images/6/0.jpg";
import _61 from "./images/6/1.jpg";
import _62 from "./images/6/2.jpg";
const events = [
	{
		title: "Envision Ideathon",
		content: [
			<>
				<p>
					The key motive here is to help develop a spirit of technical
					innovation and entrepreneurship by providing an appropriate
					solution to address some of the most pressing challenges of
					all time. Participants need to come up with a detailed
					solution using existing technologies for any of the given
					problem statements
				</p>
			</>,
			<>
				<h4>Procedure</h4>
			</>,
			<>
				<p>
					An intensive and brainstorming event for students are
					encouraged to realise the needs of the present and hence
					promoting a gradual change in the ways we develop and use
					technologies
				</p>
			</>,
		],
		backImg: _3back,
		aboutImgs: [_30, _31, _32],
		mode: <a href="https://meet.google.com">Google Meet</a>,
		schedule: "25 Dec - 26 Dec",
		rules: [
			"Plagiarism of any sort will not be entertained. However, participants can take inspiration from already existing technologies.",
			"Last date to submit the proposal would be_________ of the subsequent week.",
			"Team (2-5) would be allowed to participate.",
			"Participants must follow the format provided by the organizing committee for the proposal.",
			"Purely Software solutions will not be accepted. Hence, hardware integration of the project is compulsory.",
		],
		prizes: [
			{
				title: "Winner",
				about: "INR 2,500/-",
			},
			{
				title: "Runners Up",
				about: "INR 2,000/",
			},
			{
				title: "2nd Runners up",
				about: "INR 1,500/",
			},
		],
		others: (
			<>
				<div>Hello World</div>
			</>
		),
	},
	{
		title: "Tricky Ciruits",
		content: [
			<>
				If circuits intrigue you, if electronics engineering is your
				passion, then you’ve come to the right place! Test your design,
				simulation, and hardware implementation skills with the reallife
				problems that we’ll give you. The event will be performed in two
				rounds. Teams will be asked to give their submissions within the
				timeline. Teams will be judged on their skills.
			</>,
			<>
				<span className="event-mac-body-head" style={{ padding: '1.25rem 0', color: "var(--bgcolor)" }}>Pre requisites</span>
				<ul style={{ listStyle: 'none' }}>
					<li style={{ padding: '0.25rem 0' }}>Basic to Intermediate knowledge level of Electronic and Electrical Circuits</li>
				</ul>
			</>
		],
		backImg: _6back,
		aboutImgs: [_60, _61, _62],
		mode: (
			<a href="https://www.circuit-diagram.org/editor/">
				circuit-diagram.org/editor/
			</a>
		),
		schedule: "25 Dec - 26 Dec",
		rules: [
			<>
				<div className="tricky-circuits-title">Round 1</div>
				<ol className="tricky-circuits-ol" type='a'>
					<li>A set of 5 questions will be given and 4 hours minutes will be allotted for solving them.</li>
					<li>In every question the participant will be provided with input and output signals for which they have to design the required circuit with the given set of components.</li>
					<li>Students submitting their solutions within the provided time frame will move to the next round.</li>
					<li>It will be time-based event, the team with least time will win.</li>
					<li>Any team unable to provide all the circuits in given time will be eliminated.</li>
				</ol>
			</>,
			<>
				<div className="tricky-circuits-title">Round 2</div>
				<ol className="tricky-circuits-ol" type='a'>
					<li>Teams will be given 3 problem statements for which they will have to design a circuit.</li>
					<li>Teams will be given 3 hours for this round.</li>
					<li>It will be time-based event, the team with least time will win.</li>
					<li>In case no team is able to complete all three, team completed 2 problems first will be awarded.</li>
				</ol>
			</>,
		],
		prizes: [
			{
				title: "Winner",
				about: "INR 2000/-",
			},
			{
				title: "Runners up",
				about: "INR 1500/-",
			},
			{
				title: "2nd Runners up",
				about: "INR 1000/-",
			},
		],
	},
	{
		title: "Code Chronicles",
		content: [
			<>
				Code Chronicles is a 3-hour long unrated coding event for
				students to evaluate their coding skills. This event is aimed to
				test problem-solving skills, knowledge of data structure and
				algorithms. This event lets you run through the waves of code
				smoothly and showcase your coding skills to stay ahead amongst
				your peers
			</>,
		],
		backImg: _4back,
		aboutImgs: [_40, _41, _42],
		mode: <a href="https://codechef.com">Codechef</a>,
		schedule: "25 Dec - 26 Dec",
		rules: [
			"Use of the internet is allowed",
			"Hints to crack each level will be given at the interval of 1 hour to teams and the next PDF will be provided in an interval of 1.5 hour.",
			"Disclosing or discussing clues between teams is not allowed.",
			"Clues are divided into 16 levels.",
			"Each team has to clear the previous level to reach the next level within the given timeline.",
			"Teams will consist of not more than 3 members.",
		],
		prizes: [
			{
				title: "Winner",
				about: "INR 1500/-",
			},
			{
				title: "Runners up",
				about: "INR 1000/-",
			},
			{
				title: "2nd Runners up",
				about: "INR 500/-",
			},
		],
		others: (
			<>
				<div>Hello World</div>
			</>
		),
	},
	{
		title: "Open, Sesame!",
		content: [
			<>
				If you love messing around with riddles then this event will
				surely awaken the Sherlock in you. ‘Open Sesame’ is a classic
				fun event that will require the participating teams to decode
				the clue provided in PDF format. With each step, the team needs
				to decipher the riddles and crack the clue which will be the
				password for the next PDF. This could be the best possible way
				to integrate creative thinking with aptitude analysis.
			</>,
			"Hi there again",
		],
		backImg: _0back,
		aboutImgs: [_00, _01, _02],
		mode: <a href="https://www.discord.com/app">Discord Server</a>,
		schedule: "25 Dec - 26 Dec",
		rules: [
			"Use of the internet is allowed",
			"Hints to crack each level will be given at the interval of 1 hour to teams and the next PDF will be provided in an interval of 1.5 hour.",
			"Disclosing or discussing clues between teams is not allowed.",
			"Clues are divided into 16 levels.",
			"Each team has to clear the previous level to reach the next level within the given timeline.",
			"Teams will consist of not more than 3 members.",
		],
		prizes: [
			{
				title: "Winner",
				about: "INR 2000/-",
			},
			{
				title: "Runners up",
				about: "INR 1500/-",
			},
			{
				title: "2nd Runners up",
				about: "INR 1000/-",
			},
		],
		others: (
			<>
				<div>Hello World</div>
			</>
		),
	},
	{
		title: "Stonks",
		content: [
			<>
				<cite>
					The most important quality for an investor is temperament,
					not intellect.
				</cite>
			</>,
			<>
				<div style={{ textAlign: "right" }}> -- Warren Buffett</div>
			</>,
			<>
				Ever thought of investing in the stock market but never tried
				because of no experience? If so, we have brought this event for
				you, where you can pick stocks and create your very own
				portfolio with the virtual money we provide you. Compete among
				other minds and create the best portfolio which provides the
				maximum return and wins the prize money
			</>,
			<>
				In our event, we will provide you a platform to invest in some
				NSE stocks and create your portfolio which will be analyzed by
				us
			</>,
			<>
				We will be searching for the best portfolio with the maximum
				return
			</>,
			<>
				<span className="event-mac-body-head" style={{ padding: '1.25rem 0', color: "var(--bgcolor)" }}>Pre requisites</span>
				<ul style={{ listStyle: 'none' }}>
					<li style={{ padding: '0.25rem 0' }}>Basic knowledge of Investment and Stock Market.</li>
					<li style={{ padding: '0.25rem 0' }}>Knowledge on how to make portfolios.</li>
				</ul>
			</>
		],
		backImg: _1back,
		aboutImgs: [_10, _11, _12],
		mode: <a href="https://techtatvastonks.herokuapp.com/">techtatvastonks.herokuapp.com</a>,
		schedule: "25 Dec - 26 Dec",
		rules: [
			"Participants can only include the companies listed in NSE.",
			"The initial price considered of the stock would be the closing price on the day before the submission day i.e., Friday the 19th November (tentatively).",
			"Shares of minimum one company must be added in the portfolio.",
			"Shares of maximum 10 different companies can be added in the portfolio.",
			"Participants can use any source to know the best required.",
			"Only the profit or loss earned from the principle of Rs. 5 Lakh will be taken into account.",
			"If the limit exceeds, the last added stock would be excluded from the portfolio, and so on until the total investment is under 5 lakh INR",
			"Minimum volume of share bought must be 50k.",
			"If a particular company (whose shares are bought) announces bonus shares or dividends in the notice period then its profit will also be considered.",
		],
		prizes: [
			{
				title: "Winner",
				about: "INR 1300/-",
			},
			{
				title: "Runners up",
				about: "INR 1000/-",
			},
			{
				title: "2nd Runners up",
				about: "INR 700/-",
			},
		],
		others: (
			<>
				<div>Hello World</div>
			</>
		),
	},
	{
		title: "What The Meme !",
		content: [
			<>
				To further expand the creative spectrum of Techtatva, we bring
				you "What the Meme!" an on-spot meme-making competition, where
				the contestant will be provided a theme/photo to make memes on.
				This will be a funny and dramatic competition where the winners
				will be decided on public vote and the best memes will be
				selected. After the last round, the contestant with the most
				votes will be declared 1st, 2nd & 3rd place respectively
			</>,
		],
		backImg: _5back,
		aboutImgs: [_50, _51, _52],
		mode: <a href="https://forms.google.com">Google Forms</a>,
		schedule: "25 Dec - 26 Dec",
		rules: [
			"Use of the internet is allowed",
			"Hints to crack each level will be given at the interval of 1 hour to teams and the next PDF will be provided in an interval of 1.5 hour.",
			"Disclosing or discussing clues between teams is not allowed.",
			"Clues are divided into 16 levels.",
			"Each team has to clear the previous level to reach the next level within the given timeline.",
			"Teams will consist of not more than 3 members.",
		],
		prizes: [
			{
				title: "Winner",
				about: "INR 700/-",
			},
			{
				title: "Runners up",
				about: "INR 500/-",
			},
			{
				title: "2nd Runners up",
				about: "INR 300/-",
			},
		],
		others: (
			<>
				<div>Hello World</div>
			</>
		),
	},
	{
		title: "Tech trivia",
		content: [
			<>
				If you have a good knowledge of Electronics and Computer Science
				fundamentals then this is the right time to test it and get some
				exciting prizes. The quiz will contain 15 Multiple choice
				questions based on the Electronics and Computer Science
				fundamentals
			</>,
			<>
				These 15 questions will be divided into three Levels. Level-I
				will contain 8- Easy questions, level II will be comprised of 7
				Medium questions &level- III will consist of 6 Hard questions.
				For questions in the level-I time allotted will be 15 mins, in
				the level-II time allotted will be 30mins, and for the level-III
				time allotted will be 40mins. Each correct answer will earn 5
				points
			</>,
		],
		backImg: _2back,
		aboutImgs: [_20, _21, _22],
		mode: <a href="https://www.circuit-diagram.org/editor/">D2C</a>,
		schedule: "25 Dec - 26 Dec",
		rules: [
			"Use of the internet is allowed",
			"Hints to crack each level will be given at the interval of 1 hour to teams and the next PDF will be provided in an interval of 1.5 hour.",
			"Disclosing or discussing clues between teams is not allowed.",
			"Clues are divided into 16 levels.",
			"Each team has to clear the previous level to reach the next level within the given timeline.",
			"Teams will consist of not more than 3 members.",
		],
		prizes: [
			{
				title: "Winner",
				about: "INR 700/-",
			},
			{
				title: "Runners up",
				about: "INR 500/-",
			},
			{
				title: "2nd Runners up",
				about: "INR 300/-",
			},
		],
		others: (
			<>
				<div>Hello World</div>
			</>
		),
	},
];
export default events;
