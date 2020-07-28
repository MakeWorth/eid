// Alhamdulillah
//Search Loc->Time->Masjid name->Webcard
$(document).ready(function(){
    var $rows = $('#masjidTable tr');
    $("#masjidSearch").on("keyup", function(){
        var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',

        reg = RegExp(val, 'im'),
        text;
    
      $rows.show().filter(function() {
        text = $(this).text().replace(/\s+/g, ' ');
        return !reg.test(text);
      }).hide();
    });
});
