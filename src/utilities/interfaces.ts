export interface Project {
    id: number
    title: string
    short_description: string
    long_description: string
    completion_date: Date
    repositories: Repository[]
    requirements?: Requirement[]
    technologies?: Technology[]
    video_url: string,
    live_url: string,
    complexity: number,
    image: string
}

interface Repository {
    id: number
    host: string
    type: string
    link: string
}

interface Requirement {
    id: number
    requirement: string
}

export interface Technology {
    id: number
    name: string
}