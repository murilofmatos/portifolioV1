function WarningTape({ order }: any) {
  return (
    <div className="w-full h-14 border-2 sm:grid grid-cols-12 bg-yellow-300 hidden">
      {Array.from({ length: 12 }, (_, i) => {
        const color = i % 2 == order ? "bg-black" : "";
        return <div key={i} className={`w-full h-full ${color}`}></div>;
      })}
    </div>
  );
}

export default WarningTape;
