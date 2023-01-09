const BASE_URL =
  "https://g0cde1310ac37a5-flashback.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/_/sql";

interface StatementBody {
  statementText: string | string[],
  offset?: number,
  limit?: number,
  binds?: {
    name: string,
    data_type: string,
    value: any,
    index?: number,
    mode?: string,
    batch?: boolean,
  }[]
}

export const postStatement = async (body: StatementBody): Promise<any[]> => {
  return await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic QURNSU46RVFxSjdZOUNLYkNOMlVMXw=="
    },
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
    .then((body) => body.items[0].resultSet.items);
};

export const dateToTimestamp = (date: Date): string => {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString();

  const hour = date.getHours().toString();
  const minute = date.getMinutes().toString();
  const second = date.getSeconds().toString();

  return `${year.padStart(4, "0")}-${month.padStart(2, "0")}-${day.padStart(2, "0")} ${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:${second.padStart(2, "0")}`;
};