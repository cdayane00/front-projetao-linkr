import { toast } from "react-toastify";

function setToastMessage(statusCode) {
  let message = "Internal Error. Try again later";

  if (statusCode === 404) {
    message = "Not found!";
  }

  if (statusCode === 401) {
    message = "Email or password is incorrect";
  }

  if (statusCode === 409) {
    message = "This email is already registered";
  }

  if (statusCode === 422) {
    message = "Fill in all fields correctly";
  }

  if (statusCode === 200) {
    message = "Successfully";
  }

  if (statusCode === 201) {
    message = "User successfully registered";
  }

  return message;
}

export function displayErrorNotify(statusCode, message = undefined) {
  const errorMessage = message || setToastMessage(statusCode);

  toast.error(errorMessage, {
    toastId: 1,
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export function displaySuccessNotify(statusCode) {
  const successMessage = setToastMessage(statusCode);

  toast.success(successMessage, {
    toastId: 1,
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
