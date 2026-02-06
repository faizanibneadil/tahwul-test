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