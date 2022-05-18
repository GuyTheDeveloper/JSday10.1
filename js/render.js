import newUser from "./newUser.js";

export default function (kuda, nimani) {
  let fragment = document.createDocumentFragment();

  nimani.forEach((user, index) => {
    let newNode = newUser(user, index + 1);

    fragment.append(newNode);
  });

  kuda.innerHTML = "";
  kuda.append(fragment);
}
