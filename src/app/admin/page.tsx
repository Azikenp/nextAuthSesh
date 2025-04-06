import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import React from "react";

const AdminPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-8">Admin</h1>
      <Button asChild>
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
};

export default AdminPage;
