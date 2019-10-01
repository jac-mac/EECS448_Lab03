onClickFunction = function(){
  var background = document.querySelector('#backgroundColor')
  var border = document.querySelector('#borderColor')
  var paragraph = document.querySelector('#paragraph')

  if(background.value == 'Red' || background.value == 'red'){
    paragraph.style.backgroundColor = "#FF0000";
  }

  else if (background.value == 'Blue' || background.value == 'blue'){
  paragraph.style.backgroundColor = "#0000FF";
  }

  else if (background.value == 'Green' || backgroundColor.value == 'green'){
    paragraph.style.backgroundColor = "#00FF00";
  }

  if(border.value == 'Red' || border.value == 'red'){
    paragraph.style.border = "solid";
    paragraph.style.borderColor = "#FF0000";
  }

  else if(border.value == 'Blue' || border.value == 'blue'){
    paragraph.style.border = "solid";
    paragraph.style.borderColor = "#0000FF";
  }

  else if(border.value == 'Green' || border.value == 'green'){
    paragraph.style.border = "solid";
    paragraph.style.borderColor = "#00FF00";
  }

}
//green = #0080000
//blue = #0000FF
//red = #FF0000
