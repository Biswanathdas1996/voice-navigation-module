import swal from "sweetalert";

// ----------------------------
// function waitForElm(selector) {
//   return new Promise((resolve) => {
//     if (document.querySelector(selector)) {
//       return resolve(document.querySelector(selector));
//     }

//     const observer = new MutationObserver((mutations) => {
//       if (document.querySelector(selector)) {
//         resolve(document.querySelector(selector));
//         observer.disconnect();
//       }
//     });

//     observer.observe(document.body, {
//       childList: true,
//       subtree: true,
//     });
//   });
// }
///--------------------------

export const actionFunctions = (history, expression) => {
  switch (expression) {
    case "create-story":
      return createDynamicTicket(history, `story`, `medium`);
    case "log-out":
      return logout();
    case "call-support":
      return callToSupport();
    case "mail-support":
      return mailToSupport();

    default:
  }
};
const logout = () => {
  localStorage.clear();
  window.location.href = `/login`;
};

const callToSupport = () => {
  window.location.href = `tel:8001691299`;
  window.location.href = `/contact`;
};

const mailToSupport = () => {
  window.location.href = "mailto:cv.biswanath@gmail.com";
  window.location.href = `/contact`;
};

const createSprint = async () => {
  swal({
    title: `Please wait!`,
    text: `Creating a sprint, please update the details as needed.`,
    icon: "https://www.boasnotas.com/img/loading2.gif",
    dangerMode: true,
    button: false,
  });
  window.location.href = `/sprints`;
};

const createDynamicTicket = async (history, type, priority) => {
  // history("/create-ticket");

  swal({
    title: `Please wait!`,
    text: `Creating a ${type}, please update the details as needed.`,
    icon: "https://www.boasnotas.com/img/loading2.gif",
    dangerMode: true,
    button: false,
  });

  const metaData = {
    id: 123,
    name: "Dummy titile (Please update)",
    type: type,
    priority: priority,
    storypoint: 2,
    description: "Please enter a description",
    AC: "Please enter a AC",
    linkedStories: JSON.stringify([]),
  };

  return;
};
