import { ProjectView } from "@/components/project-view";
import { getApiClient } from "@/lib/api-client";
import { auth } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const { id } = await params;

  const requestHeaders = await headers();

  const apiClient = getApiClient(requestHeaders);

  const { data } = await apiClient.messages.get({ query: { projectId: id } });

  return <ProjectView projectId={id} initialMessages={data} />;
}
