document.getElementById("fa_n01").classList.contains("formrun-has-success");
document.getElementById("fi_n01").classList.contains("formrun-has-success");
document.getElementById("f_cmp").classList.contains("formrun-has-success");
document.getElementById("f_ph").classList.contains("formrun-has-success");
document.getElementById("f_mail").classList.contains("formrun-has-success");

let result;
function GetQueryString() {
  var result = {};
  if (1 < window.location.search.length) {
    // 最初の1文字 (?記号) を除いた文字列を取得する
    var query = window.location.search.substring(1);

    // クエリの区切り記号 (&) で文字列を配列に分割する
    var parameters = query.split("&");

    for (var i = 0; i < parameters.length; i++) {
      // パラメータ名とパラメータ値に分割する
      var element = parameters[i].split("=");

      var paramName = decodeURIComponent(element[0]);
      var paramValue = decodeURIComponent(element[1]);

      // パラメータ名をキーとして連想配列に追加する
      result[paramName] = decodeURIComponent(paramValue);
    }
  }
  return result;
}
result = GetQueryString();
const fm = result["form"];
const fcontr = document.getElementById("f_req2");
const ftex = document.getElementById("f_req_cont");

if (fm == 2 || fm == 3 || fm == 6 || fm == 12) {
  fcontr.classList.add("formrun-has-success");
  ftex.classList.add("formrun-has-success");
  if (fm != 2) {
    fcontr.checked = true;
    ftex.value = fm + "ヶ月プランの契約をしたい";
  } else {
    document.getElementById("f_req1").checked = true;
    ftex.value = fm + "週間お試しプランをしたい";
  }
}
