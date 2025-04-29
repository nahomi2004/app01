import $ from 'jquery';

$(document).ready(function () {
  
  const mi_tabla = $('#tabla-ejemplo').DataTable();

  var url = "https://pkgstore.datahub.io/core/continent-codes/continent-codes_json/data/60d6baef1250bc2b01fd0148dccca518/continent-codes_json.json"

  $("#obtenerInformacion").click(function() {
    $.ajax({
      dataType: 'json',
      url: url
    }).then(function(data){
      data.forEach(function(item) {
        mi_tabla.row.add([
          item.Code,
          item.Name
        ]).draw(false);
      });
    });
  });

  $("#limpiarInformacion").click(function() {
    mi_tabla.clear().draw();
  })
});
