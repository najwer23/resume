import { T } from "../translation/T";
import { Section, Section2Col, Section2ColDesc, Section2ColDescDesc, Section2ColDescDescInner, Section2ColDescDescInnerStory, Section2ColDescDescInnerTech, Section2ColDescTitle, Section2ColLogo, SectionInner, SectionTitle, SectionTitleLine } from "./resumeSection.styled";


const ExpTitle = () => {
	return (
		<>
			<SectionTitle>{T("EXPERIENCE")}</SectionTitle>
			<SectionTitleLine />
		</>
	);
}

const Exp4 = () => {
	return (
		<SectionInner>
			<Section2Col>
				<Section2ColLogo>
					<img src={`${process.env.PUBLIC_URL}/img/1dea.jpg`} alt="1dea logo" />
				</Section2ColLogo>
				<Section2ColDesc>
					<Section2ColDescTitle>
						{T("1dea - FRONTEND SOFTWARE ENGINEER")}
					</Section2ColDescTitle>
					<Section2ColDescDesc>
						<Section2ColDescDescInner>
							{T("2023.08.07 – current")}
						</Section2ColDescDescInner>
						<Section2ColDescDescInnerStory>
							<ul>
								<li>{T("Client from the entertainment industry (~100 000 000 users)")} </li>
							</ul>
						</Section2ColDescDescInnerStory>
						<Section2ColDescDescInnerTech>
							(JavaScript, TypeScript, Web Components, React.js, Next.js, Redux.js, CSS3, CSS Modules, HTML, Node.js, REST APIs, JSON, GraphQL, Search Engine Optimization (SEO), Scrum, JIRA, Core Web Vitals, Figma, Astro)
						</Section2ColDescDescInnerTech>
					</Section2ColDescDesc>
				</Section2ColDesc>
			</Section2Col>
		</SectionInner>
	)
}

const Exp3 = () => {
	return (
		<SectionInner>
			<Section2Col>
				<Section2ColLogo>
					<img src={`${process.env.PUBLIC_URL}/img/flhf.png`} alt="flhf logo" />
				</Section2ColLogo>
				<Section2ColDesc>
					<Section2ColDescTitle>
						{T("FLHF S.A - FRONTEND WEB DEVELOPER")}
					</Section2ColDescTitle>
					<Section2ColDescDesc>
						<Section2ColDescDescInner>
							{T("2021.11.01 – 2023.04.30; 1 year, 6 months")}
						</Section2ColDescDescInner>
						<Section2ColDescDescInnerStory>
							<ul>
								<li>{T("Client from the ecommerce industry (Income: ~4 000 000 PLN)")} </li>
								<li>{T("Store search engine, Blog website, Shopping cart, Checkout etc.")}</li>
							</ul>
						</Section2ColDescDescInnerStory>
						<Section2ColDescDescInnerTech>
							(JavaScript, jQuery, React.js, TypeScript, HTML5, CSS3, JSON, GraphQL, Search Engine Optimization (SEO), Core Web Vitals, Magento2, Scrum, Jira)
						</Section2ColDescDescInnerTech>
					</Section2ColDescDesc>
				</Section2ColDesc>
			</Section2Col>
		</SectionInner>
	)
}

const Exp2 = () => {
	return (
		<SectionInner>
			<Section2Col>
				<Section2ColLogo>
					<img src={`${process.env.PUBLIC_URL}/img/e.jpg`} alt="europa logo" />
				</Section2ColLogo>
				<Section2ColDesc>
					<Section2ColDescTitle>
						{T("EUROPA UBEZPIECZENIA - FULL STACK DEVELOPER")}
					</Section2ColDescTitle>
					<Section2ColDescDesc>
						<Section2ColDescDescInner>
							{T("2019.09.01 – 2021.10.31; 2 years, 2 months")}
						</Section2ColDescDescInner>
						<Section2ColDescDescInnerStory>
							<ul>
								<li>{T("Client from the insurance industry (Income: ~5 000 000 PLN)")}</li>
								<li>{T("Expert systems. Working with databases")}</li>
							</ul>
						</Section2ColDescDescInnerStory>
						<Section2ColDescDescInnerTech>
							(Angular, Angular.js, JavaScript, jQuery, HTML5, CSS3, Groovy, PHP, XML, JSON, Scrum, Jira)
						</Section2ColDescDescInnerTech>
					</Section2ColDescDesc>
				</Section2ColDesc>
			</Section2Col>
		</SectionInner>
	)
}

const Exp1 = () => {
	return (
		<SectionInner>
			<Section2Col>
				<Section2ColLogo>
					<img src={`${process.env.PUBLIC_URL}/img/o.png`} alt="orange logo" />
				</Section2ColLogo>
				<Section2ColDesc>
					<Section2ColDescTitle>
						{T("Orange - INTERN")}
					</Section2ColDescTitle>
					<Section2ColDescDesc>
						<Section2ColDescDescInner>
							{T("2017.07; 1 month")}
						</Section2ColDescDescInner>
					</Section2ColDescDesc>
				</Section2ColDesc>
			</Section2Col>
		</SectionInner>
	)
}

interface ExpProps {
	title?: boolean;
	number?: number;
}


export const Exp = ({title, number}: ExpProps) => {
	let obj: {
		[key: string|number]: string | React.ReactNode
	} = {
		1: <Exp1 />,
		2: <Exp2 />,
		3: <Exp3 />,
		4: <Exp4 />
	}

	return (
		<Section>
			{title && <ExpTitle/>}
			{obj[number ?? 1]}
		</Section>
	);
}
