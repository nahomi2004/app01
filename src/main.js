import jQuery from 'jquery';
import dt from '../node_modules/datatables.net-dt'; // importa el estilo también
import '../node_modules/datatables.net-dt/css/dataTables.dataTables.css';



jQuery(document).ready(function () {
  
  if (typeof jQuery != 'undefined') {  
    // jQuery is loaded => print the version
    alert(jQuery.fn.jquery);
  }

  const mi_tabla = jQuery('#tabla-ejemplo').DataTable();

  var url = "https://pkgstore.datahub.io/core/continent-codes/continent-codes_json/data/60d6baef1250bc2b01fd0148dccca518/continent-codes_json.json";

  jQuery("#obtenerInformacion").click(function() {
    jQuery.ajax({
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

  jQuery("#limpiarInformacion").click(function() {
    mi_tabla.clear().draw();
  });

});
