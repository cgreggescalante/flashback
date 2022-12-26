export interface formatChartData {
    (elements: any[]): {datasets: {backgroundColor: string, data: number[], label: string}[], labels: string[]}
}

export interface formatTableData {
    (elements: any[]): {data: any[], columns: any[]}
}