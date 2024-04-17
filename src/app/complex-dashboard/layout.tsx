export default function DashBoardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div className="m-2">
      {children}
      <div className="flex my-5 ">
        <div className="flex">
          <div className="">{users}</div>
          <div className="">{revenue}</div>
        </div>
        <div className="flex">{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}
