const msToHoursMinutesSeconds = (ms: number) => {
    const hours = Math.floor(ms / 1000 / 60 / 60);
    ms -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(ms / 1000 / 60);
    ms -= minutes * 1000 * 60;
    const seconds = Math.floor(ms / 1000);
    return `${hours} hour${
      hours > 1 || hours == 0 ? "s" : ""
    }, ${minutes} minute${
      minutes > 1 || minutes == 0 ? "s" : ""
    }, ${seconds} second${seconds > 1 || seconds == 0 ? "s" : ""}`;
};

const InsightsComponent = ({ data }) => (
  <>
      Yearly Max: {msToHoursMinutesSeconds(data.yearly.maximum)} <br />
      Yearly Average: {msToHoursMinutesSeconds(data.yearly.average)} <br />
      <br />
      Monthly Max: {msToHoursMinutesSeconds(data.monthly.maximum)} <br />
      Monthly Average: {msToHoursMinutesSeconds(data.monthly.average)} <br />
      <br />
      Weekly Max: {msToHoursMinutesSeconds(data.weekly.maximum)} <br />
      Weekly Average: {msToHoursMinutesSeconds(data.weekly.average)} <br />
      <br />
      Daily Max: {msToHoursMinutesSeconds(data.daily.maximum)} <br />
      Daily Average: {msToHoursMinutesSeconds(data.daily.average)}
  </>
);

export default InsightsComponent;