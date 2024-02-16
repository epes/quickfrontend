import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/Button.component";
import { usePostGreet } from "@/generated/fetch-gen";

export function Greet() {
  const [visible, setVisible] = useState<boolean>(false);
  const { name } = useParams();

  const { loading, data, error } = usePostGreet({ name });

  if (error) {
    return <div>Greet Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <span>Server says: </span>
      {visible && <span>{data?.message}</span>}
      {!visible && <Button onClick={() => setVisible((v) => !v)}>show</Button>}
    </div>
  );
}
