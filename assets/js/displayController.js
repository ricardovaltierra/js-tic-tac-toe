const DisplayController = (() => {
    function changeName(name){
      document.getElementsByClassName("current-player")[0].innerHTML = name;
    }
    return {changeName };
  })();

  export default DisplayController;