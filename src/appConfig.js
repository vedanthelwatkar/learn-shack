export const appConfig = {
  BASE_URL: import.meta.env.VITE_BASEURL,
};

export const ApiEndPoints = {
  OTP: "/otp",
  getS3: "/get-s3",
  contact: "/contact",
};

export const returnHeader = (
  isToken,
  isContentTypeFormData,
  isContentTypeFormUrlEncoded
) => {
  let headers;
  if (isContentTypeFormData) {
    headers = { "content-type": "multipart/form-data" };
  } else if (isContentTypeFormUrlEncoded) {
    headers = { "content-type": "application/x-www-form-urlencoded" };
  } else {
    headers = { "content-type": "application/json" };
  }

  headers["Instanceid"] = appconfig.INSTANCE_ID;
  if (isToken) {
    let token = sessionStorage.getItem("token");

    if (!token) {
      token = sessionStorage.getItem("authToken");
    }
    if (token) {
      headers["Authorization"] = "Bearer " + token;
    }
  }
  return headers;
};
