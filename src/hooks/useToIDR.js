import { useCallback } from "react";

export const useToIDR = () => {
  const formatToIDR = useCallback((value) => {
    if (isNaN(value)) return "Rp0";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  }, []);

  return formatToIDR;
};
