import { Nav } from "../nav/Nav"
import { PageA4 } from "../pageA4/PageA4"
import { Education } from "../resumeSection/Education"
import { Exp } from "../resumeSection/Exp"
import { Intro } from "../resumeSection/Intro"
import { Project } from "../resumeSection/Project"
import { Skills } from "../resumeSection/Skills"

export const RoutHomepage = (): JSX.Element => {
	return (
		<>
			<Nav />
			<PageA4>
				<Intro />
				<Education />
				<Exp title number={4}/>
				<Exp number={3}/>
				<Exp number={2}/>
				<Exp number={1}/>
			</PageA4>
			<PageA4>
				<Skills />
				<Project title number={1}/>
				<Project number={2}/>
				<Project number={4}/>
				<Project number={5}/>
			</PageA4>
			<PageA4>
				<Project number={3} />
				<Project number={6} />
				<Project number={7} />
				<Project number={8} />
				<Project number={9} />
			</PageA4>
		</>
	)
}