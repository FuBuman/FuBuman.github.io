import { Box, Button, CircularProgress, Fade, LinearProgress, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(2)
    },
    button: {
        margin: theme.spacing(2),
    },
    placeholder: {
        height: 40,
    },
    margin: {
        marginTop: theme.spacing(2)
    }
}));


export const Terminal = () => {
    const classes = useStyles();
    const [query, setQuery] = React.useState('idle');
    const [Password, setPassword] = React.useState("");
    const [visible, setvisible] = React.useState(false);
    const timerRef = React.useRef(0);
    const messages = ["hier könnte dein Text für dein Geochache stehen!", "Hier köntne noch viel mehr text stehen, wenn du das willst"];

    React.useEffect(
        () => () => {
            clearTimeout(timerRef.current);
        },
        [],
    );

    const Loader = (props: any) => {
        const { messages } = props;
        // Default to the first message passed
        const [messageIndex, setMessageIndex] = React.useState(0);


        React.useEffect(() => {
            // Move on to the next message every `n` milliseconds
            let timeout: any;
            if (messageIndex < messages.length - 1) {
                timeout = setTimeout(() => setMessageIndex(messageIndex + 1), 3000);
            }

            return () => {
                clearTimeout(timeout);
            };
        }, [messages, messageIndex]);

        return <div>{messages[messageIndex]}</div>;
    }


    const handleClickQuery = () => {
        if (Password !== "guido") {
            return
        }

        clearTimeout(timerRef.current);

        if (query !== 'idle') {
            setQuery('idle');
            return;
        }

        setQuery('progress');
        setvisible(true)
        timerRef.current = window.setTimeout(() => {
            setQuery('success');
            setvisible(false)
        }, 10000);

    };

    return (
        <div className={classes.root}>
            <div className={classes.placeholder}>
                {query === 'success' ? (
                    <Typography>Success!</Typography>
                ) : (
                        <Fade
                            in={query === 'progress'}
                            style={{
                                transitionDelay: query === 'progress' ? '800ms' : '0ms',
                            }}
                            unmountOnExit
                        >
                            <CircularProgress />
                        </Fade>
                    )}
            </div>
            <TextField
                className={classes.margin}
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={((e) => setPassword(e.target.value))}
            />
            <Button onClick={handleClickQuery} className={classes.button}>
                {query !== 'idle' ? 'Reset' : 'Simulate a load'}
            </Button>
            {visible && <Loader messages={messages} />}
        </div>
    );
}
