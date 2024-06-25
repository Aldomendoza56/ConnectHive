import React, { useState } from 'react';
import { Vuew, TextInput, Button, Text } from 'react-native';
import { registerUser } from '../services/api';

function RegisterScreen() {
    const [username, setUsername] = useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async () => {
        const result = await registerUser({ username, email, password });
        if (result.error) {
            setMessage(result.error);
        } else {
            setMessage('Registration succesful!');
        }
    };

    return (
        <View>
            <TextInput placeholder="Username" onChangeText={setUsername} />
            <TextInput placeholder="Email" onChangeText={setEmail} />
            <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
            <Button title="Register" onPress={handleRegister} />
            {message ? <Text>{message}</Text> : null}
        </View>
    );

}