export interface ICount {
  count: number;
}

export interface ICountState {
  type: string;
  payload?: ICount | any;
}

export interface Props {
  message?: string;
}
