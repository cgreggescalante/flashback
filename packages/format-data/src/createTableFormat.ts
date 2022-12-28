const createTableFormat = (processElement: (value: any, index: number) => any, columns: any[]) => (elements: any[]) => {
  elements = elements.map(processElement);

  return { data: elements, columns };
};

export default createTableFormat;