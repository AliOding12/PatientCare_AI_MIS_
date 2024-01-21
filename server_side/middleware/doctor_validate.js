const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
cookieParser();
// Example route that requires authorization
const specialAuth = async (req, res, next) => {
  const token = req.cookies.authToken;
  console.log("this log is from specialauth: ", token);
  // const role = req.body.userData;
  // const userrole = json.parse(role);
  // console.log("this is the role: ", userrole);
  if (!token) {
    return res.status(401).json({ message: "no token received" }); // Redirect to login if no token
  }

  try {
    const decoded = jwt.verify(token, "your_secret_key");
    console.log("this is the decoded token: ", decoded);
    req.user = decoded; // Attach decoded user info to req
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

const UserRole = (roles)=>{

	return (req,res,next)=>{
	
		if(!roles.includes(req.user.userType)){
			return res.status(403).send({
				message:'Forbidden:irrelevant Roles Provided '});
		}

		next();
	};


};



module.exports = { specialAuth ,UserRole};
// Add doctor validation middleware
