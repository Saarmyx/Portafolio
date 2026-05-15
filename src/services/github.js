const GITHUB_USER = 'Saarmyx'

export async function getProjects() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`)

    const repos = await response.json()

    const filteredRepos = repos
      .filter((repo) => !repo.fork && repo.stargazers_count > 0)

      // Ordenar SOLO por último push/commit
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))

    const projects = await Promise.all(
      filteredRepos.map(async (repo) => {
        try {
          const langResponse = await fetch(repo.languages_url)

          const languages = await langResponse.json()

          return {
            id: repo.id,

            name: repo.name,

            description: repo.description || 'Sin descripción.',

            github: repo.html_url,

            demo: repo.homepage,

            stars: repo.stargazers_count,

            // Último commit/push REAL
            updated: repo.pushed_at,

            tech: [...Object.keys(languages), ...(repo.topics || [])].filter(Boolean),
          }
        } catch {
          return {
            id: repo.id,

            name: repo.name,

            description: repo.description || 'Sin descripción.',

            github: repo.html_url,

            demo: repo.homepage,

            stars: repo.stargazers_count,

            updated: repo.pushed_at,

            tech: [],
          }
        }
      }),
    )

    return projects
  } catch (error) {
    console.error('Error loading GitHub projects:', error)

    return []
  }
}
