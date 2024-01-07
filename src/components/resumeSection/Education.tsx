import { T } from "../../translation/T";
import { Section, Section2Col, Section2ColDesc, Section2ColDescDesc, Section2ColDescDescInner, Section2ColDescTitle, Section2ColLogo, SectionInner, SectionTitle, SectionTitleLine } from "./resumeSection.styled";

export const Education = () => {

	return (
		<Section>
			<SectionTitle>{T("EDUCATION")}</SectionTitle>
			<SectionTitleLine />
			<SectionInner>

				<Section2Col>
					<Section2ColLogo>
						<img src='img/pwr.png' alt="pwr logo" />
					</Section2ColLogo>
					<Section2ColDesc>
						<Section2ColDescTitle>
							{T("WROCŁAW UNIVERSITY OF SCIENCE AND TECHNOLOGY")}
						</Section2ColDescTitle>
						<Section2ColDescDesc>
							<Section2ColDescDescInner>
								{T("Master Of Science, COMPUTER SCIENCE, 4.5")}
							</Section2ColDescDescInner>
							<Section2ColDescDescInner>
								{T("2018.02 ‑ 2019.06, Wrocław")}
							</Section2ColDescDescInner>
						</Section2ColDescDesc>
					</Section2ColDesc>
				</Section2Col>

				<Section2Col>
					<Section2ColLogo>
						<img src='img/pwr.png' alt="pwr logo" />
					</Section2ColLogo>
					<Section2ColDesc>
						<Section2ColDescTitle>
							{T("WROCŁAW UNIVERSITY OF SCIENCE AND TECHNOLOGY")}
						</Section2ColDescTitle>
						<Section2ColDescDesc>
							<Section2ColDescDescInner>
								{T("Bachelor of Science, CONTROL ENGINEERING AND ROBOTICS, 4.5")}
							</Section2ColDescDescInner>
							<Section2ColDescDescInner>
								{T("2014.10 ‑ 2018.01, Wrocław")}
							</Section2ColDescDescInner>
						</Section2ColDescDesc>
					</Section2ColDesc>
				</Section2Col>


			</SectionInner>
		</Section>
	);
}
