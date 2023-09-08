import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { T } from "../translation/T";
import { SectionTitle, SectionTitleLine, SkillsWrapper } from "./resumeSection.styled";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const arrSkills = [
	"JavaScript",
	"TypeScript",
	"Angular",
	"jQuery",
	"Next.js",
	"React.js",
	"Redux.js",
	"Recoil.js",
	"MobX.js",
	"Knokout.js",
	"Cypress",
	"Jtest.js",
	"Puppeteer",
	"HTML5",
	"CSS3",
	"LESS, SASS",
	"Styled components",
	"Tailwind CSS",
	"PHP",
	"AWS (DynamoDB, S3, RDS, E3)",
	"XML, JSON, GraphQL",
	"Node.js",
	"Express.js",
	"Agile, Scrum & JIRA",
	"Web Components",
	"Leaflet",
	"Core Web Vitals",
	"Search Engine Optimization(SEO)"
];

export const Skills = () => {
	return (
		<>
			<SectionTitle>{T("SKILLS")}</SectionTitle>
			<SectionTitleLine />
			<SkillsWrapper>
				{arrSkills.map((v, i, arr) => (
					<div key={v}>
						{arr[i]}
						{i < arr.length - 1 ? (
							<FontAwesomeIcon
								icon={faCircle}
								size="2xs"
								style={{ color: "orangered", marginLeft: "10px" }}
							/>
						) : (
							""
						)}
					</div>
				))}
			</SkillsWrapper>
		</>
	);
}