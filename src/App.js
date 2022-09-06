import { Button } from '@mui/material';

import { Table } from './components/table';
import { TableCellAlign, TableCellType } from './components/table/utils/common';

function App() {
  // Example for the render function in the table cells array
  const renderFunc = (item) => {
    return <div>Render {item.name}</div>;
  };

  const arr = ['first', 'second', <Button>third</Button>];

  // Example for the table cells array
  const cells: TableCellType[] = [
    { field: 'name', title: 'Full name', align: TableCellAlign.CENTER },
    { field: 'phone', title: 'Phone number', align: TableCellAlign.CENTER },
    { field: 'createdDate', title: 'Created date', align: TableCellAlign.CENTER },
    { field: 'statusDate', title: 'Updated date', align: TableCellAlign.CENTER },
    { field: 'amount', title: 'Amount', align: TableCellAlign.CENTER, render: renderFunc },
    { field: 'status', title: 'Status', align: TableCellAlign.CENTER },
  ];

  // Example for the table data array
  const tableData = arr.map((item) => {
    const dataObject = {};

    for (const key of cells) {
      dataObject[key.field] = item;
    }

    return dataObject;
  });

  return (
    <div className="App">
      <Table cells={cells} data={tableData} headVariant="h6" />
    </div>
  );
}

export default App;
