import { Form, Input, Card, Button } from 'antd';
import { useState } from 'react';
import GooglePlacesAutoComplete from 'react-google-places-autocomplete';

const Settings = () => {

    const [address, setAddress] = useState(null);
    const [coordinates, setCoordinates] = useState(null);

    return ( 
        <Card title="Restaurant Details" style={{margin: 20}}>
            <Form layout='vertical' wrapperCol={{span: 8}}>
                <Form.Item label="Restaurant Name" required>
                    <Input placeholder='Enter Restaurant Name here' />
                </Form.Item>
                <Form.Item label="Restaurant Address" required>
                    <GooglePlacesAutoComplete 
                    apiKey="api-key"
                    selectProps={{
                        value: address,
                        onChange: setAddress
                    }}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type='primary'>Submit</Button>
                </Form.Item>
            </Form>
        </Card>
     );
}
 
export default Settings;