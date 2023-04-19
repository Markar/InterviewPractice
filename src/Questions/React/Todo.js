import React, { useState } from 'react';
import './HtmlTable.css';
import { Dialog, DialogTitle, Box, Button, Paper, TableBody, Table, TableContainer, TableHead, TableRow, TableCell, Checkbox, TextField } from '@mui/material';

const rowClass = {
  fontSize: "15px",
  fontWeight: "500",
  height: "50px",
  width: "50px",
  border: "1px",
  "&:hover": {
    backgroundColor: "gray"
  },
};

const list = [
  { text: 'Test', id: 1, checked: false },
  { text: 'Test 2', id: 1, checked: true },
];

export function ToDo(props) {
  const [todoList, setTodoList] = useState(list);
  const [open, setOpen] = useState(false);
  const [newText, setNewText] = useState('');

  const handleAdd = (cell) => {
    console.log('cell', cell);
    setOpen(true);
  }

  const handleSubmit = (cell) => {    
    let item = { text: newText, id: 3, checked: false };
    setTodoList([...todoList, item]);
  }

  const handleTextChange = (e) => {    
    setNewText(e.target.value);
  }

  
  const handleClose = (cell) => {
    console.log('cell', cell);
    setOpen(false);    
  }


  const Item = (props) => {
    let row = props.row;
    console.log('row', row);
    return (
      <TableRow
        key={row.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.text}</TableCell>
        <TableCell>
          <Checkbox checked={row.checked} />
        </TableCell>
      </TableRow>
    );
  }

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Add To Do </DialogTitle>
        <TextField onChange={handleTextChange}>Text</TextField>
        <Button onClick={handleSubmit}>Submit</Button>
      </Dialog>

      <Box>
        <Button onClick={handleAdd}>Add</Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>To Do</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todoList.map((row) => (
                <Item row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}