import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <div className="border p-5 flex w-[330px] gap-2 flex-row">
      <h1>Archived Notifications page</h1>
      <Link className="text-blue-500" href={'/complex-dashboard'}>Default</Link>
    </div>
  );
}
