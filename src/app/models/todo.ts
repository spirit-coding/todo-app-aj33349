export class Todo {
    completedDate: Date;
    createdDate: Date;

    constructor(
        public title: string,
        public completed: boolean,
        public description: string
      ) {  }
}
