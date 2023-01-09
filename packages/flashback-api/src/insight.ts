import { postStatement } from "./utils";

export class InsightAPI {
  static DAILY_STATEMENT = "SELECT MIN(TOTAL) AS minimum, AVG(TOTAL) AS average, MAX(TOTAL) AS maximum FROM (SELECT SUM(MS_PLAYED) AS TOTAL FROM PLAY GROUP BY TO_CHAR(TS, 'IYYY-MM-DD'));"
  static WEEKLY_STATEMENT = "SELECT MIN(TOTAL) AS minimum, AVG(TOTAL) AS average, MAX(TOTAL) AS maximum FROM (SELECT SUM(MS_PLAYED) AS TOTAL FROM PLAY GROUP BY TO_CHAR(TS, 'IYYY-IW'));"
  static MONTHLY_STATEMENT = "SELECT MIN(TOTAL) AS minimum, AVG(TOTAL) AS average, MAX(TOTAL) AS maximum FROM (SELECT SUM(MS_PLAYED) AS TOTAL FROM PLAY GROUP BY TO_CHAR(TS, 'IYYY-MM'));"
  static YEARLY_STATEMENT = "SELECT MIN(TOTAL) AS minimum, AVG(TOTAL) AS average, MAX(TOTAL) AS maximum FROM (SELECT SUM(MS_PLAYED) AS TOTAL FROM PLAY GROUP BY TO_CHAR(TS, 'IYYY'));"

  static getDaily = async (): Promise<any[]> =>
    await postStatement({
      statementText: this.DAILY_STATEMENT
    });

  static getWeekly = async (): Promise<any[]> =>
    await postStatement({
      statementText: this.WEEKLY_STATEMENT
    });

  static getMonthly = async (): Promise<any[]> =>
    await postStatement({
      statementText: this.MONTHLY_STATEMENT
    });

  static getYearly = async (): Promise<any[]> =>
    await postStatement({
      statementText: this.YEARLY_STATEMENT
    });
}