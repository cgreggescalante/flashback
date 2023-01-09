import { postStatement } from "./utils";

export class ListeningTimeAPI {
  static DAILY_LISTENING_STATEMENT = "SELECT TO_CHAR(TS, 'IYYY-MM-DD') AS year_month_day, SUM(MS_PLAYED) AS TOTAL_MS_PLAYED FROM PLAY GROUP BY TO_CHAR(TS, 'IYYY-MM-DD') ORDER BY TO_CHAR(TS, 'IYYY-MM-DD')"
  static WEEKLY_LISTENING_STATEMENT = "SELECT TO_CHAR(TS, 'IYYY-IW') AS year_week, SUM(MS_PLAYED) AS TOTAL_MS_PLAYED FROM PLAY GROUP BY TO_CHAR(TS, 'IYYY-IW') ORDER BY TO_CHAR(TS, 'IYYY-IW')"
  static MONTHLY_LISTENING_STATEMENT = "SELECT TO_CHAR(TS, 'IYYY-MM') AS year_month, SUM(MS_PLAYED) AS TOTAL_MS_PLAYED FROM PLAY GROUP BY TO_CHAR(TS, 'IYYY-MM') ORDER BY TO_CHAR(TS, 'IYYY-MM')"
  static YEARLY_LISTENING_STATEMENT = "SELECT TO_CHAR(TS, 'IYYY') AS year, SUM(MS_PLAYED) AS TOTAL_MS_PLAYED FROM PLAY GROUP BY TO_CHAR(TS, 'IYYY') ORDER BY TO_CHAR(TS, 'IYYY')"

  static DAY_PAGE_SIZE = 60;
  static WEEK_PAGE_SIZE = 52;
  static MONTH_PAGE_SIZE = 12;
  static YEAR_PAGE_SIZE = 100;

  static daily = async (pageIndex: number) =>
    await postStatement({
      statementText: this.DAILY_LISTENING_STATEMENT,
      offset: pageIndex * this.DAY_PAGE_SIZE,
      limit: this.DAY_PAGE_SIZE
    })

  static weekly = async (pageIndex: number) =>
    await postStatement({
      statementText: this.WEEKLY_LISTENING_STATEMENT,
      offset: pageIndex * this.WEEK_PAGE_SIZE,
      limit: this.WEEK_PAGE_SIZE
    })

  static monthly = async (pageIndex: number) =>
    await postStatement({
      statementText: this.MONTHLY_LISTENING_STATEMENT,
      offset: pageIndex * this.MONTH_PAGE_SIZE,
      limit: this.MONTH_PAGE_SIZE
    })

  static yearly = async (pageIndex: number) =>
    await postStatement({
      statementText: this.YEARLY_LISTENING_STATEMENT,
      offset: pageIndex * this.YEAR_PAGE_SIZE,
      limit: this.YEAR_PAGE_SIZE
    })
}