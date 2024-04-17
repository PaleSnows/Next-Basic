import Link from "next/link";

export default function Notifications() {
  return (
    <div className="border p-5 flex w-[330px] gap-2 flex-roworder ">
      <h1>Notifications page</h1>
      <Link className="text-blue-500" href={'/complex-dashboard/archivedd'}>Archived</Link>
    </div>
  );
}
