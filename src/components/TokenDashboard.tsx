interface TokenProps {
  balance: number;
}

export function TokenDashboard({ balance }: TokenProps) {
  return (
    <div className="p-4 bg-secondary/70 rounded-xl text-white w-48 text-center shadow-md">
      <h4 className="font-bold">Tokens</h4>
      <p className="text-2xl mt-2">{balance}</p>
    </div>
  );
}
