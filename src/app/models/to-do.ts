export class ToDo {
    completedDate: Date;
    createdDate: Date;

    constructor(
        public title: string,
        public completed: boolean,
        public description: string
      ) {  }
}
