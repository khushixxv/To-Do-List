import { ToDoSchema } from "../../../constants/types";

export const sampleList: ToDoSchema = {
    name: "sample list",
    schema: [
        {
            name: "take out trash",
            isCompleted: false
        },
        {
            name: "clean dishes",
            isCompleted: false
        },
        {
            name: "fold laundry",
            isCompleted: false
        },
        {
            name: "get mail",
            isCompleted: true
        },

    ]
}