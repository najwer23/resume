import LanguageContext from "./LanguageContext";
import { useState, useEffect, useContext } from "react";
import * as Trans from "./data/Translation";

export default function PageProjects() {
	const { language, setLanguage } = useContext(LanguageContext);

	return (
		<>
			<div className="projects">
				<div className="section-title">{Trans.t[language].projects.title}</div>
				<div className="section-title-line"></div>

				<div className="project">{Trans.t[language].projects.project14}</div>
				<hr />
				<div className="project">{Trans.t[language].projects.project13}</div>
				<hr />
				<div className="project">{Trans.t[language].projects.project12}</div>
				<hr />
				<div className="project">{Trans.t[language].projects.project1}</div>
			</div>
		</>
	);
}
