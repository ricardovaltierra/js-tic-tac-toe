const DisplayController = () => {
    const xSymbol = '<i class="fas fa-times fa-7x">';
    const oSymbol = '<i class="far fa-circle fa-7x"></i>';
    const sclas = (s) => (s === 'X' ? xSymbol : oSymbol);
    function changeName(name) {
      document.getElementsByClassName('current-player')[0].innerHTML = name;
    }
  
    function addSymbol(symb, index) {
      document.getElementById(`row-${index}`).innerHTML = sclas(symb);
    }
    return { changeName, addSymbol };
  };
  
  export default DisplayController;