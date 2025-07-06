export interface Lecture {
  id: string;
  name: string;
  tasks: number;
}

export interface CompilerResponse {
  error:string;
  info: string;
  language:string;
  output:string;
  status:number;
  timeStamp: number;
}