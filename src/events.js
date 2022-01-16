import Button from "./components/Button";
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
			<div style={{ display: "flex" }}>
				<Button
					size="small"
					text="Register Now"
					containsHref
					href="https://docs.google.com/forms/d/e/1FAIpQLSfKOo_Isym7ezI6HpGSy6SPoEFeobXVsbEYiqWs5z42WxvrYg/viewform?usp=sf_link"
				/>
				<Button
					size="small"
					text="Rule Book"
					containsHref
					href="https://docs.google.com/document/d/1xNCdRUtV97YOUhJHcXAthejaI5l84f06s_1O6vFPhDg/edit?usp=sharing"
				/>
			</div>,
			<>
				<span
					className="event-mac-body-head"
					style={{ padding: "1.25rem 0", color: "var(--bgcolor)" }}
				>
					Problem statements
				</span>
				<dl style={{ listStyle: "none" }} className="ideathon-dl">
					<dt style={{ padding: "0.25rem 0" }}>
						Power Supply / Shortage
					</dt>
					<dd>
						Growing shortages of power and energy can be anticipated
						because of population increase and economic growth in
						developing countries. Future forecasting indicates that
						the shortages will cause our society to be unsustainable
						if this situation persists. It is necessary to develop
						new technologies but it is equally important to save
						power and energy. Suggest a solution to optimise power
						supply and overcome power shortage with the use of the
						latest technologies.
					</dd>
					<dt style={{ padding: "0.25rem 0" }}>E-waste disposal</dt>
					<dd>
						E-waste or electronic waste refers to old electrical and
						electronic equipment that have reached the end of their
						life. E-waste contains numerous toxins. If not disposed
						of in an appropriate manner these toxins can cause
						environmental pollution and health hazards. Suggest an
						effective solution to overcome this problem.
					</dd>
					<dt style={{ padding: "0.25rem 0" }}>Smog</dt>
					<dd>
						Not only the capital but many Indian cities are facing
						the issue of smog. Smog is caused by the collection of
						Particulate Matter (a very fine type of dust and toxic
						gases) in the air due to stagnant movement of air during
						winters. Rising air pollution level has significantly
						increased lung-related ailments (especially asthma and
						lung cancer) among children and women. The dense smog
						also results in major air and rail traffic disruptions
						every year. Suggest an effective solution to overcome
						this problem.
					</dd>
					<dt style={{ padding: "0.25rem 0" }}>Fitness</dt>
					<dd>
						The COVID-19 pandemic has brought this fast-moving world
						to a standstill. The imposed lockdown, resulting in the
						closure of business activities, public places, fitness
						and activity centres, and overall social life, has
						hampered many aspects of the lives of people including
						routine fitness activities. This has resulted in various
						psychological issues and serious health concerns.
						Keeping all these problems in mind, suggest a solution
						that will ensure that people stay fit.
					</dd>
					<dt style={{ padding: "0.25rem 0" }}>
						Security and Surveillance
					</dt>
					<dd>
						Surveillance cameras, or security cameras, are video
						cameras used to observe an area. They are often
						connected to a recording device or IP network and may be
						watched by a security guard or law enforcement officer.
						But then also they lack at some point. Justify the above
						statement with an example.
					</dd>
					<dt style={{ padding: "0.25rem 0" }}>
						Innovation of Farming techniques
					</dt>
					<dd>
						The agricultural sector is one of the largest
						contributors to the Indian economy. Approximately 60
						percent of the Indian population works in the farming
						industry. Suggest solutions that can change the present
						concepts of farming in India and make it more
						profitable, efficient, safer, and simple.
					</dd>
					<dt style={{ padding: "0.25rem 0" }}>
						Modernising Traffic Control
					</dt>
					<dd>
						In many countries, with the development of the social
						economy, the number of automobiles has increased yearly.
						This has resulted in a series of problems such as road
						congestion and traffic accidents. Suggest a solution
						that can help in managing traffic, and prevent road
						accidents.
					</dd>
				</dl>
			</>,
		],
		backImg: _3back,
		aboutImgs: [_30, _31, _32],
		schedule: "25 Dec - 26 Dec",
		rules: [
			"The participants will have to submit their abstracts by 21st Jan 2022 (12:00 PM). The ideas should be original, plagiarism will not be tolerated. ",
			"After abstract submission, the panel will shortlist five teams for the next round on the basis of several parameters which have been clearly stated later in this document. Results of the same will be announced by 22nd Jan 2022 (12:00 PM). The selected teams will be contacted via email. ",
			"Team (1-3) is allowed to participate",
			"Plagiarism of any sort will not be entertained. However, participants can take inspiration from already existing technologies.",
			"The last date to submit the abstract is 22nd Jan 2022 (12:00 PM).",
			"Purely software solutions will not be accepted. Hence, hardware integration of the project is compulsory.",
			"Participants must follow the format provided by the organizing commitee for the proposal.",
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
		title: "Tricky Circuits",
		content: [
			<>
				If circuits intrigue you, if electronics engineering is your
				passion, then you’ve come to the right place! Test your design,
				simulation, and hardware implementation skills with the
				real-life problems that we’ll give you. The event will be
				performed in two rounds. Teams will be asked to give their
				submissions within the timeline. Teams will be judged on their
				skills.
			</>,
			<>
				<span
					className="event-mac-body-head"
					style={{ padding: "1.25rem 0", color: "var(--bgcolor)" }}
				>
					Pre requisites
				</span>
				<ul style={{ listStyle: "none" }}>
					<li style={{ padding: "0.25rem 0" }}>
						Basic to intermediate level knowledge of Arduino Uno,
						Tinkercad & basic electrical and electronics.
					</li>
				</ul>
			</>,
			<div style={{ display: "flex" }}>
				<Button
					text="Register Now"
					containsHref
					href="https://forms.gle/b2kWHCiKGmmDTCbw5"
				/>
			</div>,
		],
		backImg: _6back,
		aboutImgs: [_60, _61, _62],
		mode: (
			<a href="https://www.tinkercad.com/dashboard">
				tinkercad.com/dashboard
			</a>
		),
		schedule: "25 Dec - 26 Dec",
		rules: [
			"Use of the Internet or any kind of reference material is strictly prohibited and plagiarised documents or circuits will not be considered for evaluation.",
			"You can enter in the event as a team (of max 3) or as an individual as per your preference.",
			"This event is open to all.",
			"Multiple teams can enter from the same institution.",
			"The submitted circuits must be Arduino Uno based only.",
			"The participant must know the basics of Tinkercad and have a Tinkercad account.",
			"Only the circuits having proper documentation with them will be considered for evaluation.",
			<>
				<div className="tricky-circuits-title">
					The event will be held in 2 rounds
				</div>
				<ol className="tricky-circuits-ol" type="a">
					<li>
						The permitted time for the first half will be of 1 hour
						30 min in which each team has to submit the Tinkercad
						link and Snapshot of the circuits.
					</li>
					<li>
						The permitted time for the second half will be of 2 hour
						30 min in which each team has to submit a documentation
						of the steps/working of the circuits for each problem
						statement.
					</li>
				</ol>
			</>,
			<>
				<div className="tricky-circuits-title">Evaluation Criteria</div>
				<ol className="tricky-circuits-ol" type="a">
					<li>
						Fulfillment of objective in the given problem statement.
					</li>
					<li>Number of questions solved.</li>
					<li>Complexity of the circuits.</li>
					<li>Number of components used in the circuits.</li>
					<li>
						Time taken for submission in case the participants solve
						all the problems before the deadline.
					</li>
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
				Code Chronicles is a 2-hour long unrated coding event for
				students to evaluate their coding skills. This event is aimed to
				test problem-solving skills, knowledge of data structure and
				algorithms. This event lets you run through the waves of code
				smoothly and showcase your coding skills to stay ahead amongst
				your peers.
			</>,
			<>
				Code Chronicles is a coding event for students to check their
				coding skills. This event is aimed to test problem solving
				skills, knowledge of data structure and algorithms. 5 questions
				will be listed in the contest. Multiple submissions are allowed
				and time penalty for every incorrect submission. Participants
				will be ranked according to the points gained along with better
				submission accuracy.
			</>,
			<div style={{ display: "flex" }}>
				<Button
					text="Register Now"
					containsHref
					href="https://forms.gle/ao92UCBybQ8xdxcz6"
				/>
			</div>,
		],
		backImg: _4back,
		aboutImgs: [_40, _41, _42],
		mode: <a href="https://codechef.com">Codechef</a>,
		schedule: "25 Dec - 26 Dec",
		rules: [
			"This event is aimed to test problem solving skills, knowledge of data structure and algorithms.",
			"Each question will carry 100 points.",
			"Multiple submissions are allowed.",
			"Participants will be ranked according to the points gained",
			"In case of same points/score time taken to solve will be considered.",
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
			<>
				<Button
					text="Register Now"
					containsHref
					href="https://docs.google.com/forms/d/e/1FAIpQLScceLXN9d9X_2PZAfrb67cqPzOSxMS9nkWm-E6-QMixw-iweg/viewform"
				/>
			</>,
		],
		backImg: _0back,
		aboutImgs: [_00, _01, _02],
		mode: "Discord",
		schedule: "25 Dec - 26 Dec",
		rules: [
			"Use of the internet is allowed",
			"Disclosing or discussing clues between teams is not allowed.",
			"Clues are divided into 17 levels.",
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
				<span
					className="event-mac-body-head"
					style={{ padding: "1.25rem 0", color: "var(--bgcolor)" }}
				>
					Pre requisites
				</span>
				<ul style={{ listStyle: "none" }}>
					<li style={{ padding: "0.25rem 0" }}>
						Basic knowledge of Investment and Stock Market.
					</li>
					<li style={{ padding: "0.25rem 0" }}>
						Knowledge on how to make portfolios.
					</li>
				</ul>
			</>,
			<div style={{ display: "flex" }}>
				<Button
					text="Register Now"
					containsHref
					href="https://techtatvastonks.herokuapp.com/signup"
				/>
			</div>,
		],
		backImg: _1back,
		aboutImgs: [_10, _11, _12],
		mode: (
			<a href="https://techtatvastonks.herokuapp.com/">
				techtatvastonks.herokuapp.com
			</a>
		),
		schedule: "25 Dec - 26 Dec",
		rules: [
			"Participants can only include the companies listed in NSE.",
			"The initial price considered of the stock would be the closing price on the day before the submission day i.e., Friday, 21st Janunary.",
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
				you "What the Meme!", an on-spot meme-making competition, where
				the contestant will be provided a theme/photo to make memes on.
				This will be a funny and dramatic competition where the winners
				will be decided on public vote and the best memes will be
				selected. After the last round, the contestant with the most
				votes will be declared 1st, 2nd & 3rd place respectively.
			</>,
			<div style={{ display: "flex" }}>
				<Button
					text="Register Now"
					containsHref
					href="https://forms.gle/Kq6zRNqvGJS5NQNU8"
				/>
			</div>,
		],
		backImg: _5back,
		aboutImgs: [_50, _51, _52],
		mode: <div>For submission: Discord</div>,
		schedule: "25 Dec - 26 Dec",
		rules: [
			"The registrations should be done online at TechTatva website.",
			"This event is open to all and there is no entry fee.",
			"If at any point of time, the meme is found to be copied from the internet, then the participant will be disqualified from the event immediately.",
			"Any kind of sexual, racist, controversial or religious memes are not allowed. Doing so may result in disqualification.",
			"Use of offensive/vulgar language is not allowed.",
			"The total prize pool for the event is ₹1500/-",
			"Winners of the final round will be decided by voting via Google form.",
			"The voting for the final round is open to all. (even non-participants can vote for their favourite memes)",
			"Every participant must join the Discord server. Its link will be provided in the registration form and on the TechTatva website.",
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
		title: "Quizarrdry",
		content: [
			<>
				If you have a quizerable appearance then this is the right time
				to unlocking your knowledge at the speed of your thoughts.A
				flurry of questions that makes even Google scratch its head and
				even faster than the blink of your eye. This year Quizzardry is
				all set to test the nerves of steel and find the ultimate quiz
				champion!
			</>,
			<div style={{ display: "flex" }}>
				<Button
					text="Register Now"
					containsHref
					href="https://docs.google.com/forms/d/e/1FAIpQLSeTdonDCn1PcLGBBXFBmG6pHaoJMgwCTasze6I44F_NKoI7jQ/viewform?usp=sf_link"
				/>
			</div>,
		],
		backImg: _2back,
		aboutImgs: [_20, _21, _22],
		mode: <a href="https://kahoot.com/what-is-kahoot/">Kahoot</a>,
		schedule: "25 Dec - 26 Dec",
		rules: [
			"There must be not more than 1 person per team.",
			"The time limit to answer each question is 30 seconds.",
			"Use of Internet is strictly prohibited and the individual will be penalised for doing so if brought to notice.",
			"There will be no hints provided at any point after a question is asked.",
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
