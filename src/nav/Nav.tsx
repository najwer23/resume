import { GithubLastMody } from "../github/GithubLastMody"
import { useTranslationContext } from "../translation/useTranslationContext";
import { BoxMody, NavContainer, NavUtil, NavUtils } from "./Nav.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export const Nav = (): JSX.Element => {
	const { lang, setLang } = useTranslationContext();

	const printPDF = () => {
		window.print();
	}

	return (
		<NavContainer>
			<BoxMody>
				<GithubLastMody />
			</BoxMody>
			<NavUtils>
				<NavUtil
					$active={lang==="pl"}
					onClick={() => setLang("pl")}
				>
					PL
				</NavUtil>
				<NavUtil
					$active={lang==="en"}
					onClick={() => setLang("en")}
				>
					EN
				</NavUtil>
				<NavUtil
					$bgColor="#FA0F00"
					onClick={() => printPDF()}
				>
					<FontAwesomeIcon
						icon={faFilePdf}
						size="xl"
						style={{ color: "white" }}
					/>
				</NavUtil>
			</NavUtils>
		</NavContainer>
	)
}