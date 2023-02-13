import { Box, Text } from "../../ui-library";
import profileCardPurview from "../../assets/profileCardPurview.svg";

const Produckt = () => {
  return (
    <Box stack="HStack" css={{ marginTop: "10%", marginBottom: "10%" }}>
      <Box stack="VStack" css={{}}>
        <Text
          size="1"
          color="light"
          css={{ fontWeight: "bold", textAlign: "start" }}>
          Express yourself by changing your background color - Profilecard.co
        </Text>
        <Text
          color="grey"
          size="3"
          css={{ textAlign: "justify", marginRight: "5%" }}>
          Personalize your profile and achieve a professional look with
          Profilecard.co! Change your background color to whatever you like, and
          express yourself in the best way possible. Instead of boring white or
          black, choose a lively or sophisticated color to reflect yourself.
          Also, match your profile page with your background color to catch the
          attention of your visitors and achieve a professional look. With
          Profilecard.co, you can also group your social media accounts in one
          place for better communication and job search purposes. Sign up now
          and change your background color!
        </Text>
      </Box>
      <Box
        stack="VStack"
        css={{
          background: "linear-gradient(to right, #CE4DA4, #7353E5)",
          borderRadius: "20px",
          justifyContent: "center",
          alignItems: "center",
          "@media screen and (max-width: 768px)": {
            marginTop: "10%",
          },
        }}>
        <img
          src={profileCardPurview}
          width="50%"
          height="50%"
          alt="profile card purview"
        />
      </Box>
    </Box>
  );
};

export default Produckt;