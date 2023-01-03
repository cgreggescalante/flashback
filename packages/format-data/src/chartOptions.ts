export default (chartTitle: string) => ({
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: chartTitle
    }
  }
});