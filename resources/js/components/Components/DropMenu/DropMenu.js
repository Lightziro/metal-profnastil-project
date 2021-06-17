import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotesIcon from "@material-ui/icons/Notes";
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import LineWeightSharpIcon from '@material-ui/icons/LineWeightSharp';
import {Button} from "@material-ui/core";
import './style.css';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function CustomizedMenus(props) {
    const [anchor, setAnchor] = React.useState(null);

    function handleClick(event) {
        setAnchor(event.currentTarget);
    }

    function handleClose() {
        setAnchor(null);
    }

    return (
        <div>
            <Button variant="contained"
                    aria-controls='customized-menu'
                    aria-haspopup={true}
                    style={{backgroundColor: 'white', color: 'black'}}
                    onClick={(e) => handleClick(e)}
            >
                Сортировать
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchor}
                keepMounted
                open={Boolean(anchor)}
                onClose={handleClose}
            >
                <StyledMenuItem onClick={() => props.changeItem('ASC-PRICE')}>
                    <ListItemIcon>
                        <NotesIcon style={{transform: 'rotate(180deg)'}} fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="По возрастанию цены"/>
                </StyledMenuItem>
                <StyledMenuItem onClick={() => props.changeItem('DESC-PRICE')}>
                    <ListItemIcon>
                        <NotesIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="По убыванию цены"/>
                </StyledMenuItem>
                <StyledMenuItem onClick={() => props.changeItem('ASC-NAME')}>
                    <ListItemIcon>
                        <SortByAlphaIcon fontSize='small'/>
                    </ListItemIcon>
                    <ListItemText primary="По наименованию(А-Я)"/>
                </StyledMenuItem>
                <StyledMenuItem onClick={() => props.changeItem('DESC-NAME')}>
                    <ListItemIcon>
                        <LineWeightSharpIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="По наименованию(Я-А)"/>
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}
