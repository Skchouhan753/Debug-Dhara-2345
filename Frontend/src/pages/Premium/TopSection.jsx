import {
	Box,
	Button,
	Image,
	Text,
} from "@chakra-ui/react";

import "./PremiumStyles.css";
import premiumTop from "../../assets/premiumTop.webp";

// import SignupCreateAcc from "../Signup/SignupCreateAcc";
import { useNavigate } from "react-router-dom";
// const handleFree =()=>{
// 	// Navigate('../Signup/SignupCreateAcc.jsx')
// 	navigate('/signup')
// console.log("first")
// }


const TopSection = () => {
	const navigate = useNavigate();
	return (
		<>
			<Box className="TopSec">
				<Box align="left" className="TopSecLeft">
					<Box className="premiumYellowBox" w="fit-content">
						PREMIUM
					</Box>
					<Box align="left">
						<Text fontSize="5xl" as="b" style={{ display: "block" }}>
							Start your Free
						</Text>

						<Text fontSize="5xl" as="b">
							Trial Today
						</Text>
					</Box>
					<Box align="left">
						<Text color="#696969">Premium members are 65% more likely to</Text>
						<Text color="#696969">reach their weight loss goal.</Text>
					</Box>
					
					<Button colorScheme='teal' size='lg' onClick={()=>navigate("/signup")}>
						START FREE 1-MONTH TRIAL
					</Button>
				</Box>

				<Box className="TopSecRight">
					<Image src={premiumTop} className="topSecRightImage" />
				</Box>
			</Box>
		</>
	);
};

export default TopSection;
