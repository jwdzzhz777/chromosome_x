export interface UserInfo {
    name: string;
    avatarUrl: string;
    a_s: string;
    a_m?: string;
    a_l?: string;
    email: string;
    bio: string;
    id: string;
    login: string;
}

export interface ArticleType {
    img: string;
    issueNumber: number;
    publishedAt: Date;
    title: string;
}
