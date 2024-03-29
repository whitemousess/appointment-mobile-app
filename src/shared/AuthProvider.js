import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import Toast from "react-native-toast-message";

import * as userService from "~/services/userService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [currentInfo, setCurrentInfo] = useState({});
  const [admin, setAdmin] = useState(false);
  const [doctor, setDoctor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const login = (data) => {
    userService
      .login({ data })
      .then((res) => {
        if (res?.response?.status == 404) {
          Toast.show({
            type: "error",
            text1: "Tài khoản không tồn tại",
          });
        } else if (res?.response?.status == 401) {
          Toast.show({
            type: "error",
            text1: "Mật khẩu không chính xác",
          });
        } else {
          setIsLoading(true);
          setToken(res.token);
          setCurrentInfo(res);
          if (res.role === 0) {
            setAdmin(true);
          } else if (res.role === 1) {
            setDoctor(true);
          }
          AsyncStorage.setItem("token", res.token);
          AsyncStorage.setItem("currentUser", JSON.stringify(res));
          setIsLoading(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const register = (data, navigation) => {
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    if (validateEmail(data.email)) {
      userService
        .register({ data })
        .then((res) => {
          if (res.data) {
            Toast.show({
              type: "success",
              text1: "Đăng ký thành công",
            });
            navigation.navigate("Login");
          } else if (res.response.data.error.keyPattern.username) {
            Toast.show({
              type: "error",
              text1: "không thể đăng ký",
              text2: "Tài khoản đã tồn tại",
            });
            navigator("");
          } else if (res.response.data.error.keyPattern.email) {
            Toast.show({
              type: "error",
              text1: "không thể đăng ký",
              text2: "Email đã tồn tại",
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      Toast.show({
        type: "error",
        text1: "Email không hợp lệ",
        text2: "Vui lòng nhập đúng email",
      });
    }
  };

  const editProfile = async (data) => {
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    if (data.password !== data.rePassword) {
      Toast.show({
        type: "error",
        text1: "Mật khẩu không trùng khớp",
      });
    } else if (validateEmail(data.email)) {
      const formData = new FormData();
      formData.append("password", data.password);
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("address", data.address);
      formData.append("phone", data.phone);
      formData.append("gender", data.gender);
      {
        admin && formData.append("specialist", data.specialist);
        admin && formData.append("sicks", data.sicks);
      }
      {
        data.imageUrl &&
          formData.append("imageUrl", {
            uri: data.imageUrl,
            type: "image/png",
            name: "image.png",
          });
      }
      await userService
        .editUser({ id: data._id, data: formData })
        .then((res) => {
          if (res.data) {
            if (!admin) setCurrentInfo(res.data);
            Toast.show({
              type: "success",
              text1: "Thay đổi thành công",
            });
          } else if (res.response.data.error.keyPattern.email) {
            Toast.show({
              type: "error",
              text1: "không thể Thay đổi",
              text2: "Email đã tồn tại",
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      Toast.show({
        type: "error",
        text1: "Email không hợp lệ",
        text2: "Vui lòng nhập đúng email",
      });
    }
  };

  const logOut = () => {
    setToken("");
    setDoctor(false);
    setAdmin(false);
    setCurrentInfo({});
    AsyncStorage.removeItem("currentUser");
    AsyncStorage.removeItem("token");
  };

  const isLogged = async () => {
    try {
      setIsLoading(true);
      const Token = await AsyncStorage.getItem("token");

      const res = await userService.getCurrentUser({});
      if (res.data) {
        setToken(Token);
        setCurrentInfo(res.data);
        if (res.data.role === 0) {
          setAdmin(true);
        }
        if (res.data.role === 1) {
          setDoctor(true);
        }
        setIsLoading(false);
      } else {
        setToken(false);
        setCurrentInfo({});
        setAdmin(false);
        setDoctor(false);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLogged();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        doctor,
        currentInfo,
        admin,
        isLoading,
        login,
        register,
        editProfile,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
