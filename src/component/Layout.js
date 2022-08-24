import React from 'react';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom'
import {SubjectOutlined,AddCircleOutlineOutlined} from '@mui/icons-material';
import { 
  Typography,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';



const useStyles = makeStyles({
    root: {
        display:'flex',
    },
    drawer: {
      width:180
    },
    page: {
        width:'100%'
      },
  });

const Layout = ({children}) => {

    const menuItems = [
        { 
          text: 'My Notes', 
          icon: <SubjectOutlined color="secondary" />, 
          path: '/' 
        },
        { 
          text: 'Create Note', 
          icon: <AddCircleOutlineOutlined color="secondary" />, 
          path: '/create' 
        },
      ];

    const classes = useStyles();
    const history = useHistory()
    
    return (
        <div className={classes.root}>
        
            <Drawer
                variant='permanent'
                anchor='left'
                className={classes.drawer}
            >
                <div>
                    <Typography variant='h5'>
                        Quick Notes
                    </Typography>
                </div>
                <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              onClick={() => history.push(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
            </Drawer>
            
            
            <div className={classes.page}>{children}</div>
        </div>
    );
}

export default Layout;
