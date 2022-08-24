import React from 'react';
import {Typography, CardHeader,CardContent,Card, IconButton} from '@mui/material';
import {DeleteOutlined} from '@mui/icons-material'
import { yellow, green, pink, blue } from '@mui/material/colors'
import makeStyles from '@mui/styles/makeStyles';

const useColor = (note) =>{
    if(note.category=='work') return "#A4CDFB"
    if(note.category=='todos') return "#FBB7B3"
    if(note.category=='money') return "#B8FDB4"
    if(note.category=='reminder') return "#F0F983"
}


const NoteCard = ({note,handleDelete}) => {
    const classes = useColor(note)
    return (
        <div>
            <Card elevation={3} sx={{
                backgroundColor:classes
            }}>
                <CardHeader
                    action={
                        <IconButton onClick={()=>handleDelete(note.id)}>
                            <DeleteOutlined/>
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography color='textSecondary'>
                        {note.detail}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default NoteCard;
