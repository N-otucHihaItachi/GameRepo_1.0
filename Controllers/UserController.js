const User = require('../Models/Usermodel');

const registerUser = async (req, res) => {
    // Basic guard: ensure body was parsed
    if (!req.body) {
        return res.status(400).json({ message: 'Request body is missing. Make sure Content-Type is set and body is sent.' });
    }

    const { username, email, password } = req.body;

    // Validate required fields
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'username, email and password are required' });
    }

    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const loginUser= async (req,res)=>{
    if(!req.body){
        return res.status(400).json({ message: 'Request body is missing. Make sure Content-Type is set and body is sent.' });
    }
    const {username,password}=req.body;
    try{
        const user=await User.findOne({username});
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }
        // Here you would typically compare the password with a hashed password
        if(user.password !== password){
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const logoutUser=async (req,res)=>{
    // Placeholder for logout logic (e.g., token invalidation)
    res.status(200).json({ message: 'Logout successful' });
}

module.exports = { registerUser,loginUser,logoutUser };
