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
									Restilo:{" "}
									<a
										href="https://restilo.pl/"
										rel="noreferrer"
										target="_blank"
									>
										https://restilo.pl/
									</a>
								</div>
								<div
									className="section-desc"
									style={{
										marginTop: "10px",
										fontSize: "12px",
										marginBottom: "20px",
									}}
								>
									(JavaScript, jQuery, React, HTML5, CSS3, XML, JSON, GraphQL,
									Magento2, Scrum, Jira)
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
									Aktywni w Sporcie:{" "}
									<a
										href="https://portal.tueuropa.pl/frontend/products/showProduct.html?prodId=2031&su=100000&lu=1&us=biatlon_grupa_3;baseball_grupa_3&o_ochrony=90&cookies_message=1"
										rel="noreferrer"
										target="_blank"
									>
										[link]
									</a>
								</div>
								<div
									className="section-desc"
									style={{
										marginTop: "10px",
										fontSize: "12px",
										marginBottom: "20px",
									}}
								>
									(JavaScript, jQuery, HTML5, CSS3, Groovy, PHP, XML, JSON,
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
