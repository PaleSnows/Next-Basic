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
      <div className="m-2">{children}</div>
      <div className="flex my-5 mx-2">
        <div className="flex">
            <div className="">{users}</div>
            <div className="">{revenue}</div>
        </div>
        <div className="flex">{notifications}</div>
      </div>
    </>
  );
}
