import { Person } from "./person";

export interface Employee extends Person {
    id: string;
    joined: string;
    jobDesk: string[];
    schedule: string[];
    contact: string;
    status: "Active" | "Inactive";
}