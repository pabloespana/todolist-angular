import { UserInterface } from "./user.interface";

export interface TaskInterface{
    id: string | number,
    title: string,
    tags: Array<string>, // or string[]
    user: UserInterface,
    status: 'in progress' | 'completed' | 'wait'
}