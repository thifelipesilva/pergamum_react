import { Box, Button, Typography } from "@mui/material"
import { useState } from "react";
import Input from "../Input";
import TextArea from "../TextArea";

const Form = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [page, setPage] = useState('');
    const [year, setYear] = useState('');
    const [anotation, setAnotation] = useState('');

    //elevando os dados para o pai
    const sendData = event => {
        event.preventDefault();
        props.dataSubimited({
            firstName,
            lastName,
            page,
            year,
            anotation
        });
        setFirstName('');
        setlastName('');
        setPage('');
        setYear('');
        setAnotation('');
    }

    return (
        <Box
            sx={
                {
                    display: 'flex',
                    flexDirection: 'column',

                    heigth: 'auto',
                    width: 400,
                    m: 1,
                    p: 1
                }
            }

        >
            <Typography variant="h5" component="h2" align="center" my={1}>
                Registre a Citação
            </Typography>
            
        
            <Input
             id='firstName'
             label='nome do autor'
             type='text'
             value={firstName}
             changed={firstName => setFirstName(firstName)}
              
            />

            <Input
             id='lasttName'
             label='sobrenome do autor'
             type='text' 
             value={lastName}   
             changed={lastName => setlastName(lastName)}
            />

            <Input
             id='page'
             label='número da página'
             type='number'
             value={page}
             changed={page => setPage(page)}
            />

            <Input
             id='year'
             type='date'
             value={year}
             changed={year => setYear(year)}
            />


            <TextArea
             value={anotation}
             changed={anotation => setAnotation(anotation)}
            />

            <Button
                onClick={sendData}
                type="submit"
                sx={
                    {
                        border: 1,
                        marginTop: 4
                    }
                }
            >
                Salvar
            </Button>
            
        </Box>

    )
}

export default Form;