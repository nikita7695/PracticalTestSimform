function InitBasicDataTable(selector, title) {
  if (!$.fn.DataTable.isDataTable(selector)) {
    $(selector).dataTable({
      scrollY: 140,
      fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
        var index = iDisplayIndexFull + 1;
        $("td:first", nRow).html(index);
        return nRow;
      },
      scrollX: true,
      responsive: true,
      info: true,
      dom:
        "<'row mb-3'<'col-sm-12 col-md-6 d-flex align-items-center justify-content-start'f><'col-sm-12 col-md-6 d-flex align-items-center justify-content-end'lB>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
      buttons: [
        {
          extend: 'excelHtml5',
          text: 'Excel',
          //title: selector + "_" + GetDateTime(),
          title: title + "_" + GetDateTime(),
          titleAttr: 'Generate Excel',
          className: 'btn-outline-success btn-sm mr-1',
          exportOptions: {
            columns: "thead th:not(.hideonPrint)"
          },
          customizeData: function (data) {
            var col = data.body;
            for (i = 0; i < col.length; i++) {
              col[i][0] = i + 1;
            }
          }
        }
      ],
      lengthMenu: [[100, 150, 200, 250, 500, 1000, -1], [100, 150, 200, 250, 500, 1000, "All"]],
      oLanguage: {
        sLengthMenu: "Show _MENU_",
      },
    });
  }
}

function GetDateTime() {
  var now = new Date();
  var datetime = now.getFullYear() + ("0" + (now.getMonth() + 1)).slice(-2) + ("0" + now.getDate()).slice(-2);
  datetime += '_' + ("0" + now.getHours()).slice(-2) + ("0" + now.getMinutes()).slice(-2) + ("0" + now.getSeconds()).slice(-2);
  return datetime;
}
