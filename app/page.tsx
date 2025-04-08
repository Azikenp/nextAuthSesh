import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import UserCard from "@/components/UserCard";

const page = async () => {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <UserCard user={session?.user} pageType={"Home"} />
      ) : (
        <h1 className="text-5xls">You shall not pass</h1>
      )}
    </>
  );
};

export default page;
