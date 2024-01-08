import { Nav } from "../../components/nav/Nav"
import { PageA4 } from "../../components/pageA4/PageA4"
import { Education } from "../../components/resumeSection/Education"
import { Exp } from "../../components/resumeSection/Exp"
import { Intro } from "../../components/resumeSection/Intro"
import { Project } from "../../components/resumeSection/Project"
import { Skills } from "../../components/resumeSection/Skills"

export const Home = () => {
	return (
		<>
			<Nav />
			<PageA4>
				<Intro />
				<Education />
				<Exp title number={4} />
				<Exp number={3} />
			</PageA4>
			<PageA4>
				<Exp number={2} />
				<Exp number={1} />
				<br />
				<Skills />
				<Project title number={1} />
				<Project number={2} />

			</PageA4>
			<PageA4>
				<Project number={4} />
				{/* <Project number={5} /> */}
				<Project number={3} />
				<Project number={6} />
				<Project number={7} />
				{/* <Project number={8} /> */}
				<Project number={9} />
			</PageA4>
			<PageA4>
				<Project number={10} />
				<Project number={11} />
				<Project number={12} />
				<Project number={14} />
				<Project number={13} />
			</PageA4>
		</>
	)

}