import { Grid } from "@mui/material";
import Note from "../Note";


const Wall = (props) => {

    

    return (
        
        <Grid container spacing={3} justify='center' p={2} ml={2} >


            {
                //passando dados para o filho
                props.data.map(

                    (data, index) => {
                        return(
                            <Note
                             key={index}
                             firstName={data.firstName} 
                             lastName={data.lastName}
                             page={data.page}
                             year={data.year}
                             anotation={data.anotation}
                             deleteNote={props.deleteNote}
                            />
                        )
                    }
                )
                
            }
            
            
        </Grid>
        

    );
}

export default Wall;