import axios from "axios";
import styled from "styled-components";
import Select from "react-select";

export default function AdPostComponent({
  companyMoney,
  AdHandler,
  dayHandler,
  day,
  firstvvipOnClick,
  vipOnClick,
  selPay,
  sumPay,
  adGrade,
  resultMoney,
}) {
  const options = [
    { value: "3", label: "3일" },
    { value: "4", label: "4일" },
    { value: "5", label: "5일" },
    { value: "6", label: "6일" },
    { value: "7", label: "7일" },
    { value: "8", label: "8일" },
    { value: "9", label: "9일" },
    { value: "10", label: "10일" },
    { value: "11", label: "11일" },
    { value: "12", label: "12일" },
    { value: "13", label: "13일" },
    { value: "14", label: "14일" },
    { value: "15", label: "15일" },
    { value: "16", label: "16일" },
    { value: "17", label: "17일" },
    { value: "18", label: "18일" },
    { value: "19", label: "19일" },
    { value: "20", label: "20일" },
    { value: "21", label: "21일" },
    { value: "22", label: "22일" },
    { value: "23", label: "23일" },
    { value: "24", label: "24일" },
    { value: "25", label: "25일" },
    { value: "26", label: "26일" },
    { value: "27", label: "27일" },
    { value: "28", label: "28일" },
    { value: "29", label: "29일" },
    { value: "30", label: "30일" },
  ];
  return (
    <BackgroundBox>
      <HeadBox>채용광고 상품</HeadBox>
      <AdBox>
        <AdBtnBox>
          <div
            onClick={() => {
              firstvvipOnClick();
            }}
            className={adGrade == 1 ? "clicked" : ""}
          >
            first vvip
          </div>
          <div
            onClick={() => {
              vipOnClick();
            }}
            className={adGrade == 2 ? "clicked" : ""}
          >
            vip
          </div>
        </AdBtnBox>

        <SelectBox>
          <div>
            이용기간
            <Select
              className="basic-multi-select"
              classNamePrefix="select"
              options={options}
              onChange={dayHandler}
            />
          </div>
        </SelectBox>

        <AdInfoBox>
          <WillPayBox>결제 정보</WillPayBox>
          <PayInfoBox>
            <ProductBox>
              <div>내가 보유한 금액</div>
              <div>{companyMoney}원</div>
            </ProductBox>
            <ProductBox>
              <div>상품 금액</div>
              <div>
                {selPay}원 x {day}일 = {sumPay}원
              </div>
            </ProductBox>
            <LineBox>
              <hr />
            </LineBox>
            <ProductBox>
              <div>결제 후 남은 금액</div>
              <div>{resultMoney}원</div>
            </ProductBox>
          </PayInfoBox>
        </AdInfoBox>
      </AdBox>
      <div
        className="nextBtn"
        onClick={() => {
          AdHandler();
        }}
      >
        광고등록
      </div>
    </BackgroundBox>
  );
}

const PayInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WillPayBox = styled.div`
  font-size: 22px;
  font-weight: 900;
`;
const ProductBox = styled.div`
  display: flex;
  width: 50%;

  div {
    width: 50%;
  }

  div:first-child {
    text-align: left;
  }

  div:last-child {
    text-align: right;
  }
`;

const AdInfoBox = styled.div`
  text-align: center;
  margin-top: 20px;
`;
const AdBtnBox = styled.div`
  display: flex;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12%;
    height: 60px;
    border: 2px solid #e1e3e5;
    border-radius: 10px;
    margin: 0 10px;
  }
  div:hover {
    border: 2px solid black;
  }

  .clicked {
    border: 2px solid black;
  }
`;

const BackgroundBox = styled.div`
  background-color: #f2f6f9;
  padding-bottom: 50px;

  .nextBtn {
    width: 200px;
    height: 50px;
    margin: auto;
    margin-top: 50px;
    background-color: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
  }
`;

const SelectBox = styled.div`
  width: 30%;
  margin: auto;
  padding: 20px;
  text-align: center;
`;

const LineBox = styled.div`
  width: 80%;
`;

const HeadBox = styled.div`
  width: 65%;
  margin: auto;
  color: #323743;
  font-size: 30px;
  font-weight: 800;
  padding: 30px;
`;

const AdBox = styled.div`
  width: 66%;
  margin: 20px auto;
  border-radius: 20px;
  background-color: white;
  padding: 30px 0;
`;
