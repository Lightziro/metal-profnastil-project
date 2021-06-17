import React from "react";
import {Box, Grid} from "@material-ui/core";
import CustomizedMenus from "../DropMenu/DropMenu";
import './style.css';

export default function PanelSortProduct(props) {
     const [typeSort, setTypeSort] = React.useState(null);

    function setNewSort(newType) {
        setTypeSort(newType);
    }

    function changeSortParams() {
        let sendQuery = null;
        switch (typeSort)
        {
            case 'ASC-PRICE':
                sendQuery = 'getProductBySort?column=price&type=asc';
                break;
            case 'DESC-PRICE':
                sendQuery = 'getProductBySort?column=price&type=desc';
                break;
            case 'ASC-NAME':
                sendQuery = 'getProductBySort?column=name&type=asc';
                break;
            case 'DESC-NAME':
                sendQuery = 'getProductBySort?column=name&type=desc';
                break;
        }
        props.changeSortPrice(sendQuery);
    }
    React.useEffect(() => {
        if (typeSort) {
            changeSortParams();
        }
    }, [typeSort]);

     return (
         <Box className='panel-product-list'>
             <Grid container
                   direction="row"
                   justify="flex-start"
                   alignItems="center"
                   className='grid-sort'
             >
                 <CustomizedMenus changeItem={setNewSort}
                                  changeTypeSort={changeSortParams}
                 ></CustomizedMenus>
             </Grid>
         </Box>
     );

}
