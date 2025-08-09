// Example of the updated handleSignIn function
const handleSignIn = async () => {
    try {
        const response = await axios.post('http://<YOUR_LOCAL_IP>:5000/api/auth/login', {
            email,
            password,
        });
        // Store the token securely
        console.log('Login successful!', response.data.token);
        alert('Login successful!');
        navigation.navigate('Home');
    } catch (error) {
        console.error(error.response.data);
        alert('Login failed: ' + error.response.data.msg);
    }
};