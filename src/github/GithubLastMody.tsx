import { useFetch } from "../hooks/useFetch"

export const GithubLastMody = (): JSX.Element => {
	const { data, status } = useFetch<any>("https://api.github.com/repos/najwer23/resume/branches/gh-pages")
	let lastMody: string = "";

	if (status === "done") {
		lastMody = (new Date(data!.commit.commit.committer.date)).toLocaleString("pl-PL")
	}

	return (
		<>{lastMody || "Loading.."}</>
	)
}