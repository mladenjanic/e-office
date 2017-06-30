
$( document ).ready(function(){
      tinymce.init({
          selector: 'textarea',
          height: 200,
          plugins: "codesample image link media textcolor",
          toolbar: "undo redo | fontselect fontsizeselect styleselect | bold italic | codesample image link | media forecolor backcolor",
          font_formats: 'Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats',
          fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt'
        });
  })