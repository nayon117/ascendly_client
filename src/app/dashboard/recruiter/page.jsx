"use client";
import StatCard from "@/component/dashboard/StatCard";
import { useSession } from "@/lib/auth-client";

const RecruiterHomePage = () => {
  const { data: session, status } = useSession();
  const user = session?.user;

  const recruiterStats = [
    {
      title: "Total Job Postings",
      value: 12,
      description: "Number of active job postings",
    },
    {
      title: "Total Applicants",
      value: 45,
      description: "Number of applicants for your job postings",
    },
    {
        title: "Interviews Scheduled",
        value: 8,
        description: "Number of interviews scheduled with applicants",
    },
    {
        title: "Offers Made",
        value: 3,
        description: "Number of job offers made to applicants",
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold p-4">Welcome back, {user?.name}</h2>
      <StatCard stats={recruiterStats} />
    </div>
  );
};
export default RecruiterHomePage;
