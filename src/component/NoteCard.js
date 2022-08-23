import React from 'react';
import {Typography, CardHeader,CardContent,Card, IconButton} from '@mui/material';
import {DeleteOutlined} from '@mui/icons-material'
const NoteCard = ({note,handleDelete}) => {
    return (
        <div>
            <Card elevation={3}>
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
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default NoteCard;
