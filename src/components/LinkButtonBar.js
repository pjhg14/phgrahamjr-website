export default function LinkButtonBar({ repos, liveURL }) {

    const repoButtons = repos.map(repo => {
        return(
            <a key={repo.id} className={`repo-button ${repo.host.toLowerCase()}`} href={repo.link} target="_blank" rel="noreferrer">
                {convertToLogo(repo.host)} {repo.type}
            </a>
        )
    })
    return(
        <div className="repo-bar">
            {repoButtons}
            {liveURL &&
                <a className="repo-button" href={liveURL} target="_blank" rel="noreferrer">
                    Website
                </a>
            }
        </div>
    )
}

function convertToLogo(host) {
    switch (host) {
        case "GitHub":
            return <i className="fab fa-github"></i>

        case "GitLab":
            return <i className="fab fa-gitlab"></i>
        default:
            break;
    }
}