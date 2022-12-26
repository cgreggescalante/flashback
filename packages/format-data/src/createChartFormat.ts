const createChartFormat = (createLabel: (element: any) => string, createDatum: (element: any) => number, label: string) => (elements: any[]) => {
    const labels = elements.map(createLabel);
    const data = elements.map(createDatum);

    return {
        labels,
        datasets: [
            {
                label,
                data,
                backgroundColor: 'rgba(84,59,208,0.5)'
            }
        ]
    }
}

export default createChartFormat