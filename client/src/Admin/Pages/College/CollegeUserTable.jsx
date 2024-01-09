import React,{useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import PreviewIcon from '@mui/icons-material/Preview';
import { useNavigate , useParams} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    '&:hover': {
      color: "primary", // Change to the color you want on hover
    },
  },
}));


const columns = [
  // { id: 'name', label: 'Posting ID', minWidth: 120 },
  { id: 'code', label: 'ID', minWidth: 60 },
  {
    id: 'size',
    label: 'CollegeName',
    minWidth: 200,
    align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Name',
    label: 'Name',
    minWidth: 200,
    align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Email',
    label: 'Email',
    minWidth: 200,
    align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Phone',
    label: 'Phone',
    minWidth: 100,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'btn',
    label: 'View',
    minWidth: 40,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  
];

function createData( code, population, size) {
  const density = population / size;
  return { code, population, size };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function CollegeUserTable({data,postData}) {
  
  const navigate = useNavigate();

  const classes = useStyles();
  useEffect(()=>{
		// getData();
        
	  },[]);
    // const getData=()=>{
    //   console.log("hjre");
    //   console.log(data);
    // }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick =()=>{
    postData();
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
  
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
           {
            data.slice(0,rowsPerPage).map((row,index)=>{
              return  <TableRow hover role="checkbox" tabIndex={-1} >
                <TableCell>
                         {index+1}
                </TableCell>
                <TableCell>
                         {row.collegename}
                </TableCell>
                <TableCell align={"left"}>
                         {row.collegespocname}
                </TableCell>
                <TableCell align='left'>
                         {row.collegespocemail}
                </TableCell>
                <TableCell align={"right"}>
                        
                         {row.collegespocphone}
                        
                </TableCell>
                <TableCell align={"right"}>
                        
                  <IconButton className={classes.iconButton} onClick={()=>{navigate(`/ViewCollegeDetails/${row.collegespocemail}`)}}>
                <PreviewIcon color='primary' />
                </IconButton>
                  {/* <PreviewIcon /> */}
       
                        
                </TableCell>

               


              </TableRow>
            })
           }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
