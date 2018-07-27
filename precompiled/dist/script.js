(function() {

  window.showRadio = function() {
    const context = {
      legend: "性別",
      name: "sex",
      inputs: [
        { label: "男性", id: "male", value: "m" },
        { label: "女性", id: "female", value: "f" },
      ]
    };
    var html = Handlebars.templates['radio'](context);
    document.getElementById('radio').innerHTML = html;
  }

  window.showSelect = function() {
    const context = {
      legend: "年齢",
      name: "age",
      id: "age",
      placeholder: "選択してください...",
      options: [
        { value: "1", name: "19歳以下" },
        { value: "2", name: "20〜39歳以下" },
        { value: "3", name: "40〜59歳以上" },
        { value: "4", name: "60〜79歳以下" },
        { value: "5", name: "80歳以上" },
      ]
    };
    var html = Handlebars.templates['select'](context);
    document.getElementById('select').innerHTML = html;
  }

  window.addEventListener("load", function() {
    window.showRadio();
    window.showSelect();
  });

}());