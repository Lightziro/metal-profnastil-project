import React from 'react';
import './style.css';
import {Box, Container, Grid, Typography} from "@material-ui/core";
import {headerItem} from "./Constants";
import HeaderItem from "./HeaderItem";

export default function HeaderMainPage(props) {

    return (
        <Box className="masthead">
            <Container>
                <Grid container alignItems='center' justify='center' direction='row'>
                    <Box pb={6} pt={6} maxWidth='58%'>
                        <Box mb='1.5rem'>
                            <Typography className='c-white' style={{marginBotton: '4'}} variant={'h2'}>
                                Кировский завод металлопрофиля
                            </Typography>
                        </Box>
                        <Typography className='c-white' variant={'h5'}>
                            Компания занимается производством профнастила с 2003 года по текущий год и
                            имеет
                            огромную
                            базу клиентов. Мы производим продукцию с полимерным покрытием, которая соответствует
                            международной системе RAL
                        </Typography>
                    </Box>
                    <Box style={{position: 'relative'}}>
                        <Box display='flex' flexWrap='wrap' width={400}>
                            {headerItem.map((object, i) => {
                                return <HeaderItem
                                    key={i}
                                    link={object.link}
                                    title={object.title}
                                    img={object.img}>
                                    ></HeaderItem>
                            })}
                        </Box>
                        <div className="shape"></div>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
}
