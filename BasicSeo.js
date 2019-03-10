function Seo(url) {
	if(!url){
		alert("The string is empty or null")
	}
	else{
		  url=url.trim();
		  url = url.replace("ã¢", "a");
          url = url.replace("ã‚", "a");
          url = url.replace("ãª", "e");
          url = url.replace("ãš", "e");
          url = url.replace("ã§", "c");
          url = url.replace("ã‡", "c");
          url = url.replace("äÿ", "g");
          url = url.replace("ä", "g");
          url = url.replace("ä°", "i");
          url = url.replace("ä±", "i");
          url = url.replace("ã¶", "o");
          url = url.replace("ã–", "o");
          url = url.replace("åÿ", "s");
          url = url.replace("å", "s");
          url = url.replace("ã¼", "u");
          url = url.replace("ãœ", "u");
          url = url.replace("â", "a");
          url = url.replace("Â", "a");
          url = url.replace("ê", "e");
          url = url.replace("Ê", "e");
          url = url.replace("ç", "c");
          url = url.replace("Ç", "c");
          url = url.replace("ğ", "g");
          url = url.replace("Ğ", "g");
          url = url.replace("İ", "i");
          url = url.replace("I", "i");
          url = url.replace("ı", "i");
          url = url.replace("î", "i");
          url = url.replace("Î", "i");
          url = url.replace("î", "i");
          url = url.replace("ö", "o");
          url = url.replace("Ö", "o");
          url = url.replace("ş", "s");
          url = url.replace("Ş", "s");
          url = url.replace("ü", "u");
          url = url.replace("Ü", "u");
          url = url.replace(" ", "-");
		  url = url.toLowerCase();
		  while (url.indexOf("--") > -1 ){
			url=url.replace("--","-");
		  }
		url=url.replace(/[^a-z0-9\-]/g,'')   
		alert(url);
	}
}

