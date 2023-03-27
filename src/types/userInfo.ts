export interface IUserInfo {
  rate: {
    name: string;
    date: string;
    isActive: boolean;
  };
  myOrders: { id: number; name: string }[];
  incomingOrders: { id: number; name: string; isNew: boolean }[];
  outgoinResponses: { id: number; name: string }[];
  electronicSignatures: boolean;
  users: { id: number; name: string; company: string }[];
}
