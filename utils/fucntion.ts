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

  