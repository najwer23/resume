import { BoxMody, NavContainer, NavUtils } from "./Nav.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { useTranslationContext } from "../../translation/useTranslationContext";
import { GithubLastMody } from "../github/GithubLastMody";
import { Button } from "najwer23storybook/lib/Button";

export const Nav = (): JSX.Element => {
	const { lang, setLang } = useTranslationContext();

	const printPDF = () => {
		window.print();
	}

	return (
		<NavContainer>
			<BoxMody>
				<GithubLastMody repoName="resume" />
			</BoxMody>
			<NavUtils>
				<Button text={"EN"} type={"button"} ariaLabel={"lang En"} onClick={() => setLang("en")} disabled={lang === "en"} />
				<Button text={"PL"} type={"button"} ariaLabel={"lang Pl"} onClick={() => setLang("pl")} disabled={lang === "pl"} />
				<Button text={<FontAwesomeIcon
					icon={faFilePdf}
					size="xl"
					style={{ color: "white" }}
				/>} type={"button"} ariaLabel={"lang En"} onClick={() => printPDF()} />
			</NavUtils>
		</NavContainer >
	)
}