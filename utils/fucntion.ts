import {v4 as uuidv4} from 'uuid';

export const generateId = () => {
    return uuidv4();
}

export function statusChip(status: string): { class: string; label: string } {
    switch (status) {
      case "baru":
        return { class: "chipNew", label: "BARU" };
      case "proses":
        return { class: "chipProses", label: "PROSES" };
      case "selesai":
        return { class: "chipDone", label: "SELESAI" };
      default:
        return { class: "chipNew", label: "BARU" };
    }
  }

export function getFirstWordFromEmail(email: string): string {
    const parts = email.split('@');
    return parts[0];
  }

 export function formatDate(inputDate: string): string {
    const date = new Date(inputDate);
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${day}/${month}/${year}:${hours}:${minutes}`;
  }