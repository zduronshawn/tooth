import { useEffect, useState } from "react";

interface UseIndicatorInterface {
  defaultOrders: { label: string; complete: boolean }[];
}
const isComplete = (orders: UseIndicatorInterface["defaultOrders"]) => {
  return orders.findIndex((order) => order.complete === false) === -1;
};
const useIndicator: (
  props: UseIndicatorInterface
) => [number, (label: string) => void, boolean] = ({ defaultOrders }) => {
  const [orders, setOrders] = useState(defaultOrders);
  const [index, setIndex] = useState(
    defaultOrders.findIndex((item) => item.complete === true)
  );
  const [complete, setComplete] = useState<boolean>(isComplete(defaultOrders));
  useEffect(() => {
    const result = isComplete(orders);
    setComplete(result);
  }, [orders]);
  const getNext = (
    orders: { label: string; complete: boolean }[],
    index: number
  ) => {
    for (let i = index; i < index + orders.length - 1; i++) {
      const realIndex = i % orders.length;
      if (orders[realIndex] && orders[realIndex].complete === false) {
        setIndex(realIndex);
        return;
      }
    }
  };
  const mark = (label: string) => {
    const newOrders = [...orders];
    const index = newOrders.findIndex((item) => item.label === label);
    newOrders.splice(index, 1, { label: label, complete: true });
    setOrders(newOrders);
    getNext(newOrders, index);
  };

  return [index, mark, complete];
};

export default useIndicator;
