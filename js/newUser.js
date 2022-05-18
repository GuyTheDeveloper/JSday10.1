export default function ({ name, surname, group, gender }, counter) {
  let template = document.getElementById("template");
  let newTemplate = template.content.cloneNode(true);

  newTemplate.querySelector(".number").textContent = counter;
  newTemplate.querySelector(".name").textContent = name;
  newTemplate.querySelector(".surname").textContent = surname;
  newTemplate.querySelector(".group").textContent = group;
  newTemplate.querySelector(".gender").textContent = gender;

  return newTemplate;
}
