export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface IGeo {
    lat: string,
    lng: string
}

interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IGeo
}

interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress,
    phone: string,
    website: string,
    company: ICompany

}

export interface UserState {
    users: IUser[];
    loading: boolean;
    error: null | string;
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: IUser[];
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction =
    FetchUsersAction |
    FetchUsersSuccessAction |
    FetchUsersErrorAction;
