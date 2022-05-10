import { useDispatch, useSelector } from 'react-redux'

export const titleCase = (text) => {
  const result = text.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export const createHeader = (data) => {
  const headers = [
    {
      name: <h5>Actions</h5>,
      selector: row => row.actions,
      sortable: true,
      maxWidth: '480px'
    }
  ]

  const singleData = data[0]
  for (const key in singleData) {
    if (Object.hasOwnProperty.call(singleData, key)) {
      headers.push({
        name: <h5>{titleCase(key)}</h5>,
        selector: row => row[key],
        sortable: true,
        maxWidth: '480px'
      })
    }
  }

  return headers
}

export const createColumns = (columns) => {
  const dispatch = useDispatch()

  columns.forEach(column => {
    column.actions =
      <div className='d-flex justify-content-center'>
        <a
          href='#'
          className='text-primary mx-2'
          onClick={
            (e) => {
              e.preventDefault()
              dispatch({ 
                type: "SELECT_ORG",
                payload: {
                  id: column.id,
                  name: column.name
                }
              })
            }
          }
        >
          <b>Select</b>
        </a>
        <a href='#' className='text-danger mx-2'><b>Delete</b></a>
        <a href='#' className='text-success mx-2'><b>Update</b></a>
      </div>
  });

  return columns
}