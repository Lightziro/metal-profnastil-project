import React from "react";
import {
    Avatar,
    Container,
    Divider,
    Grid,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Typography
} from "@material-ui/core";
import './style.css';
import List from '@material-ui/core/List';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import {useStyles} from "./Constants";
import HowToRegIcon from '@material-ui/icons/HowToReg';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

export default function ContactPage() {
    const classes = useStyles();
    document.title = 'Контакты - Кировский завод металлопрофиля';
    return (
        <Container>
            <Grid container justify='center' alignItems='center'>
                <List className={classes.root}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <HowToRegIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Директор" secondary="Андрей Кудяшев, тел. +7(922) 932-34-75"/>
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <PhoneInTalkIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Отдел продаж" secondary="Контакты отсутствуют"/>
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AttachMoneyIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Бухгалтерия" secondary="Контакты отсутствуют"/>
                    </ListItem>
                </List>
            </Grid>
        </Container>
    )
}
