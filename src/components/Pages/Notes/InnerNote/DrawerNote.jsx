import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function DrawerNote() {

    return (
        <div>
            <Box className="drawerNote" sx={{ width: 400 }} role="presentation">
                <h2>Add Your Notes Here</h2>
                <List>
                    {['Add Note'].map((text) => (
                        <ListItem key={text} disablePadding>
                        <div className='drawerMain'>
                        <div className="drawerBtn-main">
                                <Button className='drawerBtn'>
                                    <AddIcon style={{ color: "var(--dark)" }} />
                                    <ListItemText className='drawerTxt' primary={text} />
                                </Button>
                            </div>
                            <div className="drawerBtnDlt-main">
                                <Button className='drawerBtnDlt'>
                                    <DeleteOutlineIcon fontSize="large" style={{ color: "var(--primary)" }} />
                                </Button>
                            </div>
                        </div>
                        </ListItem>
                    ))}
                </List>
                <Divider style={{borderColor:"var(--primary)"}}/>

                
            </Box>
        </div>
    )
}



{/* <div className='login-form'>
<Draggable
  axis="both"
  handle=".handle"
  defaultPosition={{x: 0, y: 0}}
  position={null}
  scale={1}
  onStart={handleStart}
  onDrag={handleDrag}
  onStop={handleStop}
  nodeRef={draggingRef}
>

  <div ref={draggingRef} className="dragging handle">
    <div>Drag from here</div>
    <div>This readme is really dragging on...</div>
    <div>Drag from here</div>
  </div>
</Draggable>
</div>
</Modal>
</div> */}