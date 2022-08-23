import React, { useState,useContext}  from 'react'
import NoteContext from '../context/NoteContext';
import { useHistory } from 'react-router-dom';

import { Typography,
  Button,Container,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl
} from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { styled } from '@mui/material/styles';

const Field = styled(TextField)(({ theme }) => ({
  marginTop:20,
  marginBottom:20,
  display:'block'
}));

const FormControls = styled(FormControl)(({ theme }) => ({
  marginTop:20,
  marginBottom:20,
  display:'block'
}));



export default function Create() {

    const[title,setTitle]=useState('');
    const[detail,setDetail] = useState('');
    const [titleError, settitleError] = useState(false);
    const [detailError, setdetailError] = useState(false);
    const [category, setcategory] = useState('todos');
    const history = useHistory()

    const {addNotes} = useContext(NoteContext);

    const submitHandler = (e)=>{
      setdetailError(false)
      settitleError(false)
        e.preventDefault();
        if(title===''){
          settitleError(true);
        }
         if(detail===''){
          setdetailError(true);
        }

        if(detail && title){
          addNotes(Math.random(),title,detail,category)
          history.push('/')
        }
        
    }

  return (
      
    <Container>
     <Typography
        variant='h6'
        color="textSecondary"
        component="h2"
        gutterBottom
     >
      Create a New Note
     </Typography>

     <form noValidate autoComplete='off' onSubmit={submitHandler}>

     <Field  
      onChange={(e)=>setTitle(e.target.value)}
      label="Note Title" 
      variant="outlined"
      color='secondary'
      fullWidth
      error={titleError}
     />

     <Field  
       onChange={(e)=>setDetail(e.target.value)}
      label="Details" 
      variant="outlined"
      color='secondary'
      fullWidth
      multiline
      minRows={4}
      error={detailError}
     />

     <FormControls>
      <FormLabel>Note Category</FormLabel>
      <RadioGroup value={category} onChange={(e)=>setcategory(e.target.value)}>
        <FormControlLabel value="money" control={<Radio color='secondary'></Radio>} label="Money"/>
        <FormControlLabel value="todos" control={<Radio color='secondary'></Radio>} label="Todos"/>
        <FormControlLabel value="reminder" control={<Radio color='secondary'></Radio>} label="Reminder"/>
        <FormControlLabel value="work" control={<Radio color='secondary'></Radio>} label="Work"/>
      </RadioGroup>
    </FormControls>

      <Button
      type='submit'
      variant='contained'
      color='secondary'
      endIcon={<ChevronRightIcon></ChevronRightIcon>}
    >
      Submit
    </Button>

     </form>
     
    

    </Container>
  )
}
