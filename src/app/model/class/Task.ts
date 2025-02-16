export class Task {
    _id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    updatedAt?: Date;
    assignee: string; // Added assignee to the class

    constructor() {
        this._id = '',
        this.title = '';
        this.description = '';
        this.completed = false;  // Corrected boolean assignment
        this.createdAt = new Date();
        this.assignee = '';  // Initialize assignee
    }
}
