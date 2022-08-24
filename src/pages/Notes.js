import React from 'react'
import { useState,useEffect,useContext } from 'react';
import NoteCard from '../component/NoteCard';
import { Grid,Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import NoteContext from '../context/NoteContext';

export default function Notes() {

const{notes,handleDelete} = useContext(NoteContext)

  return (
    <Container>
    <Grid container spacing={3}>
      {notes.length===0 ? <Typography variant='h4' component={Container} sx={{mt:4}}>No Notes Found!! Please Create</Typography> : notes.map((note)=>{
        return <Grid item key={note.id} xs={12} md={6} lg={3} >
          <NoteCard note={note} handleDelete={handleDelete}></NoteCard>
          </Grid>
      })}
    </Grid>
    </Container>
  )
}
