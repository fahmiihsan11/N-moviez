import React from 'react';
import {StarFilled} from '@ant-design/icons';
import { Card, Tooltip, Typography, Modal, Col } from 'antd';

export default function MovieCard({res, isPlaying}){
    const [ isOpen, setIsOpen ] = React.useState(false)

    const handleOpenDetail = () => {
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    return(
    <>
        <Card 
            style={{ 
                borderRadius: '16px', 
                cursor: 'pointer', 
                height: '300px',
                width : '200px', 
                margin:  "10px 5px", 
                display: "flex", 
                justifyContent: "center", 
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "gray",
                border: "none",
             }}
             onClick={handleOpenDetail}
            
        >
            <div style={{width:"150px"}}>
                <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${res.poster_path}`} alt={res.title} width="150px" style={{borderRadius: "6px"}}/>
                {res.title.length >= 40 ? (
                    <Tooltip placement='bottom' title={res.title} style={{borderRadius: "5px"}}>
                        <Typography style={{marginBottom: 0, paddingBottom: 0, color: 'white'}}><b>{res.title.substring(0, 30).concat("...")}</b></Typography>
                    </Tooltip>
                ) : ( 
                    <Typography style={{marginBottom: 0, paddingBottom: 0, color: "white"}}><b>{res.title}</b></Typography>
                )}
                {isPlaying ? (
                    <Typography style={{color: "white"}}><StarFilled style={{display: "inline", color:'yellow'}}/> {res.vote_average}</Typography>
                ) : (
                    <Typography style={{color: "white"}}> {`(${res.release_date.substring(0,4)})`}</Typography>
                )}
                
            </div>    
        </Card>

        <Modal
            centered
            width={900}
            visible={isOpen}
            footer={null}
            title="Overview"
            onCancel={handleCloseModal}
            bodyStyle={{
                backgroundColor: '#5a5a5a'
            }}
            headerStyle={{
                backgroundColor: 'gray  '
            }}
        >
            <Col xl={24} lg={24} md={24} xs={24} style={{padding: "10px", display: "flex", justifyContent: "center", flexWrap:"wrap",  borderRadius: "6px"}}>
            <Card style={{width: "400px", height: "400px", display: "flex", justifyContent: "center", border: "none", backgroundColor: "transparent", }}>
                <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${res.poster_path}`} alt={res.title} width="240px" style={{borderRadius: "6px"}}/>
            </Card>
            <Card  style={{width: "400px", height: "400px",  border: "none", backgroundColor: "transparent"}}>
                <Typography style={{fontSize: "24px", fontWeight: "bold", textAlign: "center", color: "white"}}>{res.title}</Typography>    
                <Typography style={{marginTop: "40px", color: "white"}}>{res.overview}</Typography>
                <Typography style={{marginTop: "40px", textAlign: "right", color: "white"}}>{res.release_date}</Typography>
            </Card>
            </Col>
        </Modal>
    </>
    )
}