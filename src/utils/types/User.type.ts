export type User = {
    id: number;
    username: string;
    email: string;
    password: string;
    accessToken: string;
    image:string;
}

export type UserLogin = Pick<User, 'username' | 'password'>;