export interface RegisterResponseInterface {
    status: string;
    message: string;
    user: string;
    authorization: RegisterAuthorizationInterface
}

export interface RegisterAuthorizationInterface {
    access_token: string; 
    token_type: string;
}