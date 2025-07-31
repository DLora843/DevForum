import { User } from "./user.models";

export interface Theme {
    id: string;
    themeName: string;
    userId: User;
    subscribers: string[];
    created_at: Date;
}