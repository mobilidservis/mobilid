export interface Booking {
  id: string
  name: string;
  email: string;
  phone: string;
  address: string;
  brand: number;
  createdAt: Date;
  model: number;
  year: string[];
  problem: string;
  status: string
  paymentStatus?: string
  totalPayment?: string 
  proccessUpdateBy?: string
  proccessUpdateAt?: number
  finishUpdateBy?: string
  finishUpdateAt?: number
  paymentUpdateBy?: string
  paymentUpdateAt?: number
}