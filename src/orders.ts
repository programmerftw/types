export enum EOrderStatus {
    PENDING = "PENDING",
    PLACED = "PLACED",
  }
  
  export type TOrder = {
    id: string;
    orderBookId: string;
    price: number;
    quantity: number;
    status: "PLACED" | "PENDING";
    createdAt: Date;
  };
  
  export type TOrderbookForOrders = {
    id: string;
    eventId: string;
    topYesPrice: number;
    topNoPrice: number;
    yes: TOrder[];
    no: TOrder[];
  };
  