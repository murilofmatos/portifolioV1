function WarningTape() {
  return (
    <div className="w-full h-14 border-2 grid grid-cols-12 bg-yellow-300">
      {Array.from({ length: 12 }, (_, i) => {
        const color = i % 2 == 0 ? "bg-black" : "";
        return <div key={i} className={`w-full h-full ${color}`}></div>;
      })}
    </div>
  );
}

export default WarningTape;
