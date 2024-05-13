import Table from 'react-bootstrap/Table';

function ListProduct(props) {
  const first_name= props.name
  const last_name=props.name2
  const email=props.email
  const semester=props.semester
  return (
    <Table responsive>
      <thead>
        
          <th> 
          {Array.from({ length: 1}).map((_, index) => (
            <th key={index}> {first_name} </th>
          ))}</th>
        
      </thead> 
      <tbody>
        
        <tr><th>
          
          {Array.from({ length: 1 }).map((_, index) => (
            <td key={index}>  {last_name} </td>
          ))}</th>
        </tr>
        <tr> <th>
          <td></td>
          {Array.from({ length: 1 }).map((_, index) => (
            <td key={index}> {email} {index}</td>
          ))}</th>
        </tr>
        <tr>
          <th>
          <td></td>
          {Array.from({ length: 1 }).map((_, index) => (
            <td key={index}>{semester} {index}</td>
          ))}</th>
        </tr>
      </tbody>
    </Table>
    
  );
}

export default ListProduct;