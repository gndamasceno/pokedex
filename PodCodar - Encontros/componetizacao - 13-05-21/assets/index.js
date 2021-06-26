

// CSS: rgb(255, 255, 255)

function generateColorList(numColors) {
  // let red = 0;
  // let green = 0;
  // let blue = 0;
  const listColors = [];

  // for (let i = 0; i < numColors; i++) {
  //   red++;
  //   if (red > 255) {
  //     red = 0;
  //     green++;
  //   }

  //   if (green > 255) {
  //     green = 0;
  //     blue++;
  //   }

  //   listColors.push(`rgb(${red}, ${green}, ${blue})`);
  // }
  for (let i = 0; i < numColors; i++) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    listColors.push(`rgb(${red}, ${green}, ${blue})`);
  }

  return listColors;
}

const app = document.getElementById("app");
const rainbowColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "cyan"
];

function makeColoredButton(color) {
  // cria um novo botão
  const btn = document.createElement("button");

  // alterar estilos
  btn.style.backgroundColor = color;
  btn.innerText = color;

  // btn.onclick = function () {
  //   document.body.style.backgroundColor = color
  // }

  // Arrow Function
  // Função de Aro?!
  btn.onclick = () => {
    document.body.style.backgroundColor = color;
  };

  return btn;
}

// 20 botões vermelhos

// for (let i = 0; i < 20; i++) {
//   const button = makeColoredButton('red')
//   app.append(button)
// }

// Rainbown Buttons

// for (i = 0; i < rainbowColors.length; i++) {
//    const color = rainbowColors[i]
// }

// for (const color of rainbowColors) {
//   const button = makeColoredButton(color);
//   app.append(button);
// }

const colorList = generateColorList(700);
for (const color of colorList) {
  const button = makeColoredButton(color);
  app.append(button);
}

// Mundo mágico do React

// Componente de função
//
// function Button({ color }) {
//   return (
//     <button style={`background-color: ${color}`}>
//   )
// }

// Componente de Classe
//
// class Button extends React.Component {
//   render() {
//     return (
//       <button style={`background-color: ${color}`}>
//     )
//   }
// }
