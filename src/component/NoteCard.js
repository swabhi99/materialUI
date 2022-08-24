import React from 'react';
import {Typography, CardHeader,CardContent,Card, IconButton} from '@mui/material';
import {DeleteOutlined} from '@mui/icons-material'
import { yellow, green, pink, blue } from '@mui/material/colors'
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
    card:{
        backgroundColor:'red',
        }
    }
)


const NoteCard = ({note,handleDelete}) => {
    const classes = useStyles()
    return (
        <div>
            <Card elevation={3} className={classes.card}>
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
