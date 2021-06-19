import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import text from './text';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
    },
    header: {
        fontWeight: '500',
        letterSpacing: '2px',
        color: '#555',
    },
    formBox: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    content: {
        width: '70%',
        marginTop: '2rem',
    },
    para: {
        color: '#4e342e',
        fontSize: '17px',
    },
}));

export default function InputAdornments() {
    const classes = useStyles();
    const [number, setnumber] = useState('');
    const [textArr, settextArr] = useState([]);

    const handleChange = (e) => {
        setnumber(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const numIndex = (number - 1).toString();

        let newText;

        text.forEach((curText, ind) => {
            if (ind.toString() === numIndex) {
                newText = curText;
            }
        });

        settextArr([...textArr, newText]);
        setnumber('');
    };

    return (
        <div className={classes.root}>
            <h1 className={classes.header}>TIRED OF BORING LOREM IPSUM?</h1>
            <form onSubmit={handleSubmit}>
                <FormControl className={classes.formBox}>
                    <div className={classes.textUp}>
                        <InputLabel htmlFor='standard-adornment-amount'>
                            Paragraph sequence (1-8)
                        </InputLabel>
                        <Input
                            fullWidth
                            value={number}
                            type='number'
                            id='standard-adornment-amount'
                            onChange={handleChange}
                        />
                    </div>
                    <div className={classes.btn}>
                        <Button
                            disabled={
                                number > 8 ||
                                number === '' ||
                                number === '0' ||
                                number < 0
                            }
                            style={{ marginTop: '1rem' }}
                            variant='contained'
                            color='primary'
                            type='submit'>
                            Generate
                        </Button>
                    </div>
                </FormControl>
            </form>

            <div className={classes.content}>
                {textArr.map((cur, i) => (
                    <p className={classes.para} key={i}>
                        {cur}
                    </p>
                ))}
            </div>
        </div>
    );
}
