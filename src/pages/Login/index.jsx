import React from "react";

import { Button, CheckBox, Img, Input, Text } from "components";

const LoginPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-10 md:gap-10 gap-[368px] items-center mx-auto p-[199px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-8 items-center justify-start md:ml-[0] ml-[25px] w-auto">
          <Img
            className="h-[273px] w-[250px]"
            src="images/logo_lady.jpg"
            alt="group1122"
          />
          <Text
            className="sm:text-[37px] md:text-[43px] text-[47px] text-light_blue-600 w-auto"
            size="txtInterSemiBold47"
          >
            LadyCoders
          </Text>
        </div>
        <div className="flex flex-col gap-8 items-center justify-start mr-[39px] w-[35%] md:w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-[360px]">
            <Img className="h-12 w-12" src="images/logo_lady.jpg" alt="logo" />
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center w-full"
                size="txtInterSemiBold30"
              >
                Log in to your account
              </Text>
              <Text
                className="text-base text-blue_gray-500 text-center w-full"
                size="txtInterRegular16"
              >
                Welcome back! Please enter your details.
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-[360px]">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtInterMedium14"
                    >
                      Email
                    </Text>
                    <Input
                      name="input"
                      placeholder="Enter your email"
                      className="!placeholder:text-blue_gray-500_01 !text-blue_gray-500_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-100 border-solid w-full"
                      type="email"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtInterMedium14"
                    >
                      Password
                    </Text>
                    <Input
                      name="input_One"
                      placeholder="••••••••"
                      className="!placeholder:text-blue_gray-500_01 !text-blue_gray-500_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-100 border-solid w-full"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <CheckBox
                className="font-medium text-left text-sm"
                inputClassName="border border-blue_gray-100 border-solid h-4 mr-[5px] w-4"
                name="text_One"
                id="text_One"
                label="Remember for 30 days"
                color="white_A700"
                variant="fill"
              ></CheckBox>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-center justify-center w-auto">
                  <a
                    href="javascript:"
                    className="text-blue-700 text-sm w-auto"
                  >
                    <Text size="txtInterMedium14Blue700">Forgot password</Text>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start pb-[60px] w-full">
              <div className="flex flex-col items-start justify-start w-[360px]">
                <Button
                  className="border border-blue-700 border-solid cursor-pointer font-medium shadow-bs text-base text-center w-full"
                  shape="round"
                  color="blue_700"
                  variant="fill"
                >
                  Sign in
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-start justify-center w-[360px]">
            <a
              href="javascript:"
              className="text-blue_gray-500_01 text-sm w-auto"
            >
              <Text size="txtInterRegular14">Don’t have an account?</Text>
            </a>
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col items-center justify-center w-auto">
                <a href="javascript:" className="text-blue-700 text-sm w-auto">
                  <Text size="txtInterMedium14Blue700">Sign up</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
