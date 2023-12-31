import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { options } from "@/next-auth/options";

const AccountPage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1>AccountPage</h1>

      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};

export default AccountPage;
