export interface Token{
    refresh: string;
    access: string;
}

export interface User{
    id: number;
    username: string;
    password: string;
    fullName: string;
    phone: string;
    email: string;
    address?: string;
    avatar?: string;
    role?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}