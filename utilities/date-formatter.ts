export function dateFormatter(date:string|Date){
    if(date instanceof Date){
        return new Date(date).toISOString()
    }
    return date
}