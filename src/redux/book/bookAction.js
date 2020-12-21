import { BUY_BOOK } from "./bookType";

export const buyBook = (num = 1) => {
  return {
    type: BUY_BOOK,
    payload: num
  };
};
