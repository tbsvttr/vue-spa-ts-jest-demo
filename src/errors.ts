import { AxiosError } from "axios";

export const errorHandler = (error: AxiosError) => {
  // TODO: User feedback. More universal.
  // tslint:disable-next-line:no-console
  console.error(error);
};
