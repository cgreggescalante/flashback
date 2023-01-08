const BASE_URL = "https://g0cde1310ac37a5-flashback.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/_/sql"

const postStatement = async (statement: string, binds?: []): Promise<any[]> => {
  return await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/sql",
      "Authorization": "Basic QURNSU46RVFxSjdZOUNLYkNOMlVMXw=="
    },
    body: statement
  }).then(res => res.json())
    .then(body => {
      const items = body.items;
      console.log(items[0].resultSet.items)
      return body.items[0].resultSet.items;
    })
}

export const artistGetIds = async (limit: number, offset: number): Promise<string[]> => {
  return await postStatement(`SELECT ID FROM ARTIST OFFSET ${offset} ROWS FETCH NEXT ${limit} ROWS ONLY`)
    .then(items => items.map(item => item["id"]))
}

export const artistGetAllIds = async (): Promise<string[]> => {
  const limit = 1000;
  let offset = 0;
  const ids = [];

  while (true) {
    const result = await artistGetIds(limit, offset);
    if (result.length == 0) {
      break;
    }
    ids.push(...result);
  }

  return ids;
}