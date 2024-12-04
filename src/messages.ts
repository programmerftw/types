export const CREATE_ORDER = "CREATE_ORDER";
export const CANCEL_ORDER = "CANCEL_ORDER";

export type MessageFromApi =
  | {
      type: typeof CREATE_ORDER;
      data: {
        market: string;
        price: number;
        quantity: number;
        side: "yes" | "no";
        userId: string;
      };
    }
  | {
      type: typeof CANCEL_ORDER;
      data: {
        orderId: string;
        market: string;
      };
    };
