import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { NavLink, useHistory } from "react-router-dom";
import {useDispatch} from "react-redux"
import { logout } from "../../Actions/userSlice";




function Homepage() {

  
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowdata, setRowdata] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const history = useHistory()

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setRows(response.data);
    });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    if (rowdata) {
      setRows([rowdata]);
    } else {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
        setRows(response.data);
      });
    }
  }, [rowdata]);

  const dispatch = useDispatch()
  

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("Users");
    localStorage.removeItem("UserPass");
    // setLoginUser({})
    // history.push("/");
    dispatch(logout());
    
   
 
   
    
  };

  const Removefunction = (id) => {

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      // remove post from state
      const updatedPosts = rows.filter(row => row.id !== id);
      setRows(updatedPosts);
      alert('Removed Successfully.');

    })
    .catch(error => console.log(error));
  }







  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
        </li>
        <li style={{paddingTop:"3px"}}>
          <button type="button" className="btn" onClick={() => history.push("/profile")}>Profile</button>
        </li>
        <li style={{paddingTop:"3px"}}>
          <button type="button" className="btn" onClick={(e)=>handleLogout(e)}>LogOut</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

   
    {rows ? (
           <Card sx={{ minWidth: 400, m:3}}>
           <Box
             componenet="span"
             m={1}
             display="flex"
             justifyContent="end"
             pr={1}
             pt={1}
           >
             <Autocomplete
               disablePortal
               id="combo-box-demo"
               options={rows}
               onChange={(e, v) => setRowdata(v)}
               getOptionLabel={(rows) => rows.title || ""}
               sx={{ width: 300 }}
               renderInput={(params) => <TextField {...params} label="Title" />}
             />
           </Box>
   
           <CardContent sx={{ bgcolor: 'text.disabled' }}>
             <Paper sx={{ width: "100%", overflow: "hidden" }}>
               <TableContainer sx={{ maxHeight: 800 }}>
                 <Table stickyHeader aria-label="sticky table">
                   <TableHead>
                     <TableRow>
                       <TableCell align="left">ID</TableCell>
                       <TableCell align="left">Title</TableCell>
                       <TableCell align="left">Body</TableCell>
                       <TableCell align="left">Action</TableCell>

                     </TableRow>
                   </TableHead>
                   <TableBody>
                     {rows
                       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                       .map((row) => {
                         return (
                           <TableRow
                             hover
                             role="checkbox"
                             tabIndex={-1}
                             key={row.id}
                           >
                             <TableCell align="left">{row.id}</TableCell>
                             <TableCell align="left">{row.title}</TableCell>
                             <TableCell align="left">{row.body}</TableCell>
                             <TableCell align="left"><button className="btn btn-warning"  onClick={() => { Removefunction(row.id) }}>Delete</button></TableCell>


                           </TableRow>
                         );
                       })}
                   </TableBody>
                 </Table>
               </TableContainer>
               <TablePagination
                 rowsPerPageOptions={[10, 25, 100]}
                 component="div"
                 count={rows.length}
                 rowsPerPage={rowsPerPage}
                 page={page}
                 onPageChange={handleChangePage}
                 onRowsPerPageChange={handleChangeRowsPerPage}
               />
             </Paper>
           </CardContent>
         </Card>
    ) : (
        <h2>Loading...</h2>
    )}
   
    </>
  );
}
export default Homepage;
