import { TextField } from "@mui/material"

const Input = (props) => {
    //recebendo os dados do pai
    const typed = event => {
        props.changed(event.target.value);
    }

    return (

        <TextField
            id={props.id}
            label={props.label}
            type={props.type}
            margin="dense"
            size="small" 
            onChange={typed}   
            value={props.value}   
        />
        
    );
}

export default Input;