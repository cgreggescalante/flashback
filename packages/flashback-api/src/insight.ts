import { postStatementJSON } from "./utils";

export class InsightAPI {
  static getDaily = async (): Promise<any[]> =>
    await postStatementJSON({
      statementText:
        "SELECT MIN(TOTAL) AS minimum, AVG(TOTAL) AS average, MAX(TOTAL) AS maximum " +
        "FROM (" +
        "SELECT SUM(MS_PLAYED) AS TOTAL " +
        "FROM PLAY " +
        "GROUP BY TO_CHAR(TS, 'IYYY-MM-DD')" +
        ")"
    });

  static getWeekly = async (): Promise<any[]> =>
    await postStatementJSON({
      statementText:
        "SELECT MIN(TOTAL) AS minimum, AVG(TOTAL) AS average, MAX(TOTAL) AS maximum " +
        "FROM (" +
        "SELECT SUM(MS_PLAYED) AS TOTAL " +
        "FROM PLAY " +
        "GROUP BY TO_CHAR(TS, 'IYYY-IW')" +
        ")"
    });

  static getMonthly = async (): Promise<any[]> =>
    await postStatementJSON({
      statementText:
        "SELECT MIN(TOTAL) AS minimum, AVG(TOTAL) AS average, MAX(TOTAL) AS maximum " +
        "FROM (" +
        "SELECT SUM(MS_PLAYED) AS TOTAL " +
        "FROM PLAY " +
        "GROUP BY TO_CHAR(TS, 'IYYY-MM')" +
        ")"
    });

  static getYearly = async (): Promise<any[]> =>
    await postStatementJSON({
      statementText:
        "SELECT MIN(TOTAL) AS minimum, AVG(TOTAL) AS average, MAX(TOTAL) AS maximum " +
        "FROM (" +
        "SELECT SUM(MS_PLAYED) AS TOTAL " +
        "FROM PLAY " +
        "GROUP BY TO_CHAR(TS, 'IYYY')" +
        ")"
    });
}