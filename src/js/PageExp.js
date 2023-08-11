import LanguageContext from "./LanguageContext";
import { useState, useEffect, useContext } from "react";
import * as Trans from "./data/Translation";

export default function PageExp() {
	const { language, setLanguage } = useContext(LanguageContext);

	return (
		<>
			<div className="exp">
				<div className="section-title">{Trans.t[language].exp.title}</div>
				<div className="section-title-line"></div>
				<div className="exp-work">
					<div className="section-2-col">
						<div className="section-2-col-logo">
							<img
								src={`${process.env.PUBLIC_URL}/img/1dea.jpg`}
								width="69px"
								height="69px"
							/>
						</div>
						<div className="section-2-col-desc">
							<div className="section-2-col-desc-title">
								{Trans.t[language].exp.companyTitle4}
							</div>
							<div className="section-2-col-desc-desc">
								<div className="section-desc">
									{Trans.t[language].exp.year4}
								</div>
								<div className="section-desc" style={{ marginTop: "10px" }}>
									{Trans.t[language].exp.desc4}
									{Trans.t[language].exp.desc44}
								</div>
								<div
									className="section-desc"
									style={{
										marginTop: "10px",
										fontSize: "12px",
										marginBottom: "20px",
									}}
								>
									(JavaScript, TypeScript, Web Components, React.js, Next.js,
									Redux.js, CSS3, CSS Modules, HTML, Node.js, REST APIs, JSON,
									GraphQL, Search Engine Optimization (SEO), Scrum, JIRA, Core
									Web Vitals, Figma, Astro)
								</div>
							</div>
						</div>
					</div>

					<div className="section-2-col">
						<div className="section-2-col-logo">
							<img
								src={`${process.env.PUBLIC_URL}/img/flhf.png`}
								width="69px"
								height="69px"
							/>
						</div>
						<div className="section-2-col-desc">
							<div className="section-2-col-desc-title">
								{Trans.t[language].exp.companyTitle2}
							</div>
							<div className="section-2-col-desc-desc">
								<div className="section-desc">
									{Trans.t[language].exp.year2}
								</div>
								<div className="section-desc" style={{ marginTop: "10px" }}>
									{Trans.t[language].exp.desc3}
								</div>
								<div
									className="section-desc"
									style={{
										marginTop: "10px",
										fontSize: "12px",
										marginBottom: "20px",
									}}
								>
									(JavaScript, jQuery, React.js, TypeScript, HTML5, CSS3, JSON,
									GraphQL, Magento2, Scrum, Jira)
								</div>
							</div>
						</div>
					</div>

					<div className="section-2-col">
						<div className="section-2-col-logo">
							<img
								src={`${process.env.PUBLIC_URL}/img/e.jpg`}
								width="69px"
								height="69px"
							/>
						</div>
						<div className="section-2-col-desc">
							<div className="section-2-col-desc-title">
								{Trans.t[language].exp.companyTitle}
							</div>
							<div className="section-2-col-desc-desc">
								<div className="section-desc">
									{Trans.t[language].exp.year1}
								</div>
								<div className="section-desc" style={{ marginTop: "10px" }}>
									{Trans.t[language].exp.desc1}
								</div>
								<div
									className="section-desc"
									style={{
										marginTop: "10px",
										fontSize: "12px",
										marginBottom: "20px",
									}}
								>
									(Angular, Angular.js, JavaScript, jQuery, HTML5, CSS3, Groovy, PHP, XML, JSON,
									Scrum, Jira)
								</div>
							</div>
						</div>
					</div>

					<div className="section-2-col">
						<div className="section-2-col-logo">
							<img
								src={`${process.env.PUBLIC_URL}/img/o.png`}
								width="69px"
								height="69px"
							/>
						</div>
						<div className="section-2-col-desc">
							<div className="section-2-col-desc-title">Orange - INTERN</div>
							<div className="section-2-col-desc-desc">
								<div className="section-desc">
									{Trans.t[language].exp.year3}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
