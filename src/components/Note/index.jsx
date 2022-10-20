import { Card, CardContent, Grid, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({ anotation, index, firstName, lastName, page, year, deleteNote }) => {
    return (
        <Grid item key={index} >

            <Card 
                sx={
                {
                    width: 250,
                    height: 200
                }
            }

                style={
                    {
                        backgroundColor: '#dfdffd'
                    }
                }
            >

                <CardContent  >
                    <Typography>
                        {anotation}
                    </Typography>
                    <Typography>
                        {`${lastName}, ${firstName} - ${page}, ${year}`}
                    </Typography>
                    <EditIcon fontSize="small"/>
                    <DeleteIcon fontSize="small" onClick={deleteNote}/>
                </CardContent>


            </Card>

        </Grid>
    )
}

export default Note;