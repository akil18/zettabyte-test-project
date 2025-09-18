import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { CircleUser } from "lucide-react";
import { authOptions } from "@/lib/authOptions";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <main className="p-8 mt-16">
      <h1 className="text-2xl mb-4">Profile</h1>
      <p>
        <strong>Name:</strong> {session.user?.name}
      </p>
      <p>
        <strong>Email:</strong> {session.user?.email}
      </p>
      {session.user?.image ? (
        <img
          src={session.user.image}
          alt="Profile picture"
          className="mt-4 w-24 h-24 rounded-full"
        />
      ) : (
        <CircleUser className="mt-4 w-24 h-24 text-gray-400" />
      )}
    </main>
  );
}
