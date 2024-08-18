export const loadInitialContent = () => {
  const content = document.querySelector('#content');

  //create new headline
  content.innerHTML = `<h2>Buy once, regret Twice</h2>
  <p>This is the content of loaded by js.,</p>
  `;
};
