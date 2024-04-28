import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../shared/assets/star.png"
import {DEVICE_ROUTE} from "../shared/consts";
import {useNavigate} from "react-router-dom";

const DeviceItem = (device) => {
    let navigate = useNavigate()
    function goToDevicePage() {
        navigate(DEVICE_ROUTE + '/' + device.id)
    }

    return (
        <Col md={3} className="mt-3" onClick={goToDevicePage}>
            <Card rounded style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image className="rounded" width={150} height={150} src={device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>
                        Samsung...
                    </div>
                    <div className="d-flex">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;