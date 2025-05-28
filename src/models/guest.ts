import { Person } from "./person";

export default interface Guest extends Person {
    specialRequest: {
        text: string;
        status: boolean;
    }
}