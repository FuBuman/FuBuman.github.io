import { Box, Button, LinearProgress, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core'
import React from 'react'



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(2),
        alignItems: "center"

    },
    background: {
        backgroundColor: "black"
    },
}));

function renderRow(message: number, index: number, statusbar: number) {
    const messages = ["",
        "for (k = 1; k<=n; k++)\n{for (c = 1; c<=space; c++)\ncout<< space--;\n for (c = 1; c<= 2*k-1; c++)\ncout<<*;\ncout<<\n;}",
        "if(n == 0){return 1;}",
        "else{return n * factorial(n - 1);}",
        "fstream inFile(c:/temp/soccer.txt, ios::in);",
        "while (!inFile.eof())",
        "vector<Player>players;",
        "getline(inFile, name); players[i].setName(name); getline(inFile, team);",
        "players.push_back(p);",
        "Error illegal argument exception",
    ]

    switch (index) {
        case (statusbar / 10):
            return (
                <ListItem key={index} >
                    <ListItemText disableTypography primary={<Typography style={{ color: '#FFFFFF' }}>{messages[index]}</Typography>} />
                </ListItem>
            )
    }

}


function LinearProgressWithLabel(props: any) {
    const messages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [hach, setHach] = React.useState(false);
    const classes = useStyles()


    const handleButtonClick = () => {
        setHach(true)
    }


    return (
        <div>
            <Box display="flex" alignItems="center" >
                <Box width="1000px" mr={1}>
                    <LinearProgress variant="determinate" {...props} color="secondary" />
                </Box>
                <Box minWidth={35} >
                    <Typography variant="body2" color="secondary">{`${Math.round(
                        props.value) !== 100 ? Math.round(
                            props.value) : 99
                        }%`}</Typography>
                </Box>
            </Box>
            <List>
                {messages.map((mes, idx) => renderRow(mes, idx, Math.round(props.value)))}

            </List>
            <div className={classes.root}>
                <div>
                    {props.value === 100 && <Typography color="secondary">Error illegal argument exception</Typography>}
                </div>
                <div>
                    {props.value === 100 && <Button onClick={handleButtonClick} color="secondary">Close</Button>}
                </div>
                <div>
                    {hach && <React.Fragment><Typography color="secondary">You have been hached!</Typography> <Typography color="secondary">{">>+1PM-ADJDWDPD<<"}</Typography></React.Fragment>}
                </div>
            </div>
        </div>
    );
}


export const Terminal = () => {
    let [loading, setLoading] = React.useState(0);
    const [progress, setProgress] = React.useState(0);
    const classes = useStyles()

    const handleButtonClick = () => {
        let intervall = setInterval(() => {
            if (loading <= 9) {
                setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
                loading += 1
            }
            else {
                clearInterval(intervall)
                setLoading(0)
            }
        }, 800);

    }


    return (
        < div className={classes.root}>
            <LinearProgressWithLabel value={progress} />
            <Button onClick={handleButtonClick} color="secondary">Solve</Button>
        </div >
    )
}
