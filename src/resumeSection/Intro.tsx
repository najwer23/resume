import { IntroLink, IntroLinks, IntroTitle, IntroTitleDesc, IntroTitleName, SectionIntro } from "./resumeSection.styled";

const Links: {
	[key: string]: string | React.ReactNode
} = {
	"tel:+48519792189": (<>+48{"\u00A0"}519{"\u00A0"}792{"\u00A0"}189</>),
	"mailto:najwer23@live.com": "najwer23@live.com",
	"https://najwer23.github.io": "https://najwer23.github.io",
	"https://www.linkedin.com/in/najwer23": "https://www.linkedin.com/in/najwer23",
};

export const Intro = () => {
	return (
		<>
			<SectionIntro>
				<IntroTitle>
					<IntroTitleName>
						<b>Mariusz</b> Najwer
					</IntroTitleName>
					<IntroTitleDesc>
						<b>Frontend Software Engineer</b>
					</IntroTitleDesc>
				</IntroTitle>
				<IntroLinks>
					{Object.keys(Links).map((v, i) => (
						<IntroLink key={i}>
							<a key={i} href={v} rel="noreferrer" target="_blank">
								{Links[v]}
							</a>
						</IntroLink>
					))}
				</IntroLinks>
			</SectionIntro>
		</>
	);
}

