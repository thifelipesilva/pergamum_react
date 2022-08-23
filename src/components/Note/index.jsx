import { Card, CardContent, Grid, Typography } from "@mui/material";

const Note = ({ anotation, firstName, lastName, page, year, index }) => {
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

                </CardContent>


            </Card>

        </Grid>
    )
}

export default Note;