export interface ChartGenerator {
    (): Promise<{ labels: string[]; datasets: [{ label: string; data: number[]; backgroundColor: string; }]; }>
}