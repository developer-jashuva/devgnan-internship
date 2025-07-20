function WatchlistItem({ name, price, change, net }) {
  const isPositive = change >= 0;
  const textColor = isPositive ? "text-green-500" : "text-red-500";

  return (
    <div className="flex justify-between py-2 border-b border-gray-800 text-sm">
      <span className={textColor}>{name}</span>
      <span>{Math.abs(price)}</span>
      <span className={`flex flex-col items-end ${textColor}`}>
        <span>{Math.abs(change).toFixed(2)}%</span>
        <span>{net.toFixed(2)}</span>
      </span>
    </div>
  );
}

export default WatchlistItem;
