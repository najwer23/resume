import { useFetch } from "../hooks/useFetch";
import { T } from "../translation/T";
import { HRLine, Section, SectionProjectDesc, SectionProjectTech, SectionProjectTitle, SectionTitle, SectionTitleLine } from "./resumeSection.styled";


const ProejctTitle = () => {
	return (
		<Section>
			<SectionTitle>{T("MY PROJECTS")}</SectionTitle>
			<SectionTitleLine />
		</Section>
	);
}



const Project9 = () => {

	return (
		<ProjectWidget
			projectTitle={<>{T("BLACKJACK")}</>}
			projectTech={<>(HTML5, CSS3, JavaScript)</>}
			projcetDesc={
				<ul>
					<li>{T("Blackjack is a casino banking game. The game is a comparing card game where each player competes against the dealer. The objective of the game is to get a hand total of closer to 21 than the dealer without going over 21(busting)")} </li>
				</ul>
			}
			projectLink={"https://najwer23.github.io/blackjack/"}
		/>
	)
}

const Project8 = () => {

	return (
		<ProjectWidget
			projectTitle={<>{T("GUI Snippets")}</>}
			projectTech={<>(JavaScript, HTML5, CSS3)</>}
			projcetDesc={
				<ul>
					<li>{T("Calendar, Carousel, Slider, Scrollbar, Masonry Grid, Video Player, Email HTML, Slideshow")} </li>
				</ul>
			}
			projectLink={"https://najwer23.github.io/gui-challenge/"}
		/>
	)
}

const Project7 = () => {

	return (
		<ProjectWidget
			projectTitle={<>{T("REED SOLOMON ALGORITHM BCH: ENCODER, DECODER")}</>}
			projectTech={<>(JavaScript, HTML5, CSS3, Webpack, LaTeX - Mathjax)</>}
			projcetDesc={
				<ul>
					<li>{T("Reed-Solomon algorithm is an error-correcting code that is widely used in various applications, including data storage systems such as CDs, DVDs, Blu-ray discs, and RAID 6")} </li>
					<li>{T("Reed-Solomon codes are used to detect and correct burst errors associated with media defects")} </li>
					<li>{T("Algorithms used: Gauss-Jordan Elimination in Galois field, Detrminant, Transpose of Matrix n*n, Zech’s logarithm, Adding, Multiplication and Dividing polynomials, Peterson–Gorenstein–Zierler algorithm, Chien search algorithm, System of linear equations")}</li>
				</ul>
			}
			projectLink={"https://najwer23.github.io/bch-code-js/"}
		/>
	)
}

const Project6 = () => {

	return (
		<ProjectWidget
			projectTitle={<>{T("APP SUPPORTING CALISTHENICS TRAINING")}</>}
			projectTech={<>(React.js, Node.js (Express.js), DynamoDB, CSS)</>}
			projcetDesc={
				<ul>
					<li>{T("100 Push Ups, 300 Squats, 300 Sit Ups, 40 Pull Ups training plans")} </li>
					<li>{T("Authorization and communication with API in the cloud")} </li>
					<li>{T("Email templates")} </li>
				</ul>
			}
			projectLink={"https://jabber.cyclic.app"}
		/>
	)
}

const Project5 = () => {

	return (
		<ProjectWidget
			projectTitle={<>{T("TOP MUSIC HITS")}</>}
			projectTech={<>(React.js, Recoil.js, JavaScript, TypeScript, TailwindCSS)</>}
			projcetDesc={
				<ul>
					<li>{T("The application displays current music hits and allow to filters by title or author.")} </li>
				</ul>
			}
			projectLink={"https://najwer23.github.io/top-100-music/"}
		/>
	)
}

const Project4 = () => {

	return (
		<ProjectWidget
			projectTitle={<>{T("WEATHER APP")}</>}
			projectTech={<>(React.js, Redux.js, JavaScript, TypeScript, CSS, DynamoDB, Node.js)</>}
			projcetDesc={
				<ul>
					<li>{T("The project was about integrating an external API using Redux.js and AWS")} </li>
					<li>{T("Displays weather data for specific geographic coordinates")}</li>
				</ul>
			}
			projectLink={"https://najwer23.github.io/#/weather"}
		/>
	)
}

const Project3 = () => {

	return (
		<ProjectWidget
			projectTitle={<>{T("GEOMETRIC FIGURES WITH BOUNDING BOX")}</>}
			projectTech={<>(React.js, Redux.js, JavaScript, TypeScript, HTML5, CSS3)</>}
			projcetDesc={
				<ul>
					<li>{T("An application that draws rotated geometric figures (rectangles and ellipses) on a canvas based on data from the API. For each figure it was necessary to draw a 'bounding box'")} </li>
				</ul>
			}
			projectLink={"https://najwer23.github.io/react-redux-ts/"}
		/>
	)
}

const Project2 = () => {

	return (
		<ProjectWidget
			projectTitle={<>{T("RESUME BUILDER")}</>}
			projectTech={<>(JavaScript, TypeScript, React.js, CSS, Styled-components)</>}
			projcetDesc={
				<ul>
					<li>{T("A resume builder is an online tool that allows me to create a professional resume quickly and easily.")} </li>
					<li>{T("It allows me to print my CV as PDF in any language")} </li>
				</ul>
			}
			projectLink={"https://najwer23.github.io/resume/"}
		/>
	)
}

const Project1 = () => {
	const { data, status } = useFetch<any>("https://leetcode-api-faisalshohag.vercel.app/najwer23");
	let numberOfProblems: string = "";

	if (status === "done") {
		numberOfProblems = data.totalSolved
	}

	return (
		<ProjectWidget
				projectTitle={<>{T("LEETCODE")}</>}
				projectTech={<>(JavaScript, TypeScript, Node.js)</>}
				projcetDesc={
					<ul>
						<li>{T("LeetCode is an online platform that provides a collection of coding problems and challenges to help programmers enhance their coding skills.")} </li>
						<li>{T("Number of currently solved problems:")} { numberOfProblems || "500+"}</li>
					</ul>
				}
				projectLink={"https://leetcode.com/najwer23/"}
		/>
	)
}

const ProjectWidget = ({projectTitle, projectTech, projcetDesc, projectLink}: {
	projectTitle: React.ReactNode;
	projectTech: React.ReactNode;
	projcetDesc: React.ReactNode;
	projectLink: string;
}) => {
	return (
		<>
				<SectionProjectTitle>
					{projectTitle}
				</SectionProjectTitle>
				<SectionProjectTech>
					{projectTech}
				</SectionProjectTech>
				<SectionProjectDesc>
					{projcetDesc}
				</SectionProjectDesc>
				<a
					href={projectLink}
					rel="noreferrer"
					target="_blank"
					style={{ fontSize: "12px" }}
				>
					{projectLink}
				</a>
		</>
	)
}


interface ExpProps {
	title?: boolean;
	number?: number;
}

export const Project = ({ title, number }: ExpProps) => {
	let projectObj: {
		[key: string | number]: | React.ReactNode
	} = {
		1: <Project1 />,
		2: <Project2 />,
		3: <Project3 />,
		4: <Project4 />,
		5: <Project5 />,
		6: <Project6 />,
		7: <Project7 />,
		8: <Project8 />,
		9: <Project9 />,
	}

	return (
		<>
			{title && <ProejctTitle />}
			{projectObj[number ?? 1] }
			<HRLine />
		</>
	);
}
