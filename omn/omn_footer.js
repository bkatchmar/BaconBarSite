var pageData = Denihan.Utils.getPageNameForOmniture();
s.pageName = "Bacon Bar " + pageData.omnName + " Page";
s.channel = "Bacon Bar";

if (pageData.formName) {
    s.eVar29 = pageData.formName;
}

s.server = "http://www.burkesbaconbar.com/";

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code = s.t(); if (s_code) document.write(s_code);
/*if(navigator.appVersion.indexOf('MSIE')>=0)document.write(unescape('%3C')+'\!-'+'-');*/