import AfterLogInComponent from "./AfterLogInComponent";
import axios from "axios";

const AfterLogInContainer = ({ setTest, individualId, individualPhoto }) => {
  const onClick = async () => {
    await axios.post("http://localhost:8080/api/individualuser/logout");
  };
  const imsi = async () => {
    const data = await axios.post(
      "http://localhost:8080/api/individualuser/autologin"
    );
    console.log(data);
  };

  imsi();
  return (
    <AfterLogInComponent
      onClick={onClick}
      setTest={setTest}
      individualId={individualId}
      individualPhoto={individualPhoto}
    ></AfterLogInComponent>
  );
};

export default AfterLogInContainer;
