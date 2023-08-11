import LanguageContext from "./LanguageContext";
import { useState, useEffect, useContext } from "react";
import * as Trans from "./data/Translation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
	"Tailwind CSS",
	"PHP",
	"AWS (DynamoDB, S3, RDS, E3)",
	"XML, JSON, GraphQL",
	"Node.js",
	"Express.js",
	"Agile, Scrum & JIRA",
];


export default function PageSkills() {
	const { language, setLanguage } = useContext(LanguageContext);

	return (
		<>
			<div className="skills">
				<div className="section-title">{Trans.t[language].skills.title}</div>
				<div className="section-title-line"></div>
				<div className="skills-container">
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
				</div>
			</div>
		</>
	);
}
