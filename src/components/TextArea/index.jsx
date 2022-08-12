import { TextareaAutosize } from "@mui/material"


const TextArea = (props) => {
    
    const typed = event => {
        props.changed(event.target.value);
    }

    return (

        <TextareaAutosize
            maxRows={4}
            placeholder="Digite sua Citação"
            style={
                {
                    background: '#dfdfdf',
                    height: 200,
                    marginTop: 8
                }
            }
            onChange={typed}
            value={props.value}
        />  
    );
}

export default TextArea