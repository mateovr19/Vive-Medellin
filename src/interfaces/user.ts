export interface UserLogin {
    email: string;
    password: string;
}

export interface ResponseLogin {
    status: number;
    rol: 'admin' | 'user';
    name: string;
    access_token: string;
}
