import { useUsersQuery } from "@zorg-match/graphql-codegen-react";

export function Root({ title }: { title: string }) {
  const { data } = useUsersQuery();
  return (
    <div></div>
  );
}

export default Root;
