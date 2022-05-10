import { useState } from 'react'
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux'

import { createColumns, createHeader } from './helpers'
import orgs from './data.json'

function TableList() {
  const [headers] = useState(createHeader(orgs))
  const [columns] = useState(createColumns(orgs))

  const selectedOrg = useSelector((state) => state.orgReducers?.selectedOrg?.name)

  return (
    <div>
      <DataTable
        columns={headers}
        data={columns}
        title={selectedOrg}
        striped={true}
        highlightOnHover={true}
      />
    </div>
  );
};

export default TableList