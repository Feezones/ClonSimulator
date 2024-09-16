function calcular() {
    var AT = document.getElementById("AT").value
    var CT = document.getElementById("CT").value
    var BL = document.getElementById("BL").value
    var EV = document.getElementById("EV").value
    var HP = document.getElementById("HP").value

    if (AT != null && AT != 0) {
        document.getElementById("valueAT1").textContent = parseFloat(AT * 0.03).toFixed(2)
        document.getElementById("valueAT2").textContent = parseFloat(AT * 0.06).toFixed(2)
        document.getElementById("valueAT3").textContent = parseFloat(AT * 0.09).toFixed(2)
        document.getElementById("valueAT4").textContent = parseFloat(AT * 0.14).toFixed(2)
        document.getElementById("valueAT5").textContent = parseFloat(AT * 0.19).toFixed(2)
        document.getElementById("valueAT6").textContent = parseFloat(AT * 0.24).toFixed(2)
        document.getElementById("valueAT7").textContent = parseFloat(AT * 0.34).toFixed(2)
        document.getElementById("valueAT8").textContent = parseFloat(AT * 0.44).toFixed(2)
        document.getElementById("valueAT9").textContent = parseFloat(AT * 0.54).toFixed(2)
        document.getElementById("valueAT10").textContent = parseFloat(AT * 0.69).toFixed(2)
        document.getElementById("valueAT11").textContent = parseFloat(AT * 0.84).toFixed(2)
        document.getElementById("valueAT12").textContent = parseFloat(AT * 0.99).toFixed(2)
        document.getElementById("valueAT13").textContent = parseFloat(AT * 1.14).toFixed(2)
        document.getElementById("valueAT14").textContent = parseFloat(AT * 1.29).toFixed(2)
        document.getElementById("valueAT15").textContent = parseFloat(AT * 1.44).toFixed(2)
    }

    if (CT != null && CT != 0) {
        CT = substituirVirgulaPorPonto(CT)
        document.getElementById("valueCT1").textContent = parseFloat(CT * 0.15).toFixed(2)
        document.getElementById("valueCT2").textContent = parseFloat(CT * 0.30).toFixed(2)
        document.getElementById("valueCT3").textContent = parseFloat(CT * 0.45).toFixed(2)
        document.getElementById("valueCT4").textContent = parseFloat(CT * 0.70).toFixed(2)
        document.getElementById("valueCT5").textContent = parseFloat(CT * 0.95).toFixed(2)
        document.getElementById("valueCT6").textContent = parseFloat(CT * 1.20).toFixed(2)
        document.getElementById("valueCT7").textContent = parseFloat(CT * 1.70).toFixed(2)
        document.getElementById("valueCT8").textContent = parseFloat(CT * 2.20).toFixed(2)
        document.getElementById("valueCT9").textContent = parseFloat(CT * 2.70).toFixed(2)
        document.getElementById("valueCT10").textContent = parseFloat(CT * 3.46).toFixed(2)
        document.getElementById("valueCT11").textContent = parseFloat(CT * 4.20).toFixed(2)
        document.getElementById("valueCT12").textContent = parseFloat(CT * 4.95).toFixed(2)
        document.getElementById("valueCT13").textContent = parseFloat(CT * 5.70).toFixed(2)
        document.getElementById("valueCT14").textContent = parseFloat(CT * 6.45).toFixed(2)
        document.getElementById("valueCT15").textContent = parseFloat(CT * 7.20).toFixed(2)
    }

    if (BL != null && BL != 0) {
        document.getElementById("valueBL1").textContent = (BL * 2)
        document.getElementById("valueBL2").textContent = (BL * 4)
        document.getElementById("valueBL3").textContent = (BL * 6)
        document.getElementById("valueBL4").textContent = (BL * 9)
        document.getElementById("valueBL5").textContent = (BL * 12)
        document.getElementById("valueBL6").textContent = (BL * 15)
        document.getElementById("valueBL7").textContent = (BL * 21)
        document.getElementById("valueBL8").textContent = (BL * 27)
        document.getElementById("valueBL9").textContent = (BL * 33)
        document.getElementById("valueBL10").textContent = (BL * 42)
        document.getElementById("valueBL11").textContent = (BL * 51)
        document.getElementById("valueBL12").textContent = (BL * 60)
        document.getElementById("valueBL13").textContent = (BL * 69)
        document.getElementById("valueBL14").textContent = (BL * 78)
        document.getElementById("valueBL15").textContent = (BL * 87)
    }

    if (EV != null && EV != 0) {
        document.getElementById("valueEV1").textContent = parseFloat(EV * 0.12).toFixed(2)
        document.getElementById("valueEV2").textContent = parseFloat(EV * 0.24).toFixed(2)
        document.getElementById("valueEV3").textContent = parseFloat(EV * 0.36).toFixed(2)
        document.getElementById("valueEV4").textContent = parseFloat(EV * 0.56).toFixed(2)
        document.getElementById("valueEV5").textContent = parseFloat(EV * 0.76).toFixed(2)
        document.getElementById("valueEV6").textContent = parseFloat(EV * 1.96).toFixed(2)
        document.getElementById("valueEV7").textContent = parseFloat(EV * 1.36).toFixed(2)
        document.getElementById("valueEV8").textContent = parseFloat(EV * 1.76).toFixed(2)
        document.getElementById("valueEV9").textContent = parseFloat(EV * 2.16).toFixed(2)
        document.getElementById("valueEV10").textContent = parseFloat(EV * 2.76).toFixed(2)
        document.getElementById("valueEV11").textContent = parseFloat(EV * 3.36).toFixed(2)
        document.getElementById("valueEV12").textContent = parseFloat(EV * 3.96).toFixed(2)
        document.getElementById("valueEV13").textContent = parseFloat(EV * 4.56).toFixed(2)
        document.getElementById("valueEV14").textContent = parseFloat(EV * 5.16).toFixed(2)
        document.getElementById("valueEV15").textContent = parseFloat(EV * 5.76).toFixed(2)
    }

    if (HP != null && HP != 0) {
        document.getElementById("valueHP1").textContent = parseFloat(HP * 0.02).toFixed(2)
        document.getElementById("valueHP2").textContent = parseFloat(HP * 0.04).toFixed(2)
        document.getElementById("valueHP3").textContent = parseFloat(HP * 0.06).toFixed(2)
        document.getElementById("valueHP4").textContent = parseFloat(HP * 0.09).toFixed(2)
        document.getElementById("valueHP5").textContent = parseFloat(HP * 0.12).toFixed(2)
        document.getElementById("valueHP6").textContent = parseFloat(HP * 0.15).toFixed(2)
        document.getElementById("valueHP7").textContent = parseFloat(HP * 0.19).toFixed(2)
        document.getElementById("valueHP8").textContent = parseFloat(HP * 0.23).toFixed(2)
        document.getElementById("valueHP9").textContent = parseFloat(HP * 0.27).toFixed(2)
        document.getElementById("valueHP10").textContent = parseFloat(HP * 0.31).toFixed(2)
        document.getElementById("valueHP11").textContent = parseFloat(HP * 0.35).toFixed(2)
        document.getElementById("valueHP12").textContent = parseFloat(HP * 0.39).toFixed(2)
        document.getElementById("valueHP13").textContent = parseFloat(HP * 0.44).toFixed(2)
        document.getElementById("valueHP14").textContent = parseFloat(HP * 0.49).toFixed(2)
        document.getElementById("valueHP15").textContent = parseFloat(HP * 0.54).toFixed(2)
    }
}


function abrirPopup() {
    document.getElementById('meuPopup').style.display = 'block';
  }
  
  function fecharPopup() {
    document.getElementById('meuPopup').style.display = 'none';
  }
  
  window.onload = function() {
    abrirPopup();
  };

  function substituirVirgulaPorPonto(numero) {
    // Verifica se o número contém uma vírgula e a substitui por um ponto
    let numeroCorrigido = numero.includes(',') ? numero.replace(',', '.') : numero;
    
    // Converte o valor corrigido em um número de ponto flutuante
    return parseFloat(numeroCorrigido);
}

  