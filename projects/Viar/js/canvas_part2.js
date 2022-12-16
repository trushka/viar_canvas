
  var tool_undo = document.getElementById("undo");
  var tool_redo = document.getElementById("redo");
  var tool_photo_zoom_minus = document.getElementById("photo_zoom_minus");
  var tool_photo_zoom_plus = document.getElementById("photo_zoom_plus");
  var tool_turn_right = document.getElementById("turn_right");
  var tool_turn_left = document.getElementById("turn_left");
  var tool_cell_delete = document.getElementById("cell_delete");

  var canvas = document.getElementById("canvas");

  var editor = new Canvas3D(canvas);
  console.log(editor)
  editor.ColorCell = '#d2afac';
  //правки123
  editor.is_box_offset_2_x = true;
  editor.is_box_offset_1_y = true;
  editor.is_box_offset_2_y = true;
  //правки123

  // resize
  function resize()
  {
      var mn = canvas.parentElement.clientWidth;
      canvas.height = mn;
      canvas.width  = mn;
      editor.setSize(canvas.height,canvas.width);

      Canvas3D.prototype.render.call(editor);
  }

  var glob_rotated_img = null;
  // fix click
  $(document).on('click', '.tools>div', function(e){
      Canvas3D.prototype.render.call(editor);
      glob_rotated_img = editor.out(200,150);
  });

  // new
  function elementInViewport(el) {
      var top = el.offsetTop;
      var left = el.offsetLeft;
      var width = el.offsetWidth;
      var height = el.offsetHeight;

      while(el.offsetParent) {
          el = el.offsetParent;
          top += el.offsetTop;
          left += el.offsetLeft;
      }

      return (
          top < (window.pageYOffset + window.innerHeight) &&
          left < (window.pageXOffset + window.innerWidth) &&
          (top + height) > window.pageYOffset &&
          (left + width) > window.pageXOffset
      );
  }

  var time_wheel;
  document.addEventListener("wheel", function(e){
      if (e.target !== canvas)
      time_wheel = new Date().getTime();
  });

  function render()
  {
      if (time_wheel< new Date().getTime() - 500 && elementInViewport(canvas))
      {
          Canvas3D.prototype.render.call(editor);
      }
      window.requestAnimationFrame(render);
  }

  window.requestAnimationFrame(render);
  // endnew

  var old_clientWidth, old_clientHeight;

  setInterval(function()
  {
      if (canvas.parentElement.clientWidth !== old_clientWidth || canvas.parentElement.clientHeight !== old_clientHeight)
      {
      old_clientHeight = canvas.parentElement.clientHeight;
      old_clientWidth = canvas.parentElement.clientWidth;
      resize();
  }
  },10);

  window.addEventListener("orientationchange",resize,true);
  window.addEventListener("resize",resize,true);

  resize();

  editor.onchange = function(){//ловим изменения в редакторе
      editor.is_Redo()?tool_redo.classList.remove("disable"):tool_redo.classList.add("disable");
      editor.is_Undo()?tool_undo.classList.remove("disable"):tool_undo.classList.add("disable");
      if(editor.selection && editor.selection.cell && editor.selection.cell.resource)
      {   tool_cell_delete.classList.remove("disable");
          tool_photo_zoom_minus.classList.remove("disable");
          tool_photo_zoom_plus.classList.remove("disable");
          tool_turn_right.classList.remove("disable");
          tool_turn_left.classList.remove("disable");
      }else
      {   tool_cell_delete.classList.add("disable");
          tool_photo_zoom_minus.classList.add("disable");
          tool_photo_zoom_plus.classList.add("disable");
          tool_turn_right.classList.add("disable");
          tool_turn_left.classList.add("disable");
      }
  }



  editor.enable_drawing();// включить рисование. editor.disable_drawing(); отключить
  // editor.disable_drawing();
  editor.radius = 0;
  editor.between = 0.00;

  // function _sizeSetter(h,w) {
  //   let depth = (Math.max(h,w)) * 0.07;
  //   editor.setSizeBox(h,w,depth);
  //     resize();
  // }
  function setSize(centimeter_h,centimeter_w,centimeter_depth = 0)
  {
    
      size_centimeter_h = centimeter_h;
      size_centimeter_w = centimeter_w;
      if (!centimeter_depth) {
        centimeter_depth = size_centimeter_h * 0.07;
      } 
      var mx = Math.max(centimeter_h,centimeter_w);
      var h = (1 / mx) * centimeter_h;
      var w = (1 / mx) * centimeter_w;
      var depth = (1 / mx) * centimeter_depth;
      
      editor.setSizeBox(h,w,depth);
      resize();
  }

  function setForm(index)
  {



      var act_h, act_w, act_depth, act_price;
      var targetContainer = $(`.accordion__sizes-block[data-id="${index + 1}"] .kviz-group__item:first-child .calcSize:first-child`);
      setTimeout(()=>{
        targetContainer.click();

      }, 200)

      }
setForm(0)

  tool_cell_delete.onclick = function()
  {
      if (editor.selection.cell)editor.selection.cell.resource = undefined;
      editor.selection.delete();
  }

  tool_undo.onclick = function()
  {
      editor.Undo();
  }

  tool_redo.onclick = function()
  {
      editor.Redo();
  }

  tool_photo_zoom_minus.onclick = function()
  {
      editor.selection.cell.photo_zoom(Math.max(1, editor.selection.cell.resource.zoom - (editor.selection.cell.resource.zoom * 0.1)));
  }

  tool_photo_zoom_plus.onclick = function()
  {
      editor.selection.cell.photo_zoom(editor.selection.cell.resource.zoom + (editor.selection.cell.resource.zoom * 0.1));
  }

  tool_turn_right.onclick = function()
  {
      editor.selection.cell.photo_rotate(editor.selection.cell.resource.rotate + Math.PI/2);
  }

  tool_turn_left.onclick = function()
  {
      editor.selection.cell.photo_rotate(editor.selection.cell.resource.rotate - Math.PI/2);

  }

  function GetIcon(original)
  {
      var canvas = document.createElement("canvas");
      canvas.width = canvas.height = 80;
      var ctx = canvas.getContext('2d');
      var s = Math.max((canvas.width / original.width),(canvas.height / original.height));
      ctx.scale(s,s);
      ctx.drawImage(original, 0, 0);
      var r = new Image();
      r.src = canvas.toDataURL('image/jpeg', 0.95);

      // save image to future send
      base_64_img = original.src;

      return r;
  }


  function loadImg(src,callback)
  {
      var img = {};
      img.original = new Image();
      img.original.src = src;

      img.original.onload = function()
      {
          img.icon = GetIcon(img.original);
          callback(img);
      }

      img.original.onerror = function()
      {
          callback();
      }
  }


  var js_img_tab2 = '';
  function InitImgs(imgs,type)
  {

      imgs.forEach(function(item){
              if (item.isOpen)
              {
                  var inputFile = document.createElement('input');
                  inputFile.setAttribute('type', 'file');

                  item.element.appendChild(inputFile);

                  inputFile.setAttribute('multiple', 'multiple');
                  inputFile.setAttribute('accept', 'image/*');

                  inputFile.onchange = function()
                  {
                      CanvasMainImg = inputFile.files[0];

                      let pos = imgs.indexOf(item);

                      for (let file of inputFile.files)
                      {
                          if (pos < imgs.length)
                          {
                              let b = imgs[pos];

                              var reader = new FileReader();
                            // console.log(this)
                              reader.onload = function (e)
                              {
                                  loadImg(e.target.result,function(img){
                                          if (img)
                                          {
                                              b.element.src= img.original.src;
                                              js_img_tab2 = b.element.src;
                                              b.element.parentElement.setAttribute('class', 'is-load');
                                              // CanvasMainImg
                                              b.img = img;
                                              b.isLoad = true;

                                              // if (!editor.grid[0].resource)
                                              editor.grid[0].setImg(img);
                                          }else
                                          {
                                              b.isLoad = false;
                                          }
                                      });
                              }

                              reader.readAsDataURL(file);

                              // CanvasMainImg

                              pos++;
                          }

                      }
                  }

                  item.element.onclick = function()
                  {
                      inputFile.click();
                  }
              }

              DragAndDrop_img(item,type);

              if  (item.element.src !== "")
              {

                  loadImg(item.element.src,function(img){
                          if (img)
                          {
                              item.element.src= img.icon.src;
                              item.img = img;
                              item.isLoad = true;

                          }else
                          {
                              item.isLoad = false;

                          }
                      });
              }

            if (item.isLoad) {
              console.log(item)
            }

          
      });

      console.log(imgs)
  }


  var imgs = Object.values(document.getElementById("imgs").getElementsByTagName("img")).map(function(img)
  {
      return {element : img,isOpen:true};
  });

  InitImgs(imgs,"img");

  // $('.calcForm.active').trigger('click');

  var mult = $('body').data('multiplier');

  if (isNaN(mult)){
      mult = 1;
  }