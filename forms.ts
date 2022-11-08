function FormElementSelected(element: any) {
  try {
    if (element != undefined) {
      let mm: any;
      console.log(element, "element");

      for (let i = 0; i < element.path.length; i++) {
        if (
          element.path[i].tagName != undefined &&
          element.path[i].tagName === 'FORM'
        ) {
          selected_element(element.target);
          let popUp = document.getElementById('Churn360-Modal');
          let PcssSelector = document.getElementById('Churn360-p-css-selectors');
          let PinnerText = document.getElementById('Churn360-p-inner-text');
          let DoneBtn = document.getElementById("Churn360-done-btn")
          let PelementType = document.getElementById('Churn360-p-element-type');
          if (popUp && PcssSelector && DoneBtn && PinnerText && PelementType) {
            popUp.style.display = 'block';
            PcssSelector.innerText = select(element.target);
            PinnerText.innerText = element.target.innerText;
            PelementType.innerText = element.target.tagName;
            DoneBtn.addEventListener("click", (_: any) => {
              removeListener()
            })
          }
          break;
        }
      }
    }
  } catch (ex) {
    console.log(ex);
  }
}
