import { Person } from "./person";

export default interface Guest extends Person {
    guestId: string;
    specialRequest: {
        text: string;
        status: boolean;
    }
}