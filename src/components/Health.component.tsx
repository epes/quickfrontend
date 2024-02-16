import { useEffect } from "react";
import styled from "styled-components";
import { durationMillisToHhMmSs } from "@/util/time";
import { useGetHealth } from "@/generated/fetch-gen";

const Status = styled.span<{ $status: boolean }>(({ $status }) => ({
  color: $status === true ? "green" : "red",
}));

const Header = styled.h1({
  cursor: "pointer",
});

const Container = styled.div({
  display: "flex",
  flexDirection: "row",
});

const Child = styled.div({
  display: "flex",
  alignItems: "center",
  margin: "0px 12px",
});

export function Health() {
  const { loading, data, error, refetch } = useGetHealth();

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [refetch]);

  const status = Boolean(data?.ok);

  return (
    <Container>
      <Child>
        <Header onClick={refetch}>Server Health</Header>
      </Child>
      {error && <Child>Error: {error.message}</Child>}
      {!error && (
        <Child>
          {loading ? (
            "Loading..."
          ) : (
            <table>
              <tbody>
                <tr>
                  <td>OK</td>
                  <td>
                    <Status $status={status}>{status.toString()}</Status>
                  </td>
                </tr>
                <tr>
                  <td>Uptime</td>
                  <td>{durationMillisToHhMmSs(data?.uptime)}</td>
                </tr>
              </tbody>
            </table>
          )}
        </Child>
      )}
    </Container>
  );
}
