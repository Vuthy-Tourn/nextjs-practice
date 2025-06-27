export type BlogType = {
    id:number;
    reactions:{
        likes:number;
    }
    title: string;
    body: string;
    views: number;
}