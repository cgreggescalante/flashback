export interface ChartGenerator {
    (getData: Function): Promise<{ labels: string[]; datasets: [{ label: string; data: number[]; backgroundColor: string; }]; }>
}