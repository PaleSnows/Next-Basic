export default function DashBoardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div className="">{children}</div>
      <div className="flex">
        <div className="flex">
            <div className="">{users}</div>
            <div className="">{revenue}</div>
        </div>
        <div className="flex">{notifications}</div>
      </div>
    </>
  );
}
