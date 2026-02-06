export type Comment = {
    user: {
        name: string,
        img:string
    },
    createdAt: string | Date,
    comment: string
}
export type Activity = {
    activity: string,
    createdAt: string | Date
}
export type LeadersBoardUsers = { 
    img: string, 
    user: { 
        name: string, 
        designation: string
    }, 
    performance: string
}
export type Status = { 
    status: string 
}
export type Categories = {
    label: string,
    statuses:Status[]
}
export type ProgressItem = {
    label: string,
    progress: string,
    categories: Categories[]
}